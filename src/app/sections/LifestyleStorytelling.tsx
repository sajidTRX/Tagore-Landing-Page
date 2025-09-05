"use client";

import React from 'react';

const LifestyleStorytelling: React.FC = () => {
  return (
    <section id="story" className="relative h-[100vh] min-h-[700px] bg-black text-white overflow-hidden">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/book.png')`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="text-left max-w-xl">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
           Where Words Take Flight.
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
            Tagore turns every thought into timeless literature — freeing your creativity from distractions.
          </p>
          <a
            href="#cta"
            className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 active:scale-95 transition duration-200 text-base sm:text-lg touch-manipulation"
          >
            Experience Portability →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LifestyleStorytelling;