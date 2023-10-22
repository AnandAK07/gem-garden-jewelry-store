import React, { useEffect } from 'react'
import css from "./Cart.module.css";
import PincodeChecker from '../Components/Cart/PincodeChecker';
import CartProductCard from '../Components/Cart/CartProductCard';
import { Link, useNavigate } from 'react-router-dom';
import OrderSummary from '../Components/Cart/OrderSummary';
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer'
import emptyCartImage from "../Assets/emptyCart.png";

const Cart = () => {
  // const userData = useSelector(store => store.authReducer.user);
  const userData = null;
  const navigate = useNavigate();
  const cart = useSelector(store => store.authReducer.cart);

  useEffect(() => {
    console.log({ cart });
  });

  return (
    <>
      {cart?.cart?.length > 0 ? <>
        <div className={css['cart-container']}>
          <div style={{ flex: 2, margin: "30px 0px" }}>
            <PincodeChecker />
            <hr />
            {
              cart?.cart?.map((item, index) => {
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
            <OrderSummary />
          </div>
        </div>
        <div style={{ boxShadow: "#edeaea 3px -8px 15px", position: "sticky", bottom: 0, backgroundColor: "white", padding: "20px 0px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 1040, margin: "auto" }}>
            <h2>Total ({cart.totalItems} Items): ₹ {cart.finalPriceForCustomer}</h2>
            <Link to="/pay">Proceed to Checkout</Link>
          </div>
        </div>
      </> : 
      <div style={{display: "flex", justifyContent: "center", alignItems:"center", flexDirection: "column", margin: 20, gap: 20}}>
        <img src={emptyCartImage} style={{width:"40%"}}/>
        <h1>No Items in Cart</h1>
        <button onClick={()=>navigate("/")}>Shop</button>
      </div>
      }
        <Footer />
      </>
  )
}

      export default Cart