import React from 'react';
import { useState } from "react";
import { Button, Heading, Text, Badge } from "@/components";
import { Upload, FileSpreadsheet, Check, AlertCircle } from "lucide-react";
const COLUMNS = ["first_name", "last_name", "email", "phone", "date_of_birth"];
const PREVIEW_ROWS = [
  { first_name: "Jane", last_name: "Doe", email: "jane@email.com", phone: "604-555-0101", date_of_birth: "1985-03-15" },
  { first_name: "Mike", last_name: "Smith", email: "mike@email.com", phone: "604-555-0102", date_of_birth: "1990-07-22" },
  { first_name: "Sarah", last_name: "Lee", email: "sarah@email.com", phone: "604-555-0103", date_of_birth: "1988-11-08" }
];
function CsvImportPage() {
  const [step, setStep] = useState("upload");
  const [file, setFile] = useState(null);
  const steps = [
    { id: "upload", label: "Upload" },
    { id: "map", label: "Map Columns" },
    { id: "preview", label: "Preview" },
    { id: "done", label: "Import" }
  ];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "CSV Import"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Import patients, appointments, or services from a CSV file.")), /* @__PURE__ */ React.createElement("div", { className: "mb-8 flex gap-2" }, steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s.id, className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `flex h-8 w-8 items-center justify-center rounded-full text-body-sm font-medium ${step === s.id ? "bg-primary text-white" : steps.findIndex((x) => x.id === step) > i ? "bg-success text-white" : "bg-surface-secondary text-text-muted"}`
    },
    steps.findIndex((x) => x.id === step) > i ? /* @__PURE__ */ React.createElement(Check, { className: "h-4 w-4" }) : i + 1
  ), /* @__PURE__ */ React.createElement("span", { className: "hidden text-body-sm sm:inline" }, s.label), i < steps.length - 1 && /* @__PURE__ */ React.createElement("div", { className: "hidden h-px w-8 bg-border sm:block" })))), step === "upload" && /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border-2 border-dashed border-border bg-surface-card p-12 text-center" }, /* @__PURE__ */ React.createElement(Upload, { className: "mx-auto mb-4 h-12 w-12 text-text-muted" }), /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-2" }, "Upload your CSV file"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-6" }, "Drag and drop or click to browse. Supports .csv and .xlsx files."), /* @__PURE__ */ React.createElement("label", { className: "cursor-pointer" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      accept: ".csv,.xlsx",
      className: "hidden",
      onChange: (e) => {
        setFile(e.target.files?.[0]?.name ?? "patients.csv");
        setStep("map");
      }
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "inline-flex" }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, type: "button" }, "Choose File")))), step === "map" && /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(FileSpreadsheet, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ React.createElement(Text, { variant: "body", className: "font-medium" }, file ?? "patients.csv"), /* @__PURE__ */ React.createElement(Badge, { variant: "success" }, "248 rows detected")), /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Map Columns"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, COLUMNS.map((col) => /* @__PURE__ */ React.createElement("div", { key: col, className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-body-sm font-medium capitalize" }, col.replace("_", " ")), /* @__PURE__ */ React.createElement("select", { className: "flex-1 rounded-lg border border-border px-3 py-2 text-body-sm" }, /* @__PURE__ */ React.createElement("option", null, col))))), /* @__PURE__ */ React.createElement("div", { className: "mt-6 flex gap-3" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setStep("upload") }, "Back"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, onClick: () => setStep("preview") }, "Preview Import"))), step === "preview" && /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(AlertCircle, { className: "h-5 w-5 text-warning" }), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm" }, "3 rows have validation warnings. 245 rows ready to import.")), /* @__PURE__ */ React.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ React.createElement("table", { className: "w-full text-body-sm" }, /* @__PURE__ */ React.createElement("thead", { className: "border-b border-border bg-surface-secondary" }, /* @__PURE__ */ React.createElement("tr", null, COLUMNS.map((col) => /* @__PURE__ */ React.createElement("th", { key: col, className: "px-4 py-2 text-left font-medium capitalize" }, col.replace("_", " "))))), /* @__PURE__ */ React.createElement("tbody", { className: "divide-y divide-border" }, PREVIEW_ROWS.map((row, i) => /* @__PURE__ */ React.createElement("tr", { key: i }, COLUMNS.map((col) => /* @__PURE__ */ React.createElement("td", { key: col, className: "px-4 py-2" }, row[col]))))))), /* @__PURE__ */ React.createElement("div", { className: "mt-6 flex gap-3" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setStep("map") }, "Back"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, onClick: () => setStep("done") }, "Import 245 Patients"))), step === "done" && /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-12 text-center shadow-sm" }, /* @__PURE__ */ React.createElement(Check, { className: "mx-auto mb-4 h-16 w-16 text-success" }), /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-2" }, "Import Complete"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-6" }, "Successfully imported 245 patients. 3 rows were skipped due to validation errors."), /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true, onClick: () => setStep("upload") }, "Import Another File")));
}
export {
  CsvImportPage
};
