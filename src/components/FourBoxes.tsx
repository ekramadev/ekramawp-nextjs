"use client";
import React, { useEffect, useRef } from 'react';
import type { FourBoxesContent } from '@/content/serviceCapabilities';

export const FourBoxes = ({ content }: { content: FourBoxesContent }) => {
  // Ref for the card that needs to blink
  const blinkingCardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = blinkingCardRef.current;

    if (!card) return;

    // Reset animation initially
    card.style.animation = 'none';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when visible
            (entry.target as HTMLElement).style.animation = 'border-pulse-emerald 3s infinite';
          } else {
            // Optional: Stop animation when out of view
            (entry.target as HTMLElement).style.animation = 'none';
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section data-component="four-capabilities" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      {/* Dynamic Keyframes: Tuned to shift seamlessly from light gray boundaries to Emerald accents */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes border-pulse-emerald {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
            border-color: #e5e7eb;
          }
          50% {
            box-shadow: 0 0 20px 0 rgba(16, 185, 129, 0.15);
            border-color: #10b981;
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
            border-color: #e5e7eb;
          }
        }
      `}} />

      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">

        {/* --- Header --- */}
        <div className="max-w-[800px] mx-auto mb-[60px] text-center">
          <h2 className="text-black mb-[24px] m-0 font-black">
            {content.titleLead} <span className="text-brand-emerald">{content.titleAccent}</span>
          </h2>
          <p className="text-[1.1rem] text-gray-700 font-normal leading-[1.6] m-0">{content.intro}</p>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] text-left">

          {/* Card 1: Performance */}
          <article className="border border-gray-200 bg-transparent shadow-sm rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px]">
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-black font-bold m-0 mb-[12px] text-xl">{content.cards[0].title}</h3>
                <p className="text-[0.95rem] text-gray-700 leading-[1.5] m-0 max-w-[90%] font-normal">{content.cards[0].description}</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/10 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[0].bullets[0]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[0].bullets[1]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[0].bullets[2]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[0].bullets[3]}
              </div>
            </div>
          </article>

          {/* Card 2: Scalability (BLINKING BLOCK) */}
          <article
            className="relative border border-gray-200 bg-transparent shadow-sm rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px]"
            ref={blinkingCardRef}
          >
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-black font-bold m-0 mb-[12px] text-xl">{content.cards[1].title}</h3>
                <p className="text-[0.95rem] text-gray-700 leading-[1.5] m-0 max-w-[90%] font-normal">{content.cards[1].description}</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/10 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[1].bullets[0]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[1].bullets[1]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[1].bullets[2]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[1].bullets[3]}
              </div>
            </div>
          </article>

          {/* Card 3: Modern Ecosystem */}
          <article className="border border-gray-200 bg-transparent shadow-sm rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px]">
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-black font-bold m-0 mb-[12px] text-xl">{content.cards[2].title}</h3>
                <p className="text-[0.95rem] text-gray-700 leading-[1.5] m-0 max-w-[90%] font-normal">{content.cards[2].description}</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/10 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[2].bullets[0]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[2].bullets[1]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[2].bullets[2]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[2].bullets[3]}
              </div>
            </div>
          </article>

          {/* Card 4: UX & Accessibility */}
          <article className="border border-gray-200 bg-transparent shadow-sm rounded-[12px] p-[40px] flex flex-col transition-transform duration-300 hover:-translate-y-[5px]">
            <div className="flex justify-between items-start mb-[30px]">
              <div>
                <h3 className="text-black font-bold m-0 mb-[12px] text-xl">{content.cards[3].title}</h3>
                <p className="text-[0.95rem] text-gray-700 leading-[1.5] m-0 max-w-[90%] font-normal">{content.cards[3].description}</p>
              </div>
              <div className="shrink-0 w-[50px] h-[50px] bg-[#10B981]/10 rounded-[8px] flex items-center justify-center ml-[15px]">
                <svg className="w-[28px] h-[28px] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-[25px]"></div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-[15px]">
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[3].bullets[0]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[3].bullets[1]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[3].bullets[2]}
              </div>
              <div className="flex items-center text-[0.9rem] text-gray-700 font-semibold">
                <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[#10B981] text-[#10B981] text-[10px] mr-[10px] font-black">✓</span> {content.cards[3].bullets[3]}
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
