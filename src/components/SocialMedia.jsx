import React from 'react'
import {motion} from 'framer-motion';
import {Mail} from 'lucide-react'
import {Twitter} from 'lucide-react'

const SocialMedia = () => {
  return (
    <div className='flex flex-col gap-6 my-16'>
        <div className='text-center'>
            <p className='exo text-lg'>connect with me</p>
        </div>

          <div className=' max-w-65  mx-auto'> 
            <a href='https://x.com/oreomoyeni'
              target="_blank" 
             rel="noopener noreferrer">
                <motion.button 
                     className=' exo flex gap-4 text-lg border border-white font-semibold bg-blend-darken rounded-4xl px-16 py-4'
                     whileHover={{ 
                        scale:1.1,
                     }} 
                     
                >
                   <Twitter /> Twitter
                </motion.button>
            
             </a>
        </div>

        <div className=' max-w-70  mx-auto '> 
            <a href='mailto:oreomoyeni01@gmail.com'
          >
                <motion.button 
                     className=' exo flex  gap-2 text-lg border border-white font-semibold bg-blend-darken rounded-4xl px-16 py-4'
                     whileHover={{ 
                        scale:1.1,
                     }} 
                     
                >
                    <Mail />  Send an email
                </motion.button>
            
             </a>
        </div>


       




    </div>
  )
}

export default SocialMedia