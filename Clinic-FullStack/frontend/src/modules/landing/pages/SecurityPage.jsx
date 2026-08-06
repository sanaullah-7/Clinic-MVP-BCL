import React from 'react';
import { MarketingHeader, MarketingFooter } from "@/app/layouts/MarketingLayout";
import { Heading, Text, FadeIn, Eyebrow } from "@/components";
import { SecuritySection } from "../components/SecuritySection";
import { FAQSection } from "../components/FAQSection";
function SecurityPage() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MarketingHeader, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-hero px-4 py-16 md:px-8 md:py-24" }, /* @__PURE__ */ React.createElement(FadeIn, { className: "mx-auto max-w-content text-center" }, /* @__PURE__ */ React.createElement(Eyebrow, { className: "mb-4 block" }, "Security & Compliance"), /* @__PURE__ */ React.createElement(Heading, { level: "display", className: "mb-4" }, "Your data is safe with Tendo"), /* @__PURE__ */ React.createElement(Text, { variant: "body-lg", muted: true, className: "mx-auto max-w-2xl" }, "Built for Canadian healthcare with PIPEDA compliance, encryption, and audit trails from day one."))), /* @__PURE__ */ React.createElement(SecuritySection, null), /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-content px-4 py-16 md:px-8" }, /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-6" }, "How we protect patient data"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 md:grid-cols-2" }, [
    {
      title: "Data residency",
      desc: "Patient health information stored in Canadian data centres with strict access controls."
    },
    {
      title: "Role-based access",
      desc: "Owners, admins, practitioners, and front desk staff see only what they need."
    },
    {
      title: "Audit trails",
      desc: "Every chart access, edit, and lock event is logged for compliance review."
    },
    {
      title: "Encrypted transit",
      desc: "All data in transit protected with TLS 1.3. At rest encryption with AES-256."
    }
  ].map((item) => /* @__PURE__ */ React.createElement("div", { key: item.title, className: "rounded-xl border border-border p-6" }, /* @__PURE__ */ React.createElement(Heading, { level: "h4", className: "mb-2" }, item.title), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, item.desc)))))), /* @__PURE__ */ React.createElement(FAQSection, null)), /* @__PURE__ */ React.createElement(MarketingFooter, null));
}
export {
  SecurityPage
};
