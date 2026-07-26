import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ASSETS } from '../src/constants';

const ScreenHeaderNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-neutral-600 hover:text-brand-orange transition-colors cursor-pointer font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div className="font-display font-bold text-xl tracking-tighter">Gothwad Tech</div>
          <img 
            src={ASSETS.COMPANY_LOGO} 
            alt="Gothwad Logo" 
            className="w-10 h-10 rounded-full object-cover border border-neutral-100"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </nav>
  );
};

export default ScreenHeaderNav;
