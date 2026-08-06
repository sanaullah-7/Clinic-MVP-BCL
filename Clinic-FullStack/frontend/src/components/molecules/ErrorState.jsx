import React from 'react';
import { cn } from "@/lib/cn";
import { AlertCircle } from "lucide-react";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Typography";
import { Text } from "../atoms/Typography";
function ErrorState({
  title = "Something went wrong",
  message = "We could not load this content. Please try again.",
  onRetry,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center rounded-xl border border-error/20",
        "bg-error-light/50 px-6 py-12 text-center",
        className
      ),
      role: "alert"
    },
    /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-error-light" }, /* @__PURE__ */ React.createElement(AlertCircle, { className: "h-6 w-6 text-error", "aria-hidden": "true" })),
    /* @__PURE__ */ React.createElement(Heading, { level: "h4", as: "h3", className: "mb-2" }, title),
    /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true, className: "mb-6 max-w-sm" }, message),
    onRetry && /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", onClick: onRetry }, "Try again")
  );
}
export {
  ErrorState
};
