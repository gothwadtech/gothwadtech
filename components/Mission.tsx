import { motion } from 'motion/react';
import { Zap, ShieldCheck, Globe, Cpu, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mission = () => (
  <section id="mission" className="py-16 md:py-24 px-4 md:px-6 bg-white text-neutral-900 rounded-[2rem] md:rounded-[3rem] mx-2 md:mx-4 relative overflow-hidden border border-neutral-100 shadow-sm">
    {/* Background Pattern - Subtle */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold mb-4 tracking-wider uppercase">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tight">
            The Goal: <span className="text-brand-orange">100% Pure Indian</span> Digital Ecosystem.
          </h2>
          <p className="text-lg md:text-2xl text-neutral-600 mb-12 leading-relaxed">
            We aim to create a high-performance, secure, and sovereign Indian digital ecosystem. 
            While we provide core community tools at minimal cost, we also offer world-class professional 
            software development and enterprise solutions to drive business innovation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 group text-left">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6">
                <Zap className="text-brand-orange" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Fast & Secure</h3>
              <p className="text-neutral-500">Optimized for Indian infrastructure and user needs.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 group text-left">
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6">
                <ShieldCheck className="text-brand-green" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Data Privacy</h3>
              <p className="text-neutral-500">Your data stays in India, protected by Indian laws.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Mission;
