import { motion } from 'motion/react';
import { Smartphone, Layers, Code2, Globe, Layout, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../src/constants';

const Products = () => {
  const products = [
    { 
      icon: Smartphone, 
      name: "GxChatIndia", 
      type: "Messaging", 
      desc: "The ultimate Indian alternative to WhatsApp. Features end-to-end encryption, high-quality calls, and seamless media sharing.", 
      status: "Live",
      isPremium: true
    },
    { 
      icon: Layers, 
      name: "Gothwad Store", 
      type: "App Store", 
      desc: "India's own app store featuring normal apps, games, mod APKs for entertainment, and professional hacking tools.", 
      status: "Live",
      isPremium: true
    },
    { 
      icon: Code2, 
      name: "Gx Edu", 
      type: "EdTech", 
      desc: "A comprehensive learning platform like PW/Allen, designed to make Indian education smart, accessible, and digital-first.", 
      status: "Beta" 
    },
    { 
      image: ASSETS.SCHOOL_X_LOGO, 
      name: "School X", 
      type: "Digital Schooling", 
      desc: "A complete digital solution for schools to manage everything from attendance to exams at minimal or zero cost.", 
      status: "Live" 
    }
  ];

  return (
    <section id="products" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Digital Ecosystem</h2>
            <p className="text-neutral-600 max-w-xl">
              From community-driven free apps to high-end premium software, we build solutions that empower both individuals and enterprises.
            </p>
          </div>
          <Link to="/products" className="text-brand-orange font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
            View All Products <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center text-brand-orange overflow-hidden">
                  {p.image ? (
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  ) : p.icon ? (
                    <p.icon size={24} />
                  ) : (
                    <Layout size={24} />
                  )}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${
                    p.status === 'Live' ? 'bg-green-100 text-green-600' : 
                    p.status === 'Beta' ? 'bg-blue-100 text-blue-600' : 'bg-neutral-100 text-neutral-500'
                  }`}>
                    {p.status}
                  </span>
                  {p.isPremium && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-brand-orange/10 text-brand-orange">
                      Premium
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-4">{p.type}</div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
              <button className="text-sm font-bold flex items-center gap-2 text-neutral-900 hover:text-brand-orange transition-colors cursor-pointer">
                Learn More <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
