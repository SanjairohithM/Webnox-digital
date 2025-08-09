"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Lottie from "lottie-react"

import Footer from "../sections/Footer";



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

    const firstTitlePart = "Cloud and DevOps Solutions That Optimize  "
    const secondTitlePart = "Your Infrastructure for Speed and Scale"

    return (
        <section
            ref={heroRef}
            className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
            }}
        >
            {/* Background Image Overlay - Right Side */}
            <div className="absolute right-34 top-1/2 transform -translate-y-1/2 z-10 w-[35%] h-[50%] lg:w-[90%] lg:h-[90%]">
                <Image
                    src="/images/cloud1.webp"
                    alt="Mobile Development Background"
                    fill
                    className="object-contain opacity-30"
                    priority={false}
                />
            </div>

            <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-35 z-20">
               

                <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight lg:whitespace-nowrap">
                    <span className="text-[#00B9FF]">
                        {firstTitlePart.split("").map((char, index) => (
                            <span
                                key={index}
                                ref={(el) => (titleLettersRef.current[index] = el)}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                    <br />
                    <span className="text-black">
                        {secondTitlePart.split("").map((char, index) => (
                            <span
                                key={index + firstTitlePart.length}
                                ref={(el) => (titleLettersRef.current[index + firstTitlePart.length] = el)}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </h1>
                <p
                    ref={descRef}
                    className="text-gray-700 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-center mx-auto mb-8 py-4 max-w-4xl"
                >At WEBNOX DIGITAL, we don’t just migrate your data to the cloud, we transform the way you build, deploy, and scale technology.We help future-proof your business by combining cloud-native solutions with DevOps automation, ensuring your systems are not only fast but also secure, reliable, and ready to scale at any moment.

               </p>

               
                <button
                    ref={buttonRef}
                    className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl"
                >
                   Let's Connect
                </button>
            </div>
        </section>
    )
}




// DevOps Lottie Section Component
const DevopsProcessSection = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
        let isMounted = true
        fetch('/Devops_Process_4_.json')
            .then((res) => res.json())
            .then((json) => {
                if (isMounted) setAnimationData(json)
            })
            .catch(() => { /* no-op */ })
        return () => { isMounted = false }
    }, [])

    return (
        <section className="relative w-full bg-white overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Copy */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
                            Power Your Growth With <span className="text-[#00B9FF]">Cloud & DevOps Excellence</span>
                        </h2>
                        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                            <span className="text-[#00B9FF]"> </span>
                        </div>
                        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl max-w-xl">
                            Build a future-ready infrastructure that supports speed, security, and scalability.
                            Collaborate with <span className="text-[#00B9FF] font-semibold">WEBNOX DIGITAL</span> to
                            unlock the full potential of your cloud and development operations.
                        </p>
                        <button className="mt-6 inline-flex items-center justify-center bg-[#00B9FF] hover:bg-[#049dd8] text-white font-semibold rounded-lg px-6 py-3 md:px-7 md:py-3.5 shadow-lg transition-colors">
                            Let's Connect
                        </button>
                    </div>

                    {/* Right: Lottie Illustration */}
                    <div className="order-1 md:order-2 flex justify-center items-center">
                        {animationData ? (
                            <Lottie
                                animationData={animationData}
                                loop
                                autoplay
                                style={{ width: '100%', maxWidth: 560 }}
                            />
                        ) : (
                            <div className="w-full max-w-md md:max-w-lg h-56 md:h-72 bg-gray-100 animate-pulse rounded-2xl" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}


// Technology Services Section Component  
const TechnologySection = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
  
    const technologies = [
      { 
        title: "Cloud Consulting & Architecture", 
        desc: "We assess your business needs and design a cloud strategy that fits your goals—whether AWS, Azure, or Google Cloud. From hybrid to multi-cloud setups, we ensure your architecture.",
        image: "/images/tech1.webp"
      },
      { 
        title: "CI/CD Pipeline Automation", 
        desc: "Faster code. Fewer errors. We implement continuous integration and continuous delivery pipelines that help your teams ship faster—without sacrificing stability.",
        image: "/images/tech2.webp"
      },
      { 
        title: "Containerization & Kubernetes", 
        desc: "We use Docker and Kubernetes to build portable, scalable environments—perfect for dynamic workloads and microservices architectures.",
        image: "/images/tech3.webp"
      },
      { 
        title: "Cloud Security & Compliance", 
        desc: "Security is never an afterthought. We embed robust cloud security practices, encryption protocols, and compliance standards..",
        image: "/images/tech4.webp"
      },
      { 
        title: "Infrastructure as Code (IaC)", 
        desc: "We use Terraform, CloudFormation, and other tools to manage infrastructure at scale—ensuring consistency, speed, and version control.",
        image: "/images/tech5.webp"
      },
      { 
        title: "Monitoring, Logging & Performance Optimization", 
        desc: "We implement tools like Prometheus, Grafana, ELK, and Datadog for real-time monitoring, alerting, and performance optimization.",
        image: "/images/tech6.webp"
      }
    ]
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Check if we're on desktop (lg breakpoint and above)
        const isDesktop = window.innerWidth >= 1024
        
        if (isDesktop) {
          // Complex animations for desktop
          // Set initial positions for cards based on their grid position
          gsap.set(cardsRef.current[0], { opacity: 0, x: -200 }) // Card 1 (first column) - from left
          gsap.set(cardsRef.current[1], { opacity: 0, y: 100 })  // Card 2 (second column) - from bottom
          gsap.set(cardsRef.current[2], { opacity: 0, x: 200 })  // Card 3 (third column) - from right
          gsap.set(cardsRef.current[3], { opacity: 0, x: -200 }) // Card 4 (first column) - from left
          gsap.set(cardsRef.current[4], { opacity: 0, y: 100 })  // Card 5 (second column) - from bottom
          gsap.set(cardsRef.current[5], { opacity: 0, x: 200 })  // Card 6 (third column) - from right
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          })
          
          // Animate first column cards (1 & 4) together from left
          tl.to([cardsRef.current[0], cardsRef.current[3]], { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out" 
          })
          // Animate second column cards (2 & 5) together from bottom
          .to([cardsRef.current[1], cardsRef.current[4]], { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power2.out" 
          }, "-=0.3")
          // Animate third column cards (3 & 6) together from right
          .to([cardsRef.current[2], cardsRef.current[5]], { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out" 
          }, "-=0.3")
        } else {
          // Simple fade animations for mobile
          const mobileCards = cardsRef.current.filter(Boolean)
          
          gsap.set(mobileCards, { opacity: 0, y: 30 })
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          })
          
          if (mobileCards.length > 0) {
            tl.to(mobileCards, { 
              opacity: 1, 
              y: 0, 
              duration: 0.6, 
              stagger: 0.15, 
              ease: "power2.out" 
            })
          }
        }
      }, sectionRef)
      return () => ctx.revert()
    }, [])
  
    return (
      <section ref={sectionRef} className="bg-white  font-sans mt-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight mb-10">Our Cloud & DevOps Services Include</h1>
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="relative overflow-hidden border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                style={{ 
                  backgroundImage: `url(${tech.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '30%',
                  minHeight: '180px'
                }}
              >
                <div className="absolute inset-0 bg-white/92" />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
                    <Image src={tech.image} alt={`${tech.title} icon`} width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">{tech.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }


// Why Choose Section Component
const WhyChooseCloudSection = () => {
  const items = [
    { num: '01', title: '15+ Years of Expertise', desc: 'Proven experience in cloud-native and DevOps engineering across diverse industries.' },
    { num: '02', title: 'Certified Multi-Cloud Specialists', desc: 'Skilled professionals in AWS, Azure, and Google Cloud Platform (GCP).' },
    { num: '03', title: 'Strategy-Aligned Infrastructure', desc: 'We align your cloud and DevOps roadmap with business.' },
    { num: '04', title: 'Scalable Solutions for Startups & Enterprises', desc: 'Built for performance, security, and growth at every stage.' },
    { num: '05', title: 'Secure, Reliable, and Cost Optimized Architecture', desc: 'Well-architected, compliant, and optimized for spend and resilience.' },
    { num: '06', title: 'Transparent, Measurable Delivery', desc: 'Clear communication, outcome-based metrics, and zero guesswork.' }
  ]

  return (
    <section className="bg-[#E6F7FD] py-16 md:py-24 font-sans mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            Why Choose <span className="text-[#00B9FF]">Webnox Digitals</span> For
          </h2>
          <div className="text-3xl md:text-4xl font-bold text-[#00B9FF] mt-1">Cloud & DevOps?</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#00B9FF] font-bold tracking-wider">{item.num}</span>
                <span className="block h-[2px] w-8 bg-[#00B9FF] rounded" />
                <h3 className="text-base md:text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}








const FAQSection = () => {
    const faqs = [
        {
            question: "What types of businesses benefit from your consulting services?",
            answer: " We work with startups, SMEs, and large enterprises across industries to solve complex digital challenges and enable growth."
        },
        {
            question: "How does Webnox approach digital transformation?",
            answer: "We begin with deep discovery and deliver a customized, phased roadmap that balances strategy, tech, and people."
        },
        {
            question: "What makes your consulting different from traditional firms?",
            answer: "We execute. Our tech-first, agile-led approach ensures transformation is actionable and scalable."
        },
        {
            question: "What makes Webnox Digital a reliable IT consulting partner?",
            answer: "We combine deep technical knowledge, strategic insight, and industry-specific experience with a business-first approach, delivering technology solutions that solve real-world problems and fuel growth."
        },
        {
            question: "What industries do you specialize in for IT consulting?",
            answer: "We serve a wide range of industries, including finance, healthcare, e-commerce, logistics, real estate, and manufacturing. Our domain experts tailor strategies based on sector-specific challenges and regulatory requirements."
        },
    ];
    const [openIdx, setOpenIdx] = React.useState(0);

    return (
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2">Frequently</h2>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500">asked questions</span>
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
                        <button className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors shadow-sm">Shoot a Direct Mail</button>
                    </div>
                </div>
            </div>
        </section>
    );
};









const CustomWebPage = () => {
    return (
        <main className="@/customweb">
            <HeroSection />
         
           
            <TechnologySection />
            <WhyChooseCloudSection />
            <DevopsProcessSection />
            <FAQSection />
            <Footer />
        </main>
    )
}

export default CustomWebPage