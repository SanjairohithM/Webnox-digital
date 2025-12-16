"use client";
import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceCard from "../components/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "DIGITAL TRANSFORMATION UK",
        description: "Transform your UK business with cutting-edge digital solutions. We help British companies modernize operations, automate processes, and achieve sustainable growth through intelligent technology.",
        image: "/images/Software Development.webp",
        href: "/digital-transformation-services-uk"
    },
    {
        title: "BRANDING UK",
        description: "Build a powerful brand identity that resonates with the UK market. From London startups to nationwide enterprises, we create memorable brands that stand out in the British marketplace.",
        image: "/images/BRANDING.webp",
        href: "/branding-services-uk"
    },
    {
        title: "3D WEBSITE UK",
        description: "Captivate UK audiences with immersive 3D web experiences. We design and develop stunning interactive websites that set your British business apart from the competition.",
        image: "/images/3dimagesolution.webp",
        href: "/3d-website-development-uk"
    },
    {
        title: "ENTERPRISE WEB SOLUTION UK",
        description: "Scalable, secure, and high-performance web solutions for UK enterprises. We build robust platforms that support your business growth across the United Kingdom and beyond.",
        image: "/images/Web Development.webp",
        href: "/enterprise-web-solutions-uk"
    }
];

function UKServices() {
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
                            UK SERVICES
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] mx-auto rounded-full"></div>
                    </div>

                    <div ref={subtitleRef}>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-4">
                            Empowering UK Businesses with Cutting-Edge Digital Solutions
                        </p>
                        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            From London to Edinburgh, we deliver world-class software development, AI automation, and digital transformation services tailored for the UK market.
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
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-6">
                            Let's discuss how we can help your UK business thrive in the digital age.
                        </p>
                        <a
                            href="https://cal.com/webnox-digital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Book a Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UKServices;
