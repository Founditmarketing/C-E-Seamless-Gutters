import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, image }: { title: string, subtitle: string, image: string }) => {
  return (
    <section className="relative h-[55vh] flex items-center overflow-hidden bg-ce-black">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-60 animate-ken-burns" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ce-black/30 via-ce-black/40 to-ce-black/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight text-glow"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl text-ce-yellow font-light tracking-wide"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export const About = () => (
  <div className="bg-mesh-light">
    <PageHero 
      title="Our Story" 
      subtitle="Your Trusted Neighbor in Seamless Gutters" 
      image="/handyman_11.png"
    />
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-serif font-bold mb-8 text-ce-black leading-tight">Craftsmanship You Can Rely On</h2>
          <div className="w-24 h-1 bg-ce-red mb-10"></div>
          <div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
            <p>
              At C&E Seamless Gutters, we believe that every home deserves the highest echelon of care and attention. Founded on the principles of integrity, unmatched quality, and deep community roots, we've evolved into a premier provider of exterior and interior home enhancements.
            </p>
            <p>
              Our team consists of master craftsmen who are not just experts in their trades, but also your neighbors. We understand the nuanced local climate and architectural styles, allowing us to engineer and deliver solutions that are unyieldingly functional and aesthetically breathtaking.
            </p>
            <p className="font-medium text-ce-black">
              Fully licensed, bonded, and insured, we grant you absolute peace of mind throughout the entire process—from the initial complimentary consultation to the final immaculate walkthrough.
            </p>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-ce-red transform translate-x-4 translate-y-4 rounded-[2.5rem]"></div>
          <img 
            src="/handyman_15.png" 
            alt="Team at work" 
            className="rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative z-10 w-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 glass p-10 rounded-[2rem] hidden sm:block z-20 shadow-2xl transition-transform duration-500 hover:-translate-y-2 cursor-default">
            <span className="block text-6xl font-serif font-bold text-ce-black mb-2">15+</span>
            <span className="text-sm font-bold text-ce-red uppercase tracking-widest block">Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Gutters = () => (
  <div className="bg-slate-50">
    <PageHero 
      title="Gutter Services" 
      subtitle="Protecting Your Home from the Top Down" 
      image="/gutterhouse02.jpeg"
    />
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-serif font-bold mb-6 text-ce-black leading-tight">Elite Gutter Solutions</h2>
        <div className="w-24 h-1 bg-ce-red mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Flawlessly functioning gutters are the vanguard of your home's defense, protecting your foundation, siding, and landscaping from catastrophic water damage. We provide superior systems designed to handle the heaviest downpours with elegant efficiency.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {[
          { 
            title: "Premium Installation", 
            desc: "Custom-extruded seamless gutters designed to match your home's architectural aesthetic and withstand severe weather.",
            image: "/gutterinstallwithhand.jpeg"
          },
          { 
            title: "Meticulous Cleaning", 
            desc: "Thorough removal of debris to ensure free-flowing water, preventing destructive clogs and overflows.",
            image: "/browngutterwithsquirrel.jpeg"
          },
          { 
            title: "Expert Repair", 
            desc: "Precision fixing of leaks, sags, and damaged sections to completely restore your system's structural integrity.",
            image: "/guttermachine01.jpeg"
          },
        ].map((item, i) => (
          <div key={i} className="premium-card bg-white h-[450px]">
             <img src={item.image} alt={item.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
             <div className="premium-card-overlay"></div>
             <div className="premium-card-content">
               <h3 className="text-3xl font-serif font-bold text-white mb-3 text-glow">{item.title}</h3>
               <p className="text-gray-200 leading-relaxed text-lg line-clamp-3">
                 {item.desc}
               </p>
               <Link to="/contact" className="premium-card-action">
                 <span>Request Service</span>
                 <ArrowRight size={20} className="ml-2" />
               </Link>
             </div>
          </div>
        ))}
      </div>
      
      <div className="bg-ce-black rounded-[2.5rem] p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-ce-red/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-2xl relative z-10 text-center lg:text-left">
          <h3 className="text-4xl font-serif font-bold mb-4 tracking-tight">Don't wait for the next storm.</h3>
          <p className="text-gray-300 text-xl font-light">Secure your investment today. Schedule a meticulously detailed inspection by our experts and ensure your sanctuary remains protected.</p>
        </div>
        <Link to="/contact" className="bg-ce-yellow text-ce-black px-12 py-5 rounded-full font-bold text-lg text-center hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(250,204,21,0.2)] transform hover:-translate-y-1 shrink-0 relative z-10">
          Get Free Inspection
        </Link>
      </div>
    </section>
  </div>
);

export const HomeImprovement = () => (
  <div className="bg-mesh-light">
    <PageHero 
      title="Home Improvement" 
      subtitle="Bringing Your Grand Vision to Life" 
      image="/AGS-Outdoor-Living-Space-1.jpg"
    />
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-ce-yellow transform -translate-x-4 translate-y-4 rounded-[2.5rem]"></div>
          <img 
            src="/AGS-Outdoor-Living-Space-1.jpg" 
            alt="Interior renovation" 
            className="rounded-[2.5rem] shadow-2xl relative z-10 w-full"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl font-serif font-bold mb-8 text-ce-black leading-tight">Masterful Renovations & Repairs</h2>
          <div className="w-24 h-1 bg-ce-red mb-10"></div>
          <div className="space-y-10">
            <div className="flex items-start space-x-6 group">
              <div className="bg-white shadow-lg p-4 rounded-2xl shrink-0 group-hover:bg-ce-yellow transition-colors duration-300">
                <CheckCircle2 size={28} className="text-ce-black" />
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-3 font-serif">Kitchen & Bath Transformations</h4>
                <p className="text-gray-600 text-lg font-light leading-relaxed">Modernize and elevate your most essential spaces with bespoke fixtures, luxury tiling, and custom cabinetry.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="bg-white shadow-lg p-4 rounded-2xl shrink-0 group-hover:bg-ce-yellow transition-colors duration-300">
                <CheckCircle2 size={28} className="text-ce-black" />
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-3 font-serif">Interior & Exterior Finishes</h4>
                <p className="text-gray-600 text-lg font-light leading-relaxed">Revitalize your home's atmosphere with premium coats of high-grade paint applied with obsessive precision.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="bg-white shadow-lg p-4 rounded-2xl shrink-0 group-hover:bg-ce-yellow transition-colors duration-300">
                <CheckCircle2 size={28} className="text-ce-black" />
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-3 font-serif">Structural & General Carpentry</h4>
                <p className="text-gray-600 text-lg font-light leading-relaxed">From custom architectural shelving and exquisite trim work to flawless structural restorations handled by master carpenters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Windows = () => (
  <div className="bg-slate-50">
    <PageHero 
      title="Window Installation" 
      subtitle="Exceptional Efficiency Meets Timeless Elegance" 
      image="/8_window_awning_concave_bronze.png"
    />
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-serif font-bold mb-6 text-ce-black leading-tight">Premium Window Architecture</h2>
        <div className="w-24 h-1 bg-ce-red mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
          Dramatically upgrade your home's thermal efficiency, security, and curb appeal with our top-tier window installation and replacement masterclass.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100">
          <h3 className="text-3xl font-serif font-bold mb-8 text-ce-red">The Upgrade Advantage</h3>
          <ul className="space-y-6">
            {[
              "Significantly lower energy bills with advanced thermal insulation",
              "Fortified home security through state-of-the-art locking mechanisms",
              "Acoustic damping to reduce outside noise for a serene interior",
              "Instant boost to property valuation and architectural curb appeal",
              "Effortless cleaning and virtually zero maintenance profiles",
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-ce-yellow" size={24} />
                </div>
                <span className="text-gray-700 text-lg font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-ce-black p-12 md:p-16 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ce-red/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
          <h3 className="text-3xl font-serif font-bold mb-10 text-ce-yellow relative z-10">Our Flawless Process</h3>
          <div className="space-y-8 relative z-10">
            {[
              { step: "01", title: "Bespoke Consultation", desc: "We collaborate with you to select the precise styles, glazing, and materials that elevate your home's unique character." },
              { step: "02", title: "Laser Precision Measurement", desc: "Our technicians compile exhaustive measurements to guarantee a millimeter-perfect, airtight envelope." },
              { step: "03", title: "Immaculate Installation", desc: "Expert removal and precise installation with immaculate cleanup and absolute minimal disruption to your daily routine." },
            ].map((item, i) => (
              <div key={i} className="flex space-x-6 items-start">
                <span className="text-5xl font-serif font-bold text-white/10 mt-[-5px]">{item.step}</span>
                <div>
                  <h4 className="font-bold text-2xl mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-lg font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Contact = () => (
  <div className="bg-mesh-light">
    <PageHero 
      title="Contact Us" 
      subtitle="We Demand Excellence For Your Home" 
      image="/IMG_7074-scaled.jpg"
    />
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[30vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass p-16 rounded-[2.5rem] inline-block shadow-2xl"
      >
        <h2 className="text-5xl font-serif font-bold mb-6 text-ce-black">Ready to elevate your property?</h2>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Utilize the Request Quote form below, and our dedicated project managers will be in touch securely and swiftly.
        </p>
        <a href="#quote-form" className="inline-block bg-ce-black hover:bg-gray-800 text-white px-10 py-4 rounded-full font-bold text-lg text-center transition-all shadow-xl transform hover:-translate-y-1">
          Scroll Down to Provide Details
        </a>
      </motion.div>
    </section>
  </div>
);
