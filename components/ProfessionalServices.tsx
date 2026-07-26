import { motion } from 'motion/react';
import { Globe, Smartphone, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalServices = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      desc: "High-performance, scalable web apps built with React, Next.js, and Node.js. From E-commerce to SaaS platforms.",
      features: ["Responsive Design", "SEO Optimized", "Secure Backend"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native and Cross-platform mobile apps for Android & iOS. We turn your ideas into pocket-sized reality.",
      features: ["User-Centric UI/UX", "High Performance", "App Store Ready"]
    },
    {
      icon: Code2,
      title: "Enterprise Software",
      desc: "Robust internal tools, ERPs, and CRMs tailored to your business workflows. Automate and grow efficiently.",
      features: ["Workflow Automation", "Data Analytics", "Cloud Integration"]
    }
  ];

  return (
    <section id="professional-services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">B2B & Enterprise</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Professional Tech <br />
              <span className="text-neutral-400">For Your Business.</span>
            </h2>
            <p className="text-neutral-600 text-lg">
              Beyond our community tools, we provide premium software development services for startups and established enterprises globally.
            </p>
          </div>
          <div className="hidden md:block">
            <Rocket className="text-neutral-100 w-32 h-32 -rotate-12" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl hover:shadow-neutral-200/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <s.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-neutral-500 mb-8 leading-relaxed">{s.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {s.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 size={16} className="text-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/contact-sales" className="w-full py-4 rounded-2xl bg-neutral-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-brand-orange transition-colors cursor-pointer">
                Get a Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;
