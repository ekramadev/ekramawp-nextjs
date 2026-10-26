"use client";
import React from 'react';
import type { HtmlCapabilitiesContent } from '@/content/htmlSections';

export const HtmlSecondContent = ({ content }: { content: HtmlCapabilitiesContent }) => {
  return (
    <section data-component="html-capabilities" className="w-full bg-transparent py-24 px-5 box-border font-['Inter',sans-serif]">
      {/* SCOPED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .html-grid-container {
            max-width: 1400px;
            margin: 0 auto;
            color: #374151;
            display: flex;
            flex-direction: column;
            gap: 60px;
        }

        /* --- HEADING AREA --- */
        .html-heading-top {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }

        .html-heading-top h2 {
            font-size: clamp(2.5rem, 4vw, 3.8rem);
            font-weight: 900;
            color: #000000;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 20px;
        }

        .html-highlight-text {
            color: #10b981;
        }

        .html-heading-top p {
            font-size: 1.15rem;
            color: #374151;
            line-height: 1.7;
            margin: 0;
        }

        /* --- 3-COLUMN LAYOUT STRUCTURE --- */
        .html-features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            width: 100%;
            align-items: start;
        }

        @media (min-width: 768px) {
            .html-features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .html-features-grid {
                /* Top row: 3 columns. Bottom row handled via explicit placement */
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* --- FEATURE BLOCKS --- */
        .html-feature-item {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 24px;
            background: transparent;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s ease, background 0.3s ease;
            height: 100%;
        }

        .html-feature-item:hover {
            background: transparent;
            transform: translateY(-4px);
            border-color: rgba(32, 125, 233, 0.3);
        }

        /* Icons */
        .html-feature-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            /* Subtle gradients for icons based on the image style */
            background: linear-gradient(135deg, rgba(32, 125, 233, 0.2), rgba(32, 125, 233, 0.05));
            border: 1px solid rgba(32, 125, 233, 0.2);
            color: #207DE9;
        }

        .html-feature-item h3 {
            font-size: 1.4rem;
            font-weight: 800;
            color: #000000;
            margin: 0;
            line-height: 1.2;
            letter-spacing: -0.01em;
        }

        .html-feature-item p {
            font-size: 1rem;
            color: #374151;
            line-height: 1.7;
            margin: 0;
            font-weight: 400;
        }

        /* --- BOTTOM ROW PLACEMENT --- */
        /* Forces the 4th item to stay in column 1 */
        .html-item-4 {
            grid-column: 1;
        }

        /* The GIF takes up columns 2 and 3 on the second row */
        .html-gif-span {
            grid-column: 1 / -1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        @media (min-width: 1024px) {
            .html-gif-span {
                grid-column: 2 / span 2;
                margin-top: -20px; /* Slight visual adjustment to align nicely */
            }
        }

        .html-gif-display {
            width: 100%;
            height: 100%;
            min-height: 250px;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            background-color: #0E1623;
            position: relative;
            display: flex;
            flex-direction: column;
        }

        /* Fake Code Editor Header */
        .html-gif-display::before {
            content: "● ● ● \A0\A0\A0 ${content.editorFilename}";
            white-space: pre;
            display: block;
            background-color: #1a2333;
            color: #cbd5e1;
            font-size: 13px;
            font-weight: 600;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .html-gif-display img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: top center;
            flex-grow: 1;
            filter: contrast(1.1) brightness(0.9);
        }

      `}} />

      <div className="html-grid-container">
        
        {/* TOP HEADING */}
        <div className="html-heading-top">
          <h2>{content.titleLead} <span className="html-highlight-text">{content.titleAccent}</span></h2>
          <p>{content.intro}</p>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="html-features-grid">
          
          {/* Row 1, Column 1 */}
          <div className="html-feature-item">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3>{content.features[0].title}</h3>
            <p>{content.features[0].description}</p>
          </div>

          {/* Row 1, Column 2 */}
          <div className="html-feature-item">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3>{content.features[1].title}</h3>
            <p>{content.features[1].description}</p>
          </div>

          {/* Row 1, Column 3 */}
          <div className="html-feature-item">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>{content.features[2].title}</h3>
            <p>{content.features[2].beforeCode}<code>{content.features[2].firstCode}</code>{content.features[2].betweenCode}<code>{content.features[2].secondCode}</code>{content.features[2].afterCode}</p>
          </div>

          {/* Row 2, Column 1 */}
          <div className="html-feature-item html-item-4">
            <div className="html-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>{content.features[3].title}</h3>
            <p>{content.features[3].description}</p>
          </div>

          {/* Row 2, Columns 2 & 3: THE GIF */}
          <div className="html-gif-span">
            <div className="html-gif-display">
              <img 
                src="https://admin.wpfedev.com/wp-content/uploads/2026/02/GIFHTML.gif" 
                alt={content.visualAlt}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};