# Industries Bento Grid - Saved Layout

This file contains the complete bento grid layout for the Industries section. This design features a complex, visually rich grid with various card sizes and styles.

## Complete Component Code

```jsx
// 6. Industries: Reference-Based Bento Grid
const Industries = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".bento-card", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industries We Support
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Driving measurable growth across key UK sectors with tailored
            digital solutions.
          </p>
        </div>

        {/* 4x3 Grid Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[900px]">
          {/* 1. Finance & FinTech - Cyan */}
          <div className="bento-card bg-cyan-500 rounded-[40px] p-8 flex items-center justify-center relative overflow-hidden group shadow-xl shadow-cyan-500/10">
            <div className="relative z-10 text-slate-900 flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-white/30 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/40">
                <Hand
                  size={48}
                  className="text-slate-900 rotate-12 group-hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <span className="text-xl font-bold">Finance</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
          </div>

          {/* 2. Retail - Blue */}
          <div className="bento-card bg-blue-600 rounded-[40px] p-8 flex flex-col justify-between items-start group shadow-xl shadow-blue-600/10">
            <div className="w-full">
              <div className="bg-white/20 rounded-full py-3 px-6 inline-flex items-center gap-2 border border-white/30 backdrop-blur-sm">
                <span className="text-white font-bold">Scale Up</span>
                <ArrowRight size={18} className="text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-white leading-none">
              Retail &<br />
              E-commerce
            </h3>
          </div>

          {/* 3. Healthcare & Public - Soft Blue Glass (2x2) */}
          <div className="bento-card md:col-span-2 md:row-span-2 bg-blue-50/80 backdrop-blur-md rounded-[40px] p-10 flex flex-col justify-between relative overflow-hidden border border-blue-100 shadow-xl shadow-blue-500/5">
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex-1 bg-white rounded-[30px] p-6 flex flex-col items-center gap-3 text-center border-b-8 border-blue-200 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden relative border-2 border-white shadow-md">
                    <Image
                      src={`/images/cons${i + 3}.png`}
                      alt="Person"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg text-nowrap">
                      Sector Lead
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      Healthcare Div
                    </p>
                  </div>
                  <button className="mt-2 bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition-colors">
                    Contact now
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-4xl font-black text-slate-900 mb-4">
                Healthcare & Public Sector
              </h3>
              <p className="text-slate-600 text-lg max-w-md font-medium">
                Modernising critical infrastructure for nationwide service
                delivery.
              </p>
            </div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl opacity-50" />
          </div>

          {/* 4. Security & Legal - Slate Blue */}
          <div className="bento-card bg-slate-900 rounded-[40px] p-8 flex flex-col justify-center gap-6 group shadow-2xl">
            <div className="grid grid-cols-3 gap-4">
              {[Search, Heart, Package, Users, MessageSquare, MapPin].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon size={24} />
                  </div>
                )
              )}
            </div>
            <h3 className="text-2xl font-bold text-white text-center">
              Security & Compliance
            </h3>
          </div>

          {/* 5. Strategy & Tech - Light Blue */}
          <div className="bento-card bg-blue-100 rounded-[40px] p-8 flex flex-col justify-center items-center relative group shadow-xl shadow-blue-500/5 border border-blue-200">
            <div className="relative w-40 h-40 transform group-hover:scale-110 transition-transform duration-700">
              <div className="absolute inset-0 bg-white/50 rounded-3xl rotate-6" />
              <div className="relative z-10 w-full h-full bg-[#fdfcf8] rounded-3xl p-6 shadow-xl flex flex-col justify-between border border-white">
                <div className="flex justify-between items-start">
                  <div className="w-4 h-4 rounded-full bg-blue-400" />
                  <div className="w-4 h-4 rounded-full bg-blue-400" />
                </div>
                <div className="text-5xl font-black text-blue-600 text-center">
                  27
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg rotate-12">
                <PenTool size={32} className="text-white" />
              </div>
            </div>
            <span className="mt-6 text-2xl font-black text-blue-900">
              Strategy & Tech
            </span>
          </div>

          {/* 6. Manufacturing - Deep Royal Blue */}
          <div className="bento-card bg-blue-700 rounded-[40px] p-10 flex flex-col justify-center relative overflow-hidden group shadow-xl shadow-blue-700/20">
            <div className="relative z-10 text-center md:text-left">
              <div className="text-6xl md:text-7xl font-black text-white mb-2">
                $171
              </div>
              <div className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full inline-flex items-center gap-2 font-black text-lg mb-6 shadow-xl border border-white/30">
                <Factory size={24} />
                Manufacturing
              </div>
              <p className="text-blue-100 text-sm font-medium">
                Digital supply chain and automated production efficiency.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-white/5 mask-diagonal opacity-10" />
          </div>

          {/* 7. Services - Cyan variant */}
          <div className="bento-card bg-cyan-600 rounded-[40px] p-8 flex flex-col justify-center gap-4 shadow-xl shadow-cyan-600/20">
            {[
              { icon: Truck, name: "Logistics", count: 13 },
              { icon: Leaf, name: "Garden Tech", count: 8 },
              { icon: ChefHat, name: "Hospitality", count: 24 },
              { icon: Hammer, name: "Real Estate", count: 16 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-full py-3 px-6 flex justify-between items-center group cursor-pointer hover:bg-white/20 transition-colors border border-white/10"
              >
                <div className="flex items-center gap-3 text-white">
                  <item.icon size={20} />
                  <span className="font-bold text-lg">{item.name}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-cyan-600 flex items-center justify-center font-black shadow-lg">
                  {item.count}
                </div>
              </div>
            ))}
          </div>

          {/* 8. Tech & SaaS - White Glass */}
          <div className="bento-card md:col-span-2 bg-white/40 backdrop-blur-md rounded-[40px] p-12 flex flex-col justify-center relative overflow-hidden group border border-white/40 shadow-xl shadow-blue-500/5">
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                Future Proof
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[0.9] mb-6">
                CRAFTED ANSWERS
                <br />
                FOR YOUR TECHNOLOGY
              </h3>
              <Link
                href="/contact-us"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Learn more
              </Link>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all group text-lg"
          >
            Explore All Industry Transformations
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
```

## Required Imports

```jsx
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Hand,
  Search,
  Heart,
  Package,
  Users,
  MessageSquare,
  MapPin,
  PenTool,
  Truck,
  Leaf,
  ChefHat,
  Hammer,
  Factory,
  ArrowRight,
} from "lucide-react";
```

## Design Features

- **Complex Grid Layout**: 4-column grid with varying card sizes (1x1, 2x2, 2x1)
- **Rich Visual Elements**: Glassmorphism, gradients, shadows, blur effects
- **Interactive Animations**: GSAP scroll-triggered stagger animations, hover effects
- **Color Palette**: Cyan, Blue (various shades), Slate
- **Card Types**:
  1. Finance - Icon-centered with glow
  2. Retail - Badge with text
  3. Healthcare - Large card with team profiles
  4. Security - Icon grid
  5. Strategy - Card mockup illustration
  6. Manufacturing - Large stat display
  7. Services - List with counts
  8. Tech/SaaS - CTA card with large text

## Notes

- This layout was saved on 2026-01-08
- Original location: `/app/digital-transformation-services-uk/page.jsx`
- To restore: Copy the component code back into the file
- Ensure all required icons are imported from lucide-react
