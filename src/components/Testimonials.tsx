import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// Expanded testimonials array for continuous scrolling
const testimonials = [
  {
    quote: "SoftSell made the process of selling our unused Microsoft licenses incredibly easy. We received payment much faster than expected and at a great rate.",
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechGrowth Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    bgColor: "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30"
  },
  {
    quote: "As a small business, every cost matters. SoftSell helped us recover costs from software we no longer needed, with minimal effort on our part.",
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Innovative Solutions LLC",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    bgColor: "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
  },
  {
    quote: "The valuation we received for our enterprise licenses was significantly higher than we expected. Great service!",
    name: "Emily Rodriguez",
    role: "CFO",
    company: "Nexus Enterprises",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    bgColor: "from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30"
  },
  {
    quote: "Transitioning between software vendors was made incredibly simple with SoftSell's assistance.",
    name: "David Kim",
    role: "CTO",
    company: "Future Systems",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    bgColor: "from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30"
  }
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      setWidth(scrollWidth - clientWidth);
    }

    const startAnimation = async () => {
      controls.start({
        x: [0, -width * 0.5],
        transition: { 
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    if (width > 0) {
      startAnimation();
    }

    return () => {
      controls.stop();
    };
  }, [controls, width]);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
      
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 inline-block mb-4 font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-['Inter']"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by businesses of all sizes to maximize the value of their software investments.
          </motion.p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <motion.div 
            ref={containerRef}
            className="flex gap-6 py-10"
            animate={controls}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.8 }}
              >
                <motion.div 
                  className={`bg-gradient-to-br ${testimonial.bgColor} rounded-2xl shadow-xl p-8 relative h-full border border-gray-100 dark:border-gray-700`}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <div className="absolute -top-6 -left-6 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 mt-4 italic text-lg leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full border-2 border-blue-200 dark:border-blue-800 object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
