import type { Metadata } from "next";
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
  title: "Ticketing App",
  description: "A microservices-based ticketing application",
  keywords: ["ticketing", "microservices", "nextjs", "application"],
  authors: [{ name: "BrokiDev", url: "https://bryantr.dev" }],
  openGraph: {
    title: "Ticketing App",
    description: "A microservices-based ticketing application",
    url: "https://ticketing.local",
    siteName: "Ticketing App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ticketing App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticketing App",
    description: "A microservices-based ticketing application",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
