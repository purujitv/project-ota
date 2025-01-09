import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function BottomSheet({ isOpen, onClose, children }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentY(e.touches[0].clientY - startY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (currentY > 100) {
      onClose();
    }
    setCurrentY(0);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 transition-opacity"
      onClick={handleBackdropClick}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl transform transition-transform ${
          isDragging ? 'transition-none' : 'transition-transform duration-300'
        }`}
        style={{
          transform: `translateY(${currentY > 0 ? currentY : 0}px)`,
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Handle */}
        <div
          className="w-full py-4 cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto" />
          <ChevronDown className="w-6 h-6 mx-auto mt-2 text-gray-400" />
        </div>

        {/* Content */}
        <div className="px-4 pb-8">{children}</div>
      </div>
    </div>
  );
}
