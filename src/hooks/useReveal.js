import { useEffect, useRef } from "react";

// Adds 'is-visible' class when the element enters the viewport.
export const useReveal = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      options
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};
