export type Content = {
  role: string
  availability: string
  nav: Record<string, string> // id de sección -> etiqueta del menú
  ui: {
    navigation: string
    connect: string
    viewProjects: string
    downloadCv: string
    contactBtn: string
    areasOfFocus: string
    evolving: string
    experienceTitle: string
    viewOnGithub: string
    projectsLabel: string
    projectsTitle: string
    skillsLabel: string
    skillsTitle: string
    educationLabel: string
    educationTitle: string
    contactLabel: string
    contactTitle: string
    contactText: string
    photoAlt: string
    switchLang: string
  }
  hero: { eyebrow: string; titleStart: string; titleHighlight: string; description: string; areas: string[] }
  about: {
    label: string
    title: string
    text: string
    highlights: { label: string; title: string; text: string }[]
    experience: { period: string; title: string; place: string; text: string }[]
  }
  projects: { id: string; category: string; title: string; text: string; tags: string[] }[]
  skills: { group: string; items: string[] }[]
  education: {
    items: { period: string; title: string; place: string; text: string; tags: string[] }[]
    languages: string
  }
}
