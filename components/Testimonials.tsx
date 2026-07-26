import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "School Principal",
      text: "School X has completely transformed our administration. The fact that such a powerful tool is available at such a low cost is a blessing for Indian schools.",
      avatar: "RS"
    },
    {
      name: "Ananya Iyer",
      role: "Full Stack Developer",
      text: "Being part of the Gothwad community opened my eyes to the potential of Indian tech. We don't need to depend on foreign giants anymore.",
      avatar: "AI"
    },
    {
      name: "Vikram Singh",
      role: "Small Business Owner",
      text: "Gothwad Store is my go-to for all utility apps. It's fast, secure, and feels like it's built specifically for us Indians.",
      avatar: "VS"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">User Stories</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Hear from the people who are using Gothwad to build a better digital India.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-orange/10" size={48} />
              <p className="text-neutral-600 mb-8 italic leading-relaxed relative z-10">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">
                  {r.avatar}
                </div>
                <div>
                  <div className="font-bold text-neutral-900">{r.name}</div>
                  <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
