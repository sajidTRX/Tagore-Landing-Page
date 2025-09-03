import React from 'react';

const HardwareEngineering: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black md:text-5xl font-bold mb-4">Engineered for Writers.</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Every detail serves focus, durability, and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 3D Interactive Model Space */}
          <div className="relative aspect-square bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* This would be replaced with an actual 3D model viewer */}
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">3D Model Viewer</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Sliding Display */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Sliding Display Mechanism</h3>
              <p className="text-gray-600">
                Transformative. Sleek. A tactile ritual before every writing session.
              </p>
            </div>

            {/* Mechanical Keys */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Alice Layout Mechanical Keys</h3>
              <p className="text-gray-600">
                Inspired by typewriters, perfected for comfort and speed.
              </p>
            </div>

            {/* E-Ink Display */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">E-Ink Display</h3>
              <p className="text-gray-600">
                Paper-like clarity, even in sunlight.
              </p>
            </div>

            {/* Battery Life */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Battery Life</h3>
              <p className="text-gray-600">
                Days of focus, uninterrupted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareEngineering;
