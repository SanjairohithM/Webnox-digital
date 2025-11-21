import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found | Webnox Digital',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#25C3E5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3FD7F1] transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

