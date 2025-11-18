export const metadata = {
  title: "Enterprise Web Solutions UK | Webnox Digital",
  description: "Comprehensive enterprise web solutions for UK businesses. Custom web development, cloud solutions, and digital transformation services for large-scale enterprises across the United Kingdom.",
  keywords: "enterprise web solutions UK, enterprise web development, corporate web solutions, large scale web development, enterprise software UK",
  alternates: { canonical: "https://www.webnoxdigital.com/enterprise-web-solutions-uk" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enterprise Web Solutions UK | Webnox Digital",
    description: "Comprehensive enterprise web solutions for UK businesses. Custom web development, cloud solutions, and digital transformation services for large-scale enterprises.",
    url: "/enterprise-web-solutions-uk",
    siteName: "Webnox Digital",
    type: "website",
    locale: "en_GB",
  },
}

export default function EnterpriseWebSolutionsUKLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
