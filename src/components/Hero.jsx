import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Shield, Zap, BarChart2 } from 'lucide-react'
import image from "../assets/image.png"
// Replace with your preferred premium industrial stock photo
// Suggested: smart factory, robotic arm, CNC machining, engineers on production floor
const HERO_IMAGE = image

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Type II' },
  { icon: Zap, label: '99.9% Uptime SLA' },
  { icon: BarChart2, label: 'Live in < 48h' },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }}
      />
      {/* Top-left blue glow */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center py-16 lg:py-24">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" aria-hidden="true" />
              Industrial Analytics Platform
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
              Optimize Your
              <br />
              Production.{' '}
              <span className="text-blue-600">In Real Time.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-9 max-w-lg">
              ProLine Analytics gives manufacturing teams a unified platform to monitor operations,
              eliminate downtime, and make data-driven decisions — across every production line.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                Request Demo
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2.5 text-slate-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-400"
              >
                <PlayCircle size={18} className="text-blue-500" aria-hidden="true" />
                Watch Overview
              </a>
            </div>

            <div className="flex flex-wrap gap-6" role="list" aria-label="Trust indicators">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-400" role="listitem">
                  <Icon size={14} className="text-blue-500 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-900/10">
              <img
                src={HERO_IMAGE}
                alt="Modern automated manufacturing facility with robotic production lines"
                className="w-full h-[420px] lg:h-[520px] object-cover"
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Floating KPI card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 shadow-lg shadow-slate-900/10"
                aria-label="Live production KPIs"
              >
                <div className="text-center flex-1">
                  <p className="text-[11px] text-slate-400 mb-0.5">Production Efficiency</p>
                  <p className="text-xl font-bold text-slate-900">94.7<span className="text-sm font-medium text-slate-400">%</span></p>
                </div>
                <div className="w-px h-8 bg-slate-200 shrink-0" aria-hidden="true" />
                <div className="text-center flex-1">
                  <p className="text-[11px] text-slate-400 mb-0.5">Downtime Reduced</p>
                  <p className="text-xl font-bold text-emerald-600">↓ 43<span className="text-sm font-medium text-slate-400">%</span></p>
                </div>
                <div className="w-px h-8 bg-slate-200 shrink-0" aria-hidden="true" />
                <div className="text-center flex-1">
                  <p className="text-[11px] text-slate-400 mb-0.5">OEE Score</p>
                  <p className="text-xl font-bold text-blue-600">A+</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative outer glow */}
            <div
              className="absolute -inset-4 rounded-3xl -z-10"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
