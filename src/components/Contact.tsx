import { profile } from '../data/profile'
import { useLang } from '../i18n'
import { Section } from './ui'

const outline = 'rounded-lg border border-line px-6 py-4 font-semibold hover:border-ac'

export default function Contact() {
  const { t } = useLang()
  return (
    <Section id="contacto" label={t.ui.contactLabel} title={t.ui.contactTitle} last>
      <p className="max-w-[30em] text-lg text-mu">{t.availability} {t.ui.contactText}</p>
      <div className="mt-9 flex flex-wrap gap-3.5">
        <a href={`mailto:${profile.email}`} className="rounded-lg bg-ac px-6 py-4 font-semibold text-[#04202a] shadow-[0_0_30px_#2ee6ff40] hover:brightness-110">
          {profile.email}
        </a>
        {profile.phone && <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className={outline}>{profile.phone}</a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={outline}>LinkedIn</a>}
        {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className={outline}>GitHub</a>}
      </div>
    </Section>
  )
}
