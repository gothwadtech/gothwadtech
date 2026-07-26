import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, DollarSign, Briefcase, User, Mail, Phone, MapPin, FileText } from 'lucide-react';
import ScreenHeaderNav from '../components/ScreenHeaderNav';
import Footer from '../components/Footer';

const ContactSalesPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectTitle: '',
    projectDescription: '',
    budget: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form Data:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const budgetOptions = [
    { label: '10k - 30k', value: '10-30' },
    { label: '30k - 70k', value: '30-70' },
    { label: '70k - 1 Lakh', value: '70-1lakh' },
    { label: 'Premium', value: 'premium' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <ScreenHeaderNav />
        <main className="pt-32 pb-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle2 size={48} />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Order Received!</h1>
            <p className="text-neutral-600 text-xl mb-12 leading-relaxed">
              Thank you for choosing Gothwad Tech. Our sales team will review your project details and get back to you within 24 hours.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <ScreenHeaderNav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-neutral-200/50 border border-neutral-100">
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Order Your Project</h1>
              <p className="text-neutral-600 text-lg">Fill in the details below and our expert team will help you bring your vision to life.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <User size={16} className="text-brand-orange" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <Mail size={16} className="text-brand-orange" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <Phone size={16} className="text-brand-orange" /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <MapPin size={16} className="text-brand-orange" /> Address / Location
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="City, State, India"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              </div>

              {/* Project Title */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <Briefcase size={16} className="text-brand-orange" /> Project Title
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. E-commerce Mobile App"
                  className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                />
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <FileText size={16} className="text-brand-orange" /> Project Description
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all resize-none"
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                />
              </div>

              {/* Budget - Asked at the end as requested */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <DollarSign size={16} className="text-brand-orange" /> Estimated Budget (INR)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {budgetOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({...formData, budget: option.value})}
                      className={`px-4 py-4 rounded-2xl font-bold text-sm transition-all border ${
                        formData.budget === option.value
                          ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20'
                          : 'bg-neutral-50 text-neutral-600 border-neutral-100 hover:border-brand-orange/30'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={!formData.budget}
                  className="w-full py-6 rounded-[2rem] bg-neutral-900 text-white font-bold text-xl flex items-center justify-center gap-3 hover:bg-brand-orange transition-all shadow-xl shadow-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  Confirm Order <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                {!formData.budget && (
                  <p className="text-center text-xs text-neutral-400 mt-4">Please select a budget to proceed</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactSalesPage;
