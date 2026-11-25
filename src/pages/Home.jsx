import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Networking from '../components/Networking.jsx'
import Projects from '../components/Projects.jsx'
import { About, Skills, Experience, Certifications, Education, Contact } from '../components/Others.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Networking />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </>
  )
}
