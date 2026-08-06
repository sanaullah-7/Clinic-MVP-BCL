import React from 'react';
import { Link } from "react-router-dom";
import { MarketingHeader, MarketingFooter } from "@/app/layouts/MarketingLayout";
import { Button, Heading, Text, FadeIn, Eyebrow } from "@/components";
import { ROUTES } from "@/constants/routes";
function AboutPage() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MarketingHeader, null), /* @__PURE__ */ React.createElement("main", { className: "bg-gradient-hero" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-content px-4 py-16 md:px-8 md:py-24" }, /* @__PURE__ */ React.createElement(FadeIn, { className: "mb-16 text-center" }, /* @__PURE__ */ React.createElement(Eyebrow, { className: "mb-4 block" }, "About Tendo"), /* @__PURE__ */ React.createElement(Heading, { level: "display", className: "mb-4" }, "Built for Canadian RMTs"), /* @__PURE__ */ React.createElement(Text, { variant: "body-lg", muted: true, className: "mx-auto max-w-2xl" }, "Tendo is practice management software designed specifically for Registered Massage Therapists and allied health clinics across Canada.")), /* @__PURE__ */ React.createElement(FadeIn, { className: "mx-auto max-w-prose space-y-6" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-lg" }, "We believe RMTs deserve software that understands their workflow \u2014 from SOAP charting with body maps to POS billing and patient reminders. Tendo brings scheduling, charting, billing, online booking, and reporting into one unified platform."), /* @__PURE__ */ React.createElement(Text, { variant: "body" }, "Our mission is to help massage therapy practices spend less time on admin and more time delivering exceptional patient care. Every feature in Phase 1 is built with Canadian compliance (PIPEDA) and RMT-specific workflows in mind."), /* @__PURE__ */ React.createElement("div", { className: "pt-4" }, /* @__PURE__ */ React.createElement(Link, { to: ROUTES.auth.register }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "lg", pill: true }, "Start Your Free Trial")))))), /* @__PURE__ */ React.createElement(MarketingFooter, null));
}
export {
  AboutPage
};
