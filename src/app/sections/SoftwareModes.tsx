'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const modes = [
  {
    name: 'Novel',
    description: 'For writing long-form fiction with chapter management and creative tools.',
    video: '/videos/novel.mp4',
  },
  {
    name: 'Journal',
    description: 'Personal reflection and daily writing with mood tracking and insights.',
    video: '/videos/journal.mp4',
  },
  {
    name: 'Note',
    description: 'Quick capture and organization for ideas, research, and structured notes.',
    video: '/videos/note.mp4',
  },
];

const SoftwareModes: React.FC = () => {
  const [activeMode, setActiveMode] = useState(modes[0]);

  return (
    <section id="modes" className="py-16 bg-gradient-to-b from-blue-50 via-blue-50/80 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] font-bold mb-4 text-black">
            Three Modes. Endless Possibilities.
          </h2>
          <p className="mt-4 max-w-[65ch] text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-black mx-auto px-2">
            Choose the perfect mode for your writing journey. Switch seamlessly between them as your needs change.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-200 flex items-center justify-center aspect-[16/9]">
            {activeMode.video ? (
              <video
                key={activeMode.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={activeMode.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p className="text-gray-500">Video not available</p>
            )}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {modes.map((mode) => (
                <button
                  key={mode.name}
                  onClick={() => setActiveMode(mode)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${activeMode.name === mode.name
                      ? 'bg-white shadow-md text-blue-600 scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'}
                  `}
                >
                  <h3 className="font-semibold text-lg">{mode.name}</h3>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">{activeMode.name}</h3>
              <p className="text-black leading-relaxed mb-6">{activeMode.description}</p>
              {/* You can add specific features for each mode here if needed */}
              {activeMode.name === 'Novel' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Chapter organization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Character development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Plot tracking</span>
                  </div>
                </div>
              )}
              {activeMode.name === 'Journal' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Daily prompts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Mood tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Reflection tools</span>
                  </div>
                </div>
              )}
              {activeMode.name === 'Note' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Quick capture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Tag organization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Search & filter</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareModes;
