// middleware.ts (Edge runtime compatible CSP with nonce)
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Generate a base64 nonce using Web Crypto (Edge runtime safe).
 */
function genNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

/**
 * Build an enforced CSP using the given nonce.
 * No 'unsafe-inline' / 'unsafe-eval'. Uses 'strict-dynamic' + nonce for Next scripts.
 */
function cspWithNonce(nonce: string): string {
  const directives = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self'`,
    `img-src 'self' data: blob:`,
    `font-src 'self' data:`,
    `connect-src 'self' https:`,
    `frame-ancestors 'none'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ];
  return directives.join('; ');
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const nonce = genNonce();
  const csp = cspWithNonce(nonce);

  res.headers.set('x-nonce', nonce);
  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('X-DNS-Prefetch-Control', 'off');
  res.headers.set('X-Download-Options', 'noopen');

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
