"use client";
import React from 'react';
import type { HtmlExpertiseContent } from '@/content/htmlSections';

export const HtmlContent = ({ content }: { content: HtmlExpertiseContent }) => {
  return (
    <section data-wpfe-section="" data-component="html-expertise" className="w-full bg-transparent py-20 px-5 box-border font-['Inter',sans-serif]">
      {/* SCOPED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .html-expertise-container {
            max-width: 1200px;
            margin: 0 auto;
            color: #374151;
            display: grid;
            grid-template-columns: 1fr;
            gap: 60px;
        }

        @media (min-width: 1024px) {
            .html-expertise-container {
                grid-template-columns: 1fr 1fr;
                align-items: start;
            }
        }

        /* --- HEADING AREA --- */
        .html-heading-wrapper {
            grid-column: 1 / -1;
            text-align: center;
            margin-bottom: 20px;
        }

        .html-heading-wrapper h2 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            color: #000000;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 20px;
        }

        .html-highlight {
            color: #10b981;
            position: relative;
            display: inline-block;
        }

        .html-heading-wrapper p {
            font-size: 1.25rem;
            color: #374151;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }

        /* --- LEFT COLUMN: CONTENT --- */
        .html-content-col {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .html-section-block {
            position: relative;
        }

        .html-section-block h3 {
            font-size: 1.5rem;
            font-weight: 800;
            color: #000000;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .html-section-block h3::before {
            content: "";
            display: block;
            width: 8px;
            height: 24px;
            background-color: #207DE9;
            border-radius: 4px;
        }

        .html-section-block p {
            font-size: 1.1rem;
            color: #374151;
            line-height: 1.8;
            margin-bottom: 16px;
        }

        /* --- RIGHT COLUMN: VISUAL --- */
        .html-visual-col {
            position: sticky;
            top: 100px;
            display: flex;
            justify-content: center;
        }

        .html-gif-wrapper {
            width: 100%;
            max-width: 500px;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(32, 125, 233, 0.15);
            background-color: #0E1623;
            position: relative;
        }

        /* Fake Window Header */
        .html-gif-wrapper::before {
            content: "• • •";
            display: block;
            background-color: #1a2333;
            color: #475569;
            font-size: 24px;
            line-height: 10px;
            padding: 12px 16px;
            letter-spacing: 2px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .html-gif-wrapper img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            /* Filtering to make standard GIFs look better on dark mode */
            filter: contrast(1.1) brightness(0.9);
        }

      `}} />

      <div data-wpfe-container="content" className="html-expertise-container">
        
        {/* HEADER FULL WIDTH */}
        <div className="html-heading-wrapper">
          <h2>{content.titleLead} <span className="html-highlight">{content.titleAccent}</span></h2>
          <p>{content.intro}</p>
        </div>

        {/* LEFT COLUMN: EXPERTISE CONTENT */}
        <div className="html-content-col">
          
          <div className="html-section-block">
            <h3>{content.foundationTitle}</h3>
            <p>{content.foundationIntro[0]}<em>{content.foundationIntro[1]}</em>{content.foundationIntro[2]}</p>
            <p>{content.foundationDetail[0]}<code>{content.foundationCode[0]}</code>{content.foundationDetail[1]}<code>{content.foundationCode[1]}</code>{content.foundationDetail[2]}<code>{content.foundationCode[2]}</code>{content.foundationDetail[3]}<code>{content.foundationCode[3]}</code>{content.foundationDetail[4]}</p>
          </div>

          <div className="html-section-block">
            <h3>{content.accessibilityTitle}</h3>
            <p>{content.accessibilityBody[0]}</p>
            <p>{content.accessibilityBody[1]}</p>
          </div>

          <div className="html-section-block">
            <h3>{content.deliveryTitle}</h3>
            <p>{content.deliveryBody[0]}</p>
            <p>{content.deliveryBody[1]}</p>
          </div>

          <div className="html-section-block">
            <h3>{content.platformTitle}</h3>
            <p>{content.platformBody[0]}<code>{content.platformBody[1]}</code>{content.platformBody[2]}</p>
          </div>

        </div>

        {/* RIGHT COLUMN: STICKY VISUAL */}
        <div className="html-visual-col">
          <div className="html-gif-wrapper">
            {/* Using a high-quality coding GIF representation */}
            <img 
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" 
              alt={content.visualAlt}
            />
          </div>
        </div>

      </div>
    </section>
  );
};