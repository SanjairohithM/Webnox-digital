import { Urbanist } from "next/font/google"
import Script from "next/script"
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
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180' },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EK3JS6N3RQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EK3JS6N3RQ');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ugnl368rnp");
          `}
        </Script>
        
        <Header />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  )
}