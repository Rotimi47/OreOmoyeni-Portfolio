import React from 'react'
import { useState, useEffect } from "react";
import mobileK from "../assets/mobileK.jpg";
import desktopY from '../assets/desktopY.jpg';
import home from '../assets/homex.png'
import {motion} from 'framer-motion';





const ProjectSection = () => {
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
        <div  className="bg-cover bg-center w-full min-h-screen bg-no-repeat"
                style={{ 
                    backgroundImage: `url(${isDesktop ? desktopY : mobileK })`,
               }}
              >
                
            <div className=' w-full max-w-[1400px] mx-auto py-10 px-4 lg:py-20 lg:px-20 flex flex-col gap-10 lg:gap-14  '>
                <div className='text-center'>
                    <h3 className='font-medium text-2xl md:text-lg'>Featured Projects</h3>
                </div>
                <div className=' flex  flex-col gap-10 lg:flex-row lg:justify-center lg:gap-14 lg:items-center'>
                    <div className='flex flex-col gap-3 lg:w-150'>
                        <h1 className='font-semibold lg:text-3xl'>Paenote - Global Payment for Global Businesses</h1>
                        <p className='exo text-base border-b border-white leading-[125%] tracking-[0.0125em] py-2.5'>This is a simple modern web platform designed to share the company’s modus operandi and serve as a medium to familiarize users and clients with it’s services. It combines simplicity with functionality to give users a smooth and interactive experience. </p>
                        <ul className='exo text-base font-light list-disc ml-5 '>
                            <li>Platform: Web</li>
                            <li>Industry: Fintech, Business</li>
                            <li>Produced: yes</li>
                            <li>Role: Frontend Developer</li>
                            <li>Tools: ReactJs, Javascript</li>
                        </ul>
                        <a href='https://paenote.com/' target="_blank" rel="noopener noreferrer">
                            <motion.button 
                                className='bg-white text-black px-10 py-4 rounded-4xl cursor-pointer mt-2.5'
                                whileHover={{ 
                                    scale:1.1,
                                    }} 
                                >
                                View project
                            </motion.button>
                        </a>
                    </div>
                    <div className="">
                        <img 
                            src={home} 
                            alt="project image logo"
                            className="w-full max-w-full h-auto object-contain lg:w-150"
                        />
                    </div>

                    

                </div>

            </div>
        </div>
        
    )
}

export default ProjectSection;