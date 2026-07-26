import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
          Atmanirbhar Bharat • 100% Indian Tech
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter">
          Building India's <br />
          <span className="text-gradient">Tech Independence.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-xl text-neutral-600 mb-10 leading-relaxed">
          Gothwad Technologies is on a mission to build a self-reliant digital India. 
          We provide high-quality community tools and professional enterprise solutions for businesses worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/products" className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
            Our Products <ChevronRight size={20} />
          </Link>
          <Link to="/join-contribution" className="w-full sm:w-auto bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-neutral-50 transition-all flex items-center justify-center cursor-pointer">
            Join Our Contribution
          </Link>
        </div>
      </motion.div>
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-brand-orange/10 blur-[80px] md:blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 translate-x-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-green/5 blur-[80px] md:blur-[120px] rounded-full" />
  </section>
);

export default Hero;
