import React from 'react';
import { Link } from "react-router-dom";
import { Button, Heading, Text, Badge } from "@/components";
import { ROUTES } from "@/constants/routes";
import { Calendar, FileText, CreditCard, User } from "lucide-react";
function PortalHomePage() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-2" }, "Welcome to your patient portal"), /* @__PURE__ */ React.createElement(Text, { variant: "body-lg", muted: true, className: "mb-8" }, "Book appointments, complete intake forms, and manage your care with Harmony Wellness RMT."), /* @__PURE__ */ React.createElement("div", { className: "grid gap-4 sm:grid-cols-2" }, [
    { label: "Book Appointment", desc: "Schedule your next visit", icon: Calendar, to: ROUTES.portal.book },
    { label: "My Appointments", desc: "View and manage bookings", icon: Calendar, to: ROUTES.portal.appointments },
    { label: "Intake Forms", desc: "Complete before your visit", icon: FileText, to: ROUTES.portal.intake },
    { label: "Invoices & Payments", desc: "View and pay bills", icon: CreditCard, to: ROUTES.portal.invoices }
  ].map((item) => {
    const Icon = item.icon;
    return /* @__PURE__ */ React.createElement(
      Link,
      {
        key: item.label,
        to: item.to,
        className: "flex items-start gap-4 rounded-2xl border border-border bg-surface-card p-6 shadow-sm transition-colors hover:border-primary"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light" }, /* @__PURE__ */ React.createElement(Icon, { className: "h-6 w-6 text-primary" })),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-heading font-semibold" }, item.label), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, item.desc))
    );
  })), /* @__PURE__ */ React.createElement("div", { className: "mt-8 rounded-2xl border border-border bg-surface-card p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "Next appointment"), /* @__PURE__ */ React.createElement("p", { className: "font-heading text-h4 font-semibold" }, "Jul 31, 2026 at 9:00 AM"), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "60min Deep Tissue \xB7 Sarah Chen, RMT")), /* @__PURE__ */ React.createElement(Badge, { variant: "success" }, "Confirmed"))));
}
function PortalBookPage() {
  const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
  const services = ["45min Swedish \u2014 $95", "60min Deep Tissue \u2014 $120", "90min Sports \u2014 $165"];
  return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-lg" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-2" }, "Book an Appointment"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-8" }, "Select a service, date, and time."), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", className: "mb-3 font-medium" }, "1. Select Service"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, services.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", className: "w-full rounded-lg border border-border p-3 text-left text-body-sm hover:border-primary" }, s)))), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", className: "mb-3 font-medium" }, "2. Select Date"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 gap-1 text-center text-body-sm" }, ["M", "T", "W", "T", "F", "S", "S"].map((d, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "py-2 text-text-muted" }, d)), Array.from({ length: 31 }, (_, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      type: "button",
      className: `rounded-lg py-2 ${i + 1 === 31 ? "bg-primary text-white" : "hover:bg-surface-secondary"}`
    },
    i + 1
  )))), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", className: "mb-3 font-medium" }, "3. Select Time"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2" }, times.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, type: "button", className: "rounded-lg border border-border py-2 text-body-sm hover:border-primary" }, t)))), /* @__PURE__ */ React.createElement(Button, { variant: "primary", fullWidth: true, pill: true, size: "lg" }, "Confirm Booking")));
}
function PortalAppointmentsPage() {
  return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-lg" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-6" }, "My Appointments"), [
    { date: "Jul 31, 2026", time: "9:00 AM", service: "60min Deep Tissue", status: "confirmed" },
    { date: "Aug 14, 2026", time: "2:30 PM", service: "45min Swedish", status: "scheduled" }
  ].map((appt, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "mb-4 rounded-2xl border border-border bg-surface-card p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, appt.date, " at ", appt.time), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, appt.service)), /* @__PURE__ */ React.createElement(Badge, { variant: appt.status === "confirmed" ? "success" : "primary" }, appt.status)), /* @__PURE__ */ React.createElement("div", { className: "mt-4 flex gap-2" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm" }, "Reschedule"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm" }, "Cancel")))));
}
function PortalIntakePage() {
  return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-lg" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-2" }, "Intake Form"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-6" }, "Please complete before your next visit."), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 rounded-2xl border border-border bg-surface-card p-6" }, ["Reason for visit", "Current medications", "Previous injuries", "Consent to treatment"].map((field) => /* @__PURE__ */ React.createElement("div", { key: field }, /* @__PURE__ */ React.createElement("label", { className: "mb-1 block text-body-sm font-medium" }, field), /* @__PURE__ */ React.createElement("textarea", { className: "w-full rounded-lg border border-border p-3 text-body-sm", rows: 2 }))), /* @__PURE__ */ React.createElement(Button, { variant: "primary", fullWidth: true, pill: true }, "Submit Form")));
}
function PortalInvoicesPage() {
  return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-lg" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-6" }, "Invoices"), [
    { id: "INV-1042", date: "Jul 28, 2026", amount: "$120.00", status: "paid" },
    { id: "INV-1038", date: "Jul 14, 2026", amount: "$95.00", status: "paid" },
    { id: "INV-1035", date: "Jun 30, 2026", amount: "$120.00", status: "due" }
  ].map((inv) => /* @__PURE__ */ React.createElement("div", { key: inv.id, className: "mb-3 flex items-center justify-between rounded-xl border border-border bg-surface-card p-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, inv.id), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, inv.date)), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, inv.amount), /* @__PURE__ */ React.createElement(Badge, { variant: inv.status === "paid" ? "success" : "warning" }, inv.status)))));
}
function PortalProfilePage() {
  return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-lg" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-6" }, "My Profile"), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary-light" }, /* @__PURE__ */ React.createElement(User, { className: "h-8 w-8 text-primary" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-heading text-h4 font-semibold" }, "Jane Doe"), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, "jane@email.com"))), ["Phone", "Date of Birth", "Address", "Emergency Contact"].map((field) => /* @__PURE__ */ React.createElement("div", { key: field, className: "mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "mb-1 block text-body-sm font-medium" }, field), /* @__PURE__ */ React.createElement("input", { className: "w-full rounded-lg border border-border px-3 py-2 text-body-sm" }))), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true }, "Save Changes")));
}
function PortalLoginPage() {
  return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-2 text-center" }, "Patient Sign In"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-6 text-center" }, "Access your appointments and records."), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 rounded-2xl border border-border bg-surface-card p-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "mb-1 block text-body-sm font-medium" }, "Email"), /* @__PURE__ */ React.createElement("input", { type: "email", className: "w-full rounded-lg border border-border px-3 py-2", placeholder: "you@email.com" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "mb-1 block text-body-sm font-medium" }, "Password"), /* @__PURE__ */ React.createElement("input", { type: "password", className: "w-full rounded-lg border border-border px-3 py-2" })), /* @__PURE__ */ React.createElement(Link, { to: ROUTES.portal.home }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", fullWidth: true, pill: true }, "Sign In"))));
}
export {
  PortalAppointmentsPage,
  PortalBookPage,
  PortalHomePage,
  PortalIntakePage,
  PortalInvoicesPage,
  PortalLoginPage,
  PortalProfilePage
};
