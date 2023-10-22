import css from "./CartProductCard.module.css";

const CartProductCard = ({ cartProduct }) => {

    return (
        <>
            <div className={css['cart-product-container']}>
                <div className={css['cart-image-container']}>
                    <img src={cartProduct.image} alt="" className={css['cart-image-container']}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: 20}}>
                    <h2>{cartProduct.title}</h2>
                    {
                        (cartProduct.description) &&
                        <p style={{display: "flex", gap: 10, alignItems: "center", color: "gray"}}>
                            {cartProduct.description}
                        </p>
                    }
                    <div style={{display: "flex", gap: 10, alignItems: "center"}}>
                        <h3>₹ {cartProduct.discountedPrice}</h3>
                        {cartProduct.mrp && <strike>₹ {cartProduct.mrp}</strike>}
                    </div>
                </div>
                <div>
                    <p className="m-0">1</p>
                </div>
            </div>
        </>
    );
}

export default CartProductCard;