import React from 'react'
import { BackgroundCarousel } from '../BackgroundCarousel';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
    title: 'Majestic Mountains',
    description: 'Discover the breathtaking peaks and valleys of nature\'s greatest mountains',
    buttonText: 'Explore Mountains',
  },
  {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
    title: 'Enchanting Forests',
    description: 'Immerse yourself in the magical world of ancient woodland trails',
    buttonText: 'Discover Forests',
  },
  {
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80',
    title: 'Serene Lakes',
    description: 'Experience the tranquility of crystal-clear mountain lakes',
    buttonText: 'Visit Lakes',
  },
];
export default function Hero() {
  return (
    <section className=" flex flex-col  xl:flex-row">
    <div className="hero-map" />

    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
    <BackgroundCarousel slides={slides} />
    </div>
    </section>
  )
}
