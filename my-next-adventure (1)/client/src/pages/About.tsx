import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

/**
 * About Page - My Next Adventure
 * Features: Personal story, travel experiences, goals, philosophy, and inspirational quotes
 */
export default function About() {
  const [, setLocation] = useLocation();

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me & My Travel Journey</h1>
          <p className="text-xl opacity-90">Discovering the world, one adventure at a time</p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 px-4 gradient-section-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-purple-600">My Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              My passion for travel began at a young age when my family took a road trip across the country. 
              I was fascinated by the diversity of landscapes, cultures, and people we encountered. That spark 
              of curiosity has never faded, and it has grown into a lifelong commitment to exploring our beautiful world.
            </p>
            <p>
              Over the years, I've learned that travel is more than just checking off destinations on a bucket list. 
              It's about immersing yourself in new experiences, learning from different perspectives, and challenging 
              your preconceived notions about the world. Every journey has taught me something valuable about myself 
              and humanity as a whole.
            </p>
            <p>
              From backpacking through Southeast Asia to hiking in the Rocky Mountains, from exploring ancient ruins 
              in Peru to enjoying street food in Bangkok, each adventure has left an indelible mark on my heart. 
              I've made lifelong friends, discovered hidden gems off the beaten path, and created memories that will 
              last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Favorite Experiences */}
      <section className="py-20 px-4 gradient-section-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Favorite Travel Experiences</h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌅</div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">Sunrise at Angkor Wat, Cambodia</h3>
                  <p className="text-gray-700">
                    Watching the sun rise over the ancient temples of Angkor Wat was a spiritual experience. 
                    The way the golden light illuminated the intricate carvings reminded me of the incredible 
                    achievements of ancient civilizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏔️</div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">Trekking Machu Picchu, Peru</h3>
                  <p className="text-gray-700">
                    The Inca Trail was challenging but rewarding. Standing at the gates of Machu Picchu after days 
                    of trekking through the Andes was one of the most fulfilling moments of my life.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏖️</div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">Island Hopping in Greece</h3>
                  <p className="text-gray-700">
                    Exploring the Greek islands, from Santorini's white-washed buildings to Crete's hidden beaches, 
                    was like stepping into a postcard. The warmth of the people and the beauty of the Aegean Sea 
                    will stay with me forever.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🦁</div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">Safari in Tanzania</h3>
                  <p className="text-gray-700">
                    Witnessing the Great Migration in the Serengeti was awe-inspiring. The raw beauty of nature 
                    and the incredible wildlife reminded me of how vast and wonderful our planet truly is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Goals & Dreams */}
      <section className="py-20 px-4 gradient-section-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">My Travel Goals & Dream Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Short-term Goals (1-2 years)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <span>Explore the Northern Lights in Iceland</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <span>Trek to Base Camp in Nepal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <span>Visit the Fjords of Norway</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <span>Explore the temples of Japan</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Long-term Dreams (3+ years)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">★</span>
                  <span>Complete a world tour visiting all 7 continents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">★</span>
                  <span>Document my travels through photography and storytelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">★</span>
                  <span>Volunteer with communities in developing countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 text-xl">★</span>
                  <span>Write a travel memoir sharing my experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">My Travel Philosophy</h2>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Travel with Purpose</h3>
              <p className="text-lg opacity-90">
                Every journey should have meaning. Whether it's learning about a new culture, challenging yourself 
                physically, or finding inner peace, travel should enrich your life in some way.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Embrace the Unexpected</h3>
              <p className="text-lg opacity-90">
                Some of my best travel memories came from unplanned detours and spontaneous decisions. 
                Being flexible and open to new experiences often leads to the most rewarding adventures.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Respect Local Cultures</h3>
              <p className="text-lg opacity-90">
                Travel is a privilege. It's important to approach new places with respect, humility, and a genuine 
                desire to learn from the people and communities we visit.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Travel Sustainably</h3>
              <p className="text-lg opacity-90">
                Our planet is precious. I'm committed to traveling responsibly, minimizing my environmental impact, 
                and supporting local economies wherever I go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-20 px-4 gradient-section-light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-12 rounded-lg text-white">
            <p className="text-3xl font-bold mb-4 italic">
              "The world is a book, and those who do not travel read only one page."
            </p>
            <p className="text-lg opacity-90">— Saint Augustine</p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Explore More</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleNavigate('/destinations')}
                className="bg-purple-600 text-white hover:bg-opacity-90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                View Destinations
              </Button>
              <Button
                onClick={() => handleNavigate('/gallery')}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                See Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
