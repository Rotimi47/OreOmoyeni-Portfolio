import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import ScrollToTop from './components/ScrollToTop';
import { motion,  } from 'framer-motion';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos";      // AOS JS
import SocialMedia from './components/SocialMedia';





const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1500, // animation duration in ms
      once: false,     // animates
      offset: 100,    // start animation when element is 100px from viewport
    });
  }, []);




  return (
    
    <div>

       {/* Hero Section */}
   
        <HeroSection />
    

      {/* Project Section */}
      <div data-aos="fade-up" data-aos-delay="200">
        <ProjectSection />
      </div>

      {/* Section Two */}
      <div data-aos="fade-right" data-aos-delay="300">
        <SectionTwo />
      </div>

      {/* Section Three */}
      <div data-aos="fade-left" data-aos-delay="400">
        <SectionThree />
      </div>

      <SocialMedia/>

      <ScrollToTop />



    </div>
  )
}

export default App;







