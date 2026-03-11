import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-ce-black/30 backdrop-blur-3xl border-b border-white/5 text-white transition-all duration-500">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="C&E Seamless Gutters" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-700 group-hover:scale-105 filter invert mix-blend-screen opacity-90"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="hidden md:flex space-x-12 font-sans tracking-[0.1em] text-[0.75rem] uppercase font-bold items-center">
            <Link to="/" className="hover:text-ce-yellow transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-ce-yellow hover:after:w-full after:transition-all after:duration-300">HOME</Link>
            <Link to="/about" className="hover:text-ce-yellow transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-ce-yellow hover:after:w-full after:transition-all after:duration-300">ABOUT</Link>
            <div className="relative group/nav py-4">
              <button className="hover:text-ce-yellow transition-colors flex items-center relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-ce-yellow hover:after:w-full after:transition-all after:duration-300 uppercase">
                SERVICES
              </button>
              <div className="absolute left-0 mt-4 w-64 glass-light text-white rounded-none shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-500 transform translate-y-4 group-hover/nav:translate-y-0 border-t border-ce-yellow">
                <Link to="/services/gutters" className="block px-6 py-4 hover:bg-white/5 transition-colors border-b border-white/5 text-[0.7rem] tracking-[0.15em]">GUTTER ARCHITECTURE</Link>
                <Link to="/services/home-improvement" className="block px-6 py-4 hover:bg-white/5 transition-colors border-b border-white/5 text-[0.7rem] tracking-[0.15em]">RESTORATION</Link>
                <Link to="/services/windows" className="block px-6 py-4 hover:bg-white/5 transition-colors text-[0.7rem] tracking-[0.15em]">FENESTRATION</Link>
              </div>
            </div>
            <Link to="/contact" className="hover:text-ce-yellow transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-ce-yellow hover:after:w-full after:transition-all after:duration-300">CONTACT</Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact" className="border border-white/20 hover:border-ce-yellow text-white px-8 py-3 text-[0.75rem] tracking-[0.15em] uppercase font-bold transition-all duration-500 hover:bg-ce-yellow hover:text-ce-black">
              Consultation
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
    <footer className="bg-ce-black text-white pt-40 pb-16 relative overflow-hidden bg-noise border-t border-white/5">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col mb-32">
          <h2 className="text-[12vw] leading-[0.85] font-serif font-bold tracking-tighter text-outline mb-12">
            START<br />A PROJECT.
          </h2>
          <div className="h-px w-full bg-white/10 mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <img 
                src="/logo.png" 
                alt="C&E Seamless Gutters" 
                className="h-20 w-auto object-contain mb-8 filter invert mix-blend-screen opacity-90"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-400 font-light text-xl max-w-md leading-relaxed">
                Masters of architectural exterior enhancement and bespoke restorations.
              </p>
            </div>
            
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-ce-yellow mb-8">Headquarters</h4>
              <ul className="space-y-4 font-light text-lg text-gray-400">
                <li>709 Division St</li>
                <li>Lake Charles, LA 70601</li>
              </ul>
              <div className="mt-8 flex space-x-6">
                <a href="#" className="text-white hover:text-ce-yellow transition-colors"><Facebook size={24} strokeWidth={1.5} /></a>
                <a href="#" className="text-white hover:text-ce-yellow transition-colors"><Instagram size={24} strokeWidth={1.5} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-ce-yellow mb-8">Direct Line</h4>
              <ul className="space-y-4 font-light text-lg">
                <li><a href="tel:3373844417" className="text-white hover:text-ce-yellow transition-colors text-2xl font-serif italic">(337) 384-4417</a></li>
                <li><a href="mailto:cehomeser@gmail.com" className="text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">cehomeser@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 text-gray-500 font-sans text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} C&E SEAMLESS GUTTERS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const QuoteForm = () => {
  return (
    <section id="quote-form" className="py-40 bg-ce-charcoal relative overflow-hidden bg-noise border-t border-white/5">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-ce-yellow mb-6">Initiate Dialogue</h4>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white mb-10 leading-[0.9] tracking-tighter">
              Commission<br /><span className="text-outline">Excellence.</span>
            </h2>
            <p className="text-gray-400 font-light text-2xl leading-relaxed max-w-xl">
              Provide the structural details of your vision. Our architectural consultants will review and respond within 24 hours.
            </p>
          </div>
          
          <div className="glass p-10 md:p-16">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" id="name" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-ce-yellow transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-4 text-[0.7rem] uppercase tracking-widest text-ce-yellow transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[0.7rem] peer-focus:text-ce-yellow cursor-text">Client Name</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-ce-yellow transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[0.7rem] uppercase tracking-widest text-ce-yellow transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[0.7rem] peer-focus:text-ce-yellow cursor-text">Electronic Mail</label>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-[0.7rem] uppercase tracking-widest text-ce-yellow mb-2">Scope of Work</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-ce-yellow transition-colors appearance-none cursor-pointer font-light text-lg">
                    <option className="bg-ce-charcoal">Structural Gutters & Drainage</option>
                    <option className="bg-ce-charcoal">Restoration & Modification</option>
                    <option className="bg-ce-charcoal">Fenestration (Windows)</option>
                    <option className="bg-ce-charcoal">Comprehensive Overhaul</option>
                  </select>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <textarea id="message" rows={1} className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-ce-yellow transition-colors placeholder-transparent resize-none min-h-[100px]" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-4 text-[0.7rem] uppercase tracking-widest text-ce-yellow transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[0.7rem] peer-focus:text-ce-yellow cursor-text">Project Specifications</label>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="group flex items-center space-x-4 bg-transparent border border-white/20 hover:border-ce-yellow px-10 py-5 text-[0.75rem] tracking-[0.2em] uppercase font-bold text-white hover:text-ce-black hover:bg-ce-yellow transition-all duration-500 w-full sm:w-auto">
                  <span>Submit Dossier</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
