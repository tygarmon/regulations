"use client";

// This client wrapper exists solely to use `ssr: false` with next/dynamic.
// `ssr: false` is not allowed in Server Components (App Router), so the
// dynamic() call must live inside a "use client" file.
import dynamic from "next/dynamic";

const FeedbackFormDynamic = dynamic(
  () => import("@/components/FeedbackForm").then((m) => m.FeedbackForm),
  { ssr: false }
);

type Props = {
  defaultState?: string;
  defaultJurisdiction?: string;
  defaultType?: string;
};

export function FeedbackFormWrapper(props: Props) {
  return <FeedbackFormDynamic {...props} />;
}
