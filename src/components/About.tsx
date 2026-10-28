import { about } from '../data/content'
import { Card, Mono, Section } from './ui'

export default function About() {
  return (
    <Section id="sobre-mi" label="Sobre mí" title={about.title}>
      <p className="max-w-[40em] text-lg text-mu">{about.text}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {about.highlights.map((h) => (
          <Card key={h.title}>
            <Mono>{h.label}</Mono>
            <h3 className="mb-2 mt-2.5 text-lg font-semibold">{h.title}</h3>
            <p className="text-mu">{h.text}</p>
          </Card>
        ))}
      </div>
      <Mono className="mt-10 block">Experiencia y voluntariado</Mono>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {about.experience.map((e) => (
          <Card key={e.title + e.period}>
            <Mono>{e.period}</Mono>
            <h3 className="mb-1 mt-2.5 text-lg font-semibold">{e.title}</h3>
            <p className="mb-2 text-sm text-ac">{e.place}</p>
            <p className="text-mu">{e.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
