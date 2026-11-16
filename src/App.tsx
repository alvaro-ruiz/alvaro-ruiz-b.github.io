import { sectionIds } from './data/profile'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import { useActiveSection } from './components/useActiveSection'

export default function App() {
  const active = useActiveSection(sectionIds)
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
