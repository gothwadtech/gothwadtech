import { motion } from 'motion/react';

const Roadmap = () => {
  const milestones = [
    { year: "2023", title: "The Genesis", desc: "Gothwad Technologies was founded with a vision of Atmanirbhar Bharat." },
    { year: "2024", title: "Community Growth", desc: "Reached 15,000+ developers and launched GxChatIndia Beta." },
    { year: "2025", title: "Digital Infrastructure", desc: "School X and Gothwad Store reached 500k+ active users." },
    { year: "2026", title: "The Future", desc: "Launching Gx Edu and expanding our AI ecosystem for Indian languages." }
  ];

  return (
    <section id="roadmap" className="py-24 px-6 bg-white text-neutral-900 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
            Our Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">Our Roadmap</h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-lg">The journey of building a self-reliant digital ecosystem.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {milestones.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 border-4 border-white relative z-20 shadow-lg">
                  {m.year}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-orange">{m.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
