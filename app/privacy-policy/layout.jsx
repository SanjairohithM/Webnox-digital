export const metadata = {
  title: "Privacy Policy | Webnox Digital - Data Protection & Privacy",
  description:
    "Read Webnox Digital's Privacy Policy to understand how we collect, use, and protect your personal and organizational data. Learn about our commitment to data security and privacy.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Webnox Digital - Data Protection & Privacy",
    description:
      "Read Webnox Digital's Privacy Policy to understand how we collect, use, and protect your personal and organizational data.",
    url: "/privacy-policy",
    siteName: "Webnox Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Webnox Digital - Data Protection & Privacy",
    description:
      "Read Webnox Digital's Privacy Policy to understand how we collect, use, and protect your personal and organizational data.",
  },
}

export default function Layout({ children }) {
  return <>{children}</>;
}

