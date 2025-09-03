'use client';
import React from 'react';
import { useRouter } from 'next/navigation';


const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleJoinWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/#email-capture');
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
        <h1 className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] font-bold">
          Write Without Distraction
        </h1>
        <p className="mt-4 max-w-[65ch] text-[clamp(0.95rem,2.5vw,1.125rem)] opacity-80">
          A premium writing device built for deep focus and flow
        </p>
        <div className="mt-8 grid gap-3 sm:flex">
          <button onClick={handleJoinWaitlistClick} className="w-full sm:w-auto rounded-full bg-amber-400 px-6 py-3 font-semibold text-black">Join the Waitlist</button>
          <a className="w-full sm:w-auto rounded-full border border-white/20 px-6 py-3">Learn More</a>
        </div>
      </div>

      {/* Optional: gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
