import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, image, sectionNumber }: { title: string; subtitle: string; image: string; sectionNumber: string }) => {
  return (
    <section className="relative h-[80vh] flex items-end overflow-hidden bg-ce-black pb-24 pt-32">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-40 filter grayscale animate-ken-burns" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ce-black via-ce-black/80 to-ce-charcoal/50"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mixing-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-end gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-ce-yellow">Ref. {sectionNumber}</span>
            <div className="h-px w-24 bg-white/20"></div>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif font-bold text-white leading-[0.85] tracking-tighter mix-blend-screen">
            {title.toUpperCase()}
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xs text-right hidden md:block border-r border-ce-yellow pr-6 py-2"
        >
          <p className="text-xl font-light text-gray-300 leading-relaxed uppercase tracking-widest text-[0.65rem]">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const About = () => (
  <div className="bg-ce-black text-white selection:bg-ce-yellow/30 selection:text-ce-black">
    <PageHero 
      sectionNumber="001"
      title="The Firm." 
      subtitle="Craftsmanship forged in Lake Charles, defining modern exteriors." 
      image="/handyman_11.png"
    />
    
    <section className="py-40 bg-ce-charcoal relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-white tracking-tighter sticky top-40 text-outline mix-blend-screen">
              ENGINEERING<br/>
              <span className="text-white">AESTHETICS.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-7 space-y-20 font-light text-2xl md:text-3xl leading-relaxed text-gray-400">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              C&E Seamless Gutters operates at the intersection of structural engineering and architectural beauty. We believe the exterior envelope of a building is its paramount defense and its absolute signature.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="py-16 border-y border-white/10 my-16"
            >
              <p className="text-ce-yellow font-serif text-5xl md:text-6xl italic leading-[1.2]">
                "Our master craftsmen don't just work on houses; they curate sanctuaries."
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Every material selected, every profile extruded, and every fastener driven is executed with an obsessive attention to detail that standard contractors simply cannot replicate. 
            </motion.p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="py-0 relative h-screen w-full overflow-hidden">
      <img 
        src="/handyman_15.png" 
        alt="Artisan at work" 
        className="absolute inset-0 w-full h-full object-cover filter grayscale-[50%] opacity-80"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-ce-black/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[20vw] font-serif font-bold text-white/90 mix-blend-overlay tracking-tighter">15+ YEARS</h2>
      </div>
    </section>
  </div>
);

export const Gutters = () => (
  <div className="bg-ce-black text-white selection:bg-ce-yellow/30 selection:text-ce-black">
    <PageHero 
      sectionNumber="002"
      title="Gutters." 
      subtitle="Structural Water Management Systems" 
      image="/gutterhouse02.jpeg"
    />
    
    <section className="py-40 bg-ce-charcoal relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-32">
          <h2 className="text-7xl md:text-[8rem] font-serif leading-[0.8] tracking-tighter text-white/5 whitespace-nowrap overflow-hidden">
            AQUATIC CONTROL ARCHITECTURE.
          </h2>
          <div className="max-w-3xl mt-[-4rem] md:mt-[-6rem] relative z-10 pl-6 md:pl-16">
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">Defending the foundation.</h3>
            <p className="text-2xl text-gray-400 font-light leading-relaxed">
              Inferior systems fail when tested. We design custom-extruded, seamless defenses that manage peak hydraulic loads while maintaining an impeccable architectural line.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Installation", 
              desc: "Milled on-site to exact structural specifications. Seamless runs eliminate weak points, paired with hidden heavy-duty hangers for an unblemished profile.",
              image: "/gutterinstallwithhand.jpeg"
            },
            { 
              title: "Restoration", 
              desc: "Comprehensive diagnostic and surgical repair protocols. We rectify pitch issues and seal catastrophic failures with industrial-grade precision.",
              image: "/guttermachine01.jpeg"
            },
            { 
              title: "Maintenance", 
              desc: "Preventative fluid dynamics management. We ensure zero obstruction to critical flow paths, extending the lifespan of the entire system.",
              image: "/browngutterwithsquirrel.jpeg"
            },
          ].map((item, i) => (
            <div key={i} className="editorial-card h-[600px] flex items-end border-white/10 group">
               <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover filter grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
               <div className="relative z-10 p-10 w-full">
                 <h3 className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-ce-yellow mb-4 border-l border-ce-yellow pl-4">Service {i + 1}</h3>
                 <h4 className="text-5xl font-serif font-bold text-white mb-6 text-outline group-hover:text-white transition-all">{item.title}</h4>
                 <p className="text-gray-400 font-light text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                   {item.desc}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const HomeImprovement = () => (
  <div className="bg-ce-black text-white selection:bg-ce-yellow/30 selection:text-ce-black">
    <PageHero 
      sectionNumber="003"
      title="Interiors." 
      subtitle="Transformative bespoke restorations." 
      image="/AGS-Outdoor-Living-Space-1.jpg"
    />
    
    <section className="py-40 bg-ce-charcoal relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 border border-white/10 transform -rotate-3"></div>
            <img 
              src="/AGS-Outdoor-Living-Space-1.jpg" 
              alt="Interior Refinement" 
              className="relative z-10 w-full shadow-2xl filter contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-16">
            <h2 className="text-6xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-white">
              BEYOND THE<br />
              <span className="text-ce-yellow text-outline">SURFACE.</span>
            </h2>
            <div className="h-px w-24 bg-white/20"></div>
            <div className="space-y-12">
              {[
                { title: "Spatial Reimagining", desc: "We deconstruct and elevate core living areas, integrating custom millwork and uncompromising finishes." },
                { title: "Surface Refinement", desc: "Expert application of premium coatings, textures, and luxury cladding designed to capture and play with natural light." },
                { title: "Structural Carpentry", desc: "Architectural framing and finish carpentry executed by artisans demanding millimeter-perfect tolerances." },
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <h4 className="font-serif text-3xl mb-4 group-hover:text-ce-yellow transition-colors">{item.title}</h4>
                  <p className="text-gray-400 font-light text-xl leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Windows = () => (
  <div className="bg-ce-black text-white selection:bg-ce-yellow/30 selection:text-ce-black">
    <PageHero 
      sectionNumber="004"
      title="Fenestration." 
      subtitle="High-performance architectural glazing." 
      image="/8_window_awning_concave_bronze.png"
    />
    
    <section className="py-40 bg-ce-charcoal relative border-y border-white/5">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-16 tracking-tighter max-w-5xl mx-auto leading-tight">
          FRAMING THE WORLD WITH <span className="text-ce-yellow font-italic">UNCOMPROMISING THERMAL EFFICIENCY.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 text-left">
          {[
            { metric: "U-Factor", val: "Minimal", desc: "Maximum thermal resistance." },
            { metric: "Acoustics", val: "Silent", desc: "Premium noise dampening." },
            { metric: "Security", val: "Multi-Point", desc: "Vault-like locking mechanisms." },
            { metric: "Aesthetic", val: "Bespoke", desc: "Custom architectural profiles." },
          ].map((item, i) => (
            <div key={i} className="glass p-10 border-white/5 hover:border-ce-yellow transition-colors duration-500">
              <h4 className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-gray-500 mb-8">{item.metric}</h4>
              <p className="text-4xl font-serif text-white mb-4">{item.val}</p>
              <p className="text-gray-400 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const Contact = () => (
  <div className="bg-ce-black text-white selection:bg-ce-yellow/30 selection:text-ce-black">
    <PageHero 
      sectionNumber="005"
      title="Commission Us." 
      subtitle="Engage our architectural firm." 
      image="/IMG_7074-scaled.jpg"
    />
    
    <section className="py-40 bg-ce-charcoal relative flex items-center justify-center min-h-[50vh]">
      <div className="text-center group">
        <a href="#quote-form" className="inline-block relative">
          <span className="text-[10vw] font-serif font-bold tracking-tighter leading-none text-outline group-hover:-webkit-text-fill-color-transparent transition-all duration-700 block">
            INITIATE
          </span>
          <span className="text-[10vw] font-serif font-bold tracking-tighter leading-none text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
             DIALOGUE.
          </span>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-12">
            <div className="w-20 h-20 rounded-full border border-ce-yellow flex items-center justify-center bg-ce-black text-ce-yellow shadow-2xl">
              <ArrowRight size={32} />
            </div>
          </div>
        </a>
        <p className="mt-12 text-gray-400 font-light text-xl tracking-widest uppercase">Select to open dossier form below</p>
      </div>
    </section>
  </div>
);
