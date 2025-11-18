import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Transformation Services in the USA | Webnox Digital",
  description: "Leading digital transformation solutions for US businesses. Modernise your enterprise with cloud enablement, AI automation, and data analytics. SOC 2 compliant solutions.",
  keywords: "digital transformation USA, enterprise modernisation USA, cloud solutions USA, AI automation USA, legacy system modernisation, SOC 2 compliance",
  openGraph: {
    title: "Digital Transformation Services in the USA | Webnox Digital",
    description: "Leading digital transformation solutions for US businesses. Modernise your enterprise with cloud enablement, AI automation, and data analytics.",
    url: "/digital-transformation-services-usa",
    siteName: "Webnox Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation Services in the USA | Webnox Digital",
    description: "Leading digital transformation solutions for US businesses. Modernise your enterprise with cloud enablement, AI automation, and data analytics.",
  },
  alternates: {
    canonical: "https://www.webnoxdigital.com/digital-transformation-services-usa",
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