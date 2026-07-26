import { motion } from 'motion/react';
import { Target, Eye, Shield, Zap, Heart, Globe, Users, Rocket } from 'lucide-react';
import ScreenHeaderNav from '../components/ScreenHeaderNav';
import Footer from '../components/Footer';

const MissionPage = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To empower India's digital landscape by building high-quality, secure, and accessible technology solutions that cater to the unique needs of our diverse population.",
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "To become the cornerstone of India's tech independence, where every citizen and business has access to world-class digital tools built right here at home.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      desc: "We believe privacy is a fundamental right. Our products are built with end-to-end encryption and data sovereignty at their core.",
      color: "text-brand-green",
      bg: "bg-brand-green/10"
    }
  ];

  const pillars = [
    { icon: Zap, title: "Speed", desc: "Performance optimized for all network conditions." },
    { icon: Heart, title: "Empathy", desc: "User-centric design that understands Indian contexts." },
    { icon: Globe, title: "Scale", desc: "Infrastructure built to handle millions of users." },
    { icon: Users, title: "Community", desc: "Open to contributions from India's brightest minds." }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ScreenHeaderNav />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6"
            >
              Our Core Purpose
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Building the <span className="text-brand-orange">Digital Future</span> of India.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              Gothwad Technologies was founded on a simple yet powerful idea: India deserves technology that is built for Indians, by Indians. We are on a journey to create a self-reliant digital ecosystem.
            </motion.p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${v.bg} ${v.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <section className="bg-neutral-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <Rocket className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">The Pillars of Our Innovation</h2>
              <div className="grid sm:grid-cols-2 gap-12">
                {pillars.map((p, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-orange">
                      <p.icon size={20} />
                    </div>
                    <h4 className="text-xl font-bold">{p.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Join Us on This Journey</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/join-contribution" 
                className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-orange/20"
              >
                Contribute Now
              </a>
              <a 
                href="/contact-sales" 
                className="bg-white text-neutral-900 border border-neutral-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-neutral-50 transition-all"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MissionPage;
