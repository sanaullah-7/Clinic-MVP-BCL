import React from 'react';
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { MarketingHeader, MarketingFooter } from "@/app/layouts/MarketingLayout";
import { Button, Heading, Text, FadeIn, Eyebrow } from "@/components";
import { PHASE1_FEATURES } from "../data/features";
import { ROUTES } from "@/constants/routes";
function FeaturesPage() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MarketingHeader, null), /* @__PURE__ */ React.createElement("main", { className: "bg-gradient-hero" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-content px-4 py-16 md:px-8 md:py-24" }, /* @__PURE__ */ React.createElement(FadeIn, { className: "mb-16 text-center" }, /* @__PURE__ */ React.createElement(Eyebrow, { className: "mb-4 block" }, "Phase 1 Features"), /* @__PURE__ */ React.createElement(Heading, { level: "display", className: "mb-4" }, "Everything your RMT clinic needs"), /* @__PURE__ */ React.createElement(Text, { variant: "body-lg", muted: true, className: "mx-auto max-w-2xl" }, "All core modules included in Tendo Phase 1 \u2014 built for Canadian massage therapy practices.")), /* @__PURE__ */ React.createElement("div", { className: "space-y-16" }, PHASE1_FEATURES.map((feature, i) => {
    const Icon = feature.icon;
    return /* @__PURE__ */ React.createElement(FadeIn, { key: feature.id, delay: i * 0.05 }, /* @__PURE__ */ React.createElement("div", { className: "grid items-center gap-8 rounded-2xl border border-border bg-surface-card p-8 shadow-sm lg:grid-cols-2" }, /* @__PURE__ */ React.createElement("div", { className: i % 2 === 1 ? "lg:order-2" : "" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light" }, /* @__PURE__ */ React.createElement(Icon, { className: "h-6 w-6 text-primary" })), /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-3" }, feature.title), /* @__PURE__ */ React.createElement(Text, { variant: "body-lg", muted: true, className: "mb-6" }, feature.subtitle), /* @__PURE__ */ React.createElement("ul", { className: "mb-6 space-y-2" }, feature.bullets.map((b) => /* @__PURE__ */ React.createElement("li", { key: b, className: "flex items-start gap-2 text-body-sm text-text-secondary" }, /* @__PURE__ */ React.createElement(Check, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-success" }), b))), /* @__PURE__ */ React.createElement(Link, { to: ROUTES.dashboard.home }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, className: "gap-2" }, "Try in Dashboard", /* @__PURE__ */ React.createElement(ArrowRight, { className: "h-4 w-4" })))), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `flex h-48 items-center justify-center rounded-xl bg-gradient-hero lg:h-64 ${i % 2 === 1 ? "lg:order-1" : ""}`
      },
      /* @__PURE__ */ React.createElement(Icon, { className: "h-20 w-20 text-primary/20" })
    )));
  })))), /* @__PURE__ */ React.createElement(MarketingFooter, null));
}
export {
  FeaturesPage
};
