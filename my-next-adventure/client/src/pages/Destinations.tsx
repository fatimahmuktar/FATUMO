import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

/**
 * Destinations Page - My Next Adventure
 * Features: Destination cards, filtering, descriptions, reasons to visit, interactive world map,
 * star ratings system, and user comments section
 */

// Destination coordinates for map markers
const destinationCoordinates: Record<string, { lat: number; lng: number }> = {
  'Swiss Alps': { lat: 46.8182, lng: 8.2275 },
  'Maldives': { lat: 3.8480, lng: 73.7597 },
  'Rome': { lat: 41.9028, lng: 12.4964 },
  'Tokyo': { lat: 35.6762, lng: 139.6503 },
  'Iceland': { lat: 64.9631, lng: -19.0208 },
  'Bali': { lat: -8.6705, lng: 115.2126 },
  'New Zealand': { lat: -40.9006, lng: 174.8860 },
  'Egypt': { lat: 26.8206, lng: 30.8025 }
};

// Sample reviews for each destination
const sampleReviews = {
  'Swiss Alps': [
    { name: 'Sarah M.', rating: 5, comment: 'Absolutely breathtaking! The hiking trails are world-class and the views are unforgettable.' },
    { name: 'John D.', rating: 4, comment: 'Beautiful mountains and charming villages. Highly recommended for nature lovers!' }
  ],
  'Maldives': [
    { name: 'Emma L.', rating: 5, comment: 'Paradise on earth! Crystal clear waters and amazing coral reefs. Perfect honeymoon destination.' },
    { name: 'Alex R.', rating: 5, comment: 'The snorkeling experience was incredible. Will definitely come back!' }
  ],
  'Rome': [
    { name: 'Marco V.', rating: 5, comment: 'Rich history at every corner. The Colosseum and Vatican are must-sees!' },
    { name: 'Lisa K.', rating: 4, comment: 'Amazing food, incredible architecture, and vibrant culture. A timeless city!' }
  ],
  'Tokyo': [
    { name: 'Yuki T.', rating: 5, comment: 'A perfect blend of ancient and modern. The food scene is absolutely incredible!' },
    { name: 'David C.', rating: 5, comment: 'Tokyo is electrifying! So much to see and do. Highly recommend!' }
  ],
  'Iceland': [
    { name: 'Anna S.', rating: 5, comment: 'The Northern Lights were magical! Waterfalls and glaciers are stunning.' },
    { name: 'Chris P.', rating: 4, comment: 'Dramatic landscapes and unique geothermal features. Worth the trip!' }
  ],
  'Bali': [
    { name: 'Nina W.', rating: 5, comment: 'Spiritual and peaceful. Beautiful beaches and amazing temples. Love it!' },
    { name: 'Tom H.', rating: 5, comment: 'Great value for money with luxury experiences. Highly recommended!' }
  ],
  'New Zealand': [
    { name: 'Sophie B.', rating: 5, comment: 'Adventure paradise! Hiking, bungee jumping, and stunning fjords. Unforgettable!' },
    { name: 'Mike J.', rating: 5, comment: 'The most beautiful landscapes I\'ve ever seen. Friendly locals too!' }
  ],
  'Egypt': [
    { name: 'Fatima A.', rating: 5, comment: 'Walking through history! The pyramids are awe-inspiring and the Nile cruise is magical.' },
    { name: 'Robert E.', rating: 4, comment: 'Fascinating ancient civilization. Museums are world-class. Highly recommended!' }
  ]
};

// Star Rating Component
function StarRating({ rating, onRate }: { rating: number; onRate?: (rate: number) => void }) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRate?.(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="transition-transform duration-200 hover:scale-110"
          disabled={!onRate}
        >
          <span
            className={`text-2xl ${
              star <= (hoverRating || rating)
                ? 'text-pink-500'
                : 'text-gray-300'
            }`}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

// Review Card Component
function ReviewCard({ name, rating, comment }: { name: string; rating: number; comment: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <h5 className="font-semibold text-gray-800">{name}</h5>
        <StarRating rating={rating} />
      </div>
      <p className="text-gray-700 text-sm">{comment}</p>
    </div>
  );
}

export default function Destinations() {
  const [, setLocation] = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [userRatings, setUserRatings] = useState<Record<string, number>>({});
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<boolean>(false);

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  const handleRating = (destName: string, rating: number) => {
    setUserRatings(prev => ({
      ...prev,
      [destName]: rating
    }));
  };

  const toggleComments = (destName: string) => {
    setExpandedComments(prev => ({
      ...prev,
      [destName]: !prev[destName]
    }));
  };

  const destinations = [
    {
      id: 1,
      name: 'Swiss Alps',
      country: 'Switzerland',
      category: 'mountains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/swiss-alps-ZqKxodKgtsaRwhUdFSmhv7.webp',
      description: 'Experience breathtaking mountain scenery and alpine adventures',
      reasons: [
        'World-class hiking trails with stunning views',
        'Charming mountain villages and traditional culture',
        'Excellent skiing and winter sports',
        'Pristine natural beauty and fresh mountain air'
      ]
    },
    {
      id: 2,
      name: 'Maldives',
      country: 'Maldives',
      category: 'beaches',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/maldives-Ha9KzbXtfaoseQCvFvMwQD.webp',
      description: 'Discover pristine beaches and crystal-clear turquoise waters',
      reasons: [
        'World-famous coral reefs for snorkeling and diving',
        'Luxury overwater bungalows and resorts',
        'Pristine white sand beaches',
        'Incredible marine life and underwater ecosystems'
      ]
    },
    {
      id: 3,
      name: 'Rome',
      country: 'Italy',
      category: 'cultural',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/rome-FrB9BajwDFE4uKFkJZ3pDF.webp',
      description: 'Explore ancient history and timeless architectural wonders',
      reasons: [
        'Iconic landmarks like the Colosseum and Vatican',
        'Rich history spanning thousands of years',
        'World-class cuisine and wine',
        'Vibrant culture and artistic heritage'
      ]
    },
    {
      id: 4,
      name: 'Tokyo',
      country: 'Japan',
      category: 'cultural',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/tokyo-UP6pkzphTqwLxfDG4kkiDC.webp',
      description: 'Immerse yourself in modern technology and ancient traditions',
      reasons: [
        'Blend of ultra-modern and traditional culture',
        'Incredible food scene with diverse cuisines',
        'Beautiful temples and gardens',
        'Unique shopping and entertainment districts'
      ]
    },
    {
      id: 5,
      name: 'Iceland',
      country: 'Iceland',
      category: 'nature',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/iceland-XphyT98Vt8AnRWXnneMtvS.webp',
      description: 'Witness the Northern Lights and dramatic natural landscapes',
      reasons: [
        'Spectacular Northern Lights displays',
        'Stunning waterfalls and glaciers',
        'Unique geothermal hot springs',
        'Otherworldly volcanic landscapes'
      ]
    },
    {
      id: 6,
      name: 'Bali',
      country: 'Indonesia',
      category: 'beaches',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/bali-5nzPuXYrkQUQi2jtm4VXqU.webp',
      description: 'Relax in tropical paradise with spiritual and cultural experiences',
      reasons: [
        'Beautiful beaches and tropical scenery',
        'Ancient temples and spiritual sites',
        'Affordable luxury and wellness retreats',
        'Vibrant local culture and traditions'
      ]
    },
    {
      id: 7,
      name: 'New Zealand',
      country: 'New Zealand',
      category: 'adventure',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/new-zealand-Mv69NAB7dqaxEGoXrjVQJZ.webp',
      description: 'Adventure paradise with stunning landscapes and outdoor activities',
      reasons: [
        'World-class hiking and trekking',
        'Adrenaline-pumping adventure sports',
        'Breathtaking fjords and mountains',
        'Friendly locals and welcoming culture'
      ]
    },
    {
      id: 8,
      name: 'Egypt',
      country: 'Egypt',
      category: 'cultural',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663632522386/2LmRQXtcLfWBf7AB8YjpPG/egypt-nNesM8EPZiCWrHUBSzFHNn.webp',
      description: 'Explore the wonders of ancient Egyptian civilization',
      reasons: [
        'Iconic pyramids and ancient monuments',
        'Fascinating museums with historical artifacts',
        'Nile River cruises with scenic views',
        'Rich history and archaeological significance'
      ]
    }
  ];

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(d => d.category === activeFilter);

  const filters = [
    { value: 'all', label: 'All Destinations' },
    { value: 'mountains', label: 'Mountains' },
    { value: 'beaches', label: 'Beaches' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'nature', label: 'Nature' },
    { value: 'adventure', label: 'Adventure' }
  ];

  // Initialize interactive world map
  useEffect(() => {
    if (!mapRef.current) return;

    const container = mapRef.current;
    
    // Create SVG map
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 960 600');
    svg.setAttribute('class', 'w-full h-auto');
    svg.setAttribute('style', 'background: linear-gradient(to bottom, #e0f7ff, #b3e5fc); border-radius: 8px;');

    // Add map background group
    const mapGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    mapGroup.setAttribute('fill', '#ffffff');
    mapGroup.setAttribute('stroke', '#0077be');
    mapGroup.setAttribute('stroke-width', '0.5');

    // Add grid lines
    for (let i = 0; i <= 180; i += 30) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', String((i / 180) * 960));
      line.setAttribute('y1', '0');
      line.setAttribute('x2', String((i / 180) * 960));
      line.setAttribute('y2', '600');
      line.setAttribute('stroke', '#0077be');
      line.setAttribute('stroke-width', '0.3');
      line.setAttribute('opacity', '0.2');
      mapGroup.appendChild(line);
    }

    for (let i = 0; i <= 90; i += 30) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', '0');
      line.setAttribute('y1', String((i / 90) * 600));
      line.setAttribute('x2', '960');
      line.setAttribute('y2', String((i / 90) * 600));
      line.setAttribute('stroke', '#0077be');
      line.setAttribute('stroke-width', '0.3');
      line.setAttribute('opacity', '0.2');
      mapGroup.appendChild(line);
    }

    svg.appendChild(mapGroup);

    // Add destination markers
    destinations.forEach(dest => {
      const coords = destinationCoordinates[dest.name];
      if (!coords) return;

      // Convert lat/lng to SVG coordinates
      const x = ((coords.lng + 180) / 360) * 960;
      const y = ((90 - coords.lat) / 180) * 600;

      // Create marker group
      const markerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      markerGroup.setAttribute('class', 'destination-marker cursor-pointer');
      markerGroup.setAttribute('data-destination', dest.name);
      markerGroup.setAttribute('style', 'transition: all 0.3s ease;');

      // Add outer ring for hover effect
      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ring.setAttribute('cx', String(x));
      ring.setAttribute('cy', String(y));
      ring.setAttribute('r', '12');
      ring.setAttribute('fill', 'none');
      ring.setAttribute('stroke', '#0077be');
      ring.setAttribute('stroke-width', '1');
      ring.setAttribute('opacity', '0.3');
      ring.setAttribute('class', 'transition-all duration-300');

      // Add circle marker
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', String(x));
      circle.setAttribute('cy', String(y));
      circle.setAttribute('r', '8');
      circle.setAttribute('fill', selectedDestination === dest.name ? '#ff6b35' : '#0077be');
      circle.setAttribute('stroke', 'white');
      circle.setAttribute('stroke-width', '2');
      circle.setAttribute('class', 'transition-all duration-300');

      // Add label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', String(x));
      text.setAttribute('y', String(y - 18));
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '10');
      text.setAttribute('fill', '#0077be');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('class', 'pointer-events-none');
      text.setAttribute('opacity', selectedDestination === dest.name ? '1' : '0.7');
      text.textContent = dest.name;

      markerGroup.appendChild(ring);
      markerGroup.appendChild(circle);
      markerGroup.appendChild(text);

      // Add click handler
      markerGroup.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelectedDestination(selectedDestination === dest.name ? null : dest.name);
      });

      // Add hover effect
      markerGroup.addEventListener('mouseenter', () => {
        circle.setAttribute('r', '12');
        ring.setAttribute('opacity', '0.8');
        text.setAttribute('opacity', '1');
      });

      markerGroup.addEventListener('mouseleave', () => {
        circle.setAttribute('r', '8');
        ring.setAttribute('opacity', '0.3');
        text.setAttribute('opacity', selectedDestination === dest.name ? '1' : '0.7');
      });

      svg.appendChild(markerGroup);
    });

    container.innerHTML = '';
    container.appendChild(svg);
    mapInstanceRef.current = true;
  }, [selectedDestination]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Dream Destinations</h1>
          <p className="text-xl opacity-90">Places I want to explore and experiences I want to have</p>
        </div>
      </section>

      {/* Interactive World Map Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 border-b-4 border-purple-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">📍 Explore Destinations on the World Map</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-600 border-opacity-20">
            <div ref={mapRef} className="w-full h-96 flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg">
              <p className="text-gray-500">Loading map...</p>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              💡 Click on any marker to highlight a destination. Hover over markers to see destination names.
            </p>
            {selectedDestination && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-purple-600">
                <p className="text-purple-600 font-semibold text-lg">📌 Selected: {selectedDestination}</p>
                <p className="text-gray-700 text-sm mt-2">Click the marker again to deselect or scroll down to see details.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">Filter by Category</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Destination Image with Hover Effect */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Destination Header */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-blue-100">{destination.country}</p>
                </div>

                {/* Destination Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 text-lg">{destination.description}</p>

                  <h4 className="text-xl font-bold text-purple-600 mb-4">Why I want to visit:</h4>
                  <ul className="space-y-3 mb-6">
                    {destination.reasons.map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-pink-500 text-xl mt-1">✓</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Rating Section */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h5 className="font-semibold text-gray-800">Rate this destination:</h5>
                      <span className="text-sm text-gray-600">
                        {userRatings[destination.name] ? `Your rating: ${userRatings[destination.name]}/5` : 'Not rated yet'}
                      </span>
                    </div>
                    <StarRating 
                      rating={userRatings[destination.name] || 0} 
                      onRate={(rating) => handleRating(destination.name, rating)}
                    />
                  </div>

                  {/* Comments Section */}
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <button
                      onClick={() => toggleComments(destination.name)}
                      className="w-full flex justify-between items-center font-semibold text-purple-600 hover:text-pink-600 transition-colors"
                    >
                      <span>💬 Traveler Reviews ({(sampleReviews[destination.name as keyof typeof sampleReviews] || []).length})</span>
                      <span className="text-xl">{expandedComments[destination.name] ? '▼' : '▶'}</span>
                    </button>
                    
                    {expandedComments[destination.name] && (
                      <div className="mt-4 space-y-3">
                        {(sampleReviews[destination.name as keyof typeof sampleReviews] || []).map((review, idx) => (
                          <ReviewCard key={idx} {...review} />
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={() => handleNavigate('/planner')}
                    className="w-full bg-purple-600 text-white hover:bg-opacity-90 py-2 rounded-lg transition-all duration-300 hover:shadow-lg font-semibold"
                  >
                    Plan a Trip Here
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600">No destinations found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">Ready to Plan Your Adventure?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Use our travel planner to organize your next trip, create packing lists, and budget your adventure.
          </p>
          <Button
            onClick={() => handleNavigate('/planner')}
            className="bg-purple-600 text-white hover:bg-opacity-90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Start Planning Now
          </Button>
        </div>
      </section>
    </div>
  );
}
