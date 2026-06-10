"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Gentle vertical parallax: the image drifts slower than the page.
export default function ParallaxImage({
  src,
  className = "",
  imgClassName = "",
  fetchPriority,
}: {
  src: string;
  className?: string;
  imgClassName?: string;
  fetchPriority?: "high" | "low" | "auto";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt=""
        fetchPriority={fetchPriority}
        style={{ y }}
        className={`h-[116%] w-full scale-[1.08] object-cover ${imgClassName}`}
      />
    </div>
  );
}
