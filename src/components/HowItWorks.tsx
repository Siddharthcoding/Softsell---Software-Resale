import { motion } from 'framer-motion';

const steps = [
  {
    icon: '/icons/upload.svg',
    title: 'Upload License',
    description: 'Upload your unused software license details securely to our platform.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: '/icons/valuation.svg',
    title: 'Get Valuation',
    description: 'Receive a competitive valuation based on market demand and license type.',
    color: 'from-indigo-500 to-purple-400'
  },
  {
    icon: '/icons/payment.svg',
    title: 'Get Paid',
    description: 'Accept the offer and get paid quickly through your preferred payment method.',
    color: 'from-green-500 to-emerald-400'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 inline-block mb-4 font-['TT_Neoris']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How It Works
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
            Our simple three-step process makes selling your unused software licenses easy and profitable.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-green-400 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex-1 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden h-full transform transition duration-300 hover:shadow-2xl dark:shadow-indigo-500/10 hover:-translate-y-2"
                whileHover={{ y: -10 }}
              >
                <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                <div className="p-8">
                  <div className="flex justify-center">
                    <motion.div 
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
