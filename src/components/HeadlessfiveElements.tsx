"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import type { LegacyPageCopy } from '@/content/legacyDelivery';

// --- DATA DICTIONARY ---
// Add new pages here as keys (e.g., "/new-page-url")
export const HeadlessfiveElements = ({ content }: { content: LegacyPageCopy }) => {
const TABS_DATA: Record<string, any> = {
  "/headless-wordpress-front-end": () => ({
    heading: content.heading,
    subheading: content.subheading,
    tabs: [
      {
        title: content.tabs[0].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        ),
        content: (
          <>
            <p>
              {content.tabs[0].segments[0]}
            </p>
            <p>
              {content.tabs[0].segments[1]}
            </p>
            <ul>
              <li><strong>{content.tabs[0].segments[2]}</strong> {content.tabs[0].segments[3]}</li>
              <li><strong>{content.tabs[0].segments[4]}</strong> {content.tabs[0].segments[5]}</li>
              <li><strong>{content.tabs[0].segments[6]}</strong> {content.tabs[0].segments[7]}</li>
            </ul>
            <p>
              {content.tabs[0].segments[8]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[1].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        ),
        content: (
          <>
            <p>
              {content.tabs[1].segments[0]}
            </p>
            <p>
              {content.tabs[1].segments[1]}
            </p>
            <ul>
              <li><strong>{content.tabs[1].segments[2]}</strong> {content.tabs[1].segments[3]}</li>
              <li><strong>{content.tabs[1].segments[4]}</strong> {content.tabs[1].segments[5]}</li>
              <li><strong>{content.tabs[1].segments[6]}</strong> {content.tabs[1].segments[7]}</li>
            </ul>
            <p>
              {content.tabs[1].segments[8]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[2].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        ),
        content: (
          <>
            <p>
              {content.tabs[2].segments[0]}
            </p>
            <p>
              {content.tabs[2].segments[1]}
            </p>
            <ul>
              <li><strong>{content.tabs[2].segments[2]}</strong> {content.tabs[2].segments[3]}</li>
              <li><strong>{content.tabs[2].segments[4]}</strong> {content.tabs[2].segments[5]}</li>
              <li><strong>{content.tabs[2].segments[6]}</strong> {content.tabs[2].segments[7]}</li>
            </ul>
            <p>
              {content.tabs[2].segments[8]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[3].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        ),
        content: (
          <>
            <p>
              {content.tabs[3].segments[0]}
            </p>
            <p>
              {content.tabs[3].segments[1]}
            </p>
            <ul>
              <li><strong>{content.tabs[3].segments[2]}</strong> {content.tabs[3].segments[3]}</li>
              <li><strong>{content.tabs[3].segments[4]}</strong> {content.tabs[3].segments[5]} <code>{content.tabs[3].segments[6]}</code> {content.tabs[3].segments[7]} <code>{content.tabs[3].segments[8]}</code> {content.tabs[3].segments[9]}</li>
              <li><strong>{content.tabs[3].segments[10]}</strong> {content.tabs[3].segments[11]}</li>
            </ul>
            <p>
              {content.tabs[3].segments[12]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[4].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        ),
        content: (
          <>
            <p>
              {content.tabs[4].segments[0]}
            </p>
            <p>
              {content.tabs[4].segments[1]}
            </p>
            <ul>
              <li><strong>{content.tabs[4].segments[2]}</strong> {content.tabs[4].segments[3]}</li>
              <li><strong>{content.tabs[4].segments[4]}</strong> {content.tabs[4].segments[5]}</li>
              <li><strong>{content.tabs[4].segments[6]}</strong> {content.tabs[4].segments[7]}</li>
            </ul>
            <p>
              {content.tabs[4].segments[8]}
            </p>
          </>
        )
      }
    ]
  }),
  "/wep-app-front-end": () => ({
    heading: content.heading,
    subheading: content.subheading,
    tabs: [
      {
        title: content.tabs[0].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        ),
        content: (
          <>
            <h3>{content.tabs[0].segments[0]}</h3>
            <p>
              {content.tabs[0].segments[1]}
            </p>
            <p>
              {content.tabs[0].segments[2]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[1].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        ),
        content: (
          <>
            <h3>{content.tabs[1].segments[0]}</h3>
            <p>
              {content.tabs[1].segments[1]}
            </p>
            <ul>
              <li><strong>{content.tabs[1].segments[2]}</strong> {content.tabs[1].segments[3]}</li>
              <li><strong>{content.tabs[1].segments[4]}</strong> {content.tabs[1].segments[5]}</li>
              <li><strong>{content.tabs[1].segments[6]}</strong> {content.tabs[1].segments[7]}</li>
            </ul>
          </>
        )
      },
      {
        title: content.tabs[2].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        ),
        content: (
          <>
            <h3>{content.tabs[2].segments[0]}</h3>
            <p>
              {content.tabs[2].segments[1]}
            </p>
            <p>
              {content.tabs[2].segments[2]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[3].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        ),
        content: (
          <>
            <h3>{content.tabs[3].segments[0]}</h3>
            <p>
              {content.tabs[3].segments[1]}
            </p>
            <p>
              {content.tabs[3].segments[2]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[4].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h4l2-9 5 18 3-10 5 1"></path>
          </svg>
        ),
        content: (
          <>
            <h3>{content.tabs[4].segments[0]}</h3>
            <p>
              {content.tabs[4].segments[1]}
            </p>
            <p>
              {content.tabs[4].segments[2]}
            </p>
          </>
        )
      },
      {
        title: content.tabs[5].title,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        ),
        content: (
          <>
            <h3>{content.tabs[5].segments[0]}</h3>
            <p>
              {content.tabs[5].segments[1]}
            </p>
            <ul>
              <li><strong>{content.tabs[5].segments[2]}</strong> {content.tabs[5].segments[3]}</li>
              <li><strong>{content.tabs[5].segments[4]}</strong> {content.tabs[5].segments[5]}</li>
              <li><strong>{content.tabs[5].segments[6]}</strong> {content.tabs[5].segments[7]}</li>
            </ul>
          </>
        )
      }
    ]
  })
};


// --- COMPONENT ---
  const pathname = usePathname() || "/";
  // Normalize path by stripping trailing slash to ensure it matches dictionary keys
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  // Find data for current path, fallback to headless data if route not found
  const pageData = (TABS_DATA[normalizedPath] || TABS_DATA["/headless-wordpress-front-end"])();

  const { heading, subheading, tabs } = pageData;
  const [activeTab, setActiveTab] = useState(0);

  // Logic to isolate the last word
  const words = heading.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  if (!tabs || tabs.length === 0) return null;

  return (
    <section data-wpfe-section="" id="ek-headless-tabs" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">

        <div className="king-heading-wrap text-center mb-[50px]">
          <h2 className="text-black font-bold">
            {firstPart} <span className="text-brand-emerald">{lastWord}</span>
          </h2>

          {/* 2. Render the subheading here - updated to slate gray */}
          {subheading && (
            <p className="text-gray-700 max-w-2xl mx-auto mt-4">
              {subheading}
            </p>
          )}
        </div>

        <div className="fx-wrapper relative flex w-full justify-between items-start gap-[50px] text-left max-[968px]:flex-col max-[968px]:gap-10">

          <div
            className="fx-tabs z-20 flex flex-col gap-4 basis-[300px] shrink-0 grow-0 max-[968px]:w-full max-[968px]:flex-row max-[968px]:overflow-x-auto max-[968px]:overflow-y-hidden max-[968px]:py-[10px] max-[968px]:justify-start max-[968px]:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
          >
            {tabs.map((tab: any, index: number) => (
              <button
                key={index}
                // Updated inactive/active text colors for light theme
                className={`fx-tab flex items-center gap-[15px] py-[10px] cursor-pointer transition-all duration-300 ease-in-out bg-transparent border-0 select-none text-left hover:text-brand-emerald max-[968px]:flex-none max-[968px]:p-0 ${activeTab === index ? 'text-brand-emerald font-bold' : 'text-gray-700'
                  }`}
                onClick={() => setActiveTab(index)}
                aria-selected={activeTab === index}
                role="tab"
                type="button"
              >
                <div
                  // Icon color always Emerald for branding, scaled slightly on active
                  className={`fx-icon flex items-center justify-center text-brand-emerald shrink-0 transition-all duration-300 ease-in-out ${activeTab === index ? 'scale-110' : 'scale-100'
                    }`}
                >
                  {typeof tab.icon === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: tab.icon }} />
                  ) : (
                    tab.icon
                  )}
                </div>
                <span className="text-[20px] max-[968px]:text-base max-[968px]:whitespace-nowrap">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          <div className="fx-content-area relative flex-1 overflow-visible max-[968px]:w-full">
            {tabs.map((tab: any, index: number) => (
              <div
                key={index}
                className={`fx-panel w-full h-full p-0 ${activeTab === index ? 'block animate-[fadeIn_0.4s_ease-out]' : 'hidden'
                  }`}
                role="tabpanel"
              >
                {/* Tailwind specific typography resets applied here:
                  - h3: dark gray, bold 
                  - p: slate gray 
                  - ul: bulleted list inside the content area
                  - strong: dark gray bold text 
                */}
                <div className="fx-text-col [&_h3]:mb-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-black [&_p]:mb-5 [&_p]:text-[1.05rem] [&_p]:font-normal [&_p]:leading-[1.8] [&_p]:text-gray-700 [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:p-0 [&_ul]:text-gray-700 [&_li]:mb-3 [&_li]:text-[1.05rem] [&_li]:leading-[1.6] [&_strong]:font-bold [&_strong]:text-gray-700 [&_code]:text-gray-700 [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:rounded">

                  {/* Fallback rendering in case h3 title isn't included in raw strings */}
                  {typeof tab.content === 'string' && !tab.content.includes('<h3') && (
                    <h3 className="mb-6 text-black font-bold">{tab.title}</h3>
                  )}
                  {typeof tab.content !== 'string' &&
                    !React.Children.toArray(tab.content.props.children).some(
                      child => (child as any).type === 'h3'
                    ) && <h3 className="mb-6 text-black font-bold">{tab.title}</h3>}

                  {typeof tab.content === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                  ) : (
                    tab.content
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
