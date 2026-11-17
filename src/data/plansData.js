export const BRAND = {
  name: "LÄN Studio",
  tagline: "Building brands people choose",
  subtitle: "Planes redes sociales",
  whatsappNumber: "+57 302 4538645",
  whatsappClean: "573024538645",
  phones: [
    { display: "(304) 409 5113", clean: "573044095113" },
    { display: "(314) 661 8527", clean: "573146618527" }
  ],
  colors: {
    burgundy: "#8C173A",
    burgundyDark: "#5F0C25",
    cream: "#FAF8F2",
    white: "#FFFFFF"
  }
};

export const PLANS = [
  {
    id: "plan-basico",
    name: "Plan básico",
    priceNumber: 1200000,
    priceFormatted: "$1'200.000",
    period: "mes",
    requirement: "Contratación de servicio mínimo 3 meses",
    popular: false,
    badge: "Esencial para iniciar",
    description: "Ideal para marcas que buscan mantener una presencia constante, cuidada y profesional en sus canales digitales.",
    highlights: [
      "Parrilla de contenido",
      "1 visita al mes para grabación de contenido",
      "8 publicaciones al mes (Reels, post o carruseles)",
      "2 historias semanales",
      "Diseño de piezas gráficas básicas",
      "Redacción de copys",
      "Métricas mensuales"
    ],
    featuresCount: {
      publicaciones: "8 al mes",
      historias: "2 por semana (8/mes)",
      visitas: "1 visita mensual",
      reuniones: "Vía chat/coordinación",
      diseno: "Básico incluido",
      copys: "100% redactados",
      metricas: "Informe mensual"
    }
  },
  {
    id: "plan-estandar",
    name: "Plan estándar",
    priceNumber: 1750000,
    priceFormatted: "$1'750.000",
    period: "mes",
    requirement: "Contratación de servicio mínimo 3 meses",
    popular: true,
    badge: "Más elegido",
    description: "El equilibrio perfecto entre frecuencia, alcance y crecimiento para posicionar tu marca con autoridad.",
    highlights: [
      "Parrilla de contenido",
      "1 visita al mes para grabación de contenido",
      "10 publicaciones al mes (Reels, post o carruseles)",
      "3 historias semanales",
      "Diseño de piezas gráficas básicas",
      "Redacción de copys",
      "Métricas mensuales"
    ],
    featuresCount: {
      publicaciones: "10 al mes",
      historias: "3 por semana (12/mes)",
      visitas: "1 visita mensual",
      reuniones: "Vía chat/coordinación",
      diseno: "Básico incluido",
      copys: "100% redactados",
      metricas: "Informe mensual"
    }
  },
  {
    id: "plan-full",
    name: "Plan full",
    priceNumber: 2250000,
    priceFormatted: "$2'250.000",
    period: "mes",
    requirement: "Contratación de servicio mínimo 3 meses",
    popular: false,
    badge: "Máximo impacto",
    description: "Estrategia integral con acompañamiento estratégico mensual para marcas que exigen alto volumen y fidelización.",
    highlights: [
      "Reunión mensual para planeación y revisión de parrilla de contenido (presencial o virtual)",
      "1 visita al mes para grabación de contenido",
      "12 publicaciones al mes (Reels, post o carruseles)",
      "4 historias semanales",
      "Diseño de piezas gráficas básicas",
      "Redacción de copys",
      "Métricas mensuales"
    ],
    featuresCount: {
      publicaciones: "12 al mes",
      historias: "4 por semana (16/mes)",
      visitas: "1 visita mensual",
      reuniones: "Presencial o virtual mensual",
      diseno: "Básico incluido",
      copys: "100% redactados",
      metricas: "Informe mensual detallado"
    }
  }
];

export const INDIVIDUAL_SERVICES = [
  {
    id: "edicion-video",
    name: "Edición de videos",
    unit: "c/u",
    priceNumber: 180000,
    priceFormatted: "$180.000",
    description: "Edición dinámica con subtítulos, transiciones, audio en tendencia y adaptación a formato vertical (Reels/TikTok).",
    icon: "Video"
  },
  {
    id: "edicion-grabacion",
    name: "Edición de videos + grabación",
    unit: "c/u",
    priceNumber: 250000,
    priceFormatted: "$250.000",
    description: "Rodaje con equipo profesional in situ + postproducción completa optimizada para engagement y retención.",
    icon: "Camera"
  },
  {
    id: "paquete-historias",
    name: "Paquetes de historias (4 semanales)",
    unit: "paquete mensual",
    priceNumber: 180000,
    priceFormatted: "$180.000",
    description: "Creación de 4 secuencias de historias semanales orientadas a generar interacción, encuestas y conversión.",
    icon: "Clock"
  },
  {
    id: "asesoria-marca",
    name: "Asesoría de marca",
    unit: "sesión",
    priceNumber: 250000,
    priceFormatted: "$250.000",
    description: "Sesión 1 a 1 de consultoría estratégica: tono de comunicación, arquetipo de marca y pilares de contenido.",
    icon: "Sparkles"
  },
  {
    id: "planeacion-parrilla",
    name: "Planeación de parrilla e ideas para la creación de contenido",
    unit: "servicio",
    priceNumber: 350000,
    priceFormatted: "$350.000",
    description: "Documento maestro mensual con conceptos, ganchos (hooks), guiones estructurados e ideas de alta conversión.",
    icon: "FileSpreadsheet"
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Planeación Estratégica",
    desc: "Definimos los pilares de comunicación, arquetipo de marca y objetivos comerciales para armar una parrilla coherente que no improvise."
  },
  {
    step: "02",
    title: "Grabación In Situ",
    desc: "Vamos hasta tu espacio para capturar material real, auténtico y de alta calidad con equipo profesional y dirección creativa."
  },
  {
    step: "03",
    title: "Diseño & Copywriting",
    desc: "Editamos piezas gráficas limpias y redactamos textos persuasivos pensados en retener la atención y activar comentarios."
  },
  {
    step: "04",
    title: "Métricas & Evolución",
    desc: "Evaluamos mensualmente el rendimiento de los formatos para iterar sobre lo que mejor conecta con tu audiencia."
  }
];

export const FAQS = [
  {
    q: "¿Por qué los planes tienen un tiempo mínimo de 3 meses?",
    a: "Las redes sociales son un canal de construcción y posicionamiento orgánico. Tres meses es la ventana óptima para validar la parrilla, calibrar el tono de voz de la marca, acumular audiencias fieles y observar un retorno medible y sostenible."
  },
  {
    q: "¿Cómo se coordina la visita mensual de grabación?",
    a: "Una vez aprobada la parrilla de contenidos del mes, agendamos una jornada de producción en tu locación o punto de venta para grabar todos los recursos (videos, tomas de apoyo, fotografías de producto) necesarios para el ciclo."
  },
  {
    q: "¿Puedo contratar servicios individuales además de un plan?",
    a: "¡Totalmente! Puedes iniciar con cualquiera de nuestros tres planes mensuales y añadir paquetes adicionales de edición, historias o asesorías puntuales según los lanzamientos o temporadas de tu negocio."
  },
  {
    q: "¿Qué formatos de publicación están incluidos?",
    a: "En todos los planes se incluyen Reels de alto impacto, publicaciones simples de imagen y carruseles educativos o de venta, adaptados a lo que mejor funcione para tu sector."
  },
  {
    q: "¿Cómo recibo y apruebo el contenido antes de que se publique?",
    a: "Te compartimos con anticipación la parrilla mensual estructurada con las piezas gráficas, videos editados y copys listos para tu revisión y feedback antes de salir al aire."
  }
];

export const getWhatsAppUrl = (message) => {
  const encoded = encodeURIComponent(message || "¡Hola LÄN Studio! Quiero información sobre sus planes de redes sociales.");
  return `https://wa.me/${BRAND.whatsappClean}?text=${encoded}`;
};
