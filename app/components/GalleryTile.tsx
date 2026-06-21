"use client";

import { useEffect, useRef, useState } from 'react';
import type { GalleryItem } from './Gallery';

export default function GalleryTile({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <button ref={ref} className="gallery-tile" onClick={onOpen} aria-label={`Open ${item.alt}`}>
      {isVisible ? (
        item.type === 'video' ? (
          <video
            src={item.src}
            className="gallery-media"
            muted
            loop
            playsInline
            autoPlay
            preload="none"
          />
        ) : (
          <img src={item.src} alt={item.alt} className="gallery-media" loading="lazy" />
        )
      ) : (
        <div className="gallery-placeholder" />
      )}
    </button>
  );
}
