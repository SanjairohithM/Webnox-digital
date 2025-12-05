import { Urbanist } from "next/font/google"
import "./globals.css"
import Header from "./sections/Components/Header"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import Footer from "./sections/Footer"
export const metadata = {
  title: "Webnox Digital | Software Development Company, Website & App Development Experts",
  description:
    "Webnox Digital is a leading software development company offering website development, AI software solutions, mobile app development, and digital marketing services. We help businesses innovate, scale, and succeed online.",
  alternates: { canonical: "https://www.webnoxdigital.com/" },
  robots: { index: true, follow: true },
  verification: {
    google: "dPoW0wzIi2VpSOg4ew-Ov7FLsv21XKLexjM8WpR6nlA",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/jpeg' },
      { url: '/favicon.ico', sizes: '192x192', type: 'image/jpeg' },
      { url: '/favicon.ico', sizes: '512x512', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
}
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${urbanist.variable} font-sans antialiased`}>
        <Header />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {/* <Footer /> */}
      </body>
    </html>
  )
}