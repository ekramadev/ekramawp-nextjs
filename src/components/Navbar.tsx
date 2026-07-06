"use client";

import React, { useState } from "react";
import Link from "next/link";

type IconProps = {
  className?: string;
};

type NavLinkItem = {
  label: string;
  href: string;
};

type NavCategory = {
  title: string;
  links: NavLinkItem[];
};

type NavSection = {
  id: number;
  title: string;
  href: string;
  columns: NavCategory[][];
  promo?: {
    heading: string;
    description: string;
    badgeTopText: string;
    badgeBottomText: string;
  };
};

function ChevronDown({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

// Fully Updated Database with all URLs and Groupings
const navSections: NavSection[] = [
  {
    id: 1,
    title: "Services",
    href: "/services",
    promo: {
      heading: "WPFEDEV USA Corporation is a 5-Year Champion in the Financial Times Rating",
      description: "For the fifth year in a row, WPFEDEV USA Corporation earns a place among The Americas' Fastest-Growing Companies.",
      badgeTopText: "FT FINANCIAL TIMES | statista",
      badgeBottomText: "5 YEAR CHAMPION",
    },
    columns: [
      [
        {
          title: "Software Engineering",
          links: [
            { label: "Software Development", href: "/services/software-development" },
            { label: "MVP Development", href: "/services/mvp-development" },
            { label: "AI Development", href: "/services/ai-development" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Mobile Development", href: "/services/mobile-development" },
            { label: "Desktop Development", href: "/services/desktop-development" },
            { label: "API Development", href: "/services/api-development" },
            { label: "Database Development", href: "/services/database-development" },
            { label: "Software Modernization", href: "/services/software-modernization" },
            { label: "IT Staff Augmentation", href: "/services/it-staff-augmentation" },
          ],
        },
      ],
      [
        {
          title: "Strategy & Advisory",
          links: [
            { label: "IT Consulting", href: "/services/it-consulting" },
            { label: "Digital Transformation", href: "/services/digital-transformation" },
            { label: "Software Consulting", href: "/services/software-consulting" },
            { label: "IT Project Management", href: "/services/it-project-management" },
            { label: "Agile Consulting", href: "/services/agile-consulting" },
            { label: "DevOps Consulting", href: "/services/devops-consulting" },
            { label: "Microsoft Consulting", href: "/services/microsoft-consulting" },
          ],
        },
      ],
      [
        {
          title: "Data & Intelligence",
          links: [
            { label: "Data Analytics", href: "/services/data-analytics" },
            { label: "Data Warehousing", href: "/services/data-warehousing" },
            { label: "Big Data", href: "/services/big-data" },
            { label: "Business Intelligence", href: "/services/business-intelligence" },
            { label: "Data Science", href: "/services/data-science" },
            { label: "Machine Learning", href: "/services/machine-learning" },
            { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
          ],
        },
      ],
      [
        {
          title: "Operations & Support",
          links: [
            { label: "IT Outsourcing", href: "/services/it-outsourcing" },
            { label: "Managed IT Services", href: "/services/managed-it-services" },
            { label: "Infrastructure Services", href: "/services/infrastructure-services" },
            { label: "IT Support", href: "/services/it-support" },
            { label: "IT Help Desk", href: "/services/it-help-desk" },
            { label: "Application Services", href: "/services/application-services" },
            { label: "Application Maintenance", href: "/services/application-maintenance" },
            { label: "Testing and QA", href: "/services/testing-and-qa" },
          ],
        },
        {
          title: "Security",
          links: [
            { label: "Cybersecurity", href: "/services/cybersecurity" },
            { label: "Compliance Services", href: "/services/compliance-services" },
            { label: "Security Testing", href: "/services/security-testing" },
            { label: "Penetration Testing", href: "/services/penetration-testing" },
          ],
        },
      ],
    ],
  },
  {
    id: 2,
    title: "Technologies",
    href: "/technologies",
    promo: {
      heading: "WPFEDEV USA Corporation is a 5-Year Champion in the Financial Times Rating",
      description: "For the fifth year in a row, WPFEDEV USA Corporation earns a place among The Americas' Fastest-Growing Companies.",
      badgeTopText: "FT FINANCIAL TIMES | statista",
      badgeBottomText: "5 YEAR CHAMPION",
    },
    columns: [
      [
        {
          title: "AI & Innovation",
          links: [
            { label: "Data Science Ops", href: "/ai/data-science-ops" },
            { label: "ML Engineering", href: "/ai/ml-engineering" },
            { label: "Computer Vision", href: "/ai/computer-vision" },
            { label: "Blockchain Tech", href: "/blockchain-tech" },
            { label: "Big Data Systems", href: "/big-data-systems" },
            { label: "IoT Engineering", href: "/iot-engineering" },
            { label: "VR Enterprise", href: "/vr-enterprise" },
            { label: "AR Experiences", href: "/ar-experiences" },
          ],
        },
        {
          title: "Cloud & SaaS",
          links: [
            { label: "Cloud Native", href: "/cloud-native" },
            { label: "SaaS Architecture", href: "/saas-architecture" },
          ],
        },
      ],
      [
        {
          title: "Engineers for Hire",
          links: [
            { label: ".NET Experts", href: "/net-experts" },
            { label: "Java Architects", href: "/java-architects" },
            { label: "Python Engineers", href: "/python-engineers" },
            { label: "PHP Engineers", href: "/php-Engineers" },
            { label: "Go Engineers", href: "/go-Engineers" },
            { label: "C++ Engineers", href: "/c-engineers" },
            { label: "Node.js Experts", href: "/node-js-experts" },
            { label: "JavaScript Devs", href: "/javascript-devs" },
            { label: "React Native Experts", href: "/react-native-experts" },
            { label: "Mobile Devs", href: "/mobile-devs" },
          ],
        },
      ],
      [
        {
          title: "Enterprise Platforms",
          links: [
            { label: "MS Ecosystem", href: "/ms-ecosystem" },
            { label: "Azure Cloud", href: "/azure-cloud" },
            { label: "Power Apps Dev", href: "/power-apps-dev" },
            { label: "Dynamics 365 Solutions", href: "/dynamics-365-solutions" },
            { label: "M365 & SharePoint", href: "/m365-sharepoint" },
            { label: "Power BI Dashboards", href: "/power-bi-dashboards" },
            { label: "AWS Infrastructure", href: "/aws-infrastructure" },
            { label: "Adobe Commerce Tech", href: "/adobe-commerce-tech" },
            { label: "ServiceNow Dev", href: "/servicenow-dev" },
            { label: "Salesforce Tech", href: "/salesforce-tech" },
            { label: "Pimcore Solutions", href: "/pimcore-solutions" },
          ],
        },
      ],
    ],
  },
  {
    id: 3,
    title: "Solutions",
    href: "/solutions",
    promo: {
      heading: "WPFEDEV USA Corporation is a 5-Year Champion in the Financial Times Rating",
      description: "For the fifth year in a row, WPFEDEV USA Corporation earns a place among The Americas' Fastest-Growing Companies.",
      badgeTopText: "FT FINANCIAL TIMES | statista",
      badgeBottomText: "5 YEAR CHAMPION",
    },
    columns: [
      [
        {
          title: "Operations & SCM",
          links: [
            { label: "Custom ERP", href: "/custom-erp" },
            { label: "Transportation Management", href: "/transportation-management" },
            { label: "Supply Chain Management", href: "/supply-chain-tech" },
            { label: "WMS Solutions", href: "/wms-solutions" },
            { label: "Enterprise Asset Management", href: "/enterprise-asset-management" },
            { label: "Procurement Management", href: "/procurement" },
            { label: "Enterprise Project Management", href: "/enterprise-pm" },
            { label: "Logistics Management", href: "/logistics-fleet" },
          ],
        },
      ],
      [
        {
          title: "Customer Experience",
          links: [
            { label: "CRM Engineering", href: "/crm-engineering" },
            { label: "Enterprise Commerce", href: "/enterprise-commerce" },
            { label: "Headless CMS", href: "/headless-cms" },
            { label: "Marketing software", href: "/marketing-software" },
          ],
        },
        {
          title: "Portals & Digital Workplace",
          links: [
            { label: "Secure Web Portals", href: "/secure-portals" },
            { label: "Corporate Intranets", href: "/corporate-intranets" },
          ],
        },
      ],
      [
        {
          title: "Corporate Finance",
          links: [
            { label: "Financial Planning and Analysis", href: "/financial-planning-analyses" },
            { label: "Billing and Invoicing Management", href: "/transaction-systems" },
            { label: "Accounting Software", href: "/enterprise-accounting" },
          ],
        },
        {
          title: "Analytics & AI",
          links: [
            { label: "Business Intelligence", href: "/business-intelligence" },
            { label: "Applied AI", href: "/applied-ai" },
          ],
        },
        {
          title: "HR & Learning",
          links: [
            { label: "HRIS Software", href: "/hris-software" },
            { label: "Corporate LMS", href: "/corporate-lms" },
          ],
        },
      ],
    ],
  },
  {
    id: 4,
    title: "Industries",
    href: "/industries",
    promo: {
      heading: "WPFEDEV USA Corporation is a 5-Year Champion in the Financial Times Rating",
      description: "For the fifth year in a row, WPFEDEV USA Corporation earns a place among The Americas' Fastest-Growing Companies.",
      badgeTopText: "FT FINANCIAL TIMES | statista",
      badgeBottomText: "5 YEAR CHAMPION",
    },
    columns: [
      [
        {
          title: "Healthcare",
          links: [
            { label: "Med Devices Software", href: "/med-devices-software" },
            { label: "Behavioral Health IT", href: "/behavioral-health-it" },
            { label: "Lab Info Systems", href: "/lab-info-systems" },
            { label: "Pharma & Biotech Systems", href: "/pharma-biotech" },
            { label: "MedTech Startups Platforms", href: "/medtech-startups" },
            { label: "Public Health Systems", href: "/public-health-systems" },
            { label: "Wellness Apps", href: "/wellness-apps" },
          ],
        },
      ],
      [
        {
          title: "Finance",
          links: [
            { label: "Finance", href: "/finance-software" },
            { label: "Retail Banking", href: "/retail-banking-it" },
            { label: "Insurance Tech", href: "/insurtech" },
            { label: "Wealth Management Tech", href: "/wealth-management-tech" },
            { label: "Digital Lending", href: "/digital-lending" },
            { label: "FinTech Engineering", href: "/fintech-engineering" },
            { label: "Payment Gateways", href: "/payment-gateways" },
          ],
        },
      ],
      [
        {
          title: "Other Industries",
          links: [
            { label: "Smart Manufacturing", href: "/smart-manufacturing" },
            { label: "Digital Retail", href: "/digital-retail" },
            { label: "Logistics & Fleet", href: "/logistics-software" },
            { label: "Energy & Utilities", href: "/energy-utilities" },
            { label: "Professional Services IT", href: "/professional-services-it" },
            { label: "Telecom Tech", href: "/telecom-tech" },
            { label: "PropTech", href: "/real-estate" },
            { label: "Construction IT", href: "/construction-it" },
            { label: "Hospitality Tech", href: "/hospitality-tech" },
          ],
        },
      ],
    ],
  },
  {
    id: 5,
    title: "About Us",
    href: "/about",
    promo: {
      heading: "WPFEDEV USA Corporation is a 5-Year Champion in the Financial Times Rating",
      description: "For the fifth year in a row, WPFEDEV USA Corporation earns a place among The Americas' Fastest-Growing Companies.",
      badgeTopText: "FT FINANCIAL TIMES | statista",
      badgeBottomText: "5 YEAR CHAMPION",
    },
    columns: [
      [
        {
          title: "Company",
          links: [
            { label: "Our Agency", href: "/our-agency" },
            { label: "Our Vision", href: "/our-vision" },
            { label: "Quality Standards", href: "/quality-standards" },
            { label: "Directors", href: "/directors" },
            { label: "The Engineers", href: "/the-engineers" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Client Feedback", href: "/client-feedback" },
            { label: "Tech Alliances", href: "/tech-alliances" },
            { label: "Global Presence", href: "/global-presence" },
          ],
        },
      ],
      [
        {
          title: "Approach",
          links: [
            { label: "Onboarding Workflow", href: "/onboarding-workflow" },
            { label: "Engagement Models", href: "/engagement-models" },
            { label: "Agile PMO", href: "/agile-pmo" },
            { label: "System Design Hub", href: "/system-design-hub" },
            { label: "Innovation Labs", href: "/innovation-labs" },
            { label: "Delivery Framework", href: "/delivery-framework" },
            { label: "Security Posture", href: "/security-posture" },
            { label: "Co-Innovation", href: "/co-innovation" },
            { label: "Green IT", href: "/green-it" },
          ],
        },
      ],
      [
        {
          title: "Thought Leadership",
          links: [
            { label: "Webinars & Talks", href: "/webinars-talks" },
            { label: "Press Coverage", href: "/press-coverage" },
            { label: "Leadership Insights", href: "/leadership-insights" },
            { label: "Tech Blog", href: "/tech-blog" },
            { label: "Agency Updates", href: "/agency-updates" },
          ],
        },
        {
          title: "News",
          links: [
            { label: "Press Kit", href: "/news/press-kit" },
            { label: "Media Spokespersons", href: "/news/media-spokespersons" },
          ],
        },
      ],
      [
        {
          title: "Careers",
          links: [
            { label: "Hiring Workflow", href: "/careers/hiring-workflow" },
            { label: "Partner Program", href: "/partner-program" },
            { label: "Refer a Dev", href: "/refer-a-dev" },
          ],
        },
        {
          title: "Recognition",
          links: [
            { label: "Endorsements", href: "/testimonials/endorsements" },
            { label: "Industry Awards", href: "/industry-awards" },
            { label: "Careers Portal", href: "/careers-portal" },
          ],
        },
      ],
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleAccordion = (id: number) => setOpenAccordion((prev) => (prev === id ? null : id));
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  };

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white text-[#333] border-b border-gray-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="hidden h-6 bg-[#f8f9fa] text-[13px] border-b border-gray-200 lg:block">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
          <div className="flex items-center gap-5 text-gray-600 font-medium">
            <a href="#" className="hover:text-[#0056b3] transition-colors">WPFEDEV Healthcare</a>
            <a href="#" className="hover:text-[#0056b3] transition-colors">WPFEDEV Finance</a>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="mr-6 text-gray-500">17–19 June: WPFEDEV at Tech Expo Miami. Meet us there!</span>
            <a href="mailto:contact@wpfedev.com" className="border-r border-gray-300 pr-4 hover:text-[#0056b3] transition-colors">
              contact@wpfedev.com
            </a>
            <a href="tel:+923242568650" className="ml-4 hover:text-[#0056b3] transition-colors">
              🇵🇰 +92-324-256-8650
            </a>
          </div>
        </div>
      </div>

      <nav className="relative bg-white">
        <div className="mx-auto flex h-[55px] max-w-[1400px] items-center px-6">
          {/* Logo */}
          <div className="z-[1001] flex flex-1 flex-col leading-none">
            <Link href="/" className="no-underline">
              <svg width="200" height="36" viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg">



                <g>

                  <polygon points="16,18 32,18 26,30 10,30" fill="#047857" />

                  <polygon points="11,12 27,12 21,24 5,24" fill="#10b981" />

                  <polygon points="6,6 22,6 16,18 0,18" fill="#34d399" />
                </g>


                <text x="36" y="29" fontFamily="NeueHaasGrotesk, Helvetica, Arial, sansSerif" fontSize="26" fontWeight="300" strokeWidth="0.6" fill="#00674F" stroke="#00674F" letterSpacing="-1.4">
                  wp<tspan fontWeight="300" strokeWidth="1.2" fill="#3EBB9E" stroke="#3EBB9E">Fedev</tspan>
                </text>

              </svg>

            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <ul className="hidden h-full flex-nowrap justify-center items-center p-0 m-0 lg:flex shrink-0 px-4">
            {navSections.map((section) => (
              <li key={section.id} className="group static flex h-full shrink-0 cursor-pointer items-center pr-6 xl:pr-8">
                <Link
                  href={section.href}
                  className="flex h-full items-center gap-1 whitespace-nowrap text-[15px] font-semibold text-[#333] no-underline transition-colors duration-200 group-hover:text-[#0056b3]"
                >
                  <span>{section.title}</span>
                  <ChevronDown className="h-[13px] w-[13px] text-gray-400 transition duration-200 group-hover:rotate-180 group-hover:text-[#0056b3]" />
                </Link>

                <div className="pointer-events-none invisible absolute left-0 top-full z-[999] w-full bg-white opacity-0 shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 border-t border-gray-200">
                  {/* Strict Fixed Height Wrapper (450px) */}
                  <div className="mx-auto flex w-full max-w-[1400px] flex-col h-[450px]">

                    {/* Scrolling Content Layer */}
                    <div className="flex w-full flex-1 overflow-hidden">

                      {/* Left Promo Award Card */}
                      {section.promo && (
                        <div className="w-[30%] shrink-0 pr-8 mr-8 border-r border-gray-200 flex flex-col justify-start p-6 overflow-y-auto">
                          <h2 className="text-[18px] font-bold text-[#333] mb-4 leading-snug">
                            {section.promo.heading}
                          </h2>
                          <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">
                            {section.promo.description}
                          </p>
                          {/* Updated Emerald Border */}
                          <div className="bg-[#3b434a] p-4 rounded-sm border-b-[5px] border-[#10b981] text-white flex flex-col gap-2">
                            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-200">
                              {section.promo.badgeTopText}
                            </span>
                            <div className="border-t border-gray-500 w-full my-1"></div>
                            <span className="text-[13px] font-bold text-center tracking-widest uppercase">
                              {section.promo.badgeBottomText}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Right Side Links Grid - Rendering ALL Links Without Truncating */}
                      <div className={`flex-1 overflow-y-auto p-6 grid gap-x-8 ${section.promo ? 'grid-cols-3 xl:grid-cols-4' : 'grid-cols-4 xl:grid-cols-5'}`}>
                        {section.columns.map((column, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-6">
                            {column.map((category) => (
                              <div key={category.title} className="flex flex-col text-left">
                                <div className="mb-3.5">
                                  {/* Updated Emerald Bottom Border */}
                                  <h3 className="text-[16px] font-bold text-[#222] inline-block border-b-2 border-[#10b981] pb-0.5 tracking-wide">
                                    {category.title}
                                  </h3>
                                </div>

                                <ul className="flex flex-col gap-2 p-0 m-0 list-none items-start">
                                  {category.links.map((link) => (
                                    <li key={link.href} className="w-full">
                                      <Link
                                        href={link.href}
                                        className="text-[14px] text-gray-600 no-underline transition-colors hover:text-[#0056b3] block w-full py-0.5"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Text-Based Bottom Banner */}
                    <div className="w-full bg-white border-t border-gray-200 py-5 px-6 flex items-center shrink-0">
                      <div className="text-[15px] text-[#333]">
                        Not sure where to begin?{" "}
                        <Link
                          href="/services"
                          className="font-medium text-[#333] underline decoration-1 underline-offset-4 transition-colors hover:text-[#10b981] hover:decoration-[#10b981]"
                        >
                          Browse us
                        </Link>
                        {" "}or{" "}
                        <Link
                          href="/about"
                          className="font-medium text-[#333] underline decoration-1 underline-offset-4 transition-colors hover:text-[#10b981] hover:decoration-[#10b981]"
                        >
                          Learn more about Us
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* NEW Top Navigation Search Bar (Positioned before Contact button) */}
          <div className="ml-auto mr-6 hidden lg:flex items-center">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] bg-[#f8f9fa] border border-gray-200 rounded-full py-1.5 pl-4 pr-10 text-[14px] text-[#333] placeholder-gray-400 outline-none focus:w-[240px] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] focus:bg-white transition-all duration-300"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#10b981]">
                <SearchIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Action Button (Updated to Emerald) */}
          <Link
            href="/contact/"
            className="hidden shrink-0 whitespace-nowrap bg-[#10b981] px-6 py-[11px] text-[14px] font-bold text-white no-underline transition hover:bg-[#059669] lg:inline-block rounded-sm shadow-sm"
          >
            Contact us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="ml-auto flex flex-col gap-[5px] lg:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2.5px] w-[22px] bg-[#333] transition-all duration-300 ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-[2.5px] w-[22px] bg-[#333] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2.5px] w-[22px] bg-[#333] transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile Accordion */}
        <div
          className={`absolute left-0 top-full z-[998] w-full bg-white pb-6 transition-all duration-300 shadow-xl border-t border-gray-200 lg:hidden ${isMobileMenuOpen ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2 opacity-0"
            }`}
        >
          <div className="max-h-[75vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-100 bg-[#f8f9fa]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-white border border-gray-300 rounded-sm py-2 pl-4 pr-10 text-[14px] text-[#333] outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {navSections.map((section) => {
              const isOpen = openAccordion === section.id;
              const flatCategories = section.columns.flat();

              return (
                <div key={section.id} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(section.id)}
                    className={`flex w-full items-center justify-between px-6 py-4 text-left font-bold text-[#333] ${isOpen ? "bg-gray-50" : ""}`}
                  >
                    <span>{section.title}</span>
                    <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`${isOpen ? "block" : "hidden"} bg-white pb-2`}>

                    {section.promo && (
                      <div className="px-6 py-4 mb-2 bg-gray-50 border-b border-gray-100">
                        <div className="bg-[#3b434a] p-4 rounded-sm border-b-[5px] border-[#10b981] text-white flex flex-col gap-2">
                          <span className="text-[11px] font-bold tracking-widest uppercase text-gray-200">
                            {section.promo.badgeTopText}
                          </span>
                          <div className="border-t border-gray-500 w-full my-1"></div>
                          <span className="text-[13px] font-bold text-center tracking-widest uppercase">
                            {section.promo.badgeBottomText}
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-600 mt-4 leading-relaxed font-medium">
                          {section.promo.heading}
                        </p>
                      </div>
                    )}

                    {flatCategories.map((category) => (
                      <div key={category.title} className="px-6 py-3">
                        <div className="mb-2">
                          <h4 className="text-[14px] font-bold text-[#222] inline-block border-b-2 border-[#10b981] pb-0.5">
                            {category.title}
                          </h4>
                        </div>
                        <ul className="flex flex-col gap-2 pl-2 border-l border-gray-200 list-none m-0">
                          {category.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="block text-[14px] text-gray-600 no-underline py-0.5"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 text-center border-t border-gray-100 mt-2">
            <Link
              href="/contact/"
              onClick={closeMobileMenu}
              className="block w-full bg-[#10b981] py-3 text-center font-bold text-white no-underline rounded-sm shadow-sm transition-colors hover:bg-[#059669]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}