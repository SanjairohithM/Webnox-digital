import * as React from "react";
import { InteractiveTiltCard } from "@/components/ui/tilt-card"; 

export default function TiltCardDemo() {
    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                width: "100vw",
                height: "100vh",
                background: "linear-gradient(to bottom right, #2d3748, #1a202c)",
            }}
        >
            <div style={{ width: "300px", height: "400px" }}>
                <InteractiveTiltCard
                    image={{
                        src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=60",
                        alt: "Artistic floral decoration",
                    }}
                    tiltFactor={20}
                    hoverScale={1.07}
                    shadowIntensity={0.6}
                    glareEffect={true}
                    glareIntensity={0.4}
                />
            </div>
        </div>
    );
}
