
import React from 'react'
import Products from '../store/components/Products'
import NavBar from '../store/components/NavBar'
import Banners from '../store/components/Banners'
import Chains from '../store/components/Chains'
import FootNav from '../store/components/FootNav'

function LandingPage() {
  return (
    <div>
      <NavBar/>
      <Banners/>
      <Chains/>
       <div className="products-section">
         <Products/>
       </div>
       <FootNav/>
    </div>
  )
}

export default LandingPage