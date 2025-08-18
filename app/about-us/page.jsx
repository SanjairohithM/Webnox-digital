"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Aboutsecond from "@/app/sections/Aboutsecond"
import { Aboutthird } from "@/app/sections/Aboutthird"
import Aboutfour from "@/app/sections/Aboutfour"
import AnimatedNavbar from "@/app/sections/Components/Header/AnimatedNavbar"
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip"
import { User, Plus } from "lucide-react"
import Footer from "../sections/Footer"
gsap.registerPlugin(ScrollTrigger)

function About() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const descriptionRef = useRef(null)
    const statsRef = useRef(null)
    const robotRef = useRef(null)
    const redefiningSectionRef = useRef(null)

    // Customer review data for animated tooltip
    const customerReviews = [
        {
            id: 1,
            name: "Rathina Kumar",
            designation: "CMO",
            icon: <User className="w-6 h-6 text-gray-600" />,
           
        },
        {
            id: 2,
            name: "Raj Kumar",
            designation: "CTO",
            icon: <User className="w-6 h-6 text-gray-600" />,
            
        },
        {
            id: 3,
            name: "Asha ",
            designation: "Business Lead",
            icon: <User className="w-6 h-6 text-gray-600" />,
            
        },
    
    ]

    useGSAP(
        () => {
            // Check if we're on desktop (lg breakpoint and above)
            const isDesktop = window.innerWidth >= 1024
            
            if (isDesktop) {
                // Complex animations for desktop - elements come from different directions
                // Text elements come from left
                gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], { 
                    opacity: 0, 
                    x: -100 
                })
                
                // Robot comes from bottom
                gsap.set(robotRef.current, { 
                    opacity: 0, 
                    y: 150 
                })
                
                // Stats card comes from left
                gsap.set(statsRef.current, { 
                    opacity: 0, 
                    x: -80 
                })
                
                // Right side statistics come from right
                gsap.set(".right-stats > div", { 
                    opacity: 0, 
                    x: 100 
                })
                
                // Redefining section comes from left
                gsap.set(".redefining-section", { 
                    opacity: 0, 
                    x: -80 
                })

                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top center+=100",
                    once: true,
                    onEnter: () => {
                        // Text elements from left
                        gsap.to(titleRef.current, {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: "power3.out",
                        })
                        gsap.to(subtitleRef.current, {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            delay: 0.2
                        })
                        gsap.to(descriptionRef.current, {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            delay: 0.4
                        })
                        
                        // Robot from bottom
                        gsap.to(robotRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 1.2,
                            ease: "power3.out",
                            delay: 0.3
                        })
                        
                        // Stats card from left
                        gsap.to(statsRef.current, {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            delay: 0.6
                        })
                        
                        // Right side statistics from right
                        gsap.to(".right-stats > div", {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: "power3.out",
                            delay: 0.7
                        })
                        
                        // Redefining section from left
                        gsap.to(".redefining-section", {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            delay: 0.8
                        })
                    },
                })
            } else {
                // Simple fade animations for mobile - all elements fade in from bottom
                gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, robotRef.current, statsRef.current, ".right-stats > div", ".redefining-section"], { 
                    opacity: 0, 
                    y: 30 
                })

                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top center+=100",
                    once: true,
                    onEnter: () => {
                        // Simple fade-in animations for mobile
                        gsap.to(titleRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                        })
                        gsap.to(subtitleRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            delay: 0.1
                        })
                        gsap.to(descriptionRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            delay: 0.2
                        })
                        
                        gsap.to(robotRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            delay: 0.3
                        })
                        
                        gsap.to(statsRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            delay: 0.4
                        })
                        
                        gsap.to(".right-stats > div", {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: "power2.out",
                            delay: 0.5
                        })
                        
                        gsap.to(".redefining-section", {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            delay: 0.6
                        })
                    },
                })
            }
        },
        { scope: sectionRef },
    )

    return (
        <>
            {/* Navbar Component */}
            {/* <AnimatedNavbar /> */}

            <main
                ref={sectionRef}
                className="relative w-full min-h-screen flex items-center pt-20 md:pt-42 pb-10 md:pb-20 px-4 sm:px-6 lg:px-20 bg-white overflow-hidden font-sans"
            >
                <div className="mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                        {/* Left Content */}
                        <div className="lg:col-span-5 flex flex-col justify-start gap-8 md:gap-16 lg:gap-[110px] pt-4 md:pt-8 lg:pt-[100px]">
                           
                           <div className="flex flex-col gap-6 md:gap-8 lg:gap-[50px]">  
                             {/* Main Headlines */}
                             <div className="flex flex-col gap-3 md:gap-4 lg:gap-[20px]">
                                <h1
                                    ref={titleRef}
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-500 opacity-0"
                                >
                                    Driven by Innovation.
                                </h1>
                                <h1
                                    ref={subtitleRef}
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] bg-clip-text opacity-0"
                                >
                                    Defined by Results.
                                </h1>
                            </div>

                            {/* Description */}
                            <p
                                ref={descriptionRef}
                                className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed opacity-0 font-sans"
                            >
                                We are a digital transformation partner committed to empowering
                                businesses with cutting-edge technology, strategic insight, and measurable
                                impact.
                            </p>
                           </div>

                            {/* Years of Experience - Mobile Responsive */}
                            <div className="pt-4 md:pt-8 flex justify-center lg:justify-start lg:pl-[70px]">
                                <div ref={statsRef} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 border-2 border-[#25C3E5] shadow-lg opacity-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 flex flex-col items-center justify-center">
                                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#25C3E5] mb-1 md:mb-2">
                                        14+
                                    </div>
                                    <div className="text-sm md:text-base lg:text-lg text-gray-600 font-sans text-center leading-tight">
                                        Years of
                                        <br />
                                        Experiences
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Content */}
                        <div className="relative lg:col-span-7 flex flex-col lg:flex-row justify-center lg:justify-start mt-8 lg:mt-0">
                            {/* Robot Image */}
                            <div ref={robotRef} className="relative mx-auto lg:mx-0">
                                <Image
                                    src="/images/aboutrobotpng1.webp"
                                    alt="AI Robot with VR headset"
                                    width={800}
                                    height={1000}
                                    className="w-80 md:w-96 lg:w-full h-auto max-w-full"
                                    priority
                                />
                            </div>

                            {/* Redefining Section - Mobile Responsive */}
                            <div className="redefining-section flex flex-col gap-4 md:gap-[20px] w-full max-w-sm mx-auto lg:max-w-[400px] mt-8 lg:mt-0 lg:absolute lg:top-[60%] lg:-left-[320px] px-4 lg:px-0">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                    <p className="w-full sm:w-[120px] text-lg md:text-xl lg:text-2xl text-gray-600">Redefining the digital</p>
                                    <div className="hidden sm:flex flex-row items-center">
                                        {/* CSS Line */}
                                        <div className="w-32 md:w-48 lg:w-[220px] h-[2px] bg-[#25C3E5]"></div>
                                        {/* CSS Circle with gradient */}
                                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] rounded-full bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] flex items-center justify-center">
                                            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] rounded-full bg-white/30 backdrop-blur-md border border-white/20"></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                                    Dive into compelling narratives set in a dystopian future.
                                </p>

                                {/* Customer Review with Animated Tooltip */}
                                <div className="flex items-center">
                                    <AnimatedTooltip items={customerReviews} />
                                </div>
                            </div>

                            {/* Right Side Statistics - Mobile Responsive */}
                            <div className="mt-8 lg:mt-0 lg:absolute lg:top-16 lg:right-0 space-y-6 lg:space-y-8 pointer-events-none right-stats flex flex-row justify-around lg:flex-col lg:justify-start">
                                <div className="text-center lg:text-left">
                                    <div className="text-[#25C3E5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans">
                                        1000+
                                    </div>
                                    <div className="text-gray-400 mt-1 lg:mt-2 text-sm md:text-base lg:text-lg font-sans">Projects Delivered</div>
                                </div>

                                <div className="text-center lg:text-left lg:pt-5">
                                    <div className="text-[#25C3E5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans">
                                        15+
                                    </div>
                                    <div className="text-gray-400 mt-1 lg:mt-2 text-sm md:text-base lg:text-lg font-sans">Clients Across Countries</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
            <Aboutsecond />
            <Aboutthird />
            <Aboutfour />
            <Footer />
            </>

    )
}

export default About 