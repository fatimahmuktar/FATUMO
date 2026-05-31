import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

/**
 * Home Page - My Next Adventure
 * Features: Hero section, introduction, featured destinations, travel statistics
 */
export default function Home() {
  const [, setLocation] = useLocation();
  const [countersAnimated, setCountersAnimated] = useState(false);

  useEffect(() => {
    // Animate counters when page loads
    const timer = setTimeout(() => {
      animateCounters();
      setCountersAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
      const target = parseInt((counter as HTMLElement).getAttribute('data-counter') || '0');
      animateValue(counter as HTMLElement, 0, target, 2000);
    });
  };

  const animateValue = (element: HTMLElement, start: number, end: number, duration: number) => {
    const increment = end / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        element.textContent = end.toString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 16);
  };

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-overlay"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            My Next Adventure Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore the world, discover new cultures, and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavigate('/destinations')}
              className="bg-white text-purple-600 hover:bg-opacity-90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Explore Destinations
            </Button>
            <Button
              onClick={() => handleNavigate('/about')}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Learn My Story
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce text-white text-3xl">↓</div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">
            Why I Travel
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Travel is not just about visiting new places; it's about discovering who you are in unfamiliar settings. 
            Every journey teaches me something new about the world and about myself. From the bustling streets of 
            ancient cities to the serene landscapes of untouched nature, each destination has a unique story to tell.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I believe that the best way to understand our world is to experience it firsthand. Through travel, 
            I've learned to embrace different cultures, appreciate diverse perspectives, and build connections 
            with people from all walks of life. This website is my personal collection of adventures, dreams, 
            and the inspiration that keeps me moving forward.
          </p>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Destination Card 1 - Swiss Alps */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={() => handleNavigate('/destinations')}>
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/swiss-alps-ZqKxodKgtsaRwhUdFSmhv7.webp"
                  alt="Swiss Alps"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Swiss Alps</h3>
                <p className="text-gray-600">Experience breathtaking mountain scenery and alpine adventures</p>
              </div>
            </div>

            {/* Destination Card 2 - Maldives */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={() => handleNavigate('/destinations')}>
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/maldives-Ha9KzbXtfaoseQCvFvMwQD.webp"
                  alt="Maldives"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Maldives</h3>
                <p className="text-gray-600">Discover pristine beaches and crystal-clear turquoise waters</p>
              </div>
            </div>

            {/* Destination Card 3 - Rome */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={() => handleNavigate('/destinations')}>
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/rome-FrB9BajwDFE4uKFkJZ3pDF.webp"
                  alt="Rome"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Rome</h3>
                <p className="text-gray-600">Explore ancient history and timeless architectural wonders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My Travel Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-counter="45">
                0
              </div>
              <p className="text-lg opacity-90">Countries Visited</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-counter="120">
                0
              </div>
              <p className="text-lg opacity-90">Cities Explored</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-counter="1000">
                0
              </div>
              <p className="text-lg opacity-90">Days Traveling</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-counter="500">
                0
              </div>
              <p className="text-lg opacity-90">Photos Taken</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join me in exploring the world's most incredible destinations. Whether you're looking for travel tips, 
            destination guides, or just some inspiration, you'll find it all here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavigate('/planner')}
              className="bg-purple-600 text-white hover:bg-opacity-90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Travel Planning Tools
            </Button>
            <Button
              onClick={() => handleNavigate('/contact')}
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
