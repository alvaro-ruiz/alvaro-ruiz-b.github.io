import { nav, profile } from '../data/content'
import { Icon, Mono } from './ui'

const photo = `${import.meta.env.BASE_URL}${profile.photo}`

export default function Sidebar({ active }: { active: string }) {
  const social = [
    {
      label: 'LinkedIn',
      url: profile.linkedin,
      icon: (
        <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      url: profile.github,
      icon: (
        <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ].filter((s) => s.url)

  return (
    <aside className="flex flex-col gap-5 border-line bg-side px-5 pb-2 pt-5 lg:fixed lg:inset-y-0 lg:left-0 lg:w-[346px] lg:gap-6 lg:overflow-y-auto lg:border-r lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#1d6f86] bg-[#0c3345] font-bold text-ac">
            {profile.initials}
          </div>
          <div>
            <b className="block text-[17px]">{profile.name}</b>
            <Mono className="tracking-[.15em]">Portfolio / 2026</Mono>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-mu transition hover:border-ac hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden items-center gap-3.5 rounded-2xl border border-line bg-gradient-to-br from-[#0d2038] to-[#0a1830] p-4 lg:flex">
        <div className="relative">
          <img src={photo} alt={`Foto de ${profile.name}`} className="h-16 w-16 rounded-xl object-cover" />
          <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-side bg-ac" />
        </div>
        <div>
          <b>{profile.name}</b>
          <p className="text-xs text-mu">{profile.role}</p>
        </div>
      </div>

      <Mono className="hidden text-[10px] lg:block">Navegación</Mono>
      <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-1.5">
        {nav.map((n) => {
          const on = active === n.id
          return (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`flex items-center gap-3.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-sm transition lg:py-3.5 lg:text-[15px] ${
                on ? 'bg-gradient-to-r from-[#0f3446] to-[#0b2236] text-white' : 'text-mu hover:text-white'
              }`}
            >
              <span className={on ? 'text-ac' : ''}><Icon name={n.icon} /></span>
              {n.label}
              {on && <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-ac lg:block" />}
            </a>
          )
        })}
      </nav>

      <div className="mt-auto hidden lg:block">
        <Mono className="text-[10px]">Conecta conmigo</Mono>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-[10px] border border-line p-3 text-center text-xs text-mu transition hover:border-ac hover:text-white"
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
