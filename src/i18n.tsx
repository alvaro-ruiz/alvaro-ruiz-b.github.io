import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { en } from './data/en'
import { es } from './data/es'
import type { Content } from './data/types'

export type Lang = 'es' | 'en'
const all: Record<Lang, Content> = { es, en }

type Value = { lang: Lang; t: Content; setLang: (l: Lang) => void }
const Ctx = createContext<Value | null>(null)

/** Idioma guardado, o el del navegador (español si empieza por "es", si no inglés). */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* sin almacenamiento disponible */
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* ignorar */
    }
  }

  return <Ctx.Provider value={{ lang, t: all[lang], setLang }}>{children}</Ctx.Provider>
}

export function useLang() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useLang debe usarse dentro de <LangProvider>')
  return v
}
