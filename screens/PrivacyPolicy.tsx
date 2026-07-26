import { motion } from 'motion/react';
import ScreenHeaderNav from '../components/ScreenHeaderNav';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {

  return (
    <div className="min-h-screen bg-white">
      <ScreenHeaderNav />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-neutral max-w-none"
          >
            <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-neutral-500 mb-6">Last updated: March 19, 2026</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-neutral-600 leading-relaxed">
                At Gothwad Technologies, we collect information that you provide directly to us when you use our services, 
                including your name, email address, and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-neutral-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you, and to develop new products and features for the Indian digital ecosystem.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-neutral-600 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. 
                Your data is stored on secure servers located within India to ensure maximum sovereignty and protection.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
              <p className="text-neutral-600 leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. 
                Please contact us at privacy@gothwad.tech for any requests regarding your data.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
