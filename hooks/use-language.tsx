"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Header
    "header.getQuote": "Get Free Cleaning Quote",

    // Hero Section
    "hero.trusted": "Trusted by 100+ families",
    "hero.headline": "Professional",
    "hero.cleaning": "Cleaning",
    "hero.and": "and",
    "hero.applianceRepair": "Appliance Repair",
    "hero.services": "Services",
    "hero.subheadline":
      "Deep cleaning, basic cleaning, and appliance repair services. Save with our recurring service plans.",
    "hero.callButton": "Call (504) 428-9412",
    "hero.quoteButton": "Get Free Cleaning Quote",
    "hero.serviceAreas": "Serving within 80 miles of New Orleans",
    "hero.benefits.licensed": "Licensed",
    "hero.benefits.sameDay": "Expert Technicians",
    "hero.benefits.satisfaction": "100% Satisfaction Guaranteed",

    // Services Section
    "services.title": "Our Cleaning and Appliance Repair Services",
    "services.subtitle":
      "Professional cleaning solutions tailored to your needs. Prices may vary based on home size, bedrooms, and bathrooms.",
    "services.mostPopular": "Most Popular",
    "services.includes": "Includes",
    "services.extras": "Extras",
    "services.callForQuote": "Call for Free Quote",
    "services.recurring.title": "Save with Recurring Services",
    "services.recurring.description":
      "Schedule regular cleaning services and save with our recurring service plans. Perfect for busy families and professionals.",
    "services.recurring.callButton": "Call (504) 428-9412 to Learn More",

    // Deep Cleaning
    "services.deep.title": "Deep Cleaning",
    "services.deep.description": "Comprehensive deep cleaning service for your entire home",
    "services.deep.features.0": "Thorough dusting of all surfaces, baseboards, light fixtures and vents",
    "services.deep.features.1": "Deep scrubbing of bathrooms: tiles, tubs, toilets and sinks",
    "services.deep.features.2": "Detailed kitchen cleaning: stovetop, backsplash, countertops and appliances",
    "services.deep.features.3": "Vacuuming and mopping floors including behind and underneath furniture",
    "services.deep.features.4": "Interior sanitizing of microwave and trashcan",
    "services.deep.extras.0": "Oven cleaning - $30 to $50",
    "services.deep.extras.1": "Refrigerator cleaning (must be empty) - $30 to $50",
    "services.deep.extras.2": "Interior cabinets cleaning (must be empty) - $40 to $70",
    "services.deep.extras.3": "Interior window cleaning - $50 to $100+",

    // Basic Cleaning
    "services.basic.title": "Basic Cleaning",
    "services.basic.description": "Regular maintenance cleaning to keep your home fresh",
    "services.basic.features.0": "Dusting all visible surfaces (tables, shelves, countertops, etc.)",
    "services.basic.features.1": "Vacuuming and mopping of all floors",
    "services.basic.features.2": "Wiping down mirrors and glass surfaces",
    "services.basic.features.3": "Cleaning bathroom sinks, toilets and countertops",
    "services.basic.features.4": "Wiping kitchen surfaces and appliance exteriors",

    // Appliance Repair
    "services.appliance.title": "Appliance Repair",
    "services.appliance.price": "Starting at $80",
    "services.appliance.description": "Professional appliance repair services",
    "services.appliance.features.0": "Washing machine repair",
    "services.appliance.features.1": "Dryer repair",
    "services.appliance.features.2": "Dishwasher repair",
    "services.appliance.features.3": "Refrigerator repair",
    "services.appliance.features.4": "Oven repair",
    "services.appliance.features.5": "Stovetop repair",
    "services.appliance.note": "$80 diagnostic fee applied toward repair if completed. Parts and labor vary.",

    // Service Area
    "serviceArea.title": "Service Areas",
    "serviceArea.subtitle": "Proudly serving New Orleans and surrounding areas.",
    "serviceArea.primaryAreas": "Primary Service Areas",
    "serviceArea.airbnb.title": "AirBnB Cleaning Services",
    "serviceArea.airbnb.description":
      "Specialized cleaning for short-term rentals, vacation properties, and guest accommodations.",
    "serviceArea.extendedCoverage": "Extended Coverage",
    "serviceArea.extendedDescription":
      "We also serve areas within a 80-mile radius of New Orleans. Call us to confirm service availability in your location.",
    "serviceArea.hours.title": "Service Hours",
    "serviceArea.hours.weekdays": "Monday - Friday",
    "serviceArea.hours.saturday": "Saturday",
    "serviceArea.hours.sunday": "Sunday",
    "serviceArea.hours.byAppointment": "By appointment only",
    "serviceArea.travel.title": "Travel & Scheduling",
    "serviceArea.travel.noTravel": "No travel charges for cleaning services",
    "serviceArea.travel.flexible": "Flexible scheduling to fit your needs",
    "serviceArea.travel.emergency": "Emergency cleaning and appliance repair services available",
    "serviceArea.notListed.title": "Don't see your area listed?",
    "serviceArea.notListed.description":
      "We're expanding our service area regularly. Give us a call to check availability.",
    "serviceArea.notListed.callButton": "Call (504) 428-9412",

    // Why Choose Us Section
    "whyChoose.title": "Why Choose Mimeliaa General Services?",
    "whyChoose.subtitle":
      "We're more than just a cleaning and appliance repair service company. We're your trusted partner in maintaining a clean, healthy, and comfortable home environment.",
    "mission.title": "Mission Statement",
    "mission.description":
      "At Mimeliaa, our mission is to deliver dependable, high-quality services that simplify and improve everyday life. With a focus on excellence, integrity, and customer satisfaction, we are committed to serving homes and businesses with care and professionalism.",
    "vision.title": "Vision Statement",
    "vision.description":
      "We envision Mimeliaa as a trusted name in home and commercial services—recognized for reliability, craftsmanship, and our commitment to making spaces work better and feel better for those who use them.",
    "whyChoose.licensed.title": "Licensed",
    "whyChoose.licensed.description":
      "Fully licensed for your peace of mind. Your property is protected with every service.",
    "whyChoose.flexible.title": "Expert Technicians",
    "whyChoose.flexible.description":
      "Our experienced team treats your home with care and respect. Background-checked and trained staff.",
    "whyChoose.trusted.title": "Trusted Professionals",
    "whyChoose.trusted.description":
      "We work around your schedule to provide convenient cleaning times that fit your busy lifestyle.",
    "whyChoose.satisfaction.title": "100% Satisfaction",
    "whyChoose.satisfaction.description":
      "We guarantee your satisfaction. If you're not happy, we'll make it right at no extra charge.",
    "whyChoose.ecoFriendly.title": "Eco-Friendly Options",
    "whyChoose.ecoFriendly.description":
      "Safe, non-toxic cleaning products available on request. By default, we use effective bleach-based products, but eco-friendly alternatives are available for families preferring gentler options.",
    "whyChoose.local.title": "Local New Orleans Business",
    "whyChoose.local.description":
      "Proudly serving New Orleans and surrounding areas within an 80-mile radius. Local ownership means personalized service.",
    "whyChoose.cta.title": "Ready to Experience the Difference?",
    "whyChoose.cta.description":
      "Join hundreds of satisfied customers in the New Orleans area. Call today for your free, no-obligation quote.",
    "whyChoose.cta.callButton": "(504) 428-9412",
    "whyChoose.cta.emailButton": "Email Us",

    // Contact Section
    "contact.title": "Get Your Free Cleaning Quote Today",
    "contact.subtitle":
      "Ready to experience professional cleaning or appliance repair services? Contact us for a free, no-obligation quote tailored to your specific needs.",
    "contact.disclaimer": "Free quotes are for cleaning services only.",
    "contact.getInTouch": "Get In Touch",
    "contact.getInTouchDescription":
      "Call us now for immediate assistance or fill out the form and we'll get back to you within 24 hours. We're here to answer all your questions about our cleaning and appliance repair services.",
    "contact.callUs": "Call Us",
    "contact.available": "Available 7 days a week",
    "contact.emailUs": "Email Us",
    "contact.respond": "We respond within 24 hours",
    "contact.serviceArea": "Service Area",
    "contact.newOrleansMetro": "New Orleans Metro Area",
    "contact.coverage": "80-mile radius coverage",
    "contact.businessHours": "Business Hours",
    "contact.weekdays": "Mon-Fri: 8AM-6PM",
    "contact.weekend": "Sat: 9AM-4PM, Sun: By appointment",
    "contact.requestQuote": "Request a Free Quote",
    "contact.fullName": "Full Name",
    "contact.phoneNumber": "Phone Number",
    "contact.emailAddress": "Email Address",
    "contact.serviceNeeded": "Service Needed",
    "contact.selectService": "Select a service",
    "contact.deepCleaning": "Deep Cleaning",
    "contact.basicCleaning": "Basic Cleaning",
    "contact.applianceRepair": "Appliance Repair",
    "contact.recurringService": "Recurring Service",
    "contact.other": "Other",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your cleaning needs, home size, and any specific requirements...",
    "contact.submitButton": "Send Message & Get Free Cleaning Quote",
    "contact.sending": "Sending...",
    "contact.successMessage": "We'll get back to you within 24 hours with your personalized quote.",
    "contact.errorMessage": "There was an error sending your message. Please call us at (504) 428-9412.",
    "contact.requiredFields": "* Required fields. We'll contact you within 24 hours with your personalized quote.",
    "contact.preferCall": "Prefer to call?",
    "contact.thankYou": "Thank you for your message! We'll contact you within 24 hours.",
    // Footer Section
    "footer.companyDescription":
      "Professional cleaning and appliance repair services for New Orleans and surrounding areas. Licensed, insured, and committed to your satisfaction.",
    "footer.ourServices": "Our Services",
    "footer.deepCleaning": "Deep Cleaning",
    "footer.basicCleaning": "Basic Cleaning",
    "footer.applianceRepair": "Appliance Repair",
    "footer.recurringServices": "Recurring Services",
    "footer.serviceAreas": "Service Areas",
    "footer.newOrleans": "New Orleans",
    "footer.metairie": "Metairie",
    "footer.kenner": "Kenner",
    "footer.jefferson": "Jefferson",
    "footer.gretna": "Gretna",
    "footer.radius": "80-mile radius coverage",
    "footer.copyright": "© 2025 Mimeliaa General Services LLC. All rights reserved.",
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",

    // Header
    "header.getQuote": "Cotización de Limpieza Gratis",

    // Hero Section
    "hero.trusted": "Confiado por más de 100 familias",
    "hero.headline": "Servicios Profesionales de",
    "hero.cleaning": "Limpieza",
    "hero.and": "y",
    "hero.applianceRepair": "Reparación de Electrodomésticos",
    "hero.services": "",
    "hero.subheadline":
      "Servicios de limpieza profunda, limpieza básica y reparación de electrodomésticos. Ahorra con nuestros planes de servicio recurrente.",
    "hero.callButton": "Llamar (504) 428-9412",
    "hero.quoteButton": "Cotización de Limpieza Gratis",
    "hero.serviceAreas": "Sirviendo dentro de 80 millas de Nueva Orleans",
    "hero.benefits.licensed": "Con Licencia",
    "hero.benefits.sameDay": "Técnicos Expertos",
    "hero.benefits.satisfaction": "100% Satisfacción Garantizada",

    // Services Section
    "services.title": "Nuestros Servicios de Limpieza y Reparación de Electrodomésticos",
    "services.subtitle":
      "Soluciones de limpieza profesional adaptadas a tus necesidades. Los precios pueden variar según el tamaño de la casa, dormitorios y baños.",
    "services.mostPopular": "Más Popular",
    "services.includes": "Incluye",
    "services.extras": "Extras",
    "services.callForQuote": "Llamar para Cotización Gratuita",
    "services.recurring.title": "Ahorra con Servicios Recurrentes",
    "services.recurring.description":
      "Programa servicios de limpieza regulares y ahorra con nuestros planes de servicio recurrente. Perfecto para familias ocupadas y profesionales.",
    "services.recurring.callButton": "Llamar (504) 428-9412 para Más Información",

    // Deep Cleaning
    "services.deep.title": "Limpieza Profunda",
    "services.deep.description": "Servicio de limpieza profunda integral para toda tu casa",
    "services.deep.features.0": "Limpieza minuciosa de todas las superficies, zócalos, lámparas y ventilaciones",
    "services.deep.features.1": "Limpieza profunda de baños: azulejos, bañeras, inodoros y lavabos",
    "services.deep.features.2": "Limpieza detallada de cocina: estufa, salpicadero, encimeras y electrodomésticos",
    "services.deep.features.3": "Aspirado y trapeado de pisos incluyendo detrás y debajo de muebles",
    "services.deep.features.4": "Desinfección interior del microondas y basurero",
    "services.deep.extras.0": "Limpieza de horno - $30 a $50",
    "services.deep.extras.1": "Limpieza de refrigerador (debe estar vacío) - $30 a $50",
    "services.deep.extras.2": "Limpieza interior de gabinetes de cocina y baños (deben estar vacíos) - $40 a $70",
    "services.deep.extras.3": "Limpieza interior de ventanas - $50 a $100+",

    // Basic Cleaning
    "services.basic.title": "Limpieza Básica",
    "services.basic.description": "Limpieza de mantenimiento regular para mantener tu hogar fresco",
    "services.basic.features.0": "Limpieza de todas las superficies visibles (mesas, estantes, encimeras, etc.)",
    "services.basic.features.1": "Aspirado y trapeado de todos los pisos",
    "services.basic.features.2": "Limpieza de espejos y superficies de vidrio",
    "services.basic.features.3": "Limpieza de lavabos, inodoros y encimeras de baños",
    "services.basic.features.4": "Limpieza de superficies de cocina y exteriores de electrodomésticos",

    // Appliance Repair
    "services.appliance.title": "Reparación de Electrodomésticos",
    "services.appliance.price": "Desde $80",
    "services.appliance.description": "Servicios profesionales de reparación de electrodomésticos",
    "services.appliance.features.0": "Reparación de lavadora",
    "services.appliance.features.1": "Reparación de secadora",
    "services.appliance.features.2": "Reparación de lavavajillas",
    "services.appliance.features.3": "Reparación de refrigerador",
    "services.appliance.features.4": "Reparación de horno",
    "services.appliance.features.5": "Reparación de estufa",
    "services.appliance.note":
      "Tarifa de diagnóstico de $80 aplicada hacia la reparación si se completa. Las piezas y mano de obra varían.",

    // Service Area
    "serviceArea.title": "Áreas de Servicio",
    "serviceArea.subtitle": "Sirviendo con orgullo Nueva Orleans y áreas circundantes.",
    "serviceArea.primaryAreas": "Áreas de Servicio Principales",
    "serviceArea.airbnb.title": "Servicios de Limpieza AirBnB",
    "serviceArea.airbnb.description":
      "Limpieza especializada para alquileres a corto plazo, propiedades vacacionales y alojamientos para huéspedes.",
    "serviceArea.extendedCoverage": "Cobertura Extendida",
    "serviceArea.extendedDescription":
      "También servimos áreas dentro de un radio de 80 millas de Nueva Orleans. Llámanos para confirmar disponibilidad de servicio en tu ubicación.",
    "serviceArea.hours.title": "Horarios de Servicio",
    "serviceArea.hours.weekdays": "Lunes - Viernes",
    "serviceArea.hours.saturday": "Sábado",
    "serviceArea.hours.sunday": "Domingo",
    "serviceArea.hours.byAppointment": "Solo con cita previa",
    "serviceArea.travel.title": "Viajes y Programación",
    "serviceArea.travel.noTravel": "Sin cargos de viaje para servicios de limpieza",
    "serviceArea.travel.flexible": "Programación flexible para adaptarse a tus necesidades",
    "serviceArea.travel.emergency": "Servicios de limpieza y reparación de electrodomésticos de emergencia disponibles",
    "serviceArea.notListed.title": "¿No ves tu área en la lista?",
    "serviceArea.notListed.description":
      "Estamos expandiendo nuestra área de servicio regularmente. Llámanos para verificar disponibilidad.",
    "serviceArea.notListed.callButton": "Llamar (504) 428-9412",

    // Why Choose Us Section
    "whyChoose.title": "¿Por Qué Elegir Mimeliaa General Services?",
    "whyChoose.subtitle":
      "Somos más que una empresa de servicios de limpieza y reparación de electrodomésticos. Somos tu socio de confianza para mantener un ambiente hogareño limpio, saludable y cómodo.",
    "mission.title": "Declaración de Misión",
    "mission.description":
      "En Mimeliaa, nuestra misión es brindar servicios confiables y de alta calidad que simplifiquen y mejoren la vida cotidiana. Con un enfoque en la excelencia, integridad y satisfacción del cliente, estamos comprometidos a servir hogares y negocios con cuidado y profesionalismo.",
    "vision.title": "Declaración de Visión",
    "vision.description":
      "Visualizamos a Mimeliaa como un nombre de confianza en servicios domésticos y comerciales—reconocido por la confiabilidad, artesanía y nuestro compromiso de hacer que los espacios funcionen mejor y se sientan mejor para quienes los usan.",
    "whyChoose.licensed.title": "Con Licencia",
    "whyChoose.licensed.description":
      "Completamente licenciado para tu tranquilidad. Tu propiedad está protegida con cada servicio.",
    "whyChoose.flexible.title": "Técnicos Expertos",
    "whyChoose.flexible.description":
      "Nuestro equipo experimentado trata tu hogar con cuidado y respeto. Personal verificado y capacitado.",
    "whyChoose.trusted.title": "Profesionales de Confianza",
    "whyChoose.trusted.description":
      "Trabajamos según tu horario para brindar horarios de limpieza convenientes que se adapten a tu estilo de vida ocupado.",
    "whyChoose.satisfaction.title": "100% Satisfacción",
    "whyChoose.satisfaction.description":
      "Garantizamos tu satisfacción. Si no estás contento, lo arreglaremos sin costo adicional.",
    "whyChoose.ecoFriendly.title": "Opciones Ecológicas",
    "whyChoose.ecoFriendly.description":
      "Productos de limpieza seguros y no tóxicos disponibles bajo solicitud. Por defecto, usamos productos efectivos a base de lejía, pero alternativas ecológicas están disponibles para familias que prefieren opciones más suaves.",
    "whyChoose.local.title": "Negocio Local de Nueva Orleans",
    "whyChoose.local.description":
      "Sirviendo con orgullo Nueva Orleans y áreas circundantes dentro de un radio de 80 millas. Propiedad local significa servicio personalizado.",
    "whyChoose.cta.title": "¿Listo para Experimentar la Diferencia?",
    "whyChoose.cta.description":
      "Únete a cientos de clientes satisfechos en el área de Nueva Orleans. Llama hoy para tu cotización gratuita y sin compromiso.",
    "whyChoose.cta.callButton": "(504) 428-9412",
    "whyChoose.cta.emailButton": "Envíanos un Email",

    // Contact Section
    "contact.title": "Obtén Tu Cotización de Limpieza Gratuita Hoy",
    "contact.subtitle":
      "¿Listo para experimentar servicios de limpieza profesional o reparación de electrodomésticos? Contáctanos para una cotización gratuita y sin compromiso adaptada a tus necesidades específicas.",
    "contact.disclaimer": "Las cotizaciones gratuitas son solo para servicios de limpieza.",
    "contact.getInTouch": "Ponte en Contacto",
    "contact.getInTouchDescription":
      "Llámanos ahora para asistencia inmediata o llena el formulario y te contactaremos dentro de 24 horas. Estamos aquí para responder todas tus preguntas sobre nuestros servicios de limpieza y reparación de electrodomésticos.",
    "contact.callUs": "Llámanos",
    "contact.available": "Disponible 7 días a la semana",
    "contact.emailUs": "Envíanos un Email",
    "contact.respond": "Respondemos dentro de 24 horas",
    "contact.serviceArea": "Área de Servicio",
    "contact.newOrleansMetro": "Área Metropolitana de Nueva Orleans",
    "contact.coverage": "Cobertura de radio de 80 millas",
    "contact.businessHours": "Horarios de Negocio",
    "contact.weekdays": "Lun-Vie: 8AM-6PM",
    "contact.weekend": "Sáb: 9AM-4PM, Dom: Solo con cita",
    "contact.requestQuote": "Solicitar Cotización Gratuita",
    "contact.fullName": "Nombre Completo",
    "contact.phoneNumber": "Número de Teléfono",
    "contact.emailAddress": "Dirección de Email",
    "contact.serviceNeeded": "Servicio Necesario",
    "contact.selectService": "Selecciona un servicio",
    "contact.deepCleaning": "Limpieza Profunda",
    "contact.basicCleaning": "Limpieza Básica",
    "contact.applianceRepair": "Reparación de Electrodomésticos",
    "contact.recurringService": "Servicio Recurrente",
    "contact.other": "Otro",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder":
      "Cuéntanos sobre tus necesidades de limpieza, tamaño de casa y cualquier requisito específico...",
    "contact.submitButton": "Enviar Mensaje y Obtener Cotización de Limpieza Gratuita",
    "contact.sending": "Enviando...",
    "contact.successMessage": "Te contactaremos dentro de 24 horas con tu cotización personalizada.",
    "contact.errorMessage": "Hubo un error al enviar tu mensaje. Por favor llámanos al (504) 428-9412.",
    "contact.requiredFields":
      "* Campos requeridos. Te contactaremos dentro de 24 horas con tu cotización personalizada.",
    "contact.preferCall": "¿Prefieres llamar?",
    "contact.thankYou": "¡Gracias por tu mensaje! Te contactaremos dentro de 24 horas.",
    // Footer Section
    "footer.companyDescription":
      "Servicios profesionales de limpieza y reparación de electrodomésticos para Nueva Orleans y áreas circundantes. Con licencia, asegurados y comprometidos con tu satisfacción.",
    "footer.ourServices": "Nuestros Servicios",
    "footer.deepCleaning": "Limpieza Profunda",
    "footer.basicCleaning": "Limpieza Básica",
    "footer.applianceRepair": "Reparación de Electrodomésticos",
    "footer.recurringServices": "Servicios Recurrentes",
    "footer.serviceAreas": "Áreas de Servicio",
    "footer.newOrleans": "Nueva Orleans",
    "footer.metairie": "Metairie",
    "footer.kenner": "Kenner",
    "footer.jefferson": "Jefferson",
    "footer.gretna": "Gretna",
    "footer.radius": "Cobertura de radio de 80 millas",
    "footer.copyright": "© 2025 Mimeliaa General Services LLC. Todos los derechos reservados.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
