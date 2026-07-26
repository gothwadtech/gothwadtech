import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../src/constants';

const Footer = () => (
  <footer className="py-20 px-6 border-t border-neutral-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={ASSETS.COMPANY_LOGO} 
              alt="Gothwad Logo" 
              className="w-10 h-10 rounded-full object-cover border border-neutral-100"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-2xl tracking-tighter uppercase">Gothwad Tech</span>
          </div>
          <p className="text-neutral-500 max-w-md mb-8 leading-relaxed">
            Building a self-reliant digital India. Join us in our mission to create 100% pure Indian technology for the world.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-brand-orange hover:text-white transition-all"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-brand-orange hover:text-white transition-all"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-brand-orange hover:text-white transition-all"><Github size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-brand-orange hover:text-white transition-all"><Mail size={18} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="#professional-services" className="hover:text-brand-orange transition-colors">B2B Development</a></li>
            <li><a href="#products" className="hover:text-brand-orange transition-colors">Premium Apps</a></li>
            <li><a href="#services" className="hover:text-brand-orange transition-colors">Enterprise Tech</a></li>
            <li><a href="#mission" className="hover:text-brand-orange transition-colors">Our Mission</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Community</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="#" className="hover:text-brand-orange transition-colors">Join Developers</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Open Source</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Events</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">
        <div className="text-center md:text-left order-2 md:order-1">
          <p>© 2026 Gothwad Technologies. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center gap-6 order-1 md:order-2">
          <Link to="/privacy-policy" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link>
          <div className="w-1 h-1 rounded-full bg-neutral-200 hidden sm:block" />
          <Link to="/terms-of-service" className="hover:text-neutral-900 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
