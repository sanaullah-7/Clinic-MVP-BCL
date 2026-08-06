import React from 'react';
import { forwardRef } from "react";
import { cn } from "@/lib/cn";
const Input = forwardRef(
  ({ className, error, type = "text", ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(
      "input",
      {
        ref,
        type,
        className: cn(
          "flex h-10 w-full rounded-xl border bg-surface-card/95 px-3 py-2 text-body text-text-primary",
          "placeholder:text-text-muted",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-200",
          error ? "border-error focus-visible:ring-error" : "border-border hover:border-primary/50",
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";
export {
  Input
};
