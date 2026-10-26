import React, { useState } from 'react';
import type { PentagonGrowthContent } from '@/content/decisionSections';

export const PentagonGrowthEngine = ({ content }: { content: PentagonGrowthContent }) => {
  const [activeTab, setActiveTab] = useState('p-1');

  const tabsData = [
    {
      id: 'p-1',
      title: content.tabs[0].title,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      heading: content.tabs[0].heading,
      desc: content.tabs[0].desc,
      list: content.tabs[0].list,
      imageAlt: content.tabs[0].imageAlt
    },
    {
      id: 'p-2',
      title: content.tabs[1].title,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png',
      heading: content.tabs[1].heading,
      desc: content.tabs[1].desc,
      list: content.tabs[1].list,
      imageAlt: content.tabs[1].imageAlt
    },
    {
      id: 'p-3',
      title: content.tabs[2].title,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      heading: content.tabs[2].heading,
      desc: content.tabs[2].desc,
      list: content.tabs[2].list,
      imageAlt: content.tabs[2].imageAlt
    },
    {
      id: 'p-4',
      title: content.tabs[3].title,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2024/01/LeadManagerFX.png',
      heading: content.tabs[3].heading,
      desc: content.tabs[3].desc,
      list: content.tabs[3].list,
      imageAlt: content.tabs[3].imageAlt
    },
    {
      id: 'p-5',
      title: content.tabs[4].title,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      imgSrc: 'https://www.webfx.com/wp-content/uploads/2023/12/AdTechFX.png',
      heading: content.tabs[4].heading,
      desc: content.tabs[4].desc,
      list: content.tabs[4].list,
      imageAlt: content.tabs[4].imageAlt
    }
  ];

  const activeData = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <section data-component="pentagon-growth" className="py-16 px-6 lg:px-10  text-gray-700 bg-transparent overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- 1. HEADING --- */}
        <div className="text-center mb-10 lg:mb-14">
          <h1>
            {content.titleLead} <span className="text-emerald-500">{content.titleAccent}</span>
          </h1>
          <p className="text-gray-700 max-w-[700px] mx-auto text-base lg:text-lg opacity-90 leading-relaxed">
    {content.intro}
  </p>
        </div>

        {/* --- 2. MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_0.8fr_1.7fr] gap-6 lg:gap-10 items-center">
          
          {/* COLUMN A: TABS */}
          <div className="flex flex-row lg:flex-col gap-1 lg:gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide snap-x">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 lg:gap-4 px-2.5 lg:px-6 py-3 lg:py-4 rounded-full lg:rounded-lg transition-all duration-300 shrink-0 snap-start text-left border-none outline-none w-auto lg:w-full ${
                    isActive 
                      ? 'text-brand-emerald opacity-100'
                      : 'text-gray-700 opacity-40 hover:opacity-100 hover:text-brand-emerald'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0" />
                  )}

                  <div className="shrink-0 w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
                    {tab.icon}
                  </div>
<span className=" text-base lg:text-[19px] whitespace-nowrap">                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* COLUMN B: IMAGE */}
          <div className="flex justify-center lg:justify-start items-center h-[280px] lg:h-auto">
            <img 
              key={`${activeTab}-img`}
              src={activeData.imgSrc} 
              alt={activeData.imageAlt}
              className="w-[280px] lg:w-[95%] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-500" 
            />
          </div>

          {/* COLUMN C: TEXT CONTENT */}
          <div className="text-left">
            <div key={`${activeTab}-text`} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="mb-4 text-black">
                {activeData.heading}
              </h3>
              <p className="mb-6 opacity-90 text-gray-700">
                {activeData.desc}
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {activeData.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
