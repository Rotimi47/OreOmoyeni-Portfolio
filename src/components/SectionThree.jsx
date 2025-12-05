import React from 'react'
import { useState, useEffect } from "react";
import mobileK from "../assets/mobileK.jpg";
import desktopY from '../assets/desktopY.jpg';
import {Link} from 'react-router-dom';
import projectPic from '../assets/projectPic.jpg';
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
        <div  className="bg-cover bg-center w-full min-h-screen 
                          md:bg-[url('${desktopBg}')]"
                style={{ 
                    backgroundImage: `url(${isDesktop ? desktopY : mobileK })`,
               }}
              >
                
            <div className=' py-10'>
                <div className=' w-99 flex-col gap-12 my-6 flex lg:flex-row lg:w-250 mx-auto lg:mt-6 lg:py-4  xl:mt-12 xl:py-12 xl:w-259  lg:px-2  lg:justify-between'>
                    <div className=' lg:w-100 flex flex-col gap-3'>
                        <h1 className='font-bold lg:text-3xl'>OK Music Group</h1>
                        <p className='exo text-base border-b border-white leading-[125%] tracking-[0.0125em] py-2.5'>I built a modern music record company website using React and Framer Motion, designed to give fans a smooth and immersive experience while exploring their favorite artistes. The platform allows users to easily stay updated on new releases, upcoming tours, music drops, and artiste profiles, all presented in a clean, dynamic interface.The website features fluid animations, responsive layouts, and interactive UI elements that make navigation feel intuitive and engaging. </p>
                        <ul className='exo '>
                            <li className=''>Platform: Web</li>
                            <li>Industry: Entertainment, Music</li>
                            <li>Produced: No</li>
                            <li>Role: Frontend Developer</li>
                            <li>Tools: ReactJs, Javascript, Framer Motion</li>
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
                    <div className='w-full lg:w-100'>
                        <img className=''  src={projectPic} alt="project image logo " />
                    </div>

                </div>

            </div>

            <div className=' max-w-65  mx-auto'> 
                <Link to='' >
                    <motion.button 
                        className=' exo text-lg border border-white font-semibold bg-black rounded-4xl px-16 py-4'
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