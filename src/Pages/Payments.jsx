import useRazorpay from "react-razorpay";
import { useCallback } from "react";
import { useCartContext } from "../Components/Cart/CartContext";
import css from "./Cart.module.css";
import CartProductCard from "../Components/Cart/CartProductCard";

const Payments = () => {
    const [Razorpay] = useRazorpay();
    const { cartItems, totalPrice, totalItems } = useCartContext();

    const handlePayment = useCallback(async (amountInRs) => {
        // const order = await createOrder(params); // commenting because this should ideally come from a backend

        const userData = {
            name: "Akshay Lilani",
            email: "my.fake.email@internet.com",
            contact: "9999999999",
        }

        const options = {
            key: process.env.REACT_APP_RZ_KEY_ID,
            amount: `${amountInRs}`,
            currency: "INR",
            name: "Team benevolent-boot-3435",
            description: "Test Transaction",
            // order_id: order.id,
            handler: (res) => {
                console.log(res);
            },
            prefill: userData,
            theme: {
                color: "#ffba50",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay]);

    return (
        <>
            <h1>Payment</h1>
            <div className={css['cart-container']}>
                <div style={{ flex: 2, margin: "30px 0px" }}>
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
                    <button onClick={() => handlePayment(totalPrice)}>Pay Online</button>
                </div>
            </div>
        </>
    );
}

export default Payments;