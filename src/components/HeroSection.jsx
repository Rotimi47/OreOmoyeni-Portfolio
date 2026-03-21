import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import desktopBg from "../assets/desktopBg.jpg";
import mobileBg from "../assets/mobileBg.jpg";
import { motion } from 'framer-motion';






const HeroSection = () => {
  
   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

   useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
        className="bg-cover bg-center w-full min-h-screen bg-no-repeat"
        style={{ 
             backgroundImage: `url(${isDesktop ? desktopBg : mobileBg })`,
       }}
      >
  

      <motion.div className=' px-4 py-4 lg:px-10 lg:py-8'
        initial={{ position: 'relative', top: -250}}
        animate={{ top: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}   
       >
            <ul className='flex  justify-start gap-10 '>
                <li className='exo hover:text-neutral-300'><Link to="/">Projects</Link></li>
                <li className='exo hover:text-neutral-300'><a href="https://github.com/Rotimi47"  target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
      </motion.div>

      <motion.div 
       className='mt-20 w-99 mx-auto md:mx-0 md:w-[550px] md:pl-4 md:top-35 lg:px-8 lg:mt-30 xl:top-40'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.5 }}
      
       >
        <div className='w-full py-10 px-4 flex flex-col gap-6 '>
          <div><h3 className='text-2xl  md:text-3xl lg:text-4xl'>Hi, I am</h3></div>
          <div> <h1 className='text-4xl md:text-5xl lg:text-6xl'>Ore.Omoyeni</h1></div>
          <div> <h3 className='text-2xl md:text-3xl lg:text-4xl'>A Frontend Developer</h3></div>
          <div>
            <p className='exo text-lg tracking-wide'>
              I build responsive React apps that are dynamic, mobile-friendly, and visually captivating. I love turning ideas into responsive, interactive web and mobile experiences.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 md:flex-row '>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button 
               className='bg-white text-black px-10 py-5 cursor-pointer rounded-4xl'
                whileHover={{ 
                  scale: 1.1, 
                  
                }}
                >
                View Resume
              </motion.button>
            </a>
            <a href="https://www.linkedin.com/in/oluwadurotimi-omoyeni-4254a71b9/" target="_blank" rel="noopener noreferrer">
              <motion.button
                className='bg-black px-10 py-5 rounded-4xl cursor-pointer'
                whileHover={{ 
                  scale: 1.1, 
                  
                }}
               
               >
                 Connect with me
              </motion.button>
            </a>
          </div>
        
         
        </div>
      </motion.div>
      

    </div>
  )
}

export default HeroSection