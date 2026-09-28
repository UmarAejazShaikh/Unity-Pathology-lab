import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FloatingActions from "@/components/FloatingActions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unitypathologylab.com"),
  title: {
    default: "Unity Pathology Laboratory | Diagnostic Lab in Makarba, Ahmedabad",
    template: "%s | Unity Pathology Laboratory",
  },
  description:
    "Unity Pathology Laboratory, Makarba, Ahmedabad — 5.0★ rated diagnostic lab offering verified clinical testing (CBC, Lipid, Renal, Thyroid, HbA1c) with same-day WhatsApp reports and doorstep home sample collection in Sarkhej & Makarba.",
  keywords: [
    "Unity Pathology Laboratory",
    "Pathology lab Makarba Ahmedabad",
    "Blood test home collection Sarkhej",
    "CBC test Makarba",
    "Diagnostic lab Ahmedabad",
    "Lab test price list Ahmedabad",
    "Home sample collection Sarkhej Makarba",
  ],
  authors: [{ name: "Unity Pathology Laboratory" }],
  creator: "Unity Pathology Laboratory",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://unitypathologylab.com",
    title: "Unity Pathology Laboratory | Diagnostic Lab in Makarba, Ahmedabad",
    description:
      "5.0★ Rated Diagnostic Pathology Services in Sarkhej & Makarba, Ahmedabad — verified clinical testing with same-day reports and home sample collection.",
    siteName: "Unity Pathology Laboratory",
    images: [
      {
        url: "/images/unity-pathology-logo.jpg",
        width: 1254,
        height: 1254,
        alt: "Unity Pathology Laboratory",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-white selection:bg-sky-500 selection:text-white`}
      >
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingActions />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
