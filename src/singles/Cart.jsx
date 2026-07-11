import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

function Cart() {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item)=> {
    dispatch(removeItem(item))
  }


  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );


  return (
    <div className="cart-container">

      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty.
        </p>

      ) : (

        <>

          <div className="cart-items-list">

            {cartItems.map((item) => (

              <div key={item.id} className="cart-item">

                <img 
                  src={item.image} 
                  alt={item.model}
                  style={{ width: "100px" }}
                />


                <div>

                  <h3>
                    {item.company} {item.model}
                  </h3>

                  <p>
                    Price: ₹ {item.price}
                  </p>


                  <button
                    className="remove-btn"
                    onClick={() =>{handleRemove(item.id)}}
                  >
                    Remove
                  </button>


                </div>

              </div>

            ))}

          </div>


          <div className="cart-total">

            <h2>
              Total: ₹ {totalPrice}
            </h2>

            <button className="checkout-btn">
              Checkout
            </button>

          </div>


        </>

      )}

    </div>
  );
}

export default Cart;