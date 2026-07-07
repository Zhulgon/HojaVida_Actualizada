from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import ListFlowable, ListItem, Paragraph, SimpleDocTemplate


BASE_DIR = Path(__file__).resolve().parents[1]
OUTPUT_PATH = BASE_DIR / "assets" / "Juan-Sebastian-Rubiano-CV.pdf"


def build_styles():
    styles = getSampleStyleSheet()

    styles.add(
        ParagraphStyle(
            name="HeroName",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=19,
            leading=23,
            textColor=colors.HexColor("#13213a"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="HeroRole",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.8,
            leading=13.2,
            textColor=colors.HexColor("#147a73"),
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="HeroMeta",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12,
            textColor=colors.HexColor("#44516a"),
            spaceAfter=12,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=14,
            textColor=colors.HexColor("#13213a"),
            spaceBefore=5,
            spaceAfter=6,
            borderPadding=0,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.4,
            leading=13.2,
            textColor=colors.HexColor("#1f2b3d"),
            alignment=TA_LEFT,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodyTight",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.6,
            textColor=colors.HexColor("#1f2b3d"),
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ItemTitle",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12.5,
            textColor=colors.HexColor("#13213a"),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Muted",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11.6,
            textColor=colors.HexColor("#57657e"),
            spaceAfter=2,
        )
    )
    return styles


def section(title, styles):
    return Paragraph(title, styles["Section"])


def bullet_list(items, styles, left_indent=14):
    return ListFlowable(
        [
            ListItem(Paragraph(item, styles["BodyTight"]), leftIndent=left_indent)
            for item in items
        ],
        bulletType="bullet",
        start="circle",
        leftIndent=left_indent,
        bulletFontName="Helvetica",
        bulletFontSize=8,
        bulletColor=colors.HexColor("#147a73"),
        spaceBefore=0,
        spaceAfter=6,
    )


def project_block(name, meta, summary, bullets, styles):
    blocks = [
        Paragraph(name, styles["ItemTitle"]),
        Paragraph(meta, styles["Muted"]),
        Paragraph(summary, styles["BodyTight"]),
        bullet_list(bullets, styles),
    ]
    return blocks


def build_story():
    styles = build_styles()
    story = []

    story.append(Paragraph("Juan Sebastián Rubiano", styles["HeroName"]))
    story.append(
        Paragraph(
            "Estudiante de Ingeniería de Sistemas | Tecnólogo en Desarrollo de Sistemas Informáticos | Perfil en formación para Ingeniería de Datos",
            styles["HeroRole"],
        )
    )
    story.append(
        Paragraph(
            "Bucaramanga, Colombia | jsebastian000124@gmail.com | LinkedIn: linkedin.com/in/juansrubiano | GitHub: github.com/Zhulgon | Portafolio: github.com/Zhulgon/HojaVida_Actualizada",
            styles["HeroMeta"],
        )
    )

    story.append(section("Perfil profesional", styles))
    story.append(
        Paragraph(
            "Estudiante de décimo semestre de Ingeniería de Sistemas con base aplicada en desarrollo de software y orientación actual hacia ingeniería de datos, analítica e inteligencia de negocio. He trabajado con información operativa real, dashboards, estadística aplicada y soluciones digitales construidas para resolver necesidades concretas. Actualmente estoy fortaleciendo Python, SQL, PySpark, fundamentos de Lakehouse, Microsoft Fabric y arquitectura Medallion para aportar en prácticas empresariales donde los datos deban organizarse, transformarse y convertirse en información útil.",
            styles["Body"],
        )
    )

    story.append(section("Competencias clave", styles))
    story.append(
        bullet_list(
            [
                "Ingeniería de datos en formación: Python, SQL, fundamentos de PySpark, procesos ETL/ELT, lógica de Data Lake y arquitectura Medallion.",
                "Analítica y visualización: Excel, Tableau, Power BI, análisis exploratorio, estadística descriptiva e interpretación de resultados.",
                "Bases de datos y modelado: PostgreSQL, consultas SQL, modelado relacional, nociones de bases no relacionales y organización de información confiable.",
                "Software complementario: TypeScript, React, Node.js, NestJS, Git, GitHub y Docker como soporte para construir soluciones alrededor de datos y procesos.",
                "Comunicación y empleabilidad: inglés C1 EF SET, documentación técnica, aprendizaje autónomo y lectura del contexto de negocio.",
            ],
            styles,
        )
    )

    story.append(section("Experiencia aplicada", styles))
    story.append(Paragraph("Gestión operativa y digitalización en óptica | 2 años", styles["ItemTitle"]))
    story.append(
        Paragraph(
            "Participé en la gestión comercial y administrativa de una óptica, trabajando con inventario, ventas, historias clínicas, citas, servicio al cliente y seguimiento de indicadores. Desde esa experiencia identifiqué problemas de información dispersa y empecé a traducirlos en soluciones tecnológicas y analíticas.",
            styles["BodyTight"],
        )
    )
    story.append(
        bullet_list(
            [
                "Diseñé un sistema para integrar inventarios, ventas, historias clínicas, agenda de citas, sedes, usuarios por roles y reportes operativos.",
                "Analicé ventas e indicadores para apoyar decisiones con mayor trazabilidad y contexto.",
                "Trabajé acciones de marketing digital y presencia comercial para mejorar alcance y captación.",
                "Propuse un catálogo en realidad aumentada como complemento comercial para la experiencia del cliente.",
            ],
            styles,
        )
    )
    story.append(
        Paragraph(
            "Esta etapa me dejó criterio operativo, lectura de procesos reales y una comprensión práctica del valor que tiene la información bien organizada.",
            styles["Body"],
        )
    )

    story.append(section("Proyectos destacados", styles))
    for block in project_block(
        "Data Lake Practice",
        "Proyecto personal en desarrollo | Python, SQL, PySpark, Lakehouse, Medallion",
        "Laboratorio personal orientado a practicar organización por capas, transformación y consumo analítico siguiendo una lógica Bronze, Silver y Gold. Es la evidencia más directa de mi transición hacia ingeniería de datos y Microsoft Fabric.",
        [
            "Enfoque en estructurar flujos de trabajo más cercanos a un entorno de lakehouse.",
            "Refuerza fundamentos de integración, organización y consumo de datos.",
            "Demuestra aprendizaje activo y una dirección profesional clara hacia datos.",
        ],
        styles,
    ):
        story.append(block)

    for block in project_block(
        "Óptica Suite",
        "Software empresarial | NestJS, Prisma, PostgreSQL, React, TypeScript, Docker",
        "Plataforma diseñada para centralizar una operación que antes se llevaba entre Excel, Word, PDF y notas sueltas. Integra inventario, ventas, historias clínicas, citas, usuarios por roles, sedes y reportes.",
        [
            "Conecta problema de negocio, módulos de software y flujo de información confiable.",
            "Muestra capacidad para traducir una necesidad real en trazabilidad y estructura de datos.",
            "Sirve como base para posteriores análisis y visualizaciones del negocio.",
        ],
        styles,
    ):
        story.append(block)

    for block in project_block(
        "Dashboard de recursos humanos en Tableau",
        "Analítica de datos | Tableau, Python, CSV",
        "Dashboard orientado a convertir datos de empleados en una lectura clara sobre headcount, rotación, contrataciones y distribución por áreas para facilitar análisis y toma de decisiones.",
        [
            "Refuerza limpieza, organización y comunicación de información para negocio.",
            "Demuestra criterio visual y estructuración de indicadores.",
        ],
        styles,
    ):
        story.append(block)

    for block in project_block(
        "Caso de estadística aplicada sobre cojinetes",
        "Python, NumPy, Matplotlib, SciPy | Estadística descriptiva e inferencial",
        "Caso académico llevado a un flujo reproducible para calcular distribuciones, medidas de tendencia central, dispersión e intervalos de confianza sobre una muestra de 54 elementos.",
        [
            "Demuestra base cuantitativa, lectura estadística y capacidad de documentar el paso a paso.",
            "Refuerza habilidades útiles para analítica, validación e interpretación de resultados.",
        ],
        styles,
    ):
        story.append(block)

    story.append(section("Formación y certificaciones", styles))
    story.append(
        bullet_list(
            [
                "Tecnólogo en Desarrollo de Sistemas Informáticos - Universidad Tecnológica de Santander.",
                "Estudiante de décimo semestre de Ingeniería de Sistemas - Universidad Tecnológica de Santander.",
                "Google Data Analytics.",
                "Google Advanced Data Analytics.",
                "EF SET English Certificate C1.",
                "PCAP: Programming Essentials in Python.",
                "Certificaciones IBM en IA, tecnologías emergentes, mentalidad digital y ciberseguridad.",
            ],
            styles,
        )
    )

    story.append(section("Tecnologías y herramientas", styles))
    story.append(
        Paragraph(
            "Python · SQL · PySpark (fundamentos) · Microsoft Fabric (en fortalecimiento) · Lakehouse · Arquitectura Medallion · Excel · Tableau · Power BI · PostgreSQL · NoSQL · Git · GitHub · Docker · TypeScript · React · Node.js",
            styles["Body"],
        )
    )

    story.append(section("Objetivo profesional", styles))
    story.append(
        Paragraph(
            "Busco una práctica empresarial o primera oportunidad donde pueda aportar en ingeniería de datos, analítica o automatización, mientras sigo consolidando experiencia en Python, SQL, PySpark, Microsoft Fabric y arquitectura de datos moderna.",
            styles["Body"],
        )
    )

    return story


def main():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        rightMargin=1.7 * cm,
        leftMargin=1.7 * cm,
        topMargin=1.5 * cm,
        bottomMargin=1.4 * cm,
        title="Juan Sebastián Rubiano - CV",
        author="Juan Sebastián Rubiano",
    )

    doc.build(build_story())
    print(f"PDF generado en: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
