'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowLeft,
  Bookmark,
  Eye,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Mock data - in a real app, this would come from your API
const mockBlogs = [
  {
    id: 1,
    title: "How AI and Emerging Tech are Transforming Businesses in 2025",
    excerpt: "In today's competitive world, technology is not just an enabler, it's a game-changer. From Artificial Intelligence (AI) to 3D Experiences, Cloud Solutions, and E-Commerce Automation, businesses are rapidly evolving to stay ahead.",
    content: `
      <div class="prose prose-lg max-w-none">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Introduction</h3>
          <p class="text-blue-800 leading-relaxed">
            In today's competitive world, technology is not just an enabler, it's a game-changer. From Artificial Intelligence (AI) to 3D Experiences, Cloud Solutions, and E-Commerce Automation, businesses are rapidly evolving to stay ahead. At Webnox Digital, we've worked with enterprises across industries, and one truth is clear: <strong>those who adapt early to AI and emerging technologies lead the market.</strong>
          </p>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            Why AI is the Driving Force of 2025
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            AI is no longer futuristic; it's today's reality. With predictive analytics, intelligent automation, and natural language processing, AI is helping businesses:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Automate routine tasks</span>
              </div>
              <p class="text-sm text-gray-600">Saving cost + time</p>
            </div>
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Enhance customer experiences</span>
              </div>
              <p class="text-sm text-gray-600">With chatbots & personalization</p>
            </div>
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Improve decision-making</span>
              </div>
              <p class="text-sm text-gray-600">Through real-time data insights</p>
            </div>
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Innovate faster</span>
              </div>
              <p class="text-sm text-gray-600">With AI-powered product development</p>
            </div>
          </div>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p class="text-black">
              <strong>Example:</strong> Retailers now use AI to predict consumer demand, while healthcare providers use AI to improve diagnosis accuracy.
            </p>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            Key Technologies Transforming Industries
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Here's a quick look at the tech stack shaping the future:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class=" text-black p-6 rounded-xl  border border-black">
              <h3 class="font-bold text-lg mb-2">AI & Machine Learning</h3>
              <p class="text-black">Smarter automation, data-driven growth.</p>
            </div>
            <div class=" text-black p-6 rounded-xl  border border-black">
              <h3 class="font-bold text-lg mb-2">3D & Immersive Tech</h3>
              <p class="text-black">Three.js, AR/VR - Interactive product showcases, virtual tours.</p>
            </div>
            <div class=" text-black p-6 rounded-xl  border border-black">
              <h3 class="font-bold text-lg mb-2">Next.js & React</h3>
              <p class="text-black">Fast, scalable, and SEO-optimized web solutions.</p>
            </div>
            <div class=" text-black p-6 rounded-xl  border border-black">
              <h3 class="font-bold text-lg mb-2">Cloud & DevOps</h3>
              <p class="text-black">Scalable infrastructure and secure deployments.</p>
            </div>
            <div class=" text-black p-6 rounded-xl  border border-black">
              <h3 class="font-bold text-lg mb-2">E-Commerce Solutions</h3>
              <p class="text-black">Personalized shopping experiences with AI-driven recommendations.</p>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            Industries Benefiting the Most
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Healthcare</span>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Retail & E-Commerce</span>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Finance & Banking</span>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Education</span>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <span class="font-semibold text-gray-900">Real Estate & Architecture</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            Challenges and Solutions
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            While AI brings massive potential, businesses often ask:
          </p>
          <div class="space-y-4">
            <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Is AI secure?</h4>
                  <p class="text-gray-700">→ <span class="text-green-600 font-semibold">Yes, with proper compliance & governance.</span></p>
                </div>
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Can AI integrate with existing systems?</h4>
                  <p class="text-gray-700">→ <span class="text-green-600 font-semibold">Absolutely, through APIs & custom solutions.</span></p>
                </div>
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">How long does implementation take?</h4>
                  <p class="text-gray-700">→ <span class="text-green-600 font-semibold">Typically 2–6 months depending on scope.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
          <h2 class="text-3xl font-bold mb-4">Conclusion: The Future is Now</h2>
          <p class="text-xl leading-relaxed text-blue-100">
            The businesses that thrive in 2025 will be the ones that embrace AI, immersive tech, and scalable digital solutions today. At Webnox Digital, we help organizations transition smoothly into the future of digital transformation with <strong>security, compliance, and innovation at the core.</strong>
          </p>
        </div>
      </div>
    `,
    author: "Webnox Team",
    category: "AI & Technology",
    tags: ["AI", "Emerging Tech", "Digital Transformation", "Business Innovation", "2025 Trends"],
    publishDate: "2025-01-15",
    readTime: "8 min read",
    image: "/images/aiservice.webp",
    featured: true,
    views: 1247,
    likes: 89,
    authorImage: "/webnox-logo.png",
    authorBio: "Our team of technology experts at Webnox Digital brings years of experience in AI, software development, and digital innovation."
  },

]

const BlogPost = () => {
  const params = useParams()
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const blogId = parseInt(params.id)
    const foundBlog = mockBlogs.find(b => b.id === blogId)
    setBlog(foundBlog)
    
    if (foundBlog) {
      // Find related blogs (same category, different ID)
      const related = mockBlogs
        .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
        .slice(0, 2)
      setRelatedBlogs(related)
    }
  }, [params.id])

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-blue-600 hover:text-blue-700">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const title = blog.title
    const text = blog.excerpt
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      default:
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blogs
        </Link>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
            {blog.featured && (
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(blog.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{blog.views} views</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isLiked
                  ? 'bg-red-100 text-red-600 border border-red-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{blog.likes + (isLiked ? 1 : 0)}</span>
            </button>
            
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isBookmarked
                  ? 'bg-blue-100 text-blue-600 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-gray-500" />
              <span className="text-gray-500">Share:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-[80%] h-[10%] object-contain rounded-2xl shadow-lg "
          />
        </motion.div>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-16 h-16 rounded-full object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.author}</h3>
              <p className="text-gray-600 leading-relaxed">{blog.authorBio}</p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.id}`}
                  className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogPost
