import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button, Heading, Text, FormField } from "@/components";
import { ROUTES } from "@/constants/routes";
const schema = z.object({
  email: z.string().email("Enter a valid email")
});
function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = () => {
    setSent(true);
  };
  if (sent) {
    return /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-2" }, "Check your email"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-6" }, "We've sent password reset instructions to your email address."), /* @__PURE__ */ React.createElement(Link, { to: ROUTES.auth.login }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", pill: true }, "Back to sign in")));
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-2" }, "Reset your password"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-8" }, "Enter your email and we'll send reset instructions."), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4" }, /* @__PURE__ */ React.createElement(
    FormField,
    {
      label: "Email",
      type: "email",
      placeholder: "you@clinic.ca",
      error: errors.email?.message,
      ...register("email")
    }
  ), /* @__PURE__ */ React.createElement(Button, { type: "submit", variant: "primary", fullWidth: true, pill: true, loading: isSubmitting }, "Send reset link")), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true, className: "mt-6 text-center" }, /* @__PURE__ */ React.createElement(Link, { to: ROUTES.auth.login, className: "font-medium text-primary hover:underline" }, "Back to sign in")));
}
export {
  ForgotPasswordPage
};
