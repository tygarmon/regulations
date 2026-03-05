import { StateRegulation, COMPARISON_FIELDS } from "@/data/types";
import { isPending } from "@/lib/utils";

type Props = {
  states: StateRegulation[];
};

export function ComparisonTable({ states }: Props) {
  if (states.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400">
        Select at least one state above to see regulations.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="sticky left-0 bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 w-44">
              Field
            </th>
            {states.map((s) => (
              <th
                key={s.stateCode}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-700 min-w-[200px]"
              >
                <div className="font-bold text-sm text-slate-800">{s.stateCode}</div>
                <div className="font-normal normal-case text-slate-500">{s.stateName}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_FIELDS.map((field, i) => {
            const values = states.map((s) => field.getValue(s));
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
                    <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" title="Values differ" />
                  )}
                </td>
                {values.map((value, j) => {
                  const pending = isPending(value);
                  return (
                    <td
                      key={states[j].stateCode}
                      className={`px-4 py-3 align-top ${
                        pending ? "italic text-amber-500" : "text-slate-700"
                      }`}
                    >
                      {pending ? "Pending" : value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
