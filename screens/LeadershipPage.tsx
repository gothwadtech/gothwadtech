import ScreenHeaderNav from '../components/ScreenHeaderNav';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { motion } from 'motion/react';

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScreenHeaderNav />
      <main className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Team />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipPage;
