// components/StarRating.tsx
"use client";

import { useState } from "react";

interface StarRatingProps {
  /** Calificación inicial (1–5). */
  initialRating?: number;
}

  // Handler de rate (de momento mock)
  const handleRate = (newRating: number) => {
    console.log('Usuario calificó con:', newRating);
    // Aquí iría fetch a POST /api/rate
  };

export default function StarRating({
  initialRating = 0,
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => {
        // Determina si esta estrella va rellena
        const isFilled = star <= (hovered || rating);
        return (
          <button
            key={star}
            type="button"
            className="focus:outline-none"
            onClick={() => {
              setRating(star);
              handleRate(star);
            }}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={isFilled ? "currentColor" : "none"}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-500"
            >
              <path
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                   1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                   1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 
                   3.955c.3.921-.755 1.688-1.54 
                   1.118l-3.37-2.449a1 1 0 
                   00-1.176 0l-3.37 2.45c-.784.57-1.838-.197-1.539-1.119l1.286-3.955a1 
                   1 0 00-.364-1.118L2.074 
                   9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                   1 0 00.95-.69l1.286-3.955z"
              />
            </svg>
            <span className="sr-only">{star} estrella{star > 1 ? "s" : ""}</span>
          </button>
        );
      })}
    </div>
  );
}
