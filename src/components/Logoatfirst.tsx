import React from 'react';
import type { LogoReferenceContent } from '@/content/planningSections';

export const Logoatfirst = ({ content }: { content: LogoReferenceContent }) => {
  return (
    // Reduced pb-16 to pb-4 for tighter bottom spacing
    <section data-wpfe-section="" className="w-full pt-2 pb-4 relative overflow-hidden">
      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">
        
        {/* Top Section: Powered By */}
        {/* Reduced py-8 to py-4 */}
        <div className="w-full py-4 relative">
          {/* Reduced gap-8 to gap-4 to bring heading closer to logos */}
          <div className="flex flex-col items-center w-full gap-4">
            
            {/* Heading Centered Top */}
            <h2 className="w-full text-black text-center">
              {content.heading}
            </h2>
            
            {/* Logos Centered Below */}
            <div className="w-full flex flex-row flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt={content.imageAlts[0]} className="h-12 lg:h-[70px] object-contain" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" alt={content.imageAlts[1]} className="h-12 lg:h-[70px] object-contain" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg" alt={content.imageAlts[2]} className="h-12 lg:h-[70px] object-contain" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original-wordmark.svg" alt={content.imageAlts[3]} className="h-12 lg:h-[70px] object-contain" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidjs/solidjs-original-wordmark.svg" alt={content.imageAlts[4]} className="h-12 lg:h-[70px] object-contain" />
            </div>
            
          </div>
        </div>

        {/* Bottom Section: Trusted By */}
        {/* Reduced py-20 to py-8 for tighter vertical spacing */}
        <div className="w-full py-8 relative overflow-hidden">
          
          {/* Reduced gap-12 to gap-8 to bring heading closer to the logo rows */}
          <div className="flex flex-col items-center w-full gap-8 relative z-10">
            
            {/* Heading Centered Top */}
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-[#10B981]">
            
                {/* Made this a single line on larger screens for a better centered look */}
                <h2 className="text-center text-black">
                  {content.toolsHeading}
                </h2>
              </div>
            </div>

            {/* Logos Centered Below */}
            {/* Reduced gap-12 lg:gap-16 to gap-8 lg:gap-10 to pull the two rows closer together */}
            <div className="w-full flex flex-col items-center gap-8 lg:gap-10">
              
              {/* Row 1 - Centered */}
              <div className="flex flex-row flex-wrap justify-center items-center w-full gap-8 md:gap-12">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt={content.imageAlts[5]} className="h-12 lg:h-[70px] object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt={content.imageAlts[6]} className="h-8 lg:h-[45px] object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt={content.imageAlts[7]} className="h-12 lg:h-[70px] object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg" alt={content.imageAlts[8]} className="h-14 lg:h-[90px] object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt={content.imageAlts[9]} className="h-14 lg:h-[90px] object-contain" />
              </div>

              {/* Row 2 - Centered */}
              <div className="flex flex-row flex-wrap justify-center items-center w-full gap-12 md:gap-16">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original-wordmark.svg" alt={content.imageAlts[10]} className="h-14 lg:h-[90px] object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt={content.imageAlts[11]} className="h-12 lg:h-[60px] object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt={content.imageAlts[12]} className="h-12 lg:h-[60px] object-contain" />
              </div>

            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};
