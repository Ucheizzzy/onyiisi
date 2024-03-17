import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const playFair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Onyiisi',
  description: 'Web app for Luxury Items.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={playFair.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
