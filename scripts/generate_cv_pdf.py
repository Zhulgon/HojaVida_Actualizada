from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import HRFlowable, ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer


BASE_DIR = Path(__file__).resolve().parents[1]
OUTPUT_PATH = BASE_DIR / "assets" / "Juan-Sebastian-Rubiano-CV.pdf"

PORTFOLIO_URL = "https://zhulgon.github.io/"
LINKEDIN_URL = "https://www.linkedin.com/in/juansrubiano"
GITHUB_URL = "https://github.com/Zhulgon"
EMAIL = "jsebastian000124@gmail.com"

PALETTE = {
    "ink": colors.HexColor("#17233A"),
    "muted": colors.HexColor("#5C6880"),
    "line": colors.HexColor("#D6DEE9"),
    "accent": colors.HexColor("#0F766E"),
    "accent_alt": colors.HexColor("#2563EB"),
}


def build_styles():
    styles = getSampleStyleSheet()

    styles.add(
        ParagraphStyle(
            name="Name",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=22.2,
            leading=25.2,
            textColor=PALETTE["ink"],
            spaceAfter=4.2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Role",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.35,
            leading=14.1,
            textColor=PALETTE["accent"],
            spaceAfter=7.5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Summary",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.35,
            leading=13.25,
            textColor=PALETTE["ink"],
            spaceAfter=8.6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Contact",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=11.2,
            textColor=PALETTE["muted"],
            spaceAfter=8.8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11.45,
            leading=13.5,
            textColor=PALETTE["ink"],
            spaceBefore=3.8,
            spaceAfter=3.8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.9,
            leading=12.2,
            textColor=PALETTE["ink"],
            spaceAfter=3.1,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Label",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.85,
            leading=11.35,
            textColor=PALETTE["ink"],
            spaceAfter=1.5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Meta",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.25,
            leading=8.8,
            textColor=PALETTE["accent"],
            spaceAfter=1.25,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Project",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.3,
            leading=11.35,
            textColor=PALETTE["ink"],
            spaceAfter=1.15,
        )
    )

    return styles


def divider(title, styles):
    return [
        Paragraph(title, styles["Section"]),
        HRFlowable(
            width="100%",
            thickness=0.55,
            color=PALETTE["line"],
            spaceBefore=0,
            spaceAfter=3.7,
        ),
    ]


def bullet_list(items, styles, left_indent=9, space_after=2.5):
    return ListFlowable(
        [ListItem(Paragraph(item, styles["Body"]), leftIndent=left_indent) for item in items],
        bulletType="bullet",
        leftIndent=left_indent,
        bulletFontName="Helvetica",
        bulletFontSize=7.2,
        bulletColor=PALETTE["accent"],
        spaceBefore=0,
        spaceAfter=space_after,
    )


def build_contact_line(styles):
    text = (
        "Bucaramanga, Colombia &nbsp;&nbsp;|&nbsp;&nbsp; "
        f"<link href='mailto:{EMAIL}' color='{PALETTE['ink']}'><u>{EMAIL}</u></link>"
        "&nbsp;&nbsp;|&nbsp;&nbsp; "
        f"<link href='{LINKEDIN_URL}' color='{PALETTE['ink']}'>LinkedIn</link>"
        "&nbsp;&nbsp;|&nbsp;&nbsp; "
        f"<link href='{GITHUB_URL}' color='{PALETTE['ink']}'>GitHub</link>"
        "&nbsp;&nbsp;|&nbsp;&nbsp; "
        f"<link href='{PORTFOLIO_URL}' color='{PALETTE['ink']}'>Portafolio</link>"
    )
    return Paragraph(text, styles["Contact"])


def build_story():
    styles = build_styles()
    story = [
        Paragraph("Juan Sebastián Rubiano", styles["Name"]),
        Paragraph(
            "Estudiante de Ingeniería de Sistemas | Tecnólogo en Desarrollo de Sistemas Informáticos",
            styles["Role"],
        ),
        Paragraph(
            "Perfil orientado a prácticas en ingeniería de datos con foco en Python, SQL, PySpark, Microsoft Fabric, lakehouse y arquitectura Medallion, complementado con experiencia en software y analítica.",
            styles["Summary"],
        ),
        build_contact_line(styles),
    ]

    story.extend(divider("Resumen ejecutivo", styles))
    story.append(
        Paragraph(
            "Estudiante de Ingeniería de Sistemas con transición activa hacia ingeniería de datos. Mi experiencia más fuerte ha sido trabajar con información operativa real, entender procesos de negocio y traducirlos en estructuras de datos, reportes, trazabilidad y soluciones digitales. Hoy estoy fortaleciendo Python, SQL, PySpark, Microsoft Fabric, lakehouse y arquitectura Medallion para aportar en integración, transformación y disponibilización de datos para análisis, seguimiento operativo y toma de decisiones.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.05 * cm))

    story.extend(divider("Foco técnico", styles))
    story.append(
        Paragraph(
            "<b>Stack principal:</b> Python, SQL, PySpark, Microsoft Fabric, Lakehouse y Medallion.<br/>"
            "<b>Procesamiento y transformación:</b> limpieza, estructuración, consultas y preparación de datos para consumo analítico.<br/>"
            "<b>Modelado y persistencia:</b> SQL relacional, nociones NoSQL y trazabilidad de información.<br/>"
            "<b>Analítica de apoyo:</b> Excel, Tableau, Power BI, dashboards y lectura de indicadores.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.03 * cm))

    story.extend(divider("Experiencia aplicada", styles))
    story.append(
        Paragraph(
            "Óptica · operación real, trazabilidad e información de negocio",
            styles["Label"],
        )
    )
    story.append(
        bullet_list(
            [
                "Diseñé una plataforma para integrar inventarios, ventas, historias clínicas, citas, sedes, usuarios por roles y reportes operativos.",
                "Estructuré flujos de información más consistentes para reducir dispersión entre Excel, Word, PDF y notas sueltas.",
                "Apoyé análisis de ventas e indicadores para mejorar seguimiento comercial y lectura del negocio.",
                "Traduje necesidades operativas reales en criterios para organizar, centralizar y aprovechar mejor la información.",
                "Esa experiencia reforzó mi interés por diseñar procesos más confiables para capturar, transformar y consultar datos útiles.",
            ],
            styles,
        )
    )
    story.append(Spacer(1, 0.02 * cm))

    story.extend(divider("Proyectos clave", styles))
    projects = [
        (
            "Ingeniería de datos · Microsoft Fabric",
            "Data Lake Practice",
            "Laboratorio personal para practicar organización por capas, transformación y consumo analítico con lógica Bronze, Silver y Gold. Refuerza fundamentos de arquitectura de datos pensados para entornos empresariales.",
        ),
        (
            "Datos operativos · Plataforma transaccional",
            "Óptica Suite",
            "Sistema diseñado para centralizar una operación real y dejar información más trazable para inventario, ventas, historias clínicas, citas, sedes y reportes. Demuestra integración entre software, procesos y uso estructurado de datos.",
        ),
        (
            "Analítica y visualización · Business intelligence",
            "Dashboard en Tableau",
            "Dashboard de recursos humanos orientado a transformar datos en lectura ejecutiva de headcount, rotación, contrataciones y distribución por áreas. Aporta visualización clara, exploración y comunicación de hallazgos.",
        ),
        (
            "Estadística y preparación de datos",
            "Casos cuantitativos y de machine learning",
            "Ejercicios con estadística, clasificación y datasets tabulares para reforzar validación, lectura de métricas y documentación técnica. Complementan la base analítica con criterio cuantitativo y experimentación aplicada.",
        ),
    ]

    for meta, title, body in projects:
        story.append(Paragraph(meta, styles["Meta"]))
        story.append(Paragraph(title, styles["Project"]))
        story.append(Paragraph(body, styles["Body"]))

    story.append(Spacer(1, 0.02 * cm))
    story.extend(divider("Formación, certificaciones y ATS", styles))
    story.append(
        Paragraph(
            "<b>Formación:</b> Tecnólogo en Desarrollo de Sistemas Informáticos · Estudiante de décimo semestre de Ingeniería de Sistemas.<br/>"
            "<b>Certificaciones clave:</b> Google Data Analytics · Google Advanced Data Analytics · PCAP Python · EF SET C1 · IBM en IA, ciberseguridad y tecnologías emergentes.<br/>"
            "<b>Keywords ATS:</b> Python · SQL · PySpark · Microsoft Fabric · ETL · ELT · Lakehouse · Medallion · Data modeling · Data quality · Dashboards · BI",
            styles["Body"],
        )
    )

    story.append(Spacer(1, 0.02 * cm))
    story.extend(divider("Objetivo profesional", styles))
    story.append(
        Paragraph(
            "Busco una práctica como Data Engineer Intern o BI / Fabric Intern, aportando en integración, transformación y organización de información mientras sigo consolidando experiencia en Python, SQL, PySpark y Microsoft Fabric.",
            styles["Body"],
        )
    )

    return story


def draw_page(canvas, doc):
    canvas.saveState()
    width, height = A4

    canvas.setFillColor(PALETTE["accent"])
    canvas.rect(doc.leftMargin, height - 0.8 * cm, doc.width * 0.29, 0.09 * cm, stroke=0, fill=1)
    canvas.setFillColor(PALETTE["accent_alt"])
    canvas.rect(doc.leftMargin + doc.width * 0.31, height - 0.8 * cm, doc.width * 0.16, 0.09 * cm, stroke=0, fill=1)

    canvas.setStrokeColor(PALETTE["line"])
    canvas.setLineWidth(0.55)
    canvas.line(doc.leftMargin, 1.1 * cm, width - doc.rightMargin, 1.1 * cm)

    canvas.setFillColor(PALETTE["muted"])
    canvas.setFont("Helvetica", 7.8)
    canvas.drawString(doc.leftMargin, 0.72 * cm, "Juan Sebastián Rubiano · CV")
    canvas.drawRightString(width - doc.rightMargin, 0.72 * cm, f"Página {doc.page}")
    canvas.restoreState()


def main():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=1.2 * cm,
        rightMargin=1.2 * cm,
        topMargin=1.08 * cm,
        bottomMargin=1.08 * cm,
        title="Juan Sebastián Rubiano - Data Engineer CV",
        author="Juan Sebastián Rubiano",
        subject="Hoja de vida de una página enfocada a prácticas en ingeniería de datos y Microsoft Fabric",
    )
    doc.build(build_story(), onFirstPage=draw_page, onLaterPages=draw_page)
    print(f"PDF generado en: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
