import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-ce-black text-white shadow-lg">
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
          
          <Link to="/contact" className="bg-ce-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md">
            Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-ce-black text-white pt-16 pb-8 bg-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    <section className="py-20 bg-brick bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-ce-red p-12 text-white md:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Get a Free Quote</h2>
            <p className="text-red-100 mb-8">
              Ready to start your next project? Fill out the form and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-ce-yellow shrink-0" />
                <span>709 Division St, Lake Charles, LA 70601</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-ce-yellow" />
                <span>(337) 384-4417</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-ce-yellow" />
                <span>cehomeser@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="p-12 md:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ce-red focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ce-red focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ce-red focus:border-transparent outline-none transition-all">
                  <option>Gutter Services</option>
                  <option>Home Improvement</option>
                  <option>Window Installation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ce-red focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-ce-yellow hover:bg-yellow-500 text-ce-black font-bold py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
