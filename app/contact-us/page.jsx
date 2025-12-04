"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveUpRight, User, Mail, Phone, MessageSquare, Loader2, CheckCircle2, AlertCircle, ArrowRight, MapPin } from 'lucide-react'
import Robot from "@/Three/Models/Robot"
import Footer from "@/app/sections/Footer"

gsap.registerPlugin(ScrollTrigger)

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        enquiry: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    // GSAP refs for services and robot
    const servicesGridRef = useRef(null)
    const cardRefs = useRef([])
    const robotRef = useRef(null)
    const heroRef = useRef(null)
    const contactInfoRef = useRef(null)
    const formRef = useRef(null)
    cardRefs.current = []

    // Handle hash scrolling to form
    useEffect(() => {
        if (window.location.hash === '#contact-form') {
            setTimeout(() => {
                const formElement = document.getElementById('contact-form')
                if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        }
    }, [])

    useEffect(() => {
        // Check if we're on desktop (lg breakpoint and above)
        const isDesktop = window.innerWidth >= 1024
        
        if (isDesktop) {
            // Complex animations for desktop
            // Card animations
            if (servicesGridRef.current) {
                cardRefs.current.forEach((el, i) => {
                    if (!el) return
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            delay: i * 0.08,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 90%',
                                toggleActions: 'play none none none',
                            },
                        }
                    )
                })
            }

            // Robot animation setup for Spline component
            const setupRobotAnimations = () => {
                if (robotRef.current) {
                    // Set initial state
                    gsap.set(robotRef.current, { scale: 0, opacity: 0 })
                    
                    // Entrance animation with ScrollTrigger - scale from 0 to 1 and fade in
                    gsap.to(robotRef.current, {
                        scale: 1,
                        opacity: 1,
                        duration: 2,
                        ease: "back.out(1.7)",
                        delay: 0.5,
                        scrollTrigger: {
                            trigger: robotRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        },
                        onComplete: () => {
                            // Continuous floating animation using CSS transforms
                            gsap.to(robotRef.current, {
                                y: "+=15",
                                duration: 4,
                                ease: "power1.inOut",
                                yoyo: true,
                                repeat: -1
                            })

                            // Gentle rotation animation
                            gsap.to(robotRef.current, {
                                rotation: "+=5",
                                duration: 8,
                                ease: "power1.inOut",
                                yoyo: true,
                                repeat: -1
                            })
                        }
                    })
                } else {
                    setTimeout(setupRobotAnimations, 200)
                }
            }

            // Start robot animation setup after a small delay to ensure DOM is ready
            setTimeout(setupRobotAnimations, 100)
        } else {
            // Simple fade animations for mobile
            // Card animations for mobile
            if (servicesGridRef.current) {
                const validCards = cardRefs.current.filter(Boolean)
                
                gsap.set(validCards, { opacity: 0 })
                
                gsap.to(validCards, {
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: servicesGridRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                })
            }

            // Simple robot animation for mobile
            const setupMobileRobotAnimations = () => {
                if (robotRef.current) {
                    // Set initial state
                    gsap.set(robotRef.current, { scale: 0, opacity: 0 })
                    
                    // Simple entrance animation for mobile
                    gsap.to(robotRef.current, {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        delay: 0.3
                    })
                } else {
                    setTimeout(setupMobileRobotAnimations, 200)
                }
            }

            setTimeout(setupMobileRobotAnimations, 100)

            // Hero section animations for mobile
            if (heroRef.current) {
                gsap.set(heroRef.current, { opacity: 0 })
                gsap.to(heroRef.current, {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                })
            }

            // Contact info section animations for mobile
            if (contactInfoRef.current) {
                gsap.set(contactInfoRef.current, { opacity: 0 })
                gsap.to(contactInfoRef.current, {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contactInfoRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                })
            }

            // Form section animations for mobile
            if (formRef.current) {
                gsap.set(formRef.current, { opacity: 0 })
                gsap.to(formRef.current, {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                })
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Validate required fields
        if (!formData.name.trim() || !formData.email.trim() || !formData.contactNumber.trim() || !formData.enquiry.trim()) {
            setSubmitStatus('Please fill in all required fields')
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // Clear status message when user starts typing
        if (submitStatus) {
            setSubmitStatus('')
        }
    }

    // Helper to set refs for cards
    const setCardRef = (el, i) => {
        cardRefs.current[i] = el
    }

    return (
        <div className="bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white min-h-screen">
            {/* Banner Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex items-center"
                style={{
                    backgroundImage: 'url(/contactus-banner.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="w-full mx-auto rounded-xl my-4 md:my-6 lg:my-10 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white relative overflow-hidden"
                style={{
                    minHeight: 'auto',
                    height: 'auto',
                }}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full py-8 md:py-12 lg:py-16">
                    {/* Left Column: Contact Information */}
                    <div className="w-full space-y-6 md:space-y-8 flex flex-col justify-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 md:mb-4">
                                We're here to answer your questions.
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600">
                                Have a question, suggestion, or just want to say hi? We're here and happy to hear from you!
                            </p>
                        </div>

                        {/* Contact Options */}
                        <div className="space-y-4 md:space-y-6">
                            {/* Office Location */}
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Office Location</h3>
                                    <div className="text-sm md:text-base text-gray-600">
                                        <p>No 721/2, Venky complex,Second floor, cross-cut road,</p>
                                        <p>Seth Narang Das Layout,Coimbatore – 641 012.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div 
                                className="flex items-start gap-3 md:gap-4 cursor-pointer group"
                                onClick={() => {
                                    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@webnoxdigital.com&su=Contact from Website&body=Hello, I would like to get in touch with you.';
                                    const mailtoUrl = 'mailto:info@webnoxdigital.com?subject=Contact from Website&body=Hello, I would like to get in touch with you.';
                                    window.open(gmailUrl, '_blank');
                                    setTimeout(() => {
                                        window.open(mailtoUrl, '_self');
                                    }, 100);
                                }}
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#25C3E5] group-hover:to-[#19b5fe] transition-all shadow-md">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Send a Message</h3>
                                    <p className="text-sm md:text-base text-gray-600 group-hover:text-[#25C3E5] transition-colors break-all">info@webnoxdigital.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Make a Phone Call</h3>
                                    <div className="space-y-1">
                                        <a href="tel:+919786557739" className="block text-sm md:text-base text-gray-600 hover:text-[#25C3E5] transition-colors">
                                            +91 97865 57739
                                        </a>
                                        <a href="tel:+919585125566" className="block text-sm md:text-base text-gray-600 hover:text-[#25C3E5] transition-colors">
                                            +91 95851 25566
                                        </a>
                                        <a href="tel:+916380072252" className="block text-sm md:text-base text-gray-600 hover:text-[#25C3E5] transition-colors">
                                            +91 63800 72252
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Section */}
                    <div className="w-full">
                        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg">
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-3">Get In Touch</h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    Have a question, suggestion, or just want to say hi? Fill out the form below and we'll get back to you soon.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        placeholder="Phone Number"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="enquiry"
                                        placeholder="Your Message"
                                        value={formData.enquiry}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all resize-none text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] hover:from-[#25C3E5] hover:to-[#19b5fe] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <span>Send Message</span>
                                    )}
                                </button>
                                {submitStatus && (
                                    <div className={`mt-4 flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${
                                        submitStatus.includes('successfully') 
                                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                    }`}>
                                        {submitStatus.includes('successfully') ? (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ) : (
                                            <AlertCircle className="h-5 w-5" />
                                        )}
                                        <span>{submitStatus}</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section with Two Columns */}
            <section id="contact-form" ref={formRef} className="py-12 md:py-16 lg:py-20 xl:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Column: Robot */}
                        <div className="flex items-center justify-center w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] relative mx-auto">
                            <div 
                                ref={robotRef} 
                                className="flex items-center justify-center transform-gpu mx-auto"
                                style={{ transform: 'scale(0)', opacity: 0 }}
                            >
                                <Robot />
                            </div>
                        </div>

                        {/* Right Column: Contact Information */}
                        
                        <div className="flex-1 flex flex-col justify-center items-start space-y-4 md:space-y-6 w-full lg:w-auto">
                        <div className="space-y-4 md:space-y-5 lg:space-y-6">
                            <h1 className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            We Create Digital Momentum 
                            </h1>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text leading-tight">
                            for Ambitious Brands
                            </h2>
                        </div>
                        <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 italic max-w-lg">
                        Need direction or deeper insight? Book a session with our team and move seamlessly into your next strategic phase.                       </blockquote>
                    </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default ContactPage


