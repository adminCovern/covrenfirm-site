'use client';

import Link from 'next/link';
import { ConsciousPage } from '@/app/consciousness-engine';
import {
  Brain,
  Shield,
  Cpu,
  Zap,
  Check,
  ChevronRight,
  AlertTriangle,
  Eye,
  Users,
  Database,
  Volume2,
  TrendingUp,
} from 'lucide-react';

export default function SovrenAIPage() {
  return (
    <ConsciousPage title="SOVREN AI — Sovereign Intelligence">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Sovereign AI that <span className="underline underline-offset-4">executes</span>. Not negotiates.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-300">
          SOVREN AI is built for operators who demand control. It runs your workflows end-to-end, respects
          guardrails, and is measured by outcomes—never opinions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
            aria-label="Book the Command Briefing"
          >
            Command Briefing
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-900 transition"
          >
            See capabilities
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-6 md:grid-cols-3">
          <Pillar
            icon={<Brain className="w-6 h-6 text-cyan-400" />}
            title="Cognitive Operators"
            text="Agents that plan, execute, and close the loop—without hand-holding."
          />
          <Pillar
            icon={<Shield className="w-6 h-6 text-cyan-400" />}
            title="Control & Safety"
            text="Role-aware actions, policy controls, and human-in-the-loop when required."
          />
          <Pillar
            icon={<Cpu className="w-6 h-6 text-cyan-400" />}
            title="Outcome Driven"
            text="Built to reduce cycle time and increase cashflow—not vanity metrics."
          />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What it actually does</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Line icon={<Zap className="w-5 h-5 text-cyan-400" />} text="Executes multi-step tasks across tools and data." />
          <Line icon={<Eye className="w-5 h-5 text-cyan-400" />} text="Keeps humans in control with approvals and visibility." />
          <Line icon={<Users className="w-5 h-5 text-cyan-400" />} text="Adapts to roles and permissions you define." />
          <Line icon={<Database className="w-5 h-5 text-cyan-400" />} text="Connects to your systems via secure adapters." />
          <Line icon={<Volume2 className="w-5 h-5 text-cyan-400" />} text="Handles voice/telephony workflows when needed." />
          <Line icon={<TrendingUp className="w-5 h-5 text-cyan-400" />} text="Optimizes for throughput and measurable results." />
        </div>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1" />
            <div>
              <h3 className="font-semibold">No sensitive disclosures</h3>
              <p className="text-zinc-400">
                This page intentionally avoids listing proprietary infrastructure, hardware, vendor names, or
                deployment details. You keep the edge; competitors stay guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE OVERVIEW (NON-SENSITIVE) */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <Package
            name="SOVREN Proof"
            points={[
              'Operator configured to your top use-case',
              'Secure adapters to your environment',
              'Guardrails, approvals, and observability',
              'Measurable KPIs and weekly refinements',
            ]}
            cta={{ label: 'Apply for Proof', href: '/services/sovren-ai/sovereign-qualification?tier=proof' }}
          />
          <Package
            name="SOVREN Proof+"
            badge="Founder’s Choice"
            points={[
              'Everything in Proof',
              'Priority implementation and advisory',
              'Early feature access and tuning sessions',
              'Direct access for escalation and strategy',
            ]}
            highlight
            cta={{ label: 'Apply for Priority Access', href: '/services/sovren-ai/sovereign-qualification?tier=proof-plus' }}
          />
        </div>
      </section>

      {/* FAQ (NON-SENSITIVE) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Straight answers</h2>
        <div className="grid gap-4">
          <FAQ
            q="Does this replace my team?"
            a="No. It multiplies your team by taking the repetitive execution off their plate while keeping humans in control of decisions and policy."
          />
          <FAQ
            q="What does setup require?"
            a="A briefing, a primary use-case, and access to the systems that use-case touches. We handle the rest—safely and with explicit approvals."
          />
          <FAQ
            q="What results should we expect?"
            a="Shorter cycle times, higher task completion rates, and cleaner handoffs. We measure what matters and tune for throughput."
          />
          <FAQ
            q="Do you expose deployment details?"
            a="No. We do not publish infrastructure, hardware, or vendor specifics publicly. You retain competitive advantage; we keep your edge discreet."
          />
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
          >
            Book the Command Briefing
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ConsciousPage>
  );
}

/* ---------- Components ---------- */

function Pillar({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 p-6 bg-black">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-zinc-400">{text}</p>
    </div>
  );
}

function Line({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-zinc-300">
      <Check className="w-4 h-4 text-cyan-400" />
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Package({
  name,
  points,
  cta,
  badge,
  highlight,
}: {
  name: string;
  points: string[];
  cta: { label: string; href: string };
  badge?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-2xl p-8 border',
        highlight ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30' : 'bg-black border-zinc-800',
      ].join(' ')}
    >
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        {badge ? (
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            {badge}
          </span>
        ) : null}
      </div>
      <ul className="mt-4 space-y-2 text-zinc-300">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href={cta.href}
          className={[
            'inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold transition',
            highlight ? 'bg-white text-black hover:opacity-90' : 'border border-zinc-700 hover:bg-zinc-900',
          ].join(' ')}
        >
          {cta.label}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 p-5 bg-black">
      <p className="font-semibold">{q}</p>
      <p className="mt-2 text-zinc-400">{a}</p>
    </div>
  );
}
