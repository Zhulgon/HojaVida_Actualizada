const translations = {
  es: {
    metaTitle: "Juan Sebastián Rubiano | Portafolio",
    metaDescription:
      "Portafolio de Juan Sebastián Rubiano, estudiante de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos. Proyectos en desarrollo web, Python, SQL, React, TypeScript, análisis de datos, machine learning, IA aplicada y realidad aumentada.",
    nav: {
      menu: "Menú",
      about: "Sobre mí",
      skills: "Tecnologías",
      projects: "Proyectos",
      credentials: "Certificaciones",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Datos · Analítica · IA aplicada · Software",
      title:
        'Trabajo con <span class="accent">datos</span>, <span class="accent">analítica</span> e <span class="accent">IA aplicada</span> para convertir información en decisiones y soluciones útiles.',
      summary1:
        "Estoy enfocado en análisis de datos, visualización, bases de datos e inteligencia artificial aplicada a procesos reales. Me interesa usar la información para ordenar operación, detectar patrones y apoyar mejores decisiones.",
      summary2:
        "Como complemento, desarrollo software web y prototipos funcionales que conectan datos, negocio y experiencia de usuario. Ese cruce se ve en proyectos como dashboards analíticos, Optica Suite y experiencias AR aplicadas al sector óptico.",
      primaryCta: "Contactarme",
      secondaryCta: "Ver proyectos",
      availabilityTitle: "Disponible para prácticas, pasantías y roles junior",
      availabilityBody:
        "Busco oportunidades como analista de datos junior, practicante de ingeniería de sistemas o roles iniciales donde pueda aportar en analítica, bases de datos, automatización e inteligencia artificial aplicada, con desarrollo de software como complemento.",
      facts: [
        { value: "Excel · Python · SQL", label: "enfoque principal en datos" },
        { value: "PostgreSQL · NoSQL · Tableau", label: "análisis, persistencia y visualización" },
        { value: "C1 English · EF SET", label: "comunicación técnica y profesional" },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Datos, criterio de negocio y desarrollo de software como complemento.",
      intro:
        "Mi perfil parte del trabajo con datos y se fortalece con disciplina, aprendizaje constante y contexto operativo real.",
      paragraphs: [
        "Estoy enfocado en trabajar con datos, analítica e inteligencia artificial aplicada para resolver problemas reales de operación. Me interesa transformar información en reportes, dashboards y criterios útiles para tomar decisiones con más claridad.",
        "Como complemento, desarrollo software web y prototipos que conectan bases de datos, automatización, producto y experiencia de usuario. La disciplina, el ciclismo, el aprendizaje continuo y el contexto de negocio real fortalecen la forma en que trabajo.",
      ],
      highlights: ["Disciplina", "Ciclismo", "Aprendizaje continuo", "Inglés C1", "Criterio de negocio"],
    },
    skills: {
      eyebrow: "Tecnologías",
      title: "Tecnologías y herramientas con las que hoy aporto más valor.",
      intro:
        "Primero aparece mi foco en datos y analítica; luego el desarrollo de software, las tecnologías inmersivas y las herramientas con las que trabajo en proyectos reales.",
      items: [
        {
          title: "Datos e IA",
          summary: "Excel, análisis, visualización y automatización aplicada a decisiones.",
          accent: "#8ff0b3",
          tools: [
            { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
            { label: "Python", icon: "fa-brands fa-python", color: "#8ec5ff" },
            { label: "Tableau", abbr: "Tb", color: "#ffb36b" },
            { label: "IA Aplicada", icon: "fa-solid fa-robot", color: "#8ee6d8" },
            { label: "Dashboards", icon: "fa-solid fa-chart-column", color: "#86d6ff" },
            { label: "Machine Learning", abbr: "ML", color: "#ffb15a" },
          ],
        },
        {
          title: "Desarrollo de software",
          summary: "Software web como complemento para llevar datos y procesos a producto.",
          accent: "#7ee0ff",
          tools: [
            { label: "HTML", icon: "fa-brands fa-html5", color: "#ff7b54" },
            { label: "CSS", icon: "fa-brands fa-css3-alt", color: "#5cb8ff" },
            { label: "JavaScript", icon: "fa-brands fa-js", color: "#ffd34d" },
            { label: "TypeScript", abbr: "TS", color: "#67a7ff" },
            { label: "React", icon: "fa-brands fa-react", color: "#69dbff" },
            { label: "Node.js", icon: "fa-brands fa-node-js", color: "#6edb8f" },
          ],
        },
        {
          title: "AR y XR",
          summary: "Tecnologías inmersivas para catálogos, pruebas y experiencias interactivas.",
          accent: "#ffb07d",
          tools: [
            { label: "Unity", abbr: "U", color: "#f3f5fb" },
            { label: "C#", abbr: "C#", color: "#9f8cff" },
            { label: "Vuforia", abbr: "Vu", color: "#80ffa8" },
            { label: "XR", abbr: "XR", color: "#7ee0ff" },
          ],
        },
        {
          title: "Bases de datos y herramientas",
          summary: "Persistencia y herramientas de trabajo que uso con más frecuencia.",
          accent: "#c9b4ff",
          tools: [
            { label: "SQL", abbr: "SQL", color: "#86d6ff" },
            { label: "PostgreSQL", abbr: "PG", color: "#82b9ff" },
            { label: "NoSQL", abbr: "No", color: "#9bd8ff" },
            { label: "Git", icon: "fa-brands fa-git-alt", color: "#ff8a64" },
            { label: "GitHub", icon: "fa-brands fa-github", color: "#f3f5fb" },
            { label: "Docker", icon: "fa-brands fa-docker", color: "#69b8ff" },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos destacados",
      title: "Lo primero que quiero mostrar es lo que ya he construido.",
      intro:
        "Estos proyectos representan mejor mi perfil hoy: software operativo, visualización de datos, experiencias inmersivas y apps pensadas como producto.",
      items: [
        {
          name: "Optica Suite",
          kind: "featured",
          meta: "Software operativo · Full stack",
          title: "Suite web para la gestión comercial, clínica y logística de ópticas",
          summary:
            "Sistema orientado al funcionamiento completo de una óptica: pacientes, citas, ventas, órdenes de laboratorio, cierre de caja, historias clínicas, control por roles, auditoría y reportes.",
          bullets: [
            "Modela procesos reales del negocio óptico con foco en trazabilidad y operación.",
            "Arquitectura con NestJS, Prisma, PostgreSQL, React, Vite y TypeScript.",
            "Incluye módulos críticos para clínica, ventas, laboratorio, caja y analítica comercial.",
          ],
          tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
          video: "assets/projects/VideoOpti-suite.mp4",
          fallback: "OS",
        },
        {
          name: "AR Monturas",
          kind: "compact",
          meta: "Unity · Realidad aumentada",
          title: "Catálogo en AR con image target y face tracking para ópticas",
          summary:
            "Aplicación móvil en Unity para Android que permite visualizar monturas en 3D, navegar referencias del catálogo y probar una experiencia experimental con face tracking.",
          bullets: [
            "Reconocimiento de imagen objetivo con Vuforia.",
            "Cambio de referencias y selección de tallas en entorno AR.",
            "Escena adicional para prueba de montura sobre rostro con cámara frontal.",
          ],
          tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
          video: "assets/projects/ar-monturas-demo.mp4",
          fallback: "AR",
        },
        {
          name: "HR Dashboard en Tableau",
          kind: "standard",
          meta: "BI · Data visualization",
          title: "Dashboard ejecutivo y detallado para analítica de recursos humanos",
          summary:
            "Proyecto en Tableau diseñado para convertir datos de empleados en una vista útil para liderazgo: headcount, empleados activos, terminaciones, distribución por áreas y evolución de contrataciones.",
          bullets: [
            "Dashboard con vista summary y vista details.",
            "Apoya decisiones de talento, rotación, reclutamiento y distribución del personal.",
            "Incluye workbook, dataset, documentación formal y mockups.",
          ],
          tags: ["Tableau", "Python", "CSV", "Draw.io", "Storytelling"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DashboardTableau" }],
          image: "assets/projects/tableau-dashboard-summary.png",
        },
        {
          name: "App Finanzas + Hábitos",
          kind: "standard",
          meta: "Mobile product · React Native",
          title: "Aplicación personal para hábitos, finanzas y progreso gamificado",
          summary:
            "Proyecto que mezcla organización personal, educación financiera y mecánicas de producto. Permite registrar hábitos, ingresos, gastos, metas de ahorro y progreso con capas de gamificación.",
          bullets: [
            "Construida con Expo, React Native, TypeScript, Zustand y persistencia local.",
            "Incluye misiones, niveles, logros, academia financiera y comparativos semanales.",
            "Pensada como producto real, con roadmap, tests, backup y sync opcional.",
          ],
          tags: ["Expo", "React Native", "TypeScript", "Zustand", "Jest", "Product thinking"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/APP_Finanzas_Habitos" }],
          image: "assets/projects/finanzas-home.png",
        },
        {
          name: "IA y análisis de datos",
          kind: "standard",
          meta: "Machine learning · Exploración",
          title: "Modelos y ejercicios con datasets de texto, audio y video",
          summary:
            "Trabajo práctico para fortalecer preparación de datos, exploración, evaluación y lectura de resultados con modelos supervisados y redes neuronales básicas.",
          bullets: [
            "Uso de Pandas, NumPy, Scikit-learn y TensorFlow según el problema.",
            "Énfasis en limpieza, EDA y documentación entendible de hallazgos.",
            "Interés especial en proyectos donde IA y negocio se crucen de forma útil.",
          ],
          tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "EDA"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon" }],
          image: "assets/projects/MlCatalogo.png",
          fallback: "ML",
        },
      ],
    },
    credentials: {
      eyebrow: "Certificaciones y fortalezas",
      title: "Formación complementaria y habilidades profesionales.",
      intro:
        "Certificaciones, cursos y fortalezas que respaldan mi perfil en tecnología, comunicación técnica y aprendizaje continuo.",
      items: [
        {
          icon: "fa-solid fa-chart-column",
          topline: "Google · Analítica",
          title: "Google Data Analytics y Google Advanced Data Analytics",
          body: "Formación enfocada en limpieza de datos, análisis exploratorio, SQL, dashboards y comunicación clara de hallazgos.",
          badges: ["Google", "Data Analytics", "SQL", "Dashboards"],
        },
        {
          icon: "fa-solid fa-certificate",
          topline: "IBM · IA y tecnologías emergentes",
          title: "Ruta IBM en IA, ciberseguridad, mentalidad digital y empleabilidad con IA",
          body: "Incluye Digital Mindset, Cybersecurity Fundamentals, Explore Emerging Tech y cursos de AvanzaTec sobre IA, nuevas tecnologías y búsqueda laboral con IA.",
          badges: ["IBM", "AI", "Cybersecurity", "Emerging Tech"],
          link: { label: "Ver más en LinkedIn", href: "https://www.linkedin.com/in/juansrubiano" },
        },
        {
          icon: "fa-solid fa-language",
          topline: "Idiomas y fundamentos",
          title: "EF SET C1, PCAP Python y bases web/mobile",
          body: "Complemento la base técnica con EF SET English Certificate (C1 Advanced), PCAP: Programming Essentials in Python y cursos de Google Actívate en HTML/CSS y desarrollo de apps móviles.",
          badges: ["C1 English", "Python", "HTML/CSS", "Mobile"],
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Experiencia que mezcla operación real con construcción técnica.",
      intro:
        "Esto es lo que más me diferencia: no vengo solo de la teoría o del aula, sino también de haber vivido problemas reales de negocio y convertirlos en soluciones.",
      items: [
        {
          topline: "Sector óptico · 2 años",
          title: "Propietario y administrador de óptica",
          body: "Gestión de inventario, proveedores, flujo de caja, atención al cliente y dinámica comercial. Ese contexto fue clave para identificar necesidades reales y diseñar productos más aterrizados.",
        },
        {
          topline: "Producto y desarrollo",
          title: "Construcción de software para procesos reales",
          body: "Desarrollo de soluciones orientadas a operación, visualización y experiencia digital, especialmente en proyectos donde el software debe resolver fricción concreta y no solo verse bien.",
        },
        {
          topline: "Semillero, universidad y proyectos propios",
          title: "Formación aplicada en datos, IA y software",
          body: "Participación en proyectos académicos y personales de desarrollo, analítica y prototipado técnico, siempre buscando que el entregable sea demostrable y útil.",
        },
      ],
    },
    education: {
      eyebrow: "Formación",
      title: "Base académica y aprendizaje continuo.",
      intro:
        "La formación formal está respaldada por práctica constante en proyectos, documentación técnica y exploración de herramientas reales.",
      items: [
        {
          topline: "Universidad Tecnológica de Santander",
          title: "Ingeniería de Sistemas",
          body: "Estudiante de décimo semestre con interés especial en IA, análisis de datos, arquitectura de software y construcción de productos tecnológicos.",
        },
        {
          topline: "Universidad Tecnológica de Santander",
          title: "Tecnólogo en Desarrollo de Sistemas Informáticos",
          body: "Formación sólida en programación, análisis, bases de datos y diseño de soluciones orientadas a necesidades reales.",
        },
        {
          topline: "Aprendizaje continuo",
          title: "Exploración constante en datos, producto y software",
          body: "Complemento la formación con proyectos propios, lectura técnica, documentación, pruebas con nuevas herramientas y mejoras iterativas sobre productos ya construidos.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Si hay una vacante o un proyecto interesante, conversemos.",
      body:
        "Estoy abierto a prácticas profesionales, roles junior y retos donde pueda aportar en software, datos, IA aplicada o construcción de producto con criterio de negocio.",
      formTitle: "Escríbeme desde aquí",
      formBody: "El formulario prepara un correo con tu mensaje listo para enviar.",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      submit: "Preparar correo",
      feedbackMissing: "Completa nombre, correo y mensaje para preparar el correo.",
      feedbackReady: "Abriendo tu cliente de correo...",
    },
    footer: {
      backToTop: "Volver arriba",
      copy: "© {year} Juan Sebastián Rubiano. Software, datos e IA con enfoque práctico.",
    },
    theme: {
      light: "Modo claro",
      dark: "Modo oscuro",
    },
  },
  en: {
    metaTitle: "Juan Sebastian Rubiano | Portfolio",
    metaDescription:
      "Portfolio of Juan Sebastian Rubiano, Systems Engineering student and Software Development Technologist. Projects in web development, Python, SQL, React, TypeScript, data analytics, machine learning, applied AI and augmented reality.",
    nav: {
      menu: "Menu",
      about: "About Me",
      skills: "Technologies",
      projects: "Projects",
      credentials: "Credentials",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Data · Analytics · Applied AI · Software",
      title:
        'I work with <span class="accent">data</span>, <span class="accent">analytics</span> and <span class="accent">applied AI</span> to turn information into useful decisions and solutions.',
      summary1:
        "My main focus is data analysis, visualization, databases and applied AI for real workflows. I am interested in using information to organize operations, detect patterns and support better decision-making.",
      summary2:
        "As a complement, I build web software and functional prototypes that connect data, business logic and user experience. That mix appears in projects such as analytical dashboards, Optica Suite and applied AR experiences.",
      primaryCta: "Let's talk",
      secondaryCta: "See projects",
      availabilityTitle: "Open to internships, entry-level and junior roles.",
      availabilityBody:
        "I am looking for opportunities as a junior data analyst, systems engineering intern or early-career role where I can contribute in analytics, databases, automation and applied AI, with software development as a complement.",
      facts: [
        { value: "Excel · Python · SQL", label: "main data focus" },
        { value: "PostgreSQL · NoSQL · Tableau", label: "analysis, persistence and visualization" },
        { value: "C1 English · EF SET", label: "technical and professional communication" },
      ],
    },
    about: {
      eyebrow: "About Me",
      title: "Data focus, business awareness and software as a complement.",
      intro:
        "My profile starts from working with data and is strengthened by discipline, continuous learning and real operational context.",
      paragraphs: [
        "I am focused on data, analytics and applied artificial intelligence to solve real operational problems. I like turning information into reports, dashboards and clearer decision-making criteria.",
        "As a complement, I build web software and prototypes that connect databases, automation, product thinking and user experience. Discipline, cycling, continuous learning and business context shape the way I work.",
      ],
      highlights: ["Discipline", "Cycling", "Continuous learning", "C1 English", "Business awareness"],
    },
    skills: {
      eyebrow: "Technologies",
      title: "Technologies and tools where I currently create the most value.",
      intro:
        "Data and analytics come first, followed by software development, immersive technologies and the tools I use in real project work.",
      items: [
        {
          title: "Data and AI",
          summary: "Excel, analytics, visualization and automation applied to decisions.",
          accent: "#8ff0b3",
          tools: [
            { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
            { label: "Python", icon: "fa-brands fa-python", color: "#8ec5ff" },
            { label: "Tableau", abbr: "Tb", color: "#ffb36b" },
            { label: "Applied AI", icon: "fa-solid fa-robot", color: "#8ee6d8" },
            { label: "Dashboards", icon: "fa-solid fa-chart-column", color: "#86d6ff" },
            { label: "ML", abbr: "ML", color: "#ffb15a" },
          ],
        },
        {
          title: "Software Development",
          summary: "Web software as a complement for turning data and processes into products.",
          accent: "#7ee0ff",
          tools: [
            { label: "HTML", icon: "fa-brands fa-html5", color: "#ff7b54" },
            { label: "CSS", icon: "fa-brands fa-css3-alt", color: "#5cb8ff" },
            { label: "JavaScript", icon: "fa-brands fa-js", color: "#ffd34d" },
            { label: "TypeScript", abbr: "TS", color: "#67a7ff" },
            { label: "React", icon: "fa-brands fa-react", color: "#69dbff" },
            { label: "Node.js", icon: "fa-brands fa-node-js", color: "#6edb8f" },
          ],
        },
        {
          title: "AR and XR",
          summary: "Immersive technologies for catalogs, trials and interactive experiences.",
          accent: "#ffb07d",
          tools: [
            { label: "Unity", abbr: "U", color: "#f3f5fb" },
            { label: "C#", abbr: "C#", color: "#9f8cff" },
            { label: "Vuforia", abbr: "Vu", color: "#80ffa8" },
            { label: "XR", abbr: "XR", color: "#7ee0ff" },
          ],
        },
        {
          title: "Databases and Tools",
          summary: "Persistence and day-to-day tooling I use most often.",
          accent: "#c9b4ff",
          tools: [
            { label: "SQL", abbr: "SQL", color: "#86d6ff" },
            { label: "PostgreSQL", abbr: "PG", color: "#82b9ff" },
            { label: "NoSQL", abbr: "No", color: "#9bd8ff" },
            { label: "Git", icon: "fa-brands fa-git-alt", color: "#ff8a64" },
            { label: "GitHub", icon: "fa-brands fa-github", color: "#f3f5fb" },
            { label: "Docker", icon: "fa-brands fa-docker", color: "#69b8ff" },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Featured Projects",
      title: "The first thing I want to show is what I have already built.",
      intro:
        "These projects represent my profile best today: operational software, data visualization, immersive experiences and product-minded apps.",
      items: [
        {
          name: "Optica Suite",
          kind: "featured",
          meta: "Operational software · Full stack",
          title: "Web suite for commercial, clinical and logistics workflows in optical businesses",
          summary:
            "A system built around the complete operation of an optical store: patients, appointments, sales, lab orders, cash closing, clinical records, role-based access, audit logs and reporting.",
          bullets: [
            "Models real optical business processes with traceability and operations in mind.",
            "Built with NestJS, Prisma, PostgreSQL, React, Vite and TypeScript.",
            "Includes critical modules for clinic, sales, lab workflow, cash management and commercial analytics.",
          ],
          tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
          video: "assets/projects/VideoOpti-suite.mp4",
          fallback: "AR",
        },
        {
          name: "AR Monturas",
          kind: "compact",
          meta: "Unity · Augmented reality",
          title: "AR glasses catalog with image target recognition and face tracking",
          summary:
            "A Unity Android app that lets users explore 3D eyeglass models in augmented reality, browse catalog references and try an experimental face-tracking flow.",
          bullets: [
            "Image target recognition powered by Vuforia.",
            "Catalog navigation plus size selection in AR.",
            "Separate scene for trying selected frames on the face using the front camera.",
          ],
          tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
          video: "assets/projects/ar-monturas-demo.mp4",
          fallback: "AR",
        },
        {
          name: "HR Dashboard in Tableau",
          kind: "standard",
          meta: "BI · Data visualization",
          title: "Executive and detailed dashboard for HR analytics",
          summary:
            "A Tableau project designed to turn employee data into decision-ready views for leadership: headcount, active employees, terminations, department distribution and hiring trends.",
          bullets: [
            "Includes summary and detail dashboard views.",
            "Supports decisions around talent planning, turnover, hiring and workforce distribution.",
            "Ships with workbook, dataset, formal documentation and mockups.",
          ],
          tags: ["Tableau", "Python", "CSV", "Draw.io", "Storytelling"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DashboardTableau" }],
          image: "assets/projects/tableau-dashboard-summary.png",
        },
        {
          name: "Habits + Finance App",
          kind: "standard",
          meta: "Mobile product · React Native",
          title: "Personal app for habits, finance tracking and gamified progress",
          summary:
            "A product-oriented app that mixes personal organization, financial education and game mechanics. It helps users track habits, income, expenses, savings goals and personal progress.",
          bullets: [
            "Built with Expo, React Native, TypeScript, Zustand and local persistence.",
            "Includes missions, levels, achievements, financial learning content and weekly comparisons.",
            "Designed like a real product, with roadmap, tests, backup and optional sync.",
          ],
          tags: ["Expo", "React Native", "TypeScript", "Zustand", "Jest", "Product thinking"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/APP_Finanzas_Habitos" }],
          image: "assets/projects/finanzas-home.png",
        },
        {
          name: "AI and data analysis",
          kind: "standard",
          meta: "Machine learning · Exploration",
          title: "Practical ML exercises with text, audio and video datasets",
          summary:
            "Hands-on work to strengthen data preparation, exploration, evaluation and result interpretation using supervised models and basic neural networks.",
          bullets: [
            "Uses Pandas, NumPy, Scikit-learn and TensorFlow depending on the problem.",
            "Strong focus on cleaning, EDA and understandable documentation of findings.",
            "Especially interested in projects where AI and business value connect in a useful way.",
          ],
          tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "EDA"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon" }],
          fallback: "ML",
        },
      ],
    },
    credentials: {
      eyebrow: "Credentials",
      title: "Complementary training and professional strengths.",
      intro:
        "Certifications, courses and strengths that support my profile in technology, technical communication and continuous learning.",
      items: [
        {
          icon: "fa-solid fa-chart-column",
          topline: "Google · Analytics",
          title: "Google Data Analytics and Google Advanced Data Analytics",
          body: "Training focused on data cleaning, exploratory analysis, SQL, dashboards and clear communication of findings.",
          badges: ["Google", "Data Analytics", "SQL", "Dashboards"],
        },
        {
          icon: "fa-solid fa-certificate",
          topline: "IBM · AI and emerging tech",
          title: "IBM pathway in AI, cybersecurity, digital mindset and AI-assisted employability",
          body: "Includes Digital Mindset, Cybersecurity Fundamentals, Explore Emerging Tech and AvanzaTec courses related to AI, new technologies and job search with AI.",
          badges: ["IBM", "AI", "Cybersecurity", "Emerging Tech"],
          link: { label: "See more on LinkedIn", href: "https://www.linkedin.com/in/juansrubiano" },
        },
        {
          icon: "fa-solid fa-language",
          topline: "Language and foundations",
          title: "EF SET C1, PCAP Python and web/mobile fundamentals",
          body: "I complement my technical base with EF SET English Certificate (C1 Advanced), PCAP: Programming Essentials in Python and Google Activate courses in HTML/CSS and mobile app development.",
          badges: ["C1 English", "Python", "HTML/CSS", "Mobile"],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience that blends real operations with technical execution.",
      intro:
        "This is one of my strongest differentiators: I am not coming only from theory or coursework, but also from living business problems and turning them into solutions.",
      items: [
        {
          topline: "Optical sector · 2 years",
          title: "Optical business owner and administrator",
          body: "Managed inventory, suppliers, cash flow, customer service and commercial operations. That context helped me spot real bottlenecks and design more grounded software.",
        },
        {
          topline: "Product and development",
          title: "Building software for real workflows",
          body: "Worked on solutions focused on operations, analytics and digital experience, especially where software must solve real friction instead of only looking polished.",
        },
        {
          topline: "University, research group and personal projects",
          title: "Applied training in data, AI and software",
          body: "Worked on academic and personal projects across software development, analytics and technical prototyping, always trying to keep deliverables demonstrable and useful.",
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Academic foundation and continuous learning.",
      intro:
        "Formal studies are reinforced with constant project work, technical reading, documentation and exploration of real tools.",
      items: [
        {
          topline: "Universidad Tecnológica de Santander",
          title: "Systems Engineering",
          body: "Tenth-semester student with strong interest in AI, data analysis, software architecture and digital product building.",
        },
        {
          topline: "Universidad Tecnológica de Santander",
          title: "Software Development Technologist",
          body: "Solid foundation in programming, systems analysis, databases and real-world solution design.",
        },
        {
          topline: "Continuous learning",
          title: "Ongoing exploration in data, product and software",
          body: "I complement formal education with personal projects, technical reading, documentation, experimentation and iterative improvement of the products I build.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If there is an interesting role or project, let's talk.",
      body:
        "I am open to internships, junior roles and challenges where I can contribute across software, data, applied AI or product building with business context.",
      formTitle: "Write from here",
      formBody: "This form prepares an email with your message ready to send.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Prepare email",
      feedbackMissing: "Please complete name, email and message to prepare the email.",
      feedbackReady: "Opening your email client...",
    },
    footer: {
      backToTop: "Back to top",
      copy: "© {year} Juan Sebastian Rubiano. Software, data and AI with practical focus.",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
    },
  },
};

const dataLakeProjectEs = {
  name: "Data Lake Practice",
  kind: "standard",
  meta: "Data engineering · En desarrollo",
  title: "Práctica de arquitectura de data lake y organización de pipelines analíticos",
  summary:
    "Repositorio en desarrollo para estructurar una base de práctica en data lake, capas de datos y flujo de trabajo analítico orientado a aprendizaje aplicado.",
  bullets: [
    "Pensado para practicar organización de datos crudos, procesados y listos para consumo.",
    "Sirve como laboratorio personal para arquitectura de datos, ETL y criterio de modelado.",
    "Queda enlazado como proyecto activo de crecimiento en data engineering y analítica.",
  ],
  tags: ["Data Lake", "Python", "SQL", "ETL", "Arquitectura de datos"],
  links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DataLakePractice" }],
  image: "assets/projects/DataLake.png",
  fallback: "DL",
};

const dataLakeProjectEn = {
  name: "Data Lake Practice",
  kind: "standard",
  meta: "Data engineering · In progress",
  title: "Practice repository for data lake architecture and analytics pipeline structure",
  summary:
    "An in-progress repository created to practice data lake foundations, layered data organization and analytics-oriented workflow design.",
  bullets: [
    "Designed to explore raw, processed and consumption-ready data layers.",
    "Acts as a personal lab for data architecture, ETL thinking and modeling criteria.",
    "Linked as an active growth project in data engineering and analytics.",
  ],
  tags: ["Data Lake", "Python", "SQL", "ETL", "Data Architecture"],
  links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DataLakePractice" }],
  image: "assets/projects/DataLake.png",
  fallback: "DL",
};

const bearingStatsProjectEs = {
  name: "Estadistica de cojinetes",
  kind: "standard",
  meta: "Python · Estadistica descriptiva",
  title: "Caso aplicado de estadistica sobre diametros de cojinetes esfericos",
  summary:
    "Replica en Python de un ejercicio academico sobre una muestra de 54 cojinetes: tabla de frecuencias, percentiles, dispersion e intervalos de confianza para la desviacion estandar poblacional.",
  bullets: [
    "Reproduce medidas de tendencia central y posicion para datos agrupados.",
    "Incluye varianza, desviacion estandar, coeficiente de variacion e intervalo intercuartilico.",
    "Calcula IC del 90% y 95% para sigma usando chi-cuadrado y deja el caso documentado como pieza de portafolio.",
  ],
  tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-cuadrado", "Estadistica"],
  links: [{ label: "Ver caso", href: "cases/cojinetes-estadistica.html" }],
  image: "assets/projects/cojinetes-statistics-summary.png",
};

const bearingStatsProjectEn = {
  name: "Bearing statistics case",
  kind: "standard",
  meta: "Python · Descriptive statistics",
  title: "Applied statistics case on spherical bearing diameters",
  summary:
    "Python recreation of an academic exercise built around a 54-item bearing sample: grouped frequencies, percentiles, dispersion metrics and confidence intervals for the population standard deviation.",
  bullets: [
    "Replicates central tendency and position measures for grouped data.",
    "Includes variance, standard deviation, coefficient of variation and interquartile range.",
    "Computes 90% and 95% confidence intervals for sigma with chi-square and documents the case as a portfolio piece.",
  ],
  tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-square", "Statistics"],
  links: [{ label: "View case", href: "cases/cojinetes-estadistica.html" }],
  image: "assets/projects/cojinetes-statistics-summary.png",
};

function upsertProjectBefore(items, project, targetName) {
  const existingIndex = items.findIndex((item) => item.name === project.name);
  if (existingIndex >= 0) {
    items.splice(existingIndex, 1, project);
    return;
  }

  const targetIndex = items.findIndex((item) => item.name === targetName);
  if (targetIndex >= 0) {
    items.splice(targetIndex, 0, project);
    return;
  }

  items.push(project);
}

Object.assign(translations.es.hero, {
  eyebrow: "Ingeniería de Sistemas · Datos · IA aplicada · Software",
  title:
    'Convierto <span class="accent">datos</span>, <span class="accent">analítica</span> e <span class="accent">IA aplicada</span> en soluciones útiles para procesos y decisiones reales.',
  summary1:
    "Soy estudiante de décimo semestre de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos, con foco en análisis de datos, visualización, bases de datos e inteligencia artificial aplicada a procesos reales.",
  summary2:
    "Complemento ese enfoque con desarrollo de software, automatización y prototipos funcionales que conectan negocio, operación y experiencia de usuario. Ese cruce se refleja en proyectos como Optica Suite, dashboards analíticos y experiencias AR aplicadas al sector óptico.",
  availabilityTitle: "Disponible para prácticas, pasantías y roles junior",
  availabilityBody:
    "Busco oportunidades como analista de datos junior, practicante de ingeniería de sistemas o roles iniciales donde pueda aportar en analítica, bases de datos, automatización e inteligencia artificial aplicada, con capacidad para convertir necesidades de negocio en soluciones funcionales.",
  facts: [
    { value: "Perfil de datos", label: "Excel · Python · SQL · Tableau · Power BI · AWS · NoSQL" },
    { value: "Perfil de software", label: "JavaScript · TypeScript · React · Node.js · NestJS · APIs REST" },
    { value: "C1 English · EF SET", label: "" },
  ],
});

Object.assign(translations.en.hero, {
  eyebrow: "Systems Engineering · Data · Applied AI · Software",
  title:
    'I turn <span class="accent">data</span>, <span class="accent">analytics</span> and <span class="accent">applied AI</span> into useful solutions for real processes and decision-making.',
  summary1:
    "I am a tenth-semester Systems Engineering student and Software Development Technologist focused on data analysis, visualization, databases and applied artificial intelligence for real operational workflows.",
  summary2:
    "I complement that focus with software development, automation and functional prototypes that connect business context, operations and user experience. That mix appears in projects such as Optica Suite, analytical dashboards and applied AR experiences.",
  availabilityBody:
    "I am looking for opportunities as a junior data analyst, systems engineering intern or early-career contributor who can support analytics, databases, automation and applied AI while translating business needs into functional solutions.",
  facts: [
    { value: "Data profile", label: "Excel · Python · SQL · Tableau · Power BI · AWS · NoSQL" },
    { value: "Software profile", label: "JavaScript · TypeScript · React · Node.js · NestJS · REST APIs" },
    { value: "C1 English · EF SET", label: "" },
  ],
});

Object.assign(translations.es.projects, {
  prevLabel: "Proyecto anterior",
  nextLabel: "Proyecto siguiente",
  carouselLabel: "Carrusel de proyectos",
  counter: "Proyecto {current} de {total}",
});

Object.assign(translations.en.projects, {
  prevLabel: "Previous project",
  nextLabel: "Next project",
  carouselLabel: "Projects carousel",
  counter: "Project {current} of {total}",
});

upsertProjectBefore(translations.es.projects.items, dataLakeProjectEs, "App Finanzas + Hábitos");
upsertProjectBefore(translations.en.projects.items, dataLakeProjectEn, "Habits + Finance App");
upsertProjectBefore(translations.es.projects.items, bearingStatsProjectEs, "Data Lake Practice");
upsertProjectBefore(translations.en.projects.items, bearingStatsProjectEn, "Data Lake Practice");

function updateProject(items, projectName, updates) {
  const project = items.find((item) => item.name === projectName);
  if (!project) {
    return;
  }

  Object.assign(project, updates);
}

function reorderProjects(items, orderedNames) {
  const ordered = [];
  const used = new Set();

  orderedNames.forEach((name) => {
    const project = items.find((item) => item.name === name);
    if (project) {
      ordered.push(project);
      used.add(name);
    }
  });

  items.forEach((item) => {
    if (!used.has(item.name)) {
      ordered.push(item);
    }
  });

  items.splice(0, items.length, ...ordered);
}

Object.assign(translations.es.hero, {
  title:
    'Transformo <span class="accent">datos</span>, <span class="accent">analítica</span> e <span class="accent">IA aplicada</span> en soluciones nacidas de problemas reales de operación.',
  summary2:
    "Ese enfoque nació en mi óptica, donde al comienzo la operación estaba dispersa entre Word, PDF, Excel y notas aisladas. A partir de ese problema diseñé software, dashboards y experiencias AR para integrar información, analizar ventas y mejorar la experiencia del cliente en un solo ecosistema.",
  availabilityBody:
    "Busco oportunidades como analista de datos junior, practicante de ingeniería de sistemas o roles iniciales donde pueda aportar en analítica, visualización, bases de datos, automatización e inteligencia artificial aplicada, usando el desarrollo de software como complemento para convertir necesidades de negocio en soluciones funcionales.",
});

Object.assign(translations.en.hero, {
  title:
    'I turn <span class="accent">data</span>, <span class="accent">analytics</span> and <span class="accent">applied AI</span> into solutions born from real operational problems.',
  summary2:
    "That focus started in my optical business, where operations were initially scattered across Word files, PDFs, Excel sheets and isolated notes. From that problem I designed software, dashboards and AR experiences to integrate information, analyze sales and improve customer experience in a single ecosystem.",
  availabilityBody:
    "I am looking for opportunities as a junior data analyst, systems engineering intern or early-career contributor who can support analytics, visualization, databases, automation and applied AI, using software development as a complement to turn business needs into functional solutions.",
});

Object.assign(translations.es.projects, {
  title: "Datos, operación real y software construidos desde un problema concreto.",
  intro:
    "Mi trabajo no salió de ejercicios aislados: nació de la necesidad de ordenar la operación de mi óptica, integrar información, analizar ventas y diseñar mejores experiencias para clientes y equipo.",
});

Object.assign(translations.en.projects, {
  title: "Data, real operations and software built from a concrete business problem.",
  intro:
    "My work did not come only from isolated exercises: it started from the need to organize my optical business operations, integrate information, analyze sales and design better experiences for customers and staff.",
});

updateProject(translations.es.projects.items, "Optica Suite", {
  meta: "Software operativo · Datos · Full stack",
  title: "Sistema integral para centralizar la operación de una óptica en un solo entorno",
  summary:
    "Nació al detectar que la óptica manejaba procesos aislados en Word, PDF, Excel y notas sueltas. Diseñé este sistema para integrar inventarios, ventas, historias, agenda de citas, sedes, usuarios por roles y reportes en una sola plataforma.",
  bullets: [
    "Resuelve un problema real de operación dispersa y mejora trazabilidad, control y seguimiento.",
    "Integra inventarios, ventas, historias clínicas, agenda de citas, sedes, roles y reportes operativos.",
    "Conecta software y datos para dejar información más confiable y facilitar decisiones dentro del negocio.",
  ],
});

updateProject(translations.en.projects.items, "Optica Suite", {
  meta: "Operational software · Data · Full stack",
  title: "Integrated system to centralize optical business operations in a single environment",
  summary:
    "It started after identifying that the optical business was running processes separately across Word files, PDFs, Excel sheets and loose notes. I designed this system to unify inventory, sales, records, appointments, branches, role-based users and reporting in one platform.",
  bullets: [
    "Solves a real fragmented-operations problem and improves traceability, control and follow-up.",
    "Integrates inventory, sales, clinical records, appointment scheduling, branches, role-based access and operational reports.",
    "Connects software and data to produce more reliable information and better business decisions.",
  ],
});

updateProject(translations.es.projects.items, "AR Monturas", {
  meta: "Unity · AR aplicada al negocio",
  title: "Catálogo en AR con face tracking pensado para una experiencia real de óptica",
  summary:
    "Desarrollé este catálogo para mejorar la forma de mostrar monturas y acercar una experiencia más interactiva al cliente. El proyecto sigue en mejora continua con la intención de llevarlo a una implementación real.",
  bullets: [
    "Permite visualizar monturas en 3D y navegar referencias del catálogo desde el móvil.",
    "Incluye image targets y una línea experimental con face tracking para probar monturas sobre el rostro.",
    "Nace como extensión del problema comercial y de experiencia que ya había detectado en la óptica.",
  ],
});

updateProject(translations.en.projects.items, "AR Monturas", {
  meta: "Unity · Business-oriented AR",
  title: "AR catalog with face tracking designed for a real optical retail experience",
  summary:
    "I built this catalog to improve how optical frames are presented and to bring a more interactive experience to customers. The project is still under continuous improvement with the intention of becoming a real implementation.",
  bullets: [
    "Allows users to visualize 3D frames and browse catalog references from mobile devices.",
    "Includes image targets and an experimental face-tracking flow for virtual frame try-on.",
    "It was created as an extension of the commercial and customer-experience problem I had already identified in the optical business.",
  ],
});

updateProject(translations.es.projects.items, "HR Dashboard en Tableau", {
  summary:
    "Proyecto en Tableau que fortaleció mi forma de convertir datos en visualizaciones útiles para toma de decisiones, storytelling y lectura ejecutiva de indicadores.",
});

updateProject(translations.en.projects.items, "HR Dashboard in Tableau", {
  summary:
    "A Tableau project that strengthened my ability to turn data into useful visualizations for decision-making, storytelling and executive KPI reading.",
});

updateProject(translations.es.projects.items, "IA y análisis de datos", {
  title: "Ejercicios y prototipos de machine learning con datasets de texto, audio y video",
  summary:
    "Trabajo práctico para fortalecer limpieza de datos, EDA, preparación de datasets y evaluación de modelos supervisados, redes neuronales básicas y experimentos con IA aplicada.",
});

updateProject(translations.en.projects.items, "AI and data analysis", {
  title: "Machine learning exercises and prototypes with text, audio and video datasets",
  summary:
    "Hands-on work to strengthen data cleaning, EDA, dataset preparation and evaluation of supervised models, basic neural networks and applied AI experimentation.",
});

updateProject(translations.es.projects.items, "IA y anÃ¡lisis de datos", {
  links: [
    { label: "GitHub", href: "https://github.com/Zhulgon" },
    { label: "Ver casos", href: "cases/modelos-ml.html" },
  ],
});

updateProject(translations.en.projects.items, "AI and data analysis", {
  links: [
    { label: "GitHub", href: "https://github.com/Zhulgon" },
    { label: "View cases", href: "cases/modelos-ml.html" },
  ],
});

updateProject(translations.es.projects.items, "IA y anÃ¡lisis de datos", {
  links: [
    { label: "GitHub", href: "https://github.com/Zhulgon" },
    { label: "Ver casos", href: "cases/modelos-ml.html" },
  ],
});

reorderProjects(translations.es.projects.items, [
  "Estadistica de cojinetes",
  "HR Dashboard en Tableau",
  "Data Lake Practice",
  "IA y análisis de datos",
  "Optica Suite",
  "AR Monturas",
  "App Finanzas + Hábitos",
]);

reorderProjects(translations.en.projects.items, [
  "Bearing statistics case",
  "HR Dashboard in Tableau",
  "Data Lake Practice",
  "AI and data analysis",
  "Optica Suite",
  "AR Monturas",
  "Habits + Finance App",
]);

Object.assign(translations.es.experience, {
  title: "Experiencia real de negocio convertida en datos, criterio y soluciones.",
  intro:
    "Haber sido dueño de una óptica no es un detalle secundario en mi perfil: fue el contexto donde aprendí operación, ventas, inventario, seguimiento y valor real de la información para decidir mejor.",
  items: [
    {
      topline: "Sector óptico · 2 años",
      title: "Propietario y administrador de óptica",
      body: "Aprendí a gestionar inventario, proveedores, flujo de caja, ventas, atención al cliente y dinámica comercial. Esa experiencia me dio criterio operativo real y una visión clara de cómo los datos sí pueden generar valor cuando están bien organizados.",
    },
    {
      topline: "Problema real convertido en producto",
      title: "Diseño de soluciones para integrar operación, reportes y experiencia",
      body: "Al detectar que la información estaba dispersa entre Word, PDF, Excel y notas aisladas, decidí diseñar un software para centralizar la operación, habilitar reportes, analizar ventas y sostener decisiones más confiables.",
    },
    {
      topline: "Innovación aplicada en la óptica",
      title: "Dashboard, software y AR como parte de una misma mejora continua",
      body: "A partir de la operación real desarrollé un sistema integral, analicé información con dashboards y diseñé un catálogo en AR con face tracking para mejorar la experiencia de las monturas. Mi intención es seguir llevándolo hacia una solución real y madura.",
    },
  ],
});

Object.assign(translations.en.experience, {
  title: "Real business experience turned into data, judgment and solutions.",
  intro:
    "Being the owner of an optical business is not a side detail in my profile: it was the environment where I learned operations, sales, inventory, follow-up and the real value of information for better decisions.",
  items: [
    {
      topline: "Optical sector · 2 years",
      title: "Optical business owner and administrator",
      body: "I learned to manage inventory, suppliers, cash flow, sales, customer service and commercial operations. That experience gave me real operational judgment and a clear view of how data creates value when it is properly organized.",
    },
    {
      topline: "Real problem turned into product",
      title: "Designing solutions to integrate operations, reporting and experience",
      body: "After identifying that information was scattered across Word files, PDFs, Excel sheets and isolated notes, I decided to design software that could centralize operations, enable reporting, analyze sales and support more reliable decision-making.",
    },
    {
      topline: "Applied innovation in optical retail",
      title: "Dashboard, software and AR as part of the same continuous improvement effort",
      body: "From the real operation I developed an integrated system, worked with dashboards to analyze information and designed an AR catalog with face tracking to improve the frame experience. My goal is to keep evolving it into a real and mature solution.",
    },
  ],
});

Object.assign(translations.es.hero, {
  summary2:
    "Ese enfoque nació en mi óptica, donde al comienzo la operación estaba dispersa entre Word, PDF, Excel y notas aisladas. A partir de ese problema diseñé software, dashboards y experiencias AR para integrar información, analizar ventas, ordenar procesos y mejorar la experiencia del cliente dentro de un mismo ecosistema.",
});

Object.assign(translations.en.hero, {
  summary2:
    "That focus started in my optical business, where operations were initially scattered across Word files, PDFs, Excel sheets and isolated notes. From that problem I designed software, dashboards and AR experiences to integrate information, analyze sales, organize workflows and improve customer experience inside one ecosystem.",
});

updateProject(translations.es.projects.items, "Optica Suite", {
  summary:
    "Nació al detectar que la óptica manejaba procesos aislados en Word, PDF, Excel y notas sueltas. Diseñé este sistema para integrar inventarios, ventas, historias clínicas, agenda de citas, sedes, usuarios por roles, auditoría y reportes en una sola plataforma.",
  bullets: [
    "Resuelve un problema real de operación dispersa y mejora trazabilidad, control y seguimiento.",
    "Integra inventarios, ventas, historias clínicas, agenda de citas, sedes, roles, auditoría y reportes operativos.",
    "Conecta software y datos para dejar información más confiable, analizar el negocio y sostener mejores decisiones.",
  ],
});

updateProject(translations.en.projects.items, "Optica Suite", {
  summary:
    "It started after identifying that the optical business was running processes separately across Word files, PDFs, Excel sheets and loose notes. I designed this system to unify inventory, sales, clinical records, appointments, branches, role-based users, audit tracking and reporting in one platform.",
  bullets: [
    "Solves a real fragmented-operations problem and improves traceability, control and follow-up.",
    "Integrates inventory, sales, clinical records, appointment scheduling, branches, role-based access, audit trails and operational reports.",
    "Connects software and data to produce more reliable information, analyze business performance and support better decisions.",
  ],
});

updateProject(translations.es.projects.items, "AR Monturas", {
  summary:
    "Desarrollé este catálogo para mejorar la forma de mostrar monturas, apoyar la asesoría comercial y acercar una experiencia más interactiva al cliente. El proyecto sigue en mejora continua con la intención de llevarlo a una implementación real.",
  bullets: [
    "Permite visualizar monturas en 3D y navegar referencias del catálogo desde el móvil.",
    "Incluye image targets y una línea experimental con face tracking para probar monturas sobre el rostro.",
    "Nace como extensión del problema comercial y de experiencia que ya había detectado en la óptica al buscar una forma más útil de presentar el catálogo.",
  ],
});

updateProject(translations.en.projects.items, "AR Monturas", {
  summary:
    "I built this catalog to improve how optical frames are presented, support the sales process and bring a more interactive experience to customers. The project is still under continuous improvement with the intention of becoming a real implementation.",
  bullets: [
    "Allows users to visualize 3D frames and browse catalog references from mobile devices.",
    "Includes image targets and an experimental face-tracking flow for virtual frame try-on.",
    "It was created as an extension of the commercial and customer-experience problem I had already identified while trying to present the catalog in a more useful way.",
  ],
});

Object.assign(translations.es.experience, {
  items: [
    {
      topline: "Sector óptico · 2 años",
      title: "Propietario y administrador de óptica",
      body: "Aprendí a gestionar inventario, proveedores, flujo de caja, ventas, atención al cliente y dinámica comercial. Esa experiencia me dio criterio operativo real y una visión clara de cómo los datos sí pueden generar valor cuando están bien organizados.",
    },
    {
      topline: "Problema real convertido en producto",
      title: "Diseño de soluciones para integrar operación, reportes y experiencia",
      body: "Al detectar que la información estaba dispersa entre Word, PDF, Excel y notas aisladas, decidí diseñar un software para centralizar inventarios, ventas, historias, citas, sedes, roles y reportes, dejando una operación mucho más integrada y confiable.",
    },
    {
      topline: "Innovación aplicada en la óptica",
      title: "Dashboard, software y AR como parte de una misma mejora continua",
      body: "A partir de la operación real desarrollé un sistema integral, analicé ventas e indicadores con dashboards y diseñé un catálogo en AR con face tracking para mejorar la experiencia alrededor de las monturas. Mi intención es seguir llevándolo hacia una solución real y madura.",
    },
  ],
});

Object.assign(translations.en.experience, {
  items: [
    {
      topline: "Optical sector · 2 years",
      title: "Optical business owner and administrator",
      body: "I learned to manage inventory, suppliers, cash flow, sales, customer service and commercial operations. That experience gave me real operational judgment and a clear view of how data creates value when it is properly organized.",
    },
    {
      topline: "Real problem turned into product",
      title: "Designing solutions to integrate operations, reporting and experience",
      body: "After identifying that information was scattered across Word files, PDFs, Excel sheets and isolated notes, I decided to design software that could centralize inventory, sales, records, appointments, branches, roles and reporting into a much more reliable operation.",
    },
    {
      topline: "Applied innovation in optical retail",
      title: "Dashboard, software and AR as part of the same continuous improvement effort",
      body: "From that real operation I developed an integrated system, analyzed sales and business indicators with dashboards and designed an AR catalog with face tracking to improve the frame experience. My goal is to keep evolving it into a real and mature solution.",
    },
  ],
});

const state = {
  locale: localStorage.getItem("portfolio-locale") || "es",
  theme: localStorage.getItem("portfolio-theme") || "light",
  projectIndex: 0,
};

function resolveCopy(path, copy) {
  return path.split(".").reduce((current, key) => current[key], copy);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (typeof text === "string") {
    element.textContent = text;
  }

  return element;
}

function renderHeroFacts(copy) {
  const container = document.getElementById("heroFacts");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  copy.hero.facts.forEach((fact) => {
    const card = createElement("article", "fact-card");

    card.appendChild(createElement("strong", "", fact.value));

    if (fact.label) {
      card.appendChild(createElement("span", "", fact.label));
    }

    container.appendChild(card);
  });
}

function renderAbout(copy) {
  const content = document.getElementById("aboutContent");
  const highlights = document.getElementById("aboutHighlights");

  content.innerHTML = "";
  highlights.innerHTML = "";

  copy.about.paragraphs.forEach((paragraph) => {
    content.appendChild(createElement("p", "", paragraph));
  });

  copy.about.highlights.forEach((highlight) => {
    highlights.appendChild(createElement("span", "about-pill", highlight));
  });
}

function renderSkills(copy) {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";

  copy.skills.items.forEach((item, index) => {
    const card = createElement("article", `skill-card reveal${index % 2 === 1 ? " reveal-delay" : ""}`);
    card.style.setProperty("--skill-accent", item.accent);

    const title = createElement("h3", "", item.title);
    const summary = createElement("p", "skill-summary", item.summary);
    const techGrid = createElement("div", "tech-grid");

    if (item.tools.length <= 4) {
      techGrid.classList.add("tech-grid-compact");
    }

    item.tools.forEach((tool) => {
      const tile = createElement("div", "tech-item");
      tile.style.setProperty("--tool-color", tool.color);

      const icon = createElement("div", "tech-icon");
      if (tool.icon) {
        icon.innerHTML = `<i class="${tool.icon}"></i>`;
      } else {
        icon.appendChild(createElement("span", "tech-abbr", tool.abbr));
      }

      tile.append(icon, createElement("span", "tech-label", tool.label));
      techGrid.appendChild(tile);
    });

    card.append(title, summary, techGrid);
    grid.appendChild(card);
  });
}

function buildProjectVisual(project) {
  const visual = createElement("div", "project-visual");

  if (project.video) {
    visual.classList.add("has-video");
    const video = document.createElement("video");
    video.src = project.video;
    video.controls = true;
    video.loop = false;
    video.muted = false;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", `${project.name} demo`);
    visual.appendChild(video);
    return visual;
  }

  if (project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.name;
    visual.appendChild(image);
    return visual;
  }

  const fallback = createElement("div", "project-visual-fallback");
  const mark = createElement("div", "project-fallback-mark", project.fallback || project.name.slice(0, 2));
  const lines = createElement("div", "project-fallback-lines");

  for (let index = 0; index < 4; index += 1) {
    lines.appendChild(createElement("span"));
  }

  fallback.append(mark, lines);
  visual.appendChild(fallback);
  return visual;
}

function clampProjectIndex(total) {
  if (total <= 0) {
    state.projectIndex = 0;
    return;
  }

  state.projectIndex = Math.max(0, Math.min(state.projectIndex, total - 1));
}

function updateProjectsSlider(copy) {
  const track = document.getElementById("projectsGrid");
  const viewport = document.getElementById("projectsViewport");
  const status = document.getElementById("projectsStatus");
  const prevButton = document.getElementById("projectsPrev");
  const nextButton = document.getElementById("projectsNext");

  if (!track || !viewport || !status || !prevButton || !nextButton) {
    return;
  }

  const slides = Array.from(track.children);
  const total = slides.length;

  clampProjectIndex(total);

  prevButton.disabled = total === 0 || state.projectIndex === 0;
  nextButton.disabled = total === 0 || state.projectIndex === total - 1;
  prevButton.setAttribute("aria-label", copy.projects.prevLabel);
  nextButton.setAttribute("aria-label", copy.projects.nextLabel);
  viewport.setAttribute("aria-label", copy.projects.carouselLabel);

  status.textContent = copy.projects.counter
    .replace("{current}", String(state.projectIndex + 1).padStart(2, "0"))
    .replace("{total}", String(total).padStart(2, "0"));

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === state.projectIndex);
    slide.classList.toggle("is-next", index === state.projectIndex + 1);
    slide.classList.toggle("is-prev", index === state.projectIndex - 1);
    slide.classList.toggle("is-far", Math.abs(index - state.projectIndex) > 1);
  });

  const activeSlide = slides[state.projectIndex];
  if (activeSlide) {
    track.style.transform = `translateX(-${activeSlide.offsetLeft}px)`;
  }
}

function changeProjectSlide(step) {
  const copy = translations[state.locale];
  const total = copy.projects.items.length;

  clampProjectIndex(total);

  const nextIndex = Math.max(0, Math.min(state.projectIndex + step, total - 1));
  if (nextIndex === state.projectIndex) {
    return;
  }

  state.projectIndex = nextIndex;
  updateProjectsSlider(copy);
}

function renderProjects(copy) {
  const track = document.getElementById("projectsGrid");
  track.innerHTML = "";

  clampProjectIndex(copy.projects.items.length);

  copy.projects.items.forEach((project) => {
    const slide = createElement("div", "project-slide");
    const card = createElement("article", `project-card ${project.kind}`);
    const list = document.createElement("ul");
    const tags = createElement("div", "project-tags");
    const links = createElement("div", "project-links");

    project.bullets.forEach((bullet) => {
      list.appendChild(createElement("li", "", bullet));
    });

    project.tags.forEach((tag) => {
      tags.appendChild(createElement("span", "tag", tag));
    });

    project.links.forEach((link) => {
      const anchor = createElement("a", "link-chip", link.label);
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.innerHTML = `${link.label} <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
      links.appendChild(anchor);
    });

    card.append(
      buildProjectVisual(project),
      createElement("p", "project-meta", project.meta),
      createElement("h3", "", project.title),
      createElement("p", "project-summary", project.summary),
      list,
      tags,
      links,
      createElement("p", "project-note", project.name)
    );

    slide.appendChild(card);
    track.appendChild(slide);
  });

  updateProjectsSlider(copy);
}

function renderCredentials(copy) {
  const grid = document.getElementById("credentialsGrid");
  grid.innerHTML = "";

  copy.credentials.items.forEach((item, index) => {
    const card = createElement("article", `credential-card reveal${index === 1 ? " reveal-delay" : ""}`);
    const icon = createElement("div", "credential-icon");
    const badges = createElement("div", "project-badges");

    icon.innerHTML = `<i class="${item.icon}"></i>`;

    item.badges.forEach((badge) => {
      badges.appendChild(createElement("span", "badge-chip", badge));
    });

    card.append(
      icon,
      createElement("p", "credential-topline", item.topline),
      createElement("h3", "", item.title),
      createElement("p", "", item.body),
      badges
    );

    if (item.link) {
      const anchor = createElement("a", "link-chip", item.link.label);
      anchor.href = item.link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.innerHTML = `${item.link.label} <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
      card.appendChild(anchor);
    }

    grid.appendChild(card);
  });
}

function renderExperience(copy) {
  const grid = document.getElementById("experienceGrid");
  grid.innerHTML = "";

  copy.experience.items.forEach((item, index) => {
    const card = createElement("article", `timeline-card reveal${index === 1 ? " reveal-delay" : ""}`);
    card.append(
      createElement("p", "credential-topline", item.topline),
      createElement("h3", "", item.title),
      createElement("p", "", item.body)
    );
    grid.appendChild(card);
  });
}

function renderEducation(copy) {
  const grid = document.getElementById("educationGrid");
  grid.innerHTML = "";

  copy.education.items.forEach((item, index) => {
    const card = createElement("article", `education-card reveal${index === 2 ? " reveal-delay" : ""}`);
    card.append(
      createElement("p", "education-topline", item.topline),
      createElement("h3", "", item.title),
      createElement("p", "", item.body)
    );
    grid.appendChild(card);
  });
}

function applyStaticTranslations(copy) {
  document.title = copy.metaTitle;
  document.documentElement.lang = state.locale;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", copy.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = resolveCopy(node.getAttribute("data-i18n"), copy);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = resolveCopy(node.getAttribute("data-i18n-html"), copy);
  });

  document.getElementById("themeToggleLabel").textContent =
    state.theme === "dark" ? copy.theme.light : copy.theme.dark;
  document.getElementById("langToggleLabel").textContent = state.locale === "es" ? "EN" : "ES";
}

function updateFooter(copy) {
  document.getElementById("footerCopy").textContent =
    copy.footer.copy.replace("{year}", String(new Date().getFullYear()));
}

function applyTheme() {
  document.body.setAttribute("data-theme", state.theme);
}

function closeMenu() {
  const dropdown = document.getElementById("menuDropdown");
  const toggle = document.getElementById("menuToggle");
  dropdown.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}

function renderAll() {
  const copy = translations[state.locale];
  applyStaticTranslations(copy);
  updateFooter(copy);
  renderHeroFacts(copy);
  renderSkills(copy);
  renderProjects(copy);
  renderCredentials(copy);
  renderExperience(copy);
  renderEducation(copy);
  observeReveal();
}

function observeReveal() {
  const nodes = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const dropdown = document.getElementById("menuDropdown");
  const menu = document.getElementById("siteMenu");

  toggle.addEventListener("click", () => {
    const open = dropdown.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}

function setupLanguageToggle() {
  const button = document.getElementById("langToggle");

  button.addEventListener("click", () => {
    state.locale = state.locale === "es" ? "en" : "es";
    localStorage.setItem("portfolio-locale", state.locale);
    renderAll();
  });
}

function setupThemeToggle() {
  const button = document.getElementById("themeToggle");

  button.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("portfolio-theme", state.theme);
    applyTheme();
    applyStaticTranslations(translations[state.locale]);
  });
}

function setupProjectSlider() {
  const prevButton = document.getElementById("projectsPrev");
  const nextButton = document.getElementById("projectsNext");
  const viewport = document.getElementById("projectsViewport");
  let touchStartX = 0;

  if (!prevButton || !nextButton || !viewport) {
    return;
  }

  prevButton.addEventListener("click", () => {
    changeProjectSlide(-1);
  });

  nextButton.addEventListener("click", () => {
    changeProjectSlide(1);
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeProjectSlide(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeProjectSlide(1);
    }
  });

  viewport.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchend",
    (event) => {
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) < 44) {
        return;
      }

      changeProjectSlide(delta > 0 ? -1 : 1);
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => {
      updateProjectsSlider(translations[state.locale]);
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const copy = translations[state.locale];
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = copy.contact.feedbackMissing;
      formMessage.style.color = "#d67731";
      return;
    }

    const greeting = state.locale === "es" ? "Hola Juan Sebastián," : "Hi Juan Sebastian,";
    const subjectText =
      state.locale === "es"
        ? `Contacto desde portafolio web - ${name}`
        : `Contact from portfolio website - ${name}`;
    const bodyText =
      `${greeting}\n\n` +
      `${state.locale === "es" ? "Mi nombre es" : "My name is"} ${name}.\n` +
      `${state.locale === "es" ? "Mi correo es" : "My email is"} ${email}.\n\n` +
      `${message}\n`;

    formMessage.textContent = copy.contact.feedbackReady;
    formMessage.style.color = "var(--accent)";
    window.location.href =
      `mailto:jsebastian000124@gmail.com?subject=${encodeURIComponent(subjectText)}` +
      `&body=${encodeURIComponent(bodyText)}`;
  });
}

function setupScrollUI() {
  const updateScrollState = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  renderAll();
  setupMenu();
  setupLanguageToggle();
  setupThemeToggle();
  setupProjectSlider();
  setupContactForm();
  setupScrollUI();
});
