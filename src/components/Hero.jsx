
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Network,
  Code2,
  Trophy
} from 'lucide-react'

import NetworkBg from './NetworkBg.jsx'
import { profile } from '../data/portfolio.js'
import JubaerPhoto from '../assets/jubaer.png'

const Ext = ({ href, children, label }) => (
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/5 text-slate-200 transition duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-blue-500/20 hover:text-cyan-300"
    >
      {children}
    </a>
  ) : (
    <span
      title="Add this link in portfolio settings"
      aria-label={label}
      className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-slate-500"
    >
      {children}
    </span>
  )
)

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#020d20] pt-20 pb-6"
    >
      <NetworkBg />

      <div className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-cyan-400" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >

          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-white sm:text-sm">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
            Available for Opportunities
          </div>

          <p className="mb-2 text-2xl font-semibold text-white sm:text-3xl">
            Hi, I'm
          </p>

          <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            MD
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              JUBAER
            </span>
          </h1>

          <div className="mt-5">
            <h2 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
              Network Engineer & Software Developer
            </h2>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <a
              href="#projects"
              className="btn btn-primary flex items-center gap-2 rounded-full px-6 py-3 text-sm shadow-lg shadow-blue-500/20"
            >
              View My Projects
              <ArrowRight size={17} />
            </a>

            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                download
                className="btn btn-ghost flex items-center gap-2 rounded-full px-6 py-3 text-sm"
              >
                <Download size={17} />
                Download CV
              </a>
            ) : (
              <button
                disabled
                title="CV not uploaded yet"
                className="btn btn-ghost flex cursor-not-allowed items-center gap-2 rounded-full px-6 py-3 text-sm opacity-50"
              >
                <Download size={17} />
                Download CV
              </button>
            )}

          </div>

          <div className="mt-5 flex gap-3">
            <Ext href={profile.github} label="GitHub">
              <Github size={20} />
            </Ext>

            <Ext href={profile.linkedin} label="LinkedIn">
              <Linkedin size={20} />
            </Ext>

            <Ext
              href={profile.email ? `mailto:${profile.email}` : ''}
              label="Email"
            >
              <Mail size={20} />
            </Ext>
          </div>

          {/* PROFESSIONAL HIGHLIGHTS */}
          <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl border border-blue-500/30 bg-[#061a35]/90 p-3 shadow-xl backdrop-blur-lg lg:grid-cols-4">

            <div className="flex items-center gap-2 p-1">
              <GraduationCap className="shrink-0 text-cyan-400" size={25} />
              <div>
                <p className="text-xs font-semibold text-white">CSE Student</p>
                <p className="text-[10px] text-slate-400">Education</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1">
              <Network className="shrink-0 text-cyan-400" size={25} />
              <div>
                <p className="text-xs font-semibold text-white">Networking</p>
                <p className="text-[10px] text-slate-400">Specialization</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1">
              <Code2 className="shrink-0 text-cyan-400" size={25} />
              <div>
                <p className="text-xs font-semibold text-white">Development</p>
                <p className="text-[10px] text-slate-400">Skills</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1">
              <Trophy className="shrink-0 text-cyan-400" size={25} />
              <div>
                <p className="text-xs font-semibold text-white">Problem Solver</p>
                <p className="text-[10px] text-slate-400">Innovation</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT PORTRAIT AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >

          <div className="absolute inset-8 rounded-full bg-blue-500/30 blur-[80px]" />

          <div className="absolute inset-5 rounded-full border border-blue-400/30" />

          <div className="absolute inset-12 rounded-full border-2 border-cyan-400/50 shadow-[0_0_45px_rgba(0,160,255,0.25)]" />

          <div className="relative z-10 mx-auto flex h-[340px] items-end justify-center overflow-hidden rounded-[48%_48%_15%_15%] bg-gradient-to-b from-blue-500/20 via-blue-900/30 to-transparent p-2 sm:h-[400px] lg:h-[470px]">

            <img
              src={JubaerPhoto}
              alt="MD Jubaer"
              className="relative z-10 h-full w-full object-contain object-bottom"
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}
