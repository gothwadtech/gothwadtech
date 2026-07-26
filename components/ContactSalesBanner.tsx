import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ContactSalesBanner = () => (
  <section className="py-12 px-4 md:px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-10 md:p-16 rounded-[3rem] bg-brand-orange text-white relative overflow-hidden shadow-2xl shadow-brand-orange/20"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Have a unique project in mind?</h3>
            <p className="text-white/80 text-lg">Let's build the next big thing together. Our team of expert developers is ready to bring your vision to life.</p>
          </div>
          <Link to="/contact-sales" className="bg-white text-brand-orange px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform cursor-pointer whitespace-nowrap shadow-xl shadow-black/10">
            Contact Sales
          </Link>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  </section>
);

export default ContactSalesBanner;
