"use client";

import { useEffect } from 'react';
import type { GalleryItem } from './Gallery';

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate((index + 1) % items.length);
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <button
        className="lightbox-nav lightbox-prev"
        aria-label="Previous"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
      >
        ‹
      </button>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        {item.type === 'video' ? (
          <video src={item.src} controls autoPlay loop playsInline className="lightbox-media" />
        ) : (
          <img src={item.src} alt={item.alt} className="lightbox-media" />
        )}
      </div>
      <button
        className="lightbox-nav lightbox-next"
        aria-label="Next"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
      >
        ›
      </button>
      <div className="lightbox-counter">
        {index + 1} / {items.length}
      </div>
    </div>
  );
}
