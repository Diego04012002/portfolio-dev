import React, { useEffect, useRef, useState } from "react";
import { stats } from "../data/data";

const Counter = ({ value, suffix }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-teal-500/[0.04] p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center md:text-left ${
                  i !== 0 ? "md:border-l md:border-border md:pl-6" : ""
                }`}
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
