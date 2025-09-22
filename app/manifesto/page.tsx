'use client';

import Link from 'next/link';
import { Brain, Target, TrendingUp, Shield, ChevronRight } from 'lucide-react';

export default function ManifestoPage() {
  const [_activeSection] = [null]; // underscores keep ESLint strict while acknowledging unused

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          The Manifesto
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-300">
          We do not rent intelligence. We build sovereign operators that execute.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Sovereign Intelligence</h3>
            </div>
            <p className="text-zinc-400">Own the stack. Own the outcomes.</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Throughput</h3>
            </div>
            <p className="text-zinc-400">Measure cycle time, not opinions.</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Cashflow Impact</h3>
            </div>
            <p className="text-zinc-400">Systems that move revenue.</p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/services/sovren-ai"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
          >
            Explore SOVREN AI
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-14 rounded-xl border border-zinc-800 p-6">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h3 className="font-semibold">Non-Negotiables</h3>
          </div>
          <ul className="space-y-2 text-zinc-300 list-disc list-inside">
            <li>Zero-dependency architecture</li>
            <li>Security and observability by default</li>
            <li>Relentless bias toward action</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
