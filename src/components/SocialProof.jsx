import { motion } from 'framer-motion'

const companies = ['Siemens', 'Bosch', 'ABB', 'Schneider', 'Honeywell', 'Rockwell']

const SocialProof = () => {
  return (
    <section className="py-14 border-y border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-9"
        >
          Trusted by manufacturing teams worldwide
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 lg:gap-x-16"
          aria-label="Partner companies"
        >
          {companies.map((company) => (
            <span
              key={company}
              className="text-slate-300 font-semibold text-xl tracking-tight hover:text-slate-400 transition-colors duration-300 cursor-default select-none"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
