"use client";

import React, { useEffect, useState } from 'react';
import type { ContentDoubleContent } from '@/content/contentDouble';

export const Contentdouble = ({ content }: { content: ContentDoubleContent }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation shortly after mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section data-wpfe-section="" data-component="content-double" className="contentdouble-wrapper">
            {/* External Font Import */}
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&display=swap" rel="stylesheet" />

            {/* Scoped CSS - Updated for Light Theme & Emerald Accents */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .contentdouble-wrapper {
            --bg-color: transparent; /* Inherit global white background */
            --text-main: #1a1a1a; /* Darkest gray for headings */
            --text-muted: #4b5563; /* Slate gray for paragraphs */
            --card-bg: transparent; /* Shared page background */
            --card-border: #e5e7eb; /* Light gray border */
            --backdrop-bg: transparent; /* Shared page background */
            --check-color: #10B981; /* Emerald green checks */
            
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            overflow-x: hidden;
            width: 100%;
        }

        .contentdouble-wrapper .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 20px;
        }

        .contentdouble-wrapper .layout-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        /* --- Left Column: Text & Checklist --- */
        .contentdouble-wrapper .content-left h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.75rem;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.02em;
            margin-top: 0;
            margin-bottom: 24px;
            color: var(--text-main);
        }

        .contentdouble-wrapper .content-left p {
            color: var(--text-muted);
            margin-bottom: 20px;
            margin-top: 0;
            font-size: 0.95rem;
        }

        .contentdouble-wrapper .checklist {
            list-style: none;
            margin: 24px 0;
            padding: 0;
        }

        .contentdouble-wrapper .checklist li {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 14px;
            font-weight: 500;
            font-size: 0.95rem;
            color: var(--text-main);
        }

        .contentdouble-wrapper .check-icon {
            color: var(--check-color);
            flex-shrink: 0;
        }

        /* --- Right Column: Overlay Cards --- */
        .contentdouble-wrapper .content-right {
            position: relative;
            padding: 20px;
        }

        /* The Slanted Backdrop - Updated to soft emerald */
        .contentdouble-wrapper .backdrop-shape {
            position: absolute;
            top: 40px;
            bottom: -60px;
            left: -20px;
            right: 40px;
            background-color: var(--backdrop-bg);
            border: 1px solid #10b981; /* Emerald border */
            border-radius: 24px;
            transform: skew(-8deg); 
            z-index: 1;
            opacity: 0.4; /* Soften the backdrop slightly */
        }

        /* The Main White Card */
        .contentdouble-wrapper .expertise-card {
            position: relative;
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            color: var(--text-main);
            padding: 48px;
            border-radius: 16px;
            z-index: 2;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08); /* Soft light shadow */
        }

        .contentdouble-wrapper .expertise-card h2 {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 2.25rem;
            font-weight: 800;
            margin-top: 0;
            margin-bottom: 20px;
            letter-spacing: -0.01em;
        }

        .contentdouble-wrapper .expertise-card > p {
            font-size: 0.9rem;
            line-height: 1.7;
            color: var(--text-muted);
            margin-bottom: 24px;
            margin-top: 0;
        }

        .contentdouble-wrapper .tip-item {
            margin-bottom: 24px;
            font-size: 0.9rem;
            line-height: 1.7;
            color: var(--text-muted);
        }

        .contentdouble-wrapper .tip-item:last-child {
            margin-bottom: 0;
        }

        .contentdouble-wrapper .tip-item strong {
            color: var(--text-main);
            font-weight: 700;
            display: block;
            margin-bottom: 4px;
        }

        /* --- Animation Classes --- */
        .contentdouble-wrapper .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contentdouble-wrapper .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
            .contentdouble-wrapper .layout-grid {
                grid-template-columns: 1fr;
                gap: 60px;
            }
            .contentdouble-wrapper .content-left h1 {
                font-size: 2.25rem;
            }
            .contentdouble-wrapper .backdrop-shape {
                top: 20px; bottom: -20px; left: -10px; right: -10px;
                transform: skew(-4deg);
            }
            .contentdouble-wrapper .expertise-card {
                padding: 32px;
            }
        }
      `}} />

            <div data-wpfe-container="content" className="container">
                <div className="layout-grid">

                    <div className={`content-left fade-up ${isVisible ? 'visible' : ''}`}>
                        <h1>{content.titleLines[0]}<br />{content.titleLines[1]}</h1>
                        <p>{content.intro}</p>
                        <p>{content.approach}</p>

                        <ul className="checklist">
                            <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> {content.checks[0]}</li>
                            <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> {content.checks[1]}</li>
                            <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> {content.checks[2]}</li>
                            <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> {content.checks[3]}</li>
                            <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> {content.checks[4]}</li>
                            <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> {content.checks[5]}</li>
                            <li><svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> {content.checks[6]}</li>
                        </ul>

                        <p>{content.closing}</p>
                    </div>

                    <div
                        className={`content-right fade-up ${isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="backdrop-shape"></div>
                        <div className="expertise-card">
                            <h2>{content.cardTitle}</h2>
                            <p>{content.cardIntro}</p>

                            <div className="tip-item">
                                <strong>{content.tips[0][0]}</strong>
                                {content.tips[0][1]}
                            </div>

                            <div className="tip-item">
                                <strong>{content.tips[1][0]}</strong>
                                {content.tips[1][1]}
                            </div>

                            <div className="tip-item">
                                <strong>{content.tips[2][0]}</strong>
                                {content.tips[2][1]}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};