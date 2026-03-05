"use client";

import { useState } from "react";
import { StateRegulation } from "@/data/types";
import { StateCard } from "./StateCard";

type Props = {
  states: StateRegulation[];
};

export function StateGrid({ states }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "verified" | "pending">("all");

  const filtered = states.filter((s) => {
    const matchesQuery =
      s.stateName.toLowerCase().includes(query.toLowerCase()) ||
      s.stateCode.toLowerCase().includes(query.toLowerCase()) ||
      s.agencyAbbr.toLowerCase().includes(query.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "verified" && s.lastVerified !== "pending") ||
      (filter === "pending" && s.lastVerified === "pending");
    return matchesQuery && matchesFilter;
  });

  return (
    <div>
      {/* Search and filter bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Search by state name, code, or agency..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
        <div className="flex gap-2">
          {(["all", "verified", "pending"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm text-slate-500">
        Showing {filtered.length} of {states.length} states
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((state) => (
          <StateCard key={state.stateCode} state={state} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-slate-400">
          No states match your search.
        </div>
      )}
    </div>
  );
}
