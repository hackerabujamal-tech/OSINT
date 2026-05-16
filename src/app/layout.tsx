Enterimport '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEXUS-7 // OMEGA VEIL',
  description: 'CLASSIFIED CYBER-INTELLIGENCE INTERFACE'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-void overflow-hidden">
        <div className="scanlines" />
        <div className="scanline-sweep" />
        {children}
      </body>
    </html>
  );
}
