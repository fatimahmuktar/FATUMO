import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

/**
 * Travel Planner Page - My Next Adventure
 * Features: Travel tips, packing checklist, budget planning, interactive features
 */
export default function Planner() {
  const [, setLocation] = useLocation();
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Passport and travel documents', checked: false },
    { id: 2, text: 'Travel insurance', checked: false },
    { id: 3, text: 'Flight tickets and reservations', checked: false },
    { id: 4, text: 'Hotel bookings', checked: false },
    { id: 5, text: 'Currency exchange', checked: false },
    { id: 6, text: 'Notify bank of travel dates', checked: false },
    { id: 7, text: 'Pack luggage', checked: false },
    { id: 8, text: 'Arrange transportation to airport', checked: false }
  ]);

  const [packingList, setPackingList] = useState([
    { id: 1, text: 'Clothes (weather-appropriate)', checked: false },
    { id: 2, text: 'Comfortable walking shoes', checked: false },
    { id: 3, text: 'Toiletries and medications', checked: false },
    { id: 4, text: 'Phone charger and adapters', checked: false },
    { id: 5, text: 'Camera and memory cards', checked: false },
    { id: 6, text: 'Travel pillow and eye mask', checked: false },
    { id: 7, text: 'Sunscreen and sunglasses', checked: false },
    { id: 8, text: 'Reusable water bottle', checked: false },
    { id: 9, text: 'Travel journal and pen', checked: false },
    { id: 10, text: 'First aid kit', checked: false }
  ]);

  const [budget, setBudget] = useState({
    flights: 0,
    accommodation: 0,
    food: 0,
    activities: 0,
    transport: 0,
    shopping: 0
  });

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  const toggleChecklistItem = (id: number) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const togglePackingItem = (id: number) => {
    setPackingList(packingList.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleBudgetChange = (category: string, value: number) => {
    setBudget({
      ...budget,
      [category]: value
    });
  };

  const totalBudget = Object.values(budget).reduce((sum, val) => sum + val, 0);
  const checklistProgress = Math.round((checklist.filter(i => i.checked).length / checklist.length) * 100);
  const packingProgress = Math.round((packingList.filter(i => i.checked).length / packingList.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Travel Planner</h1>
          <p className="text-xl opacity-90">Organize your adventure with our comprehensive planning tools</p>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Travel Planning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">📋 Before You Go</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Check passport expiration dates (valid for 6+ months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Research visa requirements for your destination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Get travel insurance to protect your investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Book flights and accommodations in advance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Notify your bank of travel dates</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">🎒 Packing Smart</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Make a packing list and stick to it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Pack versatile, mix-and-match clothing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Use packing cubes to organize your luggage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Keep important documents in a separate bag</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Leave room for souvenirs and purchases</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-pink-600">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">💰 Budget Planning</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Research average costs for your destination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Set a realistic budget for each category</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Add 10-15% buffer for unexpected expenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Track your spending while traveling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">→</span>
                  <span>Look for free attractions and activities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">🌍 During Your Trip</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Stay flexible and embrace unexpected opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Interact with locals and learn about their culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Take photos and keep a travel journal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Try local cuisine and street food</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">→</span>
                  <span>Stay safe and aware of your surroundings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Travel Checklist */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">Pre-Travel Checklist</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">Progress</span>
                <span className="text-lg font-bold text-purple-600">{checklistProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${checklistProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              {checklist.map(item => (
                <label key={item.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleChecklistItem(item.id)}
                    className="w-5 h-5 text-purple-600 rounded cursor-pointer"
                  />
                  <span className={`text-lg ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packing Checklist */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">Packing Checklist</h2>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">Progress</span>
                <span className="text-lg font-bold text-purple-600">{packingProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${packingProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packingList.map(item => (
                <label key={item.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white cursor-pointer transition-colors duration-200">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => togglePackingItem(item.id)}
                    className="w-5 h-5 text-purple-600 rounded cursor-pointer"
                  />
                  <span className={`${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Planner */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">Budget Planner</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {Object.entries(budget).map(([category, amount]) => (
                <div key={category} className="space-y-2">
                  <label className="block text-lg font-semibold text-gray-700 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">$</span>
                    <input
                      type="number"
                      min="0"
                      value={amount}
                      onChange={(e) => handleBudgetChange(category, parseFloat(e.target.value) || 0)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
              <div className="text-center">
                <p className="text-lg opacity-90 mb-2">Total Budget</p>
                <p className="text-5xl font-bold">${totalBudget.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">Need More Inspiration?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Check out our gallery of travel photos and explore more destinations to plan your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavigate('/gallery')}
              className="bg-purple-600 text-white hover:bg-opacity-90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              View Gallery
            </Button>
            <Button
              onClick={() => handleNavigate('/destinations')}
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Explore Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
