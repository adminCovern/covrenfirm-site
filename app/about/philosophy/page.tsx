'use client';

import Link from 'next/link';
import { Brain, Shield, Target, Zap } from 'lucide-react';

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Philosophy: <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Execution over Noise</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          No fluff. No corporate lullabies. We build sovereign AI that does the work. Full stop.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Operational Intelligence</h3>
            </div>
            <p className="text-zinc-400">We optimize cycle time and throughput, not vanity metrics.</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Security First</h3>
            </div>
            <p className="text-zinc-400">Own your stack. Zero data rent. No external choke points.</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Outcome Alignment</h3>
            </div>
            <p className="text-zinc-400">We ship systems that move revenue and reduce friction.</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Relentless Execution</h3>
            </div>
            <p className="text-zinc-400">Action beats opinion. Every day.</p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
            aria-label="Book the Command Briefing"
          >
            Book the Command Briefing
          </Link>
        </div>
      </section>
    </main>
  );
}
