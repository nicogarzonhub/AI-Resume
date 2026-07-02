export type Lang = "en" | "es";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Nicolas Garzon",
    "hero.subtitle": "Full-Stack Developer & UI/UX Designer",
    "hero.cta": "See my work",
    "about.title": "About me",
    "about.description":
      "Junior Software Developer passionate about AI automation, backend development, and creating logical, efficient solutions.",
    "about.profile.title": "Professional Profile",
    "about.profile.desc":
      "Software Development student at RIWI with a strong interest in starting my career. I am characterized by my discipline, fast learning ability, and problem-solving skills. I seek to add value, strengthen my skills, and grow professionally in a collaborative environment.",
    "about.backend.title": "Development & Backend",
    "about.backend.desc":
      "Application creation, programming logic implementation, and data structure management using modern technologies and containerized environments.",
    "about.ai.title": "AI Automation",
    "about.ai.desc":
      "Experience designing and integrating automated workflows, RAG (Retrieval-Augmented Generation) systems, and API consumption to optimize processes.",
    "about.languages.title": "Languages & Communication",
    "about.languages.desc":
      "Ability to interact in global environments and consume advanced technical documentation.",
    "projects.title": "Featured Projects",
    "projects.description":
      "A selection of projects that showcase my skills and passion for building great software.",
    "projects.view": "View Project",
    "projects.viewAll": "View all projects",
    "projects.comingSoon": "Coming Soon",
    "contact.title": "Let's work together",
    "contact.description":
      "Have a project in mind? Let's talk about it.",
    "contact.cta": "Get in touch",
    "contact.email": "3026216990",
    "footer.copyright": "All rights reserved.",
    "skill.frontend": "Frontend Development",
    "skill.frontend.desc":
      "Building responsive, performant interfaces with React, Next.js, and Tailwind CSS.",
    "skill.uiux": "UI/UX Design",
    "skill.uiux.desc":
      "Crafting intuitive interfaces with a keen eye for detail, animation, and accessibility.",
    "skill.backend": "Backend & APIs",
    "skill.backend.desc":
      "Designing scalable RESTful and GraphQL APIs with Node.js, PostgreSQL, and cloud services.",
    "skill.mobile": "Mobile Development",
    "skill.mobile.desc":
      "Cross-platform mobile applications using React Native with native module integration.",
    "skill.devops": "Cloud & DevOps",
    "skill.devops.desc":
      "Deploying and managing infrastructure on AWS, Vercel, and Docker with CI/CD pipelines.",
    "skill.performance": "Web Performance",
    "skill.performance.desc":
      "Optimizing Core Web Vitals, Lighthouse scores, and bundle size for production apps.",
    "project.1.title": "AI Tech Interviewer",
    "project.1.desc":
      "A full-stack AI-powered technical interview simulator. Configure your role, level, and stack — the agent conducts a real adaptive interview and generates a detailed evaluation report with radar chart scoring.",
    "project.1.tags": "React, Python, FastAPI, OpenAI GPT-4o, JavaScript",
    "project.2.title": "AI Resume Analyzer",
    "project.2.desc":
      "Upload your CV, the AI tells you if you pass the ATS filter and how to improve. Analyzes compatibility, missing keywords, and generates an optimized professional summary.",
    "project.2.tags": "React, Vite, FastAPI, OpenAI, PyMuPDF",
    "project.3.title": "AI Conversational Agent",
    "project.3.desc":
      "A bilingual AI agent with voice pipeline (STT/TTS), RAG, autonomous tool calling, semantic caching, and multimodal vision in a polished React interface.",
    "project.3.tags": "React, Vite, OpenAI, Whisper, RAG",
    "project.4.title": "Coming Soon",
    "project.4.desc":
      "Exciting project in development. Stay tuned for updates.",
    "project.4.tags": "En desarrollo",
    "project.5.title": "Coming Soon",
    "project.5.desc":
      "Exciting project in development. Stay tuned for updates.",
    "project.5.tags": "En desarrollo",
    "project.6.title": "Pegasus Mechanics",
    "project.6.desc":
      "Web platform for motorcycle workshop management with an integrated AI assistant capable of answering workshop questions, recommending services, and diagnosing mechanical failures. Python backend with LangChain, RAG and OpenAI, API in Node.js and modern frontend in React and Vite.",
    "project.6.tags": "React, Vite, Node.js, Python, LangChain, OpenAI, RAG, FastAPI",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.title": "Nicolas Garzon",
    "hero.subtitle": "Desarrollador Full-Stack & Diseñador UI/UX",
    "hero.cta": "Ver mi trabajo",
    "about.title": "Acerca de mí",
    "about.description":
      "Desarrollador de Software Junior apasionado por la automatización con IA, el backend y la creación de soluciones lógicas y eficientes.",
    "about.profile.title": "Perfil Profesional",
    "about.profile.desc":
      "Estudiante de Desarrollo de Software en RIWI con alto interés en iniciar mi carrera. Me caracterizo por mi disciplina, capacidad de aprendizaje rápido y resolución de problemas. Busco aportar valor, fortalecer mis habilidades y crecer profesionalmente en un entorno colaborativo.",
    "about.backend.title": "Desarrollo y Backend",
    "about.backend.desc":
      "Creación de aplicaciones, implementación de lógica de programación y manejo de estructuras de datos utilizando tecnologías modernas y entornos en contenedores.",
    "about.ai.title": "Automatización IA",
    "about.ai.desc":
      "Experiencia en el diseño e integración de flujos automatizados, sistemas RAG (Retrieval-Augmented Generation) y consumo de APIs para optimizar procesos.",
    "about.languages.title": "Idiomas y Comunicación",
    "about.languages.desc":
      "Capacidad para interactuar en entornos globales y consumir documentación técnica avanzada.",
    "projects.title": "Proyectos Destacados",
    "projects.description":
      "Una selección de proyectos que muestran mis habilidades y pasión por crear gran software.",
    "projects.view": "Ver Proyecto",
    "projects.viewAll": "Ver todos los proyectos",
    "projects.comingSoon": "Próximamente",
    "contact.title": "Trabajemos juntos",
    "contact.description":
      "¿Tienes un proyecto en mente? Hablemos de ello.",
    "contact.cta": "Ponte en contacto",
    "contact.email": "3026216990",
    "footer.copyright": "Todos los derechos reservados.",
    "skill.frontend": "Desarrollo Frontend",
    "skill.frontend.desc":
      "Creando interfaces responsivas y eficientes con React, Next.js y Tailwind CSS.",
    "skill.uiux": "Diseño UI/UX",
    "skill.uiux.desc":
      "Diseñando interfaces intuitivas con atención al detalle, animación y accesibilidad.",
    "skill.backend": "Backend & APIs",
    "skill.backend.desc":
      "Diseñando APIs RESTful y GraphQL escalables con Node.js, PostgreSQL y servicios cloud.",
    "skill.mobile": "Desarrollo Móvil",
    "skill.mobile.desc":
      "Aplicaciones móviles multiplataforma usando React Native con integración de módulos nativos.",
    "skill.devops": "Cloud & DevOps",
    "skill.devops.desc":
      "Desplegando y administrando infraestructura en AWS, Vercel y Docker con pipelines CI/CD.",
    "skill.performance": "Rendimiento Web",
    "skill.performance.desc":
      "Optimizando Core Web Vitals, puntuaciones Lighthouse y tamaño de bundle para apps en producción.",
    "project.1.title": "AI Tech Interviewer",
    "project.1.desc":
      "Simulador de entrevistas técnicas full-stack impulsado por IA. Configura tu rol, nivel y stack — el agente realiza una entrevista adaptativa real y genera un reporte detallado con evaluación en gráfico de radar.",
    "project.1.tags": "React, Python, FastAPI, OpenAI GPT-4o, JavaScript",
    "project.2.title": "AI Resume Analyzer",
    "project.2.desc":
      "Sube tu CV, la IA te dice si pasas el filtro ATS y cómo mejorar. Analiza compatibilidad, palabras clave faltantes y genera un resumen profesional optimizado.",
    "project.2.tags": "React, Vite, FastAPI, OpenAI, PyMuPDF",
    "project.3.title": "Agente Conversacional IA",
    "project.3.desc":
      "Agente IA bilingüe con pipeline de voz (STT/TTS), RAG, llamada autónoma de herramientas, caché semántico y visión multimodal en una interfaz React moderna.",
    "project.3.tags": "React, Vite, OpenAI, Whisper, RAG",
    "project.4.title": "Próximamente",
    "project.4.desc":
      "Proyecto emocionante en desarrollo. Mantente atento a las actualizaciones.",
    "project.4.tags": "En desarrollo",
    "project.5.title": "Próximamente",
    "project.5.desc":
      "Proyecto emocionante en desarrollo. Mantente atento a las actualizaciones.",
    "project.5.tags": "En desarrollo",
    "project.6.title": "Pegasus Mechanics",
    "project.6.desc":
      "Plataforma web para gestión de taller de motocicletas con asistente IA integrado capaz de responder preguntas del taller, recomendar servicios y diagnosticar fallas mecánicas. Backend en Python con LangChain, RAG y OpenAI, API en Node.js y frontend moderno en React y Vite.",
    "project.6.tags": "React, Vite, Node.js, Python, LangChain, OpenAI, RAG, FastAPI",
  },
};
