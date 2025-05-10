import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    document.title = 'SoftSell - Maximize Your Software Investment';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SoftSell helps businesses sell unused software licenses quickly and at the best possible price. Get top value for your unused licenses today.');
    }
  }, []);
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main> 
          <section id="hero">
            <Hero />
          </section>
          
          <section id="how-it-works">
            <HowItWorks />
          </section>
          
          <section id="why-choose-us">
            <WhyChooseUs />
          </section>
          
          <section id="testimonials">
            <Testimonials />
          </section>
          
          <section id="contact">
            <ContactForm />
          </section>
        </main>
        
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default App;
