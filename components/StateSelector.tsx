"use client";

import { useState, useRef, useEffect } from "react";
import { StateRegulation } from "@/data/types";

type Props = {
  allStates: StateRegulation[];
  selected: string[]; // state codes
  onChange: (codes: string[]) => void;
  max?: number;
};

export function StateSelector({ allStates, selected, onChange, max = 4 }: Props) {
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

  const filtered = allStates.filter(
    (s) =>
      s.stateName.toLowerCase().includes(query.toLowerCase()) ||
      s.stateCode.toLowerCase().includes(query.toLowerCase())
  );

  function toggle(code: string) {
    if (selected.includes(code)) {
      onChange(selected.filter((c) => c !== code));
    } else if (selected.length < max) {
      onChange([...selected, code]);
    }
  }

  const selectedStates = allStates.filter((s) => selected.includes(s.stateCode));

  return (
    <div className="relative" ref={ref}>
      {/* Selected pills */}
      <div
        className="flex min-h-[44px] flex-wrap items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 cursor-pointer shadow-sm hover:border-blue-300"
        onClick={() => setOpen(!open)}
      >
        {selectedStates.length === 0 && (
          <span className="text-sm text-slate-400">
            Select up to {max} states to compare...
          </span>
        )}
        {selectedStates.map((s) => (
          <span
            key={s.stateCode}
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800"
          >
            {s.stateCode}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggle(s.stateCode);
              }}
              className="ml-0.5 text-blue-600 hover:text-blue-900"
            >
              ×
            </button>
          </span>
        ))}
        {selectedStates.length < max && (
          <span className="text-xs text-slate-400 ml-1">
            ({max - selectedStates.length} more)
          </span>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-lg">
          <div className="p-2 border-b border-slate-100">
            <input
              type="text"
              placeholder="Search states..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-100"
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <ul className="max-h-60 overflow-y-auto p-1">
            {filtered.map((s) => {
              const isSelected = selected.includes(s.stateCode);
              const isDisabled = !isSelected && selected.length >= max;
              return (
                <li
                  key={s.stateCode}
                  onClick={() => !isDisabled && toggle(s.stateCode)}
                  className={`flex items-center justify-between rounded px-3 py-2 text-sm cursor-pointer ${
                    isSelected
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : isDisabled
                      ? "text-slate-300 cursor-not-allowed"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>
                    <span className="font-mono font-medium">{s.stateCode}</span>{" "}
                    {s.stateName}
                  </span>
                  {isSelected && <span className="text-blue-500">✓</span>}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
