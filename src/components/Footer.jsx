import React from 'react';
import { Plane, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';



export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold">TravelEase</span>
          </div>
          <p className="text-slate-300">
            Making your travel dreams come true with unforgettable experiences and personalized journeys.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#" className="hover:text-sky-400 transition">Destinations</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">Tours</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">Hotels</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">Travel Guides</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-sky-400" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-sky-400" />
              <span>info@travelease.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-sky-400" />
              <span>123 Travel Street, NY 10001</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-slate-300 mb-4">Subscribe to get special offers and travel updates!</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a href="#" className="text-slate-300 hover:text-sky-400 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-300 hover:text-sky-400 transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-300 hover:text-sky-400 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-300 hover:text-sky-400 transition">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
};
  

