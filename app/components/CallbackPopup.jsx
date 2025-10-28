"use client"

import { useState, useEffect, useRef } from "react"
import { X, Phone, Mail, CheckCircle, AlertCircle, Sparkles } from "lucide-react"
import { gsap } from "gsap"
import Lottie from "lottie-react"

// Lottie Confetti Animation
const LottieConfetti = ({ show, onComplete }) => {
  const [confettiData, setConfettiData] = useState(null)
  const lottieRef = useRef(null)

  useEffect(() => {
    // Load the confetti animation data
    fetch('/Confetti.json')
      .then(response => response.json())
      .then(data => setConfettiData(data))
      .catch(error => console.error('Error loading confetti animation:', error))
  }, [])

  useEffect(() => {
    if (show && lottieRef.current) {
      // Play the animation
      lottieRef.current.play()
      
      // Complete after animation duration (adjust as needed)
      const timer = setTimeout(() => {
        onComplete()
      }, 5000) // 5 seconds

      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!show || !confettiData) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[120]">
      <Lottie
        lottieRef={lottieRef}
        animationData={confettiData}
        loop={false}
        autoplay={false}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

// Enhanced Toast Component
const EnhancedToast = ({ show, message, type = "success", onClose }) => {
  const toastRef = useRef(null)

  useEffect(() => {
    if (show && toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        {
          y: -100,
          opacity: 0,
          scale: 0.8,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
      )

      const timer = setTimeout(() => {
        if (toastRef.current) {
          gsap.to(toastRef.current, {
            y: -100,
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.in",
            onComplete: onClose,
          })
        }
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  const isSuccess = type === "success"

  return (
    <div className="fixed top-6 right-6 z-[130]">
      <div
        ref={toastRef}
        className={`relative overflow-hidden rounded-2xl shadow-2xl p-6 max-w-sm backdrop-blur-xl ${
          isSuccess
            ? "bg-gradient-to-r from-green-50/90 to-emerald-50/90 border border-green-200/50"
            : "bg-gradient-to-r from-red-50/90 to-rose-50/90 border border-red-200/50"
        }`}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 opacity-20 ${
            isSuccess ? "bg-gradient-to-br from-green-400 to-emerald-600" : "bg-gradient-to-br from-red-400 to-rose-600"
          }`}
        />

        <div className="relative flex items-start gap-4">
          <div className={`p-2 rounded-full ${isSuccess ? "bg-green-100" : "bg-red-100"}`}>
            {isSuccess ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600" />
            )}
          </div>

          <div className="flex-1">
            <p className="text-lg font-bold text-gray-900 mb-2">
              {isSuccess ? "Success! 🎉" : "Oops! Something went wrong"}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
          </div>

          <button
            onClick={() => {
              gsap.to(toastRef.current, {
                y: -100,
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: "power2.in",
                onComplete: onClose,
              })
            }}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-white/50"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AdvancedCallbackPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("success")

  const popupRef = useRef(null)
  const overlayRef = useRef(null)
  const headerRef = useRef(null)
  const formRef = useRef(null)
  const buttonRef = useRef(null)

  // Enhanced popup animations
  useEffect(() => {
    if (isOpen && popupRef.current && overlayRef.current) {
      // Animate overlay
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" })

      // Animate popup with more sophisticated entrance
      gsap.fromTo(
        popupRef.current,
        {
          scale: 0.7,
          opacity: 0,
          y: 50,
          rotationX: -15,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
      )

      // Stagger animate content
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo(
        headerRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      ).fromTo(
        formRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.2",
      )
    }
  }, [isOpen])

  // Button hover animations
  useEffect(() => {
    if (buttonRef.current) {
      const button = buttonRef.current

      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.02,
          y: -2,
          duration: 0.2,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        })
      }

      button.addEventListener("mouseenter", handleMouseEnter)
      button.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter)
        button.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isOpen])

  const handleClose = () => {
    console.log("Close button clicked") // Debug log
    onClose() // Direct close without animation for testing
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setToastMessage("Please enter a valid email address.")
      setToastType("error")
      setShowToast(true)
      return
    }

    setIsSubmitting(true)

    // Animate button during submission
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      })
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Email Callback Request",
          contactNumber: "N/A",
          enquiry: "Requested a callback via email",
          email: email,
        }),
      })

      if (response.ok) {
        setShowConfetti(true)

        setTimeout(() => {
          setToastMessage("Callback request submitted! We'll contact you shortly.")
          setToastType("success")
          setShowToast(true)
          setEmail("")

          setTimeout(() => {
            handleClose()
          }, 1500)
        }, 2000)
      } else {
        setToastMessage("Failed to submit request. Please try again.")
        setToastType("error")
        setShowToast(true)
      }
    } catch (error) {
      console.error("Error submitting callback request:", error)
      setToastMessage("Network error. Please check your connection and try again.")
      setToastType("error")
      setShowToast(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <LottieConfetti show={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[110] bg-gradient-to-br from-black/60 via-purple-900/20 to-black/60 backdrop-blur-md flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <div
          ref={popupRef}
          className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full p-8 border border-white/20 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-orange-600/20 rounded-full blur-2xl" />

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-all duration-200 p-2 rounded-full hover:bg-gray-100/50 hover:scale-110 z-50"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log("X button clicked")
              handleClose()
            }}
          >
            <X size={22} />
          </button>

          {/* Header */}
          <div ref={headerRef} className="mb-8 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Looking for something specific?
                </h2>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  We're just a call away.
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Share your email to get a personalized callback from our experts.
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm font-medium"
                required
              />
            </div>

            <button
              ref={buttonRef}
              type="submit"
              disabled={!email.trim() || isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Mail size={18} />
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </div>
              ) : (
                "Contact me back"
              )}
            </button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50/50 rounded-xl p-3">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              Rest assured your details are secure with us
            </div>

            {/* Additional Options */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Have a custom requirement?{" "}
                  <a
                    href="/contact-us"
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                  >
                    Write to us
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  In a hurry?{" "}
                  <a
                    href="tel:+919786557739"
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    <Phone size={14} />
                    Call us now +91 97865 57739
                  </a>
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 text-center pt-2">*We'll respond to your email within 24 hours</p>
          </form>
        </div>
      </div>

      <EnhancedToast show={showToast} message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />
    </>
  )
}
