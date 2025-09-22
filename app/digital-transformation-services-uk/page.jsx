"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Cloud, 
  Database, 
  Briefcase, 
  Bot, 
  RefreshCw,
  MapPin,
  Building2,
  Factory,
  Laptop,
  BarChart3,
  Hospital,
  Plane,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Lock,
  Code,
  Network,
  Cpu,
  Binary
} from "lucide-react";
import Footer from "../sections/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);
}

// Advanced Hero Section with 3D Digital Elements
const DigitalTransformationHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const digitalElementsRef = useRef([]);
  const orbsRef = useRef([]);

  useGSAP(() => {

    // Main title with 3D entrance
    gsap.fromTo(titleRef.current,
      { 
        y: 150, 
        opacity: 0,
        rotationX: 90,
        transformPerspective: 1000,
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 2, 
        ease: "power3.out",
        delay: 0.5
      }
    );

    gsap.fromTo(subtitleRef.current,
      { y: 80, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, delay: 1, ease: "power3.out" }
    );

  }, { scope: heroRef });

  const digitalElements = [
    { icon: Code, position: { top: "20%", left: "10%" } },
    { icon: Network, position: { top: "30%", right: "15%" } },
    { icon: Cpu, position: { top: "60%", left: "8%" } },
    { icon: Binary, position: { top: "15%", right: "25%" } },
    { icon: Database, position: { top: "70%", right: "10%" } },
    { icon: Cloud, position: { top: "45%", left: "15%" } },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen mt-20 overflow-hidden flex items-center">
      {/* Animated Background Orbs */}
      {/* {[...Array(8)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (orbsRef.current[index] = el)}
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))} */}

      {/* Static Digital Elements */}
      {digitalElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div
            key={index}
            className="absolute text-blue-300/30"
            style={element.position}
          >
            <IconComponent size={40} />
          </div>
        );
      })}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-4xl lg:text-7xl font-bold mb-8 text-dark leading-tight"
            style={{ transformStyle: "preserve-3d" }}
          >
            Digital Transformation
            <br />
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">
              Services in the UK
            </span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-dark mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Empowering British enterprises to modernise, innovate, and compete globally with 
            cutting-edge digital solutions tailored for the UK market
          </p>
        </div>
      </div>
    </section>
  );
};

// Professional Features Section
const Floating3DFeaturesSection = () => {
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);
  const backgroundRef = useRef(null);

  useGSAP(() => {
    // Background parallax
    gsap.to(backgroundRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Feature items animation
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(feature,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: feature,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, { scope: sectionRef });

  const features = [
    {
      icon: Shield,
      title: "UK Compliance Ready",
      description: "GDPR, FCA, and ISO-certified solutions built for British regulatory standards",
    },
    {
      icon: TrendingUp,
      title: "Enterprise Scale", 
      description: "Cloud-native architectures designed for growing UK enterprises",
    },
    {
      icon: Target,
      title: "Industry Expertise",
      description: "Specialists in finance, healthcare, e-commerce, and public sector",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className="flex flex-col items-start border border-[#00B9FF] rounded-3xl p-4"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00B9FF] to-[#0097D9] flex items-center justify-center mb-6">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Professional Advantage Section
const CleanAdvantageSection = () => {
  const sectionRef = useRef(null);
  const advantageRefs = useRef([]);

  useGSAP(() => {
    // Advantage items animation
    advantageRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, { scope: sectionRef });

  const advantages = [
    {
      icon: Globe,
      title: "UK Industry Expertise", 
      description: "Deep knowledge of finance, healthcare, e-commerce, and public sector requirements",
    },
    {
      icon: Lock,
      title: "Compliance-Driven",
      description: "GDPR, FCA, and ISO-certified digital solutions for regulatory confidence",
    },
    {
      icon: TrendingUp,
      title: "Enterprise Scalability",
      description: "Cloud-native architectures that grow with your UK business",
    },
    {
      icon: Zap,
      title: "Proven Methodologies",
      description: "Agile delivery, design thinking, and data-led strategy approach",
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description: "Successful case studies from UK corporates and SMEs nationwide",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">
              UK Solutions?
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (advantageRefs.current[index] = el)}
                  className="flex flex-col items-start"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-xl flex items-center justify-center mb-5">
                    <IconComponent size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Dynamic Services Showcase
const DynamicServicesSection = () => {
  const sectionRef = useRef(null);
  const serviceCardsRef = useRef([]);

  useGSAP(() => {
    serviceCardsRef.current.forEach((card, index) => {
      if (card) {
        // Parallax effect based on index
        gsap.to(card, {
          y: -100 + (index * 20),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Fade in animation
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 150,
            scale: 0.8,
            rotationX: 45,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, { scope: sectionRef });

  const services = [
    {
      icon: RefreshCw,
      title: "IT & Legacy System Modernisation",
      description: "Replace outdated systems with agile, scalable platforms that drive efficiency and innovation",
      features: ["System Assessment", "Migration Planning", "Zero Downtime Deployment"],
      gradient: "from-[#00B9FF] to-[#0097D9]",
    },
    {
      icon: Cloud,
      title: "Cloud Enablement", 
      description: "Scalable solutions on AWS, Azure, or UK-based providers for optimal performance and compliance",
      features: ["Cloud Strategy", "Multi-Cloud Setup", "Cost Optimization"],
      gradient: "from-[#0097D9] to-[#007AC3]",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Real-time reporting, data compliance, and actionable insights for informed decision-making",
      features: ["Data Pipeline", "Real-time Analytics", "GDPR Compliance"],
      gradient: "from-[#007AC3] to-[#00B9FF]",
    },
    {
      icon: Briefcase,
      title: "Digital Workplace Solutions",
      description: "Empower hybrid teams with advanced collaboration tools and seamless workflows",
      features: ["Collaboration Tools", "Workflow Automation", "Remote Integration"],
      gradient: "from-[#00B9FF] to-[#0097D9]",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent process automation for enhanced efficiency and competitive advantage",
      features: ["Process Automation", "AI Integration", "Smart Analytics"],
      gradient: "from-[#0097D9] to-[#007AC3]",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Our UK Digital{" "}
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">
              Transformation Solutions
            </span>
          </h2>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div
                key={index}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  isReversed ? "lg:flex-row-reverse " : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="lg:w-1/2">
                  <div className={`w-40 h-40 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-2xl`}>
                    <IconComponent size={60} className="text-white" />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-[#00B9FF]/10 text-[#0097D9] px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Professional UK Coverage Section
const CleanUKCoverageSection = () => {
  const sectionRef = useRef(null);
  const cityRefs = useRef([]);

  useGSAP(() => {
    cityRefs.current.forEach((city, index) => {
      if (city) {
        gsap.fromTo(city,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, { scope: sectionRef });

  const ukCities = [
    { name: "London", icon: Building2, description: "Financial hubs and fintech innovation" },
    { name: "Birmingham", icon: Factory, description: "Manufacturing and industrial automation" },
    { name: "Manchester", icon: Laptop, description: "Tech startups and digital agencies" },
    { name: "Leeds", icon: BarChart3, description: "Professional services and consultancy" },
    { name: "Edinburgh", icon: Hospital, description: "Healthcare and life sciences" },
    { name: "Bristol", icon: Plane, description: "Aerospace and engineering solutions" },
    { name: "Newcastle", icon: Cpu, description: "Energy and renewable tech" },
    { name: "Cardiff", icon: Globe, description: "Media and creative industries" },
    { name: "Liverpool", icon: Network, description: "Maritime and logistics tech" },
    { name: "Glasgow", icon: Code, description: "Software development hubs" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serving Enterprises{" "}
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">
              Across the UK
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From financial hubs in London to tech startups in Manchester, we partner with 
            businesses nationwide to drive digital transformation success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {ukCities.map((city, index) => {
              const IconComponent = city.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cityRefs.current[index] = el)}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-xl flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-gray-600 text-sm">{city.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Magnetic CTA Section
const MagneticCTASection = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const sparklesRef = useRef([]);

  useGSAP(() => {
    const button = buttonRef.current;

    if (button) {
      // Floating animation
      gsap.to(button, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Sparkles animation
      sparklesRef.current.forEach((sparkle, index) => {
        if (sparkle) {
          gsap.to(sparkle, {
            rotation: 360,
            scale: 1.5,
            duration: 4 + index,
            repeat: -1,
            ease: "power2.inOut",
            yoyo: true,
          });
        }
      });

      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.1,
          boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Sparkle elements */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (sparklesRef.current[index] = el)}
          className="absolute text-cyan-400 opacity-30"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
          }}
        >
          <Sparkles size={24} />
        </div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Accelerate Your{" "}
          <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">
            UK Digital Transformation
          </span>
        </h2>
        <p className="text-xl text-blue-200 mb-16 max-w-4xl mx-auto leading-relaxed">
          Ready to modernise your enterprise and compete globally? Let's discuss your 
          digital transformation strategy and unlock your business potential.
        </p>
        <Link
          href="/contact"
          ref={buttonRef}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] text-white px-12 py-6 rounded-full text-xl font-semibold hover:from-[#0097D9] hover:to-[#007AC3] transition-all duration-300 shadow-2xl"
        >
          Request a Free Strategy Call
          <ArrowRight size={24} />
        </Link>
      </div>
    </section>
  );
};

export default function DigitalTransformationUKPage() {
  return (
    <main className="overflow-hidden">
      <DigitalTransformationHero />
      <Floating3DFeaturesSection />
      <CleanAdvantageSection />
      <DynamicServicesSection />
      <CleanUKCoverageSection />
      <MagneticCTASection />
      <Footer />
    </main>
  );
}
