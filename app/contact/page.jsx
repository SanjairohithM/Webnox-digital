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
    cardRefs.current = []

    useEffect(() => {
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
                        <h1 className="text-5xl font-bold text-white bg-[#19b5fe] px-4 py-2 rounded-xl shadow-lg">
                            We Would Love To
                        </h1>
                        <h2 className="text-6xl font-bold text-black">
                            Hear From You
                        </h2>
                    </div>

                    {/* Right Quote Section */}
                    <div className="flex-1 flex items-center justify-center">
                        <blockquote className="text-3xl font-semibold text-gray-800 italic max-w-md">
                            "Whether you're exploring our services, need expert guidance, or just want to get in touch — we're here to support you every step of the way."
                        </blockquote>
                    </div>
                </div>
            </section>


            {/* Contact Information */}
            <section className="py-20 bg-white">
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
                        <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-semibold text-gray-900">You can E-mail here</h3>
                                <div className="w-12 h-12 bg-[#00b9ff] rounded-full flex items-center justify-center">
                                    <span className="text-black text-xl"><MoveUpRight /></span>
                                </div>
                            </div>
                            <div className="space-y-2 text-gray-600 underline">
                                <p>info@webnoxdigital.com</p>
                           
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-semibold text-gray-900">Call us on</h3>
                                <div className="w-12 h-12 bg-[#00b9ff] rounded-full flex items-center justify-center">
                                    <span className="text-black text-xl"><MoveUpRight /></span>
                                </div>
                            </div>
                            <div className="space-y-2 text-gray-600 underline">
                                <p>+91 97865 57739</p>
                                <p>+91 95851 25566</p>
                                <p>+91 63800 72252</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        {/* Left: Robot Model (spans two columns) */}
                        <div className="lg:col-span-2 flex items-center justify-center w-[700px] h-[700px] relative">
                            {/* Robot Container with ref for animations */}
                            <div 
                                ref={robotRef} 
                                className="w-full h-full flex items-center justify-center transform-gpu"
                                style={{ transform: 'scale(0)' }}
                            >
                                <Robot />
                            </div>
                            
                            {/* Debug Info */}
                      
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
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#00b9ff] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
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