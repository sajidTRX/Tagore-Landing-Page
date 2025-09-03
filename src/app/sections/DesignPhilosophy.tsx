'use client';

import React from 'react';

const DesignPhilosophy: React.FC = () => {
  return (
    <section id="design" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] font-bold text-gray-900 tracking-tight">
            Where Craft Meets Purpose
          </h2>
          <p className="mt-4 max-w-[65ch] text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-gray-700">
            Tagore is not just a device. It's a writer's instrument — precision-engineered to inspire clarity, flow, and focus.
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