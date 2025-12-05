import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import desktopBg from "../assets/desktopBg.jpg";
import mobileTwo from "../assets/mobile6.jpg";
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
        className="bg-cover bg-center w-full h-auto min-h-screen 
                  "
        style={{ 
            backgroundImage: `url(${isDesktop ? desktopBg : mobileTwo })`,
       }}
      >
  

      <motion.div className=' px-4 py-4 lg:px-10 lg:py-8'
        initial={{ position: 'relative', top: -250}}
        animate={{ top: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}   
       >
            <ul className='flex  justify-start gap-10 '>
                <li className='exo hover:text-neutral-300'><Link to="/">Projects</Link></li>
                <li className='exo hover:text-neutral-300'><Link to="/">GitHub</Link></li>
            </ul>
      </motion.div>

      <motion.div 
       className=' relative top-10 w-99 mx-auto md:mx-0 md:w-[550px] md:pl-4 md:top-35 lg:px-8 lg:top-23 xl:top-40'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.5 }}
      
       >
        <div className='flex flex-col gap-7 '>
          <div><h3 className='text-2xl  md:text-3xl lg:text-4xl'>Hi, I am</h3></div>
          <div> <h1 className='text-4xl md:text-5xl lg:text-6xl'>Ore.Omoyeni</h1></div>
          <div> <h3 className='text-2xl md:text-3xl lg:text-4xl'>A Frontend Developer</h3></div>
          <div>
            <p className='exo text-base tracking-wide'>
              I build responsive React apps that are dynamic, mobile-friendly, and visually captivating, with animations powered by Framer Motion.I love turning ideas into responsive, interactive web and mobile experiences.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 md:flex-row'>
            <Link to="">
              <motion.button 
               className='bg-white text-black px-10 py-5 cursor-pointer rounded-4xl'
                whileHover={{ 
                  scale: 1.1, 
                  
                }}
                >
                View Resume
              </motion.button>
            </Link>
            <Link to="">
              <motion.button
                className='bg-black px-10 py-5 rounded-4xl cursor-pointer'
                whileHover={{ 
                  scale: 1.1, 
                  
                }}
               
               >
                Connect with me
              </motion.button>
            </Link>
          </div>
        
         
        </div>
      </motion.div>
      

    </div>
  )
}

export default HeroSection