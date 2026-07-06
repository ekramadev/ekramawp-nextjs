"use client";
import React from 'react';
import Image from 'next/image';

export const Boxesimage = () => {
  return (
    <section className="w-full pt-2 pb-16 relative overflow-hidden bg-transparent">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10 items-center justify-center text-center">

        <div className="mb-16 space-y-4">
          {/* Main Title Sizes - Updated to dark text */}
          <h2 className="text-[#1a1a1a]">
            Architecting the Future of <br className="hidden md:block" />
            <span className="text-[#10b981]">Front End Engineering</span>
          </h2>

          {/* Intro Paragraph - Updated to slate gray */}
          <p className="text-base text-gray-600 max-w-2xl mx-auto mt-4">
            Building robust, scalable, and highly interactive user interfaces utilizing modern web technologies and best practices.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[1.5rem] items-start text-left">

          {/* Card 1 */}
          {/* Updated: border-gray-200, bg-white, shadow-sm, and hover:shadow-lg */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            {/* Updated heading to dark text */}
            <h3 className="md:text-xl text-gray-900 font-bold mb-4">Component-Driven UI</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt="Component Architecture"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Updated paragraph to slate gray */}
            <p className="text-sm md:text-base text-gray-600 m-0 leading-relaxed">
              We build modular, scalable component libraries that ensure design consistency and accelerate development cycles across apps.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-gray-900 font-bold mb-4">Performance Optimization</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt="Performance Optimization"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 m-0 leading-relaxed">
              Focusing on Core Web Vitals, we utilize advanced caching strategies and code-splitting to deliver lightning-fast experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-gray-900 font-bold mb-4">Responsive Interactivity</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt="Interactive UI"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 m-0 leading-relaxed">
              Creating immersive interfaces that adapt seamlessly to any viewport. We blend fluid animations with intuitive layouts.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-gray-900 font-bold mb-4">Advanced State Management</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt="State Management"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 m-0 leading-relaxed">
              Managing complex data flows with precision using modern tools like Redux Toolkit and Zustand for predictable app behavior.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-gray-900 font-bold mb-4">API Integration & GraphQL</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt="API Integration"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 m-0 leading-relaxed">
              Seamlessly connecting front-ends to microservices with efficient data fetching strategies using Apollo GraphQL and React Query.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col border border-gray-200 bg-white shadow-sm rounded-xl p-5 transition-all duration-300 ease-in-out relative overflow-hidden will-change-transform hover:-translate-y-[5px] hover:border-[#10b981] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] group">
            <h3 className="md:text-xl text-gray-900 font-bold mb-4">Design Systems</h3>
            <div className="w-full mb-4 relative rounded-lg overflow-hidden aspect-[16/9] border border-gray-100">
              <Image
                src="https://admin.wpfedev.com/wp-content/uploads/2026/04/task_01knfc1gsafcs9ndd14agxfz3j_1775411260_img_0.webp"
                alt="Design Systems"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 m-0 leading-relaxed">
              Bridging the gap between design and code with living style guides and Storybook integration for pixel-perfect implementation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};