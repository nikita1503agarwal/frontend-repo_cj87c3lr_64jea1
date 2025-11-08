import { BarChart3, Repeat, Shield, Wallet } from "lucide-react";

const items = [
  {
    icon: Repeat,
    title: "Automated Workflows",
    desc: "Build no-code flows for invoicing, approvals, and payouts that run on schedule or events.",
  },
  {
    icon: Wallet,
    title: "Smart Reconciliation",
    desc: "AI-assisted matching connects payments to invoices instantly across banks and processors.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    desc: "Unified dashboards with MRR, burn, runway, and cash positions updated in real time.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "SOC 2 & PCI compliant with SSO, roles, and field-level encryption by default.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Automate the money movement loop
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Replace spreadsheets and manual processes with a single automated system of record.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
