import React from 'react';

import { Monitor, Keyboard, BatteryCharging } from "lucide-react";

const Features: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] font-bold text-gray-900 tracking-tight">
            Everything You Need to Stay Focused
          </h2>
          <p className="mt-4 max-w-[65ch] text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-gray-700">
            A powerful writing environment designed for clarity, flow, and focus.
          </p>
            
          
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex transition transform hover:-translate-y-1">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/90 text-white">
                <Monitor className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-slate-900">E-Ink Display</h3>
              <p className="mt-2 text-base text-gray-500">
                A beautiful, paper-like display that's easy on the eyes, with no backlight or glare.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/90 text-white">
                <Keyboard className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-slate-900">Alice Layout Mechanical Keyboard</h3>
              <p className="mt-2 text-base text-gray-500">
                A tactile, creamy and satisfying typing experience that feels just right.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/90 text-white">
                <BatteryCharging className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-slate-900">Long Battery Life</h3>
              <p className="mt-2 text-base text-gray-500">
                Write for weeks on a single charge, so you can focus on your work, not on finding an outlet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;