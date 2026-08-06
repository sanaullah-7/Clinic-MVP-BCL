import React from 'react';
import { useState } from "react";
import { Button, Heading, Text, Badge, Input, Label } from "@/components";
import { Send, MessageSquare, Mail, Clock } from "lucide-react";
const REMINDER_RULES = [
  { id: "1", name: "24h Appointment Reminder", channel: "SMS + Email", timing: "24 hours before", active: true },
  { id: "2", name: "2h Appointment Reminder", channel: "SMS", timing: "2 hours before", active: true },
  { id: "3", name: "Payment Due Reminder", channel: "Email", timing: "3 days after invoice", active: false }
];
const MESSAGE_HISTORY = [
  { id: "1", to: "Jane Doe", channel: "SMS", message: "Reminder: Your appointment is tomorrow at 9:00 AM.", sent: "2026-07-30 09:00", status: "delivered" },
  { id: "2", to: "Mike Smith", channel: "Email", message: "Your appointment confirmation for Jul 31 at 10:30 AM.", sent: "2026-07-29 14:00", status: "delivered" },
  { id: "3", to: "Sarah Lee", channel: "SMS", message: "Reminder: Your appointment is today at 1:00 PM.", sent: "2026-07-31 11:00", status: "delivered" }
];
function CommunicationsPage() {
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState("sms");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "Communications"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Send SMS and email reminders, compose messages, and configure automation rules.")), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 lg:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Compose Message"), /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex gap-2" }, ["sms", "email"].map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      type: "button",
      onClick: () => setChannel(c),
      className: `flex items-center gap-2 rounded-lg border px-4 py-2 text-body-sm uppercase ${channel === c ? "border-primary bg-primary-light text-primary" : "border-border"}`
    },
    c === "sms" ? /* @__PURE__ */ React.createElement(MessageSquare, { className: "h-4 w-4" }) : /* @__PURE__ */ React.createElement(Mail, { className: "h-4 w-4" }),
    c
  ))), /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement(Label, { className: "mb-1 block" }, "Recipient"), /* @__PURE__ */ React.createElement(Input, { placeholder: "Search patient..." })), /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement(Label, { className: "mb-1 block" }, "Message"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: "w-full rounded-lg border border-border p-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
      rows: 4,
      placeholder: channel === "sms" ? "Hi {name}, reminder about your appointment..." : "Dear {name}, this is a reminder...",
      value: message,
      onChange: (e) => setMessage(e.target.value)
    }
  ), channel === "sms" && /* @__PURE__ */ React.createElement(Text, { variant: "caption", muted: true, className: "mt-1" }, message.length, "/160 characters")), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, className: "gap-2" }, /* @__PURE__ */ React.createElement(Send, { className: "h-4 w-4" }), "Send ", channel === "sms" ? "SMS" : "Email")), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Reminder Rules"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, REMINDER_RULES.map((rule) => /* @__PURE__ */ React.createElement("div", { key: rule.id, className: "flex items-center justify-between rounded-lg border border-border p-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, rule.name), /* @__PURE__ */ React.createElement("p", { className: "flex items-center gap-1 text-body-sm text-text-muted" }, /* @__PURE__ */ React.createElement(Clock, { className: "h-3 w-3" }), " ", rule.timing, " \xB7 ", rule.channel)), /* @__PURE__ */ React.createElement(Badge, { variant: rule.active ? "success" : "default" }, rule.active ? "Active" : "Inactive")))), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", className: "mt-4" }, "Add Rule"))), /* @__PURE__ */ React.createElement("div", { className: "mt-6 rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Message History"), /* @__PURE__ */ React.createElement("div", { className: "divide-y divide-border" }, MESSAGE_HISTORY.map((msg) => /* @__PURE__ */ React.createElement("div", { key: msg.id, className: "flex items-center justify-between py-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, msg.to), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, msg.message)), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement(Badge, { variant: "primary" }, msg.channel), /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-caption text-text-muted" }, msg.sent)))))));
}
export {
  CommunicationsPage
};
