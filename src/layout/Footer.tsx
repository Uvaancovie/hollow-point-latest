import React from 'react';
import { ShieldCheck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { navLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck size={32} className="text-red-600" />
              <p className='text-white text-[18px] font-bold'>
                Hollow Point Security
              </p>
            </div>
            <p className="text-gray-400 mb-6">
              Providing elite security solutions to protect what matters most to you. Available 24/7 for your peace of mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Residential Security
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Commercial Security
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Personal Protection
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Security Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Event Security
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Surveillance Systems
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                123 Security Drive, Suite 500
                <br />Metropolis, NY 10001
              </li>
              <li className="text-gray-400">
                info@hollowpointsecurity.com
              </li>
              <li className="text-gray-400">
                +1 (555) 123-4567
              </li>
              <li className="text-gray-400">
                24/7 Emergency: +1 (555) 911-0000
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Hollow Point Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;