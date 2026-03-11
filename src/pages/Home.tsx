import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-ce-black text-white selection:bg-ce-yellow/30 selection:text-ce-black">
      {/* 1. The Cinematic Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center pt-24">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/garbergutterafter02.png" 
            alt="Premium Home Exterior" 
            className="w-full h-full object-cover opacity-60 filter grayscale-[30%] animate-ken-burns"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ce-black via-ce-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ce-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-noise opacity-50 mixing-blend-overlay"></div>
        </div>

        {/* Editorial Front Layer */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center h-full pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-6 mb-12">
              <div className="h-px w-16 bg-ce-yellow"></div>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-ce-yellow">Est. 2009 &bull; Lake Charles</span>
            </div>
            
            <h1 className="text-[14vw] md:text-[8rem] lg:text-[11rem] leading-[0.8] font-serif font-bold tracking-tighter mix-blend-screen relative z-20">
              <span className="block text-white">REDEFINE</span>
              <span className="block text-outline text-ce-yellow mt-4">EXTERIORS.</span>
            </h1>
          </motion.div>

          {/* Floating Detail Box */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:absolute right-16 bottom-32 max-w-sm mt-16 md:mt-0"
          >
            <p className="font-light text-xl md:text-2xl leading-relaxed text-gray-300 mb-8 border-l border-white/20 pl-6">
              World-class gutter architecture and structural home enhancements curated for the discerning homeowner.
            </p>
            <div className="flex items-center gap-6 pl-6">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-white">Explore the portfolio</span>
              <motion.div 
                animate={{ x: [0, 8, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full border border-ce-yellow flex items-center justify-center text-ce-yellow"
              >
                <ArrowRight size={18} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Philosophy (Pinned Depth Section) */}
      <section className="relative py-40 z-20 bg-ce-black bg-noise border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-40">
              <h4 className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-gray-500 mb-6">Our Philosophy</h4>
              <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-white">
                PRECISION<br/><span className="italic text-gray-500">above all.</span>
              </h2>
            </div>
            
            <div className="lg:col-span-7 lg:col-start-6 space-y-16">
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl md:text-5xl font-light leading-tight text-gray-300"
              >
                We don't merely install; we <strong className="text-white font-serif italic">architect solutions</strong>. Every home presents a unique structural canvas requiring bespoke craftsmanship and uncompromising materials.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                <div>
                  <h3 className="text-ce-yellow font-serif text-3xl mb-4">01</h3>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-white text-[0.8rem]">Structural Integrity</h4>
                  <p className="text-gray-400 font-light leading-relaxed">Our installations are engineered to withstand the most severe environmental stresses, preserving your sanctuary globally.</p>
                </div>
                <div>
                  <h3 className="text-ce-yellow font-serif text-3xl mb-4">02</h3>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-white text-[0.8rem]">Aesthetic Masterclass</h4>
                  <p className="text-gray-400 font-light leading-relaxed">Utility should never compromise design. Our profiles are milled to complement and elevate your home's unique architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Bespoke Services (Asymmetrical Masonry Grid) */}
      <section className="py-40 bg-ce-charcoal relative">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <h4 className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-ce-yellow mb-6">Disciplines</h4>
              <h2 className="text-6xl md:text-8xl font-serif text-white leading-none tracking-tighter">THE CRAFT.</h2>
            </div>
            <Link to="/contact" className="group hidden md:flex items-center space-x-4 border-b border-ce-yellow pb-2 mt-8 md:mt-0">
              <span className="text-[0.75rem] uppercase tracking-[0.2em] font-bold text-ce-yellow group-hover:text-white transition-colors">Commission a Project</span>
              <ArrowUpRight size={18} className="text-ce-yellow group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Massive Lead Item */}
            <Link to="/services/gutters" className="editorial-card md:col-span-8 h-[600px] md:h-[800px] flex items-end">
              <img src="/bridgetgutterafter01.png" alt="Gutter Architecture" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="editorial-card-overlay"></div>
              <div className="relative z-10 p-10 md:p-16 w-full">
                <h3 className="text-[0.7rem] uppercase tracking-[0.3em] font-bold text-ce-yellow mb-4 border-l border-ce-yellow pl-4">Primary Discipline</h3>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Gutter Architecture</h2>
                <div className="flex items-center justify-between border-t border-white/20 pt-8 mt-12 group-hover:border-white transition-colors">
                  <span className="font-light text-xl text-gray-300 group-hover:text-white transition-colors">Precision water management systems</span>
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-ce-yellow group-hover:text-ce-black transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Stacked Narrow Items */}
            <div className="md:col-span-4 flex flex-col gap-8 md:gap-16">
              <Link to="/services/home-improvement" className="editorial-card h-[400px] flex items-end">
                <img src="/AGS-Outdoor-Living-Space-1.jpg" alt="Restoration" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="editorial-card-overlay"></div>
                <div className="relative z-10 p-8 w-full">
                  <h2 className="text-4xl font-serif text-white mb-4">Interior Restoration</h2>
                  <div className="flex items-center justify-between border-t border-white/20 pt-6 mt-8">
                    <span className="font-light text-gray-300">Bespoke home refinement</span>
                    <ArrowUpRight size={20} className="text-ce-yellow" />
                  </div>
                </div>
              </Link>
              
              <Link to="/services/windows" className="editorial-card h-[400px] flex items-end">
                <img src="/8_window_awning_concave_bronze.png" alt="Fenestration" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="editorial-card-overlay"></div>
                <div className="relative z-10 p-8 w-full">
                  <h2 className="text-4xl font-serif text-white mb-4">Fenestration</h2>
                  <div className="flex items-center justify-between border-t border-white/20 pt-6 mt-8">
                    <span className="font-light text-gray-300">High-efficiency windows</span>
                    <ArrowUpRight size={20} className="text-ce-yellow" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Statement (Massive Typographic Marquee/Quote) */}
      <section className="py-40 bg-ce-black text-white overflow-hidden border-t border-b border-white/5">
        <div className="max-w-[120rem] mx-auto">
          <motion.div 
            initial={{ x: "10%" }}
            whileInView={{ x: "-10%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="whitespace-nowrap flex items-center"
          >
            <h2 className="text-[15vw] font-serif font-bold tracking-tighter leading-none text-outline inline-block mr-12 hover:-webkit-text-fill-color-white transition-all duration-1000">
              UNCOMPROMISING QUALITY.
            </h2>
            <h2 className="text-[15vw] font-serif font-bold tracking-tighter leading-none text-white inline-block">
              ENDURING DESIGN.
            </h2>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
