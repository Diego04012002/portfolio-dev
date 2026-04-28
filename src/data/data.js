// data data for Diego's developer portfolio
// All content is centralized here for easy editing

export const personal = {
  name: "Diego",
  fullName: "Diego Alejandro García Deus",
  role: "Desarrollador Full Stack",
  location: "Vigo, España",
  email: "dgarciadeus@gmail.com",
  tagline: "Construyo productos digitales rápidos, escalables y con propósito.",
  bio: "Desarrollador Full Stack con más de 2 años de experiencia creando soluciones innovadoras y eficientes para proyectos web y aplicaciones empresariales. Combino un sólido dominio de tecnologías Frontend y Backend con una mentalidad analítica y creativa para resolver problemas complejos.",
  bioExtended: "Desde Vigo, España, he trabajado en plataformas de gestión, optimización de procesos y automatización de sistemas. Me especializo en construir interfaces intuitivas, APIs robustas y soluciones a medida que se adaptan a las necesidades del cliente.",
  social: {
    github: "https://github.com/Diego04012002",
    linkedin: "https://www.linkedin.com/in/diego-alejandro-garcía-deus/",
    email: "mailto:dgarciadeus@gmail.com",
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
  { value: 5, suffix: "", label: "Proyectos completados" },
  { value: 5, suffix: "+", label: "Tecnologías dominadas" },
  { value: 100, suffix: "%", label: "Compromiso con calidad" },
];

export const skills = {
  Frontend: [
    { name: "Next.js", level: 80 },
    { name: "Angular", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "TailwindCSS", level: 92 },
    { name: "Astro", level: 75 },
    { name: "React", level: 30 },
  ],
  Backend: [
    { name: "Java", level: 88 },
    { name: "Spring Boot", level: 85 },
  ],
  "Bases de datos": [
    { name: "PostgreSQL", level: 82 },
    { name: "MySQL", level: 80 },
  ],
  Herramientas: [
    { name: "Git / GitHub", level: 90 },
    { name: "Vite", level: 85 },
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
    github: "https://github.com/Diego04012002/memory-game",
    image:
      "memory-game.png",
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
    github: "https://github.com/Diego04012002/pokeapi",
    image:
      "pokeapi.png",
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
    github: "https://github.com/Diego04012002/gamecur-ia",
    image:
      "gamecur-ia.png",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio R4mos",
    description:
      "Portfolio del reconocido cantante canario R4mos: Descubre su música, videos y próximos conciertos.",
    tech: ["React", "JavaScript", "CSS"],
    category: "Frontend",
    demo: "https://r4mos.netlify.app",
    github: "https://github.com/Diego04012002/ramos-portfolio",
    image:
      "ramos-portfolio.png",
    featured: true,
  },
];

export const projectFilters = ["Todos", "Frontend", "Full Stack", "Backend"];

export const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Experienceis IT / Dedalus",
    period: "2025 — Actualidad",
    type: "Empleo",
    description:
      "Desarrollo y mantenimiento de el software hospitalario utilizado en varias comunidades autónomas de España",
    link: "https://www.dedalus.com/spain/es/",
    stack: ["JavaScript", "HTML", "CSS", "Java", "Oracle"],
  },
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
    id: 4,
    title: "Angular: De cero a experto",
    institution: "Udemy",
    year: "2025",
    description:
      "Signals, componentes, servicios, zoneless, mapas, autenticación, despliegues, carga de archivos, Git, GitHub y mucho más",
    tech: ["Angular", "TypeScript", "HTML", "CSS"],
  },
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
  // { id: "contacto", label: "Contacto" },
];
