"use client";

import { LogoLoop, type LogoItem } from "@/components/ui/LogoLoop";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiPrisma,
  SiPython,
  SiN8N,
  SiSupabase,
} from "react-icons/si";

const techLogos: LogoItem[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiN8N />, title: "n8n", href: "https://n8n.io" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm text-blue-400/60 uppercase tracking-widest">
            Tecnologías con las que trabajo
          </p>
        </div>
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={36}
          gap={56}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Tecnologías"
        />
      </div>
    </section>
  );
}
