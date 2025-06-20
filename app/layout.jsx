"use client"
import { Urbanist } from "next/font/google"
import "./globals.css"
import Header from "./sections/Components/Header"

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
      <body className={`${urbanist.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
