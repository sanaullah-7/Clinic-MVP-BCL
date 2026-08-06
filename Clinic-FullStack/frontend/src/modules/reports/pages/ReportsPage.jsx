import React from 'react';
import { StatCard, Heading, Text, FadeIn, StaggerContainer, StaggerItem } from "@/components";
import { formatCurrency } from "@/lib";
import { Users, DollarSign, Activity, TrendingDown, BarChart3 } from "lucide-react";
const REVENUE_DATA = [
  { month: "Mar", amount: 12400 },
  { month: "Apr", amount: 13200 },
  { month: "May", amount: 14100 },
  { month: "Jun", amount: 13800 },
  { month: "Jul", amount: 15200 }
];
function ReportsPage() {
  const maxRevenue = Math.max(...REVENUE_DATA.map((d) => d.amount));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "Reports & Insights"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Revenue, utilization, no-shows, and patient retention at a glance.")), /* @__PURE__ */ React.createElement(StaggerContainer, { className: "mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Monthly Revenue", value: formatCurrency(15200), icon: DollarSign, trend: { value: 10, label: "vs last month" } })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "No-Show Rate", value: "4.2%", icon: TrendingDown, trend: { value: -1.5, label: "vs last month" } })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "New Patients", value: "18", icon: Users, trend: { value: 12, label: "this month" } })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Avg Utilization", value: "78%", icon: Activity, trend: { value: 3, label: "vs last month" } }))), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 lg:grid-cols-2" }, /* @__PURE__ */ React.createElement(FadeIn, { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex items-center justify-between" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3" }, "Revenue Trend"), /* @__PURE__ */ React.createElement(BarChart3, { className: "h-5 w-5 text-text-muted" })), /* @__PURE__ */ React.createElement("div", { className: "flex items-end gap-4", style: { height: 200 } }, REVENUE_DATA.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.month, className: "flex flex-1 flex-col items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "w-full rounded-t-lg bg-primary transition-all",
      style: { height: `${d.amount / maxRevenue * 160}px` }
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "text-caption text-text-muted" }, d.month))))), /* @__PURE__ */ React.createElement(FadeIn, { delay: 0.1, className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-6" }, "Practitioner Utilization"), [
    { name: "Sarah Chen", utilization: 82, appointments: 48 },
    { name: "Marcus Dubois", utilization: 74, appointments: 42 }
  ].map((p) => /* @__PURE__ */ React.createElement("div", { key: p.name, className: "mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1 flex justify-between text-body-sm" }, /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, p.name), /* @__PURE__ */ React.createElement("span", { className: "text-text-muted" }, p.utilization, "% \xB7 ", p.appointments, " appts")), /* @__PURE__ */ React.createElement("div", { className: "h-2 overflow-hidden rounded-full bg-surface-secondary" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "h-full rounded-full bg-primary",
      style: { width: `${p.utilization}%` }
    }
  )))))));
}
export {
  ReportsPage
};
