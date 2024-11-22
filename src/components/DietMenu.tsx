import React from 'react';
import { Utensils } from 'lucide-react';

interface DietMenuProps {
  dietType: string;
}

const dietPlans = {
  regular: {
    breakfast: ['Oatmeal with fruits', 'Whole grain toast with eggs', 'Greek yogurt with honey'],
    lunch: ['Grilled chicken salad', 'Quinoa bowl with vegetables', 'Turkey sandwich'],
    dinner: ['Baked salmon', 'Lean beef stir-fry', 'Whole grain pasta'],
    snacks: ['Mixed nuts', 'Apple with peanut butter', 'Carrot sticks with hummus'],
  },
  vegetarian: {
    breakfast: ['Smoothie bowl', 'Avocado toast', 'Vegetable omelette'],
    lunch: ['Chickpea curry', 'Buddha bowl', 'Caprese sandwich'],
    dinner: ['Lentil soup', 'Vegetable stir-fry', 'Black bean tacos'],
    snacks: ['Trail mix', 'Fruit salad', 'Roasted chickpeas'],
  },
  vegan: {
    breakfast: ['Chia pudding', 'Tofu scramble', 'Overnight oats'],
    lunch: ['Quinoa salad', 'Tempeh wrap', 'Vegetable soup'],
    dinner: ['Buddha bowl', 'Mushroom risotto', 'Lentil curry'],
    snacks: ['Energy balls', 'Mixed nuts', 'Vegetable sticks'],
  },
  keto: {
    breakfast: ['Bacon and eggs', 'Keto pancakes', 'Avocado and eggs'],
    lunch: ['Tuna salad', 'Chicken Caesar', 'Beef lettuce wraps'],
    dinner: ['Salmon with asparagus', 'Keto pizza', 'Cauliflower rice stir-fry'],
    snacks: ['Cheese cubes', 'Pork rinds', 'Almonds'],
  },
  mediterranean: {
    breakfast: ['Greek yogurt parfait', 'Mediterranean omelette', 'Whole grain toast with hummus'],
    lunch: ['Greek salad', 'Falafel wrap', 'Tuna nicoise'],
    dinner: ['Grilled fish', 'Chicken souvlaki', 'Vegetable moussaka'],
    snacks: ['Olives', 'Hummus with pita', 'Fresh fruits'],
  },
};

export function DietMenu({ dietType }: DietMenuProps) {
  const plan = dietPlans[dietType as keyof typeof dietPlans] || dietPlans.regular;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(plan).map(([meal, items]) => (
          <div key={meal} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Utensils className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium capitalize">{meal}</h3>
            </div>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}