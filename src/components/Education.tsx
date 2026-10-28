import { education } from '../data/content'
import { Card, Mono, Section, Tag } from './ui'

export default function Education() {
  return (
    <Section id="formacion" label="Formación" title="Aprendizaje continuo">
      <div className="grid gap-4 md:grid-cols-2">
        {education.items.map((e) => (
          <Card key={e.title}>
            <Mono>{e.period}</Mono>
            <h3 className="mb-1 mt-2.5 text-lg font-semibold">{e.title}</h3>
            <p className="mb-2 text-sm text-ac">{e.place}</p>
            {e.text && <p className="mb-2 text-mu">{e.text}</p>}
            <div>{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </Card>
        ))}
      </div>
      <p className="mt-7 text-mu">{education.languages}</p>
    </Section>
  )
}
