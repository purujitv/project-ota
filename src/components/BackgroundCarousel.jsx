"use client"

import React, { useState, useEffect } from 'react';

export function BackgroundCarousel({ slides, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={slide.image} className="absolute inset-0">
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div
            className={`relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl">
              {slide.description}
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
