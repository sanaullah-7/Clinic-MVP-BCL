import React from 'react';
import { cn } from "@/lib/cn";
function Divider({ className, label }) {
  if (label) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("relative flex items-center", className) }, /* @__PURE__ */ React.createElement("div", { className: "flex-grow border-t border-border" }), /* @__PURE__ */ React.createElement("span", { className: "mx-4 shrink-0 text-body-sm text-text-muted" }, label), /* @__PURE__ */ React.createElement("div", { className: "flex-grow border-t border-border" }));
  }
  return /* @__PURE__ */ React.createElement("hr", { className: cn("border-0 border-t border-border", className) });
}
export {
  Divider
};
