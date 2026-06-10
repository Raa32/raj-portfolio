"use client";

import { motion } from "framer-motion";

// Load sequence: the backdrop photo settles first, then the name
// fades up.
export default function HeroIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
