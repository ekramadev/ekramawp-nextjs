"use client";
import React, { useState } from "react";

import type { MarketIntelligenceContent } from "@/content/marketIntelligence";

type AreaId = 1 | 2 | 3 | 4;

export const MarketIntelligence = ({ content }: { content: MarketIntelligenceContent }) => {
  const areaFor = (id: AreaId) => content.areas[id - 1];
  const [activeId, setActiveId] = useState<1 | 2 | 3 | 4>(3);
  const [isFading, setIsFading] = useState(false);

  const handleInteraction = (id: 1 | 2 | 3 | 4) => {
    if (id === activeId) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveId(id);
      setIsFading(false);
    }, 200);
  };

  return (
   <section data-component="market-intelligence" className="w-full pt-2 pb-0 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">

        {/* HEADER CONTENT */}
        <div className="col-span-full max-w-[800px] mx-auto w-full text-center relative z-20 flex flex-col items-center justify-center">
          <h2 className="text-gray-900 text-4xl md:text-5xl">
            {content.title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-16">
            {content.description}
          </p>
        </div>

        {/* RESPONSIVE SCALING WRAPPER */}
        <div className="col-span-full relative w-full h-[130px] sm:h-[190px] md:h-[300px] lg:h-[450px] xl:h-[600px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1600px] h-[900px] scale-[0.22] sm:scale-[0.35] md:scale-[0.5] lg:scale-[0.75] xl:scale-[0.9] origin-top z-10">

            <svg width="1600" height="900" viewBox="0 0 1600 900" className="absolute inset-0 pointer-events-none z-0">
              {/* CURVY DOT LINE - Moved to the upper side (Y values around 100-300) */}
              <path
                d="M 50 150 Q 400 -90 800 200 T 1550 50"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="8 12"
                opacity="0.25"
              />

              {/* MAIN ORBIT */}
              <path
                d="M 350 500 A 450 450 0 0 1 1250 500"
                fill="none"
                stroke="#10B981"
                strokeWidth="8"
                opacity="0.5"
              />
            </svg>

            {/* --- CENTRAL TV MOCKUP --- */}
            <div className="absolute left-[800px] top-[400px] -translate-x-1/2 -translate-y-1/2 w-[600px] z-10 transition-transform duration-500">
              <div className="w-full h-[280px] bg-black rounded-t-xl border-[6px] border-[#1f1f1f] shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col z-10">
                <div className={`w-full h-full bg-slate-950 p-8 text-left transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`} aria-label={`${areaFor(activeId).label} work area illustration`} role="img">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4 text-slate-200">
                    <span className="text-lg font-semibold">{areaFor(activeId).label} overview</span>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-brand-emerald">Illustration</span>
                  </div>
                  <div className="mt-8 flex h-28 items-end gap-4" aria-hidden="true">
                    {[40, 62, 51, 75, 68, 90, 82].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-emerald-700 to-emerald-400" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-slate-400" aria-hidden="true">{content.areas.slice(0, 3).map(area => <span key={area.label}>{area.label}</span>)}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
              </div>
              <div className="w-[640px] h-[16px] bg-[#2a2a2a] -ml-[20px] rounded-b-xl border-t border-[#444] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative flex justify-center z-20">
                <div className="w-[70px] h-[4px] bg-[#111] rounded-b-md"></div>
              </div>
            </div>

            {/* --- NODES & HOVER BOXES --- */}
            {[
              { id: 1, x: 350, y: 500, boxPos: "right-[calc(100%-20px)] bottom-[calc(100%+20px)]", width: "w-[230px]"},
              { id: 2, x: 575, y: 110, labelAlign: "-top-[65px] left-1/2 -translate-x-1/2 text-center", boxPos: "bottom-[calc(100%-190px)] right-[calc(100%+140px)]", width: "w-[280px]"},
              { id: 3, x: 1025, y: 110, labelAlign: "-top-[65px] left-1/2 -translate-x-1/2 text-center", boxPos: "bottom-[calc(100%-190px)] left-[calc(100%+140px)]", width: "w-[280px]" },
              { id: 4, x: 1250, y: 500, boxPos: "left-[calc(100%-20px)] bottom-[calc(100%+20px)]", width: "w-[230px]"}
            ].map((node) => (
              <div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer group"
                style={{ left: node.x, top: node.y }}
                onMouseEnter={() => handleInteraction(node.id as 1 | 2 | 3 | 4)}
              >
                <button type="button"
                  aria-label={areaFor(node.id as AreaId).label}
                  aria-pressed={activeId === node.id}
                  onClick={() => handleInteraction(node.id as AreaId)}
                  onFocus={() => handleInteraction(node.id as AreaId)}
                  className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center text-2xl transition-all duration-300 relative z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${activeId === node.id ? "border-emerald-500 bg-emerald-500 text-[#0f172a] scale-110 shadow-[0_0_30px_rgba(16,185,129,0.6)]" : "border-emerald-500/70 bg-[#0c131f] text-white group-hover:border-emerald-400 group-hover:scale-105"}`}>
                  <span aria-hidden="true">+</span>
                </button>

                <div className={`absolute flex flex-col w-[150px] ${node.labelAlign} pointer-events-none transition-opacity duration-300 ${activeId === node.id ? "opacity-0" : "opacity-100"}`}>
                  <span className="text-gray-900">{areaFor(node.id as AreaId).label}</span>
                  <span className="text-brand-emerald">Focus area</span>
                </div>

                <div className={`absolute ${node.boxPos} ${node.width || 'w-[360px]'} ${activeId === node.id ? "pointer-events-auto" : "pointer-events-none"} transition-all duration-500 ${activeId === node.id ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                  <div className={`bg-[#0c131f]/90 backdrop-blur-xl rounded-2xl p-7 shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-30 transition-all duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    <h4 className="text-white text-2xl" aria-label={areaFor(node.id as AreaId).title}>
                      {areaFor(node.id as AreaId).label}
                    </h4>
                    <p className="text-gray-300" title={areaFor(node.id as AreaId).description}>
                      {areaFor(node.id as AreaId).summary}
                    </p>
                    <a href="/contact/" tabIndex={activeId === node.id ? 0 : -1} className="text-brand-emerald text-xs hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
                      {content.cta} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
