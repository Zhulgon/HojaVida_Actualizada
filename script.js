const translations = {
  es: {
    metaTitle: "Juan Sebastián Rubiano | Portafolio",
    metaDescription:
      "Portafolio de Juan Sebastián Rubiano, estudiante de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos. Proyectos en desarrollo web, Python, SQL, React, TypeScript, análisis de datos, machine learning, IA aplicada y realidad aumentada.",
    nav: {
      menu: "Menú",
      skills: "Tecnologías",
      projects: "Proyectos",
      credentials: "Formación",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Analista de datos junior - Software - Automatización - IA aplicada",
      title:
        'Datos, <span class="accent">software</span> e <span class="accent">IA aplicada</span> para decisiones reales.',
      summary1:
        "Soy estudiante de décimo semestre de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos, con perfil junior orientado a análisis de datos, inteligencia de negocios, SQL, Python, visualización y automatización de procesos.",
      summary2:
        "Combino datos y desarrollo de software para convertir necesidades operativas en dashboards, sistemas funcionales y prototipos con IA aplicada. Mi experiencia en el sector óptico me permitió trabajar con inventario, ventas, historias clínicas, citas, reportes y experiencia de usuario desde problemas reales.",
      availabilityTitle: "Disponible para prácticas, pasantías y roles junior",
      availabilityBody:
        "Busco oportunidades como analista de datos junior, practicante de ingeniería de sistemas, analista BI o desarrollador junior. Puedo aportar en limpieza y análisis de datos, SQL, Python, Excel, Tableau, documentación técnica, automatización, bases de datos y construcción de soluciones conectadas a necesidades de negocio.",
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
        "Estos proyectos representan mejor mi perfil hoy: software operativo, visualización de datos, experiencias inmersivas y casos técnicos aplicados.",
      prevLabel: "Proyecto anterior",
      nextLabel: "Proyecto siguiente",
      carouselLabel: "Carrusel de proyectos",
      counter: "Proyecto {current} de {total}",
      items: [
        {
          name: "Estadística de cojinetes",
          kind: "standard",
          meta: "Python - Estadística descriptiva",
          title: "Caso aplicado de estadística sobre diámetros de cojinetes esféricos",
          summary:
            "Replica en Python de un ejercicio académico sobre una muestra de 54 cojinetes: tabla de frecuencias, percentiles, dispersión e intervalos de confianza para la desviación estándar poblacional.",
          bullets: [
            "Reproduce medidas de tendencia central y posición para datos agrupados.",
            "Incluye varianza, desviación estándar, coeficiente de variación e intervalo intercuartílico.",
            "Calcula IC del 90% y 95% para sigma usando chi-cuadrado y deja el caso documentado como pieza de portafolio.",
          ],
          tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-cuadrado", "Estadística"],
          links: [{ label: "Ver caso", href: "cases/cojinetes-estadistica.html" }],
          image: "assets/projects/cojinetes-statistics-summary.png",
          fallback: "ST",
        },
        {
          name: "HR Dashboard en Tableau",
          kind: "standard",
          meta: "BI - Visualización de datos",
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
          fallback: "TB",
        },
        {
          name: "Data Lake Practice",
          kind: "standard",
          meta: "Data engineering - En desarrollo",
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
        },
        {
          name: "IA y análisis de datos",
          kind: "standard",
          meta: "Machine learning - Exploración",
          title: "Machine learning, audio, simulación y casos de análisis de datos",
          summary:
            "Colección de ejercicios y prototipos con datasets de texto, audio, imagen y video para fortalecer preparación de datos, exploración, entrenamiento y lectura de resultados.",
          bullets: [
            "Uso de Pandas, NumPy, scikit-learn y TensorFlow según el problema.",
            "Énfasis en limpieza, EDA y documentación entendible de hallazgos.",
            "Incluye casos navegables dentro del portfolio y acceso a cuadernos de Colab cuando aplica.",
          ],
          tags: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "EDA"],
          links: [
            { label: "GitHub", href: "https://github.com/Zhulgon" },
            { label: "Ver casos", href: "cases/modelos-ml.html" },
          ],
          image: "assets/projects/MlCatalogo.png",
          fallback: "ML",
        },
        {
          name: "Óptica Suite",
          kind: "featured",
          meta: "Software operativo - Full stack",
          title: "Sistema integral para centralizar operación clínica, comercial y logística",
          summary:
            "Nació al detectar que la óptica manejaba procesos aislados en Word, PDF, Excel y notas sueltas. Diseñé este sistema para integrar inventarios, ventas, historias clínicas, agenda de citas, sedes, usuarios por roles, auditoría y reportes en una sola plataforma.",
          bullets: [
            "Resuelve un problema real de operación dispersa y mejora trazabilidad, control y seguimiento.",
            "Integra inventarios, ventas, historias clínicas, agenda de citas, sedes, roles, auditoría y reportes operativos.",
            "Conecta software y datos para dejar información más confiable, analizar el negocio y sostener mejores decisiones.",
          ],
          tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
          video: "assets/projects/VideoOpti-suite.mp4",
          fallback: "OS",
        },
        {
          name: "AR Monturas",
          kind: "compact",
          meta: "Unity - Realidad aumentada",
          title: "Catálogo AR con face tracking diseñado para una necesidad real en óptica",
          summary:
            "Desarrollé este catálogo para mejorar la forma de mostrar monturas, apoyar la asesoría comercial y acercar una experiencia más interactiva al cliente. El proyecto sigue en mejora continua con la intención de llevarlo a una implementación real.",
          bullets: [
            "Permite visualizar monturas en 3D y navegar referencias del catálogo desde el móvil.",
            "Incluye image targets y una línea experimental con face tracking para probar monturas sobre el rostro.",
            "Nace como extensión del problema comercial y de experiencia detectado en la óptica.",
          ],
          tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
          video: "assets/projects/ar-monturas-demo.mp4",
          fallback: "AR",
        },
        {
          name: "App Finanzas + Habitos",
          kind: "standard",
          meta: "Mobile product - React Native",
          title: "Aplicación personal para habitos, finanzas y progreso gamificado",
          summary:
            "Proyecto que mezcla organización personal, educación financiera y mecanicas de producto. Permite registrar hábitos, ingresos, gastos, metas de ahorro y progreso con capas de gamificación.",
          bullets: [
            "Construida con Expo, React Native, TypeScript, Zustand y persistencia local.",
            "Incluye misiones, niveles, logros, academia financiera y comparativos semanales.",
            "Pensada como producto real, con roadmap, tests, backup y sincronización opcional.",
          ],
          tags: ["Expo", "React Native", "TypeScript", "Zustand", "Jest", "Product thinking"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/APP_Finanzas_Habitos" }],
          image: "assets/projects/finanzas-home.png",
          fallback: "FH",
        },
      ],
    },
    credentials: {
      eyebrow: "Formación",
      title: "Formación, datos y software.",
      intro:
        "Aquí resumo mi base académica y los dos frentes profesionales que más quiero fortalecer en prácticas y roles junior: datos y desarrollo de software.",
      items: [
        {
          icon: "fa-solid fa-graduation-cap",
          topline: "Universidad Tecnológica de Santander",
          title: "Formación académica",
          details: [
            {
              label: "Tec. Desarrollo de Sistemas Informáticos.",
            },
            {
              label: "Ingeniero de Sistemas.",
              description:
                "Estudiante de décimo semestre con foco en análisis de datos, inteligencia artificial, arquitectura de software y resolución de problemas con criterio técnico.",
            },
          ],
          badges: ["Tecnólogo", "Bases de datos", "Arquitectura"],
        },
        {
          icon: "fa-solid fa-chart-line",
          topline: "Certificaciones, stack y enfoque",
          title: "Datos",
          body: "Este frente se apoya en certificaciones de Google e IBM, análisis exploratorio, visualización, machine learning aplicado y proyectos donde conecto métricas, procesos y decisiones de negocio.",
          badges: ["Google Data Analytics", "Advanced Data Analytics", "IBM AI / Tech", "EF SET C1"],
          toolsTitle: "Tecnologías y frameworks",
          tools: [
            { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
            { label: "Python", icon: "fa-brands fa-python", color: "#ffd662" },
            { label: "SQL", abbr: "SQL", color: "#7bd3ff" },
            { label: "Tableau", abbr: "TB", color: "#ff9f6b" },
            { label: "Power BI", abbr: "BI", color: "#f4c542" },
            { label: "AWS", abbr: "AWS", color: "#ffb866" },
            { label: "Spark", abbr: "Sp", color: "#ff935f" },
            { label: "NoSQL", abbr: "No", color: "#77e4c8" },
            { label: "Pandas", abbr: "PD", color: "#9c8bff" },
          ],
          link: { label: "Ver credenciales", href: "https://www.linkedin.com/in/juansrubiano" },
        },
        {
          icon: "fa-solid fa-code-branch",
          topline: "Certificaciones, stack y proyectos",
          title: "Software",
          body: "Este frente se fortalece con certificaciones de Python, desarrollo web y apps móviles, además de proyectos reales donde diseñé sistemas, flujos operativos, dashboards y experiencias inmersivas.",
          badges: ["PCAP Python", "IBM Web / Cyber", "HTML & CSS", "Apps móviles"],
          toolsTitle: "Tecnologías y frameworks",
          tools: [
            { label: "JavaScript", icon: "fa-brands fa-js", color: "#ffd84d" },
            { label: "TypeScript", abbr: "TS", color: "#69b5ff" },
            { label: "React", icon: "fa-brands fa-react", color: "#7ee0ff" },
            { label: "Node.js", icon: "fa-brands fa-node-js", color: "#88df8a" },
            { label: "NestJS", abbr: "N", color: "#ff7b90" },
            { label: "GitHub", icon: "fa-brands fa-github", color: "#d8e0f2" },
            { label: "Docker", icon: "fa-brands fa-docker", color: "#78c7ff" },
            { label: "Kubernetes", abbr: "K8s", color: "#8db5ff" },
            { label: "Unity", abbr: "U", color: "#f0f4ff" },
          ],
          link: { label: "Ver más en LinkedIn", href: "https://www.linkedin.com/in/juansrubiano" },
        },
      ],
    },
    experience: {
  eyebrow: "Experiencia",
  title: "Experiencia real conectando operación, datos y soluciones tecnológicas.",
  intro:
    "Durante dos años trabajé de cerca con procesos comerciales, administrativos y operativos del sector óptico. Ese contexto me permitió entender problemas reales de inventario, ventas, atención, trazabilidad y reportes antes de llevarlos a soluciones digitales.",
  items: [
    {
      topline: "Sector óptico - 2 años en operación y mejora de procesos",
      title: "Gestión operativa y diseño de soluciones digitales para una óptica",
      body: "Participé en la gestión comercial y administrativa de una óptica, identificando puntos de fricción en inventario, ventas, historias clínicas, citas, atención al cliente y seguimiento de indicadores. A partir de esas necesidades diseñé soluciones tecnológicas para centralizar información, reducir trabajo manual y mejorar la trazabilidad del negocio.",
      highlights: [
        "Diseñé un sistema para integrar inventarios, ventas, historias clínicas, agenda de citas, sedes, usuarios por roles y reportes operativos.",
        "Analicé datos de ventas e indicadores comerciales para apoyar decisiones más claras sobre operación, seguimiento y crecimiento del negocio.",
        "Trabajé marketing digital y presencia comercial para mejorar alcance, comunicación y captación de clientes.",
        "Propuse un catálogo en realidad aumentada con face tracking como extensión de una necesidad comercial real dentro de la óptica.",
      ],
      closing: "Experiencia real para aportar desde el primer día.",
    },
  ],
},
    contact: {
  eyebrow: "Contacto",
  title: "Hablemos",
  body:
    "Estoy abierto a prácticas, pasantías, roles junior y colaboraciones relacionadas con análisis de datos, inteligencia de negocios, automatización, desarrollo de software e IA aplicada.",
  reveal: "Mostrar correo",
  revealed: "",
  email: "",
  hint: "Haz clic para revelar el correo sin dejarlo expuesto directamente a bots o spam.",
},
    footer: {
      backToTop: "Volver arriba",
      copy: "(c) {year} Juan Sebastián Rubiano. Software, datos e IA con enfoque práctico.",
    },
    theme: {
      light: "Modo claro",
      dark: "Modo oscuro",
    },
    controls: {
      language: "Cambiar idioma",
      theme: "Cambiar tema",
    },
  },
  en: {
    metaTitle: "Juan Sebastián Rubiano | Portfolio",
    metaDescription:
      "Portfolio of Juan Sebastián Rubiano, Systems Engineering student and Software Development Technologist. Projects in web development, Python, SQL, React, TypeScript, data analytics, machine learning, applied AI and augmented reality.",
    nav: {
      menu: "Menu",
      skills: "Technologies",
      projects: "Projects",
      credentials: "Education",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Systems Engineering - Data - Applied AI - Software",
      title:
        'I turn <span class="accent">data</span>, <span class="accent">analytics</span> and <span class="accent">applied AI</span> into useful solutions for real processes and decision-making.',
      summary1:
        "I am a tenth-semester Systems Engineering student and Software Development Technologist focused on data analysis, visualization, databases and applied artificial intelligence for real operational workflows.",
      summary2:
        "I complement that focus with software development, automation and functional prototypes that connect business context, operations and user experience. That mix appears in projects such as Optica Suite, analytical dashboards and applied AR experiences.",
      availabilityTitle: "Open to internships, entry-level and junior roles",
      availabilityBody:
        "I am looking for opportunities as a junior data analyst, systems engineering intern or early-career contributor who can support analytics, databases, automation and applied AI while translating business needs into functional solutions.",
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
            { label: "Machine Learning", abbr: "ML", color: "#ffb15a" },
          ],
        },
        {
          title: "Software development",
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
          title: "Databases and tools",
          summary: "Persistence and day-to-day tools I use most often.",
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
      eyebrow: "Featured projects",
      title: "The first thing I want to show is what I have already built.",
      intro:
        "These projects represent my profile best today: operational software, data visualization, immersive experiences and applied technical case work.",
      prevLabel: "Previous project",
      nextLabel: "Next project",
      carouselLabel: "Projects carousel",
      counter: "Project {current} of {total}",
      items: [
        {
          name: "Bearing statistics case",
          kind: "standard",
          meta: "Python - Descriptive statistics",
          title: "Applied statistics case on spherical bearing diameters",
          summary:
            "Python recreation of an academic exercise built around a 54-item bearing sample: grouped frequencies, percentiles, dispersión metrics and confidence intervals for the population standard deviation.",
          bullets: [
            "Replicates central tendency and position measures for grouped data.",
            "Includes variance, standard deviation, coefficient of variation and interquartile range.",
            "Computes 90% and 95% confidence intervals for sigma with chi-square and documents the case as a portfolio piece.",
          ],
          tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-square", "Statistics"],
          links: [{ label: "View case", href: "cases/cojinetes-estadistica.html" }],
          image: "assets/projects/cojinetes-statistics-summary.png",
          fallback: "ST",
        },
        {
          name: "HR Dashboard in Tableau",
          kind: "standard",
          meta: "BI - Data visualization",
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
          fallback: "TB",
        },
        {
          name: "Data Lake Practice",
          kind: "standard",
          meta: "Data engineering - In progress",
          title: "Practice repository for data lake architecture and analytics pipeline structure",
          summary:
            "An in-progress repository created to practice data lake foundations, layered data organization and analytics-oriented workflow design.",
          bullets: [
            "Designed to explore raw, processed and consumption-ready data layers.",
            "Acts as a personal lab for data architecture, ETL thinking and modeling criteria.",
            "Linked as an active growth project in data engineering and analytics.",
          ],
          tags: ["Data Lake", "Python", "SQL", "ETL", "Data architecture"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DataLakePractice" }],
          image: "assets/projects/DataLake.png",
          fallback: "DL",
        },
        {
          name: "AI and data analysis",
          kind: "standard",
          meta: "Machine learning - Exploration",
          title: "Machine learning, audio, simulation and data analysis cases",
          summary:
            "Collection of exercises and prototypes using text, audio, image and video datasets to strengthen data preparation, exploration, training and result interpretation.",
          bullets: [
            "Uses Pandas, NumPy, scikit-learn and TensorFlow depending on the problem.",
            "Strong focus on cleaning, EDA and understandable documentation of findings.",
            "Includes navigable portfolio cases and Colab access when a public notebook is available.",
          ],
          tags: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "EDA"],
          links: [
            { label: "GitHub", href: "https://github.com/Zhulgon" },
            { label: "View cases", href: "cases/modelos-ml.html" },
          ],
          image: "assets/projects/MlCatalogo.png",
          fallback: "ML",
        },
        {
          name: "Óptica Suite",
          kind: "featured",
          meta: "Operational software - Full stack",
          title: "Integrated system to centralize clinical, commercial and logistics workflows",
          summary:
            "It started after identifying that the optical business was running processes separately across Word files, PDFs, Excel sheets and loose notes. I designed this system to unify inventory, sales, clinical records, appointments, branches, role-based users, audit tracking and reporting in one platform.",
          bullets: [
            "Solves a real fragmented-operations problem and improves traceability, control and follow-up.",
            "Integrates inventory, sales, clinical records, appointment scheduling, branches, role-based access, audit trails and operational reports.",
            "Connects software and data to produce more reliable information, analyze business performance and support better decisions.",
          ],
          tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
          video: "assets/projects/VideoOpti-suite.mp4",
          fallback: "OS",
        },
        {
          name: "AR Monturas",
          kind: "compact",
          meta: "Unity - Augmented reality",
          title: "AR catalog with face tracking designed for a real optical retail need",
          summary:
            "I built this catalog to improve how optical frames are presented, support the sales process and bring a more interactive experience to customers. The project is still under continuous improvement with the intention of becoming a real implementation.",
          bullets: [
            "Allows users to visualize 3D frames and browse catalog references from mobile devices.",
            "Includes image targets and an experimental face-tracking flow for virtual frame try-on.",
            "It was created as an extension of a real commercial and customer-experience problem inside the optical business.",
          ],
          tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
          links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
          video: "assets/projects/ar-monturas-demo.mp4",
          fallback: "AR",
        },
        {
          name: "Habits + Finance App",
          kind: "standard",
          meta: "Mobile product - React Native",
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
          fallback: "FH",
        },
      ],
    },
    credentials: {
      eyebrow: "Education",
      title: "Education, data and software.",
      intro:
        "This section summarizes my academic foundation and the two professional tracks I most want to strengthen through internships and junior roles: data and software development.",
      items: [
        {
          icon: "fa-solid fa-graduation-cap",
          topline: "Universidad Tecnológica de Santander",
          title: "Academic background",
          details: [
            {
              label: "Software Development Technologist.",
            },
            {
              label: "Systems Engineer.",
              description:
                "Tenth-semester student focused on data analysis, artificial intelligence, software architecture and technical problem-solving with business awareness.",
            },
          ],
          badges: ["Technologist", "Systems Engineer", "Databases", "Architecture"],
        },
        {
          icon: "fa-solid fa-chart-line",
          topline: "Credentials, stack and focus",
          title: "Data",
          body: "This track is backed by Google and IBM pathways, exploratory analysis, visualization, applied machine learning and projects where I connect metrics, processes and business decisions.",
          badges: ["Google Data Analytics", "Advanced Data Analytics", "IBM AI / Tech", "EF SET C1"],
          toolsTitle: "Technologies and frameworks",
          tools: [
            { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
            { label: "Python", icon: "fa-brands fa-python", color: "#ffd662" },
            { label: "SQL", abbr: "SQL", color: "#7bd3ff" },
            { label: "Tableau", abbr: "TB", color: "#ff9f6b" },
            { label: "Power BI", abbr: "BI", color: "#f4c542" },
            { label: "AWS", abbr: "AWS", color: "#ffb866" },
            { label: "Spark", abbr: "Sp", color: "#ff935f" },
            { label: "NoSQL", abbr: "No", color: "#77e4c8" },
            { label: "Pandas", abbr: "PD", color: "#9c8bff" },
          ],
          link: { label: "View credentials", href: "https://www.linkedin.com/in/juansrubiano" },
        },
        {
          icon: "fa-solid fa-code-branch",
          topline: "Credentials, stack and projects",
          title: "Software",
          body: "This track is reinforced by Python, web development and mobile foundations, plus real projects where I designed systems, operational workflows, dashboards and immersive experiences.",
          badges: ["PCAP Python", "IBM Web / Cyber", "HTML & CSS", "Mobile apps"],
          toolsTitle: "Technologies and frameworks",
          tools: [
            { label: "JavaScript", icon: "fa-brands fa-js", color: "#ffd84d" },
            { label: "TypeScript", abbr: "TS", color: "#69b5ff" },
            { label: "React", icon: "fa-brands fa-react", color: "#7ee0ff" },
            { label: "Node.js", icon: "fa-brands fa-node-js", color: "#88df8a" },
            { label: "NestJS", abbr: "N", color: "#ff7b90" },
            { label: "GitHub", icon: "fa-brands fa-github", color: "#d8e0f2" },
            { label: "Docker", icon: "fa-brands fa-docker", color: "#78c7ff" },
            { label: "Kubernetes", abbr: "K8s", color: "#8db5ff" },
            { label: "Unity", abbr: "U", color: "#f0f4ff" },
          ],
          link: { label: "See more on LinkedIn", href: "https://www.linkedin.com/in/juansrubiano" },
        },
      ],
    },
    experience: {
  eyebrow: "Experience",
  title: "Real experience connecting operations, data and technology solutions.",
  intro:
    "For two years I worked closely with commercial, administrative and operational processes in the optical sector. That context helped me understand real problems around inventory, sales, customer service, traceability and reporting before turning them into digital solutions.",
  items: [
    {
      topline: "Optical sector - 2 years in operations and process improvement",
      title: "Operations management and digital solution design for an optical business",
      body: "I supported the commercial and administrative management of an optical business, identifying friction points in inventory, sales, clinical records, appointments, customer service and business indicators. From those needs, I designed technology solutions to centralize information, reduce manual work and improve operational traceability.",
      highlights: [
        "Designed a system to integrate inventory, sales, clinical records, appointment scheduling, branches, role-based users and operational reports.",
        "Analyzed sales data and business indicators to support clearer decisions around operations, follow-up and growth.",
        "Worked on digital marketing and commercial visibility to improve reach, communication and customer acquisition.",
        "Proposed an augmented reality catalog with face tracking as an extension of a real commercial need inside the optical business.",
      ],
      closing: "Real experience to contribute from day one.",
    },
  ],
},
    ccontact: {
  eyebrow: "Contact",
  title: "Let’s connect",
  body:
    "I am open to internships, entry-level roles and collaborations related to data analysis, business intelligence, automation, software development and applied AI.",
  reveal: "Show email",
  revealed: "",
  email: "",
  hint: "Click to reveal the email without exposing it directly to bots or spam.",
},
    footer: {
      backToTop: "Back to top",
      copy: "(c) {year} Juan Sebastián Rubiano. Software, data and AI with practical focus.",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
    },
    controls: {
      language: "Switch language",
      theme: "Switch theme",
    },
  },
};

const state = {
  locale: localStorage.getItem("portfolio-locale") || "es",
  theme: "dark",
  projectIndex: 0,
  projectAnimating: false,
  projectPendingLoop: null,
  contactUnlocked: false,
  revealObserver: null,
};

function getCopy() {
  return translations[state.locale];
}

function resolveCopy(path, source) {
  return path.split(".").reduce((value, key) => (value ? value[key] : ""), source);
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

function isExternalHref(href) {
  return /^https?:\/\//.test(href);
}

function buildLinkChip(link) {
  const anchor = createElement("a", "link-chip", link.label);
  anchor.href = link.href;
  const external = isExternalHref(link.href);

  if (external) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }

  anchor.innerHTML = external
    ? `${link.label} <i class="fa-solid fa-arrow-up-right-from-square"></i>`
    : `${link.label} <i class="fa-solid fa-arrow-right"></i>`;
  return anchor;
}

function buildCredentialTools(tools, title) {
  const stack = createElement("div", "credential-stack");
  const grid = createElement("div", "credential-tool-grid");
  const orbitDuration = Math.max(18, tools.length * 2.35);

  if (title) {
    stack.appendChild(createElement("p", "credential-stack-title", title));
  }

  grid.classList.add("credential-tool-grid-constellation");

  tools.forEach((tool, index) => {
    const orbitNode = createElement("div", "credential-orbit-node");
    const item = createElement("div", "credential-tool");
    const icon = createElement("span", "credential-tool-icon");
    const label = createElement("span", "credential-tool-label", tool.label);
    const orbitDelay = `${(-orbitDuration / tools.length) * index}s`;

    item.style.setProperty("--tool-color", tool.color);
    orbitNode.style.setProperty("--orbit-duration", `${orbitDuration}s`);
    orbitNode.style.setProperty("--orbit-delay", orbitDelay);
    item.style.setProperty("--orbit-duration", `${orbitDuration}s`);
    item.style.setProperty("--orbit-delay", orbitDelay);

    if (tool.icon) {
      icon.innerHTML = `<i class="${tool.icon}"></i>`;
    } else {
      icon.appendChild(createElement("span", "credential-tool-abbr", tool.abbr));
    }

    item.append(icon, label);
    orbitNode.appendChild(item);
    grid.appendChild(orbitNode);
  });

  stack.appendChild(grid);
  return stack;
}

function renderSkills(copy) {
  const grid = document.getElementById("skillsGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  copy.skills.items.forEach((item, index) => {
    const card = createElement("article", `skill-card reveal${index % 2 === 1 ? " reveal-delay" : ""}`);
    const title = createElement("h3", "", item.title);
    const summary = createElement("p", "skill-summary", item.summary);
    const techGrid = createElement("div", "tech-grid");

    card.style.setProperty("--skill-accent", item.accent);

    if (item.tools.length <= 4) {
      techGrid.classList.add("tech-grid-compact");
    }

    item.tools.forEach((tool) => {
      const tile = createElement("div", "tech-item");
      const icon = createElement("div", "tech-icon");
      const label = createElement("span", "tech-label", tool.label);

      tile.style.setProperty("--tool-color", tool.color);

      if (tool.icon) {
        icon.innerHTML = `<i class="${tool.icon}"></i>`;
      } else {
        icon.appendChild(createElement("span", "tech-abbr", tool.abbr));
      }

      tile.append(icon, label);
      techGrid.appendChild(tile);
    });

    card.append(title, summary, techGrid);
    grid.appendChild(card);
  });
}

function buildProjectVisual(project) {
  const visual = createElement("div", "project-visual");

  if (project.video) {
    const video = document.createElement("video");
    visual.classList.add("has-video");
    video.src = project.video;
    video.controls = true;
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
    image.loading = "lazy";
    image.decoding = "async";
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

function getProjectLoopCloneCount(total) {
  if (total <= 1) {
    return 0;
  }

  return Math.min(2, total);
}

function normalizeProjectIndex(index, total) {
  if (total <= 0) {
    return 0;
  }

  return ((index % total) + total) % total;
}

function getRenderedProjectIndex(total) {
  return state.projectIndex + getProjectLoopCloneCount(total);
}

function updateProjectsSlider(copy, options = {}) {
  const track = document.getElementById("projectsGrid");
  const viewport = document.getElementById("projectsViewport");
  const status = document.getElementById("projectsStatus");
  const prevButton = document.getElementById("projectsPrev");
  const nextButton = document.getElementById("projectsNext");
  const { renderedIndex = null, disableTransition = false } = options;

  if (!track || !viewport || !status || !prevButton || !nextButton) {
    return;
  }

  const slides = Array.from(track.children);
  const total = copy.projects.items.length;
  const currentRenderedIndex = renderedIndex ?? getRenderedProjectIndex(total);

  state.projectIndex = normalizeProjectIndex(state.projectIndex, total);

  prevButton.disabled = total <= 1;
  nextButton.disabled = total <= 1;
  prevButton.setAttribute("aria-label", copy.projects.prevLabel);
  nextButton.setAttribute("aria-label", copy.projects.nextLabel);
  viewport.setAttribute("aria-label", copy.projects.carouselLabel);

  status.textContent = copy.projects.counter
    .replace("{current}", String(state.projectIndex + 1).padStart(2, "0"))
    .replace("{total}", String(total).padStart(2, "0"));

  slides.forEach((slide, index) => {
    const isActive = index === currentRenderedIndex;
    const isNext = total > 1 && index === currentRenderedIndex + 1;
    const isPrev = total > 1 && index === currentRenderedIndex - 1;

    slide.classList.toggle("is-active", isActive);
    slide.classList.toggle("is-next", isNext);
    slide.classList.toggle("is-prev", isPrev);
    slide.classList.toggle("is-far", !isActive && !isNext && !isPrev);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  const activeSlide = slides[currentRenderedIndex];
  if (!activeSlide) {
    return;
  }

  track.style.transition = disableTransition ? "none" : "";
  track.style.transform = `translateX(-${activeSlide.offsetLeft}px)`;

  if (disableTransition) {
    track.getBoundingClientRect();
    track.style.transition = "";
  }
}

function completeProjectLoop(copy) {
  if (!state.projectPendingLoop) {
    return;
  }

  const { projectIndex, renderedIndex } = state.projectPendingLoop;
  state.projectPendingLoop = null;
  state.projectIndex = projectIndex;

  window.requestAnimationFrame(() => {
    updateProjectsSlider(copy, { renderedIndex, disableTransition: true });
    window.requestAnimationFrame(() => {
      state.projectAnimating = false;
    });
  });
}

function changeProjectSlide(step) {
  const copy = getCopy();
  const total = copy.projects.items.length;
  const cloneCount = getProjectLoopCloneCount(total);

  if (total <= 1 || state.projectAnimating || step === 0) {
    return;
  }

  state.projectIndex = normalizeProjectIndex(state.projectIndex, total);

  if (step > 0 && state.projectIndex === total - 1) {
    state.projectAnimating = true;
    state.projectPendingLoop = {
      projectIndex: 0,
      renderedIndex: cloneCount,
    };
    updateProjectsSlider(copy, { renderedIndex: total + cloneCount });
    return;
  }

  if (step < 0 && state.projectIndex === 0) {
    state.projectAnimating = true;
    state.projectPendingLoop = {
      projectIndex: total - 1,
      renderedIndex: total + cloneCount - 1,
    };
    updateProjectsSlider(copy, { renderedIndex: cloneCount - 1 });
    return;
  }

  state.projectIndex = normalizeProjectIndex(state.projectIndex + step, total);
  updateProjectsSlider(copy);
}

function renderProjects(copy) {
  const track = document.getElementById("projectsGrid");
  if (!track) {
    return;
  }

  const items = copy.projects.items;
  const cloneCount = getProjectLoopCloneCount(items.length);
  const slidesData = items.map((project, index) => ({ project, index, isClone: false }));

  state.projectAnimating = false;
  state.projectPendingLoop = null;
  state.projectIndex = normalizeProjectIndex(state.projectIndex, items.length);
  track.innerHTML = "";

  if (cloneCount > 0) {
    const leadingClones = items.slice(-cloneCount).map((project, offset) => ({
      project,
      index: items.length - cloneCount + offset,
      isClone: true,
    }));
    const trailingClones = items.slice(0, cloneCount).map((project, index) => ({
      project,
      index,
      isClone: true,
    }));

    slidesData.unshift(...leadingClones);
    slidesData.push(...trailingClones);
  }

  slidesData.forEach(({ project, index, isClone }) => {
    const slide = createElement("div", "project-slide");
    const card = createElement("article", `project-card ${project.kind}`);
    const list = document.createElement("ul");
    const tags = createElement("div", "project-tags");
    const links = createElement("div", "project-links");

    slide.dataset.projectIndex = String(index);
    if (isClone) {
      slide.dataset.clone = "true";
    }

    project.bullets.forEach((bullet) => {
      list.appendChild(createElement("li", "", bullet));
    });

    project.tags.forEach((tag) => {
      tags.appendChild(createElement("span", "tag", tag));
    });

    project.links.forEach((link) => {
      links.appendChild(buildLinkChip(link));
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
  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  copy.credentials.items.forEach((item, index) => {
    const card = createElement("article", `credential-card formation-card reveal${index % 2 === 1 ? " reveal-delay" : ""}`);
    const icon = createElement("div", "credential-icon");
    const badges = createElement("div", "project-badges");

    icon.innerHTML = `<i class="${item.icon}"></i>`;

    item.badges.forEach((badge) => {
      badges.appendChild(createElement("span", "badge-chip", badge));
    });

    card.append(
      icon,
      createElement("p", "credential-topline", item.topline),
      createElement("h3", "", item.title)
    );

    if (item.details?.length) {
      const detailList = createElement("ul", "credential-detail-list");

      item.details.forEach((detail) => {
        const entry = createElement("li", "credential-detail-item");
        entry.appendChild(createElement("strong", "credential-detail-label", detail.label));

        if (detail.description) {
          entry.appendChild(createElement("p", "credential-detail-copy", detail.description));
        }

        detailList.appendChild(entry);
      });

      card.appendChild(detailList);
    } else if (item.body) {
      card.appendChild(createElement("p", "", item.body));
    }

    card.appendChild(badges);

    if (item.tools?.length) {
      card.appendChild(buildCredentialTools(item.tools, item.toolsTitle));
    }

    if (item.link) {
      card.appendChild(buildLinkChip(item.link));
    }

    grid.appendChild(card);
  });
}

function renderExperience(copy) {
  const grid = document.getElementById("experienceGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  copy.experience.items.forEach((item) => {
    const card = createElement("article", "timeline-card experience-story-card reveal");
    const list = createElement("ul", "experience-story-list");

    card.append(
      createElement("p", "credential-topline", item.topline),
      createElement("h3", "", item.title),
      createElement("p", "experience-story-copy", item.body)
    );

    item.highlights.forEach((highlight) => {
      list.appendChild(createElement("li", "", highlight));
    });

    card.append(list, createElement("p", "experience-story-closing", item.closing));
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

  const themeLabel = state.theme === "dark" ? copy.theme.light : copy.theme.dark;
  const themeToggleLabel = document.getElementById("themeToggleLabel");
  const langToggleLabel = document.getElementById("langToggleLabel");
  const menuToggle = document.getElementById("menuToggle");
  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");

  if (themeToggleLabel) {
    themeToggleLabel.textContent = themeLabel;
  }

  if (langToggleLabel) {
    langToggleLabel.textContent = state.locale === "es" ? "EN" : "ES";
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-label", copy.nav.menu);
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-label", `${copy.controls.theme}: ${themeLabel}`);
  }

  if (langToggle) {
    langToggle.setAttribute("aria-label", copy.controls.language);
  }

  updateContactReveal(copy);
}

function updateFooter(copy) {
  const footerCopy = document.getElementById("footerCopy");
  if (!footerCopy) {
    return;
  }

  footerCopy.textContent = copy.footer.copy.replace("{year}", String(new Date().getFullYear()));
}

function updateContactReveal(copy) {
  const revealButton = document.getElementById("contactReveal");

  if (!revealButton) {
    return;
  }

  const emailUser = "jsebastian000124";
  const emailHost = "gmail.com";
  const emailAddress = `${emailUser}@${emailHost}`;

  revealButton.type = "button";
  revealButton.removeAttribute("href");
  revealButton.removeAttribute("target");
  revealButton.removeAttribute("rel");

  if (state.contactUnlocked) {
    revealButton.textContent = emailAddress;
    revealButton.setAttribute("aria-pressed", "true");
    revealButton.setAttribute("aria-label", emailAddress);
  } else {
    revealButton.textContent = copy.contact.reveal;
    revealButton.setAttribute("aria-pressed", "false");
    revealButton.setAttribute("aria-label", copy.contact.reveal);
  }
}

function applyTheme() {
  document.body.setAttribute("data-theme", state.theme);
}

function closeMenu() {
  const dropdown = document.getElementById("menuDropdown");
  const toggle = document.getElementById("menuToggle");

  if (!dropdown || !toggle) {
    return;
  }

  dropdown.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}

function observeReveal() {
  const nodes = document.querySelectorAll(".reveal");

  if (state.revealObserver) {
    state.revealObserver.disconnect();
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  state.revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          state.revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  nodes.forEach((node) => state.revealObserver.observe(node));
}

function renderAll() {
  const copy = getCopy();
  applyStaticTranslations(copy);
  updateFooter(copy);
  renderSkills(copy);
  renderProjects(copy);
  renderCredentials(copy);
  renderExperience(copy);
  observeReveal();
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const dropdown = document.getElementById("menuDropdown");
  const menu = document.getElementById("siteMenu");

  if (!toggle || !dropdown || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
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
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    state.locale = state.locale === "es" ? "en" : "es";
    localStorage.setItem("portfolio-locale", state.locale);
    renderAll();
  });
}

function setupThemeToggle() {
  const button = document.getElementById("themeToggle");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
    applyStaticTranslations(getCopy());
  });
}

function setupProjectSlider() {
  const prevButton = document.getElementById("projectsPrev");
  const nextButton = document.getElementById("projectsNext");
  const viewport = document.getElementById("projectsViewport");
  const track = document.getElementById("projectsGrid");
  let touchStartX = 0;

  if (!prevButton || !nextButton || !viewport || !track) {
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

  track.addEventListener("click", (event) => {
    if (event.target.closest("a, button, video")) {
      return;
    }

    if (event.target.closest(".project-slide.is-next")) {
      changeProjectSlide(1);
    }
  });

  track.addEventListener("transitionend", (event) => {
    if (event.target !== track || event.propertyName !== "transform" || !state.projectPendingLoop) {
      return;
    }

    completeProjectLoop(getCopy());
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => {
      updateProjectsSlider(getCopy());
    });
  });
}

function setupContactReveal() {
  const button = document.getElementById("contactReveal");

  if (!button || button.dataset.bound === "true") {
    return;
  }

  button.dataset.bound = "true";

  button.addEventListener("click", () => {
    state.contactUnlocked = true;
    updateContactReveal(getCopy());
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
  setupContactReveal();
  setupScrollUI();
});
