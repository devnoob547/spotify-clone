'use client';
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export function HeartButton() {
  const [isLiked, setIsLiked] = useState<boolean>();

  return (
    <button onClick={() => setIsLiked(!isLiked)} className={isLiked ? 'text-green-500' : 'text-white'}>
      <Heart fill={isLiked ? 'rgba(34, 197, 94, 1)' : 'rgba(39, 39, 42, 1)'} />
    </button>
  );
}