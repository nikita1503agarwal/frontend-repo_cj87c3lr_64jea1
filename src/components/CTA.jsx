export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-[#070b18] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Get started in minutes</h3>
            <p className="mt-2 text-white/70">Create a workspace, connect your bank, and invite your team. No credit card required.</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
              />
              <button type="submit" className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-[#0b1020] shadow-sm shadow-white/10 hover:bg-white/90">
                Start free
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50">14‑day free trial. Cancel anytime.</p>
          </div>
          <ul className="grid gap-4 text-sm text-white/80">
            <li className="flex items-center gap-3"><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> SOC 2 Type II</li>
            <li className="flex items-center gap-3"><span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" /> SSO & SAML</li>
            <li className="flex items-center gap-3"><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> Role-based access</li>
            <li className="flex items-center gap-3"><span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" /> API & webhooks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
