'use client';
import React, { useRef, useEffect, useState } from 'react';

interface BackgroundVideoProps {
  sources: {
    src: string;
    type: string;
  }[];
  poster?: string;
  className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ sources, poster, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });
    }
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        {sources.map((source, index) => (
          <source key={index} {...source} />
        ))}
      </video>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}
    </div>
  );
};

export default BackgroundVideo;
