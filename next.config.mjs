/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect old uppercase URLs to lowercase
      {
        source: '/IT-consulting',
        destination: '/it-consulting',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/AI-automation',
        destination: '/ai-automation',
        permanent: true,
      },
      {
        source: '/Data-analytics',
        destination: '/data-analytics',
        permanent: true,
      },
      {
        source: '/Next-gen-marketing',
        destination: '/next-gen-marketing',
        permanent: true,
      },
      {
        source: '/Emerging-tech',
        destination: '/emerging-tech',
        permanent: true,
      },
      {
        source: '/N8N-automation-workflow',
        destination: '/n8n-automation-workflow',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
