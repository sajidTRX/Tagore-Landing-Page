'use client';

import React, { useState, useEffect } from 'react';

const ResponsiveTest: React.FC = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    breakpoint: ''
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let breakpoint = '';
      
      if (width < 640) breakpoint = 'Mobile (sm)';
      else if (width < 768) breakpoint = 'Mobile (md)';
      else if (width < 1024) breakpoint = 'Tablet (lg)';
      else if (width < 1280) breakpoint = 'Desktop (xl)';
      else breakpoint = 'Large Desktop (2xl)';
      
      setScreenSize({ width, height, breakpoint });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50 backdrop-blur-sm">
      <div className="font-mono">
        <div>Screen: {screenSize.width} × {screenSize.height}</div>
        <div>Breakpoint: {screenSize.breakpoint}</div>
        <div className="text-xs opacity-75 mt-1">
          {screenSize.width < 640 && '📱 Mobile First'}
          {screenSize.width >= 640 && screenSize.width < 1024 && '📱 Tablet'}
          {screenSize.width >= 1024 && '💻 Desktop'}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTest;
