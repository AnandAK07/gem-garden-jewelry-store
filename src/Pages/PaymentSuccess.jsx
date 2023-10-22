import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import orderPlaced from "../Assets/order-placed.gif";
import { emptyCart } from "../Redux/AuthReducer/action";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const PaymentSuccess = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(store => store.authReducer.cart);
    const [timeLeft, setTimeLeft] = useState(5);

    if (cart.cart.length === 0){
        navigate("/cart");
    }

    useEffect(()=>{
        setInterval(()=>{
            setTimeLeft(t => {
                let n = t - 1;
                return n;
            });
        }, 1000);
    }, []);
    
    useEffect(()=> {
        if (timeLeft === 0){
            navigate("/");
        }
    }, [timeLeft, navigate]);

    useEffect(()=> {
        dispatch(emptyCart());
    }, []);

    useEffect(()=>{
        console.log({cart});
    }, [cart]);

    return (
        <>
            {/* <Navbar /> */}
            <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center", gap: 20, minHeight: "70vh"}}>
                <img src={orderPlaced} alt="" />
                <h1>Your order was placed successfully</h1>
                <Link sty to="/">Redirecting you to home page in {timeLeft}</Link>
            </div>
            <Footer />
        </>
    );
}

export default PaymentSuccess;