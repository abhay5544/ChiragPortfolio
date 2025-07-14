import React from 'react';
import { Cloud, Network, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-8 w-8 text-blue-400" />
              <Network className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold">Chirag's Portfolio</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated Cloud and Network Engineer with expertise in enterprise infrastructure, 
              cloud technologies, and operational excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 chirag.budheliya046@gmail.com </p>
              <p>📱 +1  437-955-6156</p>
              <p>📍 Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} CloudNet Pro. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of coffee ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;