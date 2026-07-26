import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { ASSETS } from '../src/constants';

const Team = () => {
  const leaders = [
    { 
      name: "Pawan Gothwad", 
      role: "Founder", 
      desc: "The visionary behind Gothwad Technologies' mission for Indian tech independence.",
      image: ASSETS.FOUNDER_IMAGE
    },
    { name: "Dr. Surendra", role: "CEO", desc: "Leading the strategic growth and operational excellence of the company." },
    { name: "Vishnu Meena", role: "Co-founder & CTO", desc: "The technical architect driving innovation across all platforms." }
  ];

  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Leadership Team</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">The minds leading India towards digital sovereignty.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((l, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-neutral-50 border border-neutral-100 text-center hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-6 overflow-hidden flex items-center justify-center text-neutral-400">
                {l.image ? (
                  <img 
                    src={l.image} 
                    alt={l.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Users size={40} />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-1">{l.name}</h3>
              <div className="text-brand-orange font-medium text-sm uppercase tracking-widest mb-4">{l.role}</div>
              <p className="text-neutral-500 text-sm leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
