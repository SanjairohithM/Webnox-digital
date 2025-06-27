"use client";
import { useState, useEffect } from "react";
import Camera from "@/Three/Camera";
import CanvasWrapper from "@/Three/CanvasWrapper";
import Box from "@/Three/Models/Box";
import Ground from "@/Three/Models/ground";
import { BoxRotationScene } from "@/Three/Scenes";
import { CarIdelScene } from "@/Three/Scenes/Car";
import Hero from "./sections/Hero";
import { ViewCanvas } from "@/Three/ViewCanvas";
import Mission from "./sections/Mission";
import Progress from "./sections/Progress";
import OurSolutions from "./sections/OurSolutions";
import NextGen from "./sections/NextGen";
import LetsConnect from "./sections/LetsConnect";
import WebnoxLogoLoader from "./sections/WebnoxLogoIntro";
import AnimatedNavbar from "./sections/Components/Header/AnimatedNavbar";
// import Footer from "./sections/Footer"; 

  
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <div className="w-full relative overflow-x-hidden">
      {/* Loader - shows only once when page loads */}
      {isLoading && <WebnoxLogoLoader onComplete={handleLoaderComplete} />}
      
      {/* Main content - shows after loader completes */}
      {showContent && (
        <>
          <ViewCanvas />
          {/* Add the AnimatedNavbar here */}
          <AnimatedNavbar />
          {/* <CanvasWrapper> */}
          {/* <BoxRotationScene /> */}
          {/* <CarIdelScene /> */}
          {/* <Ground /> */}
          {/* </CanvasWrapper> */}
          
          <Hero />
          <Mission/>
          {/* <OurSolutions/> */}
          <NextGen/>
          <LetsConnect/>
          {/* <Footer/> */}
        </>
      )}
    </div>
  );
}
