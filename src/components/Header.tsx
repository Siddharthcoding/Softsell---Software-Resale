import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ['how-it-works', 'why-choose-us', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
    className="fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6"
    >
      <motion.div 
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-gray-700/50' 
            : 'bg-white/75 dark:bg-gray-900/75 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center py-3 md:py-4 px-4 md:px-6">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold flex items-center">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <span className="ml-2 font-['Plus_Jakarta_Sans']">SoftSell</span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              {name: 'How It Works', href: '#how-it-works'},
              {name: 'Why Choose Us', href: '#why-choose-us'},
              {name: 'Testimonials', href: '#testimonials'},
              {name: 'Contact', href: '#contact'}
            ].map((item) => (
              <motion.a 
                key={item.name}
                href={item.href} 
                className={`relative text-sm font-medium group ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                } transition-colors`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </motion.a>
            ))}
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
            <ThemeToggle />
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-md shadow-blue-500/20 dark:shadow-blue-700/20"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Get Started
            </motion.button>
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <motion.button 
              className="ml-4 text-gray-700 dark:text-gray-300 focus:outline-none p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mx-4 mt-2 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 px-6">
              <div className="flex flex-col space-y-4">
                {[
                  {name: 'How It Works', href: '#how-it-works'},
                  {name: 'Why Choose Us', href: '#why-choose-us'},
                  {name: 'Testimonials', href: '#testimonials'},
                  {name: 'Contact', href: '#contact'}
                ].map((item) => (
                  <motion.a 
                    key={item.name}
                    href={item.href} 
                    className={`text-base py-2 px-3 rounded-lg ${
                      activeSection === item.href.substring(1)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30'
                    } transition-colors`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-2"></div>
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
