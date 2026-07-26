import { motion } from 'motion/react';
import { Lightbulb, Code, ShieldCheck, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      icon: <Lightbulb size={24} />, 
      title: "Ideation", 
      desc: "We identify real-world problems faced by Indian users and conceptualize digital solutions." 
    },
    { 
      icon: <Code size={24} />, 
      title: "Development", 
      desc: "Our engineers build robust, scalable architectures using the latest tech stack." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "Security", 
      desc: "Every product undergoes rigorous security audits to ensure data privacy for our users." 
    },
    { 
      icon: <Rocket size={24} />, 
      title: "Deployment", 
      desc: "We launch products that are optimized for Indian network conditions and devices." 
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Process</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">How Gothwad Technologies turns ideas into impactful digital products.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-neutral-100 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
