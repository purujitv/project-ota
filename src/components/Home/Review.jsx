import React from 'react';
import { ReviewCarousel } from '../ReviewCarousel';

export default function Review() {
  return (
    <section className=" bg-bg-img-1 bg-cover bg-center bg-no-repeat relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <ReviewCarousel />
      </div>
    </section>
  );
}

