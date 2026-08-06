import React from 'react';
import { FadeIn } from "@/components";
const PROOF_CARDS = [
  { stat: "500+", label: "Clinics across Canada", sub: "Harmony Wellness RMT" },
  { stat: "$2M+", label: "Processed monthly", sub: "Relief Massage Therapy" },
  { stat: "4.9/5", label: "Rated by RMTs", sub: "Peak Performance Clinic" },
  { stat: "40%", label: "Fewer no-shows", sub: "Back on Track Wellness" },
  { stat: "10 provinces", label: "Coast to coast", sub: "Serenity Spa & RMT" },
  { stat: "248", label: "Avg. active patients", sub: "Motion Health Centre" }
];
function LogoCarousel() {
  return /* @__PURE__ */ React.createElement("section", { className: "overflow-hidden bg-surface pb-12 pt-4" }, /* @__PURE__ */ React.createElement(FadeIn, { className: "mx-auto max-w-content px-4 md:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex animate-marquee gap-4 py-2" }, [...PROOF_CARDS, ...PROOF_CARDS].map((card, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      className: "glass-card flex min-w-[220px] flex-shrink-0 flex-col gap-1 px-5 py-4 transition-transform hover:scale-105"
    },
    /* @__PURE__ */ React.createElement("p", { className: "font-heading text-h3 font-bold tracking-tight text-primary" }, card.stat),
    /* @__PURE__ */ React.createElement("p", { className: "text-body-sm font-medium text-text-primary" }, card.label),
    /* @__PURE__ */ React.createElement("p", { className: "text-caption text-text-muted" }, card.sub)
  )))));
}
export {
  LogoCarousel
};
