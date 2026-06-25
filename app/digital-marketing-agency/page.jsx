"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ToolLogos } from "@/components/ToolLogos"
import { Button } from "@/components/ui/button"
import {
  MoveUpRight,
  BarChart3,
  Search,
  Target,
  Share2,
  FileText,
  TrendingUp,
  Mail,
  Building2,
  Zap,
  Cpu,
  ShoppingBag,
  Heart,
  Home,
  GraduationCap,
  Coins,
  Rocket,
  Factory,
  Scale,
  Globe,
  ChevronDown,
  Briefcase,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/* ─────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────── */
const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const h1Ref = useRef(null)
  const descRef = useRef(null)
  const buttonsRef = useRef(null)
  const titleLettersRef = useRef([])

  const heroTitle = "Digital Marketing Built to Drive Real, Measurable Growth"

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024

      gsap.set(
        [h1Ref.current, ...titleLettersRef.current, descRef.current, buttonsRef.current],
        { opacity: 0, y: isDesktop ? 30 : 15 }
      )

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      })

      tl.to(h1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          titleLettersRef.current,
          {
            opacity: 1,
            y: 0,
            duration: isDesktop ? 0.4 : 0.3,
            ease: "power2.out",
            stagger: isDesktop ? 0.015 : 0.01,
          },
          "-=0.3"
        )
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[520px] md:min-h-[600px] lg:min-h-[700px] w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 100%)",
      }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,185,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,185,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0,185,255,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-32 md:pt-40 pb-16 md:pb-24">
        {/* H1 Tag - SEO primary heading */}
        <h1
          ref={h1Ref}
          className="text-[#00B9FF] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6"
        >
          Global Digital Marketing Agency for Measurable Business Growth
        </h1>

        {/* Visual Hero Title */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight"
        >
          {heroTitle.split(" ").map((word, wordIndex) => {
            const wordsList = heroTitle.split(" ")
            const charOffset = wordsList.slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0)

            return (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => {
                  const globalIdx = charOffset + charIndex
                  return (
                    <span
                      key={charIndex}
                      ref={(el) => (titleLettersRef.current[globalIdx] = el)}
                      className="inline-block"
                    >
                      {char}
                    </span>
                  )
                })}
                {wordIndex < wordsList.length - 1 && "\u00A0"}
              </span>
            )
          })}
        </h2>

        <p
          ref={descRef}
          className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mx-auto mb-10 max-w-2xl"
        >
          Custom strategies. Coordinated execution. Transparent results.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact-us">
            <button className="group relative bg-[#00B9FF] hover:bg-[#0097d4] text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out shadow-[0_0_30px_rgba(0,185,255,0.2)] hover:shadow-[0_0_40px_rgba(0,185,255,0.4)] cursor-pointer flex items-center gap-2">
              Get a Free Marketing Audit
              <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="group border-2 border-gray-300 hover:border-[#00B9FF] text-gray-700 hover:text-white hover:bg-[#00B9FF] font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out cursor-pointer flex items-center gap-2">
              Talk to a Specialist
              <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   ABOUT / FULL-SERVICE SECTION
   ───────────────────────────────────────────── */
const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const parasRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, ...parasRef.current.filter(Boolean)], {
        opacity: 0,
        y: 30,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }).to(
        parasRef.current.filter(Boolean),
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.3"
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-950 mb-10 leading-tight"
        >
          A Full-Service Digital Marketing Company Built for{" "}
          <span className="text-[#00B9FF]">Measurable Growth</span>
        </h2>

        <div className="space-y-6">
          <p
            ref={(el) => (parasRef.current[0] = el)}
            className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Webnox Digital is a full-service digital marketing agency.{" "}
            <span className="text-gray-950 font-semibold">14+ years.</span>{" "}
            <span className="text-gray-950 font-semibold">1,200+ clients.</span>{" "}
            <span className="text-gray-950 font-semibold">40+ countries.</span>{" "}
            <span className="text-gray-950 font-semibold">70+ in-house specialists.</span>{" "}
            We build custom digital marketing strategies, SEO, PPC, social media, content, and CRO
            grounded in your industry, your audience, and your growth targets. Then we execute
            across every channel that drives measurable business outcomes.
          </p>

          <p
            ref={(el) => (parasRef.current[1] = el)}
            className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            From startups building their first search presence to established businesses outpacing
            competitors, every client gets a strategy built from scratch on their audit data.{" "}
            <span className="text-[#00B9FF] font-semibold">Nothing is templated.</span>{" "}
            <span className="text-[#00B9FF] font-semibold">Nothing is outsourced.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   STATS COUNTER SECTION
   ───────────────────────────────────────────── */
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10)
          const duration = 2000
          const startTime = Date.now()

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * numericTarget))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) observer.observe(counterRef.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const statsData = [
  {
    number: "1200",
    suffix: "+",
    label: "Clients Served",
    sub: "across 40+ countries",
  },
  {
    number: "14",
    suffix: "+",
    label: "Years Experience",
    sub: "since founding",
  },
  {
    number: "50",
    suffix: "+",
    label: "In-House Specialists",
    sub: "not outsourced",
  },
  {
    number: "1450",
    suffix: "+",
    label: "Websites Delivered",
    sub: "designed and built",
  },
]

const StatsSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean)
      gsap.set(validCards, { opacity: 0, y: 40, scale: 0.95 })

      gsap.to(validCards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f4fafd 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative group rounded-2xl p-6 md:p-8 text-center overflow-hidden transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(230,247,253,0.8) 0%, rgba(255,255,255,0.9) 100%)",
                border: "1px solid rgba(0,185,255,0.3)",
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: "radial-gradient(circle at center, rgba(0,185,255,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00B9FF] mb-2">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-900 font-semibold text-sm md:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-xs md:text-sm italic">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CTA SECTION
   ───────────────────────────────────────────── */
const CTASection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 40 })

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, #f4fafd 0%, #ffffff 100%)",
      }}
    >
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#00B9FF] to-transparent" />

      <div ref={contentRef} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          See What's Holding Your <span className="text-[#00B9FF]">Growth</span> Back
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
          Free digital marketing audit, no obligation, delivered within 5 business days.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact-us">
            <button className="group relative bg-[#00B9FF] hover:bg-[#0097d4] text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out shadow-[0_0_30px_rgba(0,185,255,0.2)] hover:shadow-[0_0_40px_rgba(0,185,255,0.4)] cursor-pointer flex items-center gap-2 mx-auto sm:mx-0">
              Get Your Free Audit
              <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="group border-2 border-gray-300 hover:border-[#00B9FF] text-gray-700 hover:text-white hover:bg-[#00B9FF] font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out cursor-pointer flex items-center gap-2 mx-auto sm:mx-0">
              Book a Strategy Call
              <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SERVICES SECTION
   ───────────────────────────────────────────── */
const servicesData = [
  {
    title: "Search Engine Optimisation",
    desc: "We provide technical SEO, on-page optimisation, content strategy, and high-quality link building to improve search rankings and generate consistent long-term organic traffic.",
    icon: Search,
  },
  {
    title: "Pay-Per-Click Advertising",
    desc: "We manage performance-driven paid advertising campaigns across Google Ads, Microsoft Ads, and shopping platforms to maximise return on ad spend and drive qualified conversions.",
    icon: Target,
  },
  {
    title: "Social Media Marketing",
    desc: "We manage strategic social media campaigns and paid social advertising across platforms including Facebook, Instagram, LinkedIn, and TikTok to increase brand visibility and audience engagement.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    desc: "We develop SEO-driven content strategies including blogs, pillar pages, landing pages, whitepapers, and case studies designed to attract, educate, and convert potential customers.",
    icon: FileText,
  },
  {
    title: "Conversion Rate Optimisation",
    desc: "Webnox Digital analyses user behaviour and optimises landing pages and conversion funnels to improve conversion rates and maximise the value of your website traffic.",
    icon: TrendingUp,
  },
  {
    title: "Email Marketing",
    desc: "We design automated email campaigns, segmentation strategies, and lead nurturing workflows that keep your audience engaged and guide prospects through the customer journey.",
    icon: Mail,
  },
  {
    title: "Performance Marketing",
    desc: "We run results-driven marketing campaigns where every investment is tracked against measurable outcomes such as leads, sales, and customer acquisition.",
    icon: Zap,
  },
  {
    title: "B2B Digital Marketing",
    desc: "We build demand generation strategies, LinkedIn campaigns, and account-based marketing programmes tailored for B2B companies and longer sales cycles.",
    icon: Building2,
  },
  {
    title: "Analytics & Reporting",
    desc: "We implement advanced analytics systems and reporting dashboards that provide full visibility into campaign performance, customer behaviour, and marketing ROI.",
    icon: BarChart3,
  },
]

const ServicesSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // Animate Service Cards
      const validCards = cardsRef.current.filter(Boolean)
      gsap.fromTo(
        validCards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
            Specialist-Managed Digital Marketing for{" "}
            <span className="text-[#00B9FF]">Sustainable Growth</span>
          </h2>
          <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              A strong digital presence is built through multiple marketing channels working together
              under one strategy. Organic search builds long-term visibility. Paid advertising
              accelerates growth. Content builds authority. Social media builds brand trust.
              Conversion optimisation turns visitors into customers.
            </p>
            <p className="text-gray-900 font-semibold">
              As a full-service digital marketing agency, Webnox Digital manages every channel required
              to build and scale sustainable online growth.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((svc, i) => {
            const IconComponent = svc.icon
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,185,255,0.05)]"
                style={{
                  background: "linear-gradient(135deg, rgba(230,247,253,0.3) 0%, rgba(255,255,255,0.85) 100%)",
                  border: "1px solid rgba(0,185,255,0.2)",
                }}
              >
                {/* Background Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: "radial-gradient(circle at 10% 10%, rgba(0,185,255,0.12) 0%, transparent 60%)",
                  }}
                />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00B9FF]/10 text-[#00B9FF] mb-6 group-hover:bg-[#00B9FF] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title (H3) */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Decorative border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00B9FF]/0 to-transparent group-hover:via-[#00B9FF]/50 transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PROCESS SECTION
   ───────────────────────────────────────────── */
const processData = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We start with a comprehensive audit of your website, search performance, paid campaigns, analytics setup, and competitor landscape. This gives us a clear understanding of your current position and growth opportunities.",
  },
  {
    num: "02",
    title: "Strategy & Channel Planning",
    desc: "We design a multi-channel strategy with channel prioritisation, budget allocation, a 90-day timeline and measurable KPIs. You'll see exactly what we're doing, why, and what success looks like at every stage.",
  },
  {
    num: "03",
    title: "Campaign Execution",
    desc: "Our specialists execute across SEO, paid, social, content and email in a coordinated way, not in silos. Channel messaging aligns, audiences are sequenced, and every tactic contributes to the same growth goal.",
  },
  {
    num: "04",
    title: "Test, Measure, Optimise",
    desc: "Every campaign is tracked at a granular level using GA4, Hotjar, Clarity and custom reporting frameworks. We run continuous A/B testing on ads, landing pages and email sequences, and shift budget toward what's working.",
  },
  {
    num: "05",
    title: "Reporting Plain Language, Not Vanity Metrics",
    desc: "Monthly reports tied to business KPIs. Organic traffic, paid ROI, social engagement, conversion rates, lead volume, cost-per-acquisition. We tell you what we're changing next month and why.",
  },
  {
    num: "06",
    title: "Scale",
    desc: "Once foundations produce consistent results, we scale broader keyword targets, increase ad budgets with proven creative, new channels, and new markets. The strategy grows with your business.",
  },
]

const ProcessSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // Steps animation
      const validSteps = stepsRef.current.filter(Boolean)
      gsap.fromTo(
        validSteps,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f4fafd 100%)",
      }}
    >
      {/* Decorative vertical background line */}
      <div className="absolute top-1/3 bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#00B9FF]/20 via-[#00B9FF]/5 to-transparent hidden lg:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Block */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
            Our Digital Marketing Process <span className="text-[#00B9FF]">From Discovery to Scale</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Every engagement starts with a full audit of your current position, not a sales call.
            We map what exists, what's working, and where the fastest gains are. Then we build.
            Then we execute. Then we scale. Six stages, consistent on every account.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-6 md:space-y-8">
          {processData.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepsRef.current[i] = el)}
              className="group flex flex-col md:flex-row rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,185,255,0.06)]"
              style={{
                border: "1px solid rgba(0,185,255,0.2)",
                background: "linear-gradient(90deg, rgba(230,247,253,0.3) 0%, rgba(255,255,255,0.95) 100%)",
              }}
            >
              {/* Number Block (Left side) */}
              <div
                className="w-full md:w-28 flex items-center justify-center p-6 md:p-0 transition-colors duration-300"
                style={{
                  background: "#e0f5fe",
                  borderRight: "1px solid rgba(0,185,255,0.2)",
                }}
              >
                <span className="text-4xl md:text-5xl font-bold font-mono text-[#00B9FF] tracking-tight group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </span>
              </div>

              {/* Text Block (Right side) */}
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   INDUSTRY SECTION
   ───────────────────────────────────────────── */
const industryData = [
  { title: "SaaS & Software", icon: Cpu },
  { title: "E-Commerce & Retail", icon: ShoppingBag },
  { title: "Professional Services", icon: Briefcase },
  { title: "Healthcare & MedTech", icon: Heart },
  { title: "Real Estate & PropTech", icon: Home },
  { title: "Education & EdTech", icon: GraduationCap },
  { title: "Finance & FinTech", icon: Coins },
  { title: "Startups & Scale-ups", icon: Rocket },
  { title: "Manufacturing", icon: Factory },
  { title: "Legal & LegalTech", icon: Scale },
  { title: "Hospitality & Travel", icon: Globe },
  { title: "Enterprise & B2B", icon: Building2 },
]

const IndustrySection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // Grid items animation
      const validItems = itemsRef.current.filter(Boolean)
      gsap.fromTo(
        validItems,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-950 mb-6 leading-tight">
            Digital Marketing Built for <span className="text-[#00B9FF]">Your Industry</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Search behaviour, content expectations and conversion patterns vary by sector. A content strategy
            for a B2B SaaS company is developed differently from one created for an e-commerce brand or a
            healthcare provider. Our team has run campaigns across all of these verticals and brings sector-specific
            knowledge to every engagement.
          </p>
        </div>

        {/* 4x3 Grid (Desktop) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {industryData.map((item, i) => {
            const IconComponent = item.icon
            return (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="group relative rounded-xl p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_15px_rgba(0,185,255,0.03)]"
                style={{
                  background: "linear-gradient(135deg, rgba(230,247,253,0.3) 0%, rgba(255,255,255,0.9) 100%)",
                  border: "1px solid rgba(0,185,255,0.15)",
                }}
              >
                {/* Background Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                  style={{
                    background: "radial-gradient(circle at center, rgba(0,185,255,0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#00B9FF]/5 text-[#00B9FF]/70 mb-4 group-hover:bg-[#00B9FF]/10 group-hover:text-[#00B9FF] transition-all duration-300">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-gray-950 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Left side accent indicator */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#00B9FF] group-hover:h-8 transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   COMPARISON & RISK SECTION
   ───────────────────────────────────────────── */
const comparisonData = [
  {
    feature: "Team Structure",
    standard: "Junior staff, high turnover, work frequently outsourced",
    webnox: "50+ in-house specialists. Your account team doesn't change.",
  },
  {
    feature: "Contract Terms",
    standard: "12-month lock-in, exit fees, auto-renewal clauses",
    webnox: "Cancel anytime. No lock-in. 100% money-back guarantee.",
  },
  {
    feature: "Reporting",
    standard: "Vanity metrics, automated PDFs, no business context",
    webnox: "Business-tied KPIs. Monthly plain-language reports with actions.",
  },
  {
    feature: "Strategy",
    standard: "Same template applied to every client",
    webnox: "Custom strategy built on your specific audit and competitive gap.",
  },
  {
    feature: "Tools Used",
    standard: "One or two tools, shallow data",
    webnox: "Ahrefs, SEMrush, Screaming Frog, GA4, Hotjar, Surfer SEO and more.",
  },
  {
    feature: "Track Record",
    standard: "Limited case studies, vague results claims",
    webnox: "1,200+ clients. 40+ countries. 14+ years.",
  },
  {
    feature: "Channel Scope",
    standard: "Usually 1–2 channels, no coordination",
    webnox: "Full-service: SEO, PPC, social, content, email, and CRO coordinated.",
  },
  {
    feature: "Transparency",
    standard: "Black-box processes, unclear what you're paying for",
    webnox: "Full strategy documentation. Open access to all accounts and data.",
  },
]

const ComparisonSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const tableRef = useRef(null)
  const riskRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // Table Animation
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
          },
        }
      )

      // Risk Card Animation
      gsap.fromTo(
        riskRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: riskRef.current,
            start: "top 85%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f4fafd 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Block */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
            How Webnox Digital Compares to a <span className="text-[#00B9FF]">Standard Agency</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Most agencies offer a version of the same service. The difference shows up in how they're
            structured, how they report, and what happens when results don't come. Here's the comparison.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div ref={tableRef} className="overflow-x-auto rounded-2xl border border-gray-200 mb-16 bg-white shadow-sm">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm md:text-base">
            <thead>
              <tr
                className="border-b border-gray-200 text-gray-900 font-bold"
                style={{
                  background: "#e0f5fe",
                }}
              >
                <th className="p-5 md:p-6 w-[24%]">What We're Comparing</th>
                <th className="p-5 md:p-6 w-[38%] text-rose-700">Standard Agency</th>
                <th className="p-5 md:p-6 w-[38%] text-[#00B9FF]">Webnox Digital</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors duration-200">
                  <td className="p-5 md:p-6 font-semibold text-gray-800 bg-white">
                    {row.feature}
                  </td>
                  <td className="p-5 md:p-6 text-rose-700 bg-rose-50/[0.2]">
                    {row.standard}
                  </td>
                  <td className="p-5 md:p-6 text-cyan-800 font-medium bg-cyan-50/[0.2]">
                    {row.webnox}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Risk-Free Card */}
        <div
          ref={riskRef}
          className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm"
          style={{
            border: "1px solid rgba(0, 185, 255, 0.35)",
            background: "linear-gradient(135deg, rgba(230,247,253,0.3) 0%, rgba(255,255,255,0.95) 100%)",
          }}
        >
          {/* Left Block */}
          <div
            className="w-full md:w-56 p-8 flex flex-col justify-center items-center text-center gap-1 shrink-0"
            style={{
              background: "#e0f5fe",
              borderRight: "1px solid rgba(0, 185, 255, 0.35)",
            }}
          >
            <span className="text-sm font-bold tracking-[0.2em] text-[#00B9FF]">RISK</span>
            <span className="text-3xl font-extrabold tracking-[0.1em] text-gray-900">FREE</span>
            <span className="text-xs font-semibold tracking-wider text-gray-500 mt-2 uppercase">
              Cancel Anytime
            </span>
          </div>

          {/* Right Block */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Risk-Free Digital Marketing, No Long-Term Contracts
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              No long-term contracts. No exit fees. No lock-in clauses. If our digital marketing work
              isn't delivering for your business, cancel at any time and we'll refund you in full.
              That's our standard operating model with every client, not a promotional offer.
            </p>
            <Link href="/contact-us" className="self-start">
              <button className="group mt-5 border border-gray-300 hover:border-[#00B9FF] text-gray-700 hover:text-white hover:bg-[#00B9FF] font-semibold px-6 py-3 rounded-xl text-sm md:text-base transition-all duration-300 ease-out cursor-pointer flex items-center gap-2">
                Book a Strategy Call
                <MoveUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   MARKETS SECTION
   ───────────────────────────────────────────── */
const marketsData = [
  { country: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { country: "United States", code: "US", flag: "🇺🇸" },
  { country: "UAE & Gulf", code: "AE", flag: "🇦🇪" },
  { country: "Australia", code: "AU", flag: "🇦🇺" },
  { country: "Canada", code: "CA", flag: "🇨🇦" },
  { country: "Singapore", code: "SG", flag: "🇸🇬" },
  { country: "Germany", code: "DE", flag: "🇩🇪" },
  { country: "40+ More Countries", code: "GLOBAL", flag: "🌐" },
]

const MarketSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // Grid items animation
      const validItems = itemsRef.current.filter(Boolean)
      gsap.fromTo(
        validItems,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
            Digital Marketing Across <span className="text-[#00B9FF]">Every Major Market</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We've delivered digital marketing campaigns in 40+ countries from highly competitive markets like
            the UK and US to fast-growing regions like the UAE, Australia, Canada, Singapore and beyond.
            Every market has different search behaviour, platform preferences and content expectations. Our
            team accounts for those differences in every strategy we build.
          </p>
        </div>

        {/* 4x2 Grid of markets */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {marketsData.map((mkt, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="group relative rounded-xl p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_15px_rgba(0,185,255,0.03)]"
              style={{
                background: "linear-gradient(135deg, rgba(230,247,253,0.3) 0%, rgba(255,255,255,0.9) 100%)",
                border: "1px solid rgba(0,185,255,0.2)",
              }}
            >
              {/* Background Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                style={{
                  background: "radial-gradient(circle at center, rgba(0,185,255,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-3">
                {/* Flag emoji/Icon */}
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {mkt.flag}
                </span>

                {/* Country Name */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-gray-950 transition-colors duration-300">
                  {mkt.country}
                </h3>
              </div>

              {/* Bottom line glow decoration */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00B9FF] group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CTA OUTGROW SECTION
   ───────────────────────────────────────────── */
const CTAOutgrowSection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 bg-gray-50"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f4fafd 100%)",
      }}
    >
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-md"
        style={{
          border: "1px solid rgba(0, 185, 255, 0.35)",
          background: "linear-gradient(135deg, rgba(230,247,253,0.5) 0%, rgba(255,255,255,0.98) 100%)",
        }}
      >
        {/* Decorative corner glows */}
        <div
          className="absolute -top-24 -left-24 w-48 h-48 rounded-full opacity-30 filter blur-3xl"
          style={{ background: "#e0f5fe" }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full opacity-30 filter blur-3xl"
          style={{ background: "#e8e0ff" }}
        />

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            Ready to Outgrow Your Competition Online?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us where you are and where you need to be. We'll build the strategy to close that gap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="group relative bg-[#00B9FF] hover:bg-[#0097d4] text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out shadow-[0_0_30px_rgba(0,185,255,0.2)] hover:shadow-[0_0_40px_rgba(0,185,255,0.4)] cursor-pointer flex items-center gap-2 mx-auto sm:mx-0">
                Get a Free Digital Marketing Audit
                <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="group border-2 border-gray-300 hover:border-[#00B9FF] text-gray-700 hover:text-white hover:bg-[#00B9FF] font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out cursor-pointer flex items-center gap-2 mx-auto sm:mx-0">
                Book a Strategy Call
                <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const SEOLogoIcon = (props) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="currentColor"
      fontSize="16"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-0.02em"
    >
      SEO
    </text>
  </svg>
)

/* ─────────────────────────────────────────────
   TOOLS SECTION
   ───────────────────────────────────────────── */
const toolsCategoriesDetailed = [
  {
    category: "SEO & Search",
    title: "Build Dominant Search Authority",
    description: "We combine enterprise-grade analytics with manual audits to find competitive content gaps and technical crawl errors. No guesswork—just raw search visibility built on the industry's most robust data pipelines.",
    items: ["Ahrefs", "SEMrush", "Screaming Frog", "Surfer SEO", "Google Search Console", "Bing Webmaster Tools"],
    CenterIcon: SEOLogoIcon,
    centerColor: "text-[#00B9FF]"
  },
  {
    category: "Analytics & CRO",
    title: "Turn Clicks into Predictable Revenue",
    description: "Data is useless without interpretation. We track user heatmaps, record visitor journeys, and perform controlled A/B split-tests to eliminate checkout friction and maximize lead conversions.",
    items: ["Google Analytics 4", "Hotjar", "Microsoft Clarity", "Looker Studio", "VWO", "Optimizely"],
    CenterIcon: BarChart3,
    centerColor: "text-purple-500"
  },
  {
    category: "Paid Media",
    title: "High-Intent Paid Acquisition at Scale",
    description: "Stop burning ad budget on low-converting audiences. We deploy laser-focused intent ads, dynamic social creatives, and cross-channel remarketing sequences to lock in buyers at the lowest acquisition cost.",
    items: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "TikTok Ads", "Microsoft Advertising"],
    CenterIcon: Target,
    centerColor: "text-red-500"
  },
  {
    category: "Marketing Automation",
    title: "Automate and Nurture Your Lifecycle",
    description: "Scale your revenue without scaling your team. We construct automated customer journeys, trigger behavioral email sequences, and align CRM pipelines to turn cold leads into repeat brand advocates.",
    items: ["HubSpot", "Mailchimp", "ActiveCampaign", "Klaviyo", "Brevo", "Pardot"],
    CenterIcon: Zap,
    centerColor: "text-orange-500"
  }
]

const getToolLogo = (itemName) => {
  const normalized = itemName.toLowerCase().replace(/[^a-z0-9]/g, "")
  if (normalized === "linkedincampaignmanager") return ToolLogos.linkedin
  return ToolLogos[normalized] || null
}

const ToolsSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const rowsRef = useRef([])
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      if (isDesktop) {
        const slides = rowsRef.current.filter(Boolean)
        if (slides.length > 0) {
          // Initialize slide inline styles for desktop state
          gsap.set(slides.slice(1), { opacity: 0, scale: 1.05, pointerEvents: "none" })
          gsap.set(slides[0], { opacity: 1, scale: 1, pointerEvents: "auto" })

          // Create Scroll Pinning Timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=300%", // scroll length for transitions
              pin: true,
              scrub: true,
              anticipatePin: 1,
            }
          })

          // Slide 0 -> 1
          tl.to(slides[0], { opacity: 0, scale: 0.95, duration: 1, ease: "power1.inOut" })
            .to(slides[1], { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut" }, "-=0.5")
            .set(slides[0], { pointerEvents: "none" })
            .set(slides[1], { pointerEvents: "auto" })

          // Slide 1 -> 2
          tl.to(slides[1], { opacity: 0, scale: 0.95, duration: 1, ease: "power1.inOut" })
            .to(slides[2], { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut" }, "-=0.5")
            .set(slides[1], { pointerEvents: "none" })
            .set(slides[2], { pointerEvents: "auto" })

          // Slide 2 -> 3
          tl.to(slides[2], { opacity: 0, scale: 0.95, duration: 1, ease: "power1.inOut" })
            .to(slides[3], { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut" }, "-=0.5")
            .set(slides[2], { pointerEvents: "none" })
            .set(slides[3], { pointerEvents: "auto" })
        }
      } else {
        // Mobile simple slide-in animation on scroll
        const validRows = rowsRef.current.filter(Boolean)
        // Reset absolute inline styles if resize happened
        gsap.set(validRows, { opacity: 1, scale: 1, pointerEvents: "auto" })
        
        validRows.forEach((row) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
              },
            }
          )
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [isDesktop])

  const getOrbitItems = (itemList, orbitIdx, totalOrbits = 2) => {
    const itemsPerOrbit = Math.ceil(itemList.length / totalOrbits)
    const start = orbitIdx * itemsPerOrbit
    return itemList.slice(start, start + itemsPerOrbit)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-0 px-4 sm:px-6 bg-white overflow-hidden animate-section lg:h-screen lg:flex lg:flex-col lg:justify-center"
    >
      {/* Style injection for upright logo rotations on spinning orbits */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-counter-clockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}} />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header Block */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-4 leading-tight">
            Enterprise-Grade Tools, <span className="text-[#00B9FF]">Applied with Expertise</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The tools we use aren't entry-level. We invest in enterprise platforms across every discipline because
            data quality and depth directly affect results. More importantly, tools are only useful when the
            expertise to interpret and act on them is there.
          </p>
        </div>

        {/* Dynamic slides wrapper: relative absolute overlay on desktop, normal stacked list on mobile */}
        <div className="relative w-full flex flex-col lg:block gap-20 lg:gap-0 lg:h-[60vh]">
          {toolsCategoriesDetailed.map((row, i) => {
            const CenterIcon = row.CenterIcon
            const isEven = i % 2 === 0

            return (
              <div
                key={i}
                ref={(el) => (rowsRef.current[i] = el)}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between min-h-[480px] lg:min-h-0 w-full gap-8 md:gap-12 lg:absolute lg:inset-0`}
                style={isDesktop ? {
                  opacity: i === 0 ? 1 : 0,
                  pointerEvents: i === 0 ? "auto" : "none",
                } : {}}
              >
                {/* Text Details (Left/Right) */}
                <div className="orbit-content w-full md:w-1/2 flex flex-col justify-center z-10">
                  <span className="text-xs md:text-sm font-bold tracking-widest text-[#00B9FF] uppercase mb-3">
                    {row.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                    {row.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                    {row.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link href="/contact-us">
                      <Button className="group bg-[#00B9FF] hover:bg-[#0097d4] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer border-none shadow-[0_4px_14px_rgba(0,185,255,0.25)]">
                        Free Strategy Audit
                        <MoveUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </Link>
                    <Link href="/contact-us">
                      <Button variant="outline" className="border-2 border-gray-300 hover:border-[#00B9FF] text-gray-700 hover:text-white hover:bg-[#00B9FF] font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer">
                        Talk to a Specialist
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Orbit Visualization (Right/Left) */}
                <div className="orbit-visual w-full md:w-1/2 h-[26rem] sm:h-[30rem] lg:h-full flex items-center justify-center overflow-hidden relative">
                  <div className={`relative w-[26rem] h-[26rem] sm:w-[30rem] sm:h-[30rem] lg:w-[32rem] lg:h-[32rem] ${isEven ? 'md:translate-x-[15%] lg:translate-x-[25%]' : 'md:-translate-x-[15%] lg:-translate-x-[25%]'} flex items-center justify-center`}>
                    
                    {/* Center Circle */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center z-20">
                      <CenterIcon className={`w-8 h-8 sm:w-10 sm:h-10 ${row.centerColor}`} />
                    </div>

                    {/* Inner Orbit (Orbit 1) */}
                    <div
                      className="absolute rounded-full border border-dashed border-gray-300"
                      style={{
                        width: "13rem",
                        height: "13rem",
                        animation: "spin-clockwise 35s linear infinite",
                      }}
                    >
                      {getOrbitItems(row.items, 0, 2).map((item, idx) => {
                        const Logo = getToolLogo(item)
                        const totalItems = getOrbitItems(row.items, 0, 2).length
                        const angle = (idx * 2 * Math.PI) / totalItems
                        const x = 50 + 50 * Math.cos(angle)
                        const y = 50 + 50 * Math.sin(angle)

                        return (
                          <div
                            key={idx}
                            className="absolute bg-white border border-gray-200/50 rounded-full px-2.5 py-1.5 shadow-sm flex items-center justify-center select-none shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                              animation: "spin-counter-clockwise 35s linear infinite",
                            }}
                          >
                            {Logo ? (
                              <Logo className="h-5 w-auto max-w-[80px] text-gray-800" />
                            ) : (
                              <span className="text-[10px] font-semibold text-gray-700">{item}</span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* Outer Orbit (Orbit 2) */}
                    <div
                      className="absolute rounded-full border border-dashed border-gray-300"
                      style={{
                        width: "22rem",
                        height: "22rem",
                        animation: "spin-counter-clockwise 50s linear infinite",
                      }}
                    >
                      {getOrbitItems(row.items, 1, 2).map((item, idx) => {
                        const Logo = getToolLogo(item)
                        const totalItems = getOrbitItems(row.items, 1, 2).length
                        const angle = (idx * 2 * Math.PI) / totalItems
                        const x = 50 + 50 * Math.cos(angle)
                        const y = 50 + 50 * Math.sin(angle)

                        return (
                          <div
                            key={idx}
                            className="absolute bg-white border border-gray-200/50 rounded-full px-2.5 py-1.5 shadow-sm flex items-center justify-center select-none shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                              animation: "spin-clockwise 50s linear infinite",
                            }}
                          >
                            {Logo ? (
                              <Logo className="h-5 w-auto max-w-[80px] text-gray-800" />
                            ) : (
                              <span className="text-[10px] font-semibold text-gray-700">{item}</span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CTA BUILD ENGINE SECTION
   ───────────────────────────────────────────── */
const CTABuildEngineSection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f4fafd 100%)",
      }}
    >
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-md"
        style={{
          border: "1px solid rgba(0, 185, 255, 0.35)",
          background: "linear-gradient(135deg, rgba(230,247,253,0.5) 0%, rgba(255,255,255,0.98) 100%)",
        }}
      >
        {/* Decorative corner glows */}
        <div
          className="absolute -top-24 -left-24 w-48 h-48 rounded-full opacity-30 filter blur-3xl"
          style={{ background: "#e0f5fe" }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full opacity-30 filter blur-3xl"
          style={{ background: "#e8e0ff" }}
        />

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            Let's Build Your Digital Marketing Engine
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            1,200+ businesses grew online with Webnox. Risk-free. Cancel anytime. 100% money back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="group relative bg-[#00B9FF] hover:bg-[#0097d4] text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out shadow-[0_0_30px_rgba(0,185,255,0.2)] hover:shadow-[0_0_40px_rgba(0,185,255,0.4)] cursor-pointer flex items-center gap-2 mx-auto sm:mx-0">
                Get a Free Marketing Audit
                <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="group border-2 border-gray-300 hover:border-[#00B9FF] text-gray-700 hover:text-white hover:bg-[#00B9FF] font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out cursor-pointer flex items-center gap-2 mx-auto sm:mx-0">
                Talk to a Specialist
                <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FAQ SECTION
   ───────────────────────────────────────────── */
const faqData = [
  {
    question: "What does a full-service digital marketing agency actually do?",
    answer: "A full-service digital marketing agency manages every channel through which you reach and convert your audience online, SEO for organic visibility, PPC for immediate paid traffic, social media for brand presence, content marketing for audience education, email marketing for lead nurturing, and CRO to improve your conversion rate. The key advantage of a full-service agency is coordination: all channels align under one strategy and reinforce each other rather than working in isolation.",
  },
  {
    question: "How does your pricing work?",
    answer: "Our pricing is built around the scope of your campaign, the channels you need, the competitiveness of your industry, and the scale of your targets. We offer focused single-channel campaigns and comprehensive multi-channel retainers. No minimum contract period and no lock-in. We send you a proposal based on your audit findings, not a generic price list. Contact us, and we'll put together a tailored scope with clear deliverables and pricing before you commit to anything.",
  },
  {
    question: "How long before I see results from digital marketing?",
    answer: "PPC campaigns drive traffic within hours. SEO shows measurable improvement in organic impressions within 60–90 days, with significant traffic growth at the 4–6 month mark. Content marketing and social media produce compounding results over 6–12 months. We set realistic expectations for every channel in your strategy at the outset and track progress against them monthly.",
  },
  {
    question: "Do you work with businesses outside the UK and the USA?",
    answer: "Yes, we've delivered campaigns in 40+ countries, including the UAE, Australia, Canada, Singapore, Germany, India and many more. Our team handles international SEO (hreflang, geo-targeting, multi-region content), cross-border paid media, and campaigns targeted at multiple markets simultaneously. We understand how search behaviour and competition vary by region and build that into every strategy.",
  },
  {
    question: "Can you manage just one channel?",
    answer: "You can work with us on a single channel. Many clients start with SEO or PPC and expand into additional channels once they see results. We'll recommend what makes sense for your current stage and be direct if a channel isn't right for you yet.",
  },
  {
    question: "What industries do you have experience in?",
    answer: "Our team has run campaigns across SaaS, e-commerce, professional services, healthcare, real estate, education, finance, legal, hospitality, manufacturing, startups and enterprise B2B. Each sector has different buyer psychology, content expectations and competitive dynamics. We bring sector-specific knowledge to every engagement.",
  },
  {
    question: "What reporting will I receive?",
    answer: "Monthly reports tied to your business KPIs, organic traffic, keyword movements, paid ROI, conversion rates, lead volume and cost-per-acquisition. No vanity metrics, no data dumps. You'll also have live dashboard access in Looker Studio at all times. Reports come with a clear action summary of what we're changing next month and why.",
  },
]

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
        )
      } else {
        gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" })
      }
    }
  }, [isOpen])

  return (
    <div
      className="rounded-2xl transition-all duration-300 overflow-hidden shadow-[0_2px_10px_rgba(0,185,255,0.02)]"
      style={{
        border: "1px solid rgba(0, 185, 255, 0.25)",
        background: "rgba(230, 247, 253, 0.35)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left text-gray-950 font-bold text-base md:text-lg cursor-pointer hover:bg-white/[0.01] transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          className="w-5 h-5 text-[#00B9FF] shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{
          height: 0,
          opacity: 0,
        }}
      >
        <div className="p-6 pt-0 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-200">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FAQSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // List Animation
      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Block */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQs List Accordion */}
        <div ref={listRef} className="space-y-4">
          {faqData.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE EXPORT
   ───────────────────────────────────────────── */
export default function DigitalMarketingAgencyPage() {
  return (
    <main className="overflow-hidden bg-gradient-to-bl from-white via-[#e0f8ff] to-[#e8e0ff]">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CTASection />
      <ServicesSection />
      <ProcessSection />
      <IndustrySection />
      <ComparisonSection />
      <MarketSection />
      <CTAOutgrowSection />
      <ToolsSection />
      <CTABuildEngineSection />
      <FAQSection />
    </main>
  )
}
