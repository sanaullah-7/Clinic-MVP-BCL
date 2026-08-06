import React from 'react';
import { useState } from "react";
import {
  Button,
  Badge,
  Avatar,
  Input,
  Label,
  Spinner,
  Skeleton,
  SkeletonCard,
  Divider,
  Heading,
  Text,
  Eyebrow,
  FormField,
  EmptyState,
  ErrorState,
  StatCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "@/components";
import { formatCurrency } from "@/lib";
import { Calendar, Users, DollarSign, Activity } from "lucide-react";
function DesignSystemPage() {
  const [showError, setShowError] = useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(Eyebrow, { className: "mb-4 block" }, "Platform Foundation"), /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-4 text-balance" }, "Design System & Foundation"), /* @__PURE__ */ React.createElement(Text, { variant: "body-lg", muted: true, className: "mb-12 max-w-prose" }, "Shared tokens, Atomic Design components, API client, and feature-based architecture.")), /* @__PURE__ */ React.createElement(StaggerContainer, { className: "mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Today's Appointments", value: "12", icon: Calendar, trend: { value: 8, label: "vs yesterday" } })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Active Patients", value: "248", icon: Users, trend: { value: 3, label: "this month" } })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Revenue Today", value: formatCurrency(1240), icon: DollarSign })), /* @__PURE__ */ React.createElement(StaggerItem, null, /* @__PURE__ */ React.createElement(StatCard, { label: "Utilization", value: "78%", icon: Activity, trend: { value: -2, label: "this week" } }))), /* @__PURE__ */ React.createElement("div", { className: "grid gap-8 lg:grid-cols-2" }, /* @__PURE__ */ React.createElement(FadeIn, { delay: 0.1, className: "rounded-2xl border border-border bg-surface-card p-8 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-6" }, "Atoms"), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { className: "mb-3 block" }, "Buttons"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3" }, /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Primary"), /* @__PURE__ */ React.createElement(Button, { variant: "secondary" }, "Secondary"), /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Outline"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost" }, "Ghost"), /* @__PURE__ */ React.createElement(Button, { variant: "danger" }, "Danger"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, loading: true }, "Loading"))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { className: "mb-3 block" }, "Badges"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, /* @__PURE__ */ React.createElement(Badge, null, "Default"), /* @__PURE__ */ React.createElement(Badge, { variant: "primary" }, "Primary"), /* @__PURE__ */ React.createElement(Badge, { variant: "success" }, "Success"), /* @__PURE__ */ React.createElement(Badge, { variant: "warning" }, "Warning"), /* @__PURE__ */ React.createElement(Badge, { variant: "error" }, "Error"))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { className: "mb-3 block" }, "Avatars"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(Avatar, { initials: "JD", size: "sm" }), /* @__PURE__ */ React.createElement(Avatar, { initials: "SK", size: "md" }), /* @__PURE__ */ React.createElement(Avatar, { initials: "RM", size: "lg" }))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(FormField, { label: "Email address", placeholder: "you@clinic.ca", hint: "We'll never share your email." }), /* @__PURE__ */ React.createElement(Input, { placeholder: "Plain input" }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement(Spinner, { size: "sm" }), /* @__PURE__ */ React.createElement(Spinner, { size: "md" }), /* @__PURE__ */ React.createElement(Spinner, { size: "lg" })))), /* @__PURE__ */ React.createElement(FadeIn, { delay: 0.2, className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-8 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-6" }, "Loading States"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(Skeleton, { className: "h-4 w-full" }), /* @__PURE__ */ React.createElement(Skeleton, { className: "h-4 w-3/4" }), /* @__PURE__ */ React.createElement(SkeletonCard, null))), /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      title: "No patients yet",
      description: "Add your first patient to get started with scheduling and charting.",
      action: { label: "Add Patient", onClick: () => {
      } }
    }
  ), showError ? /* @__PURE__ */ React.createElement(ErrorState, { onRetry: () => setShowError(false) }) : /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 text-center" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true, className: "mb-4" }, "Click to preview error state"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", onClick: () => setShowError(true) }, "Show Error State")))), /* @__PURE__ */ React.createElement(FadeIn, { delay: 0.3, className: "mt-16 text-center" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "Tendo v0.1.0 \u2014 Design System Reference")));
}
export {
  DesignSystemPage
};
