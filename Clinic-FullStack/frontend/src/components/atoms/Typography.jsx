import React from 'react';
import { cn } from "@/lib/cn";
import { createElement } from "react";
const levelStyles = {
  display: "text-display font-heading font-bold text-text-primary tracking-tight",
  h1: "text-h1 font-heading font-bold text-text-primary tracking-tight",
  h2: "text-h2 font-heading font-bold text-text-primary tracking-tight",
  h3: "text-h3 font-heading font-semibold text-text-primary",
  h4: "text-h4 font-heading font-semibold text-text-primary"
};
const defaultTags = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4"
};
function Heading({ level = "h2", as, className, children, ...props }) {
  const tag = as ?? defaultTags[level];
  return createElement(
    tag,
    { className: cn(levelStyles[level], className), ...props },
    children
  );
}
const textVariants = {
  "body-lg": "text-body-lg",
  body: "text-body",
  "body-sm": "text-body-sm",
  caption: "text-caption"
};
function Text({
  variant = "body",
  muted = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "p",
    {
      className: cn(
        textVariants[variant],
        muted ? "text-text-secondary" : "text-text-primary",
        className
      ),
      ...props
    },
    children
  );
}
function Eyebrow({ className, children, ...props }) {
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className: cn(
        "text-eyebrow font-semibold uppercase tracking-[0.14em] text-text-muted",
        className
      ),
      ...props
    },
    children
  );
}
export {
  Eyebrow,
  Heading,
  Text
};
