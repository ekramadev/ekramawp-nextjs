"use client";
import React from "react";
import type { GeoOverlapContent } from "@/content/geoOverlap";

export const GeoOverlapSection = ({ content }: { content: GeoOverlapContent }) => {
  return (
    <section data-component="geo-overlap" className="pt-10 pb-0 px-5 min-h-[5vh] flex items-center relative overflow-hidden bg-transparent">

      <div className="max-w-[1200px] w-full mx-auto flex flex-col relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center max-w-[900px] mx-auto mb-8">
          {/* Preserve the original heading structure and typography. */}
          <h1 className="mb-6">
            {content.headingSubject}<br />
            <span className="text-brand-emerald">{content.tagline}</span>
          </h1>
        </div>

        {/* --- CONTENT WRAPPER --- */}
        <div className="flex flex-col lg:flex-row items-start justify-between relative gap-12 lg:gap-16 mb-10">

          {/* --- LEFT COLUMN --- */}
          <div className="w-full lg:w-[45%] flex flex-col z-20">
            <div>
              <h3 className="mb-2 text-black">
                Understand <span className="text-black">{content.subject}</span>
              </h3>
              <p className="mb-6 lg:mb-10 max-w-[600px] mx-auto lg:mx-0 text-gray-700">
                {content.intro}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-black">
                Plan <span className="text-black">{content.subject} Workflows</span>
              </h3>
              <p className="mb-6 max-w-[600px] mx-auto lg:mx-0 text-gray-700">
                {content.workflow}
              </p>

              <ul className="space-y-4 lg:space-y-6 mb-6 lg:mb-10 max-w-[600px] mx-auto lg:mx-0">
                {content.checks.map(([title, description], index) => (
                  <li key={title} className="relative pl-7 text-gray-700">
                    <span aria-hidden="true" className={`absolute left-0 text-brand-emerald font-bold top-0${index === 1 ? " text-lg" : ""}`}>→</span>
                    <strong className="text-black">{title}:</strong> {description}
                  </li>
                ))}
              </ul>

              <p className="mb-2 lg:mb-10 max-w-[600px] mx-auto lg:mx-0 text-gray-700">
                {content.closing}
              </p>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="w-full lg:w-[55%] z-10">

            <h3 className="mb-2 text-center lg:text-left text-black">
              Build for <span className="text-black">{content.subject}</span>
            </h3>

            <p className="mb-8 max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left text-gray-700">
              {content.capabilitiesIntro}
            </p>

            {/* Preserve the original six-card grid. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {content.cards.map(([title, description]) => (
                <div key={title} className="bg-transparent border border-emerald-200 rounded-lg p-4 transition-all duration-300">
                  <h4 className="text-black font-bold mb-1">{title}</h4>
                  <p className="text-gray-700">
                    {description}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* --- FOOTER CTA --- */}
        <div className="text-center mt-6 lg:mt-10">
          <a href="/contact/" className="inline-block border border-emerald-700 text-brand-emerald px-10 py-4 bg-transparent hover:text-brand-emerald transition-all duration-300 rounded-sm">
            {content.cta}
          </a>
        </div>

      </div>
    </section>
  );
};
