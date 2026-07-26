import { motion } from 'motion/react';
import { Smartphone, Layers, Code2, Layout, Star, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../src/constants';
import ScreenHeaderNav from '../components/ScreenHeaderNav';
import Footer from '../components/Footer';

const ProductsList = () => {
  const navigate = useNavigate();

  const products = [
    { 
      icon: Smartphone, 
      name: "GxChatIndia", 
      type: "Messaging & Social", 
      desc: "The ultimate Indian alternative to WhatsApp. Features end-to-end encryption, high-quality calls, and seamless media sharing. Built for privacy and speed.", 
      status: "Live",
      isPremium: true,
      features: ["End-to-end Encryption", "HD Video Calls", "Indian Stickers", "Large File Sharing"],
      color: "bg-blue-500"
    },
    { 
      icon: Layers, 
      name: "Gothwad Store", 
      type: "App Ecosystem", 
      desc: "India's own app store featuring normal apps, games, mod APKs for entertainment, and professional hacking tools. A safe haven for developers and users.", 
      status: "Live",
      isPremium: true,
      features: ["Mod APKs", "Developer Tools", "Safe Downloads", "Community Reviews"],
      color: "bg-orange-500"
    },
    { 
      icon: Code2, 
      name: "Gx Edu", 
      type: "EdTech Platform", 
      desc: "A comprehensive learning platform like PW/Allen, designed to make Indian education smart, accessible, and digital-first. Empowering the next generation.", 
      status: "Beta",
      features: ["Live Classes", "Doubt Solving", "Mock Tests", "Study Material"],
      color: "bg-purple-500"
    },
    { 
      image: ASSETS.SCHOOL_X_LOGO, 
      name: "School X", 
      type: "Digital Schooling", 
      desc: "A complete digital solution for schools to manage everything from attendance to exams at minimal or zero cost. Transforming traditional schools.", 
      status: "Live",
      features: ["Attendance System", "Exam Management", "Fee Tracking", "Parent App"],
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ScreenHeaderNav />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold mb-6"
            >
              Our Digital <span className="text-brand-orange">Ecosystem</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-600 max-w-2xl mx-auto text-lg"
            >
              Explore our range of innovative products designed to empower the Indian digital landscape, from secure communication to advanced education.
            </motion.p>
          </header>

          <div className="grid gap-6 md:gap-8">
            {products.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 border border-neutral-100 shadow-sm flex flex-col md:flex-row gap-6 md:gap-12 items-center"
              >
                <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-square rounded-2xl md:rounded-3xl bg-neutral-50 flex items-center justify-center overflow-hidden relative group">
                  {p.image ? (
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  ) : p.icon ? (
                    <div className={`w-full h-full ${p.color} flex items-center justify-center text-white`}>
                      <p.icon size={60} className="md:w-20 md:h-20" strokeWidth={1.5} />
                    </div>
                  ) : (
                    <Layout size={60} className="text-neutral-300 md:w-20 md:h-20" />
                  )}
                  {p.isPremium && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-yellow-400 text-black text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Star size={10} className="md:w-3 md:h-3" fill="currentColor" /> PREMIUM
                    </div>
                  )}
                </div>

                <div className="flex-1 w-full text-left">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 md:px-3 md:py-1 rounded-full ${
                      p.status === 'Live' ? 'bg-green-100 text-green-600' : 
                      p.status === 'Beta' ? 'bg-blue-100 text-blue-600' : 'bg-neutral-100 text-neutral-500'
                    }`}>
                      {p.status}
                    </span>
                    <span className="text-[10px] md:text-xs text-neutral-400 font-medium uppercase tracking-wider">{p.type}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6">{p.name}</h2>
                  <p className="text-neutral-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">{p.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                    {p.features?.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-neutral-500 text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="w-full sm:w-auto bg-neutral-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all cursor-pointer shadow-lg shadow-neutral-200">
                      Explore Product <ExternalLink size={16} />
                    </button>
                    <button className="w-full sm:w-auto border border-neutral-200 text-neutral-600 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-neutral-50 transition-all cursor-pointer">
                      View Documentation
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <section className="mt-24 bg-neutral-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 relative z-10">Have a Product Idea?</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg mb-12 relative z-10">
              We don't just build our own products. We help visionaries like you bring their digital dreams to life with our world-class engineering team.
            </p>
            <button 
              onClick={() => navigate('/#contact')}
              className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all cursor-pointer relative z-10 shadow-xl shadow-brand-orange/20"
            >
              Start Your Project
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsList;
