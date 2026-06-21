"use client";

import { useState } from 'react';
import Lightbox from './Lightbox';
import GalleryTile from './GalleryTile';

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <GalleryTile key={item.src} item={item} onOpen={() => setActiveIndex(i)} />
        ))}
      </div>
      {activeIndex !== null && (
        <Lightbox
          items={items}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}
