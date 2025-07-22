"use client"
import { Urbanist } from "next/font/google"
import Head from "next/head"
import "./globals.css"
import Header from "./sections/Components/Header"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import Footer from "./sections/Footer"

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
})

// export const metadata = {
//   title: "Webnox",
//   description: "Webnox",
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="dPoW0wzIi2VpSOg4ew-Ov7FLsv21XKLexjM8WpR6nlA" />


      </Head>
      <body className={`${urbanist.variable} antialiased`}>
        <Header />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
