import { projectLinks } from '../data/profile'
import { useLang } from '../i18n'
import { Card, Mono, Section, Tag } from './ui'

export default function Projects() {
  const { t } = useLang()
  return (
    <Section id="proyectos" label={t.ui.projectsLabel} title={t.ui.projectsTitle}>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.projects.map((p) => (
          
          <Card key={p.title}>
            <Mono>{p.category}</Mono>
            <h3 className="mb-2 mt-2.5 text-lg font-semibold">{p.title}</h3>
            <p className="mb-3 text-mu">{p.text}</p>
            <div>{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            {projectLinks[p.id] && (
              <a href={projectLinks[p.id]} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-mono text-[13px] text-ac hover:underline">
                {t.ui.viewOnGithub}
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
