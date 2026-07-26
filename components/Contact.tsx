import { ArrowRight } from 'lucide-react';

const Contact = () => (
  <section className="py-24 px-6 bg-neutral-50">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Contribute?</h2>
      <p className="text-neutral-600 mb-12 text-lg">Whether you are a developer, designer, or tech enthusiast, there is a place for you in the Gothwad mission.</p>
      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-neutral-200/50 border border-neutral-100">
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="text-left">
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 ml-1">Full Name</label>
            <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl bg-neutral-50 border-none focus:ring-2 focus:ring-brand-orange transition-all outline-none" />
          </div>
          <div className="text-left">
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 ml-1">Email Address</label>
            <input type="email" placeholder="your@email.com" className="w-full px-5 py-4 rounded-xl bg-neutral-50 border-none focus:ring-2 focus:ring-brand-orange transition-all outline-none" />
          </div>
        </div>
        <div className="text-left mb-8">
          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 ml-1">Your Expertise</label>
          <select className="w-full px-5 py-4 rounded-xl bg-neutral-50 border-none focus:ring-2 focus:ring-brand-orange transition-all outline-none appearance-none">
            <option>Web Developer</option>
            <option>Mobile App Developer</option>
            <option>AI/ML Engineer</option>
            <option>UI/UX Designer</option>
            <option>Other</option>
          </select>
        </div>
        <button className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2">
          Submit Application <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

export default Contact;
