import React from 'react'
import { useState, useEffect } from "react";
import mobileK from "../assets/mobileK.jpg";
import desktopY from '../assets/desktopY.jpg';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
import Wheelz from "../assets/Wheelz.png"


const SectionThree = () => {
       const [width, setWidth] = useState(0);
    
    
       useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
         handleResize();
        window.addEventListener("resize", handleResize);
    
        
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const getBackground = () => {
        if (width >= 1640) return "none"; // remove background on large screens
        if (width >= 768) return `url(${desktopY})`; // desktop
        return `url(${mobileK})`; // mobile
      };

   

    return (
        <div  className="bg-cover bg-center w-full min-h-screen bg-no-repeat"
                style={{ 
                    backgroundImage: getBackground() ,
               }}
              >
                
            <div className='w-full py-10 px-4 lg:py-20 lg:px-20 max-w-[1400px] mx-auto flex flex-col gap-10 lg:flex-row '>
                    <div className='flex flex-col gap-3 lg:w-150'>
                        <h1 className='font-bold lg:text-3xl'>Rent A Wheel</h1>
                        <p className='exo text-base border-b border-white leading-[125%] tracking-[0.0125em] py-2.5'>Rent a Wheel is a modern car rental platform built using Next.js and TypeScript, designed to provide users with a seamless car browsing and booking experience. The application currently allows users to view car details and rental prices, with a responsive and interactive UI. Future enhancements include integrating car and image APIs to dynamically display a wider range of vehicles, making the platform more comprehensive and visually engaging. </p>
                        <ul className='exo  text-base font-light list-disc ml-5'>
                            <li>Platform: Web</li>
                            <li>Industry: Auto, Commerce</li>
                            <li>Produced: Yes</li>
                            <li>Role: Frontend Developer</li>
                            <li>Tools: NextJs, Typescript</li>
                        </ul>
                        <a href='https://rent-a-wheel-nu.vercel.app/' target="_blank" rel="noopener noreferrer">
                            <motion.button 
                                className='bg-white text-black px-10 py-4 rounded-4xl cursor-pointer '
                                whileHover={{ 
                                    scale:1.1,
                                    }} 
                                >
                                View project
                            </motion.button>
                        </a>
                    </div>
                    <div className=''>
                        <img className='w-full max-w-full h-auto object-contain lg:w-150 rounded-md'  
                        src={Wheelz} 
                        alt="project image logo " />
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