import React from 'react';
import { useState } from "react";
import { Button, Heading, Text, Badge, Label } from "@/components";
import { Plus, Lock } from "lucide-react";
const BODY_REGIONS = {
  front: ["Head", "Neck", "Shoulder L", "Shoulder R", "Upper Back", "Lower Back", "Hip L", "Hip R", "Knee L", "Knee R"],
  back: ["Head", "Neck", "Upper Back", "Mid Back", "Lower Back", "Glute L", "Glute R", "Hamstring L", "Hamstring R", "Calf L", "Calf R"]
};
function ChartingPage() {
  const [side, setSide] = useState("front");
  const [selectedRegions, setSelectedRegions] = useState(["Lower Back", "Hip L"]);
  const [soap, setSoap] = useState({
    subjective: "Lower back tightness, 6/10 pain. Worse after sitting.",
    objective: "Lumbar paraspinals tender bilaterally. Reduced ROM flexion.",
    assessment: "Myofascial restriction L4-L5 region. Likely postural.",
    plan: "Deep tissue to lumbar region. Home stretches. Reassess in 2 weeks."
  });
  const toggleRegion = (region) => {
    setSelectedRegions(
      (prev) => prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "SOAP Charting"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Document treatments with structured SOAP notes and body map annotations.")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", className: "gap-2" }, /* @__PURE__ */ React.createElement(Lock, { className: "h-4 w-4" }), "Lock Note"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, className: "gap-2" }, /* @__PURE__ */ React.createElement(Plus, { className: "h-4 w-4" }), "New Note"))), /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center gap-4 rounded-xl border border-border bg-surface-card px-4 py-3" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", className: "font-medium" }, "Patient:"), /* @__PURE__ */ React.createElement(Badge, { variant: "primary" }, "Jane Doe"), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, "\xB7 Jul 31, 2026 \xB7 60min Deep Tissue \xB7 Sarah Chen")), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 lg:grid-cols-3" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm lg:col-span-2" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "SOAP Note"), ["subjective", "objective", "assessment", "plan"].map((field) => /* @__PURE__ */ React.createElement("div", { key: field, className: "mb-4" }, /* @__PURE__ */ React.createElement(Label, { className: "mb-2 block capitalize" }, field === "subjective" ? "S \u2014 Subjective" : field === "objective" ? "O \u2014 Objective" : field === "assessment" ? "A \u2014 Assessment" : "P \u2014 Plan"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: "w-full rounded-lg border border-border p-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
      rows: 3,
      value: soap[field],
      onChange: (e) => setSoap({ ...soap, [field]: e.target.value })
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end gap-3" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Save Draft"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true }, "Sign & Complete"))), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center justify-between" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3" }, "Body Map"), /* @__PURE__ */ React.createElement("div", { className: "flex rounded-lg border border-border" }, ["front", "back"].map((s) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: s,
      type: "button",
      onClick: () => setSide(s),
      className: `px-3 py-1 text-body-sm capitalize ${side === s ? "bg-primary text-white" : ""}`
    },
    s
  )))), /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex aspect-[3/4] items-center justify-center rounded-xl bg-gradient-hero" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto mb-2 h-32 w-20 rounded-full border-2 border-primary/30 bg-primary-light/50" }), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, side, " view"))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, BODY_REGIONS[side].map((region) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: region,
      type: "button",
      onClick: () => toggleRegion(region),
      className: `rounded-full px-3 py-1 text-caption font-medium transition-colors ${selectedRegions.includes(region) ? "bg-primary text-white" : "bg-surface-secondary text-text-secondary hover:bg-primary-light"}`
    },
    region
  ))))));
}
export {
  ChartingPage
};
