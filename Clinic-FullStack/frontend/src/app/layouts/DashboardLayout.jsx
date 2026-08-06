import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  CreditCard,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";
import { Avatar, Button } from "@/components";
import { APP_NAME, ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
const SIDEBAR_LINKS = [
  { label: "Dashboard", to: ROUTES.dashboard.home, icon: LayoutDashboard },
  { label: "Schedule", to: ROUTES.dashboard.schedule, icon: Calendar },
  { label: "Patients", to: ROUTES.dashboard.patients, icon: Users },
  { label: "Charting", to: ROUTES.dashboard.charting, icon: FileText },
  { label: "Billing", to: ROUTES.dashboard.billing, icon: CreditCard },
  { label: "Communications", to: ROUTES.dashboard.communications, icon: MessageSquare },
  { label: "Reports", to: ROUTES.dashboard.reports, icon: BarChart3 },
  { label: "Settings", to: ROUTES.dashboard.settings, icon: Settings }
];
function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { className: "flex min-h-screen bg-gradient-soft" }, /* @__PURE__ */ React.createElement("aside", { className: "hidden w-64 flex-shrink-0 border-r border-border/50 bg-surface-card/85 backdrop-blur-xl lg:flex lg:flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-16 items-center gap-2 border-b border-border/50 px-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-white" }, "T")), /* @__PURE__ */ React.createElement("span", { className: "font-heading text-lg font-bold text-text-primary" }, APP_NAME)), /* @__PURE__ */ React.createElement("nav", { className: "flex-1 space-y-1 p-4" }, SIDEBAR_LINKS.map((link) => {
    const Icon = link.icon;
    const active = location.pathname === link.to || location.pathname.startsWith(link.to + "/");
    return /* @__PURE__ */ React.createElement(
      Link,
      {
        key: link.to,
        to: link.to,
        className: cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm font-medium transition-colors",
          active ? "bg-primary-light text-primary shadow-sm" : "text-text-secondary hover:bg-primary-light/80 hover:text-text-primary"
        )
      },
      /* @__PURE__ */ React.createElement(Icon, { className: "h-4 w-4" }),
      link.label
    );
  })), /* @__PURE__ */ React.createElement("div", { className: "border-t border-border p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement(Avatar, { initials: "SC", size: "sm" }), /* @__PURE__ */ React.createElement("div", { className: "flex-1 truncate" }, /* @__PURE__ */ React.createElement("p", { className: "text-body-sm font-medium text-text-primary" }, "Sarah Chen"), /* @__PURE__ */ React.createElement("p", { className: "text-caption text-text-muted" }, "Clinic Owner"))), /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "ghost",
      size: "sm",
      className: "mt-2 w-full justify-start gap-2",
      onClick: () => navigate(ROUTES.auth.login)
    },
    /* @__PURE__ */ React.createElement(LogOut, { className: "h-4 w-4" }),
    "Sign out"
  ))), sidebarOpen && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-40 lg:hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-ultrasonic-blue-100/70", onClick: () => setSidebarOpen(false) }), /* @__PURE__ */ React.createElement("aside", { className: "absolute left-0 top-0 flex h-full w-64 flex-col bg-surface-card shadow-lg" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-16 items-center justify-between border-b border-border px-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-white" }, "T")), /* @__PURE__ */ React.createElement("span", { className: "font-heading font-bold" }, APP_NAME)), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setSidebarOpen(false), "aria-label": "Close sidebar" }, /* @__PURE__ */ React.createElement(X, { className: "h-5 w-5" }))), /* @__PURE__ */ React.createElement("nav", { className: "flex-1 space-y-1 p-4" }, SIDEBAR_LINKS.map((link) => {
    const Icon = link.icon;
    const active = location.pathname === link.to;
    return /* @__PURE__ */ React.createElement(
      Link,
      {
        key: link.to,
        to: link.to,
        onClick: () => setSidebarOpen(false),
        className: cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm font-medium",
          active ? "bg-primary-light text-primary" : "text-text-secondary"
        )
      },
      /* @__PURE__ */ React.createElement(Icon, { className: "h-4 w-4" }),
      link.label
    );
  })))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-1 flex-col" }, /* @__PURE__ */ React.createElement("header", { className: "flex h-16 items-center justify-between border-b border-border bg-surface-card px-4 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "rounded-lg p-2 lg:hidden",
      onClick: () => setSidebarOpen(true),
      "aria-label": "Open sidebar"
    },
    /* @__PURE__ */ React.createElement(Menu, { className: "h-5 w-5" })
  ), /* @__PURE__ */ React.createElement(
    Link,
    {
      to: ROUTES.landing.home,
      className: "flex items-center gap-1 text-body-sm text-text-muted hover:text-primary lg:hidden"
    },
    /* @__PURE__ */ React.createElement(ChevronLeft, { className: "h-4 w-4" }),
    APP_NAME
  )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(Link, { to: ROUTES.dashboard.onboarding }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm" }, "Setup Checklist")), /* @__PURE__ */ React.createElement(Link, { to: ROUTES.dashboard.designSystem, className: "hidden sm:block" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm" }, "Design System")))), /* @__PURE__ */ React.createElement("main", { className: "flex-1 overflow-auto p-4 lg:p-8" }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  DashboardLayout
};
