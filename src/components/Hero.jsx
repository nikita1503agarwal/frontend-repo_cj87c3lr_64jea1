import Spline from "@splinetool/react-spline";
import { Check, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(56,189,248,0.25),transparent_60%)]" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300">
            <Zap className="h-3.5 w-3.5" />
            Automate finance operations
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            The modern finance OS for automated payments & reconciliation
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            FluxPay unifies billing, payouts, and real-time analytics into one glass-morphic workspace. Close the books 10x faster and move money with confidence.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-xl bg-neutral-900 dark:bg-white px-6 text-sm font-semibold text-white dark:text-neutral-900 shadow-lg shadow-black/10 hover:brightness-110 transition">
              Start free trial
            </a>
            <a href="#features" className="inline-flex h-11 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-6 text-sm font-semibold text-neutral-800 dark:text-neutral-100 hover:bg-white dark:hover:bg-neutral-800 transition">
              See features
            </a>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-600" /> PCI compliant out of the box</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-600" /> Automated invoicing & matching</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-600" /> Real-time cash visibility</li>
          </ul>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/10 via-transparent to-transparent" />
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
