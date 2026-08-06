import React from 'react';
import { cn } from "@/lib/cn";
import { Inbox } from "lucide-react";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Typography";
import { Text } from "../atoms/Typography";
function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border",
        "bg-surface-secondary/50 px-6 py-12 text-center",
        className
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light" }, /* @__PURE__ */ React.createElement(Icon, { className: "h-6 w-6 text-primary", "aria-hidden": "true" })),
    /* @__PURE__ */ React.createElement(Heading, { level: "h4", as: "h3", className: "mb-2" }, title),
    description && /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true, className: "mb-6 max-w-sm" }, description),
    action && /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", onClick: action.onClick }, action.label)
  );
}
export {
  EmptyState
};
