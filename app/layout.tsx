import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mimeliaa General Services - Professional Cleaning and Appliance Repair Services",
  description:
    "Professional residential and commercial cleaning services and appliance repair. Deep cleaning, basic cleaning, and appliance repair. Call (504) 428-9412 for a free quote.",
  keywords:
    "cleaning services, appliance repair, house cleaning, deep cleaning, New Orleans cleaning, Metairie cleaning, Kenner cleaning",
  openGraph: {
    title: "Mimeliaa General Services - Professional Cleaning and Appliance Repair",
    description:
      "Professional cleaning and appliance repair services with recurring service discounts. Serving 80-mile radius coverage area.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
