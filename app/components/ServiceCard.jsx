"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
    const cardRef = useRef(null);

    // Colors for different cards to make them colorful as requested
    const gradients = [
        "from-[#FF9A9E] to-[#FECFEF]", // Pinkish
        "from-[#a18cd1] to-[#fbc2eb]", // Purple/Pink
        "from-[#84fab0] to-[#8fd3f4]", // Teal/Blue
        "from-[#fccb90] to-[#d57eeb]", // Orange/Purple
    ];

    const gradient = gradients[index % gradients.length];
    const overlayGradient = gradients[(index + 1) % gradients.length];

    return (
        <div
            ref={cardRef}
            className={`relative group rounded-3xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${gradient} p-1 h-full`}
        >
            <div className="bg-white/90 backdrop-blur-md rounded-[22px] overflow-hidden h-full flex flex-col relative z-10">

                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-10`} />
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Categorical Icon/Badge could go here */}
                    <div className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-gray-800">
                        SERVICE
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow relative">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">
                        {service.title}
                    </h3>

                    {/* Initial teaser text (optional, or just title) */}
                    <div className="mb-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    </div>

                    {/* Content Always Visible */}
                    <div className="mb-4 flex-grow">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                        {/* Close button removed as content is always visible */}
                        <div className="flex-grow"></div>

                        <Link
                            href={service.href}
                            className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition-colors"
                            title="Go to page"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Blur */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 -z-10`} />
        </div>
    );
}
