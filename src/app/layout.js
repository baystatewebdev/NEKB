import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import MainNav from "@/components/MainNav";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | NorthEast Kitchen / Bath',
    default: 'NorthEast Kitchen / Bath',
  },
  description: 'NorthEast provides personalized kitchen, bathroom, and other remodels all over Massachusetts. See how we can customize your home to fit your needs today!',
  metadataBase: new URL('https://northeastkandb.com/')
}

export default function RootLayout({ children }) {
  const env = process.env.NODE_ENV

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="relative">
          <MainNav />
        </header>
        {children}
        <Footer />
      </body>
      {env === 'production' && <GoogleTagManager gtmId="GTM-TTSWCM4" />}
    </html>
  )
}
