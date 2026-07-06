import React, { useState, useEffect, useCallback, ReactNode } from "react";

// PLACEHOLDER COMPONENTS FOR YOUR LOCAL SVGS
// We cannot import local files on your computer. paste your SVG path code inside these returns.
// instructed by previous turns to provide componentized, clean code ("Stakeholder vibe").

const SupplyChainSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 750" width="100%" height="100%">
    <defs>
      <filter id="layerShadow" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#0f172a" floodOpacity="0.07" />
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.04" />
      </filter>

      <filter id="widgetShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.03" />
      </filter>

      <g id="dashboard-skeleton">
        <rect x="20" y="20" width="220" height="860" rx="16" fill="#ffffff" />
        <rect x="260" y="20" width="1145" height="60" rx="16" fill="#ffffff" />
        <rect x="260" y="150" width="1145" height="85" rx="16" fill="#ffffff" />
        <rect x="260" y="310" width="275" height="590" rx="16" fill="#f8fafc" />
        <rect x="555" y="310" width="275" height="590" rx="16" fill="#f8fafc" />
        <rect x="850" y="310" width="275" height="590" rx="16" fill="#f8fafc" />
        <rect x="1145" y="310" width="275" height="590" rx="16" fill="#f8fafc" />
      </g>
    </defs>

    <rect width="100%" height="100%" fill="transparent" />

    <g transform="translate(30, 30)">
      <rect width="1040" height="650" rx="20" fill="#ffffff" filter="url(#layerShadow)" />
      <g transform="translate(16, 10) scale(0.7)">
        <use href="#dashboard-skeleton" opacity="0.25" />
      </g>
      <animateTransform attributeName="transform" type="translate" from="0 0" to="30 30" dur="0.7s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
    </g>

    <g transform="translate(15, 15)">
      <rect width="1040" height="650" rx="20" fill="#ffffff" filter="url(#layerShadow)" />
      <g transform="translate(16, 10) scale(0.7)">
        <use href="#dashboard-skeleton" opacity="0.55" />
      </g>
      <animateTransform attributeName="transform" type="translate" from="0 0" to="15 15" dur="0.5s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
    </g>

    <g transform="translate(0, 0)">
      <rect width="1040" height="650" rx="20" fill="#f1f5f9" filter="url(#layerShadow)" />
      <animateTransform attributeName="transform" type="translate" from="-15 -15" to="0 0" dur="0.4s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />

      <g transform="translate(16, 10) scale(0.7)">

        <g transform="translate(20, 20)">
          <rect width="220" height="860" rx="20" fill="#ffffff" filter="url(#widgetShadow)" />

          <rect x="20" y="25" width="32" height="32" rx="8" fill="#f97316" />
          <path d="M28 46 L34 32 L40 46 Z" fill="#ffffff" opacity="0.9" />
          <path d="M32 46 L36 36 L40 46 Z" fill="#f1f5f9" />
          <text x="64" y="47" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="800" fill="#0f172a">NexusFlow</text>

          <text x="24" y="105" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#94a3b8" letterSpacing="0.5">MENU</text>

          <g transform="translate(16, 120)" fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
            <rect x="8" y="4" width="16" height="14" rx="3" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <line x1="12" y1="8" x2="20" y2="8" stroke="#64748b" strokeWidth="1.5" />
            <text x="36" y="16">Shipment List</text>
          </g>
          <g transform="translate(16, 156)" fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
            <circle cx="16" cy="11" r="7" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <line x1="13" y1="11" x2="19" y2="11" stroke="#64748b" strokeWidth="1.5" />
            <line x1="16" y1="8" x2="16" y2="14" stroke="#64748b" strokeWidth="1.5" />
            <text x="36" y="16">New Shipment</text>
          </g>
          <g transform="translate(16, 192)" fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
            <path d="M9 6 h14 v10 h-14 z" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinejoin="round" />
            <text x="36" y="16">Shipment Detail</text>
          </g>
          <g transform="translate(12, 224)">
            <rect width="196" height="36" rx="10" fill="#f97316" />
            <path d="M20 22 l4-4 l4 4 m-4-4 v8" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="40" y="23" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#ffffff">Trending Board</text>
          </g>
          <g transform="translate(16, 276)" fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
            <path d="M10 6 h12 v12 h-12 z" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="36" y="16">Document Vault</text>
          </g>
          <g transform="translate(16, 312)" fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
            <rect x="9" y="6" width="14" height="12" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="36" y="16">Appointments</text>
          </g>

          <g transform="translate(16, 700)" fontFamily="system-ui, sans-serif">
            <text x="8" y="0" fontSize="11" fontWeight="700" fill="#94a3b8" letterSpacing="0.5">LIVE DATA</text>
            <text x="8" y="30" fontSize="12" fontWeight="600" fill="#64748b">In Transit</text>
            <text x="180" y="30" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="end">142</text>
            <text x="8" y="56" fontSize="12" fontWeight="600" fill="#64748b">Pending Tender</text>
            <text x="180" y="56" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="end">23</text>
            <text x="8" y="82" fontSize="12" fontWeight="600" fill="#64748b">Active Exceptions</text>
            <text x="180" y="82" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="end">8</text>
            <text x="8" y="108" fontSize="12" fontWeight="600" fill="#64748b">Delivered Today</text>
            <text x="180" y="108" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="end">31</text>
            <line x1="8" y1="124" x2="180" y2="124" stroke="#f1f5f9" strokeWidth="1.5" />
            <text x="8" y="144" fontSize="12" fontWeight="600" fill="#64748b">OTD Rate</text>
            <text x="180" y="144" fontSize="12" fontWeight="700" fill="#10b981" textAnchor="end">94.2%</text>
          </g>
        </g>

        <g transform="translate(260, 20)">
          <rect width="1145" height="60" rx="14" fill="#ffffff" filter="url(#widgetShadow)" />
          <path d="M28 30 a5 5 0 1 1 10 0 a5 5 0 1 1 -10 0 M35 35 l4 4" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <text x="52" y="35" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="500" fill="#94a3b8">Search...</text>

          <path d="M960 24 l4 4 l-4 4 M964 28 h-10" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          <circle cx="1060" cy="30" r="14" fill="#fed7aa" />
          <circle cx="1060" cy="26" r="5" fill="#ea580c" />
          <path d="M1050 38 c0-4 4-6 10-6 s10 2 10 6 z" fill="#ea580c" />
          <text x="1085" y="34" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#334155">Sophia</text>
        </g>

        <g transform="translate(260, 100)" fontFamily="system-ui, sans-serif">
          <text x="0" y="16" fontSize="12" fontWeight="600" fill="#94a3b8">Nexusflow  &gt;  Shipment Orchestration  &gt; <tspan fill="#0f172a"> Tendering Board</tspan></text>
          <g transform="translate(895, 0)">
            <rect width="125" height="32" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="62" y="20" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">Import CSV / EDI</text>
            <rect x="135" y="0" width="115" height="32" rx="8" fill="#f97316" />
            <text x="192" y="20" fontSize="12" fontWeight="700" fill="#ffffff" textAnchor="middle">+ New Shipment</text>
          </g>
        </g>

        <g transform="translate(260, 150)">
          <rect width="1145" height="85" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />
          <g transform="translate(24, 20)" fontFamily="system-ui, sans-serif">
            <text x="0" y="24" fontSize="24" fontWeight="800" fill="#0f172a">142</text>
            <text x="46" y="22" fontSize="13" fontWeight="600" fill="#64748b">In Transit</text>
            <text x="0" y="44" fontSize="11" fontWeight="700" fill="#10b981">▲ 12% <tspan fill="#94a3b8" fontWeight="500">vs yesterday</tspan></text>
          </g>
          <line x1="200" y1="20" x2="200" y2="65" stroke="#f1f5f9" strokeWidth="1.5" />
          <g transform="translate(224, 20)" fontFamily="system-ui, sans-serif">
            <text x="0" y="24" fontSize="24" fontWeight="800" fill="#0f172a">94%</text>
            <text x="56" y="22" fontSize="13" fontWeight="600" fill="#64748b">OTD</text>
            <text x="0" y="44" fontSize="11" fontWeight="700" fill="#10b981">▲ 1.3% <tspan fill="#94a3b8" fontWeight="500">vs last week</tspan></text>
          </g>
          <line x1="400" y1="20" x2="400" y2="65" stroke="#f1f5f9" strokeWidth="1.5" />
          <g transform="translate(424, 20)" fontFamily="system-ui, sans-serif">
            <text x="0" y="24" fontSize="24" fontWeight="800" fill="#0f172a">8</text>
            <text x="20" y="22" fontSize="13" fontWeight="600" fill="#64748b">Exceptions</text>
            <text x="0" y="44" fontSize="11" fontWeight="700" fill="#ef4444">▲ 3 <tspan fill="#94a3b8" fontWeight="500">New today</tspan></text>
          </g>
          <line x1="600" y1="20" x2="600" y2="65" stroke="#f1f5f9" strokeWidth="1.5" />
          <g transform="translate(624, 20)" fontFamily="system-ui, sans-serif">
            <text x="0" y="24" fontSize="24" fontWeight="800" fill="#0f172a">23</text>
            <text x="34" y="22" fontSize="13" fontWeight="600" fill="#64748b">Pending</text>
            <text x="0" y="44" fontSize="11" fontWeight="700" fill="#2563eb">▲ 12% <tspan fill="#94a3b8" fontWeight="500">Awaiting carrier reply</tspan></text>
          </g>
          <line x1="800" y1="20" x2="800" y2="65" stroke="#f1f5f9" strokeWidth="1.5" />
          <g transform="translate(824, 20)" fontFamily="system-ui, sans-serif">
            <text x="0" y="24" fontSize="24" fontWeight="800" fill="#0f172a">31</text>
            <text x="34" y="22" fontSize="13" fontWeight="600" fill="#64748b">Delivered</text>
            <text x="0" y="44" fontSize="11" fontWeight="700" fill="#10b981">▲ 11% <tspan fill="#94a3b8" fontWeight="500">vs 28 days avg</tspan></text>
          </g>
        </g>

        <g transform="translate(260, 260)" fontFamily="system-ui, sans-serif">
          <text x="0" y="18" fontSize="16" fontWeight="800" fill="#0f172a">Tendering Status Board</text>
          <text x="0" y="34" fontSize="11" fontWeight="500" fill="#94a3b8">Live carrier tender cascade - auto refreshes every 60s</text>

          <circle cx="640" cy="20" r="3" fill="#10b981">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="650" y="24" fontSize="11" fontWeight="700" fill="#10b981" letterSpacing="0.5">AUTO-REFRESHING</text>

          <rect x="790" y="6" width="115" height="26" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <text x="815" y="23" fontSize="11" fontWeight="700" fill="#475569">Cascade Rules</text>

          <rect x="915" y="6" width="75" height="26" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <text x="940" y="23" fontSize="11" fontWeight="700" fill="#475569">Export</text>
        </g>

        <g transform="translate(260, 310)">
          <rect width="275" height="590" rx="16" fill="#f8fafc" />
          <circle cx="20" cy="25" r="4" fill="#eab308" />
          <text x="32" y="29" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Pending</text>
          <rect x="225" y="14" width="30" height="20" rx="10" fill="#ffffff" />
          <text x="240" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b" textAnchor="middle">23</text>

          <g>
            <animateTransform attributeName="transform" type="translate" values="10,50; 10,50; 10,185; 10,185; 10,50" keyTimes="0; 0.2; 0.3; 0.8; 1" dur="10s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" />
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Nashville &gt; Charlotte</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00040</text>

            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Estes Express</text>
            <g>
              <rect x="135" y="62" width="35" height="18" rx="4" fill="#10b981" opacity="0">
                <animate attributeName="opacity" values="0; 0; 0.2; 0" keyTimes="0; 0.45; 0.5; 1" dur="10s" repeatCount="indefinite" />
              </rect>
              <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">
                <tspan opacity="1">$995<animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0; 0.49; 0.5; 0.99; 1" dur="10s" repeatCount="indefinite" /></tspan>
                <tspan x="140" opacity="0">$920<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0; 0.49; 0.5; 0.99; 1" dur="10s" repeatCount="indefinite" /></tspan>
              </text>
            </g>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#ffffff">
              <animate attributeName="fill" values="#ffffff; #ffffff; #dbeafe; #dbeafe; #ffffff" keyTimes="0; 0.49; 0.5; 0.99; 1" dur="10s" repeatCount="indefinite" />
            </rect>
            <circle cx="188" cy="72" r="3" fill="#eab308">
              <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0; 0.49; 0.5; 0.99; 1" dur="10s" repeatCount="indefinite" />
            </circle>
            <text x="196" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#eab308">
              <tspan opacity="1">Pending<animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0; 0.49; 0.5; 0.99; 1" dur="10s" repeatCount="indefinite" /></tspan>
              <tspan x="210" textAnchor="middle" fill="#2563eb" opacity="0">Accepted<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0; 0.49; 0.5; 0.99; 1" dur="10s" repeatCount="indefinite" /></tspan>
            </text>

            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. Old Dominion</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$940</text>
          </g>

          <g>
            <animateTransform attributeName="transform" type="translate" values="10,185; 10,185; 10,50; 10,50; 10,185" keyTimes="0; 0.2; 0.3; 0.8; 1" dur="10s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" />
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Atlanta &gt; Miami</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00041</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. UPS Freight</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$165</text>
            <circle cx="188" cy="72" r="3" fill="#eab308" /><text x="196" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#eab308">Pending</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. FedEx Freight</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$178</text>
          </g>

          <g transform="translate(10, 320)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Chicago &gt; Dallas</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00042</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. R+L Carriers</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$1,120</text>
            <circle cx="188" cy="72" r="3" fill="#eab308" /><text x="196" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#eab308">Pending</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. XPO Logistics</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$1,250</text>
          </g>

          <g transform="translate(10, 455)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Houston &gt; Phoenix</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#fef3c7" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#b45309" textAnchor="middle">Pcl</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00043</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. DHL Express</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$85</text>
            <circle cx="188" cy="72" r="3" fill="#eab308" /><text x="196" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#eab308">Pending</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. FedEx Ground</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$95</text>
          </g>
        </g>

        <g transform="translate(555, 310)">
          <rect width="275" height="590" rx="16" fill="#f8fafc" />
          <circle cx="20" cy="25" r="4" fill="#2563eb" />
          <text x="32" y="29" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Accepted</text>
          <rect x="225" y="14" width="30" height="20" rx="10" fill="#ffffff" />
          <text x="240" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b" textAnchor="middle">51</text>

          <g>
            <animateTransform attributeName="transform" type="translate" values="10,50; 10,50; 10,185; 10,185; 10,50" keyTimes="0; 0.6; 0.7; 0.9; 1" dur="12s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" />
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Nashville &gt; Charlotte</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00040</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Estes Express</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$995</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#dbeafe" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#2563eb" textAnchor="middle">Accepted</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. Old Dominion</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$940</text>
          </g>

          <g>
            <animateTransform attributeName="transform" type="translate" values="10,185; 10,185; 10,50; 10,50; 10,185" keyTimes="0; 0.6; 0.7; 0.9; 1" dur="12s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" />
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Atlanta &gt; Miami</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00041</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. UPS Freight</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$165</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#dbeafe" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#2563eb" textAnchor="middle">Accepted</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. FedEx Freight</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$178</text>
          </g>

          <g transform="translate(10, 320)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Boston &gt; Newark</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00046</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Pitt Ohio</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$420</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#dbeafe" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#2563eb" textAnchor="middle">Accepted</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. R+L Carriers</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$450</text>
          </g>

          <g transform="translate(10, 455)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Chicago &gt; Detroit</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#fef3c7" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#b45309" textAnchor="middle">Pcl</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00047</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. FedEx Ground</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$45</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#dbeafe" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#2563eb" textAnchor="middle">Accepted</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. UPS Express</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$52</text>
          </g>
        </g>

        <g transform="translate(850, 310)">
          <rect width="275" height="590" rx="16" fill="#f8fafc" />
          <circle cx="20" cy="25" r="4" fill="#ef4444" />
          <text x="32" y="29" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Re-tendering</text>
          <rect x="225" y="14" width="30" height="20" rx="10" fill="#ffffff" />
          <text x="240" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b" textAnchor="middle">8</text>

          <g transform="translate(10, 50)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Nashville &gt; Charlotte</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00040</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Estes Express</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$995</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#fee2e2" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#ef4444" textAnchor="middle">Declined</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. Old Dominion</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$940</text>
          </g>

          <g transform="translate(10, 185)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Atlanta &gt; Miami</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00041</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. UPS Freight</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$165</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#fee2e2" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#ef4444" textAnchor="middle">Declined</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. FedEx Freight</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$178</text>
          </g>

          <g transform="translate(10, 320)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Dallas &gt; Austin</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00049</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Central Freight</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$290</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#fee2e2" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#ef4444" textAnchor="middle">Declined</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. SAIA LTL</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$310</text>
          </g>

          <g transform="translate(10, 455)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Seattle &gt; Portland</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00044</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Oak Harbor</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$310</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#fee2e2" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#ef4444" textAnchor="middle">Declined</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. XPO Logistics</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$335</text>
          </g>
        </g>

        <g transform="translate(1145, 310)">
          <rect width="275" height="590" rx="16" fill="#f8fafc" />
          <circle cx="20" cy="25" r="4" fill="#10b981" />
          <text x="32" y="29" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Completed</text>
          <rect x="225" y="14" width="30" height="20" rx="10" fill="#ffffff" />
          <text x="240" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b" textAnchor="middle">32</text>

          <g transform="translate(10, 50)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Nashville &gt; Charlotte</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#fef3c7" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#b45309" textAnchor="middle">Pcl</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00040</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Estes Express</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$995</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#d1fae5" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#10b981" textAnchor="middle">Done</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. Old Dominion</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$940</text>
          </g>

          <g transform="translate(10, 185)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Atlanta &gt; Miami</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#fef3c7" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#b45309" textAnchor="middle">Pcl</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00041</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. UPS Freight</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$165</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#d1fae5" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#10b981" textAnchor="middle">Done</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. FedEx Freight</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$178</text>
          </g>

          <g transform="translate(10, 320)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Phoenix &gt; San Diego</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00052</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. OnTrac Logistics</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$115</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#d1fae5" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#10b981" textAnchor="middle">Done</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. FedEx Express</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$130</text>
          </g>

          <g transform="translate(10, 455)">
            <rect width="255" height="125" rx="12" fill="#ffffff" stroke="#e2e8f0" filter="url(#widgetShadow)" />
            <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Denver &gt; Salt Lake</text>
            <rect x="210" y="12" width="32" height="18" rx="4" fill="#f3e8ff" />
            <text x="226" y="25" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a855f7" textAnchor="middle">LTL</text>
            <text x="14" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#94a3b8">Shipment ID: SHP-2026-00045</text>
            <text x="14" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">1. Ward Trucking</text>
            <text x="140" y="76" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">$540</text>
            <rect x="180" y="62" width="60" height="20" rx="4" fill="#d1fae5" /><text x="210" y="76" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#10b981" textAnchor="middle">Done</text>
            <text x="14" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#94a3b8">2. ABF Freight</text>
            <text x="140" y="104" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#64748b">$555</text>
          </g>
        </g>
      </g>
    </g>
  </svg>

);

const PrescriptionsSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 750" width="100%" height="100%">
    <defs>
      <filter id="layerShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="8" dy="12" stdDeviation="14" floodColor="#022c22" floodOpacity="0.08" />
      </filter>

      <filter id="widgetShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.05" />
      </filter>

      <pattern id="qrNoise" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" fill="#0f172a" />
        <rect x="4" y="4" width="4" height="4" fill="#0f172a" />
        <rect x="0" y="4" width="2" height="2" fill="#0f172a" />
        <rect x="6" y="0" width="2" height="2" fill="#0f172a" />
      </pattern>

      <g id="ui-skeleton">
        <rect x="0" y="0" width="220" height="650" rx="16" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="250" y="80" width="380" height="540" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="660" y="80" width="360" height="260" rx="8" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="660" y="370" width="360" height="250" rx="8" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
      </g>
    </defs>
    <g transform="translate(30, 30)">
      <rect width="1040" height="650" rx="20" fill="#ffffff" filter="url(#layerShadow)" />
      <use href="#ui-skeleton" opacity="0.2" />
      <animateTransform attributeName="transform" type="translate" from="0 0" to="30 30" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
    </g>

    <g transform="translate(15, 15)">
      <rect width="1040" height="650" rx="20" fill="#ffffff" filter="url(#layerShadow)" />
      <use href="#ui-skeleton" opacity="0.5" />
      <animateTransform attributeName="transform" type="translate" from="0 0" to="15 15" dur="0.6s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
    </g>

    <g transform="translate(0, 0)">
      <rect width="1040" height="650" rx="20" fill="#f8fafc" filter="url(#layerShadow)" />
      <animateTransform attributeName="transform" type="translate" from="-20 -20" to="0 0" dur="0.5s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
      <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />

      <g transform="translate(0, 0)">
        <rect width="220" height="650" rx="20" fill="#ffffff" filter="url(#widgetShadow)" />

        <path d="M 30 55 C 30 45 40 45 40 55 C 40 65 30 65 30 55 Z M 40 55 C 40 40 55 40 55 55 C 55 70 40 70 40 55 Z M 55 55 C 55 45 65 45 65 55 C 65 65 55 65 55 55 Z" fill="#34d399" opacity="0.8" />
        <text x="75" y="60" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#0f172a">MyHealth</text>

        <g fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#64748b">
          <rect x="30" y="110" width="6" height="6" rx="1" fill="none" stroke="#94a3b8" strokeWidth="2" /><rect x="40" y="110" width="6" height="6" rx="1" fill="none" stroke="#94a3b8" strokeWidth="2" /><rect x="30" y="120" width="6" height="6" rx="1" fill="none" stroke="#94a3b8" strokeWidth="2" /><rect x="40" y="120" width="6" height="6" rx="1" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <text x="65" y="123">Dashboard</text>

          <circle cx="38" cy="170" r="4" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <path d="M30,182 c0,-4 16,-4 16,0" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <text x="65" y="179">Doctors</text>

          <rect x="30" y="222" width="16" height="16" rx="3" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <path d="M30,228 h16 M34,218 v6 M42,218 v6" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <text x="65" y="235">Appointments</text>

          <rect x="0" y="265" width="220" height="50" fill="#ecfdf5" />
          <rect x="0" y="265" width="4" height="50" fill="#10b981" />
          <rect x="30" y="280" width="14" height="18" rx="2" fill="none" stroke="#10b981" strokeWidth="2" />
          <path d="M34,289 h6 M37,286 v6" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <text x="65" y="294" fill="#10b981">Prescriptions</text>

          <path d="M30,340 l8,5 l8,-5" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="30" y="336" width="18" height="14" rx="2" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="48" cy="336" r="4" fill="#10b981" />
          <text x="65" y="348">Messages</text>

          <circle cx="38" cy="392" r="8" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <path d="M38,388 v5 l3,2" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <text x="65" y="396">History</text>

          <circle cx="38" cy="510" r="8" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <path d="M36,508 c0,-2 4,-2 4,0 c0,2 -2,3 -2,3 M38,515 v1" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <text x="65" y="514">Help</text>

          <path d="M38,555 h-6 v14 h6 M40,558 l4,4 l-4,4 M32,562 h12" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <text x="65" y="567">Logout</text>
        </g>
      </g>

      <g transform="translate(250, 20)">
        <text x="0" y="40" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="600" fill="#334155">Prescriptions</text>

        <path d="M 680 40 a 6 6 0 0 0 -12 0 v 4 l -2 2 v 2 h 16 v -2 l -2 -2 v -4 z M 671 49 a 3 3 0 0 0 6 0" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="715" cy="40" r="7" fill="none" stroke="#64748b" strokeWidth="1.8" strokeDasharray="2 2" />
        <circle cx="715" cy="40" r="3" fill="none" stroke="#64748b" strokeWidth="1.8" />

        <circle cx="760" cy="40" r="16" fill="#94a3b8" />
        <circle cx="760" cy="35" r="5" fill="#f8fafc" />
        <path d="M748,50 a12,12 0 0,1 24,0" fill="#f8fafc" />
      </g>

      <g transform="translate(250, 80)">
        <rect width="380" height="540" rx="12" fill="#ffffff" filter="url(#widgetShadow)" />

        <text x="20" y="35" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#64748b">Active Prescriptions</text>
        <text x="300" y="35" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#94a3b8">Sort by date ▾</text>
        <line x1="20" y1="55" x2="360" y2="55" stroke="#f1f5f9" strokeWidth="2" />

        <g transform="translate(0, 60)">
          <text x="20" y="25" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981">Dentist</text>
          <text x="20" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#0f172a">Dr. Schubert</text>
          <text x="20" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">23.10.2023</text>
          <text x="180" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">Validity 06.11.2023</text>
          <circle cx="340" cy="40" r="16" fill="#cbd5e1" />
          <line x1="20" y1="90" x2="360" y2="90" stroke="#f1f5f9" strokeWidth="1" />
        </g>

        <g transform="translate(0, 150)">
          <rect width="380" height="90" fill="#f0fdf4" />
          <rect width="3" height="90" fill="#10b981" />
          <text x="20" y="25" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981">General practitioner</text>
          <text x="20" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#0f172a">Dr. Bernard</text>
          <text x="20" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">15.09.2023</text>
          <text x="180" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">Validity 15.10.2023</text>
          <circle cx="340" cy="40" r="16" fill="#94a3b8" />
          <line x1="20" y1="90" x2="360" y2="90" stroke="#f1f5f9" strokeWidth="1" />
        </g>

        <g transform="translate(0, 240)">
          <text x="20" y="25" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981">Ophthalmologist</text>
          <text x="20" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#0f172a">Dr. Faerber</text>
          <text x="20" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">28.08.2023</text>
          <text x="180" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">Validity 15.09.2023</text>
          <circle cx="340" cy="40" r="16" fill="#e2e8f0" />
          <line x1="20" y1="90" x2="360" y2="90" stroke="#f1f5f9" strokeWidth="1" />
        </g>

        <g transform="translate(0, 330)">
          <text x="20" y="25" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981">Dermatologist</text>
          <text x="20" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#0f172a">Dr. Vogt</text>
          <text x="20" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">15.08.2023</text>
          <text x="180" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">Validity 02.09.2023</text>
          <circle cx="340" cy="40" r="16" fill="#cbd5e1" />
          <line x1="20" y1="90" x2="360" y2="90" stroke="#f1f5f9" strokeWidth="1" />
        </g>

        <g transform="translate(0, 420)">
          <text x="20" y="25" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981">Pediatrician</text>
          <text x="20" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#0f172a">Dr. Wagner</text>
          <text x="20" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">25.07.2023</text>
          <text x="180" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">Validity 15.08.2023</text>
          <circle cx="340" cy="40" r="16" fill="#94a3b8" />
        </g>
      </g>

      <g transform="translate(640, 80)">
        <rect width="380" height="260" rx="8" fill="#ffffff" filter="url(#widgetShadow)" />
        <rect x="10" y="10" width="360" height="240" fill="none" stroke="#e2e8f0" strokeWidth="2" />

        <text x="25" y="35" fontFamily="monospace, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">Printout to redeem your e-prescription</text>

        <rect x="25" y="45" width="230" height="30" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <text x="35" y="55" fontFamily="monospace, sans-serif" fontSize="6" fill="#64748b">FOR</text>
        <text x="35" y="67" fontFamily="monospace, sans-serif" fontSize="11" fontWeight="600" fill="#0f172a">René Schluß</text>
        <text x="180" y="55" fontFamily="monospace, sans-serif" fontSize="6" fill="#64748b">BORN</text>
        <text x="180" y="67" fontFamily="monospace, sans-serif" fontSize="11" fontWeight="600" fill="#0f172a">30.07.1996</text>

        <rect x="25" y="85" width="230" height="40" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <text x="35" y="95" fontFamily="monospace, sans-serif" fontSize="6" fill="#64748b">FROM</text>
        <text x="35" y="105" fontFamily="monospace, sans-serif" fontSize="10" fontWeight="600" fill="#0f172a">Dr. Bernard</text>
        <text x="35" y="115" fontFamily="monospace, sans-serif" fontSize="8" fill="#334155">General practitioner</text>
        <text x="180" y="95" fontFamily="monospace, sans-serif" fontSize="6" fill="#64748b">DATE</text>
        <text x="180" y="105" fontFamily="monospace, sans-serif" fontSize="10" fontWeight="600" fill="#0f172a">15.09.2023</text>

        <g transform="translate(270, 45)">
          <rect width="80" height="80" fill="url(#qrNoise)" />
          <path d="M0,0 h22 v22 h-22 z M5,5 h12 v12 h-12 z" fill="#0f172a" />
          <path d="M58,0 h22 v22 h-22 z M63,5 h12 v12 h-12 z" fill="#0f172a" />
          <path d="M0,58 h22 v22 h-22 z M5,63 h12 v12 h-12 z" fill="#0f172a" />

          <line x1="-5" y1="0" x2="85" y2="0" stroke="#10b981" strokeWidth="3">
            <animate attributeName="y1" values="-5; 85; -5" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
            <animate attributeName="y2" values="-5; 85; -5" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </line>
          <line x1="-5" y1="0" x2="85" y2="0" stroke="#34d399" strokeWidth="8" opacity="0.3">
            <animate attributeName="y1" values="-5; 85; -5" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
            <animate attributeName="y2" values="-5; 85; -5" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </line>
        </g>

        <g transform="translate(25, 140)">
          <rect width="40" height="40" fill="url(#qrNoise)" />
          <path d="M0,0 h12 v12 h-12 z M3,3 h6 v6 h-6 z M28,0 h12 v12 h-12 z M31,3 h6 v6 h-6 z M0,28 h12 v12 h-12 z M3,31 h6 v6 h-6 z" fill="#0f172a" />
          <text x="50" y="10" fontFamily="monospace, sans-serif" fontSize="8" fontWeight="700" fill="#0f172a">1x Ibuflam® 400 mg</text>
          <text x="50" y="20" fontFamily="monospace, sans-serif" fontSize="7" fill="#334155">Lichtenstein / 20 St N1</text>
          <text x="50" y="30" fontFamily="monospace, sans-serif" fontSize="7" fill="#334155">PZN: 06313355</text>
        </g>

        <g transform="translate(190, 140)">
          <rect width="40" height="40" fill="url(#qrNoise)" />
          <path d="M0,0 h12 v12 h-12 z M3,3 h6 v6 h-6 z M28,0 h12 v12 h-12 z M31,3 h6 v6 h-6 z M0,28 h12 v12 h-12 z M3,31 h6 v6 h-6 z" fill="#0f172a" />
          <text x="50" y="10" fontFamily="monospace, sans-serif" fontSize="8" fontWeight="700" fill="#0f172a">1x Ibuflam® 400 mg</text>
          <text x="50" y="20" fontFamily="monospace, sans-serif" fontSize="7" fill="#334155">Lichtenstein / 20 St N1</text>
          <text x="50" y="30" fontFamily="monospace, sans-serif" fontSize="7" fill="#334155">PZN: 06313355</text>
        </g>

        <rect x="200" y="195" width="150" height="35" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <text x="210" y="210" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="700" fill="#0f172a">App for e-prescription</text>
        <text x="210" y="220" fontFamily="system-ui, sans-serif" fontSize="6" fill="#64748b">Receive your e-prescriptions</text>
        <rect x="325" y="202" width="20" height="20" fill="url(#qrNoise)" />
      </g>

      <g transform="translate(860, 360)">
        <path d="M0,0 l6,6 l6,-6 M6,6 v-10" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="0" y1="10" x2="12" y2="10" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        <text x="20" y="8" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#64748b">Save</text>

        <path d="M70,0 v-4 h10 v4 M70,8 h10 v6 h-10 z" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="68" y1="4" x2="82" y2="4" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        <text x="90" y="8" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#64748b">Print</text>
      </g>

      <g transform="translate(640, 400)">
        <rect width="380" height="230" rx="12" fill="#ffffff" filter="url(#widgetShadow)" />

        <text x="20" y="35" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#94a3b8">Expired Prescriptions</text>
        <text x="300" y="35" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#cbd5e1">Sort by date ▾</text>
        <line x1="20" y1="55" x2="360" y2="55" stroke="#f1f5f9" strokeWidth="2" />

        <rect x="365" y="65" width="4" height="80" rx="2" fill="#e2e8f0" />

        <g transform="translate(0, 60)" opacity="0.6">
          <text x="20" y="25" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981">Dermatologist</text>
          <text x="20" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#0f172a">Dr. Vogt</text>
          <text x="20" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">05.09.2022</text>
          <text x="180" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">Validity 05.12.2022</text>
          <circle cx="340" cy="40" r="16" fill="#cbd5e1" />
          <line x1="20" y1="90" x2="360" y2="90" stroke="#f1f5f9" strokeWidth="1" />
        </g>

        <g transform="translate(0, 150)" opacity="0.6">
          <text x="20" y="25" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981">Pediatrician</text>
          <text x="20" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#0f172a">Dr. Wagner</text>
          <text x="20" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">20.06.2022</text>
          <text x="180" y="70" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500" fill="#64748b">Validity 10.07.2022</text>
          <circle cx="340" cy="40" r="16" fill="#e2e8f0" />
        </g>
      </g>

    </g>
  </svg>

);

const DashboardSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
    <defs>
      <filter id="layerShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="8" dy="12" stdDeviation="14" floodColor="#022c22" floodOpacity="0.08" />
      </filter>

      <filter id="widgetShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.05" />
      </filter>

      <linearGradient id="emeraldGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
      </linearGradient>

      <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>

      <g id="ui-skeleton">
        <rect x="20" y="20" width="1100" height="80" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="20" y="120" width="60" height="700" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="100" y="120" width="320" height="180" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="440" y="120" width="400" height="180" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="860" y="120" width="260" height="180" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="100" y="320" width="740" height="280" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="860" y="320" width="260" height="280" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="100" y="620" width="520" height="200" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
        <rect x="640" y="620" width="480" height="200" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="2" />
      </g>
    </defs>

    <rect width="100%" height="100%" fill="transparent" />

    <g transform="translate(30, 30)">
      <rect width="1140" height="840" rx="20" fill="#ffffff" filter="url(#layerShadow)" />
      <use href="#ui-skeleton" opacity="0.3" />
      <animateTransform attributeName="transform" type="translate" from="0 0" to="30 30" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
    </g>

    <g transform="translate(15, 15)">
      <rect width="1140" height="840" rx="20" fill="#ffffff" filter="url(#layerShadow)" />
      <use href="#ui-skeleton" opacity="0.6" />
      <animateTransform attributeName="transform" type="translate" from="0 0" to="15 15" dur="0.6s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
    </g>

    <g transform="translate(0, 0)">
      <rect width="1140" height="840" rx="20" fill="#f4f5f7" filter="url(#layerShadow)" />
      <animateTransform attributeName="transform" type="translate" from="-20 -20" to="0 0" dur="0.5s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
      <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />

      <g transform="translate(20, 20)">
        <rect width="1100" height="80" rx="20" fill="#ffffff" filter="url(#widgetShadow)" />

        <path d="M 40 40 L 50 25 L 60 40 L 50 55 Z" fill="#10b981" />
        <path d="M 50 40 L 60 25 L 70 40 L 60 55 Z" fill="#0f172a" />
        <text x="85" y="46" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#0f172a">Quantum Wealth</text>

        <rect x="300" y="20" width="300" height="40" rx="20" fill="#f1f5f9" />
        <circle cx="325" cy="40" r="6" fill="none" stroke="#64748b" strokeWidth="2" />
        <line x1="329" y1="44" x2="334" y2="49" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        <text x="350" y="45" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="500" fill="#94a3b8">Search stocks, crypto, news...</text>

        <circle cx="1000" cy="40" r="20" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        <path d="M995,42 c0,-3 10,-3 10,0 v3 h-10 z M1000,48 a2,2 0 0,1 -2,-2 h4 a2,2 0 0,1 -2,2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="1005" cy="35" r="4" fill="#ef4444" /> <circle cx="1050" cy="40" r="18" fill="#10b981" />
        <text x="1050" y="45" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#ffffff" textAnchor="middle">JS</text>
      </g>

      <g transform="translate(20, 120)">
        <rect width="60" height="700" rx="20" fill="#ffffff" filter="url(#widgetShadow)" />

        <g fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="15" y="20" width="30" height="40" rx="10" fill="#ecfdf5" stroke="none" />
          <rect x="23" y="30" width="6" height="6" rx="1" stroke="#10b981" /><rect x="31" y="30" width="6" height="6" rx="1" stroke="#10b981" /><rect x="23" y="38" width="6" height="6" rx="1" stroke="#10b981" /><rect x="31" y="38" width="6" height="6" rx="1" stroke="#10b981" />

          <path d="M22,100 v16 M30,94 v22 M38,104 v12" />

          <circle cx="30" cy="160" r="8" />
          <path d="M30,152 v16 M26,156 h8 M26,164 h8" />

          <rect x="22" y="220" width="16" height="16" rx="2" />
          <path d="M26,225 h8 M26,230 h8 M26,235 h4" />

          <circle cx="30" cy="650" r="6" />
          <path d="M30,642 v2 M30,656 v2 M22,650 h2 M36,650 h2" />
        </g>
      </g>

      <g transform="translate(100, 120)">
        <rect width="320" height="180" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />
        <text x="25" y="40" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#64748b">Total Portfolio Value</text>

        <text x="25" y="85" fontFamily="system-ui, sans-serif" fontSize="36" fontWeight="800" fill="#0f172a">
          <tspan fill="#10b981">$</tspan>142,580<tspan fontSize="24" fill="#94a3b8">.00</tspan>
        </text>

        <rect x="25" y="110" width="70" height="24" rx="12" fill="#ecfdf5" />
        <text x="60" y="126" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#10b981" textAnchor="middle">+ 2.4%</text>
        <text x="105" y="126" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="500" fill="#64748b">+$3,450 Today</text>

        <path d="M 25 160 Q 60 140 100 155 T 180 145 T 250 155 T 300 135" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round">
          <animate attributeName="strokeDasharray" values="0,300; 300,0" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
        </path>
      </g>

      <g transform="translate(440, 120)">
        <rect width="400" height="180" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />
        <text x="25" y="35" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Crypto Watchlist</text>
        <text x="340" y="35" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#3b82f6" cursor="pointer">View All</text>

        <g transform="translate(25, 60)">
          <circle cx="15" cy="15" r="15" fill="#f59e0b" opacity="0.2" />
          <text x="15" y="20" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#d97706" textAnchor="middle">₿</text>
          <text x="40" y="14" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Bitcoin</text>
          <text x="40" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#64748b">BTC</text>

          <path d="M 120 20 Q 130 10 140 15 T 160 5 T 180 10" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

          <text x="350" y="14" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="end">
            <tspan>$64,230</tspan>
            <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
          </text>
          <text x="350" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#10b981" textAnchor="end">+ 5.2%</text>
        </g>

        <g transform="translate(25, 105)">
          <circle cx="15" cy="15" r="15" fill="#6366f1" opacity="0.2" />
          <text x="15" y="20" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#4f46e5" textAnchor="middle">Ξ</text>
          <text x="40" y="14" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Ethereum</text>
          <text x="40" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#64748b">ETH</text>

          <path d="M 120 10 Q 130 20 140 15 T 160 25 T 180 20" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />

          <text x="350" y="14" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="end">$3,412</text>
          <text x="350" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#ef4444" textAnchor="end">- 1.1%</text>
        </g>

        <g transform="translate(25, 150)">
          <circle cx="15" cy="15" r="15" fill="#14b8a6" opacity="0.2" />
          <text x="15" y="20" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#0d9488" textAnchor="middle">S</text>
          <text x="40" y="14" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">Solana</text>
          <text x="40" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#64748b">SOL</text>

          <path d="M 120 25 Q 130 15 140 20 T 160 5 T 180 -5" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

          <text x="350" y="14" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a" textAnchor="end">$145.80</text>
          <text x="350" y="28" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#10b981" textAnchor="end">+ 12.4%</text>
        </g>
      </g>

      <g transform="translate(860, 120)">
        <rect width="260" height="180" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />

        <rect width="260" height="60" rx="16" fill="url(#aiGrad)" />
        <path d="M0,44 a16,16 0 0,0 16,16 h228 a16,16 0 0,0 16,-16 v16 h-260 z" fill="#ffffff" />

        <text x="25" y="35" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#ffffff">AI Market Prediction</text>

        <circle cx="225" cy="30" r="12" fill="#ffffff" opacity="0.2" />
        <circle cx="225" cy="30" r="4" fill="#ffffff">
          <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
        </circle>

        <text x="25" y="90" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">S&amp;P 500 NEXT 7 DAYS</text>
        <text x="25" y="115" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#0f172a">Strong Bullish</text>

        <rect x="25" y="135" width="210" height="8" rx="4" fill="#f1f5f9" />
        <rect x="25" y="135" width="160" height="8" rx="4" fill="url(#aiGrad)">
          <animate attributeName="width" from="0" to="160" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
        </rect>
        <text x="25" y="160" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#8b5cf6">82% Confidence Score</text>
      </g>

      <g transform="translate(100, 320)">
        <rect width="740" height="280" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />

        <text x="30" y="40" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#0f172a">Portfolio Performance</text>

        <g transform="translate(480, 20)">
          <rect x="0" y="0" width="230" height="36" rx="18" fill="#f1f5f9" />
          <rect x="170" y="4" width="56" height="28" rx="14" fill="#ffffff" filter="url(#widgetShadow)" />
          <text x="25" y="22" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#64748b" textAnchor="middle">1D</text>
          <text x="83" y="22" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#64748b" textAnchor="middle">1W</text>
          <text x="141" y="22" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#64748b" textAnchor="middle">1M</text>
          <text x="198" y="22" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">1Y</text>
        </g>

        <g stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4">
          <line x1="30" y1="80" x2="700" y2="80" />
          <line x1="30" y1="130" x2="700" y2="130" />
          <line x1="30" y1="180" x2="700" y2="180" />
          <line x1="30" y1="230" x2="700" y2="230" />
        </g>

        <g fontFamily="system-ui, sans-serif" fontSize="11" fill="#94a3b8">
          <text x="30" y="75">$150k</text>
          <text x="30" y="125">$125k</text>
          <text x="30" y="175">$100k</text>
          <text x="30" y="225">$75k</text>
        </g>

        <g fontFamily="system-ui, sans-serif" fontSize="11" fill="#94a3b8" textAnchor="middle">
          <text x="100" y="260">Jan</text>
          <text x="250" y="260">Apr</text>
          <text x="400" y="260">Jul</text>
          <text x="550" y="260">Oct</text>
          <text x="700" y="260">Dec</text>
        </g>

        <path d="M 80 230 C 150 200, 200 240, 280 160 C 350 90, 420 180, 520 110 C 600 50, 650 90, 700 60"
          fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round"
          strokeDasharray="1000" strokeDashoffset="1000">
          <animate attributeName="strokeDashoffset" to="0" dur="2s" begin="0.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
        </path>

        <path d="M 80 230 C 150 200, 200 240, 280 160 C 350 90, 420 180, 520 110 C 600 50, 650 90, 700 60 L 700 230 L 80 230 Z"
          fill="url(#chartFill)" opacity="0">
          <animate attributeName="opacity" to="1" dur="1s" begin="2s" fill="freeze" />
        </path>

        <line x1="700" y1="60" x2="700" y2="230" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" opacity="0">
          <animate attributeName="opacity" to="1" dur="0.5s" begin="2.5s" fill="freeze" />
        </line>
        <circle cx="700" cy="60" r="6" fill="#ffffff" stroke="#10b981" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" to="1" dur="0.5s" begin="2.5s" fill="freeze" />
        </circle>
      </g>

      <g transform="translate(860, 320)">
        <rect width="260" height="280" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />
        <text x="25" y="35" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#0f172a">Asset Allocation</text>

        <g transform="translate(130, 130)">
          <circle cx="0" cy="0" r="60" fill="none" stroke="#f1f5f9" strokeWidth="20" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="377" strokeDashoffset="150" transform="rotate(-90)" strokeLinecap="round">
            <animate attributeName="strokeDashoffset" values="377;150" dur="1.5s" begin="0.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </circle>
          <circle cx="0" cy="0" r="60" fill="none" stroke="#6366f1" strokeWidth="20" strokeDasharray="377" strokeDashoffset="263" transform="rotate(126)" strokeLinecap="round">
            <animate attributeName="strokeDashoffset" values="377;263" dur="1.5s" begin="0.7s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </circle>
          <circle cx="0" cy="0" r="60" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="377" strokeDashoffset="339" transform="rotate(234)" strokeLinecap="round">
            <animate attributeName="strokeDashoffset" values="377;339" dur="1.5s" begin="0.9s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </circle>

          <text x="0" y="-5" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="800" fill="#0f172a" textAnchor="middle">3</text>
          <text x="0" y="15" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#64748b" textAnchor="middle">Assets</text>
        </g>

        <g transform="translate(25, 220)" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#334155">
          <circle cx="5" cy="-4" r="5" fill="#10b981" /> <text x="15" y="0">Stocks 60%</text>
          <circle cx="110" cy="-4" r="5" fill="#6366f1" /> <text x="120" y="0">Crypto 30%</text>
          <circle cx="5" cy="16" r="5" fill="#f59e0b" /> <text x="15" y="20">Cash 10%</text>
        </g>
      </g>

      <g transform="translate(100, 620)">
        <rect width="520" height="200" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />

        <text x="30" y="35" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#0f172a">Live Market News</text>

        <circle cx="175" cy="30" r="4" fill="#ef4444">
          <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
        </circle>

        <g transform="translate(30, 65)">
          <rect width="40" height="40" rx="8" fill="#f1f5f9" />
          <path d="M12,20 h16 M12,25 h16 M12,30 h8" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <text x="55" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Fed signals potential rate cut by Q3</text>
          <text x="55" y="34" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#64748b">Reuters • 12 mins ago</text>
        </g>

        <line x1="30" y1="120" x2="490" y2="120" stroke="#f1f5f9" strokeWidth="1.5" />

        <g transform="translate(30, 135)">
          <rect width="40" height="40" rx="8" fill="#f1f5f9" />
          <path d="M12,20 h16 M12,25 h16 M12,30 h8" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <text x="55" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Tech sector rallies driven by AI earnings beat</text>
          <text x="55" y="34" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="500" fill="#64748b">Bloomberg • 1 hour ago</text>
        </g>
      </g>

      <g transform="translate(640, 620)">
        <rect width="480" height="200" rx="16" fill="#ffffff" filter="url(#widgetShadow)" />

        <text x="30" y="35" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#0f172a">Top Movers</text>
        <text x="400" y="35" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#3b82f6" cursor="pointer">See All</text>

        <text x="30" y="65" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#94a3b8">ASSET</text>
        <text x="250" y="65" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#94a3b8" textAnchor="end">PRICE</text>
        <text x="350" y="65" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#94a3b8" textAnchor="end">CHANGE</text>
        <text x="450" y="65" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#94a3b8" textAnchor="end">YIELD</text>

        <line x1="30" y1="75" x2="450" y2="75" stroke="#f1f5f9" strokeWidth="1.5" />

        <g transform="translate(30, 100)">
          <rect width="24" height="24" rx="6" fill="#f8fafc" />
          <path d="M12,14 a3,3 0 0,0 6,0 a3,3 0 0,0 -6,0" fill="#0f172a" />
          <text x="35" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Apple Inc. (AAPL)</text>
          <text x="220" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#0f172a" textAnchor="end">$ 189.43</text>
          <rect x="260" y="2" width="60" height="20" rx="4" fill="#ecfdf5" />
          <text x="290" y="15" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#10b981" textAnchor="middle">+ 1.2%</text>
          <text x="420" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#0f172a" textAnchor="end">0.53%</text>
        </g>

        <line x1="30" y1="135" x2="450" y2="135" stroke="#f1f5f9" strokeWidth="1.5" />

        <g transform="translate(30, 155)">
          <rect width="24" height="24" rx="6" fill="#f8fafc" />
          <path d="M8,8 h8 l-4,8 z" fill="#0f172a" />
          <text x="35" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">Tesla Inc. (TSLA)</text>
          <text x="220" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#0f172a" textAnchor="end">$ 174.60</text>
          <rect x="260" y="2" width="60" height="20" rx="4" fill="#fef2f2" />
          <text x="290" y="15" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#ef4444" textAnchor="middle">- 3.4%</text>
          <text x="420" y="16" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#0f172a" textAnchor="end">0.00%</text>
        </g>
      </g>

    </g>
  </svg>

);

// We replace the image array with the actual SVG components themselves
// to allow proper componentization and clean data-flow.
const CAROUSEL_SVGS = [
  <SupplyChainSvg key="logistics" />,
  <PrescriptionsSvg key="health" />,
  <DashboardSvg key="finance" />,
];

const BUTTON_LABELS = ["Logistics", "Healthcare", "Finance"];
const INTERVAL_MS = 5000; // 5 seconds per slide

export const HeroHome = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % CAROUSEL_SVGS.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const handleNext = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % CAROUSEL_SVGS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveTab((prev) => (prev - 1 + CAROUSEL_SVGS.length) % CAROUSEL_SVGS.length);
  }, []);

  // ==========================================
  // UPDATED: HIGHLY SMOOTH, SINGLE-CARD LOGIC
  // ==========================================
  const getCardStyles = (index: number) => {
    let diff = index - activeTab;
    const total = CAROUSEL_SVGS.length;

    // Handle infinite carousel wrapping calculations
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    // Ultra-smooth easing curve
    const smoothEase = "cubic-bezier(0.25, 1, 0.5, 1)";
    const transitionDuration = "800ms";

    let style: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transition: `transform ${transitionDuration} ${smoothEase}, opacity ${transitionDuration} ease, z-index 0ms`,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
      opacity: 0, // ONLY the active tab will be visible
      pointerEvents: 'none',
      zIndex: 0,
    };

    if (diff === 0) {
      // ACTIVE: Centered, fully visible
      style = {
        ...style,
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto'
      };
    } else if (diff > 0) {
      // NEXT (Waiting): Hidden, pushed down/right, scaled down slightly
      style = {
        ...style,
        transform: `translate3d(8%, 8%, 0) scale(0.95)`,
        opacity: 0,
        zIndex: 20
      };
    } else {
      // PREVIOUS (Leaving): Hidden, pulled up/left, scaled up slightly to create depth
      style = {
        ...style,
        transform: `translate3d(-8%, -8%, 0) scale(1.05)`,
        opacity: 0,
        zIndex: 10
      };
    }
    return style;
  };

  return (
    <>
      <style>{`
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      <section className="relative w-full flex items-center justify-center overflow-hidden  pt-0 pb-6 px-8 lg:px-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row relative max-w-[1300px] z-10 gap-12 lg:gap-4 items-center">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center text-left z-20">
            <h1 className="text-[40px]  leading-[1.05] mt-0">
              Software Consulting  and Development
            </h1>
            <p className=" text-lg lg:text-xl font-medium">
              Delivering project success no matter what
            </p>

            {/* PROGRESS BUTTONS */}
            <div className="flex flex-col gap-1 max-w-[340px]">
              {BUTTON_LABELS.map((label, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative px-2 py-4 text-left font-semibold text-[18px] transition-colors duration-300 ${isActive ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-800'
                      }`}
                  >
                    {label}
                    {/* Base Inactive Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200 rounded-b-md" />

                    {/* Active Animated Progress Line */}
                    {isActive && (
                      <div
                        key={`progress-${activeTab}`} // Forces re-render of animation when tab changes
                        className="absolute bottom-0 left-0 h-[2.5px] bg-emerald-600 rounded-b-md"
                        style={{
                          animation: `fillProgress ${INTERVAL_MS}ms linear forwards`
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="w-full lg:w-[65%] flex items-center justify-center relative min-h-[500px] z-20">



            <div className="relative w-full max-w-[1100px] aspect-[15/10] p-4 lg:translate-x-12">
              <div className="relative w-full h-full">
                {CAROUSEL_SVGS.map((svgComponent, index) => (
                  <div key={index} style={getCardStyles(index)} className="absolute w-full h-full drop-shadow-2xl">
                    {svgComponent}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
