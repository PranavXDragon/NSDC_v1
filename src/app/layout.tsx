import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://usar.nsdc.org"),
  title: {
    template: "%s | NSDC Student Chapter",
    default: "NSDC Student Chapter",
  },
  description:
    "The official student chapter of NSDC at Suryodaya College of Engineering & Technology, Nagpur. Empowering students to innovate, collaborate, and lead in computing through events, workshops, and projects.",
  keywords: [
    "NSDC",
    "SCET",
    "Student Chapter",
    "Suryodaya College of Engineering & Technology, Nagpur",
    "USS",
    "USAR",
    "USDI",
    "Technology",
    "Computing",
    "Coding",
    "Events",
    "Workshops",
  ],
  authors: [{ name: "NSDC SCET Team" }],
  creator: "NSDC SCET",
  publisher: "NSDC SCET",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usar.nsdc.org",
    siteName: "NSDC Student Chapter",
    title: "NSDC Student Chapter",
    description:
      "Empowering students to innovate, collaborate, and lead in the world of computing.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "NSDC Student Chapter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NSDC Student Chapter",
    description:
      "Empowering students to innovate, collaborate, and lead in the world of computing.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/bebas-neue/BebasNeue-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/montserrat/Montserrat-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
