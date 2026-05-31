import { useLocation } from 'wouter';

/**
 * Footer Component - My Next Adventure
 * Features: Navigation links, social media, copyright information
 */
export default function Footer() {
  const [, setLocation] = useLocation();

  const handleNavClick = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">✈️</span>
              My Next Adventure
            </h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Exploring the world, discovering new cultures, and creating unforgettable memories through travel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Destinations', path: '/destinations' },
                { label: 'Gallery', path: '/gallery' }
              ].map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { id: 'planner', label: 'Travel Planner', path: '/planner' },
                { id: 'contact', label: 'Contact', path: '/contact' },
                { id: 'privacy', label: 'Privacy Policy', path: '#' },
                { id: 'terms', label: 'Terms of Service', path: '#' }
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => link.path !== '#' && handleNavClick(link.path)}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { id: 'instagram', icon: '📸', label: 'Instagram' },
                { id: 'facebook', icon: '👥', label: 'Facebook' },
                { id: 'twitter', icon: '🐦', label: 'Twitter' },
                { id: 'youtube', icon: '▶️', label: 'YouTube' }
              ].map(social => (
                <a
                  key={social.id}
                  href="#"
                  className="text-2xl opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} My Next Adventure. All rights reserved.
          </p>
          <p className="text-sm opacity-80 text-center">
            Designed with ❤️ for travel enthusiasts everywhere
          </p>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
    </footer>
  );
}
