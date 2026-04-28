import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? h.scrollTop / total : 0;
      setProgress(p);
      setVisible(h.scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const r = 18;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);

  return (
    <button
      onClick={top}
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-lg shadow-emerald-500/10 group-hover:border-emerald-500/40 transition-colors">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={r}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-border"
          />
          <circle
            cx="22"
            cy="22"
            r={r}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-emerald-500 transition-[stroke-dashoffset] duration-100"
          />
        </svg>
        <ArrowUp size={16} className="text-foreground group-hover:text-emerald-500 transition-colors" />
      </span>
    </button>
  );
};

export default BackToTop;
