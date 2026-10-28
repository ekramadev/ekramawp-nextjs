"use client";
import React from 'react';
import Image from 'next/image';
import type { BoxesImageContent } from '@/content/showcaseSections';

export const Boxesimage = ({ content }: { content: BoxesImageContent }) => {
  return (
    <section data-wpfe-section="" className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      <div data-wpfe-container="content" className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">

        <div className="mb-16 space-y-4">
          {/* Main Title Sizes - Updated to dark text */}
          <h2 className="text-black">
            {content.headingLead} <br className="hidden md:block" />
            <span className="text-brand-emerald">{content.headingAccent}</span>
          </h2>

          {/* Intro Paragraph - Updated to slate gray */}
          <p className="text-[#374151] max-w-2xl mx-auto mt-4">
            {content.intro}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[1.5rem] items-start text-left">

          {/* Card 1 */}
          {/* Updated: border-gray-200, bg-white, shadow-sm, and hover:shadow-lg */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            {/* Updated heading to dark text */}
            <h3 className="md:text-xl text-black font-bold mb-4">{content.cards[0].title}</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt={content.cards[0].imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Updated paragraph to slate gray */}
            <p className="text-sm md:text-base text-[#374151] m-0 leading-relaxed">
              {content.cards[0].description}
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-black font-bold mb-4">{content.cards[1].title}</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt={content.cards[1].imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-[#374151] m-0 leading-relaxed">
              {content.cards[1].description}
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-black font-bold mb-4">{content.cards[2].title}</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt={content.cards[2].imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-[#374151] m-0 leading-relaxed">
              {content.cards[2].description}
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-black font-bold mb-4">{content.cards[3].title}</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt={content.cards[3].imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-[#374151] m-0 leading-relaxed">
              {content.cards[3].description}
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-black font-bold mb-4">{content.cards[4].title}</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt={content.cards[4].imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-[#374151] m-0 leading-relaxed">
              {content.cards[4].description}
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-black font-bold mb-4">{content.cards[5].title}</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt={content.cards[5].imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-[#374151] m-0 leading-relaxed">
              {content.cards[5].description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
