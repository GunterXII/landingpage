import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Professional',
    price: '€890',
    period: 'per facility / month',
    description: 'For single-site teams ready to move beyond spreadsheets.',
    cta: 'Start Free Trial',
    ctaHref: '#demo',
    featured: false,
    features: [
      'Up to 500 data points',
      'Real-time dashboards',
      'Automated alerting',
      'Standard integrations (OPC-UA, MQTT)',
      'Role-based access (5 roles)',
      'Email support',
      '99.9% uptime SLA',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'multi-site pricing',
    description: 'For global operations that demand full control and support.',
    cta: 'Talk to Sales',
    ctaHref: '#contact',
    featured: true,
    features: [
      'Unlimited data points',
      'Multi-site management',
      'Predictive analytics & AI alerts',
      'Full integration library (200+ protocols)',
      'Unlimited roles & custom RBAC',
      'Dedicated Customer Success Manager',
      '24/7 priority support (1h SLA)',
      'On-premises / air-gapped deployment',
      'Custom SLA & NDA',
    ],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Start with a single facility. Scale to a global operation. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.featured
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/20'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-bold text-xl mb-1 ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.featured ? 'text-blue-100' : 'text-slate-400'}`}>
                  {tier.description}
                </p>
                <p>
                  <span className={`text-4xl font-bold ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ml-2 ${tier.featured ? 'text-blue-200' : 'text-slate-400'}`}>
                    {tier.period}
                  </span>
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1" aria-label={`${tier.name} features`}>
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${tier.featured ? 'text-blue-200' : 'text-blue-500'}`}
                      aria-hidden="true"
                    />
                    <span className={`text-sm ${tier.featured ? 'text-blue-50' : 'text-slate-600'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 ${
                  tier.featured
                    ? 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-md'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-px'
                }`}
              >
                {tier.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-sm mt-8"
        >
          All plans include a 30-day proof-of-concept. No credit card required to get started.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
