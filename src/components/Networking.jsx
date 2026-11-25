import { useState } from 'react'
import * as Icons from 'lucide-react'
import Section from './Section.jsx'
import { networkTopics } from '../data/portfolio.js'

// Simple topology: Router -> Switch -> 3 VLAN groups. The highlighted layer changes with the selected topic.
function Topology({ active }) {
  const hot = (ids) => (ids.includes(active) ? '#38bdf8' : '#334155')
  const nodes = [
    { x: 200, y: 40, label: 'Router', ids: ['rs', 'cisco', 'mikrotik', 'routing', 'isp'] },
    { x: 200, y: 130, label: 'L3 Switch', ids: ['rs', 'vlan', 'cisco', 'infra'] },
    { x: 70, y: 230, label: 'VLAN 10', ids: ['vlan', 'security'] },
    { x: 200, y: 230, label: 'VLAN 20', ids: ['vlan', 'security'] },
    { x: 330, y: 230, label: 'VLAN 30', ids: ['vlan', 'security'] },
  ]
  const links = [[0, 1], [1, 2], [1, 3], [1, 4]]
  return (
    <svg viewBox="0 0 400 290" className="w-full" role="img" aria-label="Network topology diagram">
      <text x="372" y="22" fill={hot(['isp', 'fiber'])} fontSize="10" textAnchor="end" fontFamily="monospace">ISP / FIBER UPLINK ↑</text>
      <line x1="200" y1="0" x2="200" y2="20" stroke={hot(['isp', 'fiber'])} strokeWidth="2" strokeDasharray="4 3" />
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y + 16} x2={nodes[b].x} y2={nodes[b].y - 16}
          stroke={hot([...nodes[a].ids, ...nodes[b].ids].filter((x) => nodes[a].ids.includes(x) && nodes[b].ids.includes(x)))} strokeWidth="2" />
      ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x - 45} y={n.y - 16} width="90" height="32" rx="8" fill="#0a1224" stroke={hot(n.ids)} strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="monospace">{n.label}</text>
        </g>
      ))}
    </svg>
  )
}

export default function Networking() {
  const [active, setActive] = useState(networkTopics[0].id)
  const cur = networkTopics.find((t) => t.id === active)
  const CurIcon = Icons[cur.icon]
  return (
    <Section id="networking" eyebrow=" 03 — Network Engineering" title="Networking Showcase" tint="bg-navy/40">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {networkTopics.map((t) => {
            const Icon = Icons[t.icon]
            const on = t.id === active
            return (
              <button key={t.id} onClick={() => setActive(t.id)}
                className={`glass glass-hover p-4 text-left ${on ? 'border-accent/60 bg-accent/5' : ''}`}>
                <Icon size={20} className={on ? 'text-accent' : 'text-slate-500'} />
                <p className="mt-3 text-sm font-medium text-white">{t.title}</p>
              </button>
            )
          })}
        </div>
        <div className="glass p-6 lg:sticky lg:top-24 lg:self-start">
          <Topology active={active} />
          <div className="mt-4 flex items-center gap-2 text-white"><CurIcon size={18} className="text-accent" /><h3 className="font-display text-lg">{cur.title}</h3></div>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{cur.text}</p>
        </div>
      </div>
    </Section>
  )
}
