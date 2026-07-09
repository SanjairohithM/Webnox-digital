export const metadata = {
  title: "3D Web Design Services | Interactive 3D Website Agency",
  description:
    "Create interactive 3D websites with Webnox Digital. We build performance optimized 3D website experiences using Three.js, WebGL, and modern web technologies.",
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
    title: "3D Web Design Services | Interactive 3D Website Agency",
    description:
      "Create interactive 3D websites with Webnox Digital. We build performance optimized 3D website experiences using Three.js, WebGL, and modern web technologies.",
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
    title: "3D Web Design Services | Interactive 3D Website Agency",
    description:
      "Create interactive 3D websites with Webnox Digital. We build performance optimized 3D website experiences using Three.js, WebGL, and modern web technologies.",
    images: ["/images/3dbg.webp"],
  },
}

export default function Layout({ children }) {
  return <>{children}</>;
}


