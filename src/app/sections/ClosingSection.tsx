'use client';

import React from 'react';
import ResponsiveMedia from '../components/ResponsiveMedia';

const ClosingSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          More Than a Device. A Ritual.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          Every time the screen slides out, it&#39;s a promise: Focus, clarity, and timeless writing.
        </p>
        

        {/* Product Shot with proper aspect ratio */}
        <div className="mt-16 sm:mt-20 relative">
          <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-xl">
            <ResponsiveMedia
              src="/images/retro.png"
              alt="Tagore product shot - Retro"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
