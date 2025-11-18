import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "3D Website Development USA | Webnox Digital",
  description: "Cutting-edge 3D website development services for US businesses. Immersive web experiences, interactive 3D designs, and modern web solutions across the United States.",
  keywords: "3D website development USA, immersive web design, interactive 3D websites, 3D web development, modern web solutions USA",
  openGraph: {
    title: "3D Website Development USA | Webnox Digital",
    description: "Cutting-edge 3D website development services for US businesses. Immersive web experiences and interactive 3D designs.",
    url: "/3d-website-development-usa",
    siteName: "Webnox Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Website Development USA | Webnox Digital",
    description: "Cutting-edge 3D website development services for US businesses. Immersive web experiences and interactive 3D designs.",
  },
  alternates: {
    canonical: "https://www.webnoxdigital.com/3d-website-development-usa",
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