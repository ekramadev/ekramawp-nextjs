"use client";
import React, { useState } from 'react';

import type { FiveCirclesContent } from '@/content/fiveCircles';

const mediaSrc = 'https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage.webp';
const pillarAppearance = ['#10B981', '#059669', '#34D399', '#047857', '#6EE7B7'].map(color => ({ color, icon: mediaSrc, mediaType: 'image', mediaSrc }));

export const FiveCirclesBox = ({ content }: { content: FiveCirclesContent }) => {
  const pillarData = content.pillars.map((pillar, id) => ({ ...pillar, id, ...pillarAppearance[id] }));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isStepping, setIsStepping] = useState(false);
  
  const totalPillars = pillarData.length;
  const activePillar = pillarData[activeIndex] || pillarData[0];

  // SMART ROTATION: Prevents criss-crossing ("swapping") by routing movement through the perimeter
  const handleSetActive = (idx: number) => {
    if (idx === activeIndex || isStepping) return;

    const diff = (idx - activeIndex + totalPillars) % totalPillars;
    
    if (diff === 2) {
      setIsStepping(true);
      setActiveIndex((prev) => (prev + 1) % totalPillars); 
      setTimeout(() => {
        setActiveIndex(idx); 
        setIsStepping(false);
      }, 250); 
    } else if (diff === 3) {
      setIsStepping(true);
      setActiveIndex((prev) => (prev + 4) % totalPillars); 
      setTimeout(() => {
        setActiveIndex(idx); 
        setIsStepping(false);
      }, 250);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <section data-component="five-circles" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* --- HEADER --- */}
        <header className="max-w-[980px] mx-auto mb-8">
          <h2 className="text-black">
            {content.titleLead} <span style={{ color: "var(--wpfe-emerald)" }} className="transition-colors duration-500">{content.titleAccent}</span>
          </h2>
          <div className="mt-4 max-w-[860px] mx-auto text-gray-700">
            {content.intro}
          </div>
        </header>

        {/* --- COMPRESSED DOWNWARD PENTAGON CAROUSEL NAVIGATION --- */}
        <div className="relative w-full max-w-[650px] mx-auto h-[170px] z-20 hidden md:block">
          
          <div className="absolute top-[0px] left-0 w-full h-[170px] z-0 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 170" fill="none" preserveAspectRatio="none">
              <polygon 
                points="500,170 820,85 660,15 340,15 180,85" 
                fill="none" 
                stroke="#5b5d60" 
                strokeWidth="2.5" 
                strokeDasharray="8 8" 
              />
            </svg>
          </div>

          {pillarData.map((item, idx) => {
            let posClass = '';
            let zIndex = 10;
            let opacityClass = 'opacity-100 hover:opacity-100';

            const offset = (idx - activeIndex + totalPillars) % totalPillars;
            const isActive = offset === 0;

            switch(offset) {
              case 0: // Active 
                posClass = 'left-[50%] top-[170px] scale-[1.1]';
                break;
              case 1: // Middle Right
                posClass = 'left-[82%] top-[85px] scale-[0.85]';
                zIndex = 20;
                break;
              case 2: // Top Right
                posClass = 'left-[66%] top-[15px] scale-[0.70]';
                zIndex = 10;
                break;
              case 3: // Top Left
                posClass = 'left-[34%] top-[15px] scale-[0.70]';
                zIndex = 10;
                break;
              case 4: // Middle Left
                posClass = 'left-[18%] top-[85px] scale-[0.85]';
                zIndex = 20;
                break;
              default:
                break;
            }

            return (
              <div 
                key={item.id} 
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-[500ms] ease-in-out flex flex-col items-center cursor-pointer ${posClass} ${opacityClass}`}
                style={{ zIndex }}
                onClick={() => handleSetActive(idx)}
              >
                <div 
                  className={`w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${isActive ? 'shadow-2xl' : ''}`}
                  style={{ 
                    borderColor: item.color, 
                    backgroundColor: 'rgba(9, 11, 14, 0.45)'
                  }}
                >
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className="w-[80%] h-[80%] object-contain transition-all duration-500"
                  />
                </div>
                
                <div className={`absolute top-[88px] w-[130px] text-center transition-all duration-500 ${isActive ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                  <span 
                    className="text-[0.85rem] font-extrabold leading-tight drop-shadow-sm"
                    style={{ color: "var(--wpfe-emerald)" }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE NAVIGATION BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:hidden relative z-10">
           {pillarData.map((item, idx) => (
             <button
                key={idx}
                onClick={() => handleSetActive(idx)}
                className="px-5 py-2.5 rounded-full border-[2.5px] font-bold text-[0.85rem] transition-colors shadow-sm"
                style={{ 
                  backgroundColor: activeIndex === idx ? item.color : 'transparent',
                  borderColor: item.color,
                  color: activeIndex === idx ? '#fff' : 'var(--wpfe-emerald)'
                }}
             >
                {item.label}
             </button>
           ))}
        </div>

        {/* --- DYNAMIC PILLAR CONTENT PANEL --- */}
        <div 
          className="relative rounded-[22px] p-8 lg:p-[64px_48px] pt-16 lg:pt-[70px] z-10 transition-all duration-500 shadow-[0_22px_60px_rgba(17,45,84,0.06)]"
          style={{ background: 'transparent' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[40px] items-center text-left">
            
            <div className="animate-fade-in" key={`content-${activeIndex}`}>
              <h3 className="mb-6 text-black">
                {activePillar.title}
              </h3>
              
              <ul className="grid gap-5 mb-8 list-none p-0">
                {activePillar.bullets.map((bullet, i) => (
                  <li key={i} className="relative pl-7 text-[1.05rem] leading-relaxed text-gray-700">
                    <span 
                      className="absolute left-0 top-[0.6em] w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: activePillar.color }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <a 
                href="/contact/"
                className="inline-flex items-center gap-3 no-underline font-extrabold text-[1.05rem] group transition-all"
                style={{ color: "var(--wpfe-emerald)" }}
              >
                <span>{activePillar.cta}</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" viewBox="0 0 19 16" fill="currentColor">
                  <path d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 9H18V7H0V9Z" />
                </svg>
              </a>
            </div>

            <div className="flex justify-center w-full relative group" key={`media-${activeIndex}`}>
              <div className="relative w-full max-w-[500px] aspect-[16/10] rounded-[20px] overflow-hidden transition-all duration-500">
                <img 
                  src={activePillar.mediaSrc} 
                  alt={activePillar.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>

          </div>

          {/* PROGRESSIVE PAGINATION INDICATORS */}
          <div className="mt-8 pt-6 flex items-center justify-end gap-3">
            {pillarData.map((item, dotIdx) => {
              const isActive = activeIndex === dotIdx;
              return (
                <button 
                  key={dotIdx} 
                  onClick={() => handleSetActive(dotIdx)}
                  className="relative h-1.5 rounded-full bg-gray-200 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ 
                    width: isActive ? '40px' : '12px',
                  }}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                >
                  <div 
                    className={`absolute inset-0 transition-transform duration-[1000ms] ease-out ${isActive ? 'translate-x-0' : '-translate-x-full'}`}
                    style={{ 
                      backgroundColor: item.color,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};