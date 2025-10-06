import { Urbanist } from "next/font/google"
import "./globals.css"
import Header from "./sections/Components/Header"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import Footer from "./sections/Footer"
export const metadata = {
  title: "Webnox Digital | Software Development Company, Website & App Development Experts",
  description:
    "Webnox Digital is a leading software development company offering website development, AI software solutions, mobile app development, and digital marketing services. We help businesses innovate, scale, and succeed online.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/ico' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
      <head>
        <meta name="google-site-verification" content="dPoW0wzIi2VpSOg4ew-Ov7FLsv21XKLexjM8WpR6nlA" />
      </head>
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