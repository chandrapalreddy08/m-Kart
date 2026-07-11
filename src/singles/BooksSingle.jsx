import React from "react";
import { booksData } from "../data/books";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../redux/cartSlice";
 
function BooksSingle() {
  const { id } = useParams();

  const product = booksData.find((item) => item.id === id);

  const dispatch = useDispatch()
  const handleCartItem = ()=> {
    dispatch(addItem(product))
  }

  return (
    <div className="single-container">
      <div className="single-image">
        <img src={`/${product.image}`} alt={product.title} />
      </div>

      <div className="single-details">
        <h1>{product.author}</h1>

        <h2>{product.title}</h2>

        <p className="category">{product.category}</p>

        <h3 className="price">₹ {product.price}</h3>

        <p className="desc">{product.description}</p>

        <button className="cart-btn"  onClick={()=>{handleCartItem(product)}}>Add to Cart</button>
      </div>
    </div>
  );
}

export default BooksSingle;