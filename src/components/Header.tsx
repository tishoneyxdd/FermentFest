import React from 'react';
import { Utensils, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Utensils className="w-12 h-12 text-white" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-6 font-['Playfair_Display']">
          Gut Feeling Fest
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4 font-['Playfair_Display']">
          Millet Sushi Bites with Fermented Veggies
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Where Indian millets meet Japanese technique and microbial magic
        </p>

        {/* Decorative Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;