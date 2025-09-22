// next.config.ts
import type { NextConfig } from 'next';

/**
 * Content Security Policy
 * - Allows Next.js runtime/hydration scripts for now ('unsafe-inline'/'unsafe-eval').
 * - Once we're stable, we’ll replace these with nonces/hashes and remove the 'unsafe-*' tokens.
 * - No proprietary infra details are disclosed here.
 */
const csp = [
  "default-src 'self'",
  // Allow Next’s bootstrap/hydration. TODO (hardening): replace with nonces/hashes.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Tailwind/Next may emit inline styles; allow them. (We can move to hashed styles later.)
  "style-src 'self' 'unsafe-inline'",
  // Local images + data/blob for SVG/embeds/screenshots
  "img-src 'self' data: blob:",
  // Local fonts + data URIs
  "font-src 'self' data:",
  // API calls / analytics / fonts CDNs if added; keep broad now, tighten when we inventory domains.
  "connect-src 'self' https: http:",
  // Local/static media + data/blob
  "media-src 'self' data: blob:",
  // Disallow plugins/Flash/etc.
  "object-src 'none'",
  // Clickjacking protection
  "frame-ancestors 'self'",
  // Limit base URI + forms
  "base-uri 'self'",
  "form-action 'self'",
  // Prefer HTTPS for any mixed content
  'upgrade-insecure-requests',
].join('; ');

/**
 * Security headers
 * - HSTS assumes you’re serving via HTTPS (Render). If you have subdomains you want strict, add ; includeSubDomains
 */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Referrer-Policy', value: 'no-referrer' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // keeps Critters effective
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
