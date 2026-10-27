"use client";

import React, { useState } from 'react';
import type { ArchitectureTabsContent } from "@/content/architectureSections";

const TAB_ASSETS = [
  { id: 'nextjs', iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-1.png' },
  { id: 'vercel', iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-3.png' },
  { id: 'github', iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-4.png' },
  { id: 'wordpress', iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-5.png' },
  { id: 'security', iconUrl: 'https://admin.wpfedev.com/wp-content/uploads/2026/02/headless-icon-6.png' },
] as const;
const ARCHITECTURE_IMAGE = 'https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp';

// Helper function to color the last word of the title emerald
const renderEmeraldTitle = (text: string) => {
  const words = text.split(" ");
  const lastWord = words.pop();
  return (
    <>
      {words.join(" ")} <span className="text-[#10B981]">{lastWord}</span>
    </>
  );
};

// --- COMPONENT ---
export const HeadlessWpTabs = ({ content: pageData }: { content: ArchitectureTabsContent }) => {
  const tabs = pageData.tabs.map((tab, index) => ({
    ...TAB_ASSETS[index],
    ...tab,
    image: ARCHITECTURE_IMAGE,
  }));

  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleTabClick = (index: number) => {
    if (activeTab === index) return;

    setIsFading(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsFading(false);
    }, 250);
  };

  if (tabs.length === 0) return null;
  const currentTabInfo = tabs[activeTab];

  return (
    <section data-wpfe-section="" data-component="architecture-tabs" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">

        {/* Title & Body */}
        <h2 className="mb-[15px] text-black font-bold">
          {renderEmeraldTitle(pageData.header)}
        </h2>
        {pageData.description && (
          <p className="mb-[50px] text-gray-700 max-w-[700px] mx-auto text-[18px]">
            {pageData.description}
          </p>
        )}

        {/* Tabs Container */}
        <div className="flex justify-center lg:justify-between items-start mb-[60px] gap-[15px] flex-wrap">
          {tabs.map((tab, index: number) => (
            <div
              key={tab.id}
              className="flex-1 min-w-[120px] flex flex-col items-center text-center cursor-pointer p-[10px] transition-all duration-300 relative group"
              onClick={() => handleTabClick(index)}
            >
              {/* Removed 'filter brightness-0 invert' so icons retain their color/darkness for light theme */}
              <img
                src={tab.iconUrl}
                alt={tab.title}
                className={`w-[60px] h-[60px] object-contain mb-[12px] transition-all duration-300 ${activeTab === index ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-70'}`}
              />
              <span className={`text-[15px] font-bold transition-colors duration-300 ${activeTab === index ? 'text-[#10B981]' : 'text-gray-700 group-hover:text-brand-emerald'}`}>
                {tab.title}
              </span>

              {/* Underline indicator for active tab */}
              {activeTab === index && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[3px] bg-[#10B981] rounded-full mt-2" />
              )}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className={`flex flex-col lg:flex-row gap-[60px] items-center text-left transition-opacity duration-250 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>

          {/* Left Text / Features */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            {currentTabInfo.features.map((feature, idx: number) => (
              <div className="mb-[30px] pb-[30px] border-b border-gray-200 last:border-b-0 last:pb-0" key={idx}>
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <svg className="shrink-0 w-[28px] h-[28px] text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="text-[22px] font-bold text-black">
                    {feature.title}
                  </div>
                </div>
                <div className="text-[16px] text-gray-700 leading-[1.6] mt-[10px] md:mt-0 ml-0 md:ml-[43px]">
                  {feature.desc}
                </div>
              </div>
            ))}

            {/* CTA Button updated to light theme */}
            <button className="bg-[#10B981] text-white font-bold text-[16px] px-[32px] py-[16px] rounded-[30px] border-none cursor-pointer mt-[30px] transition-all duration-200 hover:bg-[#059669] hover:-translate-y-[2px] shadow-lg shadow-emerald-500/20">
              {currentTabInfo.buttonText}
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center relative w-full">
            <img
              src={currentTabInfo.image}
              alt={currentTabInfo.title}
              className="relative z-[2] w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};