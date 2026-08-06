import React from 'react';
import { cn } from "@/lib/cn";
const sizeStyles = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]"
};
function Spinner({ size = "md", className, label = "Loading" }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "status",
      "aria-label": label,
      className: cn(
        "animate-spin rounded-full border-primary border-t-transparent",
        sizeStyles[size],
        className
      )
    }
  );
}
export {
  Spinner
};
