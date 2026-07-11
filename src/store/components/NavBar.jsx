import React from "react";
import { FaItalic, FaUserSecret } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";


function NavBar() {
    const { search, setSearch } = useContext(SearchContext);
  return (
    <>
      <div className="navSection">
       <div className="navContainer">
         <div className="title">
          <Link id="link-company" to={'/'}>
        <h2> m-kart  </h2>
          </Link>
         
        </div>

        <div className="search">
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search..." className="inputField" />
        </div>

        <div className="user">
          <FaUserSecret />
        </div>

        <div className="cart">
          <Link id="link-cart" to={'/cart'}>
          <GiShoppingBag />
          </Link>
          
        </div>
       </div>
      </div>

      <div className="subMenu">
        <ul>
          <Link id="link" to={"/mobiles"}>
            <li>Mobiles</li>
          </Link>
          <Link id="link" to={"/computers"}>
            {" "}
            <li>Computers</li>
          </Link>
          <Link id="link" to={"/watch"}>
            {" "}
            <li>Watches</li>
          </Link>
          <Link id="link" to={"/men"}>
            {" "}
            <li>Men Fashion</li>
          </Link>
          <Link id="link" to={"/woman"}>
            {" "}
            <li>Women Dresssing</li>
          </Link>
          <Link id="link" to={"/furniture"}>
            {" "}
            <li>Furniture</li>
          </Link>
          <Link id="link" to={"/ac"}>
            {" "}
            <li>Ac</li>
          </Link>
          <Link id="link" to={"/kitchen"}>
            {" "}
            <li>Kitchen</li>
          </Link>
          <Link id="link" to={"/speakers"}>
            {" "}
            <li>Speakers</li>
          </Link>
          <Link id="link" to={"/tv"}>
            {" "}
            <li>Tv's</li>
          </Link>

           <Link id="link" to={"/fridges"}>
            {" "}
            <li>Fridges</li>
          </Link>
          
          
          <Link id="link" to={"/books"}>
            {" "}
            <li>Books</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
