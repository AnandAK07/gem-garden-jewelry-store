import css from "./PaymentProductCard.module.css"

const PaymentProductCard = ({ cartProduct }) => {

    return (
        <>
            <div className={css['payment-product-container']}>
                <div className={css['payment-image-container']}>
                    <img src={cartProduct.image} alt="" className={css['payment-image-container']}/>
                </div>
                <div>
                    <h4>{cartProduct.title}</h4>
                </div>
                <div>
                    <p className="m-0">1</p>
                </div>
            </div>
        </>
    );
}

export default PaymentProductCard;