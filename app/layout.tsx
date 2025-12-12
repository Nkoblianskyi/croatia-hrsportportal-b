import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HRSportPortal | Vrhunski Vodič za Sportsko Klađenje u Hrvatskoj",
  description:
    "HRSportPortal - Vaš pouzdani partner za sportsko klađenje. Detaljne recenzije kladionica, ekskluzivni bonusi i profesionalni savjeti za uspješno klađenje.",
  verification: {
    google: "verification-code-here",
  },
  category: "Sports Betting Portal",
  classification: "Croatian Sports Betting Guide",
  keywords: [
    "sportsko klađenje",
    "kladionice Hrvatska",
    "online klađenje Hrvatska",
    "nogometno klađenje",
    "košarkaško klađenje",
    "tenis klađenje",
    "rukomet klađenje",
    "bonusi kladionica",
    "hrsportportal",
    "licencirane kladionice",
    "recenzije kladionica",
    "odgovorno klađenje",
    "najbolje kladionice",
  ],
  authors: [{ name: "HRSportPortal" }],
  publisher: "hrsportportal.com",
  openGraph: {
    title: "HRSportPortal | Vrhunski Vodič za Sportsko Klađenje",
    description:
      "HRSportPortal - Profesionalni portal s detaljnim recenzijama, bonusima i stručnim savjetima za sportsko klađenje u Hrvatskoj.",
    url: "https://hrsportportal.com",
    siteName: "HRSportPortal",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HRSportPortal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRSportPortal | Vrhunski Vodič za Sportsko Klađenje",
    description: "Profesionalni portal s detaljnim recenzijama i stručnim savjetima za klađenje",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://hrsportportal.com",
  },
  other: {
    rating: "general",
    distribution: "global",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`${openSans.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
