"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { elevationLabel, WAYPOINT_COUNT } from "@/lib/elevation";

// Load sequence: dark overlay, the elevation labels tick from base
// camp to summit, then the whole panel slides up to reveal the hero.
export default function Preloader() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step < WAYPOINT_COUNT - 1) {
      const t = setTimeout(() => setStep((s) => s + 1), 220);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setDone(true), 420);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          aria-hidden="true"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-bg"
        >
          <p className="font-display text-5xl uppercase tracking-tight text-sand md:text-7xl">
            Raj Sahu
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-fog">
            {elevationLabel(step)}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
