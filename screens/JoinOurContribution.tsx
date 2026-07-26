import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Phone, Instagram, Linkedin, Github, Code, Briefcase, MessageSquare, GraduationCap, DollarSign, Heart, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScreenHeaderNav from '../components/ScreenHeaderNav';
import Footer from '../components/Footer';

const JoinOurContribution = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const skills = [
    "Website Dev", "Web App", "App Dev", "SEO", "Server Manager", "Other Tech", "Custom"
  ];

  const modes = [
    { id: 'free', label: 'Free for Contribution', icon: Heart },
    { id: 'paid', label: 'Paid Contribution', icon: DollarSign },
    { id: 'learn', label: 'Want to Learn', icon: GraduationCap }
  ];

  const experiences = ["Beginner", "Intermediate", "Expert", "Professional"];

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-neutral-100"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Application Sent!</h2>
          <p className="text-neutral-600 mb-8">
            Thank you for your interest in contributing to Gothwad Technologies. Our team will review your profile and get back to you soon.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-neutral-900 text-white py-4 rounded-2xl font-bold hover:bg-neutral-800 transition-all cursor-pointer"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <ScreenHeaderNav />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Join Our <span className="text-brand-orange">Contribution</span>
            </motion.h1>
            <p className="text-neutral-600 text-lg">
              Be a part of India's tech independence journey. Share your skills and help us build the future.
            </p>
          </header>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-neutral-100 space-y-8"
          >
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                  <User size={16} className="text-brand-orange" /> Full Name
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                  <Phone size={16} className="text-brand-orange" /> Phone Number
                </label>
                <input 
                  required
                  type="tel" 
                  placeholder="Enter phone number"
                  className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Info */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                <Mail size={16} className="text-brand-orange" /> Gmail / Email
              </label>
              <input 
                required
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
              />
            </div>

            {/* Social Links */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                  <Instagram size={16} className="text-pink-500" /> Instagram
                </label>
                <input 
                  type="text" 
                  placeholder="@username"
                  className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                  <Linkedin size={16} className="text-blue-600" /> LinkedIn
                </label>
                <input 
                  type="text" 
                  placeholder="Profile URL/Username"
                  className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                  <Github size={16} className="text-neutral-900" /> GitHub
                </label>
                <input 
                  type="text" 
                  placeholder="GitHub Username"
                  className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all"
                />
              </div>
            </div>

            <hr className="border-neutral-100" />

            {/* Skills Selection */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <Code size={20} className="text-brand-orange" /> What are your skills?
              </label>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <label key={skill} className="relative cursor-pointer group">
                    <input type="checkbox" className="peer sr-only" name="skills" value={skill} />
                    <div className="px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-600 peer-checked:bg-brand-orange peer-checked:text-white peer-checked:border-brand-orange hover:bg-neutral-50 font-medium text-sm">
                      {skill}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Mode Selection */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <Briefcase size={20} className="text-brand-orange" /> Choose Contribution Mode
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {modes.map(mode => (
                  <label key={mode.id} className="relative cursor-pointer group">
                    <input type="radio" className="peer sr-only" name="mode" value={mode.id} required />
                    <div className="p-4 rounded-2xl border border-neutral-200 text-neutral-600 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 hover:bg-neutral-50 flex flex-col items-center text-center gap-2 h-full">
                      <mode.icon size={20} className="md:w-6 md:h-6" />
                      <span className="font-bold text-[10px] md:text-sm">{mode.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Selection */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <GraduationCap size={20} className="text-brand-orange" /> Your Experience Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {experiences.map(exp => (
                  <label key={exp} className="relative cursor-pointer group">
                    <input type="radio" className="peer sr-only" name="experience" value={exp} required />
                    <div className="px-4 py-3 rounded-xl border border-neutral-200 text-neutral-600 peer-checked:bg-brand-orange peer-checked:text-white peer-checked:border-brand-orange hover:bg-neutral-50 font-bold text-sm text-center">
                      {exp}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <MessageSquare size={20} className="text-brand-orange" /> Work Description
              </label>
              <textarea 
                required
                rows={4}
                placeholder="Describe your previous work, projects, or what you want to achieve with us..."
                className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-3 cursor-pointer mt-4"
            >
              Submit Application <Send size={20} />
            </button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinOurContribution;
