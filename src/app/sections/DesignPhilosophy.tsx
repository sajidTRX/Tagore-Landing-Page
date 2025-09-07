"use client";

import React from 'react';

const DesignPhilosophy: React.FC = () => {
  return (
        <section id="crafts" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] tracking-tight balance no-hyphens text-black">
  Where Craft Meets Purpose
</h2>

          <p className="mt-4 max-w-[65ch] mx-auto text-center text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-gray-700">
  Tagore is not just a device. It&rsquo;s a writer&rsquo;s instrument — precision-engineered to inspire clarity, flow, and focus.
</p>

        </div>

        <div className="mt-16 sm:mt-20">
          <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/videos/craft.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;