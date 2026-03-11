import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Segments from './components/Segments';
import HowItWorks from './components/HowItWorks';
import Compatibility from './components/Compatibility';
import VideoDemo from './components/VideoDemo';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Features />
          <Segments />
          <HowItWorks />
          <Compatibility />
          <VideoDemo />
          <Testimonials />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
