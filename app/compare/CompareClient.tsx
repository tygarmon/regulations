"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ALL_STATES } from "@/data/regulations";
import { StateSelector } from "@/components/StateSelector";
import { ComparisonTable } from "@/components/ComparisonTable";
import { StateRegulation } from "@/data/types";

export function CompareClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCodes, setSelectedCodes] = useState<string[]>(() => {
    const param = searchParams.get("states");
    if (!param) return [];
    return param
      .split(",")
      .map((c) => c.trim().toUpperCase())
      .filter((c) => ALL_STATES.some((s) => s.stateCode === c))
      .slice(0, 4);
  });

  const updateUrl = useCallback(
    (codes: string[]) => {
      const params = new URLSearchParams();
      if (codes.length > 0) params.set("states", codes.join(","));
      router.replace(`/compare${codes.length ? "?" + params.toString() : ""}`, {
        scroll: false,
      });
    },
    [router]
  );

  useEffect(() => {
    updateUrl(selectedCodes);
  }, [selectedCodes, updateUrl]);

  const selectedStates: StateRegulation[] = selectedCodes
    .map((code) => ALL_STATES.find((s) => s.stateCode === code))
    .filter((s): s is StateRegulation => s !== undefined);

  function handleChange(codes: string[]) {
    setSelectedCodes(codes);
  }

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

  return (
    <div>
      {/* State selector */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Select up to 4 states to compare
        </label>
        <StateSelector
          allStates={ALL_STATES}
          selected={selectedCodes}
          onChange={handleChange}
          max={4}
        />
      </div>

      {/* Actions */}
      {selectedCodes.length > 0 && (
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
            onClick={() => setSelectedCodes([])}
            className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100 transition-colors"
          >
            Clear all
          </button>
          <p className="text-sm text-slate-500">
            Rows with an amber indicator differ across selected states.
          </p>
        </div>
      )}

      {/* Comparison table */}
      <ComparisonTable states={selectedStates} />
    </div>
  );
}
