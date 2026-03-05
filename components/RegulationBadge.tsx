import { NpdesStatus } from "@/data/types";
import { cn } from "@/lib/utils";

type Props = {
  status: NpdesStatus;
  className?: string;
};

export function RegulationBadge({ status, className }: Props) {
  const isDelegated = status === "delegated";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        isDelegated
          ? "bg-green-100 text-green-800"
          : "bg-blue-100 text-blue-800",
        className
      )}
    >
      {isDelegated ? "State-Delegated" : "EPA-Administered"}
    </span>
  );
}

type VerifiedBadgeProps = {
  lastVerified: string;
};

export function VerifiedBadge({ lastVerified }: VerifiedBadgeProps) {
  const isPending = lastVerified === "pending";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        isPending
          ? "bg-amber-100 text-amber-800"
          : "bg-slate-100 text-slate-600"
      )}
    >
      {isPending ? "Pending Verification" : `Verified ${lastVerified}`}
    </span>
  );
}
