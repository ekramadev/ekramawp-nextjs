"use client";
import React from 'react';
import type { ArchitecturePhasesContent } from '@/content/phaseResources';

const PHASE_ICONS = [
  "https://admin.wpfedev.com/wp-content/uploads/2026/03/icons8-data-pipeline-64.png",
  "https://admin.wpfedev.com/wp-content/uploads/2026/03/icons8-performance-50.png",
  "https://admin.wpfedev.com/wp-content/uploads/2026/03/icons8-foundation-60.png"
];

export const Threecolumnarch = ({ content }: { content: ArchitecturePhasesContent }) => {
  const phases = content.phases;

  return (
    <section data-wpfe-section="" className="w-full pt-2 pb-16 relative overflow-hidden flex justify-center bg-transparent">
      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 flex flex-col items-center justify-center text-center w-full">

        {/* --- INTRO SECTION (Light Theme Updates) --- */}
        <div className="text-center mb-[100px] max-w-[800px] mx-auto">
          <h2 className="text-black mb-[25px] m-0">
            {content.titleLead} <span className="text-brand-emerald">{content.titleAccent}</span>
          </h2>
          <p className="text-gray-700 text-[1.1rem] leading-[1.7] max-w-2xl mx-auto m-0">
            {content.intro}
          </p>
        </div>

        {/* --- PRICING/PHASE TABLE (Light Theme Shadow Update) --- */}
        <div className="flex flex-col min-[1100px]:flex-row rounded-[24px] min-[1100px]:shadow-[0_15px_50px_rgba(0,0,0,0.06)] min-[1100px]:min-h-[850px] w-full max-w-[1100px] mx-auto">
          {phases.map((phase, index) => (
            <div
              className="relative flex-1 flex flex-col mb-[60px] min-[1100px]:mb-0 shadow-[0_15px_40px_rgba(0,0,0,0.06)] min-[1100px]:shadow-none rounded-[24px] min-[1100px]:rounded-none min-[1100px]:first:rounded-l-[24px] min-[1100px]:last:rounded-r-[24px]"
              key={index}
            >

              {/* Sibling Icon Notch */}
              <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] z-20 flex items-center justify-center">
                <img
                  src={PHASE_ICONS[index]}
                  alt={phase.imageAlt}
                  className="max-w-[48px] max-h-[48px] object-contain block"
                />
              </div>

              {/* Masked Card Wrapper - Added bg-white and border-gray-200 */}
              <div
                className="flex-1 flex flex-col bg-transparent border border-gray-200 min-[1100px]:border-r-0 min-[1100px]:last:border-r rounded-[24px] min-[1100px]:rounded-none min-[1100px]:first:rounded-l-[24px] min-[1100px]:last:rounded-r-[24px]"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at 50% 0, transparent 48px, black 49px)',
                  maskImage: 'radial-gradient(circle at 50% 0, transparent 48px, black 49px)'
                }}
              >
                {/* HEAD - Keeps Emerald Green & White Content for Readability */}
                <div className="bg-transparent pt-[80px] px-[30px] pb-[30px] text-center rounded-t-[24px] min-[1100px]:rounded-t-none min-[1100px]:first:rounded-tl-[24px] min-[1100px]:last:rounded-tr-[24px]">
                  <h3 className="text-black mt-[10px] uppercase m-0 font-bold tracking-wider">{phase.title}</h3>
                  <p className="text-gray-700 text-[0.9rem] font-bold my-[8px]">{phase.subtitle}</p>
                  <p className="text-brand-emerald text-[2.5rem] font-black mt-[10px] mb-0">
                    {phase.price} <span className="text-[1.1rem] text-gray-700 font-normal">{phase.priceUnit}</span>
                  </p>
                </div>

                {/* BODY (Light Theme Updates) */}
                <div className="p-[50px_40px] grow text-left rounded-b-[24px] min-[1100px]:rounded-b-none min-[1100px]:first:rounded-bl-[24px] min-[1100px]:last:rounded-br-[24px]">
                  <h4 className="text-black font-bold uppercase mb-[25px] m-0">{phase.bodyTitle}</h4>
                  <p className="text-gray-700 text-[1.1rem] leading-[1.6] mb-[20px] font-normal">{phase.description}</p>

                  <ul className="list-none p-0 mt-auto">
                    {phase.list.map((item, i) => (
                      <li
                        key={i}
                        className="relative pl-[35px] mb-[18px] text-[1.05rem] text-gray-700 leading-[1.5] before:content-['✓'] before:absolute before:left-0 before:text-[#10B981] before:font-black before:text-[1.2rem]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER CTA (Light Theme Shadow Update) --- */}
        <div className="text-center mt-[60px]">
          <a
            href="#"
            className="bg-[#10B981] text-white font-black py-[20px] px-[60px] rounded-[8px] inline-block transition-all duration-300 text-[1.1rem] no-underline hover:-translate-y-[5px] hover:bg-[#059669] hover:shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
          >
            {content.cta}
          </a>
        </div>

      </div>
    </section>
  );
};
