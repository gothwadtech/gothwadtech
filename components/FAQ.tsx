import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is Gothwad Technologies really 100% Indian?",
      a: "Yes. Every line of code is written by Indian developers, and our servers are located exclusively within Indian data centers to ensure complete digital sovereignty."
    },
    {
      q: "How can you provide services like School X for free?",
      a: "We believe education is a fundamental right. We sustain our operations through enterprise solutions and community support, allowing us to keep basic educational tools free for schools."
    },
    {
      q: "Is GxChatIndia as secure as other messaging apps?",
      a: "GxChatIndia uses state-of-the-art end-to-end encryption. Unlike foreign apps, we are transparent about our protocols and ensure that no third party, including us, can read your messages."
    },
    {
      q: "How can I contribute to Gothwad Technologies projects?",
      a: "You can join our community of 15,000+ developers. We have several open-source modules where you can contribute code, documentation, or design."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Common Questions</h2>
          <p className="text-neutral-600">Everything you need to know about our mission and products.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-100 rounded-3xl overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <HelpCircle className={`text-brand-orange transition-transform ${activeIndex === i ? 'rotate-180' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-neutral-500 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
