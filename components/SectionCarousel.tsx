'use client';
import React, { useRef } from 'react';
import AlbumCard from './AlbumCard';
// si ya instalaste @heroicons/react v2:
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface SectionCarouselProps {
  title: string;
  albums: { id: string; title: string; artist: string }[];
}

export default function SectionCarousel({ title, albums }: SectionCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (distance: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-6 space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <ChevronRightIcon
          className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"
          onClick={() => scroll(300)}
        />
      </div>

      <div className="relative group">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide py-2"
        >
          {albums.map((alb) => (
            <AlbumCard key={alb.id} album={alb} />
          ))}
        </div>

        <button
          className="hidden group-hover:block absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
          onClick={() => scroll(-300)}
        >
          <ChevronLeftIcon className="w-5 h-5 text-white" />
        </button>
        <button
          className="hidden group-hover:block absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
          onClick={() => scroll(300)}
        >
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
