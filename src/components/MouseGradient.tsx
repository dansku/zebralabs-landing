import React, { useEffect, useRef } from "react";

const MouseGradient: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      el.style.setProperty("--x", x);
      el.style.setProperty("--y", y);
    };

    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return <div ref={ref} aria-hidden className="pointer-gradient" />;
};

export default MouseGradient;
