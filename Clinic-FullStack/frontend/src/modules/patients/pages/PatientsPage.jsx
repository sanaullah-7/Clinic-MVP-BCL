import React from 'react';
import { useState } from "react";
import { Button, Heading, Text, Badge, Input, EmptyState } from "@/components";
import { MOCK_PATIENTS } from "@/data/mock";
import { Plus, Search, Mail, Phone } from "lucide-react";
function PatientsPage() {
  const [search, setSearch] = useState("");
  const filtered = MOCK_PATIENTS.filter(
    (p) => `${p.firstName} ${p.lastName}`.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "Patients"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Manage patient profiles, contact info, and visit history.")), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, className: "gap-2" }, /* @__PURE__ */ React.createElement(Plus, { className: "h-4 w-4" }), "Add Patient")), /* @__PURE__ */ React.createElement("div", { className: "mb-6 relative max-w-md" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" }), /* @__PURE__ */ React.createElement(
    Input,
    {
      placeholder: "Search patients...",
      className: "pl-10",
      value: search,
      onChange: (e) => setSearch(e.target.value)
    }
  )), filtered.length === 0 ? /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      title: "No patients found",
      description: "Try a different search term or add a new patient.",
      action: { label: "Add Patient", onClick: () => {
      } }
    }
  ) : /* @__PURE__ */ React.createElement("div", { className: "overflow-hidden rounded-2xl border border-border bg-surface-card shadow-sm" }, /* @__PURE__ */ React.createElement("table", { className: "w-full" }, /* @__PURE__ */ React.createElement("thead", { className: "border-b border-border bg-surface-secondary" }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { className: "px-6 py-3 text-left text-body-sm font-medium text-text-muted" }, "Name"), /* @__PURE__ */ React.createElement("th", { className: "hidden px-6 py-3 text-left text-body-sm font-medium text-text-muted md:table-cell" }, "Contact"), /* @__PURE__ */ React.createElement("th", { className: "px-6 py-3 text-left text-body-sm font-medium text-text-muted" }, "Last Visit"), /* @__PURE__ */ React.createElement("th", { className: "px-6 py-3 text-left text-body-sm font-medium text-text-muted" }, "Status"), /* @__PURE__ */ React.createElement("th", { className: "px-6 py-3 text-right text-body-sm font-medium text-text-muted" }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", { className: "divide-y divide-border" }, filtered.map((patient) => /* @__PURE__ */ React.createElement("tr", { key: patient.id, className: "hover:bg-surface-secondary/50" }, /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-medium text-text-primary" }, patient.firstName, " ", patient.lastName)), /* @__PURE__ */ React.createElement("td", { className: "hidden px-6 py-4 md:table-cell" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-1 text-body-sm text-text-muted" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Mail, { className: "h-3 w-3" }), " ", patient.email), /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Phone, { className: "h-3 w-3" }), " ", patient.phone))), /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4 text-body-sm text-text-secondary" }, patient.lastVisit), /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4" }, /* @__PURE__ */ React.createElement(Badge, { variant: patient.status === "active" ? "success" : "default" }, patient.status)), /* @__PURE__ */ React.createElement("td", { className: "px-6 py-4 text-right" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm" }, "View"))))))));
}
export {
  PatientsPage
};
