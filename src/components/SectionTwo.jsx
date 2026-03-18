import React from 'react'
import { useState, useEffect } from "react";
import mobileK from "../assets/mobileK.jpg";
import desktopY from '../assets/desktopY.jpg';
import estatein from '../assets/Estatein.png'
import {motion} from 'framer-motion';

const SectionTwo = () => {
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
        <div className="bg-cover bg-center w-full min-h-screen bg-no-repeat"
            style={{ 
                backgroundImage: `url(${isDesktop ? desktopY : mobileK })`,
            }}
        >
                        
                   
            <div className='w-full py-10 px-4 lg:py-20 lg:px-20 max-w-[1400px] mx-auto flex flex-col gap-10 lg:flex-row '> 
                <div className=''>
                    <img className='w-full max-w-full h-auto object-contain lg:w-150 rounded-md'  
                    src={estatein} 
                    alt="project image logo " />
                </div>

                                                         
                <div className='flex flex-col gap-3 lg:w-150'>
                    <h1 className='font-semibold lg:text-3xl'>Estatein</h1>
                    <p className='exo text-base border-b border-white leading-[125%] tracking-[0.0125em] py-2.5'>This web application simplifies the process of booking apartments online. Although it is currently a mockup, it demonstrates a seamless and stress-free booking experience for both clients and service providers. The platform prioritizes data security by leveraging Firebase Authentication to protect user information such as emails and passwords, while Firestore is used for efficient data storage and retrieval, allowing users to browse through available properties with ease. I built this using Node.js for backend development, with Framer Motion and AOS enhancing the user experience through smooth animations and engaging scroll effects. </p>
                    <ul className='exo text-base font-light list-disc ml-5'>
                        <li>Platform: Web (app)</li>
                        <li>Industry: Real Estate, Commerce</li>
                        <li>Produced: Yes</li>
                        <li>Role: Frontend Developer</li>
                        <li>Tools: ReactJs(NodeJs), Tailwind CSS, Javascript, Firebase, AOS</li>
                    </ul>
                    <a href='https://estatein-web-appx.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <motion.button 
                            className='bg-white text-black px-10 py-4 rounded-4xl cursor-pointer'
                            whileHover={{ 
                                scale:1.1,
                            }} 
                            >
                                View project
                        </motion.button>
                    </a>
                </div>
        
            </div>
        
                    
        </div>
    )


}

export default SectionTwo;