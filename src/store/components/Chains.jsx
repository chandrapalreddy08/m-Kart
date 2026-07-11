
import React from 'react'

function Chains() {

    const images = [
    "/WhatsApp Image 2026-06-26 at 3.40.15 PM (1).jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.16 PM (1).jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.15 PM.jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.16 PM.jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.17 PM (1).jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.18 PM (1).jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.18 PM.jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.19 PM (1).jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.19 PM.jpeg",
    "/WhatsApp Image 2026-06-26 at 3.40.20 PM.jpeg",
  ];
  return (
   <section className="chains-section">
      {images.map((imageSrc, index) => {
        return <div className="chains">
          <img src={imageSrc} key={index} alt="" />
        </div>;
      })}
    </section>
  )
}

export default Chains