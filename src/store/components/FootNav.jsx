
import React from 'react'
import { FaUserSecret } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";
import { LuBoxes } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";




function FootNav() {
  return (
    <div className="FooterNav">
        <div className="login-icon">
             <FaUserSecret />
             <span>You</span>
        </div>

         <div className="login-icon">
          <LuBoxes />
          <span>orders</span>

        </div>

        
         <div className="login-icon">
             <FaUserAlt />
             <span>About</span>


        </div>

        <div className="cart-icon">
             <Link id="link-cart" to={'/cart'}>
          <GiShoppingBag />
          <span>Cart</span>
          </Link>
        </div>
    </div>
  )
}

export default FootNav