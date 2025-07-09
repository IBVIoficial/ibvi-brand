import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'IBVI - Inteligência Imobiliária Precisa',
  description: 'Transformamos dados em decisões imobiliárias precisas',
  keywords: 'IBVI, imobiliário, inteligência de dados, análise imobiliária',
  authors: [{ name: 'IBVI' }],
  creator: 'IBVI',
  publisher: 'IBVI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/logo/ico/favicon.ico',
    shortcut: '/assets/logo/ico/favicon-16x16.png',
    apple: '/assets/logo/ico/apple-touch-icon.png',
  },
  openGraph: {
    title: 'IBVI - Inteligência Imobiliária Precisa',
    description: 'Transformamos dados em decisões imobiliárias precisas',
    url: 'https://ibvi.com.br',
    siteName: 'IBVI',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBVI - Inteligência Imobiliária Precisa',
    description: 'Transformamos dados em decisões imobiliárias precisas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}