"use client";

import React from 'react';
import type { PageResourcesContent } from '@/content/phaseResources';

export const Fourblockswphead = ({ content }: { content: PageResourcesContent }) => {
  return (
    <section className="fourblocks-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        .fourblocks-wrapper {
            font-family: inherit;
            background-color: transparent; /* Inherits your dark background */
            color: #374151; /* Forces white text */
            line-height: 1.5;
            padding: 60px 20px;
            width: 100%;
            box-sizing: border-box;
        }

        .fourblocks-wrapper * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        /* Layout Container */
        .fourblocks-wrapper .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 50px;
            flex-wrap: wrap;
        }

        /* Left Column: CTA Card & Image */
        .fourblocks-wrapper .sidebar {
            flex: 0 0 320px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .fourblocks-wrapper .team-image {
            width: 100%;
            max-width: 320px;
            z-index: 2;
            position: relative;
            margin-bottom: -30px; /* Pulls the card up under the image */
            display: block;
            border-radius: 12px 12px 0 0;
        }

        .fourblocks-wrapper .cta-card {
            background-color: transparent; /* Dark sleek background */
            border: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
            border-radius: 12px;
            padding: 50px 30px 40px;
            position: relative;
            z-index: 1;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .fourblocks-wrapper .cta-card h2 {
            color: #000000;
            font-size: 28px;
            text-align: center;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .fourblocks-wrapper .cta-card h2 span {
            color: #10B981;
            font-weight: 400;
        }

        .fourblocks-wrapper .cta-card p {
            color: #374151;
            font-size: 14px;
            text-align: center;
            margin-bottom: 25px;
            line-height: 1.6;
        }

        .fourblocks-wrapper .form-group {
            display: flex;
            gap: 10px;
        }

        .fourblocks-wrapper .form-group input {
            flex: 1;
            padding: 12px 15px;
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background-color: rgba(255, 255, 255, 0.05);
            color: #374151;
            font-size: 14px;
            font-family: inherit;
            outline: none;
        }
        
        .fourblocks-wrapper .form-group input::placeholder {
            color: #374151;
            opacity: 0.6;
        }

        .fourblocks-wrapper .form-group button {
            background-color: #8b3dff; /* Bright purple accent */
            color: #ffffff;
            border: none;
            border-radius: 6px;
            padding: 0 15px;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
        }

        .fourblocks-wrapper .form-group button:hover {
            background-color: #722bd4;
        }

        /* Right Column: Content & Grid */
        .fourblocks-wrapper .content-area {
            flex: 1;
            min-width: 0; 
        }

        .fourblocks-wrapper .header-section {
            margin-bottom: 40px;
        }

        .fourblocks-wrapper .header-section h1 {
            font-size: clamp(3rem, 5vw, 3.4375rem);
            color: #000000;
            font-weight: 400;
            line-height: clamp(3.42rem, 6vw, 4rem);
            margin-bottom: 15px;
            letter-spacing: -0.025em;
        }

        .fourblocks-wrapper .header-section p {
            font-size: clamp(1.125rem, 1.5vw, 1.25rem);
            font-weight: 300;
            color: #374151;
            max-width: 800px;
            line-height: clamp(1.41rem, 2vw, 1.75rem);
        }

        .fourblocks-wrapper .header-section strong {
            color: #10B981;
            font-weight: 700;
        }

        /* Cards Grid */
        .fourblocks-wrapper .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .fourblocks-wrapper .resource-card {
            background-color: transparent;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 30px 25px;
            position: relative;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .fourblocks-wrapper .resource-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
            border-color: rgba(255, 255, 255, 0.25);
        }

        .fourblocks-wrapper .resource-card h3 {
            color: #000000;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
            padding-right: 20px;
            line-height: 1.4;
        }

        .fourblocks-wrapper .resource-card p {
            color: #374151;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
            opacity: 0.9;
        }

        .fourblocks-wrapper .resource-card .arrow {
            position: absolute;
            top: 30px;
            right: 20px;
            color: #10B981;
            font-size: 18px;
            font-weight: bold;
            transition: transform 0.2s ease;
        }
        
        .fourblocks-wrapper .resource-card:hover .arrow {
            transform: translateX(4px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .fourblocks-wrapper .grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .fourblocks-wrapper .sidebar {
                flex: 0 0 280px;
            }
        }

        @media (max-width: 768px) {
            .fourblocks-wrapper .container {
                flex-direction: column;
                align-items: center;
            }
            .fourblocks-wrapper .sidebar {
                width: 100%;
                max-width: 400px;
                margin-bottom: 40px;
            }
            .fourblocks-wrapper .content-area {
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            .fourblocks-wrapper .grid {
                grid-template-columns: 1fr;
            }
        }
      `}} />

      <div className="container">
        
        <div className="sidebar">
          <img 
            src="https://www.wpfedev.com/_next/image/?url=https%3A%2F%2Fadmin.wpfedev.com%2Fwp-content%2Fuploads%2F2026%2F01%2FSampleimage-scaled.webp&w=1080&q=75" 
            alt={content.imageAlt}
            className="team-image" 
          />
          <div className="cta-card">
            <h2>{content.sidebarLead} <span>{content.sidebarAccent}</span></h2>
            <p>{content.sidebarDescription}</p>
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
              <input type="url" placeholder={content.placeholder} required />
              <button type="submit" aria-label={content.submitLabel}>&#8594;</button>
            </form>
          </div>
        </div>

        <div className="content-area">
          <div className="header-section">
            <h1>{content.title}</h1>
            <p><strong>{content.introLead}</strong> {content.introBody}</p>
          </div>

          <div className="grid">
            <a href="#" className="resource-card">
              <h3>{content.cards[0].title}</h3>
              <span className="arrow">&#8594;</span>
              <p>{content.cards[0].description}</p>
            </a>

            <a href="#" className="resource-card">
              <h3>{content.cards[1].title}</h3>
              <span className="arrow">&#8594;</span>
              <p>{content.cards[1].description}</p>
            </a>

            <a href="#" className="resource-card">
              <h3>{content.cards[2].title}</h3>
              <span className="arrow">&#8594;</span>
              <p>{content.cards[2].description}</p>
            </a>

            <a href="#" className="resource-card">
              <h3>{content.cards[3].title}</h3>
              <span className="arrow">&#8594;</span>
              <p>{content.cards[3].description}</p>
            </a>

            <a href="#" className="resource-card">
              <h3>{content.cards[4].title}</h3>
              <span className="arrow">&#8594;</span>
              <p>{content.cards[4].description}</p>
            </a>

            <a href="#" className="resource-card">
              <h3>{content.cards[5].title}</h3>
              <span className="arrow">&#8594;</span>
              <p>{content.cards[5].description}</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
