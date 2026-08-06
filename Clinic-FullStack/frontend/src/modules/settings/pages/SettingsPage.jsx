import React from 'react';
import { Link } from "react-router-dom";
import { Button, Heading, Text, Badge } from "@/components";
import { ROUTES } from "@/constants/routes";
import { Building2, Users, Clock, CreditCard, Upload, ChevronRight } from "lucide-react";
const SETTINGS_SECTIONS = [
  {
    title: "Clinic Profile",
    desc: "Name, address, hours, and branding",
    icon: Building2,
    to: ROUTES.dashboard.settings
  },
  {
    title: "Team & Roles",
    desc: "Practitioners, admins, and permissions",
    icon: Users,
    to: ROUTES.dashboard.settings
  },
  {
    title: "Services & Pricing",
    desc: "Treatment types, durations, and rates",
    icon: Clock,
    to: ROUTES.dashboard.settings
  },
  {
    title: "Payment Settings",
    desc: "Stripe, tax rates, and receipt templates",
    icon: CreditCard,
    to: ROUTES.dashboard.settings
  },
  {
    title: "CSV Import",
    desc: "Import patients, appointments, and services",
    icon: Upload,
    to: `${ROUTES.dashboard.settings}/import`
  }
];
function SettingsPage() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "Settings"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Configure your clinic, team, services, and integrations.")), /* @__PURE__ */ React.createElement("div", { className: "grid gap-4 sm:grid-cols-2" }, SETTINGS_SECTIONS.map((section) => {
    const Icon = section.icon;
    return /* @__PURE__ */ React.createElement(
      Link,
      {
        key: section.title,
        to: section.to,
        className: "flex items-center justify-between rounded-2xl border border-border bg-surface-card p-6 shadow-sm transition-colors hover:border-primary hover:bg-primary-light/20"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light" }, /* @__PURE__ */ React.createElement(Icon, { className: "h-6 w-6 text-primary" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-heading font-semibold text-text-primary" }, section.title), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, section.desc))),
      /* @__PURE__ */ React.createElement(ChevronRight, { className: "h-5 w-5 text-text-muted" })
    );
  })), /* @__PURE__ */ React.createElement("div", { className: "mt-8 rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Clinic Profile"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-4 sm:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "Clinic Name"), /* @__PURE__ */ React.createElement(Text, { variant: "body", className: "font-medium" }, "Harmony Wellness RMT")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "Location"), /* @__PURE__ */ React.createElement(Text, { variant: "body", className: "font-medium" }, "Vancouver, BC")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "Timezone"), /* @__PURE__ */ React.createElement(Text, { variant: "body", className: "font-medium" }, "America/Vancouver (PST)")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "Plan"), /* @__PURE__ */ React.createElement(Badge, { variant: "primary" }, "Clinic \u2014 $99/mo"))), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", className: "mt-4" }, "Edit Profile")));
}
export {
  SettingsPage
};
