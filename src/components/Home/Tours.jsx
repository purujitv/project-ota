import React from 'react';
import TravelCard from '../TravelCard';


const travelDestinations = [
  {
    destination: "Everest Base Camp Trek",
    location: "Nepal",
    image: "https://images.unsplash.com/photo-1585602173562-e7eeb0e6f380?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    duration: "14 days",
    price: 2499,
    altitude: "5,364m"
  },
  {
    destination: "Annapurna Circuit",
    location: "Nepal",
    image: "https://images.unsplash.com/photo-1544735716-ea9ef790f501?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    duration: "12 days",
    price: 1899,
    altitude: "5,416m"
  },
  {
    destination: "Ladakh Monastery Trek",
    location: "India",
    image: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    duration: "10 days",
    price: 1699,
    altitude: "3,524m"
  },
  {
    destination: "Bhutan Tiger's Nest",
    location: "Bhutan",
    image: "https://images.unsplash.com/photo-1530273319157-89742ed7f047?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    duration: "7 days",
    price: 2899,
    altitude: "3,120m"
  },
  {
    destination: "Manaslu Circuit",
    location: "Nepal",
    image: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    duration: "16 days",
    price: 2199,
    altitude: "5,106m"
  },
  {
    destination: "Kashmir Great Lakes Trek",
    location: "India",
    image: "https://images.unsplash.com/photo-1593187623747-7ea827ad1013?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    duration: "8 days",
    price: 1299,
    altitude: "4,191m"
  }
];

export default function Tours() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Himalayan Adventures</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world's most majestic mountain range with our curated selection of 
            high-altitude treks and cultural experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelDestinations.map((destination, index) => (
            <TravelCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </div>
  );
}



