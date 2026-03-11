import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ce-black/85 backdrop-blur-xl border-b border-white/10 text-white shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="C&E Seamless Gutters" 
              className="h-16 md:h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="hover:text-ce-yellow transition-colors">Home</Link>
            <Link to="/about" className="hover:text-ce-yellow transition-colors">About Us</Link>
            <div className="relative group">
              <button className="hover:text-ce-yellow transition-colors flex items-center">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-ce-black rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/services/gutters" className="block px-4 py-2 hover:bg-ce-yellow/20 rounded-t-xl">Gutter Services</Link>
                <Link to="/services/home-improvement" className="block px-4 py-2 hover:bg-ce-yellow/20">Home Improvement</Link>
                <Link to="/services/windows" className="block px-4 py-2 hover:bg-ce-yellow/20 rounded-b-xl">Window Installation</Link>
              </div>
            </div>
            <Link to="/contact" className="hover:text-ce-yellow transition-colors">Contact</Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact" className="bg-ce-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md">
              Free Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-ce-yellow focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark absolute w-full left-0 z-50">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-ce-yellow transition-colors text-lg font-medium">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-ce-yellow transition-colors text-lg font-medium">About Us</Link>
            <div className="space-y-2 pt-2 pb-2">
              <div className="font-bold text-ce-yellow uppercase text-sm tracking-wider mb-2">Services</div>
              <div className="pl-4 space-y-3 flex flex-col border-l border-white/10">
                <Link to="/services/gutters" onClick={() => setIsOpen(false)} className="block hover:text-ce-yellow transition-colors">Gutter Services</Link>
                <Link to="/services/home-improvement" onClick={() => setIsOpen(false)} className="block hover:text-ce-yellow transition-colors">Home Improvement</Link>
                <Link to="/services/windows" onClick={() => setIsOpen(false)} className="block hover:text-ce-yellow transition-colors">Window Installation</Link>
              </div>
            </div>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-ce-yellow transition-colors text-lg font-medium">Contact</Link>
            <div className="pt-4 border-t border-white/10">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="inline-block bg-ce-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md w-full text-center">
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-ce-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-ce-red/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/logo.svg" 
                alt="C&E Seamless Gutters" 
                className="h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted neighbor for all home improvement needs. Licensed, bonded, and insured for your peace of mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ce-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ce-red transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="h-64 md:h-full min-h-[200px] rounded-2xl overflow-hidden shadow-inner border border-white/10">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              src="https://www.google.com/maps?q=709+Division+St,Lake+Charles,LA+70601&output=embed" 
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-ce-yellow">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-ce-red shrink-0" size={20} />
                <span className="text-gray-400">709 Division St, Lake Charles, LA 70601</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-ce-red shrink-0" size={20} />
                <span className="text-gray-400">(337) 384-4417</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-ce-red shrink-0" size={20} />
                <span className="text-gray-400">cehomeser@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} C&E Seamless Gutters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const QuoteForm = () => {
  return (
    <section id="quote-form" className="py-32 bg-mesh-light relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="bg-ce-black p-12 md:p-16 text-white md:w-2/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ce-red/20 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-6">Get a Free Quote</h2>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                Ready to elevate your home? Fill out the form below and our experts will reach out to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin size={24} className="text-ce-yellow" />
                  </div>
                  <span className="text-lg pt-1">709 Division St<br/>Lake Charles, LA 70601</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Phone size={24} className="text-ce-yellow" />
                  </div>
                  <span className="text-lg">(337) 384-4417</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Mail size={24} className="text-ce-yellow" />
                  </div>
                  <span className="text-lg">cehomeser@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-12 md:p-16 md:w-3/5 bg-white">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-ce-red focus:bg-white outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-ce-red focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Service Needed</label>
                <select className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-ce-red focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                  <option>Gutter Services</option>
                  <option>Home Improvement</option>
                  <option>Window Installation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-ce-red focus:bg-white outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-ce-red hover:bg-red-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-ce-red/20 transform hover:-translate-y-1 transition-all text-lg tracking-wide">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
