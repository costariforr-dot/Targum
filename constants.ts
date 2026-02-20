
import { Content } from './types';

export const CONTENT: Record<'he' | 'es', Content> = {
  he: {
    nav: {
      services: "שירותים",
      prices: "",
      about: "אודותינו",
      cta: "קבל הצעת מחיר"
    },
    hero: {
      badge: "שירותי תרגום משפטי מקצועיים",
      title: "תרגומים רשמיים:",
      accent: "עברית ספרדית",
      desc: "מומחים בתרגומים משפטיים ואישורים רשמיים. אנו מבטיחים דיוק טרמינולוגי ותוקף משפטי בינלאומי לכל המסמכים שלכם, עם הסטנדרטים הגבוהים ביותר של TARGUM.",
      ctaPrimary: "קבל הצעת מחיר",
      ctaSecondary: "צפה בשירותים"
    },
    aboutSection: {
      title: "אודותינו",
      subtitle: "שמי מיכאל אבירם פחלר, אני עורך דין ומתרגם רשמי מוסמך.",
      content: "אני עורך דין פעיל המתמחה במשפט פלילי, ורשום כמתרגם רשמי מטעם משרד החוץ של קוסטה ריקה (Ministerio de Relaciones Exteriores). במסגרת משרד Targum, אני מבצע תרגומים רשמיים ומאושרים בשפות עברית וספרדית.\n\nהשירות שלי מבוסס על דיוק ללא פשרות, שירותיות וליווי אישי. אני כאן כדי להבטיח שהמסמכים שלכם יתורגמו בצורה המקצועית ביותר, כך שיהיו מקובלים על כל המוסדות הרשמיים, הבנקים והרשויות בקוסטה ריקה."
    },
    services: {
      label: "ההתמחות שלנו",
      title: "מגוון שירותי תרגום",
      items: [
        {
          icon: "description",
          title: "תעודות ומסמכים אישיים",
          desc: "• תעודות רשמיות: לידה, נישואין, פטירה ומצב משפחתי.\n• מסמכי זיהוי: דרכונים, תעודות זהות ותעודות יושר.\n• רישיונות נהיגה: תרגום רשמי.\n• ועוד...",
          link: ""
        },
        {
          icon: "gavel",
          title: "עסקים, משפט ואקדמיה",
          desc: "• חוזים והסכמים: חוזי עבודה, שכירות והסכמים מסחריים.\n• מסמכי תאגיד: פרוטוקולים, תקנונים ומסמכי רישום חברה.\n• לימודים: תעודות בגרות, תארים אקדמיים וגיליונות ציונים.\n• ועוד...",
          link: ""
        },
        {
          icon: "account_balance",
          title: "פיננסים ובנקאות",
          desc: "• אישורי הכנסה: דפי חשבון בנק, מאזנים ואישורים כספיים.\n• דוחות כספיים: תרגום דוחות מבוקרים ואישורי רואה חשבון.\n• הוכחת מקור כספים: תרגום מסמכי תמיכה להעברות כספים בינלאומיות.\n• ועוד...",
          link: ""
        }
      ]
    },
    why: {
      title: "למה TARGUM?",
      points: [
        { title: "דיוק טרמינולוגי", desc: "היכרות מעמיקה עם מערכות המשפט הישראלית והספרדית." },
        { title: "סודיות מוחלטת", desc: "טיפול מאובטח ודיסקרטי בכל התיעוד הרגיש שלכם." },
        { title: "זמני אספקה מהירים", desc: "מחויבים ללוחות הזמנים שלכם מבלי להתפתח על האיכות." }
      ],
      stats: []
    },
    ready: {
      title: "צרו איתנו קשר",
      desc: "אנחנו זמינים לכל שאלה או בקשה. השאירו פרטים ונחזור אליכם עם הצעת מחיר מדויקת.",
      cta1: "שליחת הודעה",
      cta2: "התקשרו עכשיו",
      responseTime: "מענה תוך 2-3 ימי עסקים",
      phoneLabel: "מספר",
      countryLabel: "מדינה",
      docTypeLabel: "סוג המסמך לתרגום",
      directionLabel: "כיוון התרגום",
      directions: {
        heToEs: "עברית לספרדית",
        esToHe: "ספרדית לעברית"
      },
      fileUploadLabel: "העלאת קובץ"
    },
    footer: {
      desc: "",
      navTitle: "ניווט מהיר",
      contactTitle: "פרטי התקשרות",
      links: ["דף הבית", "אודותינו", "שירותים", "צור קשר"],
      copy: "© 2024 TARGUM. כל הזכויות שמורות."
    }
  },
  es: {
    nav: {
      services: "Servicios",
      prices: "",
      about: "Sobre Nosotros",
      cta: "Cotizar Ahora"
    },
    hero: {
      badge: "Traducción Jurídica Profesional",
      title: "Traducciones Oficiales:",
      accent: "Hebreo Español",
      desc: "Especialistas en traducciones legales y certificaciones oficiales. Garantizamos precisión terminológica y validez jurídica internacional para todos sus documentos.",
      ctaPrimary: "Solicitar Presupuesto",
      ctaSecondary: "Ver Servicios"
    },
    aboutSection: {
      title: "Sobre Nosotros",
      subtitle: "Soy Mijael Aviram Fachler, abogado y traductor oficial certificado.",
      content: "Especialista en derecho penal y acreditado ante el Ministerio de Relaciones Exteriores de Costa Rica, dirijo la firma Targum, donde realizamos traducciones oficiales en hebreo y español con absoluta precisión legal.\n\nMi compromiso es brindar un servicio ágil y profesional, asegurando que cada documento cumpla con los estándares exigidos por bancos, autoridades y entes gubernamentales en el país."
    },
    services: {
      label: "Nuestra Especialidad",
      title: "Servicios de Traducción",
      items: [
        {
          icon: "description",
          title: "Documentación Civil y Personal",
          desc: "• Actas oficiales: nacimiento, matrimonio, defunción.\n• Documentos de identidad: pasaportes, cédulas y antecedentes penales.\n• Licencias de conducir: traducción oficial.\n• Y más...",
          link: ""
        },
        {
          icon: "gavel",
          title: "Corporativo, Legal y Académico",
          desc: "• Contratos y acuerdos: laborales, alquiler y comerciales.\n• Documentos corporativos: actas, estatutos y registro de empresas.\n• Académico: bachillerato, títulos universitarios y certificaciones de notas.\n• Y más...",
          link: ""
        },
        {
          icon: "account_balance",
          title: "Servicios Financieros y Bancarios",
          desc: "• Certificaciones de ingresos: estados de cuenta y balances.\n• Estados financieros: auditorías y certificaciones.\n• Origen de fondos: documentos de respaldo para transferencias internacionales.\n• Y más...",
          link: ""
        }
      ]
    },
    why: {
      title: "¿Por qué TARGUM?",
      points: [
        { title: "Precisión Terminológica", desc: "Conocimiento profundo de los sistemas legales hebreo y español." },
        { title: "Confidencialidad Total", desc: "Manejo seguro y discreto de toda su documentación sensible." },
        { title: "Tiempos de Entrega Ágiles", desc: "Comprometidos con sus plazos sin sacrificar la calidad." }
      ],
      stats: []
    },
    ready: {
      title: "Contáctenos",
      desc: "Estamos disponibles para cualquier consulta. Déjenos sus datos y le responderemos con un presupuesto detallado.",
      cta1: "Enviar Mensaje",
      cta2: "Llamar Ahora",
      responseTime: "Respuesta en 2-3 días hábiles",
      phoneLabel: "Número",
      countryLabel: "País",
      docTypeLabel: "Tipo de documento a traducir",
      directionLabel: "Dirección de traducción",
      directions: {
        heToEs: "Hebreo a Español",
        esToHe: "Español a Hebreo"
      },
      fileUploadLabel: "Subir Archivo"
    },
    footer: {
      desc: "",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      links: ["Inicio", "Sobre Nosotros", "Servicios", "Contacto"],
      copy: "© 2024 TARGUM. Todos los derechos reservados."
    }
  }
};
