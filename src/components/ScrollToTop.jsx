import React from 'react'
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";


const ScrollToTop = () => {
    
    
        // Scroll-to-top button
    
        const [visible, setVisible] = useState(false);
    
        useEffect(() => {
            const handleScroll = () => setVisible(window.scrollY > 200); // show after 200px
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    
    




  return (
    <div>
        <button
            className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-opacity ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={scrollToTop}
            >
             <ChevronUp />
        </button> 
    
    </div>
  )
}

export default ScrollToTop