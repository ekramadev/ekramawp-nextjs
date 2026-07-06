"use client";
import React, { useState } from "react";
import Image from "next/image";

const TABS = [
  { 
    id: "headless", 
    label: "Headless architecture", 
    title: "Decoupled Data Ecosystems",
    image: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Eliminate monolithic security vulnerabilities by fully isolating your frontend from the backend database and CMS.",
      "Distribute static assets globally via edge networks to ensure instant data retrieval regardless of user location.",
      "Empower marketing teams to publish seamlessly using Sanity or Contentful without requiring developer intervention.",
      "Future-proof your stack by allowing backend migrations without ever touching the user-facing interface."
    ]
  },
  { 
    id: "performance", 
    label: "Performance optimization", 
    title: "Sub-Second Rendering",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Aggressively optimize Core Web Vitals, ensuring Largest Contentful Paint (LCP) triggers in under 1.2 seconds.",
      "Implement advanced code-splitting and dynamic imports to drastically reduce initial JavaScript payload sizes.",
      "Utilize Incremental Static Regeneration (ISR) to serve lightning-fast static pages that update data in the background.",
      "Optimize and format all media assets to modern WebP/AVIF standards with lazy-loading intersecting observers."
    ]
  },
  { 
    id: "systems", 
    label: "Design systems", 
    title: "Atomic Component Libraries",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Construct strictly typed, modular UI libraries using React and TypeScript to eliminate redundant code.",
      "Implement Storybook environments to document components in isolation for rapid scaling and team onboarding.",
      "Enforce strict design token integration to ensure brand consistency across every digital touchpoint.",
      "Reduce QA testing cycles by reusing pre-tested, accessible, and highly resilient component blocks."
    ]
  },
  { 
    id: "uiux", 
    label: "Interactive experiences", 
    title: "Physics-Based UI/UX",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Integrate Framer Motion to craft fluid, physics-based animations that guide the user journey intuitively.",
      "Engineer complex micro-interactions that provide immediate feedback without blocking the main execution thread.",
      "Maintain strict 60fps animation performance on mobile devices using hardware-accelerated CSS transforms.",
      "Ensure all dynamic interactions remain fully WCAG compliant with respectful reduced-motion fallbacks."
    ]
  },
  {
    id: "seo",
    label: "SEO architecture",
    title: "Programmatic Search Visibility",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Leverage Next.js Server-Side Rendering (SSR) to deliver fully populated HTML directly to search engine crawlers.",
      "Automate dynamic schema markup generation for articles, products, and breadcrumbs to win rich snippets.",
      "Engineer dynamic sitemap generation and canonical URL routing to prevent duplicate content penalties.",
      "Optimize semantic HTML5 structure and heading hierarchies to maximize accessibility and crawl budgets."
    ]
  },
  {
    id: "edge",
    label: "Edge computing",
    title: "Global Middleware Logic",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Execute routing, A/B testing, and authentication directly at the CDN edge to eliminate server round-trips.",
      "Deliver hyper-personalized content based on geolocation in single-digit milliseconds.",
      "Protect your application with edge-level rate limiting and bot mitigation before traffic hits your primary servers.",
      "Reduce cloud infrastructure costs by offloading heavy computational logic to distributed edge networks."
    ]
  },
  {
    id: "state",
    label: "State management",
    title: "Predictable Data Flow",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    bullets: [
      "Implement Zustand or Redux Toolkit for clean, predictable, and heavily optimized global state trees.",
      "Utilize React Query for robust server-state management, automated caching, and background data synchronization.",
      "Eliminate prop-drilling in deep component trees using strictly scoped React Context providers.",
      "Ensure seamless offline experiences and optimistic UI updates for instant perceived performance."
    ]
  },
  {
    id: "api",
    label: "API orchestration",
    title: "Seamless Integrations",
    image:"https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp", 
    bullets: [
      "Construct strongly typed GraphQL or REST API clients to ensure data consistency between the client and server.",
      "Orchestrate complex third-party webhooks (Stripe, Algolia, SendGrid) securely via Next.js server actions.",
      "Implement exponential backoff and retry logic for highly resilient network request handling.",
      "Secure all API routes with strict CORS policies, JWT validation, and environment variable encryption."
    ]
  }
];

export const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("headless");

  const currentTabContent = TABS.find((tab) => tab.id === activeTab) || TABS[0];

  return (
    <section className="w-full py-24 md:py-32 bg-[#06080c] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        
        {/* --- MINIMALIST HEADER BAR --- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-10 mb-16 lg:mb-20 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase block mb-3">
              Capabilities Matrix
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-none m-0">
              I Engineer Digital Growth
            </h1>
          </div>
          <p className="text-white/50 text-[16px] md:text-[18px] max-w-[420px] font-light leading-relaxed m-0">
            Deploying resilient, hyper-optimized full-stack infrastructures built on modern web frameworks.
          </p>
        </div>

        {/* --- CORE ASYMMETRIC GRID WORKSPACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* LEFT SIDE: VERTICAL TRACK MENU (Fixes cutoff bugs) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col border-l border-white/10 space-y-2 w-full">
            {TABS.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group text-left py-3.5 pl-6 text-[16px] md:text-[18px] font-medium tracking-tight transition-all duration-300 relative outline-none border-none bg-transparent w-full ${
                    isActive 
                      ? "text-white font-semibold" 
                      : "text-white/30 hover:text-white/70"
                  }`}
                >
                  {/* Shopify Marker Line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-400" />
                  )}
                  
                  <span className="font-mono text-xs mr-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: INTERACTIVE DATA OUTPUT */}
          <div className="col-span-1 lg:col-span-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start animate-in fade-in duration-300">
            
            {/* Descriptive Content */}
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-white">
                {currentTabContent.title}
              </h2>
              
              <ul className="flex flex-col gap-6 list-none p-0 m-0 w-full">
                {currentTabContent.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 w-full">
                    <span className="text-emerald-400 font-medium select-none mt-0.5 text-[15px]">
                      —
                    </span>
                    <p className="text-white/60 text-[15px] leading-relaxed m-0 font-light">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Completely Raw, Borderless Image Frame */}
            <div className="relative w-full aspect-[16/11] lg:aspect-[4/3]">
              <Image 
                src={currentTabContent.image}
                alt={currentTabContent.label} 
                fill
                unoptimized
                className="object-contain opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};