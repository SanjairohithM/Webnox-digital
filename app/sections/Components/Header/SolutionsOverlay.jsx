import React from "react";
import Image from "next/image";

const solutions = [
  { title: "IT Consulting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_1.webp" },
  { title: "AI Automation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_2.webp" },
  { title: "Data Analytics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_3.webp" },
  { title: "Next gen marketing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_4.webp" },
  { title: "Emerging Tech", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_5.webp" },
  { title: "Out Sourcing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_7.webp" },
  { title: "NBN workflow", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_1.webp" },
  { title: "customer experience", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.", image: "/images/fi_2.webp" },
];

export default function SolutionsOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-5xl w-full mx-4 relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-gray-700" onClick={onClose}>&times;</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {solutions.map((solution, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image src={solution.image} alt={solution.title} width={48} height={48} className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{solution.title}</h3>
              <p className="text-gray-500 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 