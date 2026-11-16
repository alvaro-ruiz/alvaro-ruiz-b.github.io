import { profile, sectionIds } from '../data/profile'
import { useLang } from '../i18n'
import LangToggle from './LangToggle'
import { Icon, Mono } from './ui'

const icons: Record<string, string> = { inicio: 'home', 'sobre-mi': 'user', proyectos: 'layers', tecnologias: 'code', formacion: 'cap', contacto: 'mail' }

const photo = `${import.meta.env.BASE_URL}${profile.photo}`

export default function Sidebar({ active }: { active: string }) {
  const { t } = useLang()
  const social = [
    { label: 'GitHub', url: profile.github },
    { label: 'LinkedIn', url: profile.linkedin },
  ].filter((s) => s.url)

  return (
    <aside className="flex flex-col gap-5 border-line bg-side px-5 pb-2 pt-5 lg:fixed lg:inset-y-0 lg:left-0 lg:w-[346px] lg:gap-6 lg:overflow-y-auto lg:border-r lg:p-6">
      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#1d6f86] bg-[#0c3345] font-bold text-ac">
          {profile.initials}
        </div>
        <div>
          <b className="block text-[17px]">{profile.name}</b>
          <Mono className="tracking-[.15em]">Portfolio / 2025</Mono>
        </div>
        <LangToggle />
      </div>

      <div className="hidden items-center gap-3.5 rounded-2xl border border-line bg-gradient-to-br from-[#0d2038] to-[#0a1830] p-4 lg:flex">
        <div className="relative">
          <img src={photo} alt={t.ui.photoAlt} className="h-16 w-16 rounded-xl object-cover" />
          <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-side bg-ac" />
        </div>
        <div>
          <b>{profile.name}</b>
          <p className="text-xs text-mu">{t.role}</p>
        </div>
      </div>

      <Mono className="hidden text-[10px] lg:block">{t.ui.navigation}</Mono>
      <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-1.5">
        {sectionIds.map((id) => {
          const on = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`flex items-center gap-3.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-sm transition lg:py-3.5 lg:text-[15px] ${
                on ? 'bg-gradient-to-r from-[#0f3446] to-[#0b2236] text-white' : 'text-mu hover:text-white'
              }`}
            >
              <span className={on ? 'text-ac' : ''}><Icon name={icons[id]} /></span>
              {t.nav[id]}
              {on && <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-ac lg:block" />}
            </a>
          )
        })}
      </nav>

      <div className="mt-auto hidden lg:block">
        <Mono className="text-[10px]">{t.ui.connect}</Mono>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
               className="rounded-[10px] border border-line p-3.5 text-center text-xs text-mu hover:border-ac hover:text-white">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
