import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "3D Website Development Services in the USA | Webnox Digital",
  description: "Cutting-edge 3D website development services for US businesses. Immersive web experiences, interactive 3D designs, and modern web solutions across the United States.",
  keywords: "3D website development USA, immersive web design USA, interactive 3D websites USA, 3D web development USA, modern web solutions USA, Three.js development USA",
  openGraph: {
    title: "3D Website Development Services in the USA | Webnox Digital",
    description: "Cutting-edge 3D website development services for US businesses. Immersive web experiences and interactive 3D designs.",
    url: "https://www.webnoxdigital.com/3d-website-development-usa",
    siteName: "Webnox Digital",
    images: [
      {
        url: "/images/3dbg.webp",
        width: 1200,
        height: 630,
        alt: "3D Website Development Services USA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Website Development Services in the USA | Webnox Digital",
    description: "Cutting-edge 3D website development services for US businesses. Immersive web experiences and interactive 3D designs.",
    images: ["/images/3dbg.webp"],
  },
  alternates: {
    canonical: "https://www.webnoxdigital.com/3d-website-development-usa",
    languages: {
      'en-US': 'https://www.webnoxdigital.com/3d-website-development-usa',
      'en-GB': 'https://www.webnoxdigital.com/3d-website-development-uk',
      'x-default': 'https://www.webnoxdigital.com/3d-web-design-services',
    },
  },
  robots: { index: true, follow: true },
};

export default function ThreeDWebsiteUSALayout({ children }) {
  return (
    <html lang="en-US" className={urbanist.className}>
      <body>{children}</body>
    </html>
  );
}