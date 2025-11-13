import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Transformation Services in the UK | Webnox Digital",
  description: "Leading digital transformation solutions for UK businesses. Modernise your enterprise with cloud enablement, AI automation, and data analytics. GDPR compliant solutions.",
  keywords: "digital transformation UK, enterprise modernisation UK, cloud solutions UK, AI automation UK, legacy system modernisation, GDPR compliance",
  openGraph: {
    title: "Digital Transformation Services in the UK | Webnox Digital",
    description: "Leading digital transformation solutions for UK businesses. Modernise your enterprise with cloud enablement, AI automation, and data analytics.",
    url: "https://webnoxdigital.com/digital-transformation-services-uk",
    siteName: "Webnox Digital",
    images: [
      {
        url: "/images/digital-transformation-uk-og.webp",
        width: 1200,
        height: 630,
        alt: "Digital Transformation Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation Services in the UK | Webnox Digital",
    description: "Leading digital transformation solutions for UK businesses. Modernise your enterprise with cloud enablement, AI automation, and data analytics.",
    images: ["/images/digital-transformation-uk-og.webp"],
  },
  alternates: {
    canonical: "/3d-website-development-uk",
  },
  robots: { index: true, follow: true },
};

export default function DigitalTransformationUKLayout({ children }) {
  return (
    <html lang="en-GB" className={urbanist.className}>
      <body>{children}</body>
    </html>
  );
}