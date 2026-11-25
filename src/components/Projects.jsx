
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Github,
  ExternalLink,
  X,
  ImageIcon,
  FileText,
  Video,
  Target,
  Workflow,
  BarChart3,
  Images,
  Layers,
  ChevronRight,
  Network,
  Cpu,
  Brain,
  Code2,
  Smartphone,
  Server,
  Database,
  CheckCircle2,
  FileCode,
  Monitor
} from 'lucide-react'

import Section, { Empty } from './Section.jsx'
import { projects, projectCategories } from '../data/portfolio.js'

// Support both old and new portfolio data property names
const getName = p => p.name || p.title || 'Untitled Project'
const getTech = p => p.tech || p.technologies || []
const getDescription = p => p.description || p.overview?.description || ''
const getImage = p => p.image || ''
const getCategory = p => p.category || ''

const getImageSrc = item =>
  typeof item === 'string' ? item : item?.image || item?.src || ''

const getImageCaption = item =>
  typeof item === 'string' ? '' : item?.caption || item?.title || ''

// Reusable external link button
const LinkBtn = ({ href, icon: Icon, children }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={e => e.stopPropagation()}
      className="btn btn-ghost !px-4 !py-2"
    >
      <Icon size={14} />
      {children}
    </a>
  ) : (
    <span
      className="btn btn-ghost cursor-not-allowed !px-4 !py-2 opacity-40"
      title="Link not added yet"
    >
      <Icon size={14} />
      {children}
    </span>
  )

// Project image
const ProjectImage = ({ src, alt, className = '' }) =>
  src ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
    />
  ) : (
    <div className={`grid place-items-center bg-gradient-to-br from-electric/10 to-accent/10 ${className}`}>
      <ImageIcon size={38} strokeWidth={1} className="text-accent/60" />
    </div>
  )

// Section heading
const DetailHeading = ({ icon: Icon, number, title }) => (
  <div className="mb-5 flex items-center gap-3">
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
      <Icon size={19} />
    </div>

    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
        {number}
      </p>
      <h4 className="font-display text-lg text-white">
        {title}
      </h4>
    </div>
  </div>
)

// Information card
const InfoCard = ({ title, text }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
    <h5 className="mb-2 text-sm font-semibold text-white">
      {title}
    </h5>
    <p className="text-sm leading-relaxed text-slate-400">
      {text || 'Information will be updated soon.'}
    </p>
  </div>
)

// Reusable image gallery
const ImageGallery = ({ items = [], emptyText }) => {
  const validItems = items.filter(getImageSrc)

  return validItems.length > 0 ? (
    <div className="grid gap-4 sm:grid-cols-2">
      {validItems.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
        >
          <img
            src={getImageSrc(item)}
            alt={getImageCaption(item) || `Project image ${index + 1}`}
            loading="lazy"
            className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
          />

          {getImageCaption(item) && (
            <p className="p-3 text-xs text-slate-400">
              {getImageCaption(item)}
            </p>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div className="rounded-xl border border-dashed border-white/15 p-8 text-center">
      <ImageIcon size={32} className="mx-auto mb-3 text-accent/60" />
      <p className="text-sm text-slate-400">
        {emptyText || 'Project photos and screenshots will appear here.'}
      </p>
    </div>
  )
}

// Survey data table
const SurveyTable = ({ readings = [] }) => {
  if (!readings.length) {
    return (
      <div className="rounded-xl border border-dashed border-white/15 p-6 text-center">
        <BarChart3 size={28} className="mx-auto mb-3 text-accent/60" />
        <p className="text-sm text-slate-400">
          Actual survey readings and test results will be added here.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/5 text-slate-300">
          <tr>
            {Object.keys(readings[0]).map(key => (
              <th key={key} className="whitespace-nowrap px-4 py-3">
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {readings.map((item, index) => (
            <tr key={index} className="border-t border-white/10">
              {Object.values(item).map((value, i) => (
                <td key={i} className="px-4 py-3 text-slate-400">
                  {String(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Survey graph
const SurveyGraph = ({ readings = [] }) => {
  const numericEntries = readings
    .map((item, index) => {
      const values = Object.values(item)

      const numericValue = values
        .slice(1)
        .map(Number)
        .find(value => Number.isFinite(value))

      return numericValue === undefined
        ? null
        : {
            label: values[0] ?? `Test ${index + 1}`,
            value: numericValue
          }
    })
    .filter(Boolean)

  if (!numericEntries.length) return null

  const max = Math.max(...numericEntries.map(item => item.value), 1)

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <h5 className="mb-5 text-sm font-semibold text-white">
        Survey Visualization
      </h5>

      <div className="flex h-48 items-end gap-3 overflow-x-auto border-b border-l border-white/10 px-2">
        {numericEntries.map((item, index) => (
          <div
            key={index}
            className="flex h-full min-w-12 flex-1 flex-col items-center justify-end gap-2"
          >
            <span className="text-[10px] text-slate-300">
              {item.value}
            </span>

            <div
              className="w-full rounded-t-md bg-gradient-to-t from-electric/40 to-accent"
              style={{
                height: `${Math.max((item.value / max) * 75, 3)}%`
              }}
            />

            <span className="max-w-16 truncate text-[9px] text-slate-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Reusable code configuration
const CodeCard = ({ item }) => (
  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080f1d]">
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <FileCode size={16} className="text-accent" />
      <span className="text-sm font-semibold text-slate-200">
        {item.title || 'Configuration'}
      </span>
    </div>

    <pre className="overflow-x-auto p-4 text-xs leading-6 text-emerald-300">
      <code>{item.code || ''}</code>
    </pre>
  </div>
)

// Common overview section
function OverviewSection({ project }) {
  const overview = project.overview

  if (typeof overview === 'string') {
    return (
      <section>
        <DetailHeading icon={Target} number="01" title="Project Overview" />
        <p className="text-sm leading-relaxed text-slate-300">
          {overview || getDescription(project)}
        </p>
      </section>
    )
  }

  return (
    <section>
      <DetailHeading icon={Target} number="01" title="Project Overview" />

      <div className="grid gap-3 md:grid-cols-3">
        <InfoCard title="Objective" text={overview?.objective} />
        <InfoCard title="Problem" text={overview?.problem} />
        <InfoCard title="Solution" text={overview?.solution} />
      </div>
    </section>
  )
}

// Common working process
function WorkingProcessSection({ steps }) {
  if (!steps?.length) return null

  return (
    <section>
      <DetailHeading icon={Workflow} number="02" title="Working Process" />

      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 font-mono text-xs text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="pt-1">
              <p className="text-sm leading-relaxed text-slate-300">
                {typeof step === 'string' ? step : step.title}
              </p>
              {typeof step === 'object' && step.description && (
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Networking details
function NetworkingDetails({ project }) {
  return (
    <>
      {project.topology && (
        <section>
          <DetailHeading icon={Network} number="03" title="Network Topology" />

          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            {project.topology.description || 'Network topology and design.'}
          </p>

          <ImageGallery
            items={project.topology.images || []}
            emptyText="Packet Tracer topology screenshots will be added here."
          />
        </section>
      )}

      {project.configurations?.length > 0 && (
        <section>
          <DetailHeading icon={FileCode} number="04" title="Router & Switch Configurations" />

          <div className="space-y-4">
            {project.configurations.map((item, index) => (
              <CodeCard key={index} item={item} />
            ))}
          </div>
        </section>
      )}

      {project.tests?.length > 0 && (
        <section>
          <DetailHeading icon={CheckCircle2} number="05" title="Connectivity Tests & Outputs" />

          <div className="space-y-5">
            {project.tests.map((test, index) => (
              <div key={index}>
                <InfoCard
                  title={test.title || `Test ${index + 1}`}
                  text={test.description}
                />

                {test.image && (
                  <div className="mt-3">
                    <ImageGallery items={[test.image]} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <DetailHeading icon={Images} number="06" title="Network Lab Gallery" />
        <ImageGallery
          items={project.gallery || []}
          emptyText="Packet Tracer screenshots and command outputs will appear here."
        />
      </section>
    </>
  )
}

// IoT details
function IoTDetails({ project }) {
  const survey = project.surveyData

  return (
    <>
      {project.components?.length > 0 && (
        <section>
          <DetailHeading icon={Cpu} number="03" title="Hardware & Components" />

          <div className="grid gap-3 sm:grid-cols-2">
            {project.components.map((item, index) => (
              <InfoCard
                key={index}
                title={typeof item === 'string' ? item : item.name}
                text={typeof item === 'string' ? 'Project hardware component' : item.description}
              />
            ))}
          </div>
        </section>
      )}

      {project.circuit && (
        <section>
          <DetailHeading icon={Workflow} number="04" title="Circuit Diagram" />

          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            {project.circuit.description || 'Hardware circuit design.'}
          </p>

          <ImageGallery
            items={project.circuit.images || []}
            emptyText="Circuit diagrams will be added here."
          />
        </section>
      )}

      {survey && (
        <section>
          <DetailHeading icon={BarChart3} number="05" title="Sensor Readings & Results" />

          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            {survey.description || 'Sensor readings and project results.'}
          </p>

          <div className="space-y-5">
            <SurveyTable readings={survey.readings || []} />
            <SurveyGraph readings={survey.readings || []} />

            {survey.results?.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {survey.results.map((result, index) => (
                  <InfoCard
                    key={index}
                    title={result.title || `Result ${index + 1}`}
                    text={result.description || result.value}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section>
        <DetailHeading icon={Images} number="06" title="IoT Project Gallery" />
        <ImageGallery items={project.gallery || []} />
      </section>
    </>
  )
}

// Machine Learning details
function MLDetails({ project }) {
  const survey = project.surveyData

  return (
    <>
      {project.dataset && (
        <section>
          <DetailHeading icon={Database} number="03" title="Dataset Information" />

          <InfoCard
            title={project.dataset.source || 'Dataset'}
            text={project.dataset.description}
          />

          {project.dataset.size && (
            <p className="mt-3 text-sm text-slate-400">
              Dataset Size: <span className="text-white">{project.dataset.size}</span>
            </p>
          )}

          {project.dataset.attributes?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.dataset.attributes.map((attribute, index) => (
                <span key={index} className="rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300">
                  {attribute}
                </span>
              ))}
            </div>
          )}
        </section>
      )}

      {project.preprocessing && (
        <section>
          <DetailHeading icon={Workflow} number="04" title="Data Preprocessing" />
          <p className="text-sm leading-relaxed text-slate-400">
            {typeof project.preprocessing === 'string'
              ? project.preprocessing
              : project.preprocessing.description}
          </p>
        </section>
      )}

      {project.model && (
        <section>
          <DetailHeading icon={Brain} number="05" title="Model & Evaluation" />

          <InfoCard
            title={project.model.algorithm || 'Machine Learning Model'}
            text={project.model.trainingDescription}
          />

          {project.model.metrics?.length > 0 && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.model.metrics.map((metric, index) => (
                <InfoCard
                  key={index}
                  title={metric.name}
                  text={String(metric.value)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {survey && (
        <section>
          <DetailHeading icon={BarChart3} number="06" title="Data Analysis & Results" />

          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            {survey.description || 'Dataset analysis and model results.'}
          </p>

          <div className="space-y-5">
            <SurveyTable readings={survey.readings || []} />
            <SurveyGraph readings={survey.readings || []} />
          </div>
        </section>
      )}

      {project.visualizations?.length > 0 && (
        <section>
          <DetailHeading icon={Images} number="07" title="Model Visualizations" />
          <ImageGallery items={project.visualizations} />
        </section>
      )}

      <section>
        <DetailHeading icon={Images} number="08" title="Machine Learning Gallery" />
        <ImageGallery items={project.gallery || []} />
      </section>
    </>
  )
}

// Web development details
function WebDetails({ project }) {
  return (
    <>
      {project.features?.length > 0 && (
        <section>
          <DetailHeading icon={CheckCircle2} number="03" title="Key Features" />
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((item, index) => (
              <InfoCard
                key={index}
                title={typeof item === 'string' ? `Feature ${index + 1}` : item.title}
                text={typeof item === 'string' ? item : item.description}
              />
            ))}
          </div>
        </section>
      )}

      {project.architecture && (
        <section>
          <DetailHeading icon={Layers} number="04" title="System Architecture" />
          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            {project.architecture.description || ''}
          </p>
          <ImageGallery items={project.architecture.images || []} />
        </section>
      )}

      <section>
        <DetailHeading icon={Monitor} number="05" title="Website Screenshots" />
        <ImageGallery items={project.screenshots || project.gallery || []} />
      </section>
    </>
  )
}

// Android details
function AndroidDetails({ project }) {
  return (
    <>
      {project.features?.length > 0 && (
        <section>
          <DetailHeading icon={CheckCircle2} number="03" title="App Features" />
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((item, index) => (
              <InfoCard
                key={index}
                title={typeof item === 'string' ? `Feature ${index + 1}` : item.title}
                text={typeof item === 'string' ? item : item.description}
              />
            ))}
          </div>
        </section>
      )}

      {project.architecture && (
        <section>
          <DetailHeading icon={Layers} number="04" title="App Architecture" />
          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            {project.architecture.description || ''}
          </p>
          <ImageGallery items={project.architecture.images || []} />
        </section>
      )}

      {project.tests?.length > 0 && (
        <section>
          <DetailHeading icon={CheckCircle2} number="05" title="Application Testing" />
          <div className="grid gap-3 sm:grid-cols-2">
            {project.tests.map((test, index) => (
              <InfoCard
                key={index}
                title={test.title || `Test ${index + 1}`}
                text={test.description}
              />
            ))}
          </div>
        </section>
      )}

      <section>
        <DetailHeading icon={Smartphone} number="06" title="Application Screenshots" />
        <ImageGallery items={project.screenshots || project.gallery || []} />
      </section>
    </>
  )
}

// Backend details
function BackendDetails({ project }) {
  return (
    <>
      {project.endpoints?.length > 0 && (
        <section>
          <DetailHeading icon={Server} number="03" title="API Endpoints" />

          <div className="space-y-3">
            {project.endpoints.map((endpoint, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-accent/10 px-3 py-1 font-mono text-xs font-bold text-accent">
                    {endpoint.method}
                  </span>
                  <code className="text-sm text-white">{endpoint.path}</code>
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  {endpoint.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.database && (
        <section>
          <DetailHeading icon={Database} number="04" title="Database Design" />
          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            {project.database.description || ''}
          </p>
          <ImageGallery items={project.database.images || []} />
        </section>
      )}

      {project.apiTests?.length > 0 && (
        <section>
          <DetailHeading icon={CheckCircle2} number="05" title="API Testing" />
          <div className="grid gap-3 sm:grid-cols-2">
            {project.apiTests.map((test, index) => (
              <InfoCard
                key={index}
                title={test.title || `API Test ${index + 1}`}
                text={test.description}
              />
            ))}
          </div>
        </section>
      )}

      <section>
        <DetailHeading icon={Images} number="06" title="Backend Gallery" />
        <ImageGallery items={project.gallery || []} />
      </section>
    </>
  )
}

// Project-specific detail renderer
function CategoryDetails({ project }) {
  switch (getCategory(project)) {
    case 'Networking':
      return <NetworkingDetails project={project} />

    case 'IoT':
      return <IoTDetails project={project} />

    case 'Machine Learning':
      return <MLDetails project={project} />

    case 'Web Development':
      return <WebDetails project={project} />

    case 'Android':
      return <AndroidDetails project={project} />

    case 'Backend':
      return <BackendDetails project={project} />

    default:
      return (
        <section>
          <DetailHeading icon={Images} number="03" title="Project Gallery" />
          <ImageGallery items={project.gallery || []} />
        </section>
      )
  }
}

// Main component
export default function Projects() {
  const [cat, setCat] = useState('All')
  const [sel, setSel] = useState(null)

  const list = cat === 'All'
    ? projects
    : projects.filter(p => getCategory(p) === cat)

  // Lock background scrolling while popup is open
  useEffect(() => {
    if (!sel) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = e => {
      if (e.key === 'Escape') setSel(null)
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [sel])

  const selectedName = sel ? getName(sel) : ''

  const resources = sel?.resources || {}

  return (
    <Section id="projects" eyebrow="05 — Projects" title="Projects & Labs">

      {/* Category filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map(c => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              cat === c
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project cards */}
      {list.length === 0 ? (
        <Empty text="No projects in this category yet." />
      ) : (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {list.map((p, index) => {
              const name = getName(p)
              const tech = getTech(p)

              return (
                <motion.article
                  layout
                  key={p.id || name || index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="glass glass-hover cursor-pointer overflow-hidden"
                  onClick={() => setSel(p)}
                >
                  <div className="aspect-video overflow-hidden">
                    <ProjectImage
                      src={getImage(p)}
                      alt={name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <span className="font-mono text-[11px] uppercase text-accent">
                      {getCategory(p)}
                    </span>

                    <h3 className="mt-1 font-display text-lg text-white">
                      {name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                      {getDescription(p)}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {tech.map((t, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-accent">
                      <span>Explore Project Details</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Project Details Popup */}
      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-3 backdrop-blur-md sm:p-5"
            onClick={() => setSel(null)}
          >
            <motion.div
              initial={{ y: 25, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="glass relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden bg-navy"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedName} project details`}
            >

              {/* Popup Header */}
              <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between border-b border-white/10 bg-navy/95 px-5 py-4 backdrop-blur-xl">
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    PROJECT SHOWCASE
                  </span>
                  <h3 className="truncate font-display text-lg text-white sm:text-xl">
                    {selectedName}
                  </h3>
                </div>

                <button
                  onClick={() => setSel(null)}
                  aria-label="Close project details"
                  className="ml-3 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-red-500/20 hover:text-red-400"
                >
                  <X size={19} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">

                {/* Cover Image */}
                <div className="relative aspect-video max-h-[340px] overflow-hidden">
                  <ProjectImage
                    src={getImage(sel)}
                    alt={selectedName}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full border border-accent/30 bg-navy/70 px-3 py-1 font-mono text-xs text-accent backdrop-blur-md">
                      {getCategory(sel)}
                    </span>

                    <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                      {selectedName}
                    </h2>
                  </div>
                </div>

                <div className="space-y-10 p-5 sm:p-8">

                  {/* Project Intro */}
                  <section>
                    <p className="mb-3 text-sm leading-relaxed text-slate-300">
                      {getDescription(sel)}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {getTech(sel).map((t, index) => (
                        <span
                          key={index}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Project Overview */}
                  <OverviewSection project={sel} />

                  {/* Working Process */}
                  <WorkingProcessSection steps={sel.workingProcess} />

                  {/* Category-specific content */}
                  <CategoryDetails project={sel} />

                  {/* Technologies */}
                  {getTech(sel).length > 0 && (
                    <section>
                      <DetailHeading icon={Layers} number="09" title="Technologies Used" />

                      <div className="flex flex-wrap gap-2">
                        {getTech(sel).map((t, index) => (
                          <span
                            key={index}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Project Resources */}
                  <section>
                    <DetailHeading icon={Layers} number="10" title="Project Resources" />

                    <div className="flex flex-wrap gap-3">
                      <LinkBtn
                        href={resources.github || sel.github}
                        icon={Github}
                      >
                        GitHub
                      </LinkBtn>

                      <LinkBtn
                        href={resources.report || sel.report}
                        icon={FileText}
                      >
                        Report PDF
                      </LinkBtn>

                      <LinkBtn
                        href={resources.video || sel.video}
                        icon={Video}
                      >
                        Demo Video
                      </LinkBtn>

                      <LinkBtn
                        href={resources.demo || sel.demo}
                        icon={ExternalLink}
                      >
                        Live Demo
                      </LinkBtn>
                    </div>

                    {Array.isArray(resources) && resources.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {resources.map((resource, index) => (
                          <LinkBtn
                            key={index}
                            href={typeof resource === 'string' ? resource : resource.url}
                            icon={ExternalLink}
                          >
                            {typeof resource === 'string' ? 'Project Resource' : resource.title || 'Project Resource'}
                          </LinkBtn>
                        ))}
                      </div>
                    )}
                  </section>

                  {/* Footer */}
                  <div className="border-t border-white/10 pt-6 text-center">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      MD JUBAER · PROJECT SHOWCASE
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Thanks for exploring this project.
                    </p>
                  </div>

                </div>
              </div>

              {/* Popup Bottom Bar */}
              <div className="flex shrink-0 items-center justify-between border-t border-white/10 bg-navy/95 px-5 py-3 backdrop-blur-xl">
                <span className="text-xs text-slate-500">
                  Scroll to explore ↓
                </span>

                <button
                  onClick={() => setSel(null)}
                  className="rounded-lg bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition hover:bg-accent/20"
                >
                  Close Details
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </Section>
  )
}
