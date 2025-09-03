'use client';

import React from 'react';

export default function AICapabilities() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-40"
           style={{background:
             "radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.06), transparent 60%)"}} />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-white">
            Advanced AI Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
          Experience the power of AI—seamlessly woven into your writing flow in Tagore’s AI ChatBot.
          </p>
        </header>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <FeatureCard
            title="Grammar & Clarity"
            blurb="Fix spelling, grammar, and readability—instantly and inline."
            video="/videos/Ai1.mp4"
            poster="/images/ai-grammar-poster.svg"
          />
          <FeatureCard
            title="Sound Like Famous Writers "
            blurb="Mirror the tone of renowned authors while keeping your intent."
            video="/videos/Ai2.mp4"
            poster="/images/ai-voice-poster.svg"
          />
        </div>


      </div>
    </section>
  );
}

function FeatureCard({
  title,
  blurb,
  video,
  poster
}: { title: string; blurb: string; video: string; poster?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-6 md:p-8">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{blurb}</p>

      {/* Phone mockup */}
      <div className="mt-6 flex justify-center">
        <div className="relative w-[18rem] md:w-[22rem] aspect-[9/19] rounded-[2rem] border border-white/10 bg-black shadow-2xl overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src={video}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          {/* subtle top gloss */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />
        </div>
      </div>
    </div>
  );
}