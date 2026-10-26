"use client";

import React from 'react';
import Slider from 'react-slick';

// Import css files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { EngineeringCarouselContent } from "@/content/architectureSections";

export const Headwpcarousal = ({ content }: { content: EngineeringCarouselContent }) => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="ek-strategy-carousel-section" data-component="engineering-carousel">
      {/* Scoped component palette */}
      <style dangerouslySetInnerHTML={{ __html: `
        #ek-strategy-carousel-section {
            /* Shared light-page typography and transparent content surfaces */
            --brand-color: #10b981;
            --heading-color: #000000;
            --dark-text: #000000;
            --gray-text: #374151;
            
            --card-bg: transparent;
            --card-border: rgba(255, 255, 255, 0.1); /* Subtle light border */
            --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6); /* Deeper shadow for dark mode */
            
            width: 100%;
            background: transparent;
            line-height: 1.5;
            font-family: 'Inter', sans-serif;
            color: var(--heading-color);
        }

        #ek-strategy-carousel-section .custom-single-carousel-wrapper {
            padding: 40px 40px 60px;
            margin: 0 auto;
            max-width: 1000px;
            box-sizing: border-box;
        }

        #ek-strategy-carousel-section * {
            box-sizing: border-box;
        }

        /* --- HEADING STYLE --- */
        #ek-strategy-carousel-section .king-heading-wrap {
            text-align: center;
            margin-bottom: 50px;
        }

        #ek-strategy-carousel-section .king-kicker {
            display: block;
            color: var(--brand-color);
            font-weight: 900;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 15px;
        }
        
        #ek-strategy-carousel-section .king-heading-wrap h2 {
            font-size: clamp(2rem, 4.5vw, 3.2rem);
            font-weight: 900;
            color: var(--heading-color);
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin: 0 0 20px 0;
        }

        #ek-strategy-carousel-section .king-heading-wrap p {
            font-size: 1.15rem;
            color: var(--gray-text);
            font-weight: 400;
            max-width: 700px;
            margin: 0 auto;
        }

        #ek-strategy-carousel-section .blue-scratch {
            position: relative;
            display: inline-block;
            color: var(--brand-color);
            z-index: 1;
            padding: 0 5px;
        }

        #ek-strategy-carousel-section .blue-scratch::after {
            content: "";
            position: absolute;
            left: 0; right: 0; bottom: 8px;
            height: 12px; 
            background-color: transparent;
            opacity: 1;
            z-index: -1;
            transform: skewX(-10deg);
            border-radius: 2px;
        }

        /* --- CAROUSEL SPACING --- */
        #ek-strategy-carousel-section .slick-list {
            margin: 0 -15px;
            padding-top: 25px; 
            padding-bottom: 30px;
        }

        #ek-strategy-carousel-section .slick-slide {
            padding: 0 15px;
            height: auto;
        }

        /* --- STRATEGY BOX (CARD) --- */
        #ek-strategy-carousel-section .strategy-box {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            box-shadow: var(--box-shadow);
            border-radius: 12px;
            padding: 30px;
            padding-top: 85px;
            height: 100%;
            min-height: 520px; 
            display: flex !important;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: visible; 
            transition: transform 0.3s ease, border-color 0.3s ease;
        }

        #ek-strategy-carousel-section .strategy-box:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 255, 255, 0.25);
        }

        /* --- ENHANCED HEADER BADGE --- */
        #ek-strategy-carousel-section .heading-badge {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 0;
            padding: 16px 15px;
            background: transparent;
            color: var(--brand-color);
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-align: center;
            z-index: 10;
            border-radius: 12px 12px 0 0;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
            line-height: 1.4;
        }

        #ek-strategy-carousel-section .heading-badge::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 25%;
            width: 50%;
            height: 3px;
            background: transparent;
            border-radius: 10px 10px 0 0;
        }

        /* --- TYPOGRAPHY INSIDE CARDS --- */
        #ek-strategy-carousel-section .strategy-box h5 {
            color: var(--dark-text);
            margin-top: 10px;
            margin-bottom: 22px;
            font-size: 18px;
            font-weight: 900;
            line-height: 1.3;
            letter-spacing: -0.02em;
        }

        #ek-strategy-carousel-section .strategy-box ul {
            padding-left: 20px;
            margin: 0;
        }

        #ek-strategy-carousel-section .strategy-box ul li {
            margin-bottom: 16px;
            font-size: 15px; 
            color: var(--gray-text); 
            font-weight: 400;
            line-height: 1.6;
            list-style-type: disc;
        }

        #ek-strategy-carousel-section .strategy-box ul li::marker {
            color: var(--brand-color);
        }

        /* --- STAT SECTION --- */
        #ek-strategy-carousel-section .strategy-box__stat {
            margin-top: auto;
            padding-top: 25px;
            border-top: 1px solid rgba(255, 255, 255, 0.08); /* Adjusted for dark mode */
        }

        #ek-strategy-carousel-section .strategy-box__stat__value {
            font-size: 42px;
            font-weight: 900;
            color: var(--brand-color);
            line-height: 1;
            margin-bottom: 8px;
        }

        #ek-strategy-carousel-section .strategy-box__stat__label {
            font-size: 12px;
            color: var(--gray-text);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
        }

        /* --- NAVIGATION ARROWS --- */
        #ek-strategy-carousel-section .slick-prev,
        #ek-strategy-carousel-section .slick-next {
            width: 48px;
            height: 48px;
            z-index: 100;
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            transition: all 0.3s ease;
        }

        #ek-strategy-carousel-section .slick-prev:hover,
        #ek-strategy-carousel-section .slick-next:hover {
            background-color: var(--brand-color);
            border-color: var(--brand-color);
        }

        #ek-strategy-carousel-section .slick-prev { left: -60px; }
        #ek-strategy-carousel-section .slick-next { right: -60px; }

        #ek-strategy-carousel-section .slick-prev:before,
        #ek-strategy-carousel-section .slick-next:before {
            font-size: 20px !important;
            color: var(--heading-color) !important;
            opacity: 1 !important;
            transition: color 0.3s ease;
            line-height: 1;
        }

        #ek-strategy-carousel-section .slick-prev:hover:before,
        #ek-strategy-carousel-section .slick-next:hover:before {
            color: #ffffff !important;
        }

        #ek-strategy-carousel-section .slick-prev:before { content: "❮"; }
        #ek-strategy-carousel-section .slick-next:before { content: "❯"; }

        /* --- MOBILE RESPONSIVENESS --- */
        @media (max-width: 850px) {
            #ek-strategy-carousel-section .slick-prev { left: -20px; }
            #ek-strategy-carousel-section .slick-next { right: -20px; }
        }

        @media (max-width: 768px) {
            #ek-strategy-carousel-section .custom-single-carousel-wrapper { 
                padding: 20px 15px; 
            }
            
            #ek-strategy-carousel-section .slick-slider { 
                padding-bottom: 60px; 
            }

            #ek-strategy-carousel-section .slick-slide {
                width: 100%;
            }

            #ek-strategy-carousel-section .slick-prev, 
            #ek-strategy-carousel-section .slick-next { 
                top: auto;
                bottom: -10px; 
                transform: none; 
            }

            #ek-strategy-carousel-section .slick-prev { 
                left: calc(50% - 45px); 
            }
            #ek-strategy-carousel-section .slick-next { 
                right: auto; 
                left: calc(50% + 5px); 
            }

            #ek-strategy-carousel-section .strategy-box { 
                min-height: auto; 
                width: 100%; 
            }
        }
      `}} />

      <div className="custom-single-carousel-wrapper">
        <div className="king-heading-wrap">
          <span className="king-kicker">{content.kicker}</span>
          <h2>{content.titleLead} <span className="blue-scratch">{content.titleAccent}</span></h2>
          <p>{content.description}</p>
        </div>

        <Slider {...settings}>
          {content.cards.map((item, index) => (
            <div key={index}>
              <div className="strategy-box">
                <p className="heading-badge">{item.challenge}</p>
                <div>
                  <h5>SOLUTION: {item.solution}</h5>
                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="strategy-box__stat">
                  <div className="strategy-box__stat__value">{item.statValue}</div>
                  <div className="strategy-box__stat__label">{item.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};