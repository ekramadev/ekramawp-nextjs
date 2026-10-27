"use client";
import React from 'react';
import type { HtmlCheatsheetContent } from '@/content/serviceShowcases';

export const HtmlCheatsheet = ({ content }: { content: HtmlCheatsheetContent }) => {
  return (
    <section data-wpfe-section="" data-component="html-cheatsheet" className="w-full bg-transparent py-24 px-5 box-border font-['Inter',sans-serif]">
      {/* SCOPED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cheatsheet-container {
            max-width: 1400px;
            margin: 0 auto;
            color: #374151;
            display: flex;
            flex-direction: column;
            gap: 60px;
        }

        /* --- HEADING AREA --- */
        .cheatsheet-heading-wrap {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }

        .cheatsheet-heading-wrap h2 {
            font-size: clamp(2.5rem, 4vw, 3.8rem);
            font-weight: 900;
            color: #000000;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 20px;
        }

        .cheatsheet-highlight {
            color: #10b981;
        }

        .cheatsheet-heading-wrap p {
            font-size: 1.15rem;
            color: #374151;
            line-height: 1.7;
            margin: 0;
        }

        /* --- SECTION HEADERS --- */
        .cheatsheet-section {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .cheatsheet-section-header h3 {
            font-size: 1.8rem;
            font-weight: 800;
            color: #000000;
            margin-bottom: 12px;
            letter-spacing: -0.02em;
        }

        .cheatsheet-section-header p {
            font-size: 1.05rem;
            color: #374151;
            line-height: 1.6;
            margin: 0;
            max-width: 800px;
        }

        /* --- HORIZONTAL FLEX CARDS --- */
        .tags-horizontal-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .tag-card {
            display: flex;
            align-items: center;
            gap: 16px;
            background: transparent;
            border: 1px solid rgba(16, 185, 129, 0.25);
            padding: 14px 24px;
            border-radius: 50px; /* Creates a smooth pill shape */
            transition: all 0.2s ease;
            flex: 0 1 auto; /* Allows them to fit their content perfectly */
        }

        .tag-card:hover {
            background: transparent;
            border-color: rgba(16, 185, 129, 0.55);
            transform: translateY(-2px);
        }

        .tag-name {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            color: #10b981;
            font-weight: 800;
            font-size: 1.15rem;
            letter-spacing: -0.5px;
        }

        .tag-desc {
            color: #374151;
            font-size: 1rem;
            font-weight: 400;
            white-space: nowrap; /* Keeps text horizontal inside the card */
        }

        /* Mobile specific adjustments */
        @media (max-width: 600px) {
            .tag-card {
                width: 100%;
                justify-content: space-between;
                border-radius: 12px;
            }
            .tag-desc {
                white-space: normal;
                text-align: right;
            }
        }
      `}} />

      <div data-wpfe-container="content" className="cheatsheet-container">
        
        {/* HEADER */}
        <div className="cheatsheet-heading-wrap">
          <h2>{content.titleLead} <span className="cheatsheet-highlight">{content.titleAccent}</span></h2>
          <p>
            {content.intro}
          </p>
        </div>

        {/* INLINE ELEMENTS SECTION */}
        <div className="cheatsheet-section">
          <div className="cheatsheet-section-header">
            <h3>{content.firstTitle}</h3>
            <p>
              {content.firstIntro}
            </p>
          </div>
          
          <div className="tags-horizontal-grid">
            {content.firstItems.map((item, index) => (
              <div className="tag-card" key={index}>
                <span className="tag-name">{item.tag}</span>
                <span className="tag-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-emerald-500/20 my-4" />

        {/* BLOCK ELEMENTS SECTION */}
        <div className="cheatsheet-section">
          <div className="cheatsheet-section-header">
            <h3>{content.secondTitle}</h3>
            <p>
              {content.secondIntro}
            </p>
          </div>
          
          <div className="tags-horizontal-grid">
            {content.secondItems.map((item, index) => (
              <div className="tag-card" key={index}>
                <span className="tag-name">{item.tag}</span>
                <span className="tag-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
