import { motion } from 'motion/react';
import { Heart, Users, Flag } from 'lucide-react';

const Impact = () => {
  const stats = [
    { icon: <Users size={24} />, label: "Lives Touched", value: "1M+" },
    { icon: <Heart size={24} />, label: "Community Support", value: "100%" },
    { icon: <Flag size={24} />, label: "National Reach", value: "28 States" }
  ];

  return (
    <section id="impact" className="py-24 px-6 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl bg-neutral-50 border border-neutral-100 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4 text-brand-orange">
                    {s.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1">{s.value}</div>
                  <div className="text-neutral-500 text-sm font-medium uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              Our Impact
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Serving the <span className="text-brand-orange">Nation.</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Gothwad Technologies is more than a company; it's a movement. We measure our success by the positive impact we create in the lives of everyday Indians. From education to digital literacy, we are committed to building a stronger Bharat.
            </p>
            <button className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-brand-orange/20 transition-all cursor-pointer">
              Learn About Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
