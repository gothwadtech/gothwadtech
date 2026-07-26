import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../src/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img 
              src={ASSETS.COMPANY_LOGO} 
              alt="Gothwad Logo" 
              className="w-10 h-10 rounded-full object-cover border border-neutral-100"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-tighter">Gothwad Tech</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="/#mission" className="hover:text-brand-orange transition-colors">Mission</a>
            <a href="/#professional-services" className="hover:text-brand-orange transition-colors">B2B Solutions</a>
            <Link to="/products" className="hover:text-brand-orange transition-colors">Products</Link>
            <Link to="/leadership" className="hover:text-brand-orange transition-colors">Leadership</Link>
            <Link to="/partners" className="hover:text-brand-orange transition-colors">Become Partner</Link>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-neutral-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors cursor-pointer">
              Join Community
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-neutral-600 hover:text-brand-orange transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar - Moved outside clipped container */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <img 
                    src={ASSETS.COMPANY_LOGO} 
                    alt="Logo" 
                    className="w-8 h-8 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-display font-bold text-lg">Gothwad Tech</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1 p-4 overflow-y-auto">
                {[
                  { name: 'Mission', href: '/#mission', isLink: false },
                  { name: 'B2B Solutions', href: '/#professional-services', isLink: false },
                  { name: 'Products', href: '/products', isLink: true },
                  { name: 'Leadership', href: '/leadership', isLink: true },
                  { name: 'Become Partner', href: '/partners', isLink: true }
                ].map((item) => (
                  item.isLink ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-sm font-medium text-neutral-600 hover:text-brand-orange hover:bg-neutral-50 rounded-xl transition-all"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      key={item.name}
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="px-4 py-3 text-sm font-medium text-neutral-600 hover:text-brand-orange hover:bg-neutral-50 rounded-xl transition-all"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>

              <div className="mt-auto p-6 border-t border-neutral-100">
                <button className="bg-neutral-900 text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors w-full shadow-lg shadow-neutral-200 cursor-pointer">
                  Join Community
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
