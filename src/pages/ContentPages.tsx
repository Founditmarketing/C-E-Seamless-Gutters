import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, image }: { title: string, subtitle: string, image: string }) => (
  <section className="relative h-[40vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-serif font-bold text-white mb-4"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-ce-yellow font-medium"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export const About = () => (
  <div className="bg-siding">
    <PageHero 
      title="About Us" 
      subtitle="Your Trusted Neighbor in Seamless Gutters" 
      image="/handyman_11.png"
    />
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6">Our Story & Commitment</h2>
          <div className="w-20 h-1 bg-ce-red mb-8"></div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              At C&E Seamless Gutters, we believe that every home deserves the highest level of care and attention. Founded on the principles of integrity, quality, and community, we've grown into a leading provider of home maintenance and improvement services.
            </p>
            <p>
              Our team consists of skilled professionals who are not just experts in their trades, but also your neighbors. We understand the local climate and architectural styles, allowing us to provide solutions that are both functional and beautiful.
            </p>
            <p>
              Whether it's a simple gutter cleaning or a complete window replacement, we approach every job with the same dedication to excellence. We are fully licensed, bonded, and insured, giving you peace of mind throughout the entire process.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/handyman_15.png" 
            alt="Team at work" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-ce-yellow p-8 rounded-2xl shadow-xl hidden sm:block">
            <span className="block text-4xl font-bold text-ce-black">15+</span>
            <span className="text-sm font-bold uppercase tracking-wider">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Gutters = () => (
  <div className="bg-brick">
    <PageHero 
      title="Gutter Services" 
      subtitle="Protecting Your Home from the Top Down" 
      image="/gutterhouse02.jpeg"
    />
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-6">Comprehensive Gutter Solutions</h2>
        <p className="text-xl text-gray-600">
          Properly functioning gutters are essential for protecting your home's foundation, siding, and landscaping from water damage.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { 
            title: "Installation", 
            desc: "Custom-fit seamless gutters designed to match your home's aesthetic and handle heavy rainfall.",
            image: "/gutterinstallwithhand.jpeg"
          },
          { 
            title: "Cleaning", 
            desc: "Thorough removal of debris to ensure free-flowing water and prevent clogs and overflows.",
            image: "/browngutterwithsquirrel.jpeg"
          },
          { 
            title: "Repair", 
            desc: "Expert fixing of leaks, sags, and damaged sections to restore your system's integrity.",
            image: "/guttermachine01.jpeg"
          },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-all overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-ce-black rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h3 className="text-3xl font-serif font-bold mb-4">Don't wait for the next storm!</h3>
          <p className="text-gray-400 text-lg">Schedule a free inspection today and ensure your home is protected.</p>
        </div>
        <Link to="/contact" className="bg-ce-yellow text-ce-black px-10 py-4 rounded-full font-bold text-lg text-center hover:bg-yellow-500 transition-all shrink-0 inline-block">
          Get Free Inspection
        </Link>
      </div>
    </section>
  </div>
);

export const HomeImprovement = () => (
  <div className="bg-wood">
    <PageHero 
      title="Home Improvement" 
      subtitle="Bringing Your Vision to Life" 
      image="/AGS-Outdoor-Living-Space-1.jpg"
    />
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img 
            src="/AGS-Outdoor-Living-Space-1.jpg" 
            alt="Interior renovation" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-serif font-bold mb-6">Expert Renovations & Repairs</h2>
          <div className="w-20 h-1 bg-ce-red mb-8"></div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-ce-yellow p-2 rounded-lg shrink-0"><CheckCircle2 size={20} /></div>
              <div>
                <h4 className="font-bold text-xl mb-2">Kitchen & Bath Updates</h4>
                <p className="text-gray-600">Modernize your most used spaces with new fixtures, tiling, and cabinetry.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-ce-yellow p-2 rounded-lg shrink-0"><CheckCircle2 size={20} /></div>
              <div>
                <h4 className="font-bold text-xl mb-2">Interior & Exterior Painting</h4>
                <p className="text-gray-600">Fresh coats of high-quality paint to revitalize your home's look and feel.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-ce-yellow p-2 rounded-lg shrink-0"><CheckCircle2 size={20} /></div>
              <div>
                <h4 className="font-bold text-xl mb-2">General Carpentry</h4>
                <p className="text-gray-600">Custom shelving, trim work, and structural repairs handled with precision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Windows = () => (
  <div className="bg-stone">
    <PageHero 
      title="Window Installation" 
      subtitle="Efficiency Meets Elegance" 
      image="/8_window_awning_concave_bronze.png"
    />
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-serif font-bold mb-6">Premium Window Solutions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Upgrade your home's energy efficiency and aesthetic appeal with our professional window installation and replacement services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-serif font-bold mb-6 text-ce-red">Why Upgrade Your Windows?</h3>
          <ul className="space-y-4">
            {[
              "Lower energy bills with better insulation",
              "Improved home security and safety",
              "Reduced outside noise for a quieter home",
              "Increased property value and curb appeal",
              "Easier cleaning and maintenance",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckCircle2 className="text-ce-yellow" size={20} />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-ce-black p-12 rounded-3xl shadow-xl text-white">
          <h3 className="text-2xl font-serif font-bold mb-6 text-ce-yellow">Our Installation Process</h3>
          <div className="space-y-6">
            {[
              { step: "01", title: "Consultation", desc: "We help you choose the right styles and materials for your home." },
              { step: "02", title: "Measurement", desc: "Precision measurements ensure a perfect, airtight fit." },
              { step: "03", title: "Installation", desc: "Expert removal and installation with minimal disruption." },
            ].map((item, i) => (
              <div key={i} className="flex space-x-4">
                <span className="text-3xl font-serif font-bold text-white/20">{item.step}</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
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
  <div className="bg-brick">
    <PageHero 
      title="Contact Us" 
      subtitle="We're Here to Help" 
      image="/IMG_7074-scaled.jpg"
    />
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-serif font-bold mb-6">Ready to get started?</h2>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          Fill out the form below and one of our experts will reach out to you.
        </p>
      </motion.div>
    </section>
  </div>
);
