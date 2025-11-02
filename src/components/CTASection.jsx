import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="get-started" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 text-center text-white backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.25),transparent_45%)]" />
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold">Ship mock APIs in minutes</h3>
          <p className="mt-2 text-white/80">Start free. Upgrade when you need more power.</p>
          <div className="mt-6">
            <a href="#" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90">
              Create your first project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
