"use client";

import React from "react";
import type { StatsSectionContent } from "@/content/reviewSections";

interface StatsSectionProps {
  readonly content: StatsSectionContent;
}

export const StatsSection = ({ content }: StatsSectionProps) => {
  const stats = content.cards;

  return (
    <section data-wpfe-section="" className="relative pt-10 pb-0 px-5 flex items-center overflow-hidden">
      {/* Main Container */}
      <div data-wpfe-container="content" className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="flex flex-col">
          <h1 className="text-gray-900 mb-6">
            {content.titleLead} <br className="hidden md:block" />
            <span className="text-brand-emerald">{content.titleAccent}</span>
          </h1>

          <p className="text-gray-700 mb-0 lg:mb-2 max-w-[600px] mx-auto lg:mx-0">
            {content.intro}
          </p>
        </div>

        {/* Right Side: Stats Grid */}
<div className="grid grid-cols-2 gap-4 sm:gap-6">
  {stats.map((stat, index) => (
    <div 
      key={index} 
      /* 1. justify-center: Centers content vertically
         2. items-center: Centers content horizontally
         3. text-center: Ensures text lines are centered
      */
      className="bg-emerald-600 flex flex-col justify-center items-center text-center p-4 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.03] aspect-square lg:aspect-auto lg:min-h-[220px]"
    >
      <div className="mb-2">
        <h3 className="text-white">
          {stat.value}
        </h3>
      </div>
      <p className="text-white/90">
        {stat.desc}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};
