import React from 'react';
import { Wand2, CircuitBoard, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Wand2,
    title: 'AI API Generator',
    desc: 'Turn natural language prompts into fully routed endpoints in seconds.',
    color: 'from-fuchsia-400/30 to-rose-400/30',
  },
  {
    icon: CircuitBoard,
    title: 'Dynamic Logic Engine',
    desc: 'Customize behavior with JSON/JS logic blocks and condition builders.',
    color: 'from-cyan-400/30 to-sky-400/30',
  },
  {
    icon: Database,
    title: 'Mock State Persistence',
    desc: 'Simulate temporary or persistent state to mirror real backends.',
    color: 'from-emerald-400/30 to-lime-400/30',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16" aria-label="Key features">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Everything you need to mock faster</h2>
        <p className="mt-2 text-white/70">From prompt to production-ready mocks without touching a server.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className={`pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-br ${f.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-black/40 p-2 text-white/90">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/75">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
