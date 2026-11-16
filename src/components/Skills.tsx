import { useLang } from '../i18n'
import { Section, Tag } from './ui'

export default function Skills() {
  const { t } = useLang()
  return (
    <Section id="tecnologias" label={t.ui.skillsLabel} title={t.ui.skillsTitle}>
      {t.skills.map((s) => (
        <div key={s.group}>
          <h3 className="mb-1 mt-5 text-[13px] font-medium text-ac">{s.group}</h3>
          {s.items.map((i) => <Tag key={i}>{i}</Tag>)}
        </div>
      ))}
    </Section>
  )
}
