"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ToolLogos } from "@/components/ToolLogos"
import { InteractiveTiltCard } from "@/components/ui/tilt-card"
import AnimatedBackground from "@/components/ui/animated-background"
import { motion, AnimatePresence } from "framer-motion"
import {
  MoveUpRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Settings,
  Layers,
  Globe,
  MapPin,
  ShoppingBag,
  FileText,
  BarChart3,
  Award,
  Users,
  ShieldCheck,
  Check,
  ChevronDown,
  ArrowRight,
  Cpu,
  Briefcase,
  Heart,
  Home,
  GraduationCap,
  Rocket,
  Building2,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/* ─────────────────────────────────────────────
   ANIMATED COUNTER COMPONENT
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

/* ─────────────────────────────────────────────
   SHUFFLE TOOLS COMPONENT
   ───────────────────────────────────────────── */
const ShuffleTools = ({ tools }) => {
  const [shuffled, setShuffled] = useState([]);
  const timeoutRef = useRef(null);

  const shuffleArray = (arr) => {
    const array = [...arr];
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  useEffect(() => {
    setShuffled(shuffleArray(tools));
  }, [tools]);

  useEffect(() => {
    const triggerShuffle = () => {
      setShuffled(shuffleArray(tools));
      timeoutRef.current = setTimeout(triggerShuffle, 3000);
    };
    if (shuffled.length > 0) {
      timeoutRef.current = setTimeout(triggerShuffle, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [shuffled, tools]);

  return (
    <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start">
      {shuffled.map((tool) => (
        <motion.div
          key={tool.key}
          layout
          transition={{ duration: 1.5, type: "spring", stiffness: 80, damping: 15 }}
          className="shrink-0"
        >
          {tool.element}
        </motion.div>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────
   FAQ ACCORDION COMPONENT
   ───────────────────────────────────────────── */
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 py-5">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#00B9FF] transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SeoAgencyPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeIndustry, setActiveIndustry] = useState(0)

  const seoToolsData = [
    { key: 'ahrefs', element: <ToolLogos.ahrefs className="h-8 text-gray-500 hover:text-gray-900 transition-colors" /> },
    { key: 'semrush', element: <ToolLogos.semrush className="h-8 text-gray-500 hover:text-gray-900 transition-colors" /> },
    { key: 'screamingfrog', element: <ToolLogos.screamingfrog className="h-8 text-gray-500 hover:text-gray-900 transition-colors" /> },
    { key: 'surferseo', element: <ToolLogos.surferseo className="h-8 text-gray-500 hover:text-gray-900 transition-colors" /> },
    { key: 'googlesearchconsole', element: <ToolLogos.googlesearchconsole className="h-6 text-gray-500 hover:text-gray-900 transition-colors" /> },
  ];

  const analyticsToolsData = [
    { key: 'googleanalytics4', element: <ToolLogos.googleanalytics4 className="h-8 text-gray-500 hover:text-gray-900 transition-colors" /> },
    { key: 'microsoftclarity', element: <ToolLogos.microsoftclarity className="h-6 text-gray-500 hover:text-gray-900 transition-colors" /> },
    { key: 'hotjar', element: <ToolLogos.hotjar className="h-8 text-gray-500 hover:text-gray-900 transition-colors" /> },
    { key: 'lookerstudio', element: <ToolLogos.lookerstudio className="h-6 text-gray-500 hover:text-gray-900 transition-colors" /> },
  ];

  // GSAP animation refs
  const heroRef = useRef(null)
  const heroH1 = useRef(null)
  const heroTitle = useRef(null)
  const heroDesc = useRef(null)
  const heroButtons = useRef(null)
  const heroStats = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024

      // Initial settings
      gsap.set(
        [
          heroH1.current,
          heroTitle.current,
          heroDesc.current,
          heroButtons.current,
          heroStats.current,
        ],
        { opacity: 0, y: isDesktop ? 30 : 15 }
      )

      const tl = gsap.timeline()

      tl.to(heroH1.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
        .to(heroTitle.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(heroDesc.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .to(heroButtons.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .to(heroStats.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const faqs = [
    {
      question: "How long does it take to see results from SEO?",
      answer: "Most clients start seeing measurable improvements in organic impressions and keyword rankings within 60–90 days. Significant traffic and lead volume increases typically become visible between months 4 and 6, depending on the competitiveness of your industry and the current state of your site. SEO is a compounding investment: the longer you run it, the greater the return.",
    },
    {
      question: "What's included in a free SEO audit?",
      answer: "Our free audit covers technical health (crawlability, indexation, site speed, Core Web Vitals), on-page factors (title tags, meta descriptions, heading structure, content quality), backlink profile overview, and a top-level keyword gap analysis. You'll receive a prioritised report you can act on with or without us.",
    },
    {
      question: "Do you offer SEO for businesses outside the UK and USA?",
      answer: "Yes, we've delivered SEO campaigns in 40+ countries. Our team has experience with international SEO strategy, including hreflang implementation, geo-targeting for markets like UAE, Australia, Canada and Singapore, and multi-language content workflows. We understand how search behaviour and competition vary by region.",
    },
    {
      question: "What makes Webnox different from other SEO agencies?",
      answer: "Three things: transparency, technical depth, and accountability. We don't lock you into long contracts. Our risk-free, cancel-anytime model means we earn your business every month. Our team of 70+ specialists works in-house, not outsourced. And we report on the metrics that matter to your business, not rankings for keywords no one's searching.",
    },
    {
      question: "Can you work alongside our existing marketing team?",
      answer: "Absolutely. Many of our clients have in-house marketing teams. We can operate as a fully managed SEO service, as a specialist extension of your team, or in an advisory capacity—whatever fits your structure and how you want to work.",
    },
    {
      question: "What industries do you specialise in for SEO?",
      answer: "Our team has experience across SaaS, e-commerce, professional services, healthcare, real estate, education, legal, finance, and B2B technology sectors. Each industry has unique search dynamics, competitive landscapes, and content requirements, so we adapt our strategy accordingly rather than applying a one-size-fits-all approach.",
    },
    {
      question: "Do you handle both on-page and off-page SEO?",
      answer: "Yes, our SEO service is holistic. We manage technical SEO, on-page optimisation, content creation, and link building under one strategy. All three pillars need to work together—fixing on-page without building authority, or building links without solid technical foundations, produces inconsistent results.",
    },
  ]

  const services = [
    {
      icon: <Settings className="w-8 h-8 text-[#00B9FF]" />,
      title: "Technical SEO",
      description: "A strong technical foundation allows search engines to properly crawl, index, and rank your website. We improve site architecture, Core Web Vitals, schema markup, mobile performance, and overall crawlability to strengthen search visibility.",
    },
    {
      icon: <Search className="w-8 h-8 text-[#00B9FF]" />,
      title: "On-Page Optimisation",
      description: "Every page is optimised to match user search intent and target keywords. This includes refining title tags, meta descriptions, heading structure, internal linking, and content layout.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#00B9FF]" />,
      title: "Off-Page & Link Building",
      description: "We build high-quality backlinks through digital PR, outreach, and strategic content partnerships. Our link-building strategies strengthen domain authority and improve search rankings.",
    },
    {
      icon: <FileText className="w-8 h-8 text-[#00B9FF]" />,
      title: "Content Strategy & SEO Writing",
      description: "Effective SEO requires structured, high-quality content. We develop pillar pages, topic clusters, and blog strategies that attract organic traffic and support long-term search growth.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#00B9FF]" />,
      title: "Local SEO",
      description: "We improve your visibility in local searches by optimising Google Business Profile, building local citations, and creating location-focused landing pages.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#00B9FF]" />,
      title: "E-Commerce SEO",
      description: "Online stores require specialised optimisation to compete in search results. We improve product pages, category structure, internal linking, and structured data to increase product discoverability.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#00B9FF]" />,
      title: "Technical SEO Audits",
      description: "A detailed audit reveals the issues limiting your website’s performance. Our audits identify technical errors, content gaps, and ranking opportunities with a prioritised action plan.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#00B9FF]" />,
      title: "SEO Reporting & Analytics",
      description: "You receive clear monthly SEO reports focused on traffic, rankings, and conversions. We use tools like Google Analytics, Search Console, and Ahrefs to track real performance metrics.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#00B9FF]" />,
      title: "International SEO",
      description: "Expanding into global markets requires targeted optimisation. We implement hreflang tags, geo-targeting strategies, and multi-region SEO frameworks to improve visibility across different countries.",
    },
  ]

  const processes = [
    {
      num: "01",
      title: "Discovery & Audit",
      desc: "Full technical audit using Screaming Frog, Ahrefs and GA4. We map every crawl error, performance issue, ranking opportunity and content gap before writing a single word of strategy.",
    },
    {
      num: "02",
      title: "Keyword & Intent Research",
      desc: "Using SEMrush and Ahrefs, we build a keyword universe aligned to your services and buyer journey, separating informational, commercial and transactional intent so every page has a clear purpose.",
    },
    {
      num: "03",
      title: "Strategy & Roadmap",
      desc: "A prioritised 90-day roadmap covering technical fixes, content to create, pages to optimise, and link targets to pursue. You'll know exactly what's happening and why at every stage.",
    },
    {
      num: "04",
      title: "On-Site Execution",
      desc: "Technical fixes, content creation, on-page optimisation and site architecture improvements implemented by our team or handed off to yours with clear briefs.",
    },
    {
      num: "05",
      title: "Off-Site Authority Building",
      desc: "Targeted link acquisition through editorial outreach and digital PR. Every link we build is vetted for relevance and domain authority, no PBNs, no link farms.",
    },
    {
      num: "06",
      title: "Reporting & Iteration",
      desc: "Monthly reporting in plain English. Rankings, organic traffic, conversions, and what we're doing next. Strategy evolves based on what the data shows.",
    },
  ]

  const industries = [
    { name: "Software & SaaS", desc: "long-tail content strategy and developer-focused technical SEO", icon: <Cpu className="w-5 h-5" /> },
    { name: "E-Commerce", desc: "product and category architecture, shopping feed optimisation, CRO-led content", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Professional Services", desc: "thought leadership content, local SEO, trust signal optimisation", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Healthcare & MedTech", desc: "E-E-A-T focused content strategy, YMYL compliance", icon: <Heart className="w-5 h-5" /> },
    { name: "Real Estate", desc: "local SEO, geo-targeted landing pages, area guide content", icon: <Home className="w-5 h-5" /> },
    { name: "Education & EdTech", desc: "informational content clusters driving course and enrolment traffic", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Startups", desc: "fast-build topical authority, MVP content strategies for new domains", icon: <Rocket className="w-5 h-5" /> },
    { name: "Enterprise & B2B", desc: "account-based SEO, intent-driven content for long sales cycles", icon: <Building2 className="w-5 h-5" /> },
  ]

  const timeline = [
    {
      months: "Month 1–2",
      phase: "Foundations",
      desc: "Audit completion, keyword mapping, technical fixes prioritised and started. Quick wins identified and actioned where possible, things like fixing crawl errors, optimising existing pages that are close to ranking, and plugging obvious content gaps. You'll see the roadmap and understand why each task matters.",
    },
    {
      months: "Month 3–4",
      phase: "Momentum",
      desc: "New content published, backlink acquisition underway, technical improvements indexed. Organic impressions typically start climbing. Some keywords will begin moving into top-20 positions. We'll be tracking every shift and adjusting where needed.",
    },
    {
      months: "Month 4–6",
      phase: "Results",
      desc: "For most clients, this is where consistent ranking improvements become visible. Traffic from organic search starts increasing week over week. Lead or revenue contribution from organic channels becomes measurable. The compounding effect of good SEO begins to show.",
    },
    {
      months: "Month 6+",
      phase: "Scale",
      desc: "With solid foundations in place, we scale more content, broader keyword targets, stronger domain authority, and expansion into new service areas or geographies. This is where the ROI of SEO becomes undeniable.",
    },
  ]

  return (
    <div className="w-full bg-white overflow-hidden text-gray-800">
      
      {/* ─────────────────────────────────────────────
         HERO SECTION
         ───────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center min-h-[550px] md:min-h-[650px] lg:min-h-[750px] w-full overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 100%)",
        }}
      >
        {/* Decorative Grid & Glows */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,185,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,185,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0,185,255,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="relative w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-6xl mx-auto pt-32 md:pt-40 pb-12">
          
          <span
            ref={heroH1}
            className="text-[#00B9FF] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-[#E6F7FD] rounded-full border border-[#00B9FF]/20"
          >
            Organic Search & Rankings
          </span>

          <h1
            ref={heroTitle}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-950 mb-6 leading-[1.1] tracking-tight max-w-5xl"
          >
            SEO Agency for Global Businesses Seeking <span className="text-[#00B9FF]">Organic Growth</span>
          </h1>

          <p
            ref={heroDesc}
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mx-auto mb-8 max-w-4xl"
          >
            Struggling to get traffic from Google while competitors outrank you? Our SEO agency helps fix technical issues, improve rankings, and attract qualified customers. Get a free SEO audit and discover your growth opportunities today.
          </p>

          <div ref={heroButtons} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact-us">
              <button className="group relative bg-[#00B9FF] hover:bg-[#0097d4] text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,185,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,185,255,0.4)] cursor-pointer flex items-center gap-2">
                Book Your Free SEO Audit
                <MoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>

          {/* Hero Quick Stats */}
          <div
            ref={heroStats}
            className="w-full max-w-5xl border-t border-gray-100 pt-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center max-w-lg md:max-w-none mx-auto">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-950">
                  <AnimatedCounter target="1200" suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Clients Served</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-950">
                  <AnimatedCounter target="40" suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Countries Covered</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-950">
                  <AnimatedCounter target="14" suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-950">
                  <AnimatedCounter target="15" suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Industry Awards</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-950">
                  <AnimatedCounter target="70" suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">SEO Specialists</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         ABOUT SECTION: SEARCH TRAFFIC INTO REVENUE
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              SEO Services That Turn Search Traffic Into Revenue
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
              Most businesses have a website. Far fewer have a website that actually gets found. The difference isn't luck — it's a structured, data-driven approach to search engine optimisation that earns your pages the rankings they deserve.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At Webnox Digital, our SEO services are built around one goal: sustainable organic growth that compounds over time. We don't chase algorithm shortcuts or make promises we can't keep. What we do is combine 14+ years of search expertise with a technical-first methodology that has helped 1,200+ clients across 40+ countries build real, lasting visibility on Google and beyond.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Whether you're a startup trying to get noticed or an established business that's watched competitors outrank you for years, the right SEO strategy changes everything.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         SERVICES SECTION
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#f4fafd]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              Types of SEO Services We Provide
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Search engine optimisation (SEO) is not a single task; it is a structured process. It improves your website’s technical setup, content quality, backlink authority, and user experience. At Webnox Digital, we manage every part of this process to increase search visibility, drive organic traffic, and help your business grow online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 hover:border-[#00B9FF]/40 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-[#E6F7FD] rounded-xl w-14 h-14 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         WHY ORGANIC SEARCH
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">
              Why Search Matters
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              Why Organic Search Still Outperforms Every Other Channel
            </h2>
            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed pt-4">
              <p>
                Search engine optimisation helps your website attract consistent, high-quality traffic from people actively searching for your products or services. When your pages rank for relevant keywords, they continue bringing visitors, leads, and opportunities over time.
              </p>
              <p className="font-semibold text-gray-950 border-l-4 border-[#00B9FF] pl-4 md:pl-6 my-6 text-lg">
                Google processes roughly 8.5 billion searches every single day. Your potential customers are in there, searching for exactly what you offer. The businesses capturing that traffic aren't doing it by accident — they've invested in the right foundations. We help you build those foundations.
              </p>
              <p>
                SEO also strengthens your website’s overall performance through technical improvements, structured content, and better user experience. When implemented correctly, SEO delivers a strong return on investment (ROI) by driving sustainable organic traffic, qualified leads, and long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         6-STEP PROCESS
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#f4fafd]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              How We Approach SEO: Our 6-Step Process
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Every SEO project begins with a clear understanding of your business, competitors, and current search performance. We analyse your website, identify gaps, and study industry trends to build a strategy tailored to your market, opportunities, and long-term growth goals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-gray-150 border-t border-b border-gray-150">
            {processes.map((proc, i) => (
              <div
                key={i}
                className="group py-8 sm:py-10 grid sm:grid-cols-12 gap-4 sm:gap-8 items-start transition-colors duration-300 hover:bg-[#E6F7FD]/15 px-6 rounded-2xl"
              >
                {/* Step Number */}
                <div className="sm:col-span-2 flex items-center">
                  <span className="text-4xl sm:text-5xl font-black text-slate-300 group-hover:text-[#00B9FF] transition-colors duration-300 tracking-tight">
                    {proc.num}
                  </span>
                </div>
                {/* Content */}
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-950 group-hover:translate-x-1 transition-transform duration-300">
                    {proc.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         THE TOOLS BEHIND OUR SEO WORK
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Technology Stack</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              The Tools Behind Our SEO Work
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our SEO strategies are supported by industry-leading tools that provide accurate data, technical insights, and performance tracking. These platforms help us analyse websites, identify ranking opportunities, and optimise search performance effectively.
            </p>
          </div>

          <div className="space-y-12">

            <div className="space-y-8 overflow-hidden relative border-b border-gray-100 pb-12">
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>

              {/* Edge Gradient Fades */}
              <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Row 1: SEO & Auditing */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">SEO & Auditing</h3>
                </div>
                <div className="relative flex overflow-x-hidden w-full py-5 border-y border-gray-100 bg-slate-50/50">
                  <div className="flex gap-20 shrink-0 animate-marquee min-w-full items-center justify-around">
                    {[...seoToolsData, ...seoToolsData, ...seoToolsData].map((tool, idx) => (
                      <div key={idx} className="hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100 px-6 shrink-0 flex items-center justify-center">
                        {tool.element}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Analytics & Performance */}
              <div className="space-y-4 pt-4">
                <div className="text-center">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Analytics & Performance</h3>
                </div>
                <div className="relative flex overflow-x-hidden w-full py-5 border-y border-gray-100 bg-slate-50/50">
                  <div className="flex gap-20 shrink-0 animate-marquee min-w-full items-center justify-around" style={{ animationDirection: 'reverse' }}>
                    {[...analyticsToolsData, ...analyticsToolsData, ...analyticsToolsData].map((tool, idx) => (
                      <div key={idx} className="hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100 px-6 shrink-0 flex items-center justify-center">
                        {tool.element}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f4fafd] rounded-2xl p-8 border border-gray-100">
                <h4 className="text-base font-bold text-gray-900 mb-4">Content Research & Optimisation</h4>
                <div className="text-gray-700 font-semibold space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B9FF]" />
                    <span>Surfer SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B9FF]" />
                    <span>Clearscope</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B9FF]" />
                    <span>BuzzSumo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B9FF]" />
                    <span>AnswerThePublic</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#f4fafd] rounded-2xl p-8 border border-gray-100">
                <h4 className="text-base font-bold text-gray-900 mb-4">Technical Monitoring</h4>
                <div className="text-gray-700 font-semibold space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B9FF]" />
                    <span>Google Search Console</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B9FF]" />
                    <span>Screaming Frog Crawlers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B9FF]" />
                    <span>Ahrefs Site Audit Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         INDUSTRIES WE SERVE
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#f4fafd]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Expertise Areas</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              Industries We've Grown Through SEO
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our team has run SEO campaigns across sectors with very different search dynamics, from high-competition SaaS markets to local service businesses competing for a handful of high-value keywords. That breadth of experience means we understand what it takes to rank in your specific space, not just in general.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            
            {/* Left Column: Industry List */}
            <div className="lg:col-span-5 space-y-2 border-l border-slate-200 pl-4 lg:pl-6 w-full">
              {industries.map((ind, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustry(idx)}
                  onMouseEnter={() => setActiveIndustry(idx)}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 relative ${
                    activeIndustry === idx
                      ? 'bg-white text-gray-950 font-bold border-l-4 border-[#00B9FF] -ml-5 pl-6 shadow-[0_8px_30px_rgba(0,185,255,0.08)]'
                      : 'text-gray-500 hover:text-gray-950 hover:bg-white/50'
                  }`}
                >
                  <span className="text-sm font-black opacity-40">{`0${idx + 1}`}</span>
                  <span className="text-base sm:text-lg">{ind.name}</span>
                </button>
              ))}
            </div>

            {/* Right Column: Dynamic Preview Card */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[350px] relative overflow-hidden w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#E6F7FD]/30 opacity-60 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 space-y-6 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#E6F7FD] flex items-center justify-center text-[#00B9FF] shadow-[0_8px_20px_rgba(0,185,255,0.1)]">
                      {industries[activeIndustry].icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                        {industries[activeIndustry].name}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        Our SEO strategy for {industries[activeIndustry].name} focuses on {industries[activeIndustry].desc}. We target specific search intent, optimize crawl configurations, and build high-quality links to establish maximum domain authority.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-100 pt-6 mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">SEO Focus Area</div>
                      <div className="text-sm font-semibold text-gray-800 mt-1">High-Intent Traffic</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Avg. Time-To-Rank</div>
                      <div className="text-sm font-semibold text-[#00B9FF] mt-1">90 - 120 Days</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         RESULTS DELIVERED
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Case Studies & Metrics</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              SEO Results Our Clients Achieve
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our SEO strategies deliver measurable improvements in traffic, rankings, and revenue across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <AnimatedBackground
              className="rounded-2xl bg-[#E6F7FD] border border-[#00B9FF]/20"
              transition={{
                type: 'spring',
                bounce: 0.15,
                duration: 0.5,
              }}
              enableHover
            >
              <div
                data-id="result-1"
                className="bg-[#f4fafd] hover:bg-transparent p-8 rounded-2xl border border-gray-100 space-y-2 transition-colors duration-300 w-full flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-[#00B9FF]">17K+</div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">Monthly Organic Traffic</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-2">
                    Increased organic search traffic to 17,000+ monthly visitors within the targeted campaign timeline.
                  </p>
                </div>
              </div>

              <div
                data-id="result-2"
                className="bg-[#f4fafd] hover:bg-transparent p-8 rounded-2xl border border-gray-100 space-y-2 transition-colors duration-300 w-full flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-[#00B9FF]">#1</div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">Rankings for High-Intent Keywords</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-2">
                    Moved several competitive keywords from page 3–10 positions to #1 on Google, significantly improving search visibility.
                  </p>
                </div>
              </div>

              <div
                data-id="result-3"
                className="bg-[#f4fafd] hover:bg-transparent p-8 rounded-2xl border border-gray-100 space-y-2 transition-colors duration-300 w-full flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-[#00B9FF]">100%</div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">Growth in Organic Traffic</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-2">
                    Delivered 100% increase in organic sessions and users within six months of implementing a structured SEO strategy.
                  </p>
                </div>
              </div>

              <div
                data-id="result-4"
                className="bg-[#f4fafd] hover:bg-transparent p-8 rounded-2xl border border-gray-100 space-y-2 transition-colors duration-300 w-full flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-[#00B9FF]">200%</div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">Increase in Online Sales</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-2">
                    Improved search rankings and targeted optimisation resulted in 200% growth in ecommerce revenue.
                  </p>
                </div>
              </div>
            </AnimatedBackground>

            <div className="md:col-span-2 bg-gray-950 text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border border-white/5">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Stronger Brand & Search Visibility</h3>
                <p className="text-gray-400 max-w-xl text-sm md:text-base">
                  Our comprehensive approach ensures brand authority grows alongside keyword ranks.
                </p>
              </div>
              <div className="w-full md:w-auto shrink-0 space-y-3 font-semibold text-base">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00B9FF]" />
                  <span>80% increase in first-page keyword rankings</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00B9FF]" />
                  <span>35% growth in branded search traffic</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00B9FF]" />
                  <span>90% increase in overall website visitors</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         WHY CHOOSE US & GUARANTEE
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#f4fafd]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Our Difference</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              Why Businesses Choose Webnox Digital for SEO
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              There's no shortage of SEO agencies. What's rare is an agency that combines genuine technical depth with content expertise, transparent reporting and a track record that goes back 14+ years. Here's what we bring that others don't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-10 h-10 text-[#00B9FF] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk-Free Engagement</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We operate on a simple principle: if you're not seeing results, you shouldn't be locked in. Our risk-free model means you can cancel anytime, and we back our work with a 100% money-back guarantee. That's not a marketing line, it's how we're held accountable.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <BarChart3 className="w-10 h-10 text-[#00B9FF] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Vanity Metrics</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We don't report on rankings that don't make you money. Every metric in our monthly reports connects back to business outcomes, organic revenue, qualified lead volume, and cost-per-acquisition from organic search. Rankings are a means to an end, not the end itself.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <Search className="w-10 h-10 text-[#00B9FF] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full Transparency</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  You'll always know what we're doing and why. Every tactic in your campaign is documented, explained and linked to a specific goal. No black boxes, no mystery 'proprietary methods', just a clear strategy you can follow and build on.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <Users className="w-10 h-10 text-[#00B9FF] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% In-House Team</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Your SEO work isn't outsourced to a third party or handed to a junior. Our 70+ specialists, technical SEOs, content strategists, link builders, and analysts work under one roof, which means faster execution, better communication and consistent quality.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between lg:col-span-2">
              <div>
                <Award className="w-10 h-10 text-[#00B9FF] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">15 Awards and Counting</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We've been recognised across 15+ industry awards for digital marketing excellence. Those aren't participation trophies; they're external validation of the quality standards we hold ourselves to on every client engagement.
                </p>
              </div>
            </div>

          </div>

          {/* Guarantee banner */}
          <div className="bg-[#E6F7FD] border-2 border-[#00B9FF]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-3">Our Risk-Free Guarantee</h3>
            <p className="text-lg md:text-xl font-bold text-[#00B9FF] mb-4">Cancel anytime. 100% money back. No long-term contracts.</p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We believe in earning your business every month — not locking you into a contract and hoping for the best. If we're not delivering, you shouldn't be paying. It's that simple.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         GET FREE AUDIT BANNER
         ───────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 bg-gray-950 text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Get Your Free SEO Audit, No Strings Attached
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We'll analyse your site's technical health, keyword gaps and ranking opportunities. You'll receive a prioritised report you can act on immediately whether you work with us or not.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact-us">
              <button className="bg-[#00B9FF] hover:bg-[#0097d4] text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-colors cursor-pointer">
                Book Your Free SEO Audit →
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="border-2 border-white/20 hover:border-[#00B9FF] hover:text-[#00B9FF] font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-colors cursor-pointer">
                Talk to an SEO Expert →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         WHAT TO EXPECT (TIMELINE)
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Project Timeline</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              What to Expect When You Work With Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              SEO takes time; anyone telling you otherwise isn't being straight with you. What changes quickly is the clarity you'll have about where you stand and what's being done about it. Here's a realistic picture of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative bg-[#f4fafd] p-6 md:p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold text-[#00B9FF] mb-2 uppercase tracking-wide">{item.months}</div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">{item.phase}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         SPECIALIST SERVICES SILO
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#f4fafd]">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Dedicated Squads</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
                Specialist SEO Services Within This Silo
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our SEO offering goes well beyond general optimisation. Depending on your specific needs, we operate dedicated teams for specialised campaigns.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl grid sm:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#00B9FF] shrink-0" />
                  Technical SEO
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">deep-dive audits, Core Web Vitals remediation, structured data, crawl budget management</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#00B9FF] shrink-0" />
                  Local SEO
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">Google Business Profile, local pack optimisation, citation audits, geo-targeted content</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#00B9FF] shrink-0" />
                  E-Commerce SEO
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">Shopify, WooCommerce, Magento - full-stack store optimisation</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#00B9FF] shrink-0" />
                  International SEO
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">hreflang, geo-targeting, multi-region strategy for UK, US, UAE, Australia, Canada and beyond</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#00B9FF] shrink-0" />
                  Content Marketing
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">SEO-driven content strategy, pillar pages, cluster content, blog management</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#00B9FF] shrink-0" />
                  SEO Audits
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">one-time comprehensive technical and content audits with prioritised action plans</p>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <h3 className="font-extrabold text-gray-900 text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#00B9FF] shrink-0" />
                  Conversion Rate Optimisation
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">turning existing organic traffic into more leads and sales</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
         BOTTOM HERO / CTA
         ───────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-t from-[#E6F7FD] to-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Start Scaling Today</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
            Ready to Grow Your Organic Traffic?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            1,200+ clients. 40+ countries. 14+ years. Let's talk about what SEO can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact-us">
              <button className="bg-[#00B9FF] hover:bg-[#0097d4] text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-colors cursor-pointer">
                Get a Free SEO Audit →
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="border-2 border-gray-300 hover:border-[#00B9FF] text-gray-700 hover:text-white hover:bg-[#00B9FF] font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-colors cursor-pointer">
                Speak to an Expert Today →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         FAQs SECTION
         ───────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#00B9FF] text-xs font-bold uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              Frequently Asked Questions About Our SEO Services
            </h2>
          </div>

          <div className="space-y-2 divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
