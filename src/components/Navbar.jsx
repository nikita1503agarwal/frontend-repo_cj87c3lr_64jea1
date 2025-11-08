import { CreditCard, Rocket, Shield, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 shadow-sm shadow-indigo-500/20 ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center">
              <CreditCard className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">FluxPay</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
            <a href="#integrations" className="hover:text-neutral-900 dark:hover:text-white transition">Integrations</a>
            <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition">Pricing</a>
            <a href="#security" className="hover:text-neutral-900 dark:hover:text-white transition flex items-center gap-1">
              <Shield className="h-4 w-4" /> Security
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-9 items-center rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 shadow-sm hover:bg-white dark:hover:bg-neutral-800 transition">
              Sign in
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:brightness-110 transition">
              <Rocket className="h-4 w-4" /> Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
