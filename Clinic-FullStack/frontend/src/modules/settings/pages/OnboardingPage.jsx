import React from 'react';
import { Link } from "react-router-dom";
import { Button, Heading, Text, Badge } from "@/components";
import { ROUTES } from "@/constants/routes";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
const CHECKLIST = [
  { id: "1", label: "Create your clinic profile", done: true, to: ROUTES.dashboard.settings },
  { id: "2", label: "Add practitioners and staff", done: true, to: ROUTES.dashboard.settings },
  { id: "3", label: "Set up services and pricing", done: false, to: ROUTES.dashboard.settings },
  { id: "4", label: "Configure availability schedule", done: false, to: ROUTES.dashboard.schedule },
  { id: "5", label: "Connect payment processing", done: false, to: ROUTES.dashboard.billing },
  { id: "6", label: "Import existing patients (CSV)", done: false, to: `${ROUTES.dashboard.settings}/import` },
  { id: "7", label: "Enable online booking", done: false, to: ROUTES.portal.book },
  { id: "8", label: "Set up SMS/email reminders", done: false, to: ROUTES.dashboard.communications }
];
function OnboardingPage() {
  const completed = CHECKLIST.filter((c) => c.done).length;
  const progress = Math.round(completed / CHECKLIST.length * 100);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-8" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "Setup Checklist"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-4" }, "Complete these steps to get your clinic up and running."), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "h-2 flex-1 overflow-hidden rounded-full bg-surface-secondary" }, /* @__PURE__ */ React.createElement("div", { className: "h-full rounded-full bg-primary transition-all", style: { width: `${progress}%` } })), /* @__PURE__ */ React.createElement(Badge, { variant: "primary" }, completed, "/", CHECKLIST.length, " complete"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, CHECKLIST.map((item) => /* @__PURE__ */ React.createElement(
    Link,
    {
      key: item.id,
      to: item.to,
      className: "flex items-center justify-between rounded-xl border border-border bg-surface-card p-4 shadow-sm transition-colors hover:border-primary"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, item.done ? /* @__PURE__ */ React.createElement(CheckCircle2, { className: "h-5 w-5 text-success" }) : /* @__PURE__ */ React.createElement(Circle, { className: "h-5 w-5 text-text-muted" }), /* @__PURE__ */ React.createElement("span", { className: item.done ? "text-text-muted line-through" : "font-medium text-text-primary" }, item.label)),
    !item.done && /* @__PURE__ */ React.createElement(ArrowRight, { className: "h-4 w-4 text-text-muted" })
  ))), progress === 100 && /* @__PURE__ */ React.createElement("div", { className: "mt-8 text-center" }, /* @__PURE__ */ React.createElement(Link, { to: ROUTES.dashboard.home }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, size: "lg" }, "Go to Dashboard"))));
}
export {
  OnboardingPage
};
