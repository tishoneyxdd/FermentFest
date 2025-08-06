import React from 'react';
import { Heart, Leaf, Microscope, Utensils } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-orange-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
              Welcome to Our Culinary Innovation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              This website shares our special recipe for millet-based sushi made with fermented ingredients. 
              It's a healthy fusion of Indian and Japanese flavors packed with beneficial probiotics, created as part of our microbiology 
              fermentation fest.
            </p>
            <p>
              Explore the recipe, learn about the microbes involved, and try it yourself! This unique 
              creation combines the nutritional benefits of ancient Indian millets with the artful 
              technique of Japanese sushi-making, enhanced by the power of beneficial fermentation and gut-healthy probiotics.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthy Fusion</h3>
            <p className="text-gray-600">Nutritious millets meet traditional fermentation for optimal health benefits</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">Fresh vegetables and ancient grains, all naturally fermented</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Microscope className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Microbial Magic</h3>
            <p className="text-gray-600">Beneficial microorganisms work their magic in every bite</p>
          </div>
        </div>

        {/* Sushi Image Placeholder */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border-2 border-dashed border-orange-300">
            <img 
              src="https://i.postimg.cc/rprDkSgP/Whats-App-Image-2025-08-06-at-17-07-48-1e469735.jpg" 
              alt="Delicious Millet Sushi Bites" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling!.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <div className="w-full max-w-2xl mx-auto h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Utensils className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <p className="text-orange-800 font-semibold">Your Millet Sushi Creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;