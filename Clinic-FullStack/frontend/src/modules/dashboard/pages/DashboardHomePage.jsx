import React from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Heading,
  Text,
  StatCard,
  Badge,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "@/components";
import { formatCurrency } from "@/lib";
import { ROUTES } from "@/constants/routes";
import { MOCK_APPOINTMENTS } from "@/data/mock";
import { Calendar, Users, DollarSign, Activity, Plus, ArrowRight } from "lucide-react";
function DashboardHomePage() {
  const todayAppts = MOCK_APPOINTMENTS.filter((a) => a.date === "2026-07-31");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "Good morning, Sarah"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Here's what's happening at Harmony Wellness today.")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement(Link, { to: ROUTES.dashboard.schedule }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", className: "gap-2" }, /* @__PURE__ */ React.createElement(Calendar, { className: "h-4 w-4" }), "View Calendar")), /* @__PURE__ */ React.createElement(Link, { to: ROUTES.dashboard.patients }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", pill: true, className: "gap-2" }, /* @__PURE__ */ React.createElement(Plus, { className: "h-4 w-4" }), "New Patient")))), /* @__PURE__ */ React.createElement(StaggerContainer, { className: "mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Today's Appointments", value: String(todayAppts.length), icon: Calendar, trend: { value: 8, label: "vs yesterday" } })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Active Patients", value: "248", icon: Users, trend: { value: 3, label: "this month" } })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Revenue Today", value: formatCurrency(1240), icon: DollarSign })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Utilization", value: "78%", icon: Activity, trend: { value: -2, label: "this week" } }))), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 lg:grid-cols-2" }, /* @__PURE__ */ React.createElement(FadeIn, { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center justify-between" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3" }, "Today's Schedule"), /* @__PURE__ */ React.createElement(Link, { to: ROUTES.dashboard.schedule }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", className: "gap-1" }, "View all ", /* @__PURE__ */ React.createElement(ArrowRight, { className: "h-4 w-4" })))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, todayAppts.map((appt) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: appt.id,
      className: "flex items-center justify-between rounded-lg border border-border p-4"
    },
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-medium text-text-primary" }, appt.patientName), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, appt.time, " \xB7 ", appt.service, " \xB7 ", appt.room)),
    /* @__PURE__ */ React.createElement(Badge, { variant: appt.status === "confirmed" ? "success" : "primary" }, appt.status)
  )))), /* @__PURE__ */ React.createElement(FadeIn, { delay: 0.1, className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Quick Actions"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 sm:grid-cols-2" }, [
    { label: "Book Appointment", to: ROUTES.dashboard.schedule, desc: "Schedule a new visit" },
    { label: "New SOAP Note", to: ROUTES.dashboard.charting, desc: "Start charting" },
    { label: "Process Payment", to: ROUTES.dashboard.billing, desc: "POS checkout" },
    { label: "Send Reminder", to: ROUTES.dashboard.communications, desc: "SMS or email" }
  ].map((action) => /* @__PURE__ */ React.createElement(
    Link,
    {
      key: action.label,
      to: action.to,
      className: "rounded-lg border border-border p-4 transition-colors hover:border-primary hover:bg-primary-light/30"
    },
    /* @__PURE__ */ React.createElement("p", { className: "font-medium text-text-primary" }, action.label),
    /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, action.desc)
  ))))));
}
export {
  DashboardHomePage
};
