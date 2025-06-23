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
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Define steps
  const steps = [
    {
      field: 'name',
      placeholder: 'Your Name',
      type: 'text',
      title: "Let's Connect, What is your name?"
    },
    {
      field: 'email',
      placeholder: 'Your Email',
      type: 'email',
      title: "What's your email address?"
    },
    {
      field: 'contactNumber',
      placeholder: 'Your Contact Number',
      type: 'tel',
      title: "How can we reach you?"
    },
    {
      field: 'enquiry',
      placeholder: 'Tell us about your enquiry...',
      type: 'textarea',
      title: "What can we help you with?"
    }
  ]

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle next step
  const handleNext = () => {
    const currentField = steps[currentStep].field
    const currentValue = formData[currentField]
    
    // Validate current field
    if (!currentValue.trim()) {
      setSubmitStatus('Please fill in this field')
      return
    }
    
    setSubmitStatus('')
    
    // Animate out current content
    gsap.to([titleRef.current, inputRef.current, buttonRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentStep(prev => prev + 1)
        // Animate in new content
        gsap.to([titleRef.current, inputRef.current, buttonRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1
        })
      }
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate final field
    if (!formData.enquiry.trim()) {
      setSubmitStatus('Please tell us about your enquiry')
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
        setCurrentStep(0)
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

  // Handle going back
  const handleBack = () => {
    if (currentStep > 0) {
      setSubmitStatus('')
      gsap.to([titleRef.current, inputRef.current, buttonRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setCurrentStep(prev => prev - 1)
          gsap.to([titleRef.current, inputRef.current, buttonRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1
          })
        }
      })
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

  const currentStepData = steps[currentStep]
  const isLastStep = currentStep === steps.length - 1

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
        
        {/* Progress indicator */}
        <div className="flex space-x-2 mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index <= currentStep ? 'bg-[#4ecdc4]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <h1 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-gray-900 opacity-0">
          {currentStepData.title}
        </h1>
        
        <form onSubmit={isLastStep ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="w-full max-w-md space-y-8">
          <div ref={inputRef} className="opacity-0">
            {currentStepData.type === 'textarea' ? (
              <textarea
                placeholder={currentStepData.placeholder}
                rows="4"
                className="w-full p-4 text-lg rounded-2xl border-2 border-black/80 focus:ring-2 focus:ring-[#4ecdc4] focus:border-[#4ecdc4] transition-shadow placeholder:text-gray-400 resize-none"
                name={currentStepData.field}
                value={formData[currentStepData.field]}
                onChange={handleInputChange}
                required
          />
            ) : (
          <input
                type={currentStepData.type}
                placeholder={currentStepData.placeholder}
            className="w-full p-4 text-lg rounded-full border-2 border-black/80 focus:ring-2 focus:ring-[#4ecdc4] focus:border-[#4ecdc4] transition-shadow placeholder:text-gray-400"
                name={currentStepData.field}
                value={formData[currentStepData.field]}
                onChange={handleInputChange}
                required
              />
            )}
          </div>
          
          <div ref={buttonRef} className="opacity-0 space-y-4">
            <div className="flex gap-4">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-8 py-4 text-lg bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors"
                >
                  Back
                </button>
              )}
          <button
              type="submit"
              disabled={isSubmitting}
                className="flex-1 px-12 py-4 text-lg bg-[#4ecdc4] hover:bg-[#45b8af] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full transition-colors"
          >
                {isSubmitting ? 'Sending...' : (isLastStep ? 'Send Message' : 'Next')}
          </button>
            </div>
        </div>
        </form>

              {submitStatus && (
          <div className={`mt-4 p-4 text-center text-sm rounded-lg ${
            submitStatus.includes('successfully') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {submitStatus}
          </div>
        )}
      </div>
    </section>
  )
}

export default LetsConnect