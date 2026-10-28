import { nav } from './data/content'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import { useActiveSection } from './components/useActiveSection'

const ids = nav.map((n) => n.id)

export default function App() {
  const active = useActiveSection(ids)
  return (
    <>
      <Sidebar active={active} />
      <main className="lg:ml-[346px]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}
