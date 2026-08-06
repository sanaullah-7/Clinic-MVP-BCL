import React from 'react';
import { cn } from "@/lib/cn";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Text } from "../atoms/Typography";
function StatCard({ label, value, icon: Icon, trend, className }) {
  const isPositive = trend && trend.value >= 0;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/15",
        "transition-shadow duration-200 hover:shadow-md",
        className
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true }, label), Icon && /* @__PURE__ */ React.createElement("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-warm" }, /* @__PURE__ */ React.createElement(Icon, { className: "h-5 w-5 text-primary", "aria-hidden": "true" }))),
    /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-h2 font-heading font-semibold text-text-primary" }, value),
    trend && /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex items-center gap-1" }, isPositive ? /* @__PURE__ */ React.createElement(TrendingUp, { className: "h-4 w-4 text-success", "aria-hidden": "true" }) : /* @__PURE__ */ React.createElement(TrendingDown, { className: "h-4 w-4 text-error", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: cn("text-caption font-medium", isPositive ? "text-success" : "text-error")
      },
      isPositive ? "+" : "",
      trend.value,
      "%"
    ), trend.label && /* @__PURE__ */ React.createElement("span", { className: "text-caption text-text-muted" }, trend.label))
  );
}
export {
  StatCard
};
