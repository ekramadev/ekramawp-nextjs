"use client";
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

export default function RotatingGlobe() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setRotation((prev) => (prev + 0.15) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    // Slightly reduced opacity so it acts as a clean, non-distracting watermark on the white background
    <div className="absolute left-0 lg:left-[-35%] top-1/2 -translate-y-1/2 w-full max-w-[450px] lg:max-w-[1200px] aspect-square z-0 pointer-events-none opacity-[0.25]">
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{
          rotate: [rotation, -15, 0],
          scale: 280
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Crisp Emerald outline with a very subtle tinted fill for the ocean */}
        <Sphere stroke="#10b981" strokeWidth={0.8} fill="rgba(16, 185, 129, 0.05)" id="rsm-sphere" />

        {/* Softer grid lines so they don't clash with the landmasses */}
        <Graticule stroke="#10b981" strokeWidth={0.4} opacity={0.15} />

        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                // Solid Emerald Green for landmasses so it pops beautifully on white
                fill="#10b981"
                // Clean white borders between countries
                stroke="#ffffff"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}