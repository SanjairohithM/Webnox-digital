import { Urbanist } from "next/font/google"
import "./globals.css"
import Header from "./sections/Components/Header"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import Footer from "./sections/Footer"

export const metadata = {
  title: "Webnox",
  description: "Webnox",
  verification: {
    google: "dPoW0wzIi2VpSOg4ew-Ov7FLsv21XKLexjM8WpR6nlA",
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
