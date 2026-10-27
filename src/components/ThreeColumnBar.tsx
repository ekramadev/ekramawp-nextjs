"use client";
import React from 'react';
import type { DeliveryComparisonContent } from '@/content/deliverySections';

export const ThreeColumnBar = ({ content }: { content: DeliveryComparisonContent }) => {
  return (
    <section data-wpfe-section="" data-component="delivery-comparison" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* Heading Section */}
        <h2 className="mb-[20px] text-black">
          {content.title[0]} <span className="text-[#10B981]">{content.title[1]}</span> {content.title[2]}
        </h2>
        
        {/* Title Body Content */}
        <div className="max-w-[800px] mx-auto mb-[70px] text-gray-700">
          {content.intro}
        </div>

        {/* Features Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start text-left">
          
          {/* Column 1: WPFEDEV (Transparent) */}
          <div className="flex flex-col h-full p-[35px_25px] bg-transparent">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              <div className="text-[26px] font-black tracking-[-1px] text-black">
                WPFEDEV<span className="text-[#10B981]">.com</span>
              </div>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[0][0]}</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[0][1]}</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[0][2]}</p>
              </li>
            </ul>
          </div>

          {/* Column 2: Required inputs */}
          <div className="flex flex-col h-full rounded-[20px] p-[35px_25px] bg-transparent shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              {/* Added font-bold */}
              <p className="text-black font-bold">{content.columnTitles[0]}</p>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-gray-700">✘</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[1][0]}</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-gray-700">✘</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[1][1]}</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-white/20 text-brand-emerald">✔</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[1][2]}</p>
              </li>
            </ul>
          </div>

          {/* Column 3: Scope boundaries */}
          <div className="flex flex-col h-full p-[35px_25px] bg-transparent">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              {/* Added font-bold */}
              <p className="font-bold text-black">{content.columnTitles[1]}</p>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-[#10B981]/15 text-[#10B981]">✔</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[2][0]}</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-[#cf2e2e]/15 text-gray-700">✘</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[2][1]}</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-[#cf2e2e]/15 text-gray-700">✘</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[2][2]}</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Review points */}
          <div className="flex flex-col h-full rounded-[20px] p-[35px_25px] bg-transparent shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
            <div className="min-h-[60px] mb-[25px] flex items-center">
              {/* Swapped class for className to match React standards and kept it bold */}
              <p className="text-black font-bold">{content.columnTitles[2]}</p>
            </div>
            <ul className="list-none p-0 m-0 grow">
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[11px] bg-white/20 text-brand-emerald">✔</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[3][0]}</p>
              </li>
              <li className="flex items-start mb-[25px]">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-gray-700">✘</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[3][1]}</p>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center font-black text-[10px] bg-white/20 text-gray-700">✘</div>
                <p className="text-gray-700 text-[15px] ml-[16px] leading-[1.6] -mt-[2px]">{content.rows[3][2]}</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
