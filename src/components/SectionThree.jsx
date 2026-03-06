import React from 'react'
import { useState, useEffect } from "react";
import mobileK from "../assets/mobileK.jpg";
import desktopY from '../assets/desktopY.jpg';
import {Link} from 'react-router-dom';

import {motion} from 'framer-motion';


const SectionThree = () => {
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
                
            <div className='w-full py-10 px-4 lg:py-20 lg:px-20 2xl:max-w-380 2xl:mx-auto 4xl:max-w-7xl 4xl:mx-auto flex flex-col gap-10 lg:flex-row '>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold lg:text-3xl'>Estatein</h1>
                        <p className='exo text-base border-b border-white leading-[125%] tracking-[0.0125em] py-2.5'>I built a modern music record company website using React and Framer Motion, designed to give fans a smooth and immersive experience while exploring their favorite artistes. The platform allows users to easily stay updated on new releases, upcoming tours, music drops, and artiste profiles, all presented in a clean, dynamic interface.The website features fluid animations, responsive layouts, and interactive UI elements that make navigation feel intuitive and engaging. </p>
                        <ul className='exo  text-base font-light list-disc ml-5'>
                            <li>Platform: Web</li>
                            <li>Industry: </li>
                            <li>Produced: Yes</li>
                            <li>Role: Frontend Developer</li>
                            <li>Tools: ReactJs, Javascript</li>
                        </ul>
                        <Link to=''>
                            <motion.button 
                                className='bg-white text-black px-10 py-4 rounded-4xl cursor-pointer '
                                whileHover={{ 
                                    scale:1.1,
                                    }} 
                                >
                                View project
                            </motion.button>
                        </Link>
                    </div>
                    <div className=''>
                        <img className=''  src='' alt="project image logo " />
                    </div>

            </div>

            <div className=' max-w-65  mx-auto'> 
                <Link to='' >
                    <motion.button 
                        className=' exo text-lg border border-neutral-700 font-semibold bg-black rounded-4xl px-16 py-4'
                        whileHover={{ 
                         scale:1.1,
                        }} 
                     
                    >
                        See all projects
                    </motion.button>
            
                 </Link>
            </div>


        </div>
        
    )
}

export default SectionThree