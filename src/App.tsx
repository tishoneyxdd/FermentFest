import React, { useEffect, useRef } from 'react';
import ThreeScene from './components/ThreeScene';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Recipe from './components/Recipe';
import Footer from './components/Footer';

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        scrollContainerRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Parallax Background Elements */}
      <div ref={scrollContainerRef} className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-red-400 rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        <Header />
        <Introduction />
        <Recipe />
        <Footer />
      </div>
    </div>
  );
}

export default App;