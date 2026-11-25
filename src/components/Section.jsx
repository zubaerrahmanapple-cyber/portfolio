import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children, tint = '' }) {
  return (
    <section id={id} className={`relative py-24 ${tint}`}>
      <div className="mx-auto max-w-7xl px-5">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="mb-12 font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export const Empty = ({ text }) => (
  <div className="glass border-dashed p-10 text-center font-mono text-sm text-slate-500">{text}</div>
)
