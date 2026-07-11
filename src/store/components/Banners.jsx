
import React, { useEffect } from 'react'
import { useState } from 'react';

function Banners() {

    const [current,setCurrent] = useState(0)

    const images = ["/WhatsApp Image 2026-06-26 at 3.48.41 PM (2) - Copy.jpeg",
     "/WhatsApp Image 2026-06-26 at 3.48.42 PM - Copy (2).jpeg",
      "/slider-05 - Copy.jpeg",
       "/WhatsApp Image 2026-06-26 at 3.48.40 PM (1) - Copy.jpeg", 
       "/WhatsApp Image 2026-06-26 at 3.48.43 PM.jpeg",
        ];

        useEffect(()=>{
            const intervel = setInterval(()=>{
                setCurrent((prev)=>(prev+1) % images.length)
            },5000)

            return ()=> clearInterval(intervel)
        },[])
  return (
    <section className="banners-section">
       <div className="bannerImages">
         <img src={images[current]} key={current} alt="Slider" />
       </div>
    </section>
  )
}

export default Banners