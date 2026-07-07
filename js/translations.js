(function attachPortfolioTranslations() {
  window.PortfolioTranslations = {
    es: {
      metaTitle: "Juan Sebastián Rubiano | Portafolio",
      metaDescription:
        "Portafolio de Juan Sebastián Rubiano, estudiante de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos. Perfil orientado a ingeniería de datos con Python, SQL, PySpark, análisis de datos, Lakehouse, arquitectura Medallion, Microsoft Fabric, dashboards, estadística y automatización.",
      nav: {
        menu: "Menú",
        skills: "Conocimientos",
        projects: "Proyectos",
        credentials: "Formación",
        experience: "Experiencia",
        contact: "Contacto",
      },
      hero: {
        eyebrow: "Juan Sebastián Rubiano · Bucaramanga, Colombia",
        title:
          'Estudiante de <span class="accent">Ingeniería de Sistemas</span> con foco en datos, analítica y soluciones digitales.',
        summary1:
          "Soy Juan Sebastián Rubiano, estudiante de décimo semestre de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos.",
        summary2:
          "Estoy orientando mi perfil hacia ingeniería de datos y analítica, fortaleciendo Python, SQL, PySpark y fundamentos de Microsoft Fabric a partir de experiencia real en software, trazabilidad y organización de información.",
        availabilityTitle: "Disponible para prácticas en datos y analítica",
        availabilityBody:
          "Busco prácticas y primeras oportunidades donde pueda aportar con análisis, transformación y visualización de datos, mientras sigo creciendo en ingeniería de datos.",
      },
      skills: {
        eyebrow: "Conocimientos",
        title: "Herramientas y conocimientos para mover, transformar y aprovechar datos.",
        intro:
          "Organicé esta base técnica por bloques para mostrar con claridad cómo aporto en datos, análisis y software.",
        items: [
          {
            title: "Ingeniería de datos",
            summary: "Base para estructurar, transformar y preparar datos con lógica de lakehouse y pipelines.",
            accent: "#8ff0b3",
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#8ec5ff" },
              { label: "SQL", abbr: "SQL", color: "#86d6ff" },
              { label: "PySpark", abbr: "PyS", color: "#ffb15a" },
              { label: "ETL/ELT", abbr: "ETL", color: "#f0a35a" },
              { label: "Data Lake", abbr: "DL", color: "#7ed9c1" },
              { label: "Medallion", abbr: "Med", color: "#b49cff" },
            ],
          },
          {
            title: "Datos y analítica",
            summary: "Exploración, visualización y análisis para apoyar decisiones con criterio cuantitativo.",
            accent: "#7ee0ff",
            tools: [
              { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
              { label: "Tableau", abbr: "Tb", color: "#ffb36b" },
              { label: "Power BI", abbr: "BI", color: "#f4c542" },
              { label: "Dashboards", icon: "fa-solid fa-chart-column", color: "#86d6ff" },
              { label: "EDA", abbr: "EDA", color: "#8ee6d8" },
              { label: "Estadística", abbr: "Est", color: "#ff9d75" },
            ],
          },
          {
            title: "Arquitectura y plataformas",
            summary: "Conceptos y herramientas que estoy alineando a escenarios modernos de datos.",
            accent: "#c9b4ff",
            tools: [
              { label: "Fabric", abbr: "Fab", color: "#82b9ff" },
              { label: "Lakehouse", abbr: "LH", color: "#7fd6ff" },
              { label: "Notebooks", abbr: "Nb", color: "#ffc98a" },
              { label: "Pipelines", abbr: "PL", color: "#8ff0b3" },
              { label: "Bronze", abbr: "Br", color: "#cd7f32" },
              { label: "Silver", abbr: "Si", color: "#c0c0c0" },
            ],
          },
          {
            title: "Bases de datos y modelado",
            summary: "Persistencia, consultas y organización técnica para datos confiables.",
            accent: "#ffb07d",
            tools: [
              { label: "SQL", abbr: "SQL", color: "#82b9ff" },
              { label: "NoSQL", abbr: "No", color: "#9bd8ff" },
              { label: "Modelado", abbr: "Md", color: "#b1a4ff" },
              { label: "Consultas", icon: "fa-solid fa-database", color: "#7fd6ff" },
              { label: "Calidad", abbr: "QA", color: "#8fe6d4" },
              { label: "Integración", abbr: "Int", color: "#f0a35a" },
            ],
          },
        ],
      },
      projects: {
        eyebrow: "Proyectos y casos",
        title: "Proyectos donde convierto datos, procesos y aprendizaje en evidencia práctica.",
        intro:
          "Una selección de proyectos que muestra mi trabajo en datos, software y analítica aplicada.",
        prevLabel: "Proyecto anterior",
        nextLabel: "Proyecto siguiente",
        carouselLabel: "Carrusel de proyectos",
        counter: "Proyecto {current} de {total}",
        items: [
          {
            name: "Data Lake Practice",
            kind: "standard",
            meta: "Ingeniería de datos · En desarrollo",
            title: "Laboratorio personal para practicar lakehouse y arquitectura Medallion",
            summary:
              "Proyecto en evolución para practicar organización por capas, transformación y consumo analítico con enfoque lakehouse.",
            bullets: [
              "Práctica con Python, SQL, PySpark y arquitectura Medallion.",
              "Enfocado en aprendizaje aplicado hacia Microsoft Fabric.",
            ],
            tags: ["Python", "SQL", "Lakehouse", "Medallion", "Data Lake", "PySpark"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DataLakePractice" }],
            image: "assets/projects/DataLake.png",
            fallback: "DL",
          },
          {
            name: "Óptica Suite",
            kind: "featured",
            meta: "Software empresarial · Datos operativos",
            title: "Plataforma para integrar operación, trazabilidad y análisis en una óptica",
            summary:
              "Sistema diseñado para centralizar inventario, ventas, historias clínicas, citas, sedes, usuarios y reportes en una sola plataforma.",
            bullets: [
              "Tecnologías principales: NestJS, Prisma, PostgreSQL, React, Vite, TypeScript y Docker.",
              "Convierte una necesidad real en procesos, trazabilidad y datos confiables.",
            ],
            tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
            video: "assets/projects/VideoOpti-suite.mp4",
            fallback: "OS",
          },
          {
            name: "HR Dashboard en Tableau",
            kind: "standard",
            meta: "Analítica de datos · Tableau",
            title: "Dashboard de recursos humanos para lectura ejecutiva y seguimiento detallado",
            summary:
              "Convierte datos de empleados en una vista clara para headcount, rotación, contrataciones y distribución por áreas.",
            bullets: [
              "Tecnologías principales: Tableau, Python, CSV y documentación visual.",
              "Muestra limpieza, estructuración y comunicación de datos para negocio.",
            ],
            tags: ["Tableau", "Python", "CSV", "Draw.io", "Storytelling"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DashboardTableau" }],
            image: "assets/projects/tableau-dashboard-summary.png",
            fallback: "TB",
          },
          {
            name: "Estadística de cojinetes",
            kind: "standard",
            meta: "Python · Estadística aplicada",
            title: "Caso de estadística descriptiva e inferencial sobre cojinetes esféricos",
            summary:
              "Caso reproducible en Python para trabajar distribuciones, dispersión e intervalos de confianza sobre una muestra de 54 cojinetes.",
            bullets: [
              "Tecnologías principales: Python, NumPy, Matplotlib, SciPy y estadística inferencial.",
              "Refuerza análisis cuantitativo, validación de supuestos y documentación.",
            ],
            tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-cuadrado", "Estadística"],
            links: [{ label: "Ver caso", href: "cases/cojinetes-estadistica.html" }],
            image: "assets/projects/cojinetes-statistics-summary.png",
            fallback: "ST",
          },
          {
            name: "IA y análisis de datos",
            kind: "standard",
            meta: "Análisis de datos · Machine learning",
            title: "Casos prácticos para preparación de datos y evaluación de modelos",
            summary:
              "Colección de ejercicios con datos tabulares, audio, imagen y video para fortalecer preparación, exploración y lectura de resultados.",
            bullets: [
              "Tecnologías principales: Python, Pandas, NumPy, scikit-learn y TensorFlow según el caso.",
              "Complementa el perfil con análisis, preparación de datasets y evaluación básica.",
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
            name: "App Finanzas + Habitos",
            kind: "standard",
            meta: "Producto digital · React Native",
            title: "Aplicación para hábitos, finanzas personales y seguimiento gamificado",
            summary:
              "Aplicación que une producto, experiencia de usuario y persistencia de datos para hábitos y finanzas personales.",
            bullets: [
              "Tecnologías principales: Expo, React Native, TypeScript, Zustand y persistencia local.",
              "Muestra desarrollo de producto, diseño de flujos y software funcional.",
            ],
            tags: ["Expo", "React Native", "TypeScript", "Zustand", "Jest", "Product thinking"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/APP_Finanzas_Habitos" }],
            image: "assets/projects/finanzas-home.png",
            fallback: "FH",
          },
          {
            name: "AR Monturas",
            kind: "compact",
            meta: "Complemento tecnológico · Experiencia comercial",
            title: "Catálogo en realidad aumentada como plus para experiencia de cliente",
            summary:
              "Prototipo creado para apoyar la gestión comercial de la óptica con una experiencia más interactiva desde el móvil.",
            bullets: [
              "Tecnologías principales: Unity, C#, Vuforia, AR Foundation y Android.",
              "Funciona como plus de innovación dentro de un caso real de negocio.",
            ],
            tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
            video: "assets/projects/ar-monturas-demo.mp4",
            fallback: "AR",
          },
        ],
      },
      credentials: {
        eyebrow: "Formación y fortalezas",
        title: "Formación que respalda mi siguiente paso en datos.",
        intro:
          "Base académica y certificaciones que respaldan mi perfil para prácticas en datos y analítica.",
        orbitTitle: "Stack alineado a datos e integración",
        orbitIntro:
          "Resumen visual de las herramientas que hoy sostienen mi perfil principal y su soporte complementario.",
        items: [
          {
            icon: "fa-solid fa-graduation-cap",
            topline: "Universidad Tecnológica de Santander",
            title: "Formación académica",
            details: [
              {
                label: "Tec. en Desarrollo de Sistemas Informáticos.",
              },
              {
                label: "Ingeniero de Sistemas.",
                description:
                  "Estudiante de décimo semestre con enfoque en ingeniería de datos, análisis de datos y arquitectura de información.",
              },
            ],
            badges: ["Tecnólogo", "Ingeniería de Sistemas", "Datos", "Integración"],
          },
          {
            icon: "fa-solid fa-chart-line",
            topline: "Certificaciones y orientación a datos",
            title: "Datos",
            body: "Base para roles de analítica e ingeniería de datos, con certificaciones reconocidas y transición activa hacia PySpark, Lakehouse y Microsoft Fabric.",
            badges: ["Google Data Analytics", "Advanced Data Analytics", "Python y SQL", "EF SET C1"],
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#ffd662" },
              { label: "SQL", abbr: "SQL", color: "#7bd3ff" },
              { label: "PySpark", abbr: "PyS", color: "#ff9f6b" },
              { label: "Fabric", abbr: "Fab", color: "#82b9ff" },
              { label: "Lakehouse", abbr: "LH", color: "#f4c542" },
              { label: "Medallion", abbr: "Med", color: "#ffb866" },
              { label: "Power BI", abbr: "BI", color: "#77e4c8" },
              { label: "ETL", abbr: "ETL", color: "#ff935f" },
            ],
            link: { label: "Ver credenciales", href: "https://www.linkedin.com/in/juansrubiano" },
          },
          {
            icon: "fa-solid fa-code-branch",
            topline: "Soporte técnico complementario",
            title: "Software",
            body: "Complementa mi perfil de datos con interfaces, APIs, automatización y soluciones de apoyo.",
            badges: ["PCAP Python", "Desarrollo web", "Git y Docker", "Apps móviles"],
            tools: [
              { label: "TypeScript", abbr: "TS", color: "#69b5ff" },
              { label: "React", icon: "fa-brands fa-react", color: "#7ee0ff" },
              { label: "Node.js", icon: "fa-brands fa-node-js", color: "#88df8a" },
              { label: "NestJS", abbr: "N", color: "#ff7b90" },
              { label: "Git", icon: "fa-brands fa-git-alt", color: "#ff8a64" },
              { label: "GitHub", icon: "fa-brands fa-github", color: "#d8e0f2" },
              { label: "Docker", icon: "fa-brands fa-docker", color: "#78c7ff" },
            ],
            link: { label: "Ver más en LinkedIn", href: "https://www.linkedin.com/in/juansrubiano" },
          },
        ],
      },
      experience: {
        eyebrow: "Experiencia aplicada",
        title: "De la operación del negocio a la organización técnica de la información.",
        intro:
          "Mi experiencia en el sector óptico me permitió trabajar con procesos, trazabilidad y organización de información en un contexto real de negocio.",
        items: [
          {
            topline: "Óptica · operación, mejora y digitalización",
            title: "Gestión del negocio y diseño de soluciones para una operación real",
            body: "Durante dos años participé en la gestión comercial y administrativa de una óptica, trabajando con inventario, ventas, historias clínicas, citas, servicio al cliente e indicadores. A partir de ese contexto empecé a diseñar soluciones para centralizar información y mejorar el control.",
            highlights: [
              "Diseñé un sistema para integrar inventarios, ventas, historias clínicas, agenda de citas, sedes, usuarios por roles y reportes operativos.",
              "Analicé ventas e indicadores para entender comportamiento comercial y apoyar decisiones con más contexto.",
              "Trabajé marketing digital y presencia comercial para mejorar alcance, comunicación y captación de clientes.",
              "Desarrollé un catálogo en realidad aumentada como complemento a una necesidad comercial detectada en la óptica.",
            ],
            closing: "Tengo base técnica y experiencia aplicada, y quiero llevar ambas a un entorno empresarial de datos.",
          },
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "Conversemos sobre una práctica, proyecto o entrevista.",
        body:
          "Estoy abierto a prácticas, proyectos, colaboración técnica y procesos de selección en datos y analítica.",
        reveal: "Mostrar correo",
        copy: "Copiar correo",
        copied: "Correo copiado",
        revealed: "",
        email: "",
        hint: "Haz clic para revelar el correo y coordinar una conversación profesional.",
        hintCopy: "Cuando el correo se revele, puedes hacer clic de nuevo para copiarlo.",
        hintCopied: "Correo copiado al portapapeles.",
      },
      footer: {
        backToTop: "Volver arriba",
        copy: "(c) {year} Juan Sebastián Rubiano. Portafolio orientado a ingeniería de datos, software y analítica.",
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
        "Portfolio of Juan Sebastián Rubiano, Systems Engineering student and Software Development Technologist. Profile oriented to data engineering with Python, SQL, PySpark, data analytics, Lakehouse, Medallion architecture, Microsoft Fabric, dashboards, statistics and automation.",
      nav: {
        menu: "Menu",
        skills: "Skills",
        projects: "Projects",
        credentials: "Education",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        eyebrow: "Juan Sebastián Rubiano · Bucaramanga, Colombia",
        title:
          'Systems Engineering student focused on <span class="accent">data</span>, analytics and digital solutions.',
        summary1:
          "I am Juan Sebastián Rubiano, a tenth-semester Systems Engineering student and Software Development Technologist.",
        summary2:
          "I am shaping my profile toward data engineering and analytics, strengthening Python, SQL, PySpark and Microsoft Fabric foundations through real experience in software, traceability and information organization.",
        availabilityTitle: "Open to data and analytics internships",
        availabilityBody:
          "I am looking for internships and early-career opportunities where I can contribute through data analysis, transformation and visualization while continuing to grow in data engineering.",
      },
      skills: {
        eyebrow: "Skills",
        title: "Tools and knowledge to move, transform and use data well.",
        intro:
          "I grouped this technical foundation to show clearly how I contribute in data, analytics and software.",
        items: [
          {
            title: "Data engineering",
            summary: "Foundations to structure, transform and prepare data with a lakehouse mindset.",
            accent: "#8ff0b3",
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#8ec5ff" },
              { label: "SQL", abbr: "SQL", color: "#86d6ff" },
              { label: "PySpark", abbr: "PyS", color: "#ffb15a" },
              { label: "ETL/ELT", abbr: "ETL", color: "#f0a35a" },
              { label: "Data Lake", abbr: "DL", color: "#7ed9c1" },
              { label: "Medallion", abbr: "Med", color: "#b49cff" },
            ],
          },
          {
            title: "Data and analytics",
            summary: "Exploration, visualization and analysis to support decisions.",
            accent: "#7ee0ff",
            tools: [
              { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
              { label: "Tableau", abbr: "Tb", color: "#ffb36b" },
              { label: "Power BI", abbr: "BI", color: "#f4c542" },
              { label: "Dashboards", icon: "fa-solid fa-chart-column", color: "#86d6ff" },
              { label: "EDA", abbr: "EDA", color: "#8ee6d8" },
              { label: "Statistics", abbr: "Stat", color: "#ff9d75" },
            ],
          },
          {
            title: "Architecture and platforms",
            summary: "Concepts and tools aligned with modern data scenarios.",
            accent: "#c9b4ff",
            tools: [
              { label: "Fabric", abbr: "Fab", color: "#82b9ff" },
              { label: "Lakehouse", abbr: "LH", color: "#7fd6ff" },
              { label: "Notebooks", abbr: "Nb", color: "#ffc98a" },
              { label: "Pipelines", abbr: "PL", color: "#8ff0b3" },
              { label: "Bronze", abbr: "Br", color: "#cd7f32" },
              { label: "Silver", abbr: "Si", color: "#c0c0c0" },
            ],
          },
          {
            title: "Databases and modeling",
            summary: "Persistence, queries and technical organization for reliable data.",
            accent: "#ffb07d",
            tools: [
              { label: "SQL", abbr: "SQL", color: "#82b9ff" },
              { label: "NoSQL", abbr: "No", color: "#9bd8ff" },
              { label: "Modeling", abbr: "Mod", color: "#b1a4ff" },
              { label: "Queries", icon: "fa-solid fa-database", color: "#7fd6ff" },
              { label: "Quality", abbr: "QA", color: "#8fe6d4" },
              { label: "Integration", abbr: "Int", color: "#f0a35a" },
            ],
          },
        ],
      },
      projects: {
        eyebrow: "Projects and cases",
        title: "Projects where I turn data, process understanding and learning into practical evidence.",
        intro:
          "A selection of projects that shows my work in data, software and applied analytics.",
        prevLabel: "Previous project",
        nextLabel: "Next project",
        carouselLabel: "Projects carousel",
        counter: "Project {current} of {total}",
        items: [
          {
            name: "Data Lake Practice",
            kind: "standard",
            meta: "Data engineering - In progress",
            title: "Personal lab to practice lakehouse thinking and Medallion architecture",
            summary:
              "An evolving practice project to work on layered organization, transformation and analytical consumption with a lakehouse mindset.",
            bullets: [
              "Practice with Python, SQL, PySpark and Medallion architecture.",
              "Focused on applied learning toward Microsoft Fabric.",
            ],
            tags: ["Python", "SQL", "Lakehouse", "Medallion", "Data Lake", "PySpark"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DataLakePractice" }],
            image: "assets/projects/DataLake.png",
            fallback: "DL",
          },
          {
            name: "Óptica Suite",
            kind: "featured",
            meta: "Business software - Operational data",
            title: "Platform to integrate operations, traceability and analysis in an optical business",
            summary:
              "System designed to centralize inventory, sales, clinical records, appointments, branches, users and reports in one platform.",
            bullets: [
              "Main technologies: NestJS, Prisma, PostgreSQL, React, Vite, TypeScript and Docker.",
              "Turns a real business need into processes, traceability and reliable data.",
            ],
            tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
            video: "assets/projects/VideoOpti-suite.mp4",
            fallback: "OS",
          },
          {
            name: "HR Dashboard in Tableau",
            kind: "standard",
            meta: "Data analytics - Tableau",
            title: "Human resources dashboard for executive reading and detailed follow-up",
            summary:
              "Turns employee data into a clear view for headcount, turnover, hiring activity and area distribution.",
            bullets: [
              "Main technologies: Tableau, Python, CSV and visual documentation.",
              "Shows data cleaning, structuring and communication for business audiences.",
            ],
            tags: ["Tableau", "Python", "CSV", "Draw.io", "Storytelling"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DashboardTableau" }],
            image: "assets/projects/tableau-dashboard-summary.png",
            fallback: "TB",
          },
          {
            name: "Bearing statistics case",
            kind: "standard",
            meta: "Python - Applied statistics",
            title: "Descriptive and inferential statistics case on spherical bearings",
            summary:
              "A reproducible Python case to work on distributions, dispersion and confidence intervals over a 54-item sample.",
            bullets: [
              "Main technologies: Python, NumPy, Matplotlib, SciPy and inferential statistics.",
              "Reinforces quantitative analysis, assumption testing and documentation.",
            ],
            tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-square", "Statistics"],
            links: [{ label: "View case", href: "cases/cojinetes-estadistica.html" }],
            image: "assets/projects/cojinetes-statistics-summary.png",
            fallback: "ST",
          },
          {
            name: "AI and data analysis",
            kind: "standard",
            meta: "Data analysis - Machine learning",
            title: "Practical cases for data preparation and model evaluation",
            summary:
              "A collection of exercises with tabular data, audio, image and video to strengthen preparation, exploration and result reading.",
            bullets: [
              "Main technologies: Python, Pandas, NumPy, scikit-learn and TensorFlow depending on the case.",
              "Complements the profile with datasets, exploration and basic model evaluation.",
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
            name: "Habits + Finance App",
            kind: "standard",
            meta: "Mobile product - React Native",
            title: "Personal app for habits, finance tracking and gamified progress",
            summary:
              "A product-oriented app for habits, personal finance tracking and gamified progress.",
            bullets: [
              "Built with Expo, React Native, TypeScript, Zustand and local persistence.",
              "Shows product thinking, user flows and functional software.",
            ],
            tags: ["Expo", "React Native", "TypeScript", "Zustand", "Jest", "Product thinking"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/APP_Finanzas_Habitos" }],
            image: "assets/projects/finanzas-home.png",
            fallback: "FH",
          },
          {
            name: "AR Monturas",
            kind: "compact",
            meta: "Complementary tech - Commercial experience",
            title: "Augmented reality catalog as an extra layer for customer experience",
            summary:
              "A prototype created to support the commercial side of the optical business with a more interactive mobile experience.",
            bullets: [
              "Main technologies: Unity, C#, Vuforia, AR Foundation and Android.",
              "Works as an innovation-focused complement inside a real business case.",
            ],
            tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
            video: "assets/projects/ar-monturas-demo.mp4",
            fallback: "AR",
          },
        ],
      },
      credentials: {
        eyebrow: "Education and strengths",
        title: "Training that supports my next step in data.",
        intro:
          "Academic background and certifications that support my profile for internships in data and analytics.",
        orbitTitle: "Stack aligned with data and integration",
        orbitIntro:
          "A visual summary of the tools that currently support my main profile and its complementary technical side.",
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
                  "Tenth-semester student focused on data engineering, data analytics and information architecture.",
              },
            ],
            badges: ["Technologist", "Systems Engineer", "Data", "Integration"],
          },
          {
            icon: "fa-solid fa-chart-line",
            topline: "Credentials and data-oriented direction",
            title: "Data",
            body: "Foundation for analytics and data engineering roles, with recognized certifications and an active transition toward PySpark, Lakehouse and Microsoft Fabric.",
            badges: ["Google Data Analytics", "Advanced Data Analytics", "Python and SQL", "EF SET C1"],
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#ffd662" },
              { label: "SQL", abbr: "SQL", color: "#7bd3ff" },
              { label: "PySpark", abbr: "PyS", color: "#ff9f6b" },
              { label: "Fabric", abbr: "Fab", color: "#82b9ff" },
              { label: "Lakehouse", abbr: "LH", color: "#f4c542" },
              { label: "Medallion", abbr: "Med", color: "#ffb866" },
              { label: "Power BI", abbr: "BI", color: "#77e4c8" },
              { label: "ETL", abbr: "ETL", color: "#ff935f" },
            ],
            link: { label: "View credentials", href: "https://www.linkedin.com/in/juansrubiano" },
          },
          {
            icon: "fa-solid fa-code-branch",
            topline: "Complementary technical support",
            title: "Software",
            body: "Complements my data profile with interfaces, APIs, automation and supporting solutions.",
            badges: ["PCAP Python", "Web development", "Git and Docker", "Mobile apps"],
            tools: [
              { label: "TypeScript", abbr: "TS", color: "#69b5ff" },
              { label: "React", icon: "fa-brands fa-react", color: "#7ee0ff" },
              { label: "Node.js", icon: "fa-brands fa-node-js", color: "#88df8a" },
              { label: "NestJS", abbr: "N", color: "#ff7b90" },
              { label: "Git", icon: "fa-brands fa-git-alt", color: "#ff8a64" },
              { label: "GitHub", icon: "fa-brands fa-github", color: "#d8e0f2" },
              { label: "Docker", icon: "fa-brands fa-docker", color: "#78c7ff" },
            ],
            link: { label: "See more on LinkedIn", href: "https://www.linkedin.com/in/juansrubiano" },
          },
        ],
      },
      experience: {
        eyebrow: "Applied experience",
        title: "From business operations to technical information organization.",
        intro:
          "My experience in the optical sector gave me direct exposure to processes, traceability and information organization in a real business context.",
        items: [
          {
            topline: "Optical sector - 2 years in operations and process improvement",
            title: "Operations management and digital solution design for an optical business",
            body: "I supported the commercial and administrative management of an optical business, working with inventory, sales, clinical records, appointments, customer service and indicators. From that context, I designed solutions to centralize information and improve control.",
            highlights: [
              "Designed a system to integrate inventory, sales, clinical records, appointment scheduling, branches, role-based users and operational reports.",
              "Analyzed sales data and business indicators to support clearer decisions around operations, follow-up and growth.",
              "Worked on digital marketing and commercial visibility to improve reach, communication and customer acquisition.",
              "Proposed an augmented reality catalog with face tracking as an extension of a real commercial need inside the optical business.",
            ],
            closing: "I now want to take that foundation into a data-focused environment.",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk about an internship, project or interview.",
        body:
          "I am open to internships, projects, technical collaboration and hiring processes in data and analytics.",
        reveal: "Show email",
        copy: "Copy email",
        copied: "Email copied",
        revealed: "",
        email: "",
        hint: "Click to reveal the email without exposing it directly to bots or spam.",
        hintCopy: "Once revealed, click again to copy it.",
        hintCopied: "Email copied to clipboard.",
      },
      footer: {
        backToTop: "Back to top",
        copy: "(c) {year} Juan Sebastián Rubiano. Portfolio focused on data engineering, analytics and complementary software.",
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
})();
