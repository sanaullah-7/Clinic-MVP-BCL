import React from 'react';
import { useState } from "react";
import { Button, Heading, Text, Badge, Input, Label, Divider } from "@/components";
import { formatCurrency } from "@/lib";
import { CreditCard, Trash2 } from "lucide-react";
const SERVICES = [
  { id: "1", name: "60min Deep Tissue", price: 120 },
  { id: "2", name: "45min Swedish", price: 95 },
  { id: "3", name: "90min Sports Massage", price: 165 },
  { id: "4", name: "30min Consultation", price: 55 }
];
function BillingPage() {
  const [lineItems, setLineItems] = useState([{ service: "60min Deep Tissue", price: 120, qty: 1 }]);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const subtotal = lineItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  const addService = (service) => {
    setLineItems([...lineItems, { service: service.name, price: service.price, qty: 1 }]);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement(Heading, { level: "h1", className: "mb-1" }, "POS Billing"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true }, "Process payments, generate invoices, and manage checkout.")), /* @__PURE__ */ React.createElement("div", { className: "grid gap-6 lg:grid-cols-3" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4 lg:col-span-2" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center justify-between" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3" }, "Checkout \u2014 Jane Doe"), /* @__PURE__ */ React.createElement(Badge, { variant: "primary" }, "Appointment #1042")), /* @__PURE__ */ React.createElement("div", { className: "mb-4 grid gap-2 sm:grid-cols-2" }, SERVICES.map((service) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: service.id,
      type: "button",
      onClick: () => addService(service),
      className: "flex items-center justify-between rounded-lg border border-border p-3 text-left hover:border-primary hover:bg-primary-light/20"
    },
    /* @__PURE__ */ React.createElement("span", { className: "text-body-sm font-medium" }, service.name),
    /* @__PURE__ */ React.createElement("span", { className: "text-body-sm text-primary" }, formatCurrency(service.price))
  ))), /* @__PURE__ */ React.createElement(Divider, { className: "my-4" }), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, lineItems.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, item.service), /* @__PURE__ */ React.createElement("p", { className: "text-body-sm text-text-muted" }, "Qty: ", item.qty)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, formatCurrency(item.price * item.qty)), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setLineItems(lineItems.filter((_, j) => j !== i)) }, /* @__PURE__ */ React.createElement(Trash2, { className: "h-4 w-4 text-text-muted hover:text-error" })))))))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Payment Summary"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-body-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-text-muted" }, "Subtotal"), /* @__PURE__ */ React.createElement("span", null, formatCurrency(subtotal))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-text-muted" }, "GST (5%)"), /* @__PURE__ */ React.createElement("span", null, formatCurrency(tax))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-body font-bold" }, /* @__PURE__ */ React.createElement("span", null, "Total"), /* @__PURE__ */ React.createElement("span", null, formatCurrency(total))))), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-border bg-surface-card p-6 shadow-sm" }, /* @__PURE__ */ React.createElement(Heading, { level: "h3", className: "mb-4" }, "Payment Method"), /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex gap-2" }, ["card", "cash", "e-transfer"].map((m) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: m,
      type: "button",
      onClick: () => setPaymentMethod(m),
      className: `flex-1 rounded-lg border px-3 py-2 text-body-sm capitalize ${paymentMethod === m ? "border-primary bg-primary-light text-primary" : "border-border"}`
    },
    m
  ))), paymentMethod === "card" && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { className: "mb-1 block" }, "Card Number"), /* @__PURE__ */ React.createElement(Input, { placeholder: "4242 4242 4242 4242" })), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { className: "mb-1 block" }, "Expiry"), /* @__PURE__ */ React.createElement(Input, { placeholder: "MM/YY" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { className: "mb-1 block" }, "CVC"), /* @__PURE__ */ React.createElement(Input, { placeholder: "123" })))), /* @__PURE__ */ React.createElement(Button, { variant: "primary", fullWidth: true, pill: true, className: "mt-4 gap-2" }, /* @__PURE__ */ React.createElement(CreditCard, { className: "h-4 w-4" }), "Process ", formatCurrency(total))))));
}
export {
  BillingPage
};
