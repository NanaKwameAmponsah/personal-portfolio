import './App.css'
import  Hero  from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import  Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 Nana Kwame's Portfolio. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App
