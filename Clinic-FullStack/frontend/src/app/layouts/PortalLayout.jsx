import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Calendar, FileText, CreditCard, User, Home } from "lucide-react";
import { APP_NAME, ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
const PORTAL_NAV = [
  { label: "Home", to: ROUTES.portal.home, icon: Home },
  { label: "Book", to: ROUTES.portal.book, icon: Calendar },
  { label: "Appointments", to: ROUTES.portal.appointments, icon: Calendar },
  { label: "Intake", to: ROUTES.portal.intake, icon: FileText },
  { label: "Invoices", to: ROUTES.portal.invoices, icon: CreditCard },
  { label: "Profile", to: ROUTES.portal.profile, icon: User }
];
function PortalLayout() {
  const location = useLocation();
  return /* @__PURE__ */ React.createElement("div", { className: "flex min-h-screen flex-col bg-gradient-hero" }, /* @__PURE__ */ React.createElement("header", { className: "border-b border-border/50 bg-surface-card/85 backdrop-blur-md" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto flex h-14 max-w-content items-center justify-between px-4" }, /* @__PURE__ */ React.createElement(Link, { to: ROUTES.portal.home, className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-7 w-7 items-center justify-center rounded-lg bg-primary" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-white" }, "T")), /* @__PURE__ */ React.createElement("span", { className: "font-heading text-body font-bold" }, APP_NAME, " Portal")), /* @__PURE__ */ React.createElement(
    Link,
    {
      to: ROUTES.portal.login,
      className: "text-body-sm font-medium text-primary hover:underline"
    },
    "Sign in"
  ))), /* @__PURE__ */ React.createElement("main", { className: "mx-auto w-full max-w-content flex-1 px-4 py-8" }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement("nav", { className: "sticky bottom-0 border-t border-border bg-surface-card md:hidden" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-around py-2" }, PORTAL_NAV.slice(0, 5).map((link) => {
    const Icon = link.icon;
    const active = location.pathname === link.to;
    return /* @__PURE__ */ React.createElement(
      Link,
      {
        key: link.to,
        to: link.to,
        className: cn(
          "flex flex-col items-center gap-0.5 px-2 py-1 text-caption",
          active ? "text-primary" : "text-text-muted"
        )
      },
      /* @__PURE__ */ React.createElement(Icon, { className: "h-5 w-5" }),
      link.label
    );
  }))));
}
export {
  PortalLayout
};
