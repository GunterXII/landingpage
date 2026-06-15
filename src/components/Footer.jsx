import { Mail } from 'lucide-react'
import logo from '../assets/logo.png'

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Careers', 'Press', 'Blog', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Status', 'Security', 'Support'],
}

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand + newsletter */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4" aria-label="ProLine Analytics home">
              <img src={logo} alt="" className="w-7 h-7 object-contain" aria-hidden="true" />
              <span className="text-white font-semibold text-lg tracking-tight">
                ProLine <span className="text-blue-400">Analytics</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              The analytics platform built for modern manufacturing. Monitor, analyze, and optimize — in real time.
            </p>

            <p className="text-slate-300 text-sm font-medium mb-3">Stay updated</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} aria-hidden="true" />
                Subscribe
              </button>
            </form>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-sm font-semibold mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 text-sm hover:text-slate-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} ProLine Analytics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
