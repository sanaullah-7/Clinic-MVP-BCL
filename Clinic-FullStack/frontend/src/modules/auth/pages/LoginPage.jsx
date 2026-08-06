import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Heading, Text, FormField } from "@/components";
import { ROUTES } from "@/constants/routes";
const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters")
});
function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = () => {
    navigate(ROUTES.dashboard.home);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: "h2", className: "mb-2" }, "Welcome back"), /* @__PURE__ */ React.createElement(Text, { variant: "body", muted: true, className: "mb-8" }, "Sign in to your Tendo clinic account"), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4" }, /* @__PURE__ */ React.createElement(
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
  ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ React.createElement(Link, { to: ROUTES.auth.forgotPassword, className: "text-body-sm text-primary hover:underline" }, "Forgot password?")), /* @__PURE__ */ React.createElement(Button, { type: "submit", variant: "primary", fullWidth: true, pill: true, loading: isSubmitting }, "Sign in")), /* @__PURE__ */ React.createElement(Text, { variant: "body-sm", muted: true, className: "mt-6 text-center" }, "Don't have an account?", " ", /* @__PURE__ */ React.createElement(Link, { to: ROUTES.auth.register, className: "font-medium text-primary hover:underline" }, "Start free trial")));
}
export {
  LoginPage
};
