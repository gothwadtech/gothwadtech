import { motion } from 'motion/react';
import { Globe, Smartphone, Cpu, Gamepad2, Code2, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Globe, title: "Web Architecture", desc: "Enterprise-grade web platforms built for scale, security, and global performance." },
    { icon: Smartphone, title: "Mobile Ecosystems", desc: "Premium iOS and Android applications with seamless user experiences." },
    { icon: Cpu, title: "AI & Automation", desc: "Custom AI models and workflow automation tailored for modern business needs." },
    { icon: Gamepad2, title: "Interactive Media", desc: "High-end game development and immersive digital experiences for brands." },
    { icon: Code2, title: "Custom Software", desc: "Bespoke software solutions designed to solve complex business challenges." },
    { icon: ShieldCheck, title: "Digital Security", desc: "Advanced cybersecurity protocols to protect your enterprise assets." }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Expertise</h2>
          <p className="text-neutral-600 max-w-xl">We cover the entire spectrum of software development to build a self-reliant tech future.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6">
                <s.icon className="text-brand-orange" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
