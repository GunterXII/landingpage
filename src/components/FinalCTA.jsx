import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Radial blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Get Started
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Ready to optimize
            <br />
            your operations?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Join hundreds of manufacturing teams that trust ProLine Analytics to keep their production lines running at peak performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-px text-lg focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              Request Demo
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200 text-lg"
            >
              Talk to Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
