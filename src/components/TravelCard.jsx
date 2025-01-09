import React from 'react';
import { Plane, MapPin, Star, Clock, DollarSign, Mountain } from 'lucide-react';

export default  function TravelCard({ destination, location, image, rating, duration, price, altitude }) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={destination}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <div className="flex items-center gap-1">
          <Mountain className="w-4 h-4 text-slate-700" />
          <span className="text-sm font-medium">{altitude}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-indigo-500" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{destination}</h3>
        
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-600">{price}</span>
          </div>
        </div>
      </div>
      
      <button className="absolute bottom-0 left-0 right-0 bg-slate-900 text-white py-3 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-slate-950">
        <Plane className="w-4 h-4" />
        Book Adventure
      </button>
    </div>
  );
}


