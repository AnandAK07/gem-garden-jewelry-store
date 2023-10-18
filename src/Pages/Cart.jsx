import React, { useEffect, useState } from 'react'
import css from "./Cart.module.css";
import PincodeChecker from '../Components/Cart/PincodeChecker';
import CartProductCard from '../Components/Cart/CartProductCard';
import { useCartContext } from '../Components/Cart/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  // const userData = useSelector(store => store.authReducer.user);
  const userData = null;
  const {cartItems, totalPrice, totalItems} = useCartContext();
  
  return (
    <>
      <h1>Cart</h1>
      <div className={css['cart-container']}>
        <div style={{ flex: 2, margin: "30px 0px" }}>
          <PincodeChecker />
          <hr />
          {
            cartItems?.map((item, index) => {
              return (
                <>
                  <CartProductCard cartProduct={item} key={index} />
                  <hr />
                </>
              )
            })
          }
        </div>
        <div style={{ flex: 1 }}>

        </div>
      </div>
      <div style={{ boxShadow: "#edeaea 3px -8px 15px", position: "absolute", bottom: 0, width: "100vw", backgroundColor: "white", padding: "20px 0px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 992, margin: "auto" }}>
          <h2>Total ({totalItems} Items): ₹ {totalPrice}</h2>
          <Link to="/pay">Proceed to Checkout</Link>
        </div>
      </div>
    </>
  )
}

export default Cart