import React from 'react';
import { cn } from "@/lib/cn";
const sizeStyles = {
  sm: "h-8 w-8 text-caption",
  md: "h-10 w-10 text-body-sm",
  lg: "h-12 w-12 text-body"
};
function Avatar({ src, alt, initials, size = "md", className }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        "bg-gradient-brand font-medium text-white",
        sizeStyles[size],
        className
      ),
      role: "img",
      "aria-label": alt ?? initials ?? "Avatar"
    },
    src ? /* @__PURE__ */ React.createElement("img", { src, alt: alt ?? "", className: "h-full w-full object-cover" }) : /* @__PURE__ */ React.createElement("span", null, initials ?? "?")
  );
}
export {
  Avatar
};
