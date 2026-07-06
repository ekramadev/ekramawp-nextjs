"use client";
import React from "react";
import Image from "next/image";

export const EvolutionServices = () => {
  return (
    /* Integrated the global section-container for pt-10, pb-0, px-5 */
    <section className="section-container relative overflow-hidden bg-transparent">

      {/* Integrated global-grid-layout for max-width, centering, and responsive grid */}
      <div className="global-grid-layout">

        {/* --- LEFT COLUMN: VISUAL & CTA --- */}
        {/* Changed order to 2 on mobile, 1 on desktop so text stays on top for mobile users */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">

          {/* CTA Box - Updated to Light Theme */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] relative overflow-hidden">
            {/* Subtle emerald glow in the corner */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#10B981]/10 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 mb-5">
              <h4 className="text-xl mb-2 text-gray-900 font-bold">
                Is technical debt slowing you down?
              </h4>
              <p className="text-gray-600 !mb-0"> {/* Override p margin for CTA interior */}
                Get a free architecture audit & modernization plan.
              </p>
            </div>

            <form className="relative z-10 flex flex-col gap-3">
              <input
                type="url"
                placeholder="Your current website URL..."
                className="bg-gray-50 border border-gray-300 p-4 rounded-lg w-full text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                required
              />
              <button
                type="submit"
                className="bg-[#10B981] text-white p-4 rounded-lg font-bold uppercase hover:bg-[#059669] transition-colors shadow-md shadow-emerald-500/20"
              >
                Get Audit
              </button>
            </form>
          </div>

          {/* Optimized Image Container */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[300px] lg:h-[450px]">
            <Image
              src="https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
              alt="Web Architect Expert"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>

        {/* --- RIGHT COLUMN: CONTENT --- */}
        <div className="text-center lg:text-left order-1 lg:order-2">

          {/* H2 - Updated span to dark text */}
          <h2 className="text-[#10B981] leading-tight font-black">
            The Web Has Evolved. <br className="hidden lg:block" />
            Your Stack Should{" "}
            <span className="relative inline-block text-gray-900 px-1 z-10">
              Keep Up.
            </span>
          </h2>

          <div className="flex flex-col mt-10">
            <div className="mb-8">
              {/* H3 - Updated span to dark text */}
              <h3 className="text-[#10B981] font-bold !mb-3">
                Legacy Monoliths Are <span className="text-gray-900">Too Slow</span>
              </h3>
              {/* Paragraphs inherit standard styling (slate gray) automatically from globals.css */}
              <p className="max-w-[90%] mx-auto lg:mx-0">
                Heavy plugins and bloated themes kill your Core Web Vitals. I build
                decoupled architectures where the frontend is lean, fast, and scores 100/100
                on performance tests.
              </p>
            </div>

            <div className="mb-8">
              {/* H3 - Updated span to dark text */}
              <h3 className="text-[#10B981] font-bold !mb-3">
                Headless is the <span className="text-gray-900">New Standard</span>
              </h3>
              <p className="max-w-[90%] mx-auto lg:mx-0">
                Don&apos;t let your CMS dictate your design. By using WordPress strictly as an API
                and Next.js for the frontend, we get enterprise-grade security with
                complete design freedom.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};