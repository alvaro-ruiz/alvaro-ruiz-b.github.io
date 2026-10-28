import { hero, profile } from '../data/content'
import HeroVisual from './HeroVisual'
import { Mono } from './ui'

export default function Hero() {
  const cv = profile.cvUrl ? `${import.meta.env.BASE_URL}${profile.cvUrl}` : ''
  return (
    <section id="inicio" className="grid items-center gap-10 border-b border-line px-5 py-14 lg:min-h-screen lg:grid-cols-2 lg:gap-14 lg:px-16 lg:py-20">
      <div>
        <Mono><span className="mr-3 inline-block h-2 w-2 rounded-full bg-ac" />{hero.eyebrow}</Mono>
        <h1 className="my-6 text-4xl font-semibold leading-[1.05] tracking-tight lg:text-[56px]">
          {hero.titleStart}{' '}
          <em className="bg-gradient-to-r from-ac to-ac2 bg-clip-text not-italic text-transparent">{hero.titleHighlight}</em>
        </h1>
        <p className="max-w-[30em] text-lg text-mu">{hero.description}</p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <a href="#proyectos" className="rounded-lg bg-ac px-6 py-4 font-semibold text-[#04202a] shadow-[0_0_30px_#2ee6ff40] hover:brightness-110">
            Ver proyectos →
          </a>
          {cv ? (
            <a href={cv} download className="rounded-lg border border-line px-6 py-4 font-semibold hover:border-ac">Descargar CV</a>
          ) : (
            <a href="#contacto" className="rounded-lg border border-line px-6 py-4 font-semibold hover:border-ac">Contactar</a>
          )}
        </div>
      </div>
      <HeroVisual />
    </section>
  )
}
