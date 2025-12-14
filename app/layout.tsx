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
  title: "SportPortalHR | Vrhunski Vodič za Sportsko Klađenje u Hrvatskoj",
  description:
    "SportPortalHR - Vaš pouzdani partner za sportsko klađenje. Detaljne recenzije kladionica, ekskluzivni bonusi i profesionalni savjeti za uspješno klađenje.",
  verification: {
    google: "verification-code-here",
  },
  category: "Sports Betting Portal",
  classification: "Croatian Sports Betting Guide",
keywords: [
  "sportsko klađenje Hrvatska",
  "kladionice Hrvatska",
  "online klađenje Hrvatska",
  "najbolje kladionice",
  "nogometno klađenje Hrvatska",
  "tenis klađenje",
  "košarka klađenje",
  "bonusi za klađenje",
  "klađenje uživo",
  "legalne kladionice Hrvatska",
  "betting sites Croatia",
  "online sportsko klađenje",
  "Formula 1 klađenje",
  "MMA klađenje",
  "hokej klađenje",
  "pikado klađenje",
  "bilijar klađenje",
  "top kladionice Hrvatska",
  "rang lista kladionica",
  "sigurno klađenje Hrvatska",
  "odgovorno klađenje",
  "najbolje kladionice Hrvatska",
  "sportsko klađenje savjeti",
  "klađenje aplikacije Hrvatska",
  "mobilno klađenje",
  "eSports klađenje",
  "virtualni sportovi klađenje",
  "klađenje na nogometne lige",
  "klađenje na teniske turnire",
  "klađenje na košarkaške utakmice",
  "ekskluzivni bonusi za nove korisnike",
  "promocije kladionica",
  "isplate dobitaka klađenje",
  "korisnička podrška kladionica",
  "zakonski okvir klađenja Hrvatska",
  "porezi na dobitke od klađenja",
  "kladionica",
  "sportska kladionica",
  "online kladionica",
  "klađenje uživo",
  "online klađenje",
  "kladionica uzivo",
  "online casino Hrvatska",
  "najbolji online casino",
  "casino bonusi",
  "casino igre Hrvatska",
  "casino Croatia",
  "online casino games",
  "casino bonuses"
],
  authors: [{ name: "SportPortalHR" }],
  publisher: "sportportalhr.com",
  openGraph: {
    title: "SportPortalHR | Vrhunski Vodič za Sportsko Klađenje",
    description:
      "SportPortalHR - Profesionalni portal s detaljnim recenzijama, bonusima i stručnim savjetima za sportsko klađenje u Hrvatskoj.",
    url: "https://sportportalhr.com",
    siteName: "SportPortalHR",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SportPortalHR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportPortalHR | Vrhunski Vodič za Sportsko Klađenje",
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
    canonical: "https://sportportalhr.com",
  },
  other: {
    rating: "general",
    distribution: "global",
  },

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
