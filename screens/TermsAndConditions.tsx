import { motion } from 'motion/react';
import ScreenHeaderNav from '../components/ScreenHeaderNav';
import Footer from '../components/Footer';

const TermsAndConditions = () => {

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
            <h1 className="font-display text-4xl font-bold mb-8">Terms & Conditions</h1>
            <p className="text-neutral-500 mb-6">Last updated: March 19, 2026</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-neutral-600 leading-relaxed">
                By accessing and using the services provided by Gothwad Technologies, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
              <p className="text-neutral-600 leading-relaxed">
                Our services are intended for lawful use only. You agree not to use our services for any purpose that is illegal 
                or prohibited by these terms. We reserve the right to terminate your access to our services at any time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p className="text-neutral-600 leading-relaxed">
                All content, trademarks, and logos on this website are the property of Gothwad Technologies. 
                You may not use, reproduce, or distribute any of our intellectual property without our prior written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              <p className="text-neutral-600 leading-relaxed">
                Gothwad Technologies shall not be liable for any direct, indirect, incidental, or consequential damages 
                arising out of your use of our services or your inability to access them.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
              <p className="text-neutral-600 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
