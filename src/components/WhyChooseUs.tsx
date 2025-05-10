import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M12 15V17M7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Secure Transactions',
    description: 'End-to-end encryption and secure payment processing protect your data and funds.',
    color: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-500',
    borderColor: 'border-blue-500 dark:border-blue-400'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Fast Process',
    description: 'Get valuations within 24 hours and payment within 3 business days after acceptance.',
    color: 'from-purple-500 to-fuchsia-500 dark:from-purple-600 dark:to-fuchsia-600',
    borderColor: 'border-purple-500 dark:border-purple-400'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Best Market Rates',
    description: 'Our extensive network of buyers ensures you get the highest possible value.',
    color: 'from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600',
    borderColor: 'border-cyan-500 dark:border-cyan-400'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C14.9391 4 13.9217 4.42143 13.1716 5.17157C12.4214 5.92172 12 6.93913 12 8C12 9.06087 12.4214 10.0783 13.1716 10.8284C13.9217 11.5786 14.9391 12 16 12C17.0609 12 18.0783 11.5786 18.8284 10.8284C19.5786 10.0783 20 9.06087 20 8C20 6.93913 19.5786 5.92172 18.8284 5.17157C18.0783 4.42143 17.0609 4 16 4ZM12 16C10.9391 16 9.92172 16.4214 9.17157 17.1716C8.42143 17.9217 8 18.9391 8 20C8 21.0609 8.42143 22.0783 9.17157 22.8284C9.92172 23.5786 10.9391 24 12 24C13.0609 24 14.0783 23.5786 14.8284 22.8284C15.5786 22.0783 16 21.0609 16 20C16 18.9391 15.5786 17.9217 14.8284 17.1716C14.0783 16.4214 13.0609 16 12 16ZM8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Expert Support',
    description: 'Our dedicated team guides you through the entire process with personalized assistance.',
    color: 'from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600',
    borderColor: 'border-green-500 dark:border-green-400'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="why-choose-us">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-t-2 border-opacity-70 ${feature.borderColor} shadow-md dark:shadow-gray-900/30`}
                whileHover={{ 
                  y: -8, 
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
              >
                <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                
                <div className="p-8">
                  <motion.div 
                    className="mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
