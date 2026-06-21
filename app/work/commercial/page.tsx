"use client";

import Link from 'next/link';
import Gallery from '../../components/Gallery';
import type { GalleryItem } from '../../components/Gallery';

const items: GalleryItem[] = [
  { type: 'image', src: '/img/commertial/image_2026-06-21_23-14-53.png', alt: 'Commercial project 1' },
    { type: 'image', src: '/img/commertial/image_2026-06-21_23-16-13.png', alt: 'Commercial project 3' },

  { type: 'image', src: '/img/commertial/image_2026-06-21_23-15-36.png', alt: 'Commercial project 2' },
  { type: 'image', src: '/img/commertial/image_2026-06-21_23-17-17.png', alt: 'Commercial project 4' },
  { type: 'image', src: '/img/commertial/image_2026-06-21_23-19-57.png', alt: 'Commercial project 5' },
  { type: 'image', src: '/img/commertial/photo_2026-06-22_00-48-42.jpg', alt: 'Commercial project 6' },
  { type: 'video', src: "/img/commertial/HYK's very first drag show.mp4", alt: "HYK's very first drag show" },
];

export default function CommercialWork() {
  return (
    <main className="page-shell gallery-page">
      <div className="gallery-header">
        <Link href="/#work" className="gallery-back">
          ← Back
        </Link>
        <h1>Commercial Projects</h1>
      </div>
      <Gallery items={items} />
    </main>
  );
}
