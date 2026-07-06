"use client";

import React, { useState } from "react";

export const AIfrontendeveloperBook = () => {
  // 1. ALL hooks must go right here, inside the component, before anything else!
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const steps = [
    {
      badge: "Custom PPC Plans",
      label: "Starting at",
      amount: "$650",
      infoTitle: "How we determine pricing",
      items: [
        {
          title: "Your Ad Spend",
          desc: "Your advertising budget will not only determine your monthly management costs, it will also help determine which advertising channels we’d recommend investing in to maximize your marketing budget.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Ad Spend" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Networks and Targeting",
          desc: "Your custom strategy will depend on where you are looking to advertise- Google, Bing, Programmatic, etc. Your WebFX strategist can recommend PPC channels for you based on your business goals!",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Networks" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Creative Needs",
          desc: "If you have an in-house designer, you may not need WebFX’s support with the creation of branded ad creative. However, many of our clients trust WebFX’s design team to create professional, branded display ads for any campaign type.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Creative" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        }
      ],
      rightTitle: "Included for All PPC Plans:",
      features: [
        "In-depth keyword research and advanced selection",
        "Competitor and industry analysis",
        "Data-backed keyword development",
        "Ongoing ad strategy management and optimization",
        "Access to our in-house revenue acceleration software RevenueCloudFX",
        "Closed-loop ROI and customer journey tracking",
        "Conversion-boosting and performance tested ad copy",
        "Expertise and support from a team of over 750 strategists",
        "Ad campaign performance, analysis, and revenue reporting",
        "Strategic bid management"
      ],
      btnText: "Get My Custom Quote"
    },
    {
      badge: "Enterprise Plans",
      label: "Starting at",
      amount: "$1,200",
      infoTitle: "How we determine pricing",
      items: [
        {
          title: "Your Ad Spend",
          desc: "Your advertising budget will not only determine your monthly management costs, it will also help determine which advertising channels we’d recommend investing in to maximize your marketing budget.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Ad Spend" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Networks and Targeting",
          desc: "Your custom strategy will depend on where you are looking to advertise- Google, Bing, Programmatic, etc. Your WebFX strategist can recommend PPC channels for you based on your business goals!",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Networks" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Creative Needs",
          desc: "If you have an in-house designer, you may not need WebFX’s support with the creation of branded ad creative. However, many of our clients trust WebFX’s design team to create professional, branded display ads for any campaign type.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Creative" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        }
      ],
      rightTitle: "Included for All PPC Plans:",
      features: [
        "In-depth keyword research and advanced selection",
        "Competitor and industry analysis",
        "Data-backed keyword development",
        "Ongoing ad strategy management and optimization",
        "Access to our in-house revenue acceleration software RevenueCloudFX",
        "Closed-loop ROI and customer journey tracking",
        "Conversion-boosting and performance tested ad copy",
        "Expertise and support from a team of over 750 strategists",
        "Ad campaign performance, analysis, and revenue reporting",
        "Strategic bid management"
      ],
      btnText: "Get My Custom Quote"
    },
    {
      badge: "Global Strategy",
      label: "Starting at",
      amount: "$3,500",
      infoTitle: "How we determine pricing",
      items: [
        {
          title: "Your Ad Spend",
          desc: "Your advertising budget will not only determine your monthly management costs, it will also help determine which advertising channels we’d recommend investing in to maximize your marketing budget.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Ad Spend" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Networks and Targeting",
          desc: "Your custom strategy will depend on where you are looking to advertise- Google, Bing, Programmatic, etc. Your WebFX strategist can recommend PPC channels for you based on your business goals!",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Networks" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        },
        {
          title: "Creative Needs",
          desc: "If you have an in-house designer, you may not need WebFX’s support with the creation of branded ad creative. However, many of our clients trust WebFX’s design team to create professional, branded display ads for any campaign type.",
          icon: <img src="https://www.webfx.com/wp-content/uploads/2023/06/accounts.png" alt="Creative" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        }
      ],
      rightTitle: "Included for All PPC Plans:",
      features: [
        "In-depth keyword research and advanced selection",
        "Competitor and industry analysis",
        "Data-backed keyword development",
        "Ongoing ad strategy management and optimization",
        "Access to our in-house revenue acceleration software RevenueCloudFX",
        "Closed-loop ROI and customer journey tracking",
        "Conversion-boosting and performance tested ad copy",
        "Expertise and support from a team of over 750 strategists",
        "Ad campaign performance, analysis, and revenue reporting",
        "Strategic bid management"
      ],
      btnText: "Get My Custom Quote"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const activeStep = steps[currentIndex];

  return (
    <section className="bofu-pricing-wrapper">
      <style jsx>{`
        /* --- 1. THE MAIN WRAPPER (Light Theme) --- */
        .bofu-pricing-wrapper {
          color: #333333 !important;
          padding: 80px 20px 100px;
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: auto;
          isolation: isolate;
          overflow: visible !important;
          background-color: transparent !important;
        }

        /* --- 2. THE DOTTED EMERALD BOTTOM (Light Theme) --- */
        .bofu-pricing-wrapper::before {
          content: "";
          position: absolute;
          left: 0;
          top: 650px; 
          width: 100%;
          height: 800px; 
          background-color: #d1fae5 !important; /* Soft emerald background */
          background-image: radial-gradient(#10b981 1.2px, transparent 1.2px) !important;  
          background-size: 14px 14px !important;
          background-repeat: no-repeat; 
          background-size: 100% 100%; 
          z-index: -1;
          pointer-events: none;
        }

        /* --- 3. DOTTED LIMITER --- */
        .bofu-pricing-wrapper::after {
          content: "";
          position: absolute;
          left: 0;
          top: 450px; 
          width: 100%;
          height: 300px; 
          background-image: radial-gradient(#d1d5db 1px, transparent 1.5px) !important; /* Soft gray dots */
          background-size: 14px 14px !important;
          z-index: -1;
        }

        /* --- 4. CONTAINER ALIGNMENT --- */
        .container-inner {
          max-width: 950px !important; 
          width: 100% !important;
          margin: 0 auto !important; 
          position: relative;
          z-index: 10;
        }

        /* Hide the toggle button entirely on desktop */
        .mobile-feature-toggle {
          display: none !important;
        }

        /* --- 5. TOP INTRO TEXT (Light Theme) --- */
        .intro-header {
          text-align: center;
          margin-bottom: 70px;
        }
        .intro-header h2 {
          font-size: clamp(1.8rem, 4vw, 2.4rem) !important;
          color: #1a1a1a !important; /* Dark text */
          margin-bottom: 20px !important;
        }
        .intro-header p {
          font-size: 1.05rem !important;
          color: #4b5563 !important; /* Slate gray */
          max-width: 800px;
          margin: 0 auto !important;
        }

        /* --- 6. MAIN PRICING CARD (Light Theme) --- */
        .pricing-card {
          display: flex;
          background-color: #ffffff !important;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08) !important; /* Soft shadow */
          border: 1px solid #e5e7eb !important; /* Light border */
          position: relative;
          min-height: auto; 
          overflow: visible; 
        }

        /* --- 7. LEFT COLUMN --- */
        .card-left {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #e5e7eb !important; /* Light border divider */
        }

        .card-left-top {
          background-color: #10b981 !important; /* Emerald Header */
          padding: 60px 30px 40px; 
          text-align: center;
          position: relative;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 0px;
        }
        .floating-icon {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 48px;
          background-color: #ffffff !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1) !important; /* Softer shadow */
        }
        .badge {
          color: #ffffff !important;
          font-size: 0.95rem !important;
          text-transform: uppercase;
          margin: 0 0 8px 0 !important;
        }
        .label {
          color: #ffffff !important;
          font-size: 0.9rem !important;
          opacity: 0.9;
          margin: 0 0 10px 0 !important;
        }
        .price {
          color: #ffffff !important;
          font-size: 3.5rem !important;
          margin: 0 !important;
        }
        .price span {
          color: #ffffff !important;
          font-size: 1.1rem !important;
        }

        .card-left-bottom {
          background-color: #ffffff !important; /* White background */
          padding: 35px 40px 50px !important; 
          flex-grow: 1; 
          display: flex;
          flex-direction: column;
          border-bottom-left-radius: 20px;
        }
        .card-left-bottom h4 {
          color: #1a1a1a !important; /* Dark text */
          font-size: 1.25rem !important;
          margin: 0 0 25px 0 !important; 
        }
        .item-block {
          margin-bottom: 30px !important;
        }
        .item-block:last-child {
          margin-bottom: 0 !important;
        }
        .item-header {
          display: flex;
          align-items: center !important; 
          gap: 12px;
          margin-bottom: 12px !important;
        }
        .item-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .item-header h5 {
          color: #1a1a1a !important; /* Dark text */
          font-size: 1.05rem !important;
          margin: 0 !important; 
          font-weight: 600;
        }
        .item-block p {
          color: #4b5563 !important; /* Slate gray description */
          font-size: 0.95rem !important;
          margin: 0 !important;
          line-height: 1.5;
        }

        /* --- 8. RIGHT COLUMN (Light Theme) --- */
        .card-right {
          flex: 1;
          background-color: #f9fafb !important; /* Light gray background */
          padding: 60px 40px; 
          display: flex;
          flex-direction: column;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        .card-right h4 {
          color: #1a1a1a !important; /* Dark text */
          font-size: 1.2rem !important;
          margin: 0 0 30px 0 !important;
          font-weight: 600;
        }
        .feature-list {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 0 40px 0 !important;
          display: flex;
          flex-direction: column;
          gap: 16px; 
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #374151 !important; /* Dark slate gray */
          font-size: 0.95rem !important;
          line-height: 1.4;
        }
        .check-circle {
          width: 20px;
          height: 20px;
          background-color: #d1fae5 !important; /* Light emerald circle */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981 !important; /* Emerald checkmark */
          flex-shrink: 0;
          margin-top: 1px;
        }
        .cta-button {
          background-color: #10b981 !important; /* Emerald Button */
          color: #ffffff !important;
          font-size: 1rem !important;
          padding: 16px 20px !important;
          border-radius: 6px !important;
          border: none !important;
          cursor: pointer !important;
          text-align: center !important;
          width: 100% !important;
          margin-top: auto !important;
          font-weight: bold;
          transition: background-color 0.2s ease !important;
        }
        .cta-button:hover {
          background-color: #059669 !important; /* Darker emerald on hover */
        }

        /* --- 9. BOTTOM NAVIGATION LINK --- */
        .nav-link-area {
          text-align: center;
          margin-top: 40px;
          position: relative;
        }
        .nav-link-area button {
          background: none !important;
          border: none !important;
          color: #10b981 !important; /* Emerald text */
          font-size: 0.95rem !important;
          cursor: pointer !important;
          padding: 10px 15px !important;
          font-weight: bold;
        }
        .nav-link-area button:hover {
          text-decoration: underline;
        }
        .nav-link-area span {
          color: #6b7280 !important; /* Slate gray */
          font-size: 0.9rem !important;
          margin: 0 15px !important;
        }

        /* Hide the +/- icon on desktop since everything is always expanded */
        .accordion-icon {
          display: none;
        }
        .item-desc {
          color: #4b5563 !important; /* Slate gray */
          font-size: 0.95rem !important;
          margin: 0 !important;
          transition: all 0.3s ease;
        }

        /* --- 10. MOBILE RESPONSIVENESS --- */
        @media (max-width: 900px) {
          /* Hide Background Patterns */
          .bofu-pricing-wrapper::before,
          .bofu-pricing-wrapper::after {
            display: none !important;
          }

          /* Hide features beyond the first 5 to save vertical space */
          .hide-on-mobile {
            display: none !important;
          }

          /* Strip down wrapper padding */
          .bofu-pricing-wrapper {
            padding: 40px 20px !important;
            background-color: transparent !important;
          }

          /* Hide features beyond the first 5 when the state is false */
          .hidden-mobile-feature {
            display: none !important;
          }

          /* Style the "See All" button for mobile */
          .mobile-feature-toggle {
            display: block !important;
            width: 100%;
            background: transparent !important;
            border: none !important;
            color: #10b981 !important; /* Emerald text */
            font-size: 0.95rem !important;
            margin-top: -10px !important;
            margin-bottom: 25px !important;
            cursor: pointer !important;
            text-align: center !important;
            font-weight: bold;
          }

          /* Hide long intro paragraph */
          .intro-header p {
            display: none !important;
          }
          .intro-header {
            margin-bottom: 40px !important;
          }
          .intro-header h2 {
             font-size: clamp(1.6rem, 4vw, 2rem) !important;
          }

          /* Stack Card vertically */
          .pricing-card {
            flex-direction: column;
          }
          .card-left {
            border-right: none !important;
            border-bottom: 1px solid #e5e7eb !important;
          }
          
          /* Fix Border Radii for stacking */
          .card-left-top {
             border-top-right-radius: 20px;
          }
          .card-left-bottom {
             border-bottom-left-radius: 0px;
          }
          .card-right {
             border-top-right-radius: 0px;
             border-bottom-left-radius: 20px;
             padding: 30px 20px !important;
          }

          /* Reduce Left Box Padding */
          .card-left-bottom {
            padding: 25px 20px !important;
          }

          /* --- MOBILE ACCORDION STYLES --- */
          .accordion-icon {
            display: block !important;
            margin-left: auto;
            color: #10b981 !important; 
            font-size: 1.5rem !important;
          }

          .item-header {
            margin-bottom: 0 !important;
            padding: 5px 0;
          }

          .item-desc {
            display: none !important;
          }

          .item-desc.expanded {
            display: block !important;
            margin-top: 10px !important;
            padding-left: 44px; /* Aligns text perfectly under the title, skipping the icon */
          }

          .item-block {
            margin-bottom: 15px !important;
          }
          .item-header {
            margin-bottom: 0 !important;
          }
          
          .feature-list {
             margin-bottom: 25px !important;
          }
        }
      `}</style>

      <div className="container-inner">

        {/* Intro Header */}
        <div className="intro-header">
          <h2>
            Looking for plans and pricing?<br />
            Get a preview of our enterprise PPC services
          </h2>
          {/* Paragraph hidden on mobile via CSS */}
          <p>
            Growing PPC’s performance starts with a plan customized to your business, industry, and audience. So, we build a customized enterprise PPC service plan for your organization, providing you with a roadmap for how we’ll achieve your goals for paid search, from greater brand awareness to bigger market share.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="pricing-card">

          {/* Left Side */}
          <div className="card-left">
            <div className="card-left-top">
              {/* Floating SVG Icon */}
              <div className="floating-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#10b981">
                  <path d="M4 6h16v2H4zm2 3h12v10H6zm2 2v6h2v-6zm6 0v6h2v-6z" />
                </svg>
              </div>
              <h3 className="badge">{activeStep.badge}</h3>
              <p className="label">{activeStep.label}</p>
              <h2 className="price">
                {activeStep.amount} <span>/ month</span>
              </h2>
            </div>

            <div className="card-left-bottom">
              <h4>{activeStep.infoTitle}</h4>

              {activeStep.items.map((item, idx) => {
                const isExpanded = expandedItem === idx;

                return (
                  <div className="item-block" key={idx}>
                    <div
                      className="item-header cursor-pointer lg:cursor-default"
                      onClick={() => setExpandedItem(isExpanded ? -1 : idx)}>
                      <div className="item-icon-wrap">
                        {item.icon}
                      </div>
                      <h5>{item.title}</h5>
                      <span className="accordion-icon">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </div>
                    {/* Description Text */}
                    <p className={`item-desc ${isExpanded ? "expanded" : ""}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side */}
          <div className="card-right">
            <h4>{activeStep.rightTitle}</h4>

            <ul className="feature-list">
              {activeStep.features.map((feature, idx) => {
                const isHiddenOnMobile = idx >= 5 && !showAllFeatures;

                return (
                  <li key={idx} className={isHiddenOnMobile ? "hidden-mobile-feature" : ""}>
                    {/* SVG Checkmark */}
                    <div className="check-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    {feature}
                  </li>
                );
              })}
            </ul>

            {/* Mobile "See More" Toggle Button */}
            {activeStep.features.length > 5 && (
              <button
                className="mobile-feature-toggle"
                onClick={() => setShowAllFeatures(!showAllFeatures)}
              >
                {showAllFeatures ? "See Less ↑" : "See All Features ↓"}
              </button>
            )}

            <button className="cta-button">
              {activeStep.btnText}
            </button>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="nav-link-area">
          <button onClick={handlePrev}>← Previous Plan</button>
          <span>Plan {currentIndex + 1} of {steps.length}</span>
          <button onClick={handleNext}>Next Plan →</button>
        </div>

      </div>
    </section>
  );
};