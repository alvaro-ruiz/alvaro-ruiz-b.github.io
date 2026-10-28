import { skills } from '../data/content'
import { Section, Tag } from './ui'

export default function Skills() {
  return (
    <Section id="tecnologias" label="Tecnologías" title="Herramientas del día a día">
      {skills.map((s) => (
        <div key={s.group}>
          <h3 className="mb-1 mt-5 text-[13px] font-medium text-ac">{s.group}</h3>
          {s.items.map((i) => <Tag key={i}>{i}</Tag>)}
        </div>
      ))}
    </Section>
  )
}
