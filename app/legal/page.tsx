'use client';

import Link from 'next/link';
import { FileText, Cookie, ChevronUp, ChevronDown } from 'lucide-react';

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
          Legal & Compliance
        </h1>

        <article className="space-y-10">
          <section className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-semibold">Terms</h2>
            </div>
            <p className="text-zinc-300">
              By accessing and using this site, you agree to our terms of use. Content and software are
              protected by applicable laws. Unauthorized use, scraping, or reproduction is prohibited.
            </p>
          </section>

          <section className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Cookie className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-semibold">Privacy & Cookies</h2>
            </div>
            <p className="text-zinc-300">
              We use essential analytics to improve performance and protect the platform. We do not sell your
              personal information. See our cookie preferences for granular control.
            </p>
          </section>

          <section className="rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <ChevronUp className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-semibold">Security Posture</h2>
            </div>
            <p className="text-zinc-300">
              Strict transport security, content security policy with runtime nonces, referrer policy, and
              permissions policy are enforced across the application surface.
            </p>
            <div className="mt-4 flex items-center gap-2 text-zinc-400">
              <ChevronDown className="w-4 h-4" />
              <span className="text-sm">Questions? <Link href="/contact" className="underline">Contact us</Link>.</span>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}
