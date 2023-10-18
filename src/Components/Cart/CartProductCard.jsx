import css from "./CartProductCard.module.css";

const CartProductCard = ({ cartProduct }) => {

    return (
        <>
            <div className={css['cart-product-container']}>
                <div className={css['cart-image-container']}>
                    <img src="" alt="" className={css['cart-image-container']}/>
                </div>
                <div>
                    <h2>{cartProduct.title}</h2>
                    {
                        (cartProduct.weight || cartProduct.size) &&
                        <p style={{display: "flex", gap: 10, alignItems: "center"}}>
                            {cartProduct.weight && <span>Weight: {cartProduct.weight}</span>}
                            {(cartProduct.weight || cartProduct.size) && <>|</>}
                            {cartProduct.size && <span>Size: {cartProduct.size}</span>}
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