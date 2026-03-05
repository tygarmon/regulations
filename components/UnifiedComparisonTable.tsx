import React from "react";
import { StateRegulation } from "@/data/types";
import { LocalRegulation, UNIFIED_COMPARISON_FIELDS } from "@/data/localTypes";
import { isPending } from "@/lib/utils";

const GROUP_LABELS: Record<string, string> = {
  permit: "Permit",
  waterquality: "Water Quality",
  swppp: "SWPPP",
  inspections: "Inspections",
  zones: "Design & Zones",
};

const GROUP_COLORS: Record<string, string> = {
  permit: "bg-blue-50 text-blue-700",
  waterquality: "bg-teal-50 text-teal-700",
  swppp: "bg-indigo-50 text-indigo-700",
  inspections: "bg-purple-50 text-purple-700",
  zones: "bg-amber-50 text-amber-700",
};

type Props = {
  items: (StateRegulation | LocalRegulation)[];
};

function isLocal(item: StateRegulation | LocalRegulation): item is LocalRegulation {
  return "localCode" in item;
}

function getItemId(item: StateRegulation | LocalRegulation): string {
  return isLocal(item)
    ? `${item.stateCode.toLowerCase()}-${item.localCode}`
    : item.stateCode;
}

function getItemDisplayName(item: StateRegulation | LocalRegulation): string {
  return isLocal(item) ? item.localName : item.stateName;
}

function getItemSubtitle(item: StateRegulation | LocalRegulation): string {
  return isLocal(item) ? item.localPermit.submittalBody : item.agencyAbbr;
}

export function UnifiedComparisonTable({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400">
        Select at least one state or jurisdiction above to see regulations.
      </div>
    );
  }

  // Group fields by group key, preserving order
  const groupedFields: { group: string; fields: typeof UNIFIED_COMPARISON_FIELDS }[] = [];
  let currentGroup = "";
  for (const field of UNIFIED_COMPARISON_FIELDS) {
    if (field.group !== currentGroup) {
      groupedFields.push({ group: field.group, fields: [] });
      currentGroup = field.group;
    }
    groupedFields[groupedFields.length - 1].fields.push(field);
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="sticky left-0 bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 w-44">
              Field
            </th>
            {items.map((item) => {
              const id = getItemId(item);
              const local = isLocal(item);
              return (
                <th
                  key={id}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider min-w-[200px]"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        local
                          ? "bg-teal-100 text-teal-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {local ? "Local" : "State"}
                    </span>
                  </div>
                  <div className="font-bold text-sm text-slate-800">
                    {getItemDisplayName(item)}
                  </div>
                  <div className="font-normal normal-case text-slate-500 text-xs">
                    {getItemSubtitle(item)}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {groupedFields.map(({ group, fields }) => (
            <React.Fragment key={group}>
              {/* Group header row */}
              <tr className="bg-slate-100">
                <td
                  colSpan={items.length + 1}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${GROUP_COLORS[group]}`}
                >
                  {GROUP_LABELS[group] ?? group}
                </td>
              </tr>

              {fields.map((field, i) => {
                const values = items.map((item) => field.getValue(item));
                const uniqueValues = new Set(values.filter((v) => !isPending(v)));
                const hasDifferences = uniqueValues.size > 1;

                return (
                  <tr
                    key={field.key}
                    className={`border-b border-slate-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    } ${hasDifferences ? "border-l-2 border-l-amber-400" : ""}`}
                  >
                    <td className="sticky left-0 bg-inherit px-4 py-3 font-medium text-slate-600 text-xs">
                      {field.label}
                      {hasDifferences && (
                        <span
                          className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-400"
                          title="Values differ"
                        />
                      )}
                    </td>
                    {values.map((value, j) => {
                      const pending = isPending(value);
                      const isNA = value.startsWith("N/A") || value.startsWith("Not specified");
                      return (
                        <td
                          key={getItemId(items[j])}
                          className={`px-4 py-3 align-top ${
                            pending
                              ? "italic text-amber-500"
                              : isNA
                              ? "text-slate-400 text-xs"
                              : "text-slate-700"
                          }`}
                        >
                          {pending ? "Pending" : value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
