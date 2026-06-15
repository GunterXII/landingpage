import { motion } from 'framer-motion'
import { Factory, Cpu, GitBranch, Layers } from 'lucide-react'

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'End-to-end visibility across production cells, assembly lines, and quality control checkpoints in discrete and process manufacturing.',
  },
  {
    icon: Cpu,
    title: 'Industrial Automation',
    description:
      'Native integration with PLCs, SCADA systems, and IIoT sensors via OPC-UA, MQTT, and Modbus — zero custom code required.',
  },
  {
    icon: GitBranch,
    title: 'Assembly Lines',
    description:
      'Track cycle times, takt time adherence, and first-pass yield across every station. Surface cycle-time drift in real time.',
  },
  {
    icon: Layers,
    title: 'Production Facilities',
    description:
      'Monitor utilities, shift performance, and throughput across multi-site operations from a single pane of glass.',
  },
]

const Industries = () => {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">Industries</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Designed for your industry
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Purpose-built for the demands of industrial operations, with deep integrations for every vertical.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.article
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon size={20} className="text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">{ind.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{ind.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Industries
