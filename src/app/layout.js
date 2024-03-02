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
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://northeastkandb.com/'),
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <header className="relative">
          <MainNav />
        </header>
        {children}
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId="GTM-XYZ" /> */}
    </html>
  );
}
