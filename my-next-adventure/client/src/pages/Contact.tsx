import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { toast } from 'sonner';

/**
 * Contact Page - My Next Adventure
 * Features: Contact form, social media links, collaboration section
 */
export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter a message');
      return;
    }

    // Simulate form submission
    toast.success('Thank you for your message! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📸',
      url: '#',
      color: 'from-pink-500 to-orange-400'
    },
    {
      name: 'Facebook',
      icon: '👥',
      url: '#',
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'YouTube',
      icon: '▶️',
      url: '#',
      color: 'from-red-600 to-red-400'
    },
    {
      name: 'Pinterest',
      icon: '📌',
      url: '#',
      color: 'from-red-600 to-red-500'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: '#',
      color: 'from-gray-900 to-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl opacity-90">Let's connect and share travel stories and experiences</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Email</h3>
              <p className="text-gray-700 mb-4">Send me an email anytime</p>
              <a href="mailto:hello@mynextadventure.com" className="text-purple-600 font-semibold hover:text-pink-500 transition-colors duration-300">
                hello@mynextadventure.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Phone</h3>
              <p className="text-gray-700 mb-4">Call me during business hours</p>
              <a href="tel:+1234567890" className="text-purple-600 font-semibold hover:text-pink-500 transition-colors duration-300">
                +1 (234) 567-890
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Location</h3>
              <p className="text-gray-700 mb-4">Based in</p>
              <p className="text-purple-600 font-semibold">New York, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Send Me a Message</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-20 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-20 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-lg font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-20 transition-all duration-300"
                  placeholder="Travel collaboration opportunity"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your travel interests or collaboration ideas..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Follow My Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`bg-gradient-to-br ${social.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center text-center fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{social.icon}</div>
                <p className="font-semibold">{social.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Collaborate</h2>
          <p className="text-xl opacity-90 mb-8">
            I'm always interested in travel collaborations, partnerships, and exciting projects. 
            Whether you're a fellow traveler, content creator, or brand looking to work together, 
            I'd love to hear from you!
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">I'm available for:</h3>
            <ul className="space-y-2 text-lg opacity-90">
              <li>✓ Travel blog collaborations</li>
              <li>✓ Sponsored content and partnerships</li>
              <li>✓ Photography and videography projects</li>
              <li>✓ Speaking engagements and travel talks</li>
              <li>✓ Travel guide writing and consulting</li>
            </ul>
          </div>
          <Button
            onClick={() => handleNavigate('/contact')}
            className="bg-white text-purple-600 hover:bg-opacity-90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-3">How can I collaborate with you?</h3>
              <p className="text-gray-700">
                Feel free to reach out using the contact form above or connect with me on social media. 
                I review all collaboration inquiries and will get back to you within 5-7 business days.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-500 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Can I use your photos for my project?</h3>
              <p className="text-gray-700">
                Most of my photos are available for personal use. For commercial use or specific requests, 
                please contact me directly to discuss licensing options.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-600 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-3">How often do you update your content?</h3>
              <p className="text-gray-700">
                I update my blog and gallery regularly with new travel stories and photos. 
                Follow me on social media to stay updated on my latest adventures!
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Do you offer travel consulting services?</h3>
              <p className="text-gray-700">
                Yes! I offer personalized travel planning and consulting services. 
                Contact me to discuss your travel goals and how I can help you plan your perfect adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
