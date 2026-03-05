"use client";

import { useState, useRef, useEffect } from "react";
import { LocalRegulation } from "@/data/localTypes";

const TYPE_COLORS: Record<string, string> = {
  city: "bg-teal-100 text-teal-700",
  county: "bg-green-100 text-green-700",
  district: "bg-purple-100 text-purple-700",
  authority: "bg-orange-100 text-orange-700",
};

type Props = {
  allJurisdictions: LocalRegulation[];
  selected: string[]; // localCodes
  onChange: (codes: string[]) => void;
  max?: number;
};

export function LocalSelector({
  allJurisdictions,
  selected,
  onChange,
  max = 4,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = allJurisdictions.filter(
    (j) =>
      j.localName.toLowerCase().includes(query.toLowerCase()) ||
      j.localCode.toLowerCase().includes(query.toLowerCase()) ||
      j.stateCode.toLowerCase().includes(query.toLowerCase())
  );

  function toggle(localCode: string) {
    if (selected.includes(localCode)) {
      onChange(selected.filter((c) => c !== localCode));
    } else if (selected.length < max) {
      onChange([...selected, localCode]);
    }
  }

  const selectedJurisdictions = allJurisdictions.filter((j) =>
    selected.includes(j.localCode)
  );

  return (
    <div className="relative" ref={ref}>
      {/* Selected pills */}
      <div
        className="flex min-h-[44px] flex-wrap items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 cursor-pointer shadow-sm hover:border-teal-300"
        onClick={() => setOpen(!open)}
      >
        {selectedJurisdictions.length === 0 && (
          <span className="text-sm text-slate-400">
            Select up to {max} jurisdictions to compare...
          </span>
        )}
        {selectedJurisdictions.map((j) => (
          <span
            key={j.localCode}
            className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-0.5 text-sm font-medium text-teal-800"
          >
            {j.localName}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggle(j.localCode);
              }}
              className="ml-0.5 text-teal-600 hover:text-teal-900"
            >
              ×
            </button>
          </span>
        ))}
        {selectedJurisdictions.length < max && (
          <span className="text-xs text-slate-400 ml-1">
            ({max - selectedJurisdictions.length} more)
          </span>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-lg">
          <div className="p-2 border-b border-slate-100">
            <input
              type="text"
              placeholder="Search jurisdictions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-teal-100"
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <ul className="max-h-60 overflow-y-auto p-1">
            {filtered.map((j) => {
              const isSelected = selected.includes(j.localCode);
              const isDisabled = !isSelected && selected.length >= max;
              return (
                <li
                  key={j.localCode}
                  onClick={() => !isDisabled && toggle(j.localCode)}
                  className={`flex items-center justify-between rounded px-3 py-2 text-sm cursor-pointer ${
                    isSelected
                      ? "bg-teal-50 text-teal-700 font-medium"
                      : isDisabled
                      ? "text-slate-300 cursor-not-allowed"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`rounded px-1.5 py-0.5 text-xs font-medium ${TYPE_COLORS[j.type] ?? "bg-slate-100 text-slate-600"}`}
                    >
                      {j.type}
                    </span>
                    <span>{j.localName}</span>
                    <span className="text-slate-400 text-xs">{j.stateCode}</span>
                  </span>
                  {isSelected && <span className="text-teal-500">✓</span>}
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-3 py-4 text-center text-sm text-slate-400">
                No jurisdictions found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
