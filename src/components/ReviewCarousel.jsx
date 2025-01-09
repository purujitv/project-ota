"use client"

import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Emily Brown",
    role: "Adventure Enthusiast",
    content: "Our trip to Bali with this travel agency was unforgettable! Everything was perfectly organized, and we loved every moment.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 2,
    author: "James Wilson",
    role: "Family Traveler",
    content: "The team planned the perfect family getaway to the Maldives. The attention to detail and accommodations were incredible.",
    avatar: "https://images.unsplash.com/photo-1603415526960-f097f7f16267?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 3,
    author: "Sophia Martinez",
    role: "Solo Backpacker",
    content: "Their Europe travel package was an absolute dream! I met amazing people and visited iconic locations effortlessly.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
];

export const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
      <div className="absolute top-0 left-8 text-blue-500 opacity-20">
        <Quote size={80} />
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-full flex-shrink-0 px-8">
              <div className="flex flex-col items-center text-center">
               
                <StarRating rating={review.rating} />
                <p className="text-white text-lg italic mb-6 leading-relaxed">
                  {review.content}
                </p>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {review.author}
                </h3>
                <p className="text-gray-10">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
