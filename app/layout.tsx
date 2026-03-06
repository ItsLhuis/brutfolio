import type { Metadata } from "next"
import { Anton, Inter } from "next/font/google"

import "./globals.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const baseUrl = "https://itslhuis.github.io/brutfolio"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "brutfolio",
    template: "%s | brutfolio",
  },
  description: "Personal design portfolio — bold visual systems that endure.",
  openGraph: {
    title: "brutfolio",
    description: "Personal design portfolio — bold visual systems that endure.",
    url: baseUrl,
    siteName: "brutfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "brutfolio",
    description: "Personal design portfolio — bold visual systems that endure.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
