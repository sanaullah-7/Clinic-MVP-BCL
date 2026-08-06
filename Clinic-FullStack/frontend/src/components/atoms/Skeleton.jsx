import React from 'react';
import { cn } from "@/lib/cn";
function Skeleton({ className }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-surface-secondary", className),
      "aria-hidden": "true"
    }
  );
}
function SkeletonText({ lines = 3 }) {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ React.createElement(
    Skeleton,
    {
      key: i,
      className: cn("h-4", i === lines - 1 ? "w-3/4" : "w-full")
    }
  )));
}
function SkeletonCard() {
  return /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-border bg-surface-card p-6 space-y-4" }, /* @__PURE__ */ React.createElement(Skeleton, { className: "h-6 w-1/3" }), /* @__PURE__ */ React.createElement(SkeletonText, { lines: 3 }));
}
export {
  Skeleton,
  SkeletonCard,
  SkeletonText
};
