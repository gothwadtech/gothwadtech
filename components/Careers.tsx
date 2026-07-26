import { motion } from 'motion/react';
import { Send, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <section id="careers" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Join the Revolution.</h2>
            <p className="text-neutral-600 mb-10 text-xl leading-relaxed">
              We are not just building apps; we are building India's digital future. 
              If you are passionate about technology and want to make a real impact, we want you.
            </p>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-[4rem] bg-brand-orange text-white p-12 flex items-center justify-center relative z-10 shadow-2xl shadow-brand-orange/20"
            >
              <div className="text-center">
                <div className="text-5xl md:text-7xl font-display font-bold mb-6 leading-none">WE ARE<br/>HIRING</div>
                <div className="w-20 h-1 bg-white/30 mx-auto mb-6 rounded-full" />
                <p className="text-white/80 text-lg md:text-xl font-medium">Be part of the 1% building for the 100%.</p>
              </div>
            </motion.div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-brand-orange rounded-full opacity-20" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
