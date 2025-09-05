'use client';
import React, { useState } from 'react';


const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setEmail('');
  };
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Media Container */}
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/tagore-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-black/50"  />
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(75%_60%_at_50%_40%,black,transparent)] bg-black/30"  />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-16 md:py-24 flex-grow flex flex-col justify-center">
        <h1 className="font-extrabold tracking-tight text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] balance no-hyphens">
          Write Without Distraction
        </h1>
        <p className="mt-4 max-w-[65ch] text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed opacity-80 no-hyphens">
          A premium writing device built for deep focus and flow
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 items-center max-w-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 w-full px-5 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition duration-200"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-amber-400 px-6 py-3 font-semibold text-black hover:bg-amber-300 transition-colors duration-200"
          >
            Join the Waitlist
          </button>
        </form>
      </div>

      {/* Optional: gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
