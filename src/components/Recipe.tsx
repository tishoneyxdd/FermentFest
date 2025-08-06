import React, { useState } from 'react';
import { ChefHat, Clock, Users, CheckCircle } from 'lucide-react';

const Recipe: React.FC = () => {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());

  const toggleIngredient = (index: number) => {
    const newSet = new Set(checkedIngredients);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setCheckedIngredients(newSet);
  };

  const toggleStep = (index: number) => {
    const newSet = new Set(checkedSteps);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setCheckedSteps(newSet);
  };

  const ingredients = {
    sushiBase: [
      "1 cup foxtail or little millet",
      "1 tsp black pepper powder",
      "½ tsp salt"
    ],
    pickledFillings: [
      "½ cup carrot sticks",
      "½ cup cucumber sticks",
      "Juice of 1 lemon",
      "Pinch of salt",
      "Optional: green chilies or ginger for flavor"
    ],
    otherFillings: [
      "1 avocado (sliced)",
      "2 tbsp grated beetroot (for color)"
    ],
    toppings: [
      "1 tbsp roasted sesame seeds"
    ],
    dip: [
      "½ cup hung curd (or thick yogurt)",
      "1 tbsp chopped mint leaves",
      "Salt to taste"
    ]
  };

  const instructions = [
    {
      step: "Cook Millet",
      detail: "Wash and cook the millet until soft and slightly sticky. Let it cool."
    },
    {
      step: "Season Base",
      detail: "Mix in pepper powder and salt to the cooked millet while warm."
    },
    {
      step: "Prepare Pickled Veggies",
      detail: "Soak carrots and cucumbers in lemon juice + salt for 24 hours."
    },
    {
      step: "Make Dip",
      detail: "Tie curd in a cloth for 6–8 hours to get hung curd. Mix with mint and salt."
    },
    {
      step: "Assemble Sushi",
      detail: "Spread millet on a nori sheet (or banana leaf as fusion idea). Add a line of pickled veggies, avocado, and beetroot. Roll tightly using a sushi mat or hands. Slice into bite-sized pieces."
    },
    {
      step: "Garnish",
      detail: "Sprinkle sesame seeds."
    },
    {
      step: "Serve",
      detail: "With mint yogurt dip."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ChefHat className="w-16 h-16 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
            Recipe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow this step-by-step guide to create your own millet sushi masterpiece
          </p>
        </div>

        {/* Recipe Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-white rounded-xl shadow-md">
            <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Prep Time</p>
            <p className="text-gray-600">45 min</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Serves</p>
            <p className="text-gray-600">4-6 people</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md">
            <ChefHat className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Level</p>
            <p className="text-gray-600">Medium</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Ingredients */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              📋 Ingredients
            </h3>

            <div className="space-y-8">
              {/* Sushi Base */}
              <div>
                <h4 className="text-lg font-semibold text-orange-700 mb-4 border-l-4 border-orange-400 pl-3">
                  For Sushi Base:
                </h4>
                <ul className="space-y-3">
                  {ingredients.sushiBase.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <button 
                        onClick={() => toggleIngredient(index)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                          checkedIngredients.has(index) 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {checkedIngredients.has(index) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <span className={`${checkedIngredients.has(index) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pickled Fillings */}
              <div>
                <h4 className="text-lg font-semibold text-green-700 mb-4 border-l-4 border-green-400 pl-3">
                  For Pickled Fillings:
                </h4>
                <ul className="space-y-3">
                  {ingredients.pickledFillings.map((ingredient, index) => (
                    <li key={index + 10} className="flex items-center space-x-3">
                      <button 
                        onClick={() => toggleIngredient(index + 10)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                          checkedIngredients.has(index + 10) 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {checkedIngredients.has(index + 10) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <span className={`${checkedIngredients.has(index + 10) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Fillings */}
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-4 border-l-4 border-purple-400 pl-3">
                  Other Fillings:
                </h4>
                <ul className="space-y-3">
                  {ingredients.otherFillings.map((ingredient, index) => (
                    <li key={index + 20} className="flex items-center space-x-3">
                      <button 
                        onClick={() => toggleIngredient(index + 20)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                          checkedIngredients.has(index + 20) 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {checkedIngredients.has(index + 20) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <span className={`${checkedIngredients.has(index + 20) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Toppings */}
              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-4 border-l-4 border-amber-400 pl-3">
                  For Toppings:
                </h4>
                <ul className="space-y-3">
                  {ingredients.toppings.map((ingredient, index) => (
                    <li key={index + 30} className="flex items-center space-x-3">
                      <button 
                        onClick={() => toggleIngredient(index + 30)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                          checkedIngredients.has(index + 30) 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {checkedIngredients.has(index + 30) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <span className={`${checkedIngredients.has(index + 30) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mint Yogurt Dip */}
              <div>
                <h4 className="text-lg font-semibold text-teal-700 mb-4 border-l-4 border-teal-400 pl-3">
                  Mint Yogurt Dip:
                </h4>
                <ul className="space-y-3">
                  {ingredients.dip.map((ingredient, index) => (
                    <li key={index + 40} className="flex items-center space-x-3">
                      <button 
                        onClick={() => toggleIngredient(index + 40)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                          checkedIngredients.has(index + 40) 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {checkedIngredients.has(index + 40) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <span className={`${checkedIngredients.has(index + 40) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              🧑‍🍳 Instructions
            </h3>

            <div className="space-y-6">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex space-x-4">
                  <button 
                    onClick={() => toggleStep(index)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold transition-colors duration-200 ${
                      checkedSteps.has(index) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-orange-400 text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {checkedSteps.has(index) ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      index + 1
                    )}
                  </button>
                  <div className="flex-1">
                    <h4 className={`font-semibold mb-2 ${checkedSteps.has(index) ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {instruction.step}
                    </h4>
                    <p className={`leading-relaxed ${checkedSteps.has(index) ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                      {instruction.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;