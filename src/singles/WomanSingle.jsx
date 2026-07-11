import React from "react";
import { womanData } from "../data/woman";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../redux/cartSlice";

function WomanSingle() {
  const { id } = useParams();
const dispatch = useDispatch()
  const handleCartItem = ()=> {
    dispatch(addItem(product))
  }
  const product = womanData.find((item) => item.id === id);

  return (
    <div className="single-container">
      <div className="single-image">
        <img src={product.image} alt={product.model} />
      </div>

      <div className="single-details">
        <h1>{product.company}</h1>

        <h2>{product.model}</h2>

        <p className="category">{product.category}</p>

        <h3 className="price">₹ {product.price}</h3>

        <p className="desc">{product.description}</p>

        <button className="cart-btn"  onClick={()=>{handleCartItem(product)}}>Add to Cart</button>
      </div>
    </div>
  );
}

export default WomanSingle;