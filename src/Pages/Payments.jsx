import useRazorpay from "react-razorpay";
import { useCallback, useState } from "react";
import css from "./Cart.module.css";
import PaymentProductCard from "../Components/Cart/PaymentProductCard";
import OrderSummary from "../Components/Cart/OrderSummary";
import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
import AddressForm from "../Components/Cart/AddressForm";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Payments = () => {
  const location = useLocation();
  const path = location.pathname.split("/")?.filter(d => d);
  console.log({path});
  const navigate = useNavigate();
  
  const [Razorpay] = useRazorpay();
  const cart = useSelector((store) => store.authReducer.cart);
  const userData = useSelector((store) => store.authReducer.userData);

  const [isAddressPresent, setIsAddressPresent] = useState(false);

  const handlePayment = useCallback(
    async (amountInRs) => {
      // const order = await createOrder(params); // commenting because this should ideally come from a backend

      const user = {
        name: `${userData?.personal?.firstName} ${userData?.personal?.lastName}`,
        email: `${userData?.personal?.email}`,
        contact: `${userData?.personal?.phone}`,
      };

      const options = {
        // key: process.env.REACT_APP_RZ_KEY_ID,
        key: `rzp_test_sXLjDxRmmjkSmE`,
        amount: `${amountInRs * 100}`,
        currency: "INR",
        name: "Team benevolent-boot-3435",
        description: "Test Transaction",
        // order_id: order.id,
        handler: (res) => {
          console.log(res);
          navigate("success");
        },
        prefill: user,
        theme: {
          color: "#ffba50",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay]
  );

  if (path.length > 1){
    if (path[1] === "success"){
      return <Outlet />
    }
  }

  return (
    <section style={{padding: "20px 0px"}}>
      {/* <h1>Payment</h1> */}
      <div className={css["cart-container"]}>
        <div style={{ flex: 2, margin: "30px 0px" }}>
          <h3>DELIVER TO</h3>
          <AddressForm isAddressPresent={isAddressPresent} setIsAddressPresent={setIsAddressPresent}/>
        </div>
        <div style={{ flex: 1 }}>
          <OrderSummary />
          {cart?.cart?.map((item, index) => {
            return <PaymentProductCard cartProduct={item} key={index} />;
          })}
        </div>
      </div>
      <div
        style={{
          boxShadow: "#edeaea 3px -8px 15px",
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
          padding: "20px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 1040,
            margin: "auto",
          }}
        >
          <h2>
            Total ({cart.totalItems} Items): ₹ {cart.finalPriceForCustomer}
          </h2>
          <button style={isAddressPresent ? {cursor: "pointer", opacity: 1} : {cursor: "not-allowed", opacity: 0.5}} onClick={() => handlePayment(cart.finalPriceForCustomer)}>
            Pay Online
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Payments;
