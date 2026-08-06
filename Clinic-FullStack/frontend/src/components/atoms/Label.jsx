import React from 'react';
import { forwardRef } from "react";
import { cn } from "@/lib/cn";
const Label = forwardRef(
  ({ className, required, children, ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(
      "label",
      {
        ref,
        className: cn("text-body-sm font-medium text-text-primary", className),
        ...props
      },
      children,
      required && /* @__PURE__ */ React.createElement("span", { className: "ml-0.5 text-error" }, "*")
    );
  }
);
Label.displayName = "Label";
export {
  Label
};
