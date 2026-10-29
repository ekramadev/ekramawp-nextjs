"use client";

import React, { useState } from 'react';
import type { ShutterCardCopy, ShutterCopy } from '@/content/homeLegacy';

// --- INDIVIDUAL CARD COMPONENT ---
const ExpertiseCard = ({ data, labels }: { data: ShutterCardCopy; labels: ShutterCopy }) => {
  // Start expanded (false means it is NOT collapsed)
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <article className="card">
      <div className="content">
        <div className="header">
          {/* Simple white square icon box as requested by your original CSS */}
          <div className="icon-box"></div>
          <h2>{data.title}</h2>
        </div>
        <p className="desc">{data.desc}</p>
        
        <div className={`details-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
          <ul className="feature-list">
            {data.features.map((feature, idx) => (
              <li key={idx}>
                <span>{feature.icon}</span> {feature.text}
              </li>
            ))}
          </ul>
          <div className="meta-info">
            <strong>{labels.focusLabel}</strong>
            <p>{data.bestFor}</p>
            <strong>{labels.contextsLabel}</strong>
            <p>{data.useCases}</p>
          </div>
        </div>
      </div>
      
      <button 
        className={`toggle-btn ${isCollapsed ? 'collapsed-btn' : ''}`} 
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span>{isCollapsed ? labels.showLabel : labels.hideLabel}</span>
        <svg className="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </article>
  );
};

// --- MAIN COMPONENT ---
export const Shutterupanddown = ({ content }: { content: ShutterCopy }) => {
  return (
    <section data-wpfe-section="" className="shutter-wrapper">
      {/* Scoped CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .shutter-wrapper {
            --bg-color: #000000;
            --card-bg: #121212;
            --border-color: #333333;
            --text-main: #ffffff;
            --text-muted: #a3a3a3;
            --accent-color: var(--wpfe-emerald);
            --feature-bg: #1c1c1c;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            
            background-color: transparent;
            color: var(--text-main);
            padding: 60px 20px;
            display: flex;
            justify-content: center;
            font-family: var(--font-neuehaas);
            width: 100%;
        }

        .shutter-wrapper .container {
            max-width: 1280px;
            width: 100%;
        }

        .shutter-wrapper .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            align-items: start; 
        }

        .shutter-wrapper .card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            transition: var(--transition);
            overflow: hidden;
        }

        .shutter-wrapper .card:hover {
            border-color: #555555;
            box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.05);
        }

        .shutter-wrapper .content {
            padding: 32px;
            flex-grow: 1;
        }

        .shutter-wrapper .header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }

        .shutter-wrapper .icon-box {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            flex-shrink: 0;
            background: #ffffff; 
        }

        .shutter-wrapper h2 {
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: -0.01em;
            margin: 0;
            color: var(--text-main);
        }

        .shutter-wrapper .desc {
            font-size: 0.9375rem;
            line-height: 1.6;
            color: var(--text-muted);
            margin-bottom: 24px;
            margin-top: 0;
        }

        .shutter-wrapper .details-wrapper {
            transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
            max-height: 500px;
            opacity: 1;
            overflow: hidden;
        }

        .shutter-wrapper .details-wrapper.collapsed {
            max-height: 0;
            opacity: 0;
            pointer-events: none;
        }

        .shutter-wrapper .feature-list {
            background: var(--feature-bg);
            border-radius: 12px;
            padding: 16px;
            list-style: none;
            margin: 0 0 24px 0;
        }

        .shutter-wrapper .feature-list li {
            font-size: 0.875rem;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text-main);
        }

        .shutter-wrapper .feature-list li:last-child { margin-bottom: 0; }

        .shutter-wrapper .meta-info {
            padding-bottom: 8px;
        }

        .shutter-wrapper .meta-info strong {
            display: block;
            font-size: 0.875rem;
            margin-top: 16px;
            color: var(--text-main);
        }

        .shutter-wrapper .meta-info p {
            font-size: 0.875rem;
            color: var(--text-muted);
            margin-top: 4px;
            margin-bottom: 0;
        }

        .shutter-wrapper .toggle-btn {
            width: 100%;
            padding: 16px 32px;
            background: none;
            border: none;
            border-top: 1px solid var(--border-color);
            color: var(--accent-color);
            font-weight: 600;
            font-size: 0.875rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background 0.2s;
        }

        .shutter-wrapper .toggle-btn:hover {
            background-color: var(--feature-bg);
        }

        .shutter-wrapper .chevron {
            width: 16px;
            height: 16px;
            transition: transform 0.3s;
        }

        .shutter-wrapper .collapsed-btn .chevron {
            transform: rotate(180deg);
        }
      `}} />

      <div data-wpfe-container="content" className="container">
        <div className="grid">
          {content.cards.map((data) => (
            <ExpertiseCard key={data.id} data={data} labels={content} />
          ))}
        </div>
      </div>
    </section>
  );
};