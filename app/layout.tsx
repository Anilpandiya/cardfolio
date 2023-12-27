import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anil Pandiya',
  description: 'Contact information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black contact-card`}>
        {children} 
        <SpeedInsights />
      </body>
    </html>
  )
}
