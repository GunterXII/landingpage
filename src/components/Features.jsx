import { motion } from 'framer-motion'
import { Activity, LayoutDashboard, BarChart3, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description:
      'Track every machine, sensor, and production line in real time. Get instant alerts when metrics deviate from targets — before problems escalate into costly downtime.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: LayoutDashboard,
    title: 'Centralized Management',
    description:
      'Manage multiple plants, shifts, and teams from a single dashboard. Eliminate siloed systems, redundant spreadsheets, and blind spots across your operation.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Turn raw production data into clear, actionable insights. Identify bottlenecks, forecast demand, and benchmark performance across facilities in seconds.',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access',
    description:
      'Granular permissions for every stakeholder — from floor operators to C-suite executives. SOC 2 Type II certified, GDPR compliant, with full audit logging.',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Platform Features
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Everything your team needs
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            One platform to monitor, analyze, and optimize your entire production operation — from a single sensor to a global facility network.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.article
                key={f.title}
                variants={card}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 cursor-default"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${f.iconBg} rounded-xl mb-5`}>
                  <Icon size={22} className={f.iconColor} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{f.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
