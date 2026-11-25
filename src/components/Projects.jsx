import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, ExternalLink, X, ImageIcon } from 'lucide-react'
import Section, { Empty } from './Section.jsx'
import { projects, projectCategories } from '../data/portfolio.js'

const LinkBtn = ({ href, icon: Icon, children }) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer" className="btn btn-ghost !px-4 !py-2"><Icon size={14} />{children}</a>
  ) : (
    <span className="btn btn-ghost cursor-not-allowed !px-4 !py-2 opacity-40" title="Link not added yet"><Icon size={14} />{children}</span>
  )

const Thumb = ({ p }) =>
  p.image ? <img src={p.image} alt={p.name} className="h-full w-full object-cover" /> : (
    <div className="grid h-full place-items-center bg-gradient-to-br from-electric/10 to-accent/5 text-slate-600"><ImageIcon size={32} strokeWidth={1} /></div>
  )

export default function Projects() {
  const [cat, setCat] = useState('All')
  const [sel, setSel] = useState(null)
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)
  return (
    <Section id="projects" eyebrow="// 05 — Projects" title="Projects & Labs">
      <div className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? 'border-accent bg-accent/10 text-accent' : 'border-white/10 text-slate-400 hover:text-white'}`}>{c}</button>
        ))}
      </div>
      {list.length === 0 ? <Empty text="No projects in this category yet." /> : (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {list.map((p) => (
              <motion.article layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="glass glass-hover cursor-pointer overflow-hidden" onClick={() => setSel(p)}>
                <div className="aspect-video"><Thumb p={p} /></div>
                <div className="p-5">
                  <span className="font-mono text-[11px] uppercase text-accent">{p.category}</span>
                  <h3 className="mt-1 font-display text-lg text-white">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300">{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setSel(null)}>
            <motion.div initial={{ y: 20, scale: 0.97 }} animate={{ y: 0, scale: 1 }} onClick={(e) => e.stopPropagation()}
              className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-navy">
              <button onClick={() => setSel(null)} aria-label="Close" className="absolute right-4 top-4 z-10 rounded-full bg-ink/80 p-2 text-white"><X size={16} /></button>
              <div className="aspect-video"><Thumb p={sel} /></div>
              <div className="p-6">
                <span className="font-mono text-xs uppercase text-accent">{sel.category}</span>
                <h3 className="mt-1 font-display text-2xl text-white">{sel.name}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{sel.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sel.tech.map((t) => <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-slate-300">{t}</span>)}
                </div>
                <div className="mt-6 flex gap-3">
                  <LinkBtn href={sel.github} icon={Github}>GitHub</LinkBtn>
                  <LinkBtn href={sel.demo} icon={ExternalLink}>Live Demo</LinkBtn>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
