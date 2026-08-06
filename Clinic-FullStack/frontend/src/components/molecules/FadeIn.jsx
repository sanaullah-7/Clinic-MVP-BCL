import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: {
        opacity: 0,
        y: direction === "up" ? 24 : 0
      },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      },
      className: cn(className),
      ...props
    },
    children
  );
}
function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1
}) {
  return /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: "hidden",
      animate: "visible",
      variants: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      },
      className
    },
    children
  );
}
function StaggerItem({
  children,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    motion.div,
    {
      variants: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
      },
      className
    },
    children
  );
}
export {
  FadeIn,
  StaggerContainer,
  StaggerItem
};
