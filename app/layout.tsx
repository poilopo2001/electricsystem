// Root layout avec Header, Footer et métadonnées globales

import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyBottomBar from '@/components/layout/StickyBottomBar';
import { getDefaultMetadata, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/metadata';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = getDefaultMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyBottomBar />
        {/* Padding bottom pour mobile sticky bar */}
        <div className="h-20 lg:hidden" aria-hidden="true"></div>
      </body>
    </html>
  );
}
