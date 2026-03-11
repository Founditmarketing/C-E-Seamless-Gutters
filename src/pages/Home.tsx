import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, image, description, link }: { title: string, image: string, description: string, link: string }) => {
  return (
    <div className="flip-card h-[400px] w-full">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front bg-white shadow-xl overflow-hidden border border-gray-100">
          <img src={image} alt={title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-left">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
            <div className="flex items-center text-ce-yellow font-medium">
              <span>Learn More</span>
              <ArrowRight size={18} className="ml-2" />
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div className="flip-card-back bg-ce-black p-8 flex flex-col justify-center items-center text-white shadow-2xl">
          <h3 className="text-2xl font-serif font-bold text-ce-yellow mb-4">{title}</h3>
          <p className="text-gray-300 text-center mb-8 leading-relaxed">
            {description}
          </p>
          <Link to={link} className="bg-ce-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(227,30,36,0.3)] hover:shadow-[0_0_25px_rgba(227,30,36,0.5)]">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/garbergutterafter02.png" 
            alt="Beautiful Home" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-ce-yellow text-ce-black px-4 py-1 rounded-full font-bold text-sm mb-6 tracking-wider uppercase">
              Trusted Home Experts
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Quality Seamless Gutters <br />
              <span className="text-ce-yellow italic">You Can Trust</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              From gutters to windows, we provide expert home improvement services with a personal touch. Licensed, bonded, and insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-ce-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg text-center transition-all shadow-xl transform hover:-translate-y-1">
                Request a Quote
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg text-center transition-all">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-ce-yellow relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-20 rounded-2xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8">
          <div className="flex items-center space-x-3">
            <CheckCircle className="text-ce-red" size={32} />
            <span className="font-bold text-ce-black text-lg">Licensed & Bonded</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="text-ce-red" size={32} />
            <span className="font-bold text-ce-black text-lg">Fully Insured</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="text-ce-red" size={32} />
            <span className="font-bold text-ce-black text-lg">Free Estimates</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="text-ce-red" size={32} />
            <span className="font-bold text-ce-black text-lg">Expert Workmanship</span>
          </div>
        </div>
      </section>

      {/* Service Trio */}
      <section className="py-24 bg-wood">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Core Services</h2>
            <div className="w-24 h-1 bg-ce-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We specialize in high-quality home maintenance and improvement services designed to protect and beautify your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Gutter Services" 
              image="/bridgetgutterafter01.png"
              description="Protect your foundation and landscaping with our professional gutter installation, cleaning, and repair services."
              link="/services/gutters"
            />
            <ServiceCard 
              title="Home Improvement" 
              image="/AGS-Outdoor-Living-Space-1.jpg"
              description="Transform your living space with our expert home improvement solutions, from minor repairs to major renovations."
              link="/services/home-improvement"
            />
            <ServiceCard 
              title="Window Installation" 
              image="/8_window_awning_concave_bronze.png"
              description="Enhance energy efficiency and curb appeal with our high-quality window installation and replacement services."
              link="/services/windows"
            />
          </div>
        </div>
      </section>

      {/* Word on the Street (Testimonials) */}
      <section className="py-24 bg-stone bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Word on the Street</h2>
            <div className="w-24 h-1 bg-ce-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our neighbors have to say about our work.
            </p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { name: "Sarah Johnson", text: "C&E Seamless Gutters did an amazing job with our gutters. They were professional, on time, and the quality is top-notch!", rating: 5 },
              { name: "Michael Chen", text: "I highly recommend them for any home improvement project. They transformed our kitchen and we couldn't be happier.", rating: 5 },
              { name: "David Wilson", text: "Great communication and fair pricing. The new windows look fantastic and have already helped with our energy bills.", rating: 5 },
              { name: "Emily Rodriguez", text: "The team was so respectful of our home. They cleaned up perfectly after the job was done. Truly a trusted neighbor!", rating: 5 },
              { name: "Robert Taylor", text: "Fast, efficient, and high quality. They fixed a gutter issue that three other companies couldn't figure out.", rating: 5 },
              { name: "Lisa Anderson", text: "Excellent service from start to finish. The quote process was easy and the work was completed ahead of schedule.", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="break-inside-avoid bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex text-ce-yellow mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-ce-red rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name[0]}
                  </div>
                  <span className="font-bold text-ce-black">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
