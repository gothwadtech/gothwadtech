/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProductsPage } from './pages/ProductsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { BrowserSimulatorModal } from './components/BrowserSimulatorModal';
import { OrderModal } from './components/OrderModal';
import { ProjectItem } from './types';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

function AppContent() {
  // Page state: 'home' | 'solutions' | 'products' | 'portfolio' | 'about' | 'contact'
  const [activePage, setActivePage] = useState<string>('home');

  // Modal states
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string>('');

  const handleOpenOrderModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setModalInitialService(serviceTitle);
    }
    setIsOrderModalOpen(true);
  };

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync with window.location.hash on mount and on hash change
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['solutions', 'products', 'browser', 'portfolio', 'about', 'leadership', 'contact'].includes(hash)) {
        if (hash === 'browser') {
          setActivePage('products');
        } else if (hash === 'leadership') {
          setActivePage('about');
        } else {
          setActivePage(hash);
        }
      } else {
        setActivePage('home');
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-[#0494f4]/25 selection:text-[#0494f4] flex flex-col font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Main Page Body */}
      <main className="flex-1 pt-14">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenBrowserSimulator={() => setIsSimulatorOpen(true)}
          />
        )}

        {activePage === 'solutions' && (
          <SolutionsPage
            onOpenOrderModal={handleOpenOrderModal}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage
            onOpenBrowserSimulator={() => setIsSimulatorOpen(true)}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenOrderModal={handleOpenOrderModal}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Floating Action WhatsApp & Phone Contact */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href="tel:07339904665"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 text-white font-bold text-xs shadow-md border border-zinc-700 transition-colors cursor-pointer"
          title="Direct Call Desk"
        >
          <Phone className="w-3.5 h-3.5 text-[#0494f4]" />
          <span>+91 73399 04665</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumberOnly}?text=Hello%20Gothwad%20Tech%20Team,%20I%20want%20to%20discuss%20a%20digital%20solution/project!`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp Desk</span>
        </a>
      </div>

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenOrderModal={handleOpenOrderModal}
      />

      <BrowserSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        onOpenOrderModal={handleOpenOrderModal}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialService={modalInitialService}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
