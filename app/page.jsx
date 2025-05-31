"use client";
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
import Footer from "./sections/Footer";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <ViewCanvas />
      {/* <CanvasWrapper> */}
      {/* <BoxRotationScene /> */}
      {/* <CarIdelScene /> */}
      {/* <Ground /> */}
      {/* </CanvasWrapper> */}
      <Hero />
      <Mission/>
      <OurSolutions/>
      <NextGen/>
      <LetsConnect/>
      <Footer/>
    </div>
  );
}
