"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  className?: string;
}

export default function Counter({ target, className = "" }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;

          function tick() {
            current += Math.ceil((target - current) / 12);
            if (current >= target) {
              setCount(target);
              return;
            }
            setCount(current);
            requestAnimationFrame(tick);
          }

          tick();
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}