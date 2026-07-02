"use client";

import { useEffect, useRef, useState } from "react";
import { ChromaGrid, type ChromaItem } from "@/components/ui/ChromaGrid";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
  User,
  Server,
  BrainCircuit,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import TrueFocus from "@/components/ui/TrueFocus";
import { GooeyButton } from "@/components/ui/gooey-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  user: <User className="w-4 h-4 text-blue-400" />,
  server: <Server className="w-4 h-4 text-cyan-400" />,
  brain: <BrainCircuit className="w-4 h-4 text-purple-400" />,
  globe: <Globe className="w-4 h-4 text-sky-400" />,
};

function AboutSection() {
  const { t } = useLanguage();

  const aboutItems: BentoItem[] = [
    {
      title: t("about.profile.title"),
      description: t("about.profile.desc"),
      icon: iconMap.user,
      tags: ["DesarrolladorJunior", "AprendizajeAutónomo", "TrabajoEnEquipo"],
      colSpan: 2,
      hasPersistentHover: true,
    },
    {
      title: t("about.backend.title"),
      description: t("about.backend.desc"),
      icon: iconMap.server,
      tags: ["Node.js", "Python", "JavaScript", "Docker"],
    },
    {
      title: t("about.ai.title"),
      description: t("about.ai.desc"),
      icon: iconMap.brain,
      tags: ["AI", "RAG", "n8n", "LangChain"],
    },
    {
      title: t("about.languages.title"),
      description: t("about.languages.desc"),
      icon: iconMap.globe,
      tags: ["EspañolNativo", "InglésB2_Certificado"],
      colSpan: 2,
    },
  ];

  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-blue-50">
            {t("about.title")}
          </h1>
          <p className="text-lg text-blue-200/70 text-center mt-4 max-w-[600px] mx-auto">
            {t("about.description")}
          </p>
        </>
      }
    >
      <BentoGrid items={aboutItems} />
    </ContainerScroll>
  );
}

export default function Home() {
  const [show, setShow] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        { ref: aboutRef.current, name: "about" },
        { ref: projectsRef.current, name: "projects" },
        { ref: contactRef.current, name: "contact" },
      ];

      sections.forEach(({ ref, name }) => {
        if (!ref) return;
        ScrollTrigger.create({
          trigger: ref,
          start: "top 75%",
          onEnter: () => {
            gsap.fromTo(
              ref.querySelectorAll(".gsap-reveal"),
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                overwrite: "auto",
              }
            );
          },
          once: true,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-black">
      <Navbar />

      <section
        id="hero"
        className="h-screen w-full bg-black flex flex-col overflow-hidden relative pt-16"
      >
        {show && (
          <div className="absolute inset-x-0 top-60 z-20 hidden md:block">
            <div className="max-w-7xl mx-auto px-6">
              <div className="w-52 -ml-20">
                <ChromaGrid
                  items={[
                    {
                      image: "/nic.jpg",
                      title: "",
                      gradient: "linear-gradient(145deg, #3B82F6, #000)",
                    }
                  ]}
                  cardWidth={208}
                  radius={200}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col items-center justify-center">
          {show && (
            <div className="flex flex-col items-center relative z-20">
              {/* Mobile Image */}
              <div className="w-40 mb-6 md:hidden">
                <ChromaGrid
                  items={[
                    {
                      image: "/nic.jpg",
                      title: "",
                      gradient: "linear-gradient(145deg, #3B82F6, #000)",
                    }
                  ]}
                  cardWidth={160}
                  radius={150}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="md:text-5xl text-2xl lg:text-7xl font-light text-white tracking-wide uppercase"
              >
                Nicolas Garzon
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 md:mt-8"
              >
                <TrueFocus
                  sentence="Transforming challenges through development & collaboration"
                  borderColor="#3b82f6"
                  glowColor="rgba(59, 130, 246, 0.6)"
                  blurAmount={3}
                  animationDuration={0.8}
                  pauseBetweenAnimations={1.5}
                />
              </motion.div>

              <div className="mt-8">
                <GooeyButton
                  texts={["Ver mi portafolio", "Explore my work", "Mis proyectos"]}
                  href="#projects"
                />
              </div>
            </div>
          )}
        </div>

        <div className="w-[40rem] max-w-full h-40 relative mx-auto mb-4">
          <div className="absolute inset-x-0 mx-auto top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-0 mx-auto top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-0 mx-auto top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-0 mx-auto top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={0.6}
            particleDensity={800}
            className="absolute inset-0 w-full h-full"
            particleColor="#3b82f6"
            speed={2}
          />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#60a5fa"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </section>

      <section id="about" ref={aboutRef}>
        <div className="gsap-reveal">
          <AboutSection />
        </div>
      </section>

      <TechStack />

      <div ref={projectsRef} id="projects">
        <div className="gsap-reveal">
          <Projects />
        </div>
      </div>

      <section id="contact" ref={contactRef}>
        <div className="gsap-reveal">
          <Contact />
        </div>
      </section>

      <Footer />
    </main>
  );
}
