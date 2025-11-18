export const metadata = {
  title: "Case Studies | Webnox Digital - Real Results & Success Stories",
  description: "Explore our portfolio of successful projects and case studies. See how we've helped businesses achieve their digital transformation goals with innovative solutions and measurable results.",
  keywords: "case studies, success stories, portfolio, project examples, digital transformation results, client success, web development case studies",
  alternates: { canonical: "https://www.webnoxdigital.com/case-studies" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Case Studies | Webnox Digital - Real Results & Success Stories",
    description: "Explore our portfolio of successful projects and case studies. See how we've helped businesses achieve their digital transformation goals.",
    url: "/case-studies",
    siteName: "Webnox Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Webnox Digital - Real Results & Success Stories",
    description: "Explore our portfolio of successful projects and case studies. See how we've helped businesses achieve their digital transformation goals.",
  },
}

export default function CaseStudiesLayout({ children }) {
  return <>{children}</>
}
