export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Arrange a private consultation
            </h2>
            <p className="mt-3 text-slate-300/90">
              Speak directly with a senior partner. We will get back within one business day.
            </p>
            <ul className="mt-6 space-y-2 text-slate-200/90 text-sm">
              <li>• Confidential advisory</li>
              <li>• Access to off-market inventory</li>
              <li>• Financing and legal guidance</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-200 text-sm mb-1">First name</label>
                <input className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Alex" />
              </div>
              <div>
                <label className="block text-slate-200 text-sm mb-1">Last name</label>
                <input className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Müller" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-200 text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-200 text-sm mb-1">Message</label>
                <textarea rows="4" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Tell us what you are looking for" />
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="inline-flex justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold ring-1 ring-white/20">
                Request Consultation
              </button>
              <a href="tel:+49000000000" className="inline-flex justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15">
                Or call us directly
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
