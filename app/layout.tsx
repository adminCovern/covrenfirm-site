// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Covren Firm - Sovereign AI Infrastructure',
  description:
    "Where AI consciousness meets sovereign business infrastructure. We don't just build technology—we engineer evolution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Global body styles so the site doesn’t render as raw black/white text */}
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
