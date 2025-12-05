import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "3D Website Development Services in the UK | Webnox Digital",
  description: "Cutting-edge 3D website development services for UK businesses. Immersive web experiences, interactive 3D designs, and modern web solutions across the United Kingdom.",
  keywords: "3D website development UK, immersive web design UK, interactive 3D websites UK, 3D web development UK, modern web solutions UK, Three.js development UK",
  openGraph: {
    title: "3D Website Development Services in the UK | Webnox Digital",
    description: "Cutting-edge 3D website development services for UK businesses. Immersive web experiences and interactive 3D designs.",
    url: "https://www.webnoxdigital.com/3d-website-development-uk",
    siteName: "Webnox Digital",
    images: [
      {
        url: "/images/3dbg.webp",
        width: 1200,
        height: 630,
        alt: "3D Website Development Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Website Development Services in the UK | Webnox Digital",
    description: "Cutting-edge 3D website development services for UK businesses. Immersive web experiences and interactive 3D designs.",
    images: ["/images/3dbg.webp"],
  },
  alternates: {
    canonical: "https://www.webnoxdigital.com/3d-website-development-uk",
    languages: {
      'en-GB': 'https://www.webnoxdigital.com/3d-website-development-uk',
      'en-US': 'https://www.webnoxdigital.com/3d-website-development-usa',
      'x-default': 'https://www.webnoxdigital.com/3d-web-design-services',
    },
  },
  robots: { index: true, follow: true },
};

export default function ThreeDWebsiteUKLayout({ children }) {
  return (
    <html lang="en-GB" className={urbanist.className}>
      <body>{children}</body>
    </html>
  );
}