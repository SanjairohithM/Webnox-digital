export const metadata = {
  title: "3D Web Design Services for Businesses in the US & UK",
  description:
    "We provide professional 3D web design services for businesses across the US & UK. From immersive visuals to interactive experiences, we deliver high-performance, visually stunning websites.",
  keywords: "3D web design services, 3D website development, immersive web design, interactive 3D websites, Three.js development, WebGL websites, 3D web solutions",
  alternates: { 
    canonical: "https://www.webnoxdigital.com/3d-web-design-services",
    languages: {
      'en-US': 'https://www.webnoxdigital.com/3d-website-development-usa',
      'en-GB': 'https://www.webnoxdigital.com/3d-website-development-uk',
      'x-default': 'https://www.webnoxdigital.com/3d-web-design-services',
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "3D Web Design Services for Businesses in the US & UK",
    description:
      "We provide professional 3D web design services for businesses across the US & UK. From immersive visuals to interactive experiences, we deliver high-performance, visually stunning websites.",
    url: "https://www.webnoxdigital.com/3d-web-design-services",
    siteName: "Webnox Digital",
    images: [
      {
        url: "/images/3dbg.webp",
        width: 1200,
        height: 630,
        alt: "3D Web Design Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Web Design Services for Businesses in the US & UK",
    description:
      "We provide professional 3D web design services for businesses across the US & UK. From immersive visuals to interactive experiences, we deliver high-performance, visually stunning websites.",
    images: ["/images/3dbg.webp"],
  },
}

export default function Layout({ children }) {
  return <>{children}</>;
}


