import { useLang, type Lang } from '../i18n'

const options: Lang[] = ['es', 'en']

export default function LangToggle() {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t.ui.switchLang} className="ml-auto flex rounded-lg border border-line p-0.5 font-mono text-xs">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={`rounded-md px-3 py-1.5 uppercase tracking-widest transition ${
            lang === o ? 'bg-ac font-semibold text-[#04202a]' : 'text-mu hover:text-white'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
