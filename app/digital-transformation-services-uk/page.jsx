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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Icon and Visual Element */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-start">
                    <div className="relative">
                      {/* Main icon container */}
                      <div className="w-32 h-32 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-full flex items-center justify-center shadow-2xl">
                        <IconComponent size={48} className="text-white" />
                      </div>
                      
                      {/* Decorative rings */}
                      <div className="absolute -inset-4 border-2 border-[#00B9FF]/20 rounded-full"></div>
                      <div className="absolute -inset-8 border border-[#0097D9]/10 rounded-full"></div>
                      
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#00B9FF]/20 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-[#0097D9]/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="max-w-lg mx-auto lg:mx-0">
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {feature.description}
                      </p>
                      
                      {/* Feature highlight line */}
                      <div className="w-20 h-1 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] mx-auto lg:mx-0 rounded-full"></div>
                    </div>
                  </div>
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

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (advantageRefs.current[index] = el)}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00B9FF]/20 hover:-translate-y-2"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/5 to-[#0097D9]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon container with enhanced styling */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0097D9] transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#00B9FF] rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#0097D9] rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border border-[#007AC3] rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-[#00B9FF] rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Serving Enterprises{" "}
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">
              Across the UK
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From financial hubs in London to tech startups in Manchester, we partner with 
            businesses nationwide to drive digital transformation success.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Responsive Grid Layout */}
          <div className="relative">
            {/* Central Hub - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 xl:w-32 xl:h-32 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-full flex items-center justify-center shadow-2xl">
                <Globe size={32} className="text-white xl:w-10 xl:h-10" />
              </div>
              <div className="absolute -inset-3 xl:-inset-4 border-2 border-[#00B9FF]/30 rounded-full"></div>
            </div>

            {/* Mobile Layout: Simple Grid */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ukCities.map((city, index) => {
                  const IconComponent = city.icon;
                  return (
                    <div
                      key={index}
                      ref={(el) => (cityRefs.current[index] = el)}
                      className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#00B9FF] transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0097D9] transition-colors duration-300">
                            {city.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {city.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop Layout: Hexagonal Grid with Perfect Alignment */}
            <div className="hidden lg:block">
              <div className="relative min-h-[600px] xl:min-h-[500px]">
                {/* Perfectly Aligned Hexagonal Grid */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-8 xl:gap-12 w-full max-w-5xl">
                    {/* Row 1 */}
                    <div className="col-span-1 flex justify-center">
                      <CityHexagon city={ukCities[0]} index={0} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <CityHexagon city={ukCities[1]} index={1} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <CityHexagon city={ukCities[2]} index={2} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <CityHexagon city={ukCities[3]} index={3} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <CityHexagon city={ukCities[4]} index={4} cityRefs={cityRefs} />
                    </div>
                    
                    {/* Row 2 - Offset for hexagonal effect */}
                    <div className="col-span-1 flex justify-center mt-8 xl:mt-12">
                      <CityHexagon city={ukCities[5]} index={5} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center mt-8 xl:mt-12">
                      <CityHexagon city={ukCities[6]} index={6} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center mt-8 xl:mt-12">
                      <CityHexagon city={ukCities[7]} index={7} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center mt-8 xl:mt-12">
                      <CityHexagon city={ukCities[8]} index={8} cityRefs={cityRefs} />
                    </div>
                    <div className="col-span-1 flex justify-center mt-8 xl:mt-12">
                      <CityHexagon city={ukCities[9]} index={9} cityRefs={cityRefs} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics Bar - Responsive */}
          <div className="mt-16 md:mt-20 lg:mt-24 bg-gradient-to-r from-[#00B9FF]/10 via-[#0097D9]/10 to-[#007AC3]/10 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-[#00B9FF]">10+</div>
                <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">Cities Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-[#0097D9]">500+</div>
                <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-[#007AC3]">98%</div>
                <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for hexagonal city items
const CityHexagon = ({ city, index, cityRefs }) => {
  const IconComponent = city.icon;
  
  return (
    <div
      ref={(el) => (cityRefs.current[index] = el)}
      className="relative group"
    >
      {/* Hexagonal Container */}
      <div className="relative w-32 h-32 xl:w-40 xl:h-40">
        {/* Hexagon Shape */}
        <div className="absolute inset-0 bg-white border-2 border-gray-200 transform rotate-45 group-hover:border-[#00B9FF] transition-colors duration-300 shadow-lg group-hover:shadow-xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-45 p-4 xl:p-6">
            {/* Icon */}
            <div className="w-8 h-8 xl:w-12 xl:h-12 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-xl flex items-center justify-center mb-2 xl:mb-3 group-hover:scale-110 transition-transform duration-300">
              <IconComponent size={16} className="text-white xl:w-5 xl:h-5" />
            </div>
            
            {/* City Name */}
            <h3 className="text-sm xl:text-lg font-bold text-gray-900 mb-1 xl:mb-2 group-hover:text-[#0097D9] transition-colors duration-300 text-center leading-tight">
              {city.name}
            </h3>
            
            {/* Description */}
            <p className="text-xs xl:text-sm text-gray-600 text-center leading-tight group-hover:text-gray-700 transition-colors duration-300">
              {city.description}
            </p>
          </div>
        </div>
        
        {/* Connection Line to Center - Only on desktop */}
        <div className="absolute top-1/2 left-1/2 w-px h-16 xl:h-20 bg-gradient-to-b from-[#00B9FF]/30 to-transparent transform -translate-x-1/2 -translate-y-full origin-bottom"></div>
        
        {/* Corner Accents */}
        <div className="absolute -top-1 -right-1 xl:-top-2 xl:-right-2 w-3 h-3 xl:w-4 xl:h-4 bg-[#00B9FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-1 -left-1 xl:-bottom-2 xl:-left-2 w-2 h-2 xl:w-3 xl:h-3 bg-[#0097D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
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