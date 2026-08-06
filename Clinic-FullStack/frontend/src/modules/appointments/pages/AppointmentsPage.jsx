import React from 'react';
import { Fragment } from "react";
import { useState } from "react";
import { Button, Heading, Text, Badge } from "@/components";
import { MOCK_APPOINTMENTS } from "@/data/mock";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
const HOURS = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
const DAYS = ["Mon 28", "Tue 29", "Wed 30", "Thu 31", "Fri 1", "Sat 2", "Sun 3"];
function AppointmentsPage() {
  const [view, setView] = useState("week");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "Schedule"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Manage appointments, availability, and practitioner schedules.")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex rounded-lg border border-border" }, ["day", "week", "month"].map((v) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: v,
      type: "button",
      onClick: () => setView(v),
      className: cn(
        "px-4 py-2 text-body-sm font-medium capitalize first:rounded-l-lg last:rounded-r-lg",
        view === v ? "bg-primary text-white" : "text-text-secondary hover:bg-surface-secondary"
      )
    },
    v
  ))), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, className: "gap-2" }, /* @__PURE__ */ React.createElement(Plus, { className: "h-4 w-4" }), "New Appointment"))), /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center justify-between rounded-xl border border-border bg-surface-card px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "rounded-lg p-1 hover:bg-surface-secondary" }, /* @__PURE__ */ React.createElement(ChevronLeft, { className: "h-5 w-5" })), /* @__PURE__ */ React.createElement("span", { className: "font-heading font-semibold" }, "July 28 \u2013 August 3, 2026"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "rounded-lg p-1 hover:bg-surface-secondary" }, /* @__PURE__ */ React.createElement(ChevronRight, { className: "h-5 w-5" }))), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm" }, "Today")), /* @__PURE__ */ React.createElement("div", { className: "overflow-x-auto rounded-2xl border border-border bg-surface-card shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "grid min-w-[800px]", style: { gridTemplateColumns: "80px repeat(7, 1fr)" } }, /* @__PURE__ */ React.createElement("div", { className: "border-b border-r border-border bg-surface-secondary p-2" }), DAYS.map((day) => /* @__PURE__ */ React.createElement("div", { key: day, className: "border-b border-r border-border bg-surface-secondary p-3 text-center text-body-sm font-medium" }, day)), HOURS.map((hour, hi) => /* @__PURE__ */ React.createElement(Fragment, { key: `row-${hour}` }, /* @__PURE__ */ React.createElement("div", { className: "border-b border-r border-border p-2 text-caption text-text-muted" }, hour), DAYS.map((day, di) => {
    const appt = MOCK_APPOINTMENTS.find(
      (a) => a.time.startsWith(String(8 + hi).padStart(2, "0")) && di === 3
    );
    return /* @__PURE__ */ React.createElement("div", { key: `${day}-${hour}`, className: "relative min-h-[60px] border-b border-r border-border p-1" }, appt && hi === 1 && di === 3 && /* @__PURE__ */ React.createElement("div", { className: "rounded-lg bg-primary-light p-2 text-caption" }, /* @__PURE__ */ React.createElement("p", { className: "font-medium text-primary" }, appt.patientName), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted" }, appt.service)), hi === 2 && di === 3 && /* @__PURE__ */ React.createElement("div", { className: "rounded-lg bg-accent-light p-2 text-caption" }, /* @__PURE__ */ React.createElement("p", { className: "font-medium text-accent-foreground" }, "Mike Smith"), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted" }, "45min Swedish")));
  }))))), /* @__PURE__ */ React.createElement("div", { className: "mt-6 rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Upcoming Appointments"), /* @__PURE__ */ React.createElement("div", { className: "divide-y divide-border" }, MOCK_APPOINTMENTS.map((appt) => /* @__PURE__ */ React.createElement("div", { key: appt.id, className: "flex items-center justify-between py-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, appt.patientName), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, appt.date, " at ", appt.time, " \xB7 ", appt.practitioner, " \xB7 ", appt.room)), /* @__PURE__ */ React.createElement(Badge, { variant: appt.status === "confirmed" ? "success" : "primary" }, appt.status))))));
}
export {
  AppointmentsPage
};
