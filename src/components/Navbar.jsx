import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Networking', '#networking'], ['Skills', '#skills'],
  ['Projects', '#projects'], ['Experience', '#experience'], ['Certifications', '#certifications'],
  ['Education', '#education'], ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-lg font-semibold tracking-wide text-white">
          MD<span className="text-accent"> JUBAER</span>
        </a>
        <ul className="hidden gap-6 text-sm lg:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="text-slate-400 transition hover:text-accent">{l}</a></li>
          ))}
        </ul>
        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="grid gap-1 border-t border-white/10 bg-ink px-5 py-3 lg:hidden">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2 text-slate-300">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
