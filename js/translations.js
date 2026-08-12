(function attachPortfolioTranslations() {
  window.PortfolioTranslations = {
    es: {
      metaTitle: "Juan Sebastián Rubiano | Portafolio",
      metaDescription:
        "Portafolio de Juan Sebastián Rubiano, estudiante de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos. Proyectos y experiencia aplicada en desarrollo de software, análisis de datos, ingeniería de datos, visualización, automatización y soluciones digitales.",
      nav: {
        menu: "Menú",
        skills: "Conocimientos",
        projects: "Proyectos",
        credentials: "Formación",
        experience: "Experiencia",
        contact: "Contacto",
      },
      hero: {
        eyebrow: "Juan Sebastián Rubiano · Ingeniería de Sistemas · Bucaramanga, Colombia",
        title:
          'Construyo <span class="accent">software, análisis de datos</span> y soluciones digitales con enfoque práctico.',
        summary1:
          "Soy estudiante de décimo semestre de Ingeniería de Sistemas y tecnólogo en Desarrollo de Sistemas Informáticos. He construido una base aplicada en software, bases de datos, visualización y organización de información a partir de proyectos y problemas reales.",
        summary2:
          "Busco prácticas empresariales y primeras oportunidades donde pueda aportar en desarrollo de software, análisis de datos o roles de apoyo en ingeniería de datos, combinando aprendizaje rápido con experiencia aplicada en productos, reportes y trazabilidad.",
        signalDataLabel: "Datos",
        signalDataValue: "Python · SQL · Tableau · Power BI",
        signalSoftwareLabel: "Software",
        signalSoftwareValue: "TypeScript · React · NestJS · APIs",
        signalLanguageLabel: "Idioma",
        signalLanguageValue: "Inglés C1 · EF SET",
        signalsAria: "Indicadores clave del perfil",
        availabilityTitle: "Disponible para prácticas y primeras oportunidades",
        availabilityBody:
          "Abierto a prácticas empresariales, roles trainee y posiciones junior en desarrollo de software, análisis de datos y automatización.",
      },
      skills: {
        eyebrow: "Conocimientos",
        title: "Base técnica para aportar en datos, software y automatización.",
        intro:
          "Organicé mis herramientas por bloques para mostrar con claridad dónde puedo sumar valor hoy y qué línea sigo fortaleciendo.",
        items: [
          {
            title: "Datos y analítica",
            summary: "Exploro, limpio, interpreto y visualizo información para convertir datos en lecturas útiles para negocio.",
            accent: "#8ff0b3",
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#8ec5ff" },
              { label: "SQL", abbr: "SQL", color: "#86d6ff" },
              { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
              { label: "Tableau", abbr: "Tb", color: "#ffb36b" },
              { label: "Power BI", abbr: "BI", color: "#f4c542" },
              { label: "Estadística", abbr: "Est", color: "#ff9d75" },
            ],
          },
          {
            title: "Ingeniería de datos",
            summary: "Estoy consolidando fundamentos para estructurar, transformar y preparar datos con enfoque moderno de plataforma.",
            accent: "#7ee0ff",
            tools: [
              { label: "PySpark", abbr: "PyS", color: "#ffb15a" },
              { label: "ETL / ELT", abbr: "ETL", color: "#f0a35a" },
              { label: "Data Lake", abbr: "DL", color: "#7ed9c1" },
              { label: "Lakehouse", abbr: "LH", color: "#82b9ff" },
              { label: "Fabric", abbr: "Fab", color: "#b49cff" },
              { label: "Medallion", abbr: "Med", color: "#8fe6d4" },
            ],
          },
          {
            title: "Desarrollo de software",
            summary: "Construyo interfaces, APIs y soluciones funcionales que conectan experiencia de usuario, lógica y datos.",
            accent: "#c9b4ff",
            tools: [
              { label: "TypeScript", abbr: "TS", color: "#69b5ff" },
              { label: "React", icon: "fa-brands fa-react", color: "#7ee0ff" },
              { label: "Node.js", icon: "fa-brands fa-node-js", color: "#88df8a" },
              { label: "NestJS", abbr: "N", color: "#ff7b90" },
              { label: "Git", icon: "fa-brands fa-git-alt", color: "#ff8a64" },
              { label: "Docker", icon: "fa-brands fa-docker", color: "#78c7ff" },
            ],
          },
          {
            title: "Bases de datos e integración",
            summary: "Trabajo consultas, modelado, persistencia e intercambio de información para soluciones más consistentes.",
            accent: "#ffb07d",
            tools: [
              { label: "SQL relacional", abbr: "SQL", color: "#82b9ff" },
              { label: "NoSQL", abbr: "No", color: "#9bd8ff" },
              { label: "Modelado", abbr: "Md", color: "#b1a4ff" },
              { label: "APIs", abbr: "API", color: "#f0a35a" },
              { label: "Calidad", abbr: "QA", color: "#8fe6d4" },
              { label: "Integración", abbr: "INT", color: "#ffc98a" },
            ],
          },
        ],
      },
      projects: {
        eyebrow: "Proyectos seleccionados",
        title: "Trabajo práctico que conecta software, datos y necesidades reales de negocio.",
        intro:
          "Estos proyectos no solo muestran tecnologías; muestran cómo identifico problemas, organizo información y construyo soluciones utilizables.",
        prevLabel: "Proyecto anterior",
        nextLabel: "Proyecto siguiente",
        carouselLabel: "Carrusel de proyectos",
        counter: "Proyecto {current} de {total}",
        items: [
          {
            name: "Óptica Suite",
            kind: "featured",
            meta: "Software empresarial · Operación real",
            title: "Sistema para integrar inventario, ventas, historias clínicas y reportes en una óptica",
            summary:
              "Nació para resolver una operación dispersa entre Excel, Word, PDF y notas sueltas. Lo diseñé como una sola plataforma para centralizar procesos, trazabilidad y control.",
            bullets: [
              "Tecnologías principales: NestJS, Prisma, PostgreSQL, React, Vite, TypeScript y Docker.",
              "Demuestra diseño de software aplicado a un negocio real, con estructura operativa y uso confiable de datos.",
            ],
            tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
            video: "assets/projects/VideoOpti-suite.mp4",
            fallback: "OS",
          },
          {
            name: "HR Dashboard en Tableau",
            kind: "standard",
            meta: "Datos y visualización · Tableau",
            title: "Dashboard de recursos humanos para convertir datos operativos en lectura ejecutiva",
            summary:
              "Transforma información de empleados en una vista clara para headcount, rotación, contrataciones y distribución por áreas, pensada para toma de decisiones.",
            bullets: [
              "Tecnologías principales: Tableau, Python, CSV y documentación visual.",
              "Muestra limpieza, estructuración, visualización y comunicación de datos para contextos empresariales.",
            ],
            tags: ["Tableau", "Python", "CSV", "Storytelling", "Dashboards"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DashboardTableau" }],
            image: "assets/projects/tableau-dashboard-summary.png",
            fallback: "TB",
          },
          {
            name: "Data Lake Practice",
            kind: "standard",
            meta: "Ingeniería de datos · En evolución",
            title: "Laboratorio personal para practicar modelado por capas y consumo analítico",
            summary:
              "Proyecto en desarrollo para reforzar fundamentos de arquitectura lakehouse, transformación de datos y organización por capas con criterio de ingeniería.",
            bullets: [
              "Práctica con Python, SQL, PySpark, Data Lake, Lakehouse y arquitectura Medallion.",
              "Representa mi transición activa hacia escenarios de data engineering y plataformas modernas de datos.",
            ],
            tags: ["Python", "SQL", "PySpark", "Data Lake", "Lakehouse", "Medallion"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DataLakePractice" }],
            image: "assets/projects/DataLake.png",
            fallback: "DL",
          },
          {
            name: "Estadística de cojinetes",
            kind: "standard",
            meta: "Python · Estadística aplicada",
            title: "Caso de estadística descriptiva e inferencial sobre cojinetes esféricos",
            summary:
              "Caso reproducible para trabajar distribuciones, dispersión, contraste de supuestos e intervalos de confianza sobre una muestra real.",
            bullets: [
              "Tecnologías principales: Python, NumPy, Matplotlib, SciPy y estadística inferencial.",
              "Refuerza pensamiento cuantitativo, lectura de resultados y documentación paso a paso.",
            ],
            tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-cuadrado", "Estadística"],
            links: [{ label: "Ver caso", href: "cases/cojinetes-estadistica.html" }],
            image: "assets/projects/cojinetes-statistics-summary.png",
            fallback: "ST",
          },
          {
            name: "IA y análisis de datos",
            kind: "standard",
            meta: "Machine learning · Casos guiados",
            title: "Ejercicios prácticos para preparación de datos, clasificación y lectura de métricas",
            summary:
              "Colección de casos con datos tabulares, audio e imagen para reforzar preparación de datasets, evaluación de modelos y explicación de resultados.",
            bullets: [
              "Tecnologías principales: Python, Pandas, NumPy, scikit-learn y TensorFlow según el caso.",
              "Complementa el perfil con criterio experimental, documentación y lectura técnica de modelos.",
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
            name: "App Finanzas + Hábitos",
            kind: "standard",
            meta: "Producto digital · React Native",
            title: "Aplicación para hábitos, finanzas personales y seguimiento gamificado",
            summary:
              "Aplicación móvil orientada a producto que combina experiencia de usuario, persistencia local y seguimiento de progreso en hábitos y finanzas.",
            bullets: [
              "Tecnologías principales: Expo, React Native, TypeScript, Zustand y persistencia local.",
              "Muestra diseño de flujos, estructura de producto y construcción de software funcional.",
            ],
            tags: ["Expo", "React Native", "TypeScript", "Zustand", "Jest", "Producto"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/APP_Finanzas_Habitos" }],
            image: "assets/projects/finanzas-home.png",
            fallback: "FH",
          },
          {
            name: "AR Monturas",
            kind: "compact",
            meta: "Innovación aplicada · Complemento comercial",
            title: "Catálogo en realidad aumentada como extensión de una necesidad detectada en la óptica",
            summary:
              "Prototipo creado para apoyar la experiencia comercial del negocio con una visualización más interactiva de monturas desde el móvil.",
            bullets: [
              "Tecnologías principales: Unity, C#, Vuforia, AR Foundation y Android.",
              "Funciona como plus de innovación dentro de un caso real de mejora de servicio.",
            ],
            tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
            video: "assets/projects/ar-monturas-demo.mp4",
            fallback: "AR",
          },
        ],
      },
      credentials: {
        eyebrow: "Formación y proyección",
        title: "Base académica, certificaciones y tecnologías que respaldan mi siguiente paso.",
        intro:
          "Una combinación de formación formal, certificaciones y herramientas que me permite postularme a prácticas en software, datos y analítica con argumentos concretos.",
        orbitTitle: "Tecnologías que hoy sostienen mis dos líneas principales",
        orbitIntro:
          "Datos y analítica por un lado; desarrollo de software por el otro. Ambas líneas se conectan en proyectos aplicados.",
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
                  "Estudiante de décimo semestre con interés en desarrollo de software, análisis de datos e ingeniería de datos.",
              },
            ],
            badges: ["Ingeniería de Sistemas", "Tecnólogo", "Software", "Datos"],
          },
          {
            icon: "fa-solid fa-chart-line",
            topline: "Certificaciones y foco analítico",
            title: "Datos",
            body: "Base para prácticas en analítica e ingeniería de datos, con certificaciones reconocidas y trabajo continuo en Python, SQL, visualización y preparación de información.",
            badges: ["Google Data Analytics", "Advanced Data Analytics", "Python y SQL", "EF SET C1"],
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#ffd662" },
              { label: "SQL", abbr: "SQL", color: "#7bd3ff" },
              { label: "PySpark", abbr: "PyS", color: "#ff9f6b" },
              { label: "Excel", icon: "fa-solid fa-file-excel", color: "#77e4c8" },
              { label: "Tableau", abbr: "Tb", color: "#ffb866" },
              { label: "Power BI", abbr: "BI", color: "#f4c542" },
              { label: "Fabric", abbr: "Fab", color: "#82b9ff" },
              { label: "Lakehouse", abbr: "LH", color: "#8fe6d4" },
            ],
            link: { label: "Ver credenciales", href: "https://www.linkedin.com/in/juansrubiano" },
          },
          {
            icon: "fa-solid fa-code-branch",
            topline: "Base técnica complementaria",
            title: "Software",
            body: "Complementa mi perfil con interfaces, APIs, lógica de negocio, herramientas de colaboración y construcción de productos funcionales.",
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
        title: "Experiencia real que me llevó de la operación al software y a los datos.",
        intro:
          "Aprendí primero viendo problemas de negocio de cerca. Esa experiencia me dio contexto para diseñar soluciones más útiles, trazables y conectadas con la realidad.",
        items: [
          {
            topline: "Óptica · 2 años en operación, mejora y digitalización",
            title: "Gestión del negocio, análisis operativo y diseño de soluciones para una óptica",
            body: "Participé en la gestión comercial y administrativa de una óptica trabajando con inventario, ventas, historias clínicas, agenda, atención al cliente e indicadores. Desde esa operación empecé a diseñar software, reportes y mejoras para centralizar información y tomar decisiones con más contexto.",
            highlights: [
              "Diseñé un sistema para integrar inventarios, ventas, historias clínicas, agenda de citas, sedes, usuarios por roles y reportes operativos.",
              "Analicé ventas e indicadores para entender comportamiento comercial, seguimiento y desempeño del negocio.",
              "Trabajé marketing digital y presencia comercial para mejorar alcance, comunicación y captación.",
              "Desarrollé un catálogo en realidad aumentada como respuesta a una necesidad comercial detectada en la óptica.",
            ],
            closing:
              "Esa experiencia me dio criterio operativo, contacto con usuarios y una base sólida para aportar desde prácticas empresariales.",
          },
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "Conversemos sobre una práctica, entrevista o proyecto.",
        body:
          "Estoy abierto a prácticas empresariales, procesos de selección y colaboraciones donde pueda aportar desde software, datos y aprendizaje continuo.",
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
        copy: "(c) {year} Juan Sebastián Rubiano. Portafolio orientado a prácticas en software, datos y analítica aplicada.",
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
        "Portfolio of Juan Sebastián Rubiano, Systems Engineering student and Software Development Technologist. Projects and applied experience across software development, data analytics, data engineering, visualization, automation and digital solutions.",
      nav: {
        menu: "Menu",
        skills: "Skills",
        projects: "Projects",
        credentials: "Education",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        eyebrow: "Juan Sebastián Rubiano · Systems Engineering · Bucaramanga, Colombia",
        title:
          'I build <span class="accent">software, data analysis</span> and digital solutions with a practical mindset.',
        summary1:
          "I am a tenth-semester Systems Engineering student and Software Development Technologist. I have built an applied foundation in software, databases, visualization and information organization through projects and real operational problems.",
        summary2:
          "I am looking for internships and early-career opportunities where I can contribute in software development, data analysis or data engineering support roles, combining fast learning with practical experience in products, reporting and traceability.",
        signalDataLabel: "Data",
        signalDataValue: "Python · SQL · Tableau · Power BI",
        signalSoftwareLabel: "Software",
        signalSoftwareValue: "TypeScript · React · NestJS · APIs",
        signalLanguageLabel: "Language",
        signalLanguageValue: "C1 English · EF SET",
        signalsAria: "Key profile signals",
        availabilityTitle: "Open to internships and early-career opportunities",
        availabilityBody:
          "Open to internships, trainee roles and junior positions in software development, data analytics and automation.",
      },
      skills: {
        eyebrow: "Skills",
        title: "Technical foundation to contribute in data, software and automation.",
        intro:
          "I grouped my tools into clear blocks to show where I can contribute today and which direction I am actively strengthening.",
        items: [
          {
            title: "Data and analytics",
            summary: "I explore, clean, interpret and visualize information to turn data into useful business reading.",
            accent: "#8ff0b3",
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#8ec5ff" },
              { label: "SQL", abbr: "SQL", color: "#86d6ff" },
              { label: "Excel", icon: "fa-solid fa-file-excel", color: "#67dc92" },
              { label: "Tableau", abbr: "Tb", color: "#ffb36b" },
              { label: "Power BI", abbr: "BI", color: "#f4c542" },
              { label: "Statistics", abbr: "Stat", color: "#ff9d75" },
            ],
          },
          {
            title: "Data engineering",
            summary: "I am consolidating the foundations to structure, transform and prepare data with a modern platform mindset.",
            accent: "#7ee0ff",
            tools: [
              { label: "PySpark", abbr: "PyS", color: "#ffb15a" },
              { label: "ETL / ELT", abbr: "ETL", color: "#f0a35a" },
              { label: "Data Lake", abbr: "DL", color: "#7ed9c1" },
              { label: "Lakehouse", abbr: "LH", color: "#82b9ff" },
              { label: "Fabric", abbr: "Fab", color: "#b49cff" },
              { label: "Medallion", abbr: "Med", color: "#8fe6d4" },
            ],
          },
          {
            title: "Software development",
            summary: "I build interfaces, APIs and functional solutions that connect user experience, logic and data.",
            accent: "#c9b4ff",
            tools: [
              { label: "TypeScript", abbr: "TS", color: "#69b5ff" },
              { label: "React", icon: "fa-brands fa-react", color: "#7ee0ff" },
              { label: "Node.js", icon: "fa-brands fa-node-js", color: "#88df8a" },
              { label: "NestJS", abbr: "N", color: "#ff7b90" },
              { label: "Git", icon: "fa-brands fa-git-alt", color: "#ff8a64" },
              { label: "Docker", icon: "fa-brands fa-docker", color: "#78c7ff" },
            ],
          },
          {
            title: "Databases and integration",
            summary: "I work with queries, modeling, persistence and information exchange for more consistent solutions.",
            accent: "#ffb07d",
            tools: [
              { label: "Relational SQL", abbr: "SQL", color: "#82b9ff" },
              { label: "NoSQL", abbr: "No", color: "#9bd8ff" },
              { label: "Modeling", abbr: "Mod", color: "#b1a4ff" },
              { label: "APIs", abbr: "API", color: "#f0a35a" },
              { label: "Quality", abbr: "QA", color: "#8fe6d4" },
              { label: "Integration", abbr: "INT", color: "#ffc98a" },
            ],
          },
        ],
      },
      projects: {
        eyebrow: "Selected projects",
        title: "Hands-on work that connects software, data and real business needs.",
        intro:
          "These projects do not just show technologies; they show how I identify problems, organize information and build usable solutions.",
        prevLabel: "Previous project",
        nextLabel: "Next project",
        carouselLabel: "Projects carousel",
        counter: "Project {current} of {total}",
        items: [
          {
            name: "Óptica Suite",
            kind: "featured",
            meta: "Business software · Real operations",
            title: "System to integrate inventory, sales, clinical records and reporting in an optical business",
            summary:
              "It was created to solve an operation scattered across Excel, Word, PDFs and loose notes. I designed it as a single platform to centralize processes, traceability and control.",
            bullets: [
              "Main technologies: NestJS, Prisma, PostgreSQL, React, Vite, TypeScript and Docker.",
              "Shows software design applied to a real business, with operational structure and reliable use of data.",
            ],
            tags: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "TypeScript", "Docker"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/optica-suite" }],
            video: "assets/projects/VideoOpti-suite.mp4",
            fallback: "OS",
          },
          {
            name: "HR Dashboard in Tableau",
            kind: "standard",
            meta: "Data and visualization · Tableau",
            title: "Human resources dashboard that turns operational data into executive reading",
            summary:
              "It transforms employee information into a clear view for headcount, turnover, hiring activity and area distribution, designed for decision-making.",
            bullets: [
              "Main technologies: Tableau, Python, CSV and visual documentation.",
              "Shows cleaning, structuring, visualization and communication of data for business settings.",
            ],
            tags: ["Tableau", "Python", "CSV", "Storytelling", "Dashboards"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DashboardTableau" }],
            image: "assets/projects/tableau-dashboard-summary.png",
            fallback: "TB",
          },
          {
            name: "Data Lake Practice",
            kind: "standard",
            meta: "Data engineering · In progress",
            title: "Personal lab to practice layered modeling and analytical consumption",
            summary:
              "An evolving project to reinforce lakehouse architecture fundamentals, data transformation and layered organization with an engineering mindset.",
            bullets: [
              "Practice with Python, SQL, PySpark, Data Lake, Lakehouse and Medallion architecture.",
              "Represents my active transition toward data engineering scenarios and modern data platforms.",
            ],
            tags: ["Python", "SQL", "PySpark", "Data Lake", "Lakehouse", "Medallion"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/DataLakePractice" }],
            image: "assets/projects/DataLake.png",
            fallback: "DL",
          },
          {
            name: "Bearing statistics case",
            kind: "standard",
            meta: "Python · Applied statistics",
            title: "Descriptive and inferential statistics case on spherical bearings",
            summary:
              "A reproducible case to work on distributions, dispersion, assumption testing and confidence intervals over a real sample.",
            bullets: [
              "Main technologies: Python, NumPy, Matplotlib, SciPy and inferential statistics.",
              "Reinforces quantitative thinking, result reading and step-by-step documentation.",
            ],
            tags: ["Python", "NumPy", "Matplotlib", "SciPy", "Chi-square", "Statistics"],
            links: [{ label: "View case", href: "cases/cojinetes-estadistica.html" }],
            image: "assets/projects/cojinetes-statistics-summary.png",
            fallback: "ST",
          },
          {
            name: "AI and data analysis",
            kind: "standard",
            meta: "Machine learning · Guided cases",
            title: "Practical exercises for data preparation, classification and metric reading",
            summary:
              "A set of cases with tabular data, audio and image to reinforce dataset preparation, model evaluation and result explanation.",
            bullets: [
              "Main technologies: Python, Pandas, NumPy, scikit-learn and TensorFlow depending on the case.",
              "Complements the profile with experimentation, documentation and technical model reading.",
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
            meta: "Digital product · React Native",
            title: "App for habits, personal finance and gamified progress tracking",
            summary:
              "A mobile app with a product-oriented approach that combines user experience, local persistence and progress tracking for habits and finance.",
            bullets: [
              "Main technologies: Expo, React Native, TypeScript, Zustand and local persistence.",
              "Shows product flow design, software structure and functional implementation.",
            ],
            tags: ["Expo", "React Native", "TypeScript", "Zustand", "Jest", "Product"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/APP_Finanzas_Habitos" }],
            image: "assets/projects/finanzas-home.png",
            fallback: "FH",
          },
          {
            name: "AR Monturas",
            kind: "compact",
            meta: "Applied innovation · Commercial complement",
            title: "Augmented reality catalog as an extension of a real business need in the optical store",
            summary:
              "Prototype created to support the commercial experience of the business with a more interactive way to explore frames from a mobile device.",
            bullets: [
              "Main technologies: Unity, C#, Vuforia, AR Foundation and Android.",
              "Works as an innovation-focused complement inside a real service improvement case.",
            ],
            tags: ["Unity 6", "C#", "Vuforia", "AR Foundation", "ARCore", "Android"],
            links: [{ label: "GitHub", href: "https://github.com/Zhulgon/AR_Monturas" }],
            video: "assets/projects/ar-monturas-demo.mp4",
            fallback: "AR",
          },
        ],
      },
      credentials: {
        eyebrow: "Education and direction",
        title: "Academic background, certifications and technologies that support my next step.",
        intro:
          "A combination of formal education, certifications and tools that allows me to apply to internships in software, data and analytics with concrete evidence.",
        orbitTitle: "Technologies that currently support my two main tracks",
        orbitIntro:
          "Data and analytics on one side; software development on the other. Both come together in applied projects.",
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
                  "Tenth-semester student interested in software development, data analytics and data engineering.",
              },
            ],
            badges: ["Systems Engineering", "Technologist", "Software", "Data"],
          },
          {
            icon: "fa-solid fa-chart-line",
            topline: "Credentials and analytical focus",
            title: "Data",
            body: "Foundation for analytics and data engineering internships, supported by recognized credentials and continuous work in Python, SQL, visualization and information preparation.",
            badges: ["Google Data Analytics", "Advanced Data Analytics", "Python and SQL", "EF SET C1"],
            tools: [
              { label: "Python", icon: "fa-brands fa-python", color: "#ffd662" },
              { label: "SQL", abbr: "SQL", color: "#7bd3ff" },
              { label: "PySpark", abbr: "PyS", color: "#ff9f6b" },
              { label: "Excel", icon: "fa-solid fa-file-excel", color: "#77e4c8" },
              { label: "Tableau", abbr: "Tb", color: "#ffb866" },
              { label: "Power BI", abbr: "BI", color: "#f4c542" },
              { label: "Fabric", abbr: "Fab", color: "#82b9ff" },
              { label: "Lakehouse", abbr: "LH", color: "#8fe6d4" },
            ],
            link: { label: "View credentials", href: "https://www.linkedin.com/in/juansrubiano" },
          },
          {
            icon: "fa-solid fa-code-branch",
            topline: "Complementary technical base",
            title: "Software",
            body: "It complements my profile with interfaces, APIs, business logic, collaboration tooling and functional product building.",
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
        title: "Real experience that moved me from operations into software and data.",
        intro:
          "I first learned by seeing business problems up close. That experience gave me context to design more useful, traceable and reality-connected solutions.",
        items: [
          {
            topline: "Optical business · 2 years in operations, improvement and digitization",
            title: "Business management, operational analysis and solution design for an optical store",
            body: "I participated in the commercial and administrative management of an optical business, working with inventory, sales, clinical records, scheduling, customer service and indicators. From that operation, I started designing software, reports and improvements to centralize information and make decisions with more context.",
            highlights: [
              "Designed a system to integrate inventory, sales, clinical records, appointment scheduling, branches, role-based users and operational reports.",
              "Analyzed sales data and business indicators to understand commercial behavior, follow-up and business performance.",
              "Worked on digital marketing and commercial visibility to improve reach, communication and acquisition.",
              "Built an augmented reality catalog in response to a commercial need detected in the optical business.",
            ],
            closing:
              "That experience gave me operational judgment, direct user exposure and a solid base to contribute through internships.",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk about an internship, interview or project.",
        body:
          "I am open to internships, hiring processes and collaborations where I can contribute through software, data and continuous learning.",
        reveal: "Show email",
        copy: "Copy email",
        copied: "Email copied",
        revealed: "",
        email: "",
        hint: "Click to reveal the email and coordinate a professional conversation.",
        hintCopy: "Once the email is visible, click again to copy it.",
        hintCopied: "Email copied to clipboard.",
      },
      footer: {
        backToTop: "Back to top",
        copy: "(c) {year} Juan Sebastián Rubiano. Portfolio oriented to internships in software, data and applied analytics.",
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
