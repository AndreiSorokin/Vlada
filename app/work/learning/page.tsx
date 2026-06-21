"use client";

import Link from 'next/link';
import Gallery from '../../components/Gallery';
import type { GalleryItem } from '../../components/Gallery';

const items: GalleryItem[] = [
  { type: 'image', src: '/img/learning/figma exam.png', alt: 'Learning project 1' },
  { type: 'image', src: '/img/learning/image_2025-12-17_18-33-15.png', alt: 'Learning project 2' },
  { type: 'image', src: '/img/learning/image_2025-12-17_19-54-06.png', alt: 'Learning project 3' },
  { type: 'image', src: '/img/learning/image_2025-12-17_19-54-59.png', alt: 'Learning project 4' },
  { type: 'image', src: '/img/learning/image_2026-06-21_23-03-57.png', alt: 'Learning project 5' },
  { type: 'image', src: '/img/learning/photo_2026-06-22_00-51-20.jpg', alt: 'Learning project 7' },
  { type: 'image', src: '/img/learning/photo_2026-06-22_00-51-28.jpg', alt: 'Learning project 8' },
  { type: 'image', src: '/img/learning/photo_2026-06-22_00-51-32.jpg', alt: 'Learning project 9' },
  { type: 'image', src: '/img/learning/photo_2026-06-22_00-56-59.jpg', alt: 'Learning project 10' },
  { type: 'image', src: '/img/learning/photo_2026-06-22_00-57-03.jpg', alt: 'Learning project 11' },
  { type: 'image', src: '/img/learning/Главная темная версия.png', alt: 'Learning project 12' },
  { type: 'image', src: '/img/learning/Каталог.png', alt: 'Learning project 13' },
  { type: 'image', src: '/img/learning/Страница модели темная версия.png', alt: 'Learning project 14' },
];

export default function LearningWork() {
  return (
    <main className="page-shell gallery-page">
      <div className="gallery-header">
        <Link href="/#work" className="gallery-back">
          ← Back
        </Link>
        <h1>Learning Projects</h1>
      </div>
      {items.length > 0 ? <Gallery items={items} /> : <p className="gallery-empty">Coming soon.</p>}
    </main>
  );
}
