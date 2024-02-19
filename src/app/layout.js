import { Inter } from "next/font/google";
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
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="relative">
          <MainNav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
