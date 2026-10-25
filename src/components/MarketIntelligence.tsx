"use client";

import React, { useId, useState } from "react";
import type { MarketIntelligenceContent } from "@/content/marketIntelligence";

export const MarketIntelligence = ({ content }: { content: MarketIntelligenceContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const instanceId = useId().replace(/:/g, "");
  const headingId = `intelligence-heading-${instanceId}`;
  const diagramId = `intelligence-diagram-${instanceId}`;

  return (
    <section data-component="market-intelligence" aria-labelledby={headingId} className="relative w-full bg-white py-12 text-slate-900 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 id={headingId} className="text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">{content.title}</h2>
          <p className="mx-auto mb-0 text-lg leading-relaxed text-slate-600">{content.description}</p>
        </div>

        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="min-w-0">
            <p className="mb-4 text-sm font-medium leading-relaxed text-slate-600">Select a focus area to highlight it in the workflow.</p>
            <div className="space-y-4">
              {content.areas.map((area, index) => (
                <article key={area.label} className={`rounded-2xl border p-5 sm:p-6 ${activeIndex === index ? "border-emerald-700 bg-emerald-50" : "border-slate-200 bg-white"}`}>
                  <h3 className="mb-3 text-xl leading-snug text-slate-900 sm:text-2xl">
                    <button
                      type="button"
                      aria-pressed={activeIndex === index}
                      aria-controls={diagramId}
                      onClick={() => setActiveIndex(index)}
                      className="flex min-h-11 w-full items-start gap-3 rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
                    >
                      <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-sm font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
                      <span className="min-w-0 break-words">{area.title}</span>
                    </button>
                  </h3>
                  <p className="mb-0 text-base leading-relaxed text-slate-600">{area.description}</p>
                </article>
              ))}
            </div>
          </div>

          <figure id={diagramId} className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:sticky lg:top-8">
            <figcaption className="mb-5">
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Connected work areas</span>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-slate-600">Workflow illustration. Select the numbered headings to explore each area.</p>
            </figcaption>
            <svg viewBox="0 0 440 430" className="block h-auto w-full" role="img" aria-labelledby={`${diagramId}-title ${diagramId}-description`}>
              <title id={`${diagramId}-title`}>{`${content.title}: workflow illustration`}</title>
              <desc id={`${diagramId}-description`}>{`${content.areas.map(area => area.label).join(" → ")}. Highlighted area: ${content.areas[activeIndex].label}.`}</desc>
              <path d="M220 80 V350" fill="none" stroke="#a7f3d0" strokeWidth="4" />
              {content.areas.map((area, index) => {
                const selected = activeIndex === index;
                const y = 20 + index * 104;
                return (
                  <g key={area.label}>
                    <rect x="12" y={y} width="416" height="80" rx="16" fill={selected ? "#065f46" : "#ffffff"} stroke={selected ? "#065f46" : "#cbd5e1"} strokeWidth="2" />
                    <circle cx="48" cy={y + 40} r="19" fill={selected ? "#d1fae5" : "#ecfdf5"} />
                    <text x="48" y={y + 46} textAnchor="middle" fontSize="17" fontWeight="600" fill="#065f46">{String(index + 1).padStart(2, "0")}</text>
                    <text x="82" y={y + 47} fontSize="23" fontWeight={selected ? "600" : "400"} fill={selected ? "#ffffff" : "#0f172a"}>{area.label}</text>
                  </g>
                );
              })}
            </svg>
            <p className="mb-0 mt-3 text-base font-medium leading-relaxed text-emerald-900" aria-live="polite" aria-atomic="true">Focus: {content.areas[activeIndex].label}</p>
          </figure>
        </div>

        <div className="mt-10 text-center">
          <a href="/contact/" className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-base font-medium leading-normal text-white transition-colors hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 motion-reduce:transition-none">{content.cta}<span aria-hidden="true" className="ml-2">→</span></a>
        </div>
      </div>
    </section>
  );
};
