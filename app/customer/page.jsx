"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Scroll3DSections from "../sections/Components/scrollanimation";
import Footer from "../sections/Footer";
import Link from "next/link";



if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}



// Hero Section Component
const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const titleLettersRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop with letter-by-letter title animation
        gsap.set([...titleLettersRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 20 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        // Animate title letters one by one
        tl.to(titleLettersRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          ease: "power2.out",
          stagger: 0.03 // 30ms delay between each letter
        })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      } else {
        // Simple fade animations for mobile with letter-by-letter title animation
        gsap.set([...titleLettersRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 15 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        // Animate title letters one by one (faster on mobile)
        tl.to(titleLettersRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 0.3, 
          ease: "power2.out",
          stagger: 0.02 // 20ms delay between each letter
        })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[F480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden  "
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
            <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-50">
                {/* Introductory text */}
                <div className="mb-6 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF] inline-flex items-center gap-2">
                    <Image
                        src="/images/customer1.png"
                        alt="Customer Experience Icon"
                        width={20}
                        height={20}
                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                    />
                    <span className="text-[#00B9FF] text-sm md:text-base font-medium">
                        Next-Generation Customer Experience
                    </span>
                </div>

        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight">
          <span className="text-[#00B9FF]">
            {"Customer Experience at".split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => (titleLettersRef.current[index] = el)}
                className="inline-block"
                style={{ 
                  marginRight: char === " " ? "0.75rem" : "0",
                  minWidth: char === " " ? "0.75rem" : "auto"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <br />
          <span className="text-black">
            {"Webnox Digital".split("").map((char, index) => (
              <span
                key={index + "Customer Experience at".length}
                ref={(el) => (titleLettersRef.current[index + "Customer Experience at".length] = el)}
                className="inline-block"
                style={{ 
                  marginRight: char === " " ? "0.75rem" : "0",
                  minWidth: char === " " ? "0.75rem" : "auto"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>
        <p
          ref={descRef}
          className="text-gray-700 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-center mx-auto mb-8 py-4 max-w-4xl"
        >
          At Webnox Digital, we believe that exceptional customer experience (CX) is the foundation of digital success. Whether it's web development, digital marketing, UI/UX, or SEO, our approach is always customer-first ensuring every interaction is seamless, personalized, and impactful.
        </p>
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  )
}

const OurApproachSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const badgeRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([badgeRef.current, titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
            gsap.set(cardsRef.current, { opacity: 0, y: 40 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            })

            tl
                .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
                .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
                .to(cardsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.2")
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const principles = [
        {
            icon: "/images/customer3.png",
            title: "Client-Centric Design Thinking",
            desc: "We listen closely to your needs and challenges. Our human-centric design thinking helps to create solutions that align with your brand goals and speak directly to your audience."
        },
        {
            icon: "/images/customer4.png",
            title: "Transparent Communication",
            desc: "We prioritize open, two-way communication. Through agile project management and real-time updates, we keep you informed at every stage, ensuring full transparency."
        },
        {
            icon: "/images/customer5.png",
            title: "Consistent Support & Optimization",
            desc: "The journey doesn't end at project delivery. We continue to support and improve the digital experience through feedback loops and ongoing optimization strategies."
        }
    ]

    return (
        <section ref={sectionRef} className="bg-white py-16 lg:py-24 px-4 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Badge */}
                <div ref={badgeRef} className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF]">
                        <Image src="/images/customer2.png" alt="Our Methodology" width={16} height={16} className="w-4 h-4 object-contain" />
                        <span className="text-[#00B9FF] text-sm font-medium">
                            Our Methodology
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4 font-sans leading-tight">
                    Our Approach to Customer Experience
                </h2>

                {/* Subtitle */}
                <p ref={subtitleRef} className="text-gray-600 text-center mb-16 max-w-xl mx-auto text-lg font-sans">
                    Three core principles that drive everything we do
                </p>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-7xl mx-auto ">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                <Image
                                    src={principle.icon}
                                    alt={principle.title}
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-black mb-3 font-sans">
                                {principle.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-600 text-md leading-relaxed font-sans px-2 text-left">
                                {principle.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



const WhyCustomerExperienceMattersSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const badgeRef = useRef(null)
    const statsRef = useRef([])
    const svgRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([badgeRef.current, titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
            gsap.set(statsRef.current, { opacity: 0, y: 40 })
            // SVG is visible from start, no initial animation
            gsap.set(svgRef.current, { opacity: 0.2 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            })

            tl
                .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
                .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
                .to(statsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.2")
                // Start slow wave animation after content is loaded
                .to(svgRef.current, {
                    motionPath: {
                        path: "M0,0 Q50,-20 100,0 T200,0",
                        autoRotate: false,
                    },
                    duration: 4,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: 1
                }, "-=0.5")
                // Add gentle opacity pulsing
                .to(svgRef.current, {
                    opacity: 0.4,
                    duration: 3,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                }, "-=3")
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const stats = [
        {
            icon: "/images/customer7.png",
            number: "5x",
            description: "Increase in Customer Satisfaction"
        },
        {
            icon: "/images/customer9.png",
            number: "300%",
            description: "Growth"
        },
        {
            icon: "/images/customer10.png",
            number: "4x",
            description: "Boost in Engagement"
        }
    ]

         return (
         <section
             ref={sectionRef}
             className="relative py-8 px-4 overflow-hidden"
             style={{
                 background: "linear-gradient(135deg, #00B9FF 0%, #0097D9 50%, #007AC3 100%)"
             }}
         >
                         {/* Background Image Overlay */}
            <div className="absolute inset-0 z-40">
                <Image
                    ref={svgRef}
                    src="/customersvg.svg"
                    alt="Customer Experience Background"
                    fill
                    className="object-cover opacity-20"
                    priority={false}
                />
            </div>
             
             {/* Blue Gradient Overlay */}
             <div 
                 className="absolute inset-0 z-10"
                 style={{
                     background: "linear-gradient(90deg, rgba(0, 185, 255, 0.7) 0%, rgba(0, 118, 217, 0.7) 100%)"
                 }}
             ></div>
             
                          <div className="max-w-7xl mx-auto relative z-20">
                 {/* Badge */}
                 <div ref={badgeRef} className="text-center mb-6">
                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full border border-white/50 backdrop-blur-sm">
                         <Image src="/images/customer6.png" alt="Our Methodology" width={16} height={16} className="w-4 h-4 object-contain" />
                         <span className="text-[#00B9FF] text-sm font-medium">
                             Proven Results
                         </span>
                     </div>
                 </div> 

                {/* Title */}
                <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 font-sans leading-tight">
                    Why Customer Experience<br />Matters to Us
                </h2>

                {/* Subtitle */}
                <p ref={subtitleRef} className="text-white/90 text-center mb-16 max-w-2xl mx-auto text-lg font-sans">
                    Our commitment to excellence delivers measurable results
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            ref={el => statsRef.current[index] = el}
                            className="text-center"
                        >
                            {/* Icon Circle */}
                            <div className="w-16 h-16 mx-auto mb-6  flex items-center justify-center">
                                <Image
                                    src={stat.icon}
                                    alt={stat.description}
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>

                            {/* Number */}
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">
                                {stat.number}
                            </h3>

                            {/* Description */}
                            <p className="text-white/90 text-lg font-medium">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full"></div>
            </div>
        </section>
    )
}





const FAQSection = () => {
    const faqs = [
      {
        question: "Why does customer experience matter at Webnox Digital?",
        answer: "At Webnox Digital, customer experience is at the heart of everything we do. We believe that delivering seamless, transparent, and result-driven services builds long-term partnerships. "
      },
      {
        question: "Do you offer post-project support or assistance?",
        answer: "Yes. We provide continuous support even after the project is completed. Our team is always a call or email away."
      },
      {
        question: " How do you keep up with evolving digital trends to improve your experience?",
        answer: "Our team undergoes regular training and continuously researches market trends. This proactive approach ensures your project benefits from the latest technologies, tools, and marketing strategies."
      },
      {
        question: "What kind of support can I expect after the project is completed?",
        answer: "We offer post-launch support, including maintenance, performance monitoring, SEO reports, and quick assistance for any updates or changes you require."
      },
      {
        question: "What makes your customer experience different from others?",
        answer: "Our proactive communication, personalized solutions, and focus on building long-term relationships set us apart. We treat your goals as our own and commit to creating experiences that add real value to your business"
      },
    ];
    const [openIdx, setOpenIdx] = React.useState(0);
  
    return (
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2">Frequently</h2>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500">Asked Questions</span>
          </div>
          {/* Responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* FAQ Accordion */}
            <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border border-gray-200 bg-white transition-shadow ${openIdx === idx ? 'shadow-md' : 'hover:shadow'} `}
                >
                  <button
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold flex-shrink-0">{openIdx === idx ? '-' : '+'}</span>
                  </button>
                  {openIdx === idx && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center min-h-[280px] sm:min-h-[320px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src="/images/fi_7.webp"
                  alt="FAQ Icon"
                  width={48}
                  height={48}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Do you have more questions?</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
              <Link href="/contact" className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors shadow-sm cursor-pointer">Shoot a Direct Mail</Link>
              </div>
          </div>
        </div>
      </section>
    );
  };
  

  
const CustomerPage = () => {
  return (
    <main className="@/customer">
      <Scroll3DSections>
      <HeroSection />
            <OurApproachSection />
            <WhyCustomerExperienceMattersSection />
      </Scroll3DSections>
      <FAQSection />
      <Footer />
    </main>
  )
}

export default CustomerPage