'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string; 
  alt: string;
  type?: "image" | "video";
  className?: string;
  priority?: boolean;
  poster?: string;
  mobileSrc?: string; // optional smaller asset for phones
  fill?: boolean;
  sizes?: string;
};

export default function ResponsiveMedia({
  src, 
  alt, 
  type = "image", 
  className = "", 
  priority, 
  poster, 
  mobileSrc,
  fill = false,
  sizes
}: Props) {
  const [objectPosition, setObjectPosition] = useState('center');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setObjectPosition(window.innerWidth <= 768 ? 'center' : 'center');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (type === "video") {
    return (
      <video 
        className={`w-full h-full ${className}`}
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata" 
        poster={poster}
        style={{
          objectFit: 'cover',
          objectPosition: isClient ? objectPosition : 'center'
        }}
      >
        {/* Mobile first */}
        {mobileSrc && (
          <>
            <source src={mobileSrc.replace(".mp4",".webm")} type="video/webm" media="(max-width: 767px)" />
            <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
          </>
        )}
        {/* Desktop */}
        <source src={src.replace(".mp4",".webm")} type="video/webm" media="(min-width: 768px)" />
        <source src={src} type="video/mp4" media="(min-width: 768px)" />
        {/* Fallback for browsers that don't support media queries */}
        <source src={src} type="video/mp4" />
      </video>
    );
  }
  
  // images - ensure they're always visible on mobile
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} object-contain`}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onError={(e) => {
          console.error('Image failed to load:', src, e);
        }}
        onLoad={() => {
          console.log('Image loaded successfully:', src);
        }}
      />
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      width={1920}
      height={1080}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      onError={(e) => {
        console.error('Image failed to load:', src, e);
      }}
      onLoad={() => {
        console.log('Image loaded successfully:', src);
      }}
    />
  );
}
