import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Decorative Top Border */}
        <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8 rounded-full"></div>

        {/* Main Footer Content */}
        <div className="mb-8">
          <p className="text-lg md:text-xl font-medium mb-4 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            <span>for</span>
          </p>
          
          <div className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            @gutfeelingfest
          </div>
          
          <p className="text-gray-300 mb-6">
            at <span className="font-semibold text-orange-300">JaiHind College</span>
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>by</span>
            <span className="font-semibold text-white">Shivam Badhopulu</span>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mb-8">
          <a 
            href="https://github.com/tishoneyxdd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600"
          >
            <Github className="w-6 h-6" />
            <span className="font-medium">View on GitHub</span>
          </a>
        </div>

        {/* Fermentation Elements */}
        <div className="flex justify-center space-x-8 mb-8 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span>Healthy</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>Fermented</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>Delicious</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-500 text-sm">
            © 2025 FermentFest. Crafted with passion for culinary innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;