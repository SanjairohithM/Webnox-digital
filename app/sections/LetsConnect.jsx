"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PhysicsSpheres from "./physics-spheres"

gsap.registerPlugin(ScrollTrigger)

function LetsConnect() {
  const sectionRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const inputRef = useRef(null)
  const buttonRef = useRef(null)
  const r3fContainerRef = useRef(null)
  const techIconsContainerRef = useRef(null)
  const individualTechIconsRef = useRef([])

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    enquiry: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.contactNumber || !formData.enquiry) {
      setSubmitStatus('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('Message sent successfully! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', contactNumber: '', enquiry: '' })
      } else {
        setSubmitStatus(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  useGSAP(
    () => {
      const elementsToAnimate = [
        subtitleRef.current,
        titleRef.current,
        inputRef.current,
        buttonRef.current,
        r3fContainerRef.current,
      ]

      gsap.set(elementsToAnimate, { opacity: 0, y: 50 })
      gsap.set(individualTechIconsRef.current, { opacity: 0, y: 30 })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center+=100",
        once: true,
        onEnter: () => {
          gsap.to(elementsToAnimate, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          })
          gsap.to(individualTechIconsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.5,
          })
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white overflow-hidden font-urbanist"
    >
      <div
        ref={r3fContainerRef}
        className="absolute inset-0 z-0 opacity-0"
      >
        <PhysicsSpheres />
      </div>

      <div className="relative z-30 flex flex-col items-center text-center space-y-8 max-w-xl w-full">
        <p ref={subtitleRef} className="text-lg text-gray-700 opacity-0">
          Tell About Yourself
        </p>
        <h1 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-gray-900 opacity-0 whitespace-nowrap">
          Let's Connect, What is your name?
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
          <div ref={inputRef} className="opacity-0">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 text-lg rounded-full border-2 border-black/80 focus:ring-2 focus:ring-[#4ecdc4] focus:border-[#4ecdc4] transition-shadow placeholder:text-gray-400"
                aria-label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 text-lg rounded-full border-2 border-black/80 focus:ring-2 focus:ring-[#4ecdc4] focus:border-[#4ecdc4] transition-shadow placeholder:text-gray-400"
                aria-label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full p-4 text-lg rounded-full border-2 border-black/80 focus:ring-2 focus:ring-[#4ecdc4] focus:border-[#4ecdc4] transition-shadow placeholder:text-gray-400"
                aria-label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
              <textarea
                placeholder="Tell us about your enquiry..."
                rows="4"
                className="w-full p-4 text-lg rounded-2xl border-2 border-black/80 focus:ring-2 focus:ring-[#4ecdc4] focus:border-[#4ecdc4] transition-shadow placeholder:text-gray-400 resize-none"
                aria-label="Enquiry"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div ref={buttonRef} className="opacity-0">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-12 py-6 text-lg bg-[#4ecdc4] hover:bg-[#45b8af] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

              {submitStatus && (
          <div className={`mt-4 p-4 text-center text-sm rounded-lg ${
            submitStatus.includes('successfully') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {submitStatus}
          </div>
        )}

    </section>
  )
}

export default LetsConnect