// Datos que NO cambian con el idioma: contacto, enlaces y foto.
export const profile = {
  name: 'Álvaro Ruiz',
  initials: 'AR',
  email: 'aaruizblanquez@gmail.com',
  phone: '+34 644 195 433', // deja '' para ocultarlo
  linkedin: 'https://www.linkedin.com/in/alvaro-ruiz-blanquez-data',
  github: '', // p. ej. 'https://github.com/tu-usuario'
  cvUrl: { es: '', en: '' }, // p. ej. { es: 'cv-es.pdf', en: 'cv-en.pdf' } (archivos en public/)
  photo: 'foto.jpg', // archivo dentro de public/
}

// Enlaces de cada proyecto (la clave es el id del proyecto en es.ts / en.ts)
export const projectLinks: Record<string, string> = {
  viktor: '',
  neurogym: '',
  employability: '',
  superstore: '',
}

export const sectionIds = ['inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'formacion', 'contacto'] as const
