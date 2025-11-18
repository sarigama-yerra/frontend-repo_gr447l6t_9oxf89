import { useState } from 'react'
import { Menu, X, PhoneCall, Home } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Listings', href: '#listings' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md ring-1 ring-white/20">
                <Home className="h-5 w-5" />
              </div>
              <span className="text-white font-semibold tracking-tight">Courte Estates</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-200/90 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/20 hover:bg-white/15 transition">
                <PhoneCall className="h-4 w-4" />
                <span>Book a Viewing</span>
              </a>
            </div>

            <button className="md:hidden grid place-items-center h-10 w-10 rounded-xl bg-white/10 text-white ring-1 ring-white/20" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-5 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/20">
                  <PhoneCall className="h-4 w-4" />
                  <span>Book a Viewing</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
