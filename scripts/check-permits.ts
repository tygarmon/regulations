#!/usr/bin/env npx tsx
/**
 * Monthly permit monitoring script.
 *
 * Checks every state's regulationDocUrl for:
 *   1. Broken URLs (4xx/5xx or network error)
 *   2. Changed documents (ETag or Last-Modified header differs from baseline)
 *   3. Permits expiring within 90 days (uses permitExpires field)
 *   4. States not verified in 12+ months (uses lastVerified field)
 *
 * On each run:
 *   - Reads  data/permit-hashes.json  as the baseline
 *   - Writes data/permit-hashes.json  with updated values
 *   - Writes data/check-report.md     for GitHub Actions to post as an Issue
 *
 * Run manually:  npx tsx scripts/check-permits.ts
 */

import * as https from "https";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { ALL_STATES } from "../data/regulations/index";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface HashEntry {
  url: string;
  etag?: string;
  lastModified?: string;
  lastChecked: string;
}

type HashStore = Record<string, HashEntry>;

interface UrlResult {
  stateCode: string;
  stateName: string;
  url: string;
  status: number | null;
  etag: string | null;
  lastModified: string | null;
  error: string | null;
  broken: boolean;
  changed: boolean; // only true if we have a baseline to compare against
}

interface ExpiryAlert {
  stateCode: string;
  stateName: string;
  permitExpires: string;
  daysUntilExpiry: number;
}

interface StalenessAlert {
  stateCode: string;
  stateName: string;
  lastVerified: string;
  monthsStale: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const HASHES_PATH = path.join(__dirname, "../data/permit-hashes.json");
const REPORT_PATH = path.join(__dirname, "../data/check-report.md");

function loadHashes(): HashStore {
  try {
    const raw = fs.readFileSync(HASHES_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    // Remove the _comment key
    const { _comment: _, ...hashes } = parsed;
    return hashes as HashStore;
  } catch {
    return {};
  }
}

function saveHashes(store: HashStore) {
  const out = {
    _comment:
      "Auto-maintained by scripts/check-permits.ts — do not edit manually. Stores last-seen HTTP ETag/Last-Modified headers for each state's regulationDocUrl so the monthly check can detect when permit documents change.",
    ...store,
  };
  fs.writeFileSync(HASHES_PATH, JSON.stringify(out, null, 2) + "\n");
}

function headRequest(url: string): Promise<{
  status: number;
  etag: string | null;
  lastModified: string | null;
}> {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const options = {
      method: "HEAD",
      headers: { "User-Agent": "stormwater-directory-bot/1.0 (data accuracy check)" },
      timeout: 15_000,
    };
    const req = lib.request(url, options, (res) => {
      // Follow one redirect manually
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(headRequest(res.headers.location));
        return;
      }
      resolve({
        status: res.statusCode ?? 0,
        etag: res.headers["etag"] ?? null,
        lastModified: res.headers["last-modified"] ?? null,
      });
    });
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timed out"));
    });
    req.end();
  });
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

async function checkUrls(store: HashStore): Promise<{
  results: UrlResult[];
  updatedStore: HashStore;
}> {
  const updatedStore: HashStore = { ...store };
  const results: UrlResult[] = [];
  const today = new Date().toISOString().slice(0, 10);

  for (const state of ALL_STATES) {
    const url = state.officialLinks.regulationDocUrl;
    const key = state.stateCode;
    const baseline = store[key];

    try {
      const { status, etag, lastModified } = await headRequest(url);
      const broken = status === null || status >= 400;

      // Detect changes only when we have a baseline to compare against
      const changed =
        !broken &&
        !!baseline &&
        !!(
          (etag && baseline.etag && etag !== baseline.etag) ||
          (lastModified && baseline.lastModified && lastModified !== baseline.lastModified)
        );

      // Always update the store with latest values
      updatedStore[key] = {
        url,
        etag: etag ?? baseline?.etag,
        lastModified: lastModified ?? baseline?.lastModified,
        lastChecked: today,
      };

      results.push({
        stateCode: key,
        stateName: state.stateName,
        url,
        status,
        etag,
        lastModified,
        error: null,
        broken,
        changed,
      });
    } catch (err) {
      results.push({
        stateCode: key,
        stateName: state.stateName,
        url,
        status: null,
        etag: null,
        lastModified: null,
        error: err instanceof Error ? err.message : String(err),
        broken: true,
        changed: false,
      });
    }

    // Be polite to state servers — small delay between requests
    await delay(400);
  }

  return { results, updatedStore };
}

function checkExpirations(): ExpiryAlert[] {
  const now = Date.now();
  const alerts: ExpiryAlert[] = [];

  for (const state of ALL_STATES) {
    if (!state.permitExpires) continue;
    const expiry = new Date(state.permitExpires).getTime();
    const daysUntilExpiry = Math.floor((expiry - now) / 86_400_000);
    if (daysUntilExpiry <= 90) {
      alerts.push({
        stateCode: state.stateCode,
        stateName: state.stateName,
        permitExpires: state.permitExpires,
        daysUntilExpiry,
      });
    }
  }

  return alerts.sort((a, b) => a.daysUntilExpiry - b.daysUntilExpiry);
}

function checkStaleness(): StalenessAlert[] {
  const now = Date.now();
  const alerts: StalenessAlert[] = [];

  for (const state of ALL_STATES) {
    if (!state.lastVerified || state.lastVerified === "pending") continue;
    const verifiedDate = new Date(state.lastVerified + "-01").getTime();
    const monthsStale = Math.floor((now - verifiedDate) / (86_400_000 * 30));
    if (monthsStale >= 12) {
      alerts.push({
        stateCode: state.stateCode,
        stateName: state.stateName,
        lastVerified: state.lastVerified,
        monthsStale,
      });
    }
  }

  return alerts.sort((a, b) => b.monthsStale - a.monthsStale);
}

function statesWithNoExpiry(): string[] {
  return ALL_STATES.filter((s) => !s.permitExpires).map(
    (s) => `${s.stateCode} (${s.stateName})`
  );
}

// ---------------------------------------------------------------------------
// Report generation
// ---------------------------------------------------------------------------

function buildReport(
  urlResults: UrlResult[],
  expirations: ExpiryAlert[],
  stale: StalenessAlert[],
  noExpiry: string[]
): string {
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const broken = urlResults.filter((r) => r.broken);
  const changed = urlResults.filter((r) => r.changed);
  const allClear =
    broken.length === 0 &&
    changed.length === 0 &&
    expirations.length === 0 &&
    stale.length === 0;

  const lines: string[] = [];
  lines.push(`# Monthly Permit Review — ${date}`);
  lines.push("");
  lines.push(
    `This issue was auto-generated by the monthly permit check workflow. ` +
      `Review each flagged item below and update \`data/regulations/[STATE].ts\` as needed.`
  );
  lines.push("");

  if (allClear) {
    lines.push("## ✅ All Clear");
    lines.push("");
    lines.push(
      "No broken URLs, document changes, expiring permits, or stale data detected. No action required this month."
    );
    lines.push("");
  }

  // --- Broken URLs ---
  if (broken.length > 0) {
    lines.push(`## 🔴 Broken URLs (${broken.length})`);
    lines.push(
      "These permit document URLs returned an error. The links on the site may be broken — verify and update `regulationDocUrl` in the state file."
    );
    lines.push("");
    for (const r of broken) {
      const detail = r.error ? `Error: ${r.error}` : `HTTP ${r.status}`;
      lines.push(`- [ ] **${r.stateCode} — ${r.stateName}** — ${detail}`);
      lines.push(`  - URL: ${r.url}`);
    }
    lines.push("");
  }

  // --- Changed Documents ---
  if (changed.length > 0) {
    lines.push(`## 🟡 Document Changes Detected (${changed.length})`);
    lines.push(
      "These URLs returned different ETag or Last-Modified headers compared to last month. The permit document may have been updated — open the link and check for substantive changes."
    );
    lines.push("");
    for (const r of changed) {
      lines.push(`- [ ] **${r.stateCode} — ${r.stateName}**`);
      lines.push(`  - URL: ${r.url}`);
      if (r.lastModified) lines.push(`  - Last-Modified: ${r.lastModified}`);
    }
    lines.push("");
  }

  // --- Expiring Permits ---
  if (expirations.length > 0) {
    lines.push(`## 🟠 Permits Expiring Within 90 Days (${expirations.length})`);
    lines.push(
      "These permits are due for reissuance soon. Watch the agency website for a new permit and update the state data file when reissued."
    );
    lines.push("");
    for (const e of expirations) {
      const urgency = e.daysUntilExpiry <= 0 ? "🚨 EXPIRED" : e.daysUntilExpiry <= 30 ? "🔴" : "🟠";
      lines.push(
        `- [ ] ${urgency} **${e.stateCode} — ${e.stateName}** — expires ${e.permitExpires} (${e.daysUntilExpiry} days)`
      );
    }
    lines.push("");
  }

  // --- Stale Data ---
  if (stale.length > 0) {
    lines.push(`## 🔵 Stale Data — Not Verified in 12+ Months (${stale.length})`);
    lines.push(
      "These states haven't been verified in over a year. Spot-check their permit pages and update `lastVerified` when confirmed current."
    );
    lines.push("");
    for (const s of stale) {
      lines.push(
        `- [ ] **${s.stateCode} — ${s.stateName}** — last verified ${s.lastVerified} (${s.monthsStale} months ago)`
      );
    }
    lines.push("");
  }

  // --- Missing Expiry Dates ---
  if (noExpiry.length > 0) {
    lines.push(`## ℹ️ States Without permitExpires Set (${noExpiry.length})`);
    lines.push(
      "These states don't have a `permitExpires` date in their data file. Adding it enables proactive expiry alerts in future months."
    );
    lines.push("");
    lines.push(noExpiry.join(", "));
    lines.push("");
  }

  lines.push("---");
  lines.push(
    "_Generated by [monthly-data-check.yml](../../actions/workflows/monthly-data-check.yml). " +
      "Close this issue when all items have been reviewed._"
  );

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("🔍 Stormwater Directory — monthly permit check\n");

  const baseline = loadHashes();
  const isFirstRun = Object.keys(baseline).length === 0;
  if (isFirstRun) {
    console.log("ℹ️  No baseline found — this is the first run. Building baseline only (no change alerts).\n");
  }

  console.log(`Checking ${ALL_STATES.length} state permit URLs...`);
  const { results: urlResults, updatedStore } = await checkUrls(baseline);

  const broken = urlResults.filter((r) => r.broken);
  const changed = urlResults.filter((r) => r.changed);
  const expirations = checkExpirations();
  const stale = checkStaleness();
  const noExpiry = statesWithNoExpiry();

  // Save updated hashes
  saveHashes(updatedStore);
  console.log(`✅ Hashes updated → ${HASHES_PATH}`);

  // Build and save the markdown report
  const report = buildReport(urlResults, expirations, stale, noExpiry);
  fs.writeFileSync(REPORT_PATH, report);
  console.log(`📄 Report written → ${REPORT_PATH}`);

  // Summary
  console.log("\n📊 Summary:");
  console.log(`  🔴 Broken URLs:              ${broken.length}`);
  console.log(`  🟡 Changed documents:        ${changed.length}`);
  console.log(`  🟠 Permits expiring ≤90 days: ${expirations.length}`);
  console.log(`  🔵 Stale (12+ months):       ${stale.length}`);
  console.log(`  ℹ️  Missing expiry dates:     ${noExpiry.length}`);

  if (broken.length === 0 && changed.length === 0 && expirations.length === 0 && stale.length === 0) {
    console.log("\n🟢 All clear — no action required this month.");
  } else {
    console.log("\n⚠️  Items need review — see check-report.md");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
