import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, PlayCircle,
  Activity, LayoutDashboard, BarChart3, ShieldCheck,
  Mail, Phone, MapPin, Calendar, FileText,
} from 'lucide-react'
import Header from './components/Header'
import image from './assets/image.png'
import { CALENDLY_URL, GOOGLE_FORM } from './config'

const HERO_IMAGE = image

/** Fires a GA4 custom event (no-op if gtag not loaded yet) */
const track = (event, label) =>
  window.gtag?.('event', event, { event_category: 'CTA', event_label: label })

const features = [
  { icon: Activity,        title: 'Real-Time Monitoring',   bg: 'bg-blue-50',   color: 'text-blue-600'   },
  { icon: LayoutDashboard, title: 'Centralized Management', bg: 'bg-indigo-50', color: 'text-indigo-600' },
  { icon: BarChart3,       title: 'Advanced Analytics',     bg: 'bg-cyan-50',   color: 'text-cyan-600'   },
  { icon: ShieldCheck,     title: 'Role-Based Access',      bg: 'bg-violet-50', color: 'text-violet-600' },
]

const stats = [
  { value: '43%',   label: 'Downtime reduced' },
  { value: '99.9%', label: 'Uptime SLA'       },
  { value: '< 48h', label: 'Time to live'     },
]

const companies = ['Siemens', 'Bosch', 'ABB', 'Schneider', 'Honeywell', 'Rockwell']

const App = () => {
  const [kpis, setKpis] = useState({ efficiency: 94.7, downtime: 43 })

  useEffect(() => {
    const id = setInterval(() => {
      setKpis({
        efficiency: +(93.0 + Math.random() * 3.5).toFixed(1),
        downtime: Math.floor(40 + Math.random() * 7),
      })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════════
          HERO — fits exactly in h-screen
      ════════════════════════════════════════════ */}
      <div className="h-screen flex flex-col overflow-hidden relative">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)',
            backgroundSize: '28px 28px',
            opacity: 0.65,
          }}
        />
        {/* Blue ambient glow */}
        <div
          className="absolute -top-32 -left-32 w-150 h-150 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)' }}
        />

        <Header />

        <main className="relative flex-1 min-h-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto h-full py-5">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 xl:gap-12 h-full items-center">

              {/* ── Left: copy ── */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="inline-flex self-start items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" aria-hidden="true" />
                  Industrial Analytics Platform
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-[3.1rem] font-bold text-slate-900 leading-[1.07] tracking-tight mb-4">
                  Optimize Your Production.{' '}
                  <span className="text-blue-600">In Real Time.</span>
                </h1>

                <p className="text-base sm:text-[1.05rem] text-slate-500 leading-relaxed mb-7 max-w-md">
                  ProLine gives manufacturing teams one platform to monitor operations, eliminate downtime, and make data-driven decisions — across every line.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('book_demo_click', 'Hero-Primary')}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-px text-sm"
                  >
                    Request Demo
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-slate-700 font-semibold px-5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 text-sm"
                  >
                    <PlayCircle size={15} className="text-blue-500" aria-hidden="true" />
                    Watch Overview
                  </a>
                </div>

                <div className="flex gap-7 mb-7" role="list" aria-label="Key metrics">
                  {stats.map((s) => (
                    <div key={s.label} role="listitem">
                      <p className="text-2xl font-bold text-blue-600 leading-none mb-0.5">{s.value}</p>
                      <p className="text-xs text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-slate-100 mb-5" aria-hidden="true" />

                {/* Mini feature grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {features.map((f) => {
                    const Icon = f.icon
                    return (
                      <div
                        key={f.title}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white transition-all duration-200"
                      >
                        <div className={`shrink-0 w-7 h-7 ${f.bg} rounded-lg flex items-center justify-center`}>
                          <Icon size={14} className={f.color} aria-hidden="true" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 leading-snug">{f.title}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* ── Right: industrial image ── */}
              <motion.div
                className="relative h-[clamp(360px,62vh,520px)] w-full"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-900/10">
                  <img
                    src={HERO_IMAGE}
                    alt="Impianto di produzione automatizzato con linee robotizzate"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  {/* Floating KPI card — live animated */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.5 }}
                    className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl shadow-xl shadow-slate-900/10"
                    aria-label="Live production KPIs"
                  >
                    {/* LIVE header */}
                    <div className="flex items-center justify-center gap-1.5 py-2 border-b border-slate-100">
                      <span className="relative flex w-2 h-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Live</span>
                    </div>

                    {/* Metrics */}
                    <div className="flex items-center justify-between gap-4 px-5 py-3">
                      <div className="text-center flex-1">
                        <p className="text-[10px] text-slate-400 mb-1">Production Efficiency</p>
                        <div className="overflow-hidden h-6 flex items-center justify-center">
                          <AnimatePresence mode="popLayout" initial={false}>
                            <motion.p
                              key={kpis.efficiency}
                              initial={{ y: -16, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 16, opacity: 0 }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                              className="text-lg font-bold text-slate-900 leading-none"
                            >
                              {kpis.efficiency}<span className="text-xs font-medium text-slate-400">%</span>
                            </motion.p>
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="w-px h-8 bg-slate-200 shrink-0" aria-hidden="true" />

                      <div className="text-center flex-1">
                        <p className="text-[10px] text-slate-400 mb-1">Downtime Reduced</p>
                        <div className="overflow-hidden h-6 flex items-center justify-center">
                          <AnimatePresence mode="popLayout" initial={false}>
                            <motion.p
                              key={kpis.downtime}
                              initial={{ y: -16, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 16, opacity: 0 }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                              className="text-lg font-bold text-emerald-600 leading-none"
                            >
                              ↓ {kpis.downtime}<span className="text-xs font-medium text-slate-400">%</span>
                            </motion.p>
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="w-px h-8 bg-slate-200 shrink-0" aria-hidden="true" />

                      <div className="text-center flex-1">
                        <p className="text-[10px] text-slate-400 mb-1">OEE Score</p>
                        <p className="text-lg font-bold text-blue-600 leading-none">A+</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </main>
      </div>

      {/* ═══════════════════════════════════════════
          TRUSTED BY
      ════════════════════════════════════════════ */}
      <section className="py-10 border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-7"
          >
            Trusted by manufacturing teams worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 lg:gap-x-14"
            aria-label="Aziende partner"
          >
            {companies.map((name) => (
              <span
                key={name}
                className="text-slate-300 font-semibold text-xl tracking-tight hover:text-slate-400 transition-colors duration-200 cursor-default select-none"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT
          CTA 1 → Calendly (prenota una demo)   → GA event: book_demo_click
          CTA 2 → Google Form (ricevi materiale) → GA event: form_open_click
      ════════════════════════════════════════════ */}
      <section id="contact" className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">Contatti</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Inizia oggi.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
              Prenota una demo di 30 minuti per scoprire come ProLine può ottimizzare la tua produzione,
              oppure lascia i tuoi dati per ricevere aggiornamenti, webinar e materiali informativi.
            </p>
          </motion.div>

          {/* Two CTA cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">

            {/* Card 1 — Calendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="relative bg-blue-600 rounded-2xl p-8 flex flex-col overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)' }}
              />
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-5">
                <Calendar size={22} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Prenota una Demo Gratuita</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6 flex-1">
                30 minuti con un nostro specialista per illustrarti i vantaggi del prodotto sulla tua realtà produttiva.
                Scegli tu giorno e orario.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('book_demo_click', 'Contact-Calendly')}
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 font-semibold px-5 py-3 rounded-lg transition-all duration-200 hover:shadow-md text-sm self-start"
              >
                Scegli data e ora
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </motion.div>

            {/* Card 2 — Google Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <FileText size={22} className="text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-2">Rimani Aggiornato</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Lascia nome, ruolo, azienda e email per ricevere materiale informativo, inviti a webinar e
                aggiornamenti esclusivi su ProLine Analytics.
              </p>
              <a
                href={GOOGLE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('form_open_click', 'Contact-GoogleForm')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-px text-sm self-start"
              >
                Lascia i tuoi dati
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </motion.div>

          </div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-slate-400"
          >
            <span className="flex items-center justify-center gap-2">
              <Mail size={14} className="text-blue-400 shrink-0" aria-hidden="true" />
              blumentis@pec.it
            </span>
            <span className="flex items-center justify-center gap-2">
              <Phone size={14} className="text-blue-400 shrink-0" aria-hidden="true" />
              +39 0584 1481242
            </span>
            <span className="flex items-center justify-center gap-2">
              <MapPin size={14} className="text-blue-400 shrink-0" aria-hidden="true" />
              Corso Garibaldi, 80 – 55049 Viareggio (LU), Italia
            </span>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ProLine Analytics. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-400 text-sm hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-sm hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
