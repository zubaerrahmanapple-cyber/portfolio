import { useEffect, useRef } from 'react'

export default function NetworkBg() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let raf, w, h, nodes
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const init = () => {
      w = c.width = c.offsetWidth
      h = c.height = c.offsetHeight
      const n = Math.min(60, Math.floor((w * h) / 22000))
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const a of nodes) {
        if (!reduce) { a.x += a.vx; a.y += a.vy }
        if (a.x < 0 || a.x > w) a.vx *= -1
        if (a.y < 0 || a.y > h) a.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          if (d < 150) {
            ctx.strokeStyle = `rgba(56,189,248,${0.18 * (1 - d / 150)})`
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke()
          }
        }
        ctx.fillStyle = 'rgba(56,189,248,.7)'
        ctx.beginPath(); ctx.arc(nodes[i].x, nodes[i].y, 1.8, 0, 7); ctx.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }
    init(); draw()
    window.addEventListener('resize', init)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
