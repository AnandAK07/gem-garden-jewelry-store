import { createContext, useContext, useState, useEffect } from "react"

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [totalMrp, setTotalMrp] = useState(null);

    useEffect(() => {
        const tempCartItems = [
            {
                title: "Splendid Filigree Work Gold Bangle",
                weight: "10.809 g",
                size: "45 * 55 MM",
                quantity: 1,
                discountedPrice: "77080",
                mrp: "78548",
                image: ""
            },
            {
                title: "Traditional Fancy Graceful Gold Drop Earrings",
                weight: "3.827 g",
                size: "",
                quantity: 1,
                discountedPrice: "27698",
                mrp: "27698",
                image: ""
            }
        ];

        let total_items = tempCartItems.reduce((acc, curr) => acc + curr.quantity, 0);
        setTotalItems(total_items);
        let total_price = tempCartItems.reduce((acc, curr) => acc + (+curr.discountedPrice * curr.quantity), 0);
        setTotalPrice(total_price);
        let total_mrp = tempCartItems.reduce((acc, curr) => acc + (+curr.mrp * curr.quantity), 0);
        setTotalMrp(total_mrp);

        setCartItems(tempCartItems);
    }, []);

    return <cartContext.Provider value={{ cartItems, setCartItems, totalPrice, setTotalPrice, setTotalItems, totalItems, totalMrp, setTotalMrp }}>
        {children}
    </cartContext.Provider>
}

export const useCartContext = () => {
    return useContext(cartContext);
}