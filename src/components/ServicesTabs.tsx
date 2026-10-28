"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { ServicesTabsContent } from "@/content/reviewSections";

interface ServicesTabsProps {
  readonly content: ServicesTabsContent;
}

export const ServicesTabs = ({ content }: ServicesTabsProps) => {
  const [activeTab, setActiveTab] = useState("headless");

  const currentTabContent = content.tabs.find((tab) => tab.id === activeTab) || content.tabs[0];

  return (
    <section data-wpfe-section="" className="w-full py-24 md:py-32 bg-transparent text-gray-700 overflow-hidden">
      <div data-wpfe-container="content" className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        
        {/* --- MINIMALIST HEADER BAR --- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/10 pb-10 mb-16 lg:mb-20 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-brand-emerald uppercase block mb-3">
              {content.eyebrow}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-none m-0 text-black">
              {content.title}
            </h1>
          </div>
          <p className="text-gray-700 max-w-[420px] font-light leading-relaxed m-0">
            {content.intro}
          </p>
        </div>

        {/* --- CORE ASYMMETRIC GRID WORKSPACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* LEFT SIDE: VERTICAL TRACK MENU (Fixes cutoff bugs) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col border-l border-black/10 space-y-2 w-full">
            {content.tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group text-left py-3.5 pl-6 text-[16px] md:text-[18px] font-medium tracking-tight transition-all duration-300 relative outline-none border-none bg-transparent w-full ${
                    isActive 
                      ? "text-black font-semibold"
                      : "text-gray-500 hover:text-brand-emerald"
                  }`}
                >
                  {/* Shopify Marker Line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-400" />
                  )}
                  
                  <span className="font-mono text-xs mr-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: INTERACTIVE DATA OUTPUT */}
          <div className="col-span-1 lg:col-span-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start animate-in fade-in duration-300">
            
            {/* Descriptive Content */}
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-black">
                {currentTabContent.title}
              </h2>
              
              <ul className="flex flex-col gap-6 list-none p-0 m-0 w-full">
                {currentTabContent.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 w-full">
                    <span className="text-brand-emerald font-medium select-none mt-0.5 text-[15px]">
                      —
                    </span>
                    <p className="text-gray-700 text-[15px] leading-relaxed m-0 font-light">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Completely Raw, Borderless Image Frame */}
            <div className="relative w-full aspect-[16/11] lg:aspect-[4/3]">
              <Image 
                src={currentTabContent.image}
                alt={currentTabContent.imageAlt}
                fill
                unoptimized
                className="object-contain opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
