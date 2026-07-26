import { motion } from 'motion/react';
import { Cpu, Zap, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Innovation = () => {
  return (
    <section id="innovation" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              Innovation Lab
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Pushing the Boundaries of <span className="text-brand-orange">Indian Tech.</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              At Gothwad Technologies, we don't just follow trends—we set them. Our Innovation Lab is dedicated to researching AI, Blockchain, and Next-Gen Web technologies tailored for the Indian landscape.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <Cpu className="text-neutral-900" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">AI for Bharat</h4>
                  <p className="text-sm text-neutral-500">Developing LLMs that understand and respond in regional Indian languages.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <Zap className="text-neutral-900" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">High-Speed Infrastructure</h4>
                  <p className="text-sm text-neutral-500">Optimizing data delivery for low-bandwidth areas across the country.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href="https://arena.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-neutral-900 text-white font-bold hover:bg-brand-orange transition-all shadow-xl shadow-neutral-200 gap-2"
              >
                Visit more about arena.ai <ExternalLink size={18} />
              </a>
              <Link 
                to="/mission" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-neutral-200 text-neutral-600 font-bold hover:bg-neutral-50 transition-all"
              >
                Learn About Our Mission
              </Link>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-[4rem] bg-neutral-50 border border-neutral-100 flex items-center justify-center relative z-10 shadow-inner"
            >
              <div className="relative">
                <Sparkles className="text-brand-orange w-32 h-32 md:w-48 md:h-48 animate-pulse" />
                <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full -z-10" />
              </div>
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
