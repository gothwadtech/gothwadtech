import { Globe2, Heart, Lock, Users } from 'lucide-react';
import { motion } from 'motion/react';

const CoreValues = () => {
  const values = [
    { 
      icon: Globe2, 
      title: "Digital Sovereignty", 
      desc: "We ensure India's data stays within its borders, protected by our own laws and infrastructure.",
      color: "bg-blue-50 text-blue-600"
    },
    { 
      icon: Heart, 
      title: "Radical Accessibility", 
      desc: "Our core educational and communication tools are provided at zero cost to empower every citizen.",
      color: "bg-red-50 text-red-600"
    },
    { 
      icon: Lock, 
      title: "Advanced Security", 
      desc: "Military-grade encryption and open-source transparency ensure your digital life is truly private.",
      color: "bg-emerald-50 text-emerald-600"
    },
    { 
      icon: Users, 
      title: "Community Driven", 
      desc: "Built by Indians, for Indians. Our roadmap is shaped by a community of 15,000+ developers.",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Core Pillars</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">The values that drive our mission to build a self-reliant digital India.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-brand-orange/20 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${v.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <v.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
