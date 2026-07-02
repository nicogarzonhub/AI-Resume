"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { GooeyNav } from "@/components/ui/GooeyNav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navKeys = ["nav.home", "nav.about", "nav.projects", "nav.contact"];

const sectionIdMap: Record<string, string> = {
  home: "hero",
  about: "about",
  projects: "projects",
  contact: "contact",
};

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!progressRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          gsap.set(progressRef.current, {
            scaleX: self.progress,
            transformOrigin: "left center",
          });
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0"
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-blue-900/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-blue-400 font-bold text-lg tracking-wide hover:text-blue-300 transition-colors"
          >
            NG<span className="text-blue-600">.</span>
          </button>

          <div className="hidden md:flex items-center">
            <GooeyNav
              items={navKeys.map(key => ({
                label: t(key),
                href: `#${sectionIdMap[key.split(".")[1]]}`
              }))}
              animationTime={600}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              onItemClick={(index) => scrollTo(sectionIdMap[navKeys[index].split(".")[1]])}
            />
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="ml-4 px-3 py-1 rounded-lg border border-blue-800/50 text-blue-300 text-xs font-medium hover:bg-blue-500/10 transition-all"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>

          <button
            className="md:hidden text-blue-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-b border-blue-900/30 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => scrollTo(sectionIdMap[key.split(".")[1]])}
                    className="w-full text-base text-gray-400 hover:text-blue-300 transition-colors text-left py-3 border-b border-blue-900/20 last:border-none"
                  >
                    {t(key)}
                  </button>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setLang(lang === "en" ? "es" : "en");
                      setMobileOpen(false);
                    }}
                    className="px-4 py-2 rounded-lg border border-blue-800/50 text-blue-300 text-sm font-medium hover:bg-blue-500/10 transition-all"
                  >
                    {lang === "en" ? "Cambiar a Español" : "Switch to English"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
