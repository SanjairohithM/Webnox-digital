export const metadata = {
  title: "Digital Services | Webnox Digital - Software Development & Technology Solutions",
  description: "Explore our comprehensive range of digital services including web development, AI solutions, app development, branding, and digital transformation services for businesses worldwide.",
  keywords: "digital services, software development, web development, AI services, app development, branding services, digital transformation, technology solutions",
  alternates: { canonical: "https://www.webnoxdigital.com/services" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Digital Services | Webnox Digital - Software Development & Technology Solutions",
    description: "Explore our comprehensive range of digital services including web development, AI solutions, app development, branding, and digital transformation services.",
    url: "/services",
    siteName: "Webnox Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services | Webnox Digital - Software Development & Technology Solutions",
    description: "Explore our comprehensive range of digital services including web development, AI solutions, app development, branding, and digital transformation services.",
  },
}

export default function ServicesLayout({ children }) {
  return <>{children}</>
}
