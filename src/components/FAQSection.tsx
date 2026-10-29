"use client";
import React, { useState } from 'react';
import type { FaqSectionContent } from '@/content/faqSections';

export const FAQSection = ({ content }: { content: FaqSectionContent }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // 0 = First one open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section data-wpfe-section="" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">

        <div className="max-w-[900px] mx-auto text-left">

          {/* Header */}
          <div className="text-center mb-[60px]">
            <h2 className="text-black mb-4 font-bold">
              {content.titleLead} <span className="text-brand-emerald">{content.titleAccent}</span>
            </h2>
            <p className="text-gray-700">
              {content.intro}
            </p>
          </div>

          {/* FAQ List */}
          <div>
            {content.items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl mb-[16px] overflow-hidden transition-all duration-300 border ${isActive
                      ? 'border-[#10b981] shadow-[0_10px_25px_rgba(16,185,129,0.08)] bg-[#10b981]/[0.03]'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  <button
                    className="w-full text-left bg-transparent border-none px-[30px] py-[24px] flex justify-between items-center cursor-pointer outline-none"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isActive}
                  >
                    <span className={`mr-[20px] text-lg font-bold transition-colors duration-300 ${isActive ? 'text-brand-emerald' : 'text-black'}`}>
                      {item.question}
                    </span>
                    <div
                      className={`w-[24px] h-[24px] relative shrink-0 before:absolute before:transition-all before:duration-300 before:rounded-[2px] before:top-1/2 before:left-0 before:w-full before:h-[2px] before:-mt-[1px] after:absolute after:transition-all after:duration-300 after:rounded-[2px] after:top-0 after:left-1/2 after:w-[2px] after:h-full after:-ml-[1px] ${isActive
                          ? 'before:bg-[#10b981] after:bg-[#10b981] after:rotate-90'
                          : 'before:bg-gray-400 after:bg-gray-400'
                        }`}
                      aria-hidden="true"
                    ></div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                  >
                    <div className="px-[30px] pb-[30px] text-gray-700 leading-[1.7] text-[1.05rem]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
