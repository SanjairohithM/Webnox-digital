"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Aboutsecond from "@/app/sections/Aboutsecond"
import { Aboutthird } from "@/app/sections/Aboutthird"
gsap.registerPlugin(ScrollTrigger)

function About() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const descriptionRef = useRef(null)
    const statsRef = useRef(null)
    const robotRef = useRef(null)
    const redefiningSectionRef = useRef(null)
    const heroLogoRef = useRef(null)
    const letsTalkRef = useRef(null)

    useGSAP(
        () => {
            const elementsToAnimate = [
                titleRef.current,
                subtitleRef.current,
                descriptionRef.current,
                robotRef.current,
                redefiningSectionRef.current
            ].filter(Boolean)

            gsap.set(elementsToAnimate, { opacity: 0, y: 50 })

            // Animate hero logo and let's talk button on initial load
            if (heroLogoRef.current) {
                gsap.fromTo(heroLogoRef.current,
                    { x: -100, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
                )
            }

            if (letsTalkRef.current) {
                gsap.fromTo(letsTalkRef.current,
                    { x: 100, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
                )
            }

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top center+=100",
                once: true,
                onEnter: () => {
                    gsap.to(titleRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    })
                    gsap.to(subtitleRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.2
                    })
                    gsap.to(descriptionRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.4
                    })
                    gsap.to(robotRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.3
                    })
                    // Animate the Years of Experience card on the left
                    gsap.to(statsRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        delay: 0.6
                    })
                    // Animate the right side statistics cards
                    gsap.to(".right-stats .bg-white\\/70", {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power3.out",
                        delay: 0.7
                    })
                    gsap.to(redefiningSectionRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.8
                    })
                },
            })

            // Scroll trigger for header elements visibility
            ScrollTrigger.create({
                trigger: "body",
                start: "top -50",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const scrolled = self.scroll() > 50

                    if (heroLogoRef.current) {
                        gsap.to(heroLogoRef.current, {
                            opacity: scrolled ? 0.8 : 1,
                            scale: scrolled ? 0.9 : 1,
                            y: scrolled ? -10 : 0,
                            duration: 0.3,
                            ease: "power2.out",
                        })
                    }

                    if (letsTalkRef.current) {
                        gsap.to(letsTalkRef.current, {
                            opacity: scrolled ? 0.8 : 1,
                            scale: scrolled ? 0.9 : 1,
                            y: scrolled ? -10 : 0,
                            duration: 0.3,
                            ease: "power2.out",
                        })
                    }
                },
            })
        },
        { scope: sectionRef },
    )

    return (
        <>
            {/* Hero Logo - Top Left */}
            <div ref={heroLogoRef} className="fixed top-12 left-12 z-50 transition-all duration-300">
                <div className="flex items-center">
                    <Image
                        src="/webnox-logo.png"
                        alt="Webnox Digital Logo"
                        width={160}
                        height={160}
                        className="object-cover drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Let's Talk Button - Top Right */}
            <div ref={letsTalkRef} className="fixed top-12 right-12 z-30 transition-all duration-300">
                <button
                    className="bg-[#25C3E5] hover:bg-[#1fb8d9] text-white font-urbanist p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-xl"
                    onClick={() => {
                        const element = document.querySelector("#contact")
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                        }
                    }}
                >
                    Let's Talk
                </button>
            </div>

            <section
                ref={sectionRef}
                className="relative w-full min-h-screen flex items-center pt-42 pb-20 px-4 sm:px-6 lg:px-20 bg-white overflow-hidden font-urbanist"
            >
                <div className=" mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Left Content */}
                        <div className=" col-span-5 flex flex-col justify-start gap-[110px] pt-[100px]">
                           
                           <div className=" flex flex-col gap-[50px]">
                             {/* Main Headlines */}
                             <div className="flex flex-col gap-[20px]">
                                <h1
                                    ref={titleRef}
                                    className="text-5xl font-light text-gray-500 opacity-0"
                                >
                                    Driven by Innovation.
                                </h1>
                                <h1
                                    ref={subtitleRef}
                                    className="text-6xl font-bold text-transparent bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] bg-clip-text opacity-0"
                                >
                                    Defined by Results.
                                </h1>
                            </div>


                            {/* Description */}
                            <p
                                ref={descriptionRef}
                                className="text-lg md:text-xl text-gray-400 leading-relaxed opacity-0 font-urbanist"
                            >
                                We are a digital transformation partner committed to empowering
                                businesses with cutting-edge technology, strategic insight, and measurable
                                impact.
                            </p>
                           </div>

                            {/* Years of Experience and Redefining Section - Justify Between */}
                            <div className="pt-8 flex justify-between items-start pl-[70px]">
                                <div ref={statsRef} className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border-2 border-[#25C3E5] shadow-lg opacity-0 w-48 h-48 flex flex-col items-center justify-center">
                                    <div className="text-6xl font-bold text-[#25C3E5] mb-2">
                                        14+
                                    </div>
                                    <div className="text-lg text-gray-600 font-urbanist text-center">
                                        Years of
                                        <br />
                                        Experiences
                                    </div>
                                </div>

                               
                            </div>

                        </div>

                        

                        {/* Right Content */}
                        <div className="relative col-span-7 flex flex-row justify-start">
                            {/* Robot Image */}
                            <div ref={robotRef} className=" justify-self-start">
                                <Image
                                    src="/images/aboutrobotpng1.png"
                                    alt="AI Robot with VR headset"
                                    width={800}
                                    height={1000}
                                    className="w-full h-full "
                                    priority
                                />
                            </div>

             

                            <div className=" flex flex-col gap-[20px] w-[400px] absolute top-[60%] -left-[320px]">

                                <div className=" flex flex-row justify-between items-center">
                                    <p className=" w-[120px] text-2xl text-gray-600">Redefining the digital</p>
                                    <div className=" flex flex-row ">
                                        <Image
                                            src="/images/Line 2.png"
                                            alt="Connection Line"
                                            width={40}
                                            height={2}
                                            className="object-contain w-[220px]"
                                        />
                                        <Image
                                            src="/images/Ecllipse.png"
                                            alt="Eclipse"
                                            width={16}
                                            height={16}
                                            className="object-contain w-[50px] h-[50px]"
                                        />
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed w-[200px]">
                                    Dive into compelling narratives set in a dystopian future.
                                </p>

                                <Image
                                    src="/images/Costumerimage.png"
                                    alt="Customer"
                                    width={92}
                                    height={62}
                                    className="w-[150px] h-[50px] object-contain"
                                />


                            </div>

                            {/* Right Side Statistics - Floating */}
                            <div className="absolute top-16 right-0 space-y-8 pointer-events-none right-stats">
                                <div className="space-y-8">
                                    <div className="">
                                        <div className="text-[#25C3E5] text-6xl font-urbanist">
                                            1000+
                                        </div>
                                        <div className="text-gray-400 mt-2 text-lg font-urbanist">Projects Delivered</div>
                                    </div>

                                    <div className="pt-5">
                                        <div className="text-[#25C3E5] text-6xl font-urbanist">
                                            15+
                                        </div>
                                        <div className="text-gray-400 mt-2 text-lg font-urbanist">Clients Across Countries</div>
                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>
                </div>

            </section>
            <Aboutsecond />
            <Aboutthird />
        </>

    )
}

export default About 