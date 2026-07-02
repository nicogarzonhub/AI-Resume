"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
}

export function useGsapReveal<T extends HTMLElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const from = options.from || { opacity: 0, y: 60 };
      const to = options.to || {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      };

      gsap.fromTo(
        el,
        from,
        {
          ...to,
          scrollTrigger: {
            trigger: options.trigger || el,
            start: options.start || "top 85%",
            end: options.end || "top 40%",
            scrub: options.scrub ?? false,
            toggleActions:
              options.toggleActions || "play none none reverse",
            ...(options.markers ? { markers: true } : {}),
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
