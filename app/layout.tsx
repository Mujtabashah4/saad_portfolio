import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Saad Iftikhar | Civil Engineer',
  description:
    'Over a decade of experience at the intersection of engineering execution and strategic oversight — delivering landmark infrastructure, commercial, and residential developments across Pakistan.',
  keywords: [
    'civil engineer',
    'project management',
    'construction',
    'Pakistan',
    'Lahore',
    'infrastructure',
    'NUST',
    'Muhammad Saad Iftikhar',
  ],
  authors: [{ name: 'Muhammad Saad Iftikhar' }],
  openGraph: {
    title: 'Muhammad Saad Iftikhar | Civil Engineer',
    description:
      'Over a decade of experience at the intersection of engineering execution and strategic oversight.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
