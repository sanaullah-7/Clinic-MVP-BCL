import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Heading, Text, FormField } from "@/components";
import { ROUTES } from "@/constants/routes";
const schema = z.object({
  clinicName: z.string().min(2, "Clinic name is required"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = () => {
    navigate(ROUTES.dashboard.onboarding);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-2" }, "Start your free trial"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-8" }, "14 days free. No credit card required."), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4" }, /* @__PURE__ */ React.createElement(
    FormField,
    {
      label: "Clinic name",
      placeholder: "Harmony Wellness RMT",
      error: errors.clinicName?.message,
      ...register("clinicName")
    }
  ), /* @__PURE__ */ React.createElement(
    FormField,
    {
      label: "Your name",
      placeholder: "Sarah Chen",
      error: errors.fullName?.message,
      ...register("fullName")
    }
  ), /* @__PURE__ */ React.createElement(
    FormField,
    {
      label: "Email",
      type: "email",
      placeholder: "you@clinic.ca",
      error: errors.email?.message,
      ...register("email")
    }
  ), /* @__PURE__ */ React.createElement(
    FormField,
    {
      label: "Password",
      type: "password",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      error: errors.password?.message,
      ...register("password")
    }
  ), /* @__PURE__ */ React.createElement(
    FormField,
    {
      label: "Confirm password",
      type: "password",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      error: errors.confirmPassword?.message,
      ...register("confirmPassword")
    }
  ), /* @__PURE__ */ React.createElement(Button, { type: "submit", variant: "primary", fullWidth: true, pill: true, loading: isSubmitting }, "Create account")), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true, className: "mt-6 text-center" }, "Already have an account?", " ", /* @__PURE__ */ React.createElement(Link, { to: ROUTES.auth.login, className: "font-medium text-primary hover:underline" }, "Sign in")));
}
export {
  RegisterPage
};
