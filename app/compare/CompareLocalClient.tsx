"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ALL_STATES } from "@/data/regulations";
import { ALL_LOCAL_JURISDICTIONS } from "@/data/local";
import { LocalSelector } from "@/components/LocalSelector";
import { StateSelector } from "@/components/StateSelector";
import { UnifiedComparisonTable } from "@/components/UnifiedComparisonTable";
import { StateRegulation } from "@/data/types";
import { LocalRegulation } from "@/data/localTypes";

type Props = {
  mode: "local" | "mixed";
};

export function CompareLocalClient({ mode }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local jurisdiction selections (localCodes like "austin", "houston")
  const [selectedLocalCodes, setSelectedLocalCodes] = useState<string[]>(() => {
    const param = searchParams.get("places");
    if (!param) return [];
    // param format: "tx-austin,tx-houston"
    return param
      .split(",")
      .map((p) => p.trim())
      .map((p) => p.split("-").slice(1).join("-")) // strip state prefix → "austin"
      .filter((code) => ALL_LOCAL_JURISDICTIONS.some((j) => j.localCode === code))
      .slice(0, 4);
  });

  // State selections (for mixed mode)
  const [selectedStateCodes, setSelectedStateCodes] = useState<string[]>(() => {
    if (mode !== "mixed") return [];
    const param = searchParams.get("states");
    if (!param) return [];
    return param
      .split(",")
      .map((c) => c.trim().toUpperCase())
      .filter((c) => ALL_STATES.some((s) => s.stateCode === c))
      .slice(0, 2);
  });

  const updateUrl = useCallback(
    (localCodes: string[], stateCodes: string[]) => {
      const params = new URLSearchParams();
      params.set("mode", mode);

      if (localCodes.length > 0) {
        // Re-add state prefix for URL
        const places = localCodes.map((code) => {
          const j = ALL_LOCAL_JURISDICTIONS.find((j) => j.localCode === code);
          return j ? `${j.stateCode.toLowerCase()}-${code}` : code;
        });
        params.set("places", places.join(","));
      }

      if (mode === "mixed" && stateCodes.length > 0) {
        params.set("states", stateCodes.join(","));
      }

      router.replace(`/compare?${params.toString()}`, { scroll: false });
    },
    [router, mode]
  );

  useEffect(() => {
    updateUrl(selectedLocalCodes, selectedStateCodes);
  }, [selectedLocalCodes, selectedStateCodes, updateUrl]);

  // Build the unified items array: states first, then local
  const selectedStates: StateRegulation[] = selectedStateCodes
    .map((code) => ALL_STATES.find((s) => s.stateCode === code))
    .filter((s): s is StateRegulation => s !== undefined);

  const selectedLocals: LocalRegulation[] = selectedLocalCodes
    .map((code) => ALL_LOCAL_JURISDICTIONS.find((j) => j.localCode === code))
    .filter((j): j is LocalRegulation => j !== undefined);

  const allItems: (StateRegulation | LocalRegulation)[] = [
    ...selectedStates,
    ...selectedLocals,
  ];

  const totalSelected = selectedLocalCodes.length + selectedStateCodes.length;

  const [copied, setCopied] = useState(false);

  function copyLink() {
    const url = window.location.href;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  }

  function fallbackCopy(url: string) {
    const el = document.createElement("textarea");
    el.value = url;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const maxLocal = mode === "mixed" ? 3 : 4;
  const maxState = 2;

  return (
    <div>
      {/* Selectors */}
      {mode === "mixed" && (
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Select up to {maxState} states
          </label>
          <StateSelector
            allStates={ALL_STATES}
            selected={selectedStateCodes}
            onChange={setSelectedStateCodes}
            max={maxState}
          />
        </div>
      )}

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {mode === "mixed"
            ? `Select up to ${maxLocal} local jurisdictions`
            : "Select up to 4 local jurisdictions to compare"}
        </label>
        <LocalSelector
          allJurisdictions={ALL_LOCAL_JURISDICTIONS}
          selected={selectedLocalCodes}
          onChange={setSelectedLocalCodes}
          max={maxLocal}
        />
      </div>

      {/* Actions */}
      {totalSelected > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            onClick={copyLink}
            className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
              copied
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {copied ? "✓ Link copied!" : "Copy shareable link"}
          </button>
          <button
            onClick={() => {
              setSelectedLocalCodes([]);
              setSelectedStateCodes([]);
            }}
            className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100 transition-colors"
          >
            Clear all
          </button>
          <p className="text-sm text-slate-500">
            Rows with an amber indicator differ across selections.
          </p>
        </div>
      )}

      {/* Comparison table */}
      <UnifiedComparisonTable items={allItems} />
    </div>
  );
}
