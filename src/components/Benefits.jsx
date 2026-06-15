import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp, Clock, Cpu } from 'lucide-react'

const stats = [
  { icon: TrendingDown, value: '43%', label: 'Reduction in unplanned downtime', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: TrendingUp, value: '2.8×', label: 'Average OEE improvement', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Clock, value: '48h', label: 'Average time to first insight', color: 'text-violet-600', bg: 'bg-violet-50' },
  { icon: Cpu, value: '99.9%', label: 'Platform uptime SLA', color: 'text-cyan-600', bg: 'bg-cyan-50' },
]

const benefits = [
  {
    title: 'Reduce Downtime',
    description:
      'Predictive alerts surface equipment issues before they halt production. Most customers see 40%+ fewer unplanned stops within the first 90 days.',
  },
  {
    title: 'Improve Efficiency',
    description:
      'Automated reporting replaces hours of manual data collection, freeing your engineers to focus on solving problems instead of compiling spreadsheets.',
  },
  {
    title: 'Increase Productivity',
    description:
      'Benchmark performance across shifts, lines, and sites. Surface what your top performers do differently and systematically replicate it across the floor.',
  },
  {
    title: 'Data-Driven Decisions',
    description:
      'From live OEE dashboards to quarterly trend reports — every decision is backed by real production data, not gut feel or lagging KPIs.',
  },
]

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
          aria-label="Key performance metrics"
        >
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 ${s.bg} rounded-xl mb-3`}>
                  <Icon size={18} className={s.color} aria-hidden="true" />
                </div>
                <p className={`text-4xl font-bold ${s.color} mb-1`}>{s.value}</p>
                <p className="text-xs text-slate-400 leading-snug">{s.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">Why ProLine</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5">
              Built for modern manufacturing
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              ProLine Analytics is engineered to adapt to your operations and scale with your business — whether you manage one line or fifty global facilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div
                  className="shrink-0 w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold mb-1">{b.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
