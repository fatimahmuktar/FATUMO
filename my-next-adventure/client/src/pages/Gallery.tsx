import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

/**
 * Gallery Page - My Next Adventure
 * Features: Travel photo gallery, CSS Grid layout, hover animations, travel quotes
 */
export default function Gallery() {
  const [, setLocation] = useLocation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  const galleryImages = [
    {
      id: 1,
      title: 'Mountain Peak',
      location: 'Swiss Alps',
      emoji: '🏔️',
      description: 'Sunrise over the majestic Alpine peaks'
    },
    {
      id: 2,
      title: 'Beach Paradise',
      location: 'Maldives',
      emoji: '🏖️',
      description: 'Crystal clear waters and white sand beaches'
    },
    {
      id: 3,
      title: 'Ancient Ruins',
      location: 'Rome',
      emoji: '🏛️',
      description: 'Historic architecture and timeless beauty'
    },
    {
      id: 4,
      title: 'Urban Lights',
      location: 'Tokyo',
      emoji: '🌃',
      description: 'Neon-lit streets and modern technology'
    },
    {
      id: 5,
      title: 'Northern Lights',
      location: 'Iceland',
      emoji: '✨',
      description: 'Dancing aurora borealis in the night sky'
    },
    {
      id: 6,
      title: 'Tropical Jungle',
      location: 'Bali',
      emoji: '🌴',
      description: 'Lush greenery and spiritual temples'
    },
    {
      id: 7,
      title: 'Adventure Trail',
      location: 'New Zealand',
      emoji: '🥾',
      description: 'Hiking through stunning mountain landscapes'
    },
    {
      id: 8,
      title: 'Desert Wonder',
      location: 'Egypt',
      emoji: '🐪',
      description: 'Ancient pyramids and golden dunes'
    },
    {
      id: 9,
      title: 'Waterfall Magic',
      location: 'Costa Rica',
      emoji: '💧',
      description: 'Cascading waters in the rainforest'
    }
  ];

  const quotes = [
    {
      text: 'The world is a book, and those who do not travel read only one page.',
      author: 'Saint Augustine'
    },
    {
      text: 'Travel is the only thing you buy that makes you richer.',
      author: 'Unknown'
    },
    {
      text: 'We travel not to escape life, but for life not to escape us.',
      author: 'Anonymous'
    },
    {
      text: 'Traveling – it leaves you speechless, then turns you into a storyteller.',
      author: 'Ibn Battuta'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Travel Gallery</h1>
          <p className="text-xl opacity-90">A visual journey through my favorite destinations and unforgettable moments</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Image Background */}
                <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {image.emoji}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-white opacity-90 mb-2">{image.location}</p>
                  <p className="text-white text-sm opacity-80">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Quotes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Travel Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-2xl font-bold mb-4 italic">"{quote.text}"</p>
                <p className="text-lg opacity-90">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Memories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Adventure Memories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Memory 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl">
                🗻
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-3">Climbing Mount Fuji</h3>
                <p className="text-gray-700 mb-4">
                  One of the most challenging yet rewarding experiences of my life. The view from the summit 
                  at sunrise was absolutely breathtaking and made every step of the climb worthwhile.
                </p>
                <p className="text-sm text-gray-500">Japan • 2022</p>
              </div>
            </div>

            {/* Memory 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-6xl">
                🤿
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-3">Diving in the Great Barrier Reef</h3>
                <p className="text-gray-700 mb-4">
                  Exploring the underwater world and witnessing the incredible biodiversity of the coral reef 
                  was a humbling experience that deepened my appreciation for marine conservation.
                </p>
                <p className="text-sm text-gray-500">Australia • 2021</p>
              </div>
            </div>

            {/* Memory 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-6xl">
                🏜️
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-3">Desert Safari in Morocco</h3>
                <p className="text-gray-700 mb-4">
                  Riding camels through the Sahara Desert and spending a night under the stars in a Bedouin camp 
                  was a magical journey into a different way of life.
                </p>
                <p className="text-sm text-gray-500">Morocco • 2020</p>
              </div>
            </div>

            {/* Memory 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl">
                🦜
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-3">Rainforest Adventure in Brazil</h3>
                <p className="text-gray-700 mb-4">
                  Exploring the Amazon rainforest and learning about indigenous cultures opened my eyes to 
                  the importance of environmental conservation and cultural preservation.
                </p>
                <p className="text-sm text-gray-500">Brazil • 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">Want to Share Your Travel Stories?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get in touch with me to discuss travel experiences, tips, and recommendations. 
            I'd love to hear about your adventures!
          </p>
          <Button
            onClick={() => handleNavigate('/contact')}
            className="bg-purple-600 text-white hover:bg-opacity-90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  );
}
