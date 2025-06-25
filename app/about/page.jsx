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
gsap.registerPlugin(ScrollTrigger)

function About() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const descriptionRef = useRef(null)
    const statsRef = useRef(null)
    const robotRef = useRef(null)
    const redefiningSectionRef = useRef(null)

    useGSAP(
        () => {
            // Set initial states with different directions
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
        },
        { scope: sectionRef },
    )

    return (
        <>
            {/* Navbar Component */}
            <AnimatedNavbar />

            <main
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

             

                            <div className="redefining-section flex flex-col gap-[20px] w-[400px] absolute top-[60%] -left-[320px]">

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

            </main>
            <Aboutsecond />
            <Aboutthird />
            <Aboutfour />
        </>

    )
}

export default About 