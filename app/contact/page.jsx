"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveUpRight } from 'lucide-react'
import Robot from "@/Three/Models/Robot"

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
                console.log('Setting up robot animations...')
                console.log('Robot ref current:', robotRef.current)
                
                if (robotRef.current) {
                    console.log('Robot container found, setting up CSS animations')
                    
                    // Entrance animation - scale from 0 to 1
                    gsap.to(robotRef.current, {
                        scale: 1,
                        duration: 2,
                        ease: "back.out(1.7)",
                        delay: 0.5,
                        onComplete: () => console.log('Robot entrance animation complete')
                    })

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
                } else {
                    console.log('Robot container not found, retrying in 200ms...')
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
                    // Simple entrance animation for mobile
                    gsap.to(robotRef.current, {
                        scale: 1,
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
        <div className=" bg-white mt-55 ">
            {/* Hero Section */}
       

            {/* demobero */}
            <section
                ref={heroRef}
                className="max-w-[calc(100%-10rem)] mx-auto rounded-xl my-10 flex items-center"
                style={{
                    backgroundImage: 'url(/images/maskgroup.webp)',
                    backgroundColor: '#E2F7FF',
                    // backgroundSize: 'cover',
                    backgroundPosition: 'left',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '600px',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 w-full p-12">
                    {/* Left Text Section */}
                    <div className="flex-1 flex flex-col justify-center items-start space-y-4 ">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white bg-[#19b5fe] px-4 py-2 rounded-xl shadow-lg">
                            We Would Love To
                        </h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
                            Hear From You
                        </h2>
                    </div>

                    {/* Right Quote Section */}
                    <div className="flex-1 flex items-center justify-center">
                        <blockquote className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 italic max-w-md">
                            "Whether you're exploring our services, need expert guidance, or just want to get in touch — we're here to support you every step of the way."
                        </blockquote>
                    </div>
                </div>
            </section>


            {/* Contact Information */}
            <section ref={contactInfoRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Address */}
                        {/* <div className="bg-gray-100 rounded-xl p-8 shadow-sm ">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-semibold text-gray-900">Address</h3>
                                <div className="w-12 h-12 bg-[#00b9ff] rounded-full flex items-center justify-center">
                                    <span className="text-black text-xl"><MoveUpRight /></span>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Webnox Technologies No 721/2, Venky complex, Second floor, cross cut road, Seth Narang Das Layout, Coimbatore – 641 012.
                            </p>
                        </div> */}

                        {/* Email */}
                        <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">You can E-mail here</h3>
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#00b9ff] rounded-full flex items-center justify-center">
                                    <span className="text-black text-sm md:text-xl"><MoveUpRight /></span>
                                </div>
                            </div>
                            <div className="space-y-2 text-gray-600 underline text-sm md:text-base">
                                <p>info@webnoxdigital.com</p>
                           
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">Call us on</h3>
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#00b9ff] rounded-full flex items-center justify-center">
                                    <span className="text-black text-sm md:text-xl"><MoveUpRight /></span>
                                </div>
                            </div>
                            <div className="space-y-2 text-gray-600 underline text-sm md:text-base">
                                <p>+91 97865 57739</p>
                                <p>+91 95851 25566</p>
                                <p>+91 63800 72252</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section ref={formRef} className="py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                        {/* Left: Robot Model (spans two columns on desktop, full width on mobile) */}
                        <div className="lg:col-span-2 flex items-center justify-center w-full h-[400px] md:h-[500px] lg:h-[700px] lg:w-[700px] relative">
                            {/* Robot Container with ref for animations */}
                            <div 
                                ref={robotRef} 
                                className="w-full h-full flex items-center justify-center transform-gpu"
                                style={{ transform: 'scale(0)' }}
                            >
                                <Robot />
                            </div>
                        </div>
                        {/* Right: Contact Form (spans one column) */}
                        <div className="max-w-md w-full mx-auto">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        placeholder="Contact Number"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="enquiry"
                                        placeholder="Message"
                                        value={formData.enquiry}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-sm md:text-base"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#00b9ff] text-white px-4 md:px-6 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </button>
                                {submitStatus && (
                                    <div className={`mt-4 p-4 text-center text-sm rounded-lg ${
                                        submitStatus.includes('successfully') 
                                            ? 'bg-green-100 text-green-800 border border-green-200' 
                                            : 'bg-red-100 text-red-800 border border-red-200'
                                    }`}>
                                        {submitStatus}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage