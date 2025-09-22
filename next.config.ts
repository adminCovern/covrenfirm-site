// next.config.ts
import type { NextConfig } from 'next';

/**
 * Security headers:
 * - Allows Next.js hydration/runtime (uses inline bootstrap) via 'unsafe-inline' + 'unsafe-eval'.
 *   When you’re ready to go stricter, we can move to nonces/hashes and remove these.
 * - Keeps other directives tight and explicit. No proprietary endpoints are exposed.
 */
const csp = [
  "default-src 'self'",
  // Allow Next's inline runtime + eval used by React/Next tooling. Tighten later with nonces/hashes.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Tailwind + Next often inject inline styles; allow them while we stabilize.
  "style-src 'self' 'unsafe-inline'",
  // Local images, data/blobs (SVG/embeds). Add specific external CDNs only if/when needed.
  "img-src 'self' data: blob:",
  // Local fonts and data: URLs.
  "font-src 'self' data:",
  // API calls / analytics / SSG revalidate. Keep scheme-wide; we can pin domains later.
  "connect-src 'self' https: http:",
  // Media served locally or embedded as data/blob.
  "media-src 'self' data: blob:",
  // Prevent clickjacking.
  "frame-ancestors 'self'",
  // Lock navigation primitives.
  "base-uri 'self'",
  "form-action 'self'",
  // Upgrade mixed content automatically.
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Referrer-Policy', value: 'no-referrer' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // You installed `critters`, so keep CSS optimization on.
  experimental: {
    optimizeCss: true,
  },
  // Add security headers to every route.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders as unknown as Array<{ key: string; value: string }>,
      },
    ];
  },
  // Do not expose build-time env or proprietary infra details here.
};

export default nextConfig;
