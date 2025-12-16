"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceCard from "../components/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "DIGITAL TRANSFORMATION USA",
        description: "Drive American innovation with next-generation digital solutions. We empower US businesses to modernize, automate, and scale through cutting-edge technology and AI-powered systems.",
        image: "/images/Software Development.webp",
        href: "/digital-transformation-services-usa"
    },
    {
        title: "BRANDING USA",
        description: "Create a brand that dominates the American market. From Silicon Valley startups to Fortune 500 companies, we build powerful brand identities that resonate with US audiences.",
        image: "/images/BRANDING.webp",
        href: "/branding-services-usa"
    },
    {
        title: "3D WEBSITE USA",
        description: "Wow American customers with immersive 3D web experiences. We craft interactive, cutting-edge websites that position your US business as an industry leader.",
        image: "/images/3dimagesolution.webp",
        href: "/3d-website-development-usa"
    },
    {
        title: "ENTERPRISE WEB SOLUTION USA",
        description: "Enterprise-grade web platforms built for American scale. We deliver robust, secure, and high-performance solutions that power growth across the United States and globally.",
        image: "/images/Web Development.webp",
        href: "/enterprise-web-solutions-usa"
    }
];

function USAServices() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(() => {
        // Title animation
        gsap.fromTo(titleRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top bottom-=100",
                    end: "bottom top+=100",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Subtitle animation
        gsap.fromTo(subtitleRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: subtitleRef.current,
                    start: "top bottom-=100",
                    end: "bottom top+=100",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Cards container stagger animation
        gsap.fromTo(cardsRef.current.children,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full min-h-screen bg-gradient-to-br from-[#e0f8ff] via-[#f0f9ff] to-[#e8e0ff] py-20 md:py-32 relative overflow-hidden"
        >
            {/* Animated background circles for mobile */}
            <div className="absolute top-10 left-5 w-32 h-32 bg-[#2ACBEC]/10 rounded-full blur-3xl animate-pulse md:hidden"></div>
            <div className="absolute bottom-20 right-5 w-40 h-40 bg-[#6149CD]/10 rounded-full blur-3xl animate-pulse md:hidden" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-12 md:mb-20">
                    <div ref={titleRef} className="mb-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[600] bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent tracking-wide mb-4">
                            USA SERVICES
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] mx-auto rounded-full"></div>
                    </div>

                    <div ref={subtitleRef}>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-4">
                            Driving Innovation for American Businesses Coast to Coast
                        </p>
                        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            From Silicon Valley to New York, we provide cutting-edge software development, AI solutions, and digital transformation services designed for the US market.
                        </p>
                    </div>
                </div>

                {/* Services Grid using new Component */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-6 max-w-[1600px] mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 md:mt-24 text-center">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/40 max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
                            Ready to Scale Your Business?
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-6">
                            Let's explore how we can accelerate your American business growth with innovative digital solutions.
                        </p>
                        <a
                            href="https://cal.com/webnox-digital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Schedule a Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default USAServices;
