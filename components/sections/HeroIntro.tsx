"use client";

import { motion } from "framer-motion";

// Load sequence, part two: the name fades up after the terrain lines
// finish drawing in (1.2s).
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
