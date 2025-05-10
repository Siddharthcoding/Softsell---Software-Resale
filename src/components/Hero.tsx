import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
    ref={sectionRef} 
    className="pt-8 min-h-[100svh] flex items-center justify-center relative overflow-hidden py-16 lg:py-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,176C672,171,768,213,864,229.3C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#4F46E5"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#818CF8"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </svg>
        
        <motion.div 
          className="absolute inset-0 opacity-30 dark:opacity-40"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          animate={{ 
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 30,
            ease: "linear"
          }}
        />
      </div>
      
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-50 dark:opacity-70"
            style={{
              width: Math.random() * 150 + 100,
              height: Math.random() * 150 + 100,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              filter: "blur(70px)",
              zIndex: 0,
            }}
            animate={{
              y: [Math.random() * 40, Math.random() * -40],
              x: [Math.random() * 40, Math.random() * -40],
              scale: [1, Math.random() * 0.2 + 0.9, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 15,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      
      <div className="absolute inset-x-0 top-1/3 h-20 overflow-hidden">
        <motion.div 
          className="absolute flex items-center space-x-10"
          animate={{ 
            x: [0, -1000] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "linear"
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 h-8 w-8 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md"
            />
          ))}
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-12 lg:mt-0">
          <motion.div 
            className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200 dark:border-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-800 dark:text-blue-300 font-medium text-sm">Trusted by 500+ companies</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 dark:from-blue-300 dark:via-indigo-300 dark:to-violet-300 font-['Plus_Jakarta_Sans'] leading-tight tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="block">Maximize Your</span>
            <span className="block">Software Investment</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl font-['Inter'] mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            SoftSell helps businesses sell unused software licenses quickly and at the best possible price.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-blue-500/30 dark:shadow-blue-700/30 inline-flex items-center justify-center"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Sell My Licenses</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            
            <motion.button 
              className="w-full sm:w-auto text-blue-700 dark:text-blue-400 font-semibold py-4 px-8 rounded-xl border border-blue-300 dark:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {['Microsoft', 'Adobe', 'Oracle', 'SAP'].map((company, i) => (
                <div key={i} className="text-gray-400 dark:text-gray-500 font-semibold text-lg">{company}</div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 order-1 lg:order-2 relative">
          <motion.div
            className="relative w-full max-w-md mx-auto lg:mx-0 lg:mr-0 lg:ml-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-blue-500/30 dark:bg-blue-500/20 rounded-3xl blur-3xl transform scale-95" />
            
            <motion.div 
              className="relative z-10"
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl shadow-2xl transform rotate-6 scale-95" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-70 border border-white/20 dark:border-white/10">
                <div className="h-full flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-400">Enterprise License</div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">$399</span>
                        <span className="text-2xl font-bold text-gray-800 dark:text-white">$199</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { label: "Enterprise Software", detail: "Full Suite" },
                        { label: "User Access", detail: "Up to 5 users" },
                        { label: "Support", detail: "12 Month Priority" },
                        { label: "Updates", detail: "All Updates Included" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <motion.div 
                              className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl text-center font-bold shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Sell This License</span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full z-20 flex items-center justify-center shadow-lg"
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
            >
              <span className="font-bold text-xs">SAVE<br/>25%</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
