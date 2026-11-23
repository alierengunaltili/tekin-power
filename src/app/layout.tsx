import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import Script from "next/script";
import WhatsAppContact from '@/components/WhatsAppContact';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Tekin Power | Elektrikli Marin ve Enerji Depolama',
  description: 'Elektrikli tekne motoru, su pompası, LiFePO4 batarya ve tekne HMI çözümleri. Projeniz hakkında Tekin Power ile görüşün.',
  authors: [{ name: 'Tekin Power' }],
  creator: 'Tekin Power',
  publisher: 'Tekin Power',
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: `${SITE_URL}/tekinpower-icon.png`, shortcut: `${SITE_URL}/tekinpower-icon.png`, apple: `${SITE_URL}/tekinpower-icon.png` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E3143T4CYP"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E3143T4CYP');
          `}
        </Script>
      </head>
      <body
        // Writing extensions add body attributes before hydration; tolerate only this element's mismatch.
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
        <WhatsAppContact />
      </body>
    </html>
  );
}
