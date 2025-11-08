import { Github, Slack, Zap, Database } from 'lucide-react';

const integrations = [
  { name: 'Slack', icon: Slack },
  { name: 'GitHub', icon: Github },
  { name: 'Zapier', icon: Zap },
  { name: 'Postgres', icon: Database },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative bg-[#0b1020] py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Connect your stack</h2>
          <p className="mt-3 text-white/70">Plug into your tools to trigger workflows, sync data, and keep everything in lockstep.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {integrations.map(({ name, icon: Icon }) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white">
                <Icon />
              </div>
              <div className="text-sm">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
