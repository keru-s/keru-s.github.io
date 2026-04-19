"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileHover={{ y: -2 }}
      transition={{
        delay,
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function EnterLine({
  className,
  delay = 0
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ scaleX: 0, opacity: 0.35 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ originX: 0 }}
    />
  );
}
