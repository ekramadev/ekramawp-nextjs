"use client";
import React from 'react';
import type { ContextStudyContent } from '@/content/platformContexts';

export const CaseStudyCard = ({ content }: { content: ContextStudyContent }) => {
  return (
    <section data-wpfe-section="" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      {/* Main Container */}
      <div data-wpfe-container="content" className="max-w-[1400px] w-full mx-auto px-5 relative z-10 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-12 lg:gap-20">

        {/* --- LEFT COLUMN: Text Content --- */}
        <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-6">
          <h2 className="text-black">
            {content.heading[0]} <span className="text-brand-emerald">{content.heading[1]}</span><br />
            <span className="text-brand-emerald">{content.heading[2]}</span><br />
            {content.heading[3]}<br />
            {content.heading[4]}
          </h2>

          {/* Changed to <p> tags so they inherit your global light theme paragraph styles */}
          <p className="mt-2 pr-0 lg:pr-8 text-gray-700">
            {content.introduction[0]}<strong className="text-gray-700">{content.introduction[1]}</strong>{content.introduction[2]}
          </p>

          <p className="pr-0 lg:pr-8 text-gray-700">
            {content.detail[0]}<span className="text-brand-emerald font-semibold">{content.detail[1]}</span>{content.detail[2]}
          </p>
        </div>

        {/* --- RIGHT COLUMN: Image + Metrics Part --- */}
        <div className="w-full lg:w-1/2 flex-1 flex flex-col items-center lg:items-end gap-10 mt-8 lg:mt-0">

          {/* The Image */}
          <img
            src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01kna884mqe76r5kh6q4bcm4jp_1775239514_img_1.webp"
            alt={content.imageAlt}
            className="w-full h-auto max-w-[650px] object-contain drop-shadow-2xl"
          />

          {/* Metrics Grid */}
          <div className="w-full max-w-[600px] grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Metric 1 */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-brand-emerald text-3xl md:text-5xl font-black">{content.cues[0][0]}</div>
              {/* Explicitly set text-gray-500 and uppercase for crisp light theme readability */}
              <div className="text-gray-700 text-[11px] font-bold tracking-widest leading-tight mt-1 uppercase">
                {content.cues[0][1]}<br />{content.cues[0][2]}
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-brand-emerald text-3xl md:text-5xl font-black">{content.cues[1][0]}</div>
              <div className="text-gray-700 text-[11px] font-bold tracking-widest leading-tight mt-1 uppercase">
                {content.cues[1][1]}
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-brand-emerald text-3xl md:text-5xl font-black">{content.cues[2][0]}</div>
              <div className="text-gray-700 text-[11px] font-bold tracking-widest leading-tight mt-1 uppercase">
                {content.cues[2][1]}
              </div>
            </div>

          </div>

          {/* Asterisk note - darkened slightly from gray-400 to gray-500 for better contrast on white */}
          <div className="w-full text-center lg:text-left text-gray-700 text-[11px] italic opacity-90">
            {content.footnote}
          </div>
        </div>

      </div>
    </section>
  );
};
