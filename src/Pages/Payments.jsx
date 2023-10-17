import useRazorpay from "react-razorpay";
import { useCallback } from "react";

const Payments = () => {
    const [Razorpay] = useRazorpay();
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
        <div className="App">
            <button onClick={()=>handlePayment(10000)}>Click</button>
        </div>
    );
}

export default Payments;