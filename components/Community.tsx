import { motion } from 'motion/react';

const Community = () => (
  <section id="community" className="py-24 px-4 md:px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto bg-brand-orange rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Join the <br /> 15,000+ Strong.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Our community is powered by developers who believe in the vision of an Atmanirbhar Bharat. 
            Led by 100+ industry experts, we are building the future together.
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold">15K+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Developers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Experts</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Projects</div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center lg:justify-end">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white text-brand-orange px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all cursor-pointer"
          >
            Join Gothwad Community
          </motion.button>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="aspect-square border border-white rounded-full" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Community;
