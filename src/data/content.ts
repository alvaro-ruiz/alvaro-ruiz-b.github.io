// ============================================================
//  TODO EL CONTENIDO DE LA WEB ESTÁ AQUÍ.
//  Edita este archivo y no hace falta tocar los componentes.
// ============================================================

export const profile = {
  name: 'Álvaro Ruiz',
  initials: 'AR',
  role: 'Software Engineer | Java | AI & Data',
  email: 'aaruizblanquez@gmail.com',
  phone: '+34 644 195 433', // deja '' para ocultarlo
  linkedin: 'https://www.linkedin.com/in/alvaro-ruiz-blanquez-data',
  github: 'https://github.com/alvaro-ruiz',
  cvUrl: '', // pon 'cv.pdf' tras copiar tu PDF a la carpeta public/
  photo: 'foto.jpg', // archivo dentro de public/
  availability: 'Disponible para reubicación en España y la UE.',
}

export const nav = [
  { id: 'inicio', label: 'Inicio', icon: 'home' },
  { id: 'sobre-mi', label: 'Sobre mí', icon: 'user' },
  { id: 'proyectos', label: 'Proyectos', icon: 'layers' },
  { id: 'tecnologias', label: 'Tecnologías', icon: 'code' },
  { id: 'formacion', label: 'Formación', icon: 'cap' },
  { id: 'contacto', label: 'Contacto', icon: 'mail' },
] as const

export const hero = {
  eyebrow: 'Portfolio de desarrollo & datos',
  titleStart: 'Desarrollo software y construyo soluciones basadas en',
  titleHighlight: 'datos e inteligencia artificial.',
  description:
    'Soy Álvaro Ruiz, desarrollador de software junior enfocado en ingeniería de IA y estudiante del Máster de Data Science e IA en Evolve. Conecto código, datos y producto para transformar ideas en soluciones digitales.',
  areas: ['Desarrollo de aplicaciones', 'Análisis y modelado de datos', 'Soluciones con IA'],
}

export const about = {
  title: 'Ingeniería de IA, con base de desarrollador',
  text: 'Desarrollador de software junior con el Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, ahora cursando un máster en Data Science e IA. He construido un asistente RAG sobre documentos, flujos de NLP y aplicaciones de ML con Python, APIs de LLM, bases de datos vectoriales y APIs REST. Me interesa crear software con IA fiable y práctico.',
  highlights: [
    { label: 'Machine Learning', title: 'Proyectos de ML y NLP', text: 'Proyectos de principio a fin con Python, scikit-learn y Hugging Face.' },
    { label: 'Datos', title: 'Análisis de datos', text: 'Dashboards interactivos y análisis con SQL, Power BI y Python.' },
    { label: 'Software', title: 'Base de desarrollo', text: 'Sólida formación de programación gracias al ciclo de DAM.' },
  ],
  experience: [
    { period: '01/2026 – Actualidad', title: 'Técnico de soporte junior', place: 'Peñarroya Informática', text: 'Empecé como becario y después me ofrecieron un puesto a tiempo parcial por las tardes. Aprendí a tratar con clientes y a resolver problemas en un entorno profesional real.' },
    { period: '03/2024 – 06/2024', title: 'Captación puerta a puerta', place: 'Cruz Roja', text: 'Captación de nuevos socios en la calle y puerta a puerta, reforzando comunicación, persuasión y trabajo en equipo.' },
    { period: 'Actualidad', title: 'Voluntario', place: 'Down Málaga y Gamemotiv', text: 'Apoyo en la organización de eventos y actividades educativas y de ocio para niños en riesgo de exclusión social.' },
  ],
}

export type Project = { category: string; title: string; text: string; tags: string[]; url?: string }

export const projects: Project[] = [
  { category: 'IA · RAG', title: 'Viktor', text: 'Asistente conversacional con Retrieval-Augmented Generation que responde sobre una base de conocimiento propia de documentos PDF.', tags: ['LangGraph', 'LLM', 'MemorySaver'], url: 'https://github.com/alvaro-ruiz/Viktor' },
  { category: 'App · Móvil', title: 'NeuroGym', text: 'Aplicación de gimnasio con autenticación, base de datos y recomendación de rutinas personalizadas, con servicios externos de IA y NLP.', tags: ['Flutter', 'Supabase', 'PostgreSQL', 'APIs'], url: 'https://github.com/alvaro-ruiz/NeuroGym' },
  { category: 'Machine Learning', title: 'Predicción de empleabilidad con discapacidad', text: 'Proyecto de ML de principio a fin: preprocesado, evaluación de modelos, análisis de variables y aplicación en Streamlit. En desarrollo.', tags: ['Python', 'Pandas', 'Scikit-learn'], url: 'https://github.com/alvaro-ruiz/Predictor-empleabilidad-de-personas-con-discapacidad' },
  { category: 'Datos · SQL', title: 'Superstore SQL Pipeline', text: 'Pipeline SQL con capas staging y core, vistas analíticas, consultas, transacciones y lógica de validación.', tags: ['MySQL', 'SQL', 'Git'], url: 'https://github.com/alvaro-ruiz/Proyecto-SQL' },
]

export const skills = [
  { group: 'Programación', items: ['Java', 'Python', 'C', 'JavaScript', 'SQL'] },
  { group: 'Backend y desarrollo', items: ['Git', 'REST APIs', 'GitHub', 'MySQL', 'PostgreSQL'] },
  { group: 'Buenas prácticas', items: ['OOP', 'Bases de datos', 'Integración de APIs', 'Resolución de incidencias'] },
  { group: 'Data e IA', items: ['Machine Learning', 'Scikit-learn', 'NLP', 'NumPy', 'Pandas'] },
  { group: 'Herramientas', items: ['VS Code', 'Jupyter', 'Streamlit'] },
]

export const education = {
  items: [
    { period: '01/2026 – 10/2026', title: 'Máster en Data Science e IA', place: 'Evolve', text: 'Desarrollo de modelos avanzados y extracción de información valiosa a partir de datos.', tags: ['Python', 'Machine Learning', 'Deep learning'] },
    { period: '09/2023 – 2025', title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma', place: 'IES Pablo Picasso', text: '', tags: ['Java', 'SQL', 'Git'] },
  ],
  languages: 'Idiomas: español (nativo) · inglés (B1-B2)',
}
