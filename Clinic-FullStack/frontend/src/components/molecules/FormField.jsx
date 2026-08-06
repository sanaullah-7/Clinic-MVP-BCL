import React from 'react';
import { cn } from "@/lib/cn";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
function FormField({
  label,
  error,
  hint,
  required,
  id,
  className,
  ...inputProps
}) {
  const fieldId = id ?? inputProps.name;
  return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-1.5", className) }, /* @__PURE__ */ React.createElement(Label, { htmlFor: fieldId, required }, label), /* @__PURE__ */ React.createElement(Input, { id: fieldId, error: !!error, "aria-invalid": !!error, "aria-describedby": error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : void 0, ...inputProps }), hint && !error && /* @__PURE__ */ React.createElement("p", { id: `${fieldId}-hint`, className: "text-caption text-text-muted" }, hint), error && /* @__PURE__ */ React.createElement("p", { id: `${fieldId}-error`, className: "text-caption text-error", role: "alert" }, error));
}
export {
  FormField
};
