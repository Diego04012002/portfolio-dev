// Mock data for Diego's developer portfolio
// All content is centralized here for easy editing

export const personal = {
  name: "Diego",
  fullName: "Diego Hernández",
  role: "Full Stack Developer",
  location: "Vigo, España",
  email: "diego.dev@portfolio.es",
  tagline: "Construyo productos digitales rápidos, escalables y con propósito.",
  bio: "Desarrollador Full Stack con más de 2 años de experiencia creando soluciones innovadoras y eficientes para proyectos web y aplicaciones empresariales. Combino un sólido dominio de tecnologías Frontend y Backend con una mentalidad analítica y creativa para resolver problemas complejos.",
  bioExtended: "Desde Vigo, España, he trabajado en plataformas de gestión, optimización de procesos y automatización de sistemas. Me especializo en construir interfaces intuitivas, APIs robustas y soluciones a medida que se adaptan a las necesidades del cliente.",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:diego.dev@portfolio.es",
  },
  available: true,
};

export const strengths = [
  "Full Stack",
  "APIs Robustas",
  "Interfaces Intuitivas",
  "Software de Alto Rendimiento",
  "Mentalidad Analítica",
  "Soluciones Innovadoras",
];

export const stats = [
  { value: 2, suffix: "+", label: "Años de experiencia" },
  { value: 15, suffix: "+", label: "Proyectos completados" },
  { value: 10, suffix: "+", label: "Tecnologías dominadas" },
  { value: 100, suffix: "%", label: "Compromiso con calidad" },
];

export const skills = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Angular", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "TailwindCSS", level: 92 },
    { name: "Astro", level: 75 },
  ],
  Backend: [
    { name: "Java", level: 88 },
    { name: "Spring Boot", level: 85 },
    { name: "Node.js", level: 78 },
    { name: "REST APIs", level: 90 },
  ],
  "Bases de datos": [
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 80 },
  ],
  Herramientas: [
    { name: "Git / GitHub", level: 90 },
    { name: "Vite", level: 85 },
    { name: "Docker", level: 70 },
    { name: "Figma", level: 75 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Cardory",
    description:
      "Juego de cartas de memoria. Encuentra todas las parejas en tiempo récord con dificultad ajustable y ranking global de los mejores tiempos.",
    tech: ["React", "Vite", "TailwindCSS"],
    category: "Frontend",
    demo: "https://cardory.netlify.app",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "PokéDex",
    description:
      "Herramienta visual y comparativa para fans de Pokémon: explora, analiza y compara información de Pokémon y sus movimientos en una interfaz fluida.",
    tech: ["Angular", "TypeScript", "TailwindCSS"],
    category: "Frontend",
    demo: "https://pokeapi-d3.netlify.app",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1542779283-3f3a4c91d8c1?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "GameCur-IA",
    description:
      "Web minimalista que sorprende cada día con datos fascinantes del mundo de los videojuegos, generados por inteligencia artificial.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    category: "Full Stack",
    demo: "https://gamecur-ia.netlify.app",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "Plataforma Gestión",
    description:
      "Sistema interno de gestión de proyectos para empresa con módulos de tareas, reportes y panel de control en tiempo real.",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    category: "Full Stack",
    demo: "#",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Vending Control",
    description:
      "Programa para automatización y control de máquinas de vending mediante código único, con monitoreo y alertas.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    demo: "#",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    featured: false,
  },
];

export const projectFilters = ["Todos", "Frontend", "Full Stack", "Backend"];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Dstech",
    period: "2023 — 2025",
    type: "Empleo",
    description:
      "Mantenimiento y evolución de aplicaciones para gestión de proyectos: corrección de errores e implementación de nuevas funciones según los requisitos del cliente.",
    link: "https://www.dstech.it",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "FSV",
    period: "2023",
    type: "Prácticas",
    description:
      "Desarrollo de programas para la automatización y control de máquinas de vending mediante código único.",
    link: "https://www.fsv.es",
    stack: ["React", "Node.js"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "FSV",
    period: "2022",
    type: "Prácticas",
    description:
      "Desarrollo de páginas web para visualización de datos y estadísticas empresariales.",
    link: "https://www.fsv.es",
    stack: ["JavaScript", "HTML", "CSS"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Desarrollo de aplicaciones web con IA",
    institution: "Udemy",
    year: "2025",
    description:
      "Aplicaciones web con IA usando modelos de lenguaje avanzados para generar contenido dinámico y personalizado.",
    tech: ["DeepSeek", "OpenAI", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Desarrollo de Aplicaciones Web (DAW)",
    institution: "CIFP César Manrique",
    year: "2023",
    description:
      "Ciclo formativo completo: fundamentos, bases de datos, frameworks y despliegue de aplicaciones web complejas.",
    tech: ["Java", "Spring Boot", "JavaScript", "HTML", "CSS", ".NET"],
  },
  {
    id: 3,
    title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "IES Domingo Pérez Minik",
    year: "2022",
    description:
      "Aplicaciones de escritorio y móviles, bases de datos, frameworks y despliegue multiplataforma.",
    tech: ["Java", "JavaFX", "JasperReport", "JavaScript", "HTML", "CSS"],
  },
];

export const navLinks = [
  { id: "home", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "experiencia", label: "Experiencia" },
  { id: "certificados", label: "Certificados" },
  { id: "contacto", label: "Contacto" },
];
