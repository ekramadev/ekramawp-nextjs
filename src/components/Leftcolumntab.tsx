"use client";
import React, { useState, useEffect } from 'react';
import type { LeftColumnContent } from '@/content/agencyCarousels';

const SLIDE_IMAGES = [
  "https://www.webfx.com/wp-content/uploads/2023/12/CompanyTrackerFX.png",
  "https://www.webfx.com/wp-content/uploads/2023/12/CompanyTrackerFX.png",
  "https://www.webfx.com/wp-content/uploads/2023/12/EmailMarketingFX.png",
  "https://www.webfx.com/wp-content/uploads/2024/01/IntegrationsFX.png"
];

export const Leftcolumntab = ({ content }: { content: LeftColumnContent }) => {
  const SLIDE_DATA = content.slides.map((slide, i) => ({ ...slide, image: SLIDE_IMAGES[i] }));
  const INFINITE_TRACK = [...SLIDE_DATA.slice(-2), ...SLIDE_DATA, ...SLIDE_DATA.slice(0, 2)];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // JS CONSTANTS
  const cardWidth = 420;
  const gap = 30;

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (currentIndex >= INFINITE_TRACK.length - 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section data-wpfe-section="" data-component="capability-carousel" className="w-full pt-16 pb-24 relative z-10 bg-transparent">

      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-[clamp(40px,6vw,100px)] w-full">

        {/* CAROUSEL ON LEFT */}
        <div data-wpfe-carousel-viewport="" className="shrink-0 grow-0 relative w-[100vw] lg:w-[calc(100%-450px)] max-w-[850px]">
          <div className="w-full overflow-hidden py-[80px] px-4 lg:px-0 relative">

            <div
              className="flex justify-start will-change-transform items-stretch h-full"
              style={{
                gap: `${gap}px`,
                transform: `translateX(calc(-${currentIndex * (cardWidth + gap)}px + 20px))`,
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
            >
              {INFINITE_TRACK.map((slide, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <div
                    // Updated to light theme: white card, gray border, soft gray shadow
                    className={`w-[320px] sm:w-[380px] lg:w-[420px] bg-transparent border border-gray-200 rounded-[24px] shrink-0 relative px-8 pb-8 pt-[180px] flex flex-col shadow-xl transition-all duration-500 ${isActive ? 'scale-100 opacity-100 z-20' : 'scale-95 opacity-40 z-10'}`}
                    key={idx}
                  >
                    {/* Image frame updated from zinc-900 to clean gray-50 layout */}
                    <div className={`w-[90%] bg-transparent p-2 rounded-xl absolute -top-[60px] left-1/2 -translate-x-1/2 shadow-[0_15px_30px_rgba(0,0,0,0.06)] z-20 border border-gray-100 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                      <img src={slide.image} className="w-full rounded-lg block" alt={slide.imageAlt} />
                    </div>

                    {/* Content text converted to dark theme typography */}
                    <div className="overflow-y-auto text-gray-700 grow pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#10B981]/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                      <h3 className="mb-3 text-[24px] font-bold text-black tracking-tight leading-tight">{slide.title}</h3>
                      <p className="text-gray-700 text-[15px] mb-6 leading-relaxed font-light">{slide.desc}</p>

                      <ul className="list-none p-0 m-0 space-y-3">
                        {slide.list.map((item, i) => (
                          <li key={i} className="text-gray-700 relative pl-6 text-[14px] leading-snug">
                            <svg className="absolute left-0 top-[2px] w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* STATIC CONTENT ON RIGHT */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col items-center lg:items-start z-20">

          {/* Badge updated to high-contrast light theme treatment */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-transparent border border-[#10B981]/20 text-[#10B981] text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            {content.badge}
          </div>

          <h2 className="mb-6 text-[42px] lg:text-[48px] font-extrabold text-black leading-[1.1] tracking-tight">
            {content.heading[0]} <br />
            <span className="text-brand-emerald">{content.heading[1]}</span>
          </h2>

          <p className="text-gray-700 text-[17px] leading-relaxed mb-8 font-light">
            {content.intro}
            <br /><br />
            {content.body}
          </p>

          {/* CTA Button updated to solid crisp Emerald with white text */}
          <button
            className="group flex items-center justify-between w-full sm:w-auto gap-6 bg-[#10B981] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-[#059669] shadow-lg shadow-emerald-500/20 mb-12"
            onClick={handleNext}
          >
            <span>{content.cta}</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>

          {/* Metrics Grid columns updated with gray borders, dark numbers, and dark slate descriptors */}
          <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8 w-full">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[32px] font-black text-black tracking-tighter">{content.cues[0][0]}<span className="text-[#10B981]">{''}</span></span>
              <span className="text-gray-700 text-[11px] font-bold uppercase tracking-wider mt-1 text-center lg:text-left">{content.cues[0][1]}<br />{content.cues[0][2]}</span>
            </div>
            <div className="flex flex-col items-center lg:items-start border-l border-gray-200 pl-6">
              <span className="text-[32px] font-black text-black tracking-tighter"><span className="text-[#10B981]">{''}</span>{content.cues[1][0]}<span className="text-[#10B981]">{''}</span></span>
              <span className="text-gray-700 text-[11px] font-bold uppercase tracking-wider mt-1 text-center lg:text-left">{content.cues[1][1]}<br />{content.cues[1][2]}</span>
            </div>
            <div className="flex flex-col items-center lg:items-start border-l border-gray-200 pl-6">
              <span className="text-[32px] font-black text-black tracking-tighter">{content.cues[2][0]}<span className="text-[#10B981]">{''}</span></span>
              <span className="text-gray-700 text-[11px] font-bold uppercase tracking-wider mt-1 text-center lg:text-left">{content.cues[2][1]}<br />{content.cues[2][2]}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
