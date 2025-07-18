"use client"

import React, { useState, useEffect, useRef } from 'react'
import { X, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { gsap } from 'gsap'

// Professional Poppers component using GSAP
const ProfessionalPoppers = ({ show, onComplete }) => {
  const containerRef = useRef(null)
  const leftPopperRef = useRef(null)
  const rightPopperRef = useRef(null)

  const colors = [
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#45B7D1", // Blue
    "#96CEB4", // Green
    "#FFEAA7", // Yellow
    "#DDA0DD", // Plum
    "#FF8A80", // Light Red
    "#80CBC4", // Light Teal
    "#90CAF9", // Light Blue
    "#C8E6C9", // Light Green
    "#FFF59D", // Light Yellow
    "#F8BBD9", // Pink
    "#D1C4E9", // Lavender
    "#FFCC80", // Orange
    "#B39DDB", // Purple
    "#A5D6A7", // Mint
  ]

  const createConfetti = (container, side) => {
    const confettiCount = 150
    const confettiElements = []

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti-piece"

      // Create torn paper-like shapes
      const width = Math.random() * 12 + 6
      const height = Math.random() * 16 + 8

      confetti.style.position = "absolute"
      confetti.style.width = width + "px"
      confetti.style.height = height + "px"
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.bottom = "0px"
      confetti.style[side] = "20px"
      confetti.style.zIndex = "1000"

      // Create irregular torn paper shapes using clip-path
      const clipPaths = [
        "polygon(0% 0%, 85% 5%, 90% 35%, 95% 70%, 80% 90%, 25% 95%, 10% 60%, 5% 25%)",
        "polygon(5% 0%, 95% 10%, 85% 40%, 100% 75%, 70% 90%, 20% 85%, 0% 50%, 15% 20%)",
        "polygon(10% 5%, 80% 0%, 100% 30%, 90% 65%, 75% 95%, 30% 90%, 5% 70%, 0% 35%)",
        "polygon(0% 15%, 70% 0%, 95% 25%, 85% 55%, 100% 85%, 40% 95%, 15% 80%, 5% 45%)",
        "polygon(15% 0%, 90% 15%, 100% 45%, 80% 75%, 85% 100%, 25% 85%, 0% 60%, 10% 25%)",
        "polygon(5% 10%, 75% 5%, 90% 40%, 95% 70%, 70% 95%, 35% 90%, 10% 65%, 0% 30%)",
        "polygon(20% 0%, 85% 10%, 100% 35%, 75% 65%, 90% 95%, 30% 85%, 5% 55%, 15% 25%)",
        "polygon(0% 20%, 65% 0%, 95% 30%, 85% 60%, 100% 90%, 45% 95%, 20% 75%, 10% 40%)",
      ]

      confetti.style.clipPath = clipPaths[Math.floor(Math.random() * clipPaths.length)]

      // Add some texture and depth
      confetti.style.boxShadow = `0 1px 3px rgba(0,0,0,0.2)`

      // Random slight rotation for more natural look
      confetti.style.transform = `rotate(${Math.random() * 45 - 22.5}deg)`

      container.appendChild(confetti)
      confettiElements.push(confetti)
    }

    return confettiElements
  }

  const animatePoppers = () => {
    if (!leftPopperRef.current || !rightPopperRef.current) return

    // Clear previous confetti
    leftPopperRef.current.innerHTML = ""
    rightPopperRef.current.innerHTML = ""

    // Create confetti for both sides
    const leftConfetti = createConfetti(leftPopperRef.current, "left")
    const rightConfetti = createConfetti(rightPopperRef.current, "right")

    // Create timeline for left popper
    const leftTl = gsap.timeline()
    leftConfetti.forEach((confetti, index) => {
      leftTl.to(
        confetti,
        {
          x: Math.random() * 400 + 100,
          y: -(Math.random() * 500 + 300),
          rotation: Math.random() * 720 - 360,
          scale: Math.random() * 0.8 + 0.2,
          opacity: 0,
          duration: Math.random() * 2 + 1,
          ease: "power2.out",
          delay: Math.random() * 0.3,
        },
        index * 0.005,
      )
    })

    // Create timeline for right popper
    const rightTl = gsap.timeline()
    rightConfetti.forEach((confetti, index) => {
      rightTl.to(
        confetti,
        {
          x: -(Math.random() * 400 + 100),
          y: -(Math.random() * 500 + 300),
          rotation: Math.random() * 720 - 360,
          scale: Math.random() * 0.8 + 0.2,
          opacity: 0,
          duration: Math.random() * 2 + 1,
          ease: "power2.out",
          delay: Math.random() * 0.3,
        },
        index * 0.005,
      )
    })

    // Cleanup after animation
    setTimeout(() => {
      leftConfetti.forEach((confetti) => confetti.remove())
      rightConfetti.forEach((confetti) => confetti.remove())
      onComplete()
    }, 3000)
  }

  useEffect(() => {
    if (show) {
      animatePoppers()
    }
  }, [show])

  if (!show) return null

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-[120]">
      {/* Left Popper */}
      <div ref={leftPopperRef} className="absolute bottom-0 left-0 w-20 h-20" />
      
      {/* Right Popper */}
      <div ref={rightPopperRef} className="absolute bottom-0 right-0 w-20 h-20" />
    </div>
  )
}

// Toast Component
const Toast = ({ show, message, type = 'success', onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 4000) // Auto dismiss after 4 seconds
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  const isSuccess = type === 'success'

  return (
    <div className="fixed top-4 right-4 z-[130] animate-in slide-in-from-top-2 duration-300">
      <div className={`bg-white border rounded-lg shadow-lg p-4 max-w-sm ${
        isSuccess ? 'border-green-200' : 'border-red-200'
      }`}>
        <div className="flex items-start gap-3">
          {isSuccess ? (
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          )}
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 mb-1">
              {isSuccess ? 'Success! 🎉' : 'Error'}
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CallbackPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setToastMessage('Please enter a valid email address.')
      setToastType('error')
      setShowToast(true)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // You can integrate with your existing contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Email Callback Request',
          contactNumber: 'N/A',
          enquiry: 'Requested a callback via email',
          email: email
        }),
      })

      if (response.ok) {
        // Trigger confetti effect
        setShowConfetti(true)
        
        // Show toast after confetti completes
        setTimeout(() => {
          setToastMessage('Callback request submitted! We\'ll contact you shortly.')
          setToastType('success')
          setShowToast(true)
          setEmail('')
          
          // Close popup after showing toast
          setTimeout(() => {
            onClose()
          }, 1000)
        }, 2000) // Wait for confetti to be visible
      } else {
        setToastMessage('Failed to submit request. Please try again.')
        setToastType('error')
        setShowToast(true)
      }
    } catch (error) {
      console.error('Error submitting callback request:', error)
      setToastMessage('Network error. Please check your connection and try again.')
      setToastType('error')
      setShowToast(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Professional Poppers Effect */}
      <ProfessionalPoppers 
        show={showConfetti} 
        onComplete={() => setShowConfetti(false)} 
      />
      
      <div 
        className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200" 
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Looking for something specific?
          </h2>
          <p className="text-lg font-semibold text-blue-600">
            We're just a call away.
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-6">
          Share your Email to get a call-back.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              required
            />
          </div>

          {/* Call Back Button */}
          <button
            type="submit"
            disabled={!email.trim() || isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mb-4"
          >
            <Mail size={16} />
            {isSubmitting ? 'Submitting...' : 'Contact me back'}
          </button>
        </form>

        {/* Security Text */}
        <p className="text-xs text-gray-500 text-center mb-4">
          Rest assured your details are secure with us
        </p>

        {/* Additional Options */}
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-600">
            Have a custom requirement?{' '}
            <a href="/contact" className="text-blue-600 hover:underline">
              Write to us
            </a>
          </p>
          <p className="text-sm text-gray-600">
            In a hurry?{' '}
            <a href="tel:08042783325" className="text-blue-600 hover:underline">
              Call us now 08042783325
            </a>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-4">
          *We'll respond to your email within 24 hours
        </p>
      </div>
    </div>

    {/* Toast Notification */}
    <Toast 
      show={showToast} 
      message={toastMessage}
      type={toastType}
      onClose={() => setShowToast(false)} 
    />
    </>
  )
} 