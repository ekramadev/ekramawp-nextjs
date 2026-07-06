"use client";
import React from 'react';

export const WpHeroVisual = () => {
  return (
    <section
      id="ek-ai-hero"
      className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '50px 50px'
      }}
    >
      {/* External Resources */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center flex flex-col lg:flex-row gap-[2rem] lg:justify-between w-full box-border">

        {/* FLUID LEFT COLUMN */}
        <div className="flex-[1.2] flex flex-col justify-center lg:pr-[2rem] z-[100] w-full items-center lg:items-start lg:text-left">
          <h1 className="mb-6 text-gray-900 font-bold">
            Be the Only Answer Buyers Find on ChatGPT
          </h1>

          <p className="text-[1.1rem] text-gray-600 mb-8 max-w-[100%] lg:max-w-[95%] leading-[1.6]">
            You will earn more commissions when your name becomes the primary source for AI-driven property searches.
          </p>

          <form className="bg-white p-2.5 rounded-[14px] flex shadow-[0_15px_40px_rgba(0,0,0,0.08)] max-w-[500px] w-full border border-gray-200">
            <input
              placeholder="Enter your website URL..."
              type="url"
              required
              className="flex-1 bg-transparent border-none py-3 px-5 outline-none text-base text-gray-900 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-[#10B981] text-white font-bold border-none px-8 rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[#059669] shadow-md shadow-emerald-500/20"
            >
              Analyze Now
            </button>
          </form>
        </div>

        {/* FLUID RIGHT COLUMN */}
        <div className="flex-1 relative flex justify-center items-center w-full lg:scale-110 scale-[0.65] lg:mt-10 mt-6 lg:-translate-x-24">
          <svg viewBox="-120 -50 1100 850" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
            <defs>
              <linearGradient id="seg-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
              <linearGradient id="seg-teal" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4DC1B9" />
                <stop offset="100%" stopColor="#26A69A" />
              </linearGradient>
              <linearGradient id="seg-green" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#41D48C" />
                <stop offset="100%" stopColor="#66BB6A" />
              </linearGradient>
              <linearGradient id="seg-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#AF3FAC" />
                <stop offset="100%" stopColor="#D88AD6" />
              </linearGradient>

              <path id="text-path-tl" d="M 385 350 A 165 165 0 0 1 550 185" />
              <path id="text-path-tr" d="M 550 185 A 165 165 0 0 1 715 350" />
              <path id="text-path-br" d="M 550 515 A 165 165 0 0 0 715 350" />
              <path id="text-path-bl" d="M 385 350 A 165 165 0 0 0 550 515" />
            </defs>

            {/* --- FIXED: Circling lines converted to Black (#000000) --- */}
            <g className="animate-[spin_60s_linear_infinite]" style={{ transformOrigin: '550px 350px' }}>
              <circle cx="550" cy="350" r="350" fill="none" stroke="#50C878" strokeWidth="1.5" strokeDasharray="10 15" opacity="1" />            </g>
            <g className="animate-[spin_50s_linear_infinite_reverse]" style={{ transformOrigin: '550px 350px' }}>
              <circle cx="550" cy="350" r="375" fill="none" stroke="#50C878" strokeWidth="1.5" strokeDasharray="20 20" opacity="1" />            </g>
            <g className="animate-[spin_80s_linear_infinite]" style={{ transformOrigin: '550px 350px' }}>
              <circle cx="550" cy="350" r="400" fill="none" stroke="#50C878" strokeWidth="1.5" strokeDasharray="5 10" opacity="1" />            </g>

            {/* Central Hub */}
            <g transform="translate(550, 350)">
              <circle cx="0" cy="0" r="140" fill="transparent" stroke="#50C878" strokeWidth="1" strokeDasharray="5 5" />
              <foreignObject x="-100" y="-80" width="200" height="160">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-gray-900 text-[38px] font-extrabold">WP<span className="text-[#10B981]">FEDEV</span></div>
                  <div className="text-gray-600 font-bold text-[25px]">Architecture</div>
                  <div className="text-[20px] text-[#10B981] font-bold mt-[5px] bg-[#10B981]/10 py-[4px] px-[12px] rounded-[12px]">99.9% Uptime</div>
                </div>
              </foreignObject>
              <g strokeWidth="90" strokeLinecap="round" fill="none">
                <path d="M -162.5 -28.7 A 165 165 0 0 1 -28.7 -162.5" stroke="url(#seg-blue)" />
                <path d="M 28.7 -162.5 A 165 165 0 0 1 162.5 -28.7" stroke="url(#seg-teal)" />
                <path d="M 162.5 28.7 A 165 165 0 0 1 28.7 162.5" stroke="url(#seg-green)" />
                <path d="M -28.7 162.5 A 165 165 0 0 1 -162.5 28.7" stroke="url(#seg-purple)" />
              </g>
            </g>

            <g className="fill-[#FFFFFF] pointer-events-none font-extrabold text-[28px]">
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-tl" startOffset="50%">Frontend</textPath></text>
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-tr" startOffset="50%">Backend</textPath></text>
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-br" startOffset="50%">Database</textPath></text>
              <text dominantBaseline="middle" textAnchor="middle"><textPath href="#text-path-bl" startOffset="50%">DevOps</textPath></text>
            </g>

            {/* PROCESS NODES - FIXED: translateZ(0) and perspective forces hardware acceleration to eliminate font blurriness */}

            {/* 1. Frontend */}
            <foreignObject x="180" y="-10" width="220" height="260" className="overflow-visible group [perspective:1000px]">
              <div className="relative w-[180px] h-[180px] mx-auto mt-[30px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.05)] will-change-transform">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-white border border-gray-200 shadow-md [backface-visibility:hidden] [transform:translateZ(0)]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-white absolute z-[1100] -top-[22px] left-1/2 -translate-x-1/2 shadow-md bg-[#10B981]"><i className="fas fa-laptop-code"></i></div>
                  <p className="text-gray-900 m-0 leading-tight font-bold text-[22px]">Next.js & Tailwind</p>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-[#10B981]/10 border border-[#10B981]/30 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] px-5">
                  <p className="text-gray-900 text-[14px] leading-snug font-medium">Blazing fast UI rendering and scalable utility-first styling.</p>
                </div>
              </div>
            </foreignObject>

            {/* 2. API Layer */}
            <foreignObject x="720" y="-10" width="220" height="260" className="overflow-visible group [perspective:1000px]">
              <div className="relative w-[180px] h-[180px] mx-auto mt-[30px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.05)] will-change-transform">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-white border border-gray-200 shadow-md [backface-visibility:hidden] [transform:translateZ(0)]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-white absolute z-[1100] -top-[22px] left-1/2 -translate-x-1/2 shadow-md bg-[#4DC1B9]"><i className="fas fa-server"></i></div>
                  <p className="text-gray-900 m-0 leading-tight font-bold text-[22px]">GraphQL & Node.js</p>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-[#4DC1B9]/10 border border-[#4DC1B9]/30 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] px-5">
                  <p className="text-gray-900 text-[14px] leading-snug font-medium">Efficient data fetching with a flexible, high-performance backend.</p>
                </div>
              </div>
            </foreignObject>

            {/* 3. Storage */}
            <foreignObject x="815" y="220" width="220" height="260" className="overflow-visible group [perspective:1000px]">
              <div className="relative w-[180px] h-[180px] mx-auto mt-[30px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.05)] will-change-transform">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-white border border-gray-200 shadow-md [backface-visibility:hidden] [transform:translateZ(0)]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-white absolute z-[1100] -top-[22px] left-1/2 -translate-x-1/2 shadow-md bg-[#4DC1B9]"><i className="fas fa-database"></i></div>
                  <p className="text-gray-900 m-0 leading-tight font-bold text-[22px]">PostgreSQL & Redis</p>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-[#4DC1B9]/10 border border-[#4DC1B9]/30 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] px-5">
                  <p className="text-gray-900 text-[14px] leading-snug font-medium">Relational data integrity paired with lightning-fast caching.</p>
                </div>
              </div>
            </foreignObject>

            {/* 4. AI Logic */}
            <foreignObject x="65" y="220" width="220" height="260" className="overflow-visible group [perspective:1000px]">
              <div className="relative w-[180px] h-[180px] mx-auto mt-[30px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.05)] will-change-transform">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-white border border-gray-200 shadow-md [backface-visibility:hidden] [transform:translateZ(0)]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-white absolute z-[1100] -top-[22px] left-1/2 -translate-x-1/2 shadow-md bg-[#5e35b1]"><i className="fas fa-brain"></i></div>
                  <p className="text-gray-900 m-0 leading-tight font-bold text-[22px]">Vercel AI & OpenAI</p>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-[#5e35b1]/10 border border-[#5e35b1]/30 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] px-5">
                  <p className="text-gray-900 text-[14px] leading-snug font-medium">Intelligent processing and natural language generation at scale.</p>
                </div>
              </div>
            </foreignObject>

            {/* 5. Scale */}
            <foreignObject x="720" y="500" width="220" height="260" className="overflow-visible group [perspective:1000px]">
              <div className="relative w-[180px] h-[180px] mx-auto mt-[30px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.05)] will-change-transform">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-white border border-gray-200 shadow-md [backface-visibility:hidden] [transform:translateZ(0)]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-white absolute z-[1100] -top-[22px] left-1/2 -translate-x-1/2 shadow-md bg-[#41D48C]"><i className="fas fa-cloud-upload-alt"></i></div>
                  <p className="text-gray-900 m-0 leading-tight font-bold text-[22px]">Kubernetes & Docker</p>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-[#41D48C]/10 border border-[#41D48C]/30 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] px-5">
                  <p className="text-gray-900 text-[14px] leading-snug font-medium">Containerized deployment for infinite, reliable application scaling.</p>
                </div>
              </div>
            </foreignObject>

            {/* 6. Security */}
            <foreignObject x="180" y="500" width="220" height="260" className="overflow-visible group [perspective:1000px]">
              <div className="relative w-[180px] h-[180px] mx-auto mt-[30px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.05)] will-change-transform">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-white border border-gray-200 shadow-md [backface-visibility:hidden] [transform:translateZ(0)]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-white absolute z-[1100] -top-[22px] left-1/2 -translate-x-1/2 shadow-md bg-[#AF3FAC]"><i className="fas fa-shield-alt"></i></div>
                  <p className="text-gray-900 m-0 leading-tight font-bold text-[22px]">JWT & Auth.js</p>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 rounded-full flex flex-col justify-center items-center text-center box-border bg-[#AF3FAC]/10 border border-[#AF3FAC]/30 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] px-5">
                  <p className="text-gray-900 text-[14px] leading-snug font-medium">Robust authentication and secure, stateless session management.</p>
                </div>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
};