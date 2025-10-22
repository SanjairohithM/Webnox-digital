"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveUpRight, User, Mail, Phone, MessageSquare, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'
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
                        
                      

                        {/* Email */}
                        <div className="bg-gray-100 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm transition-shadow duration-300" 
                             onClick={() => {
                                // Try Gmail first, fallback to mailto
                                const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@webnoxdigital.com&su=Contact from Website&body=Hello, I would like to get in touch with you.';
                                const mailtoUrl = 'mailto:info@webnoxdigital.com?subject=Contact from Website&body=Hello, I would like to get in touch with you.';
                                
                                // Open Gmail in new tab
                                window.open(gmailUrl, '_blank');
                                
                                // Fallback: also try mailto (for desktop email clients)
                                setTimeout(() => {
                                    window.open(mailtoUrl, '_self');
                                }, 100);
                             }}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3 sm:gap-4">
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">You can E-mail here</h3>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#00b9ff] rounded-full flex items-center justify-center self-start sm:self-auto">
                                    <span className="text-black text-sm sm:text-base md:text-xl"><MoveUpRight /></span>
                                </div>
                            </div>
                            <div className="space-y-2 text-gray-600">
                                <p className="break-all sm:break-normal text-sm sm:text-base md:text-base font-medium underline hover:text-[#00b9ff] hover:no-underline transition-all duration-200 cursor-pointer">
                                    info@webnoxdigital.com
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500">
                                    Click to open Gmail with pre-filled details
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-gray-100 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3 sm:gap-4">
                                <div>
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">Call us on</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Tap any number to call directly</p>
                                </div>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#00b9ff] rounded-full flex items-center justify-center self-start sm:self-auto">
                                    <span className="text-black text-sm sm:text-base md:text-xl"><MoveUpRight /></span>
                                </div>
                            </div>
                            <div className="space-y-3 text-gray-600 text-sm sm:text-base md:text-base">
                                <a href="tel:+919786557739" className="block hover:text-[#00b9ff] transition-colors duration-200 cursor-pointer underline hover:no-underline p-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                                    <span className="font-medium">+91 97865 57739</span>
                                    <span className="text-xs text-gray-500 ml-2">(Tap to call)</span>
                                </a>
                                <a href="tel:+919585125566" className="block hover:text-[#00b9ff] transition-colors duration-200 cursor-pointer underline hover:no-underline p-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                                    <span className="font-medium">+91 95851 25566</span>
                                    <span className="text-xs text-gray-500 ml-2">(Tap to call)</span>
                                </a>
                                <a href="tel:+916380072252" className="block hover:text-[#00b9ff] transition-colors duration-200 cursor-pointer underline hover:no-underline p-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                                    <span className="font-medium">+91 63800 72252</span>
                                    <span className="text-xs text-gray-500 ml-2">(Tap to call)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact-form" ref={formRef} className="py-5 bg-gradient-to-t from-[#00b9ff] via-[#bfefff] to-white">
                <div className=" px-4  ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  items-center">
                        {/* Left: Robot Model (spans two columns on desktop, full width on mobile) */}
                        <div className="lg:col-span-2 flex items-center justify-center w-full h-[400px] md:h-[500px] lg:h-[700px]  relative ">
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
					<div className="max-w-md lg:max-w-lg xl:max-w-xl w-full mx-auto">
						<div className="relative overflow-hidden rounded-2xl p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl bg-gradient-to-t from-[#00b9ff]/40 via-white/40 to-white/60 backdrop-blur-xl border border-white/40">
							<div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/25 blur-3xl" />
							<div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
							<div className="pointer-events-none absolute -top-20 left-1/4 h-24 w-96 rotate-12 bg-white/40 blur-2xl opacity-60" />
							<div className="relative">
								<div className="mb-6 lg:mb-8 xl:mb-10">
									<h3 className="text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Let's connect</h3>
									<p className="text-black/80 text-sm md:text-base lg:text-lg xl:text-xl">Tell us about your project and we'll reach out.</p>
								</div>
								<form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6 xl:space-y-8">
									<div className="relative">
										<User className="absolute left-3 lg:left-4 xl:left-5 top-1/2 -translate-y-1/2 h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-black/70" />
										<input
											type="text"
											name="name"
											placeholder="Your name"
											value={formData.name}
											onChange={handleChange}
											className="w-full pl-10 lg:pl-12 xl:pl-14 pr-3 md:pr-4 lg:pr-5 xl:pr-6 py-3 md:py-4 lg:py-5 xl:py-6 rounded-lg bg-white/30 backdrop-blur-sm text-black placeholder-black/70 ring-1 ring-white/30 focus:ring-2 focus:ring-white/60 outline-none text-sm md:text-base lg:text-lg xl:text-xl"
											required
										/>
									</div>
									<div className="relative">
										<Mail className="absolute left-3 lg:left-4 xl:left-5 top-1/2 -translate-y-1/2 h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-black/70" />
										<input
											type="email"
											name="email"
											placeholder="Work email"
											value={formData.email}
											onChange={handleChange}
											className="w-full pl-10 lg:pl-12 xl:pl-14 pr-3 md:pr-4 lg:pr-5 xl:pr-6 py-3 md:py-4 lg:py-5 xl:py-6 rounded-lg bg-white/30 backdrop-blur-sm text-black placeholder-black/70 ring-1 ring-white/30 focus:ring-2 focus:ring-white/60 outline-none text-sm md:text-base lg:text-lg xl:text-xl"
											required
										/>
									</div>
									<div className="relative">
										<Phone className="absolute left-3 lg:left-4 xl:left-5 top-1/2 -translate-y-1/2 h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-black/70" />
										<input
											type="tel"
											name="contactNumber"
											placeholder="Phone number"
											value={formData.contactNumber}
											onChange={handleChange}
											className="w-full pl-10 lg:pl-12 xl:pl-14 pr-3 md:pr-4 lg:pr-5 xl:pr-6 py-3 md:py-4 lg:py-5 xl:py-6 rounded-lg bg-white/30 backdrop-blur-sm text-black placeholder-black/70 ring-1 ring-white/30 focus:ring-2 focus:ring-white/60 outline-none text-sm md:text-base lg:text-lg xl:text-xl"
											required
										/>
									</div>
									<div className="relative">
										<MessageSquare className="absolute left-3 lg:left-4 xl:left-5 top-4 lg:top-5 xl:top-6 h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-black/70" />
										<textarea
											name="enquiry"
											placeholder="How can we help?"
											value={formData.enquiry}
											onChange={handleChange}
											rows={6}
											className="w-full pl-10 lg:pl-12 xl:pl-14 pr-3 md:pr-4 lg:pr-5 xl:pr-6 py-3 md:py-4 lg:py-5 xl:py-6 rounded-lg bg-white/30 backdrop-blur-sm text-black placeholder-black/70 ring-1 ring-white/30 focus:ring-2 focus:ring-white/60 outline-none resize-none text-sm md:text-base lg:text-lg xl:text-xl"
											required
										/>
									</div>
									<button
										type="submit"
										className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 md:px-6 lg:px-8 xl:px-10 py-3 md:py-4 lg:py-5 xl:py-6 font-semibold text-slate-900 transition-transform [box-shadow:0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0 disabled:bg-white/70 disabled:text-slate-700 text-sm md:text-base lg:text-lg xl:text-xl"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<>
												<Loader2 className="h-5 w-5 animate-spin" />
												<span>Sending...</span>
											</>
										) : (
											<>
												<span>Send message</span>
												<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
											</>
										)}
									</button>
									{submitStatus && (
										<div className={`mt-3 lg:mt-4 xl:mt-5 flex items-center gap-2 rounded-lg px-4 lg:px-5 xl:px-6 py-3 lg:py-4 xl:py-5 text-sm lg:text-base xl:text-lg ${submitStatus.includes('successfully') ? 'bg-emerald-500/10 text-emerald-100 ring-1 ring-emerald-400/30' : 'bg-red-500/10 text-red-100 ring-1 ring-red-400/30'}`}>
											{submitStatus.includes('successfully') ? (
												<CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
											) : (
												<AlertCircle className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
											)}
											<span>{submitStatus}</span>
										</div>
									)}
								</form>
							</div>
						</div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage

