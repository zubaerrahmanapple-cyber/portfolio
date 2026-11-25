import { Mail, MapPin, Phone, Award, GraduationCap, Briefcase } from 'lucide-react'
import Section, { Empty } from './Section.jsx'
import { profile, skills, experience, certifications, education } from '../data/portfolio.js'

export function About() {
  return (
    <Section id="about" eyebrow="// 02 — About" title="About Me">
      <div className="max-w-3xl space-y-4 leading-relaxed text-slate-400">
        {profile.about.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="// 04 — Skills" title="Technical Skills" tint="bg-navy/40">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((g) => (
          <div key={g.category} className="glass glass-hover p-6">
            <h3 className="mb-4 font-display text-lg text-white">{g.category}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => <span key={s} className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-slate-200">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="// 07 — Experience" title="Experience">
      {experience.length === 0 ? <Empty text="Experience will appear here once added from the admin dashboard." /> : (
        <div className="space-y-4">
          {experience.map((e, i) => (
            <div key={i} className="glass p-6"><Briefcase size={18} className="mb-2 text-accent" />
              <h3 className="text-white">{e.role} · {e.org}</h3><p className="font-mono text-xs text-slate-500">{e.period}</p><p className="mt-2 text-sm text-slate-400">{e.details}</p></div>
          ))}
        </div>
      )}
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="// 08 — Certifications" title="Certifications" tint="bg-navy/40">
      {certifications.length === 0 ? <Empty text="Certifications will appear here once added from the admin dashboard." /> : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <div key={i} className="glass p-6"><Award size={18} className="mb-2 text-accent" />
              <h3 className="text-white">{c.name}</h3><p className="text-sm text-slate-400">{c.issuer} · {c.year}</p></div>
          ))}
        </div>
      )}
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" eyebrow="// 09 — Education" title="Education">
      <div className="space-y-4">
        {education.map((e, i) => (
          <div key={i} className="glass p-6"><GraduationCap size={18} className="mb-2 text-accent" />
            <h3 className="text-white">{e.degree}</h3><p className="text-sm text-slate-400">{e.school} · {e.period}</p><p className="mt-2 text-sm text-slate-500">{e.details}</p></div>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  const rows = [
    [Mail, 'Email', profile.email, profile.email && `mailto:${profile.email}`],
    [Phone, 'Phone', profile.phone, profile.phone && `tel:${profile.phone}`],
    [MapPin, 'Location', profile.location, ''],
  ]
  return (
    <Section id="contact" eyebrow="// 10 — Contact" title="Get In Touch" tint="bg-navy/40">
      <div className="grid gap-4 md:grid-cols-3">
        {rows.map(([Icon, label, val, href]) => (
          <div key={label} className="glass glass-hover p-6">
            <Icon size={20} className="text-accent" />
            <p className="mt-3 font-mono text-xs uppercase text-slate-500">{label}</p>
            {val ? (href ? <a href={href} className="text-white hover:text-accent">{val}</a> : <p className="text-white">{val}</p>)
              : <p className="text-slate-600">Not added yet</p>}
          </div>
        ))}
      </div>
      <p className="mt-16 text-center font-mono text-xs text-slate-600">© {new Date().getFullYear()} MD JUBAER</p>
    </Section>
  )
}
