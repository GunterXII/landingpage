import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How quickly can we deploy ProLine Analytics?',
    a: 'Most customers are fully operational within 48 hours. Our onboarding team handles integration with your existing PLC, SCADA, or ERP systems. We support OPC-UA, MQTT, REST APIs, and direct database connections out of the box.',
  },
  {
    q: 'Does ProLine integrate with our existing systems?',
    a: 'Yes. ProLine connects natively with Siemens S7, Allen-Bradley, Schneider Modicon, SAP ERP, and 200+ industrial protocols and enterprise systems. Our integration library is continuously expanding, and custom connectors are available for Enterprise customers.',
  },
  {
    q: 'What level of security does the platform provide?',
    a: 'ProLine is SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We offer private cloud, on-premises, and air-gapped deployment options for high-security environments.',
  },
  {
    q: 'Can we customize dashboards for different roles?',
    a: 'Absolutely. Role-Based Access Control (RBAC) lets you configure exactly what each team member sees and can edit — from floor operators to plant directors. Custom dashboard templates can be created and shared across facilities.',
  },
  {
    q: 'What support is included?',
    a: 'All Enterprise plans include a dedicated Customer Success Manager, 24/7 priority support with a 1-hour response SLA, and quarterly business reviews. On-site training and configuration workshops are available on request.',
  },
  {
    q: 'Is there a trial or proof-of-concept program?',
    a: 'Yes. We offer a 30-day proof of concept for qualified prospects. Our team connects to one of your production lines at no cost — you see live results before any commercial commitment.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-6 py-5 text-left transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-blue-500"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="text-slate-800 font-medium">{faq.q}</span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200"
                  aria-hidden="true"
                >
                  {openIndex === i ? (
                    <Minus size={13} className="text-blue-600" />
                  ) : (
                    <Plus size={13} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-3 text-slate-500 text-[15px] leading-relaxed border-x border-b border-slate-200 rounded-b-xl -mt-1 bg-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
