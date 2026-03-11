import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, image, description, link }: { title: string, image: string, description: string, link: string }) => {
  const isContain = image.includes("8.png");
  return (
    <Link to={link} className="premium-card block h-[450px] w-full bg-white">
      <img 
        src={image} 
        alt={title} 
        className={`h-full w-full ${isContain ? 'object-contain p-8 mix-blend-multiply' : 'object-cover'}`} 
        referrerPolicy="no-referrer" 
      />
      <div className="premium-card-overlay"></div>
      <div className="premium-card-content">
        <h3 className="text-3xl font-serif font-bold text-white mb-3 text-glow">{title}</h3>
        <p className="text-gray-200 leading-relaxed text-lg line-clamp-3">
          {description}
        </p>
        <div className="premium-card-action">
          <span>Explore Service</span>
          <ArrowRight size={20} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

export const Home = () => {
  return (
    <div className="overflow-hidden bg-ce-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-ce-black">
          <img 
            src="/garbergutterafter02.png" 
            alt="Beautiful Home" 
            className="w-full h-full object-cover opacity-60 animate-ken-burns"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ce-black via-ce-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block glass text-white px-6 py-2 rounded-full font-bold text-sm mb-8 tracking-[0.2em] uppercase">
              Premium Home Services
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
              Elevating Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ce-yellow to-yellow-200 italic pr-4">Home's Potential</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl">
              World-class gutter and window installations crafted with precision, backed by our lifetime commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pb-24 md:pb-0">
              <Link to="/contact" className="bg-ce-red hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all shadow-[0_0_30px_rgba(200,16,46,0.3)] transform hover:-translate-y-1">
                Request a Quote
              </Link>
              <Link to="/about" className="glass hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all">
                Discover Our Craft
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative z-20 mx-4 sm:mx-8 lg:mx-auto max-w-7xl" style={{ marginTop: '-120px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4">
          {[
            { title: "Licensed & Bonded", icon: CheckCircle },
            { title: "Fully Insured", icon: CheckCircle },
            { title: "Complimentary Consults", icon: CheckCircle },
            { title: "Expert Craftsmanship", icon: CheckCircle }
          ].map((signal, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              key={i} 
              className="glass p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-500"
            >
              <signal.icon className="text-ce-yellow mb-5" size={44} strokeWidth={1.5} />
              <span className="font-bold text-white text-lg tracking-wide">{signal.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Trio */}
      <section className="py-32 bg-slate-50 relative mt-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-ce-black tracking-tight">Bespoke Services</h2>
            <div className="w-24 h-1 bg-ce-red mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Elevate your property with our premium selection of tailored exterior and interior improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
      <section className="py-32 bg-ce-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-light opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">Client Experiences</h2>
            <div className="w-24 h-1 bg-ce-yellow mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Read what our discerning clients have to say about our commitment to unparalleled quality.
            </p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { name: "Sarah Johnson", text: "C&E Seamless Gutters delivered a masterclass in professionalism. The quality of the installation is immediately evident from the curb.", rating: 5 },
              { name: "Michael Chen", text: "They transformed our exterior completely. The attention to detail and premium materials used exceeded all our expectations.", rating: 5 },
              { name: "David Wilson", text: "The new architectural windows they installed are stunning. The entire process was seamless from consultation to cleanup.", rating: 5 },
              { name: "Emily Rodriguez", text: "True artisans of their craft. The custom gutter profiles they designed matched our historic home perfectly.", rating: 5 },
              { name: "Robert Taylor", text: "An absolute pleasure to work with. They approach home improvement with the precision of fine woodworking.", rating: 5 },
              { name: "Lisa Anderson", text: "The definitive choice for luxury home exteriors in the area. We wouldn't trust our property to anyone else.", rating: 5 },
            ].map((testimonial, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.15, duration: 0.7 }}
                viewport={{ once: true, margin: "-50px" }}
                key={i} 
                className="break-inside-avoid glass-dark p-10 rounded-[2rem] relative overflow-hidden group shadow-2xl shadow-black/50"
              >
                <div className="absolute -top-6 -left-4 text-9xl text-white/5 font-serif leading-none rotate-12 group-hover:text-ce-yellow/10 transition-colors duration-700">"</div>
                <div className="flex text-ce-yellow mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-ce-red to-red-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                    {testimonial.name[0]}
                  </div>
                  <span className="font-bold text-white tracking-wide">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
