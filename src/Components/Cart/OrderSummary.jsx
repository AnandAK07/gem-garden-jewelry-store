import { useState } from "react";
import css from "./OrderSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import couponImage from "../../Assets/coupons.png";
import { addPromoAction, removePromoAction } from "../../Redux/AuthReducer/action";

const TabsEnum = {
  ENTER_CODE: "ENTER_CODE",
  VIEW_PROMO_CODES: "VIEW_PROMO_CODES",
};

const OrderSummary = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(TabsEnum.VIEW_PROMO_CODES);

  const totalMrp = useSelector(store => store.authReducer.cart.totalMrp);
  const nonPromoDiscountAmount = useSelector(store => store.authReducer.cart.nonPromoDiscountAmount);
  const promoDiscount = useSelector(store => store.authReducer.cart.promoDiscount);
  const finalPriceForCustomer = useSelector(store => store.authReducer.cart.finalPriceForCustomer);
  const appliedPromoCodes = useSelector(store => store.authReducer.cart.appliedPromoCodes);
  const availableCouponCodes = useSelector(store => store.authReducer.cart.availableCouponCodes);

  return (
    <>
      <div className={css["order-summary-container"]}>
        <div className={css["tabs-container"]}>
          <div className={css["tabs-header"]}>
            {/* <div
              className={activeTab === TabsEnum.ENTER_CODE ? css["active"] : ""}
              onClick={() => setActiveTab(TabsEnum.ENTER_CODE)}
            >
              Enter Code
            </div> */}
            <div
              className={
                activeTab === TabsEnum.VIEW_PROMO_CODES ? css["active"] : ""
              }
              onClick={() => setActiveTab(TabsEnum.VIEW_PROMO_CODES)}
            >
              Available Promo Codes
            </div>
          </div>
          <div className={css["tabs-body"]}>
            {activeTab === TabsEnum.ENTER_CODE ? (
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <input type="text" placeholder="Enter Coupon Code" style={{ padding: 10 }} />
                <button>Apply</button>
              </div>
            ) : (
              <>
                {availableCouponCodes?.map((d, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 10,
                      }}
                    >
                      <div style={{ background: "white", flex: 3, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid gray", borderRadius: 10 }}>
                        {d.code}
                      </div>
                      {
                        appliedPromoCodes?.code && appliedPromoCodes?.dsc && promoDiscount > 0 ?
                          <>
                            <p style={{ color: "green", flex: 1 }}>APPLIED</p>
                          </> :
                          <button style={{ width: "100%", flex: 1 }} onClick={() => dispatch(addPromoAction(d))}>Apply</button>
                      }
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <div className={css["order-summary-stats-container"]}>
          <h3>ORDER SUMMARY</h3>
          <p>
            <span>Sub Total</span>
            <span>₹ {totalMrp}</span>
          </p>
          <p>
            <span>Discount</span>
            <span>₹ -{totalMrp - nonPromoDiscountAmount}</span>
          </p>
          {
            appliedPromoCodes.code && appliedPromoCodes.dsc ?
            <p>
              <span>Promotional Discount</span>
              <span>₹ -{appliedPromoCodes.dsc}</span>
            </p>
            : null
          }
          <p>
            <span>Delivery Charge</span>
            <span>FREE</span>
          </p>
          <h4 style={{ textAlign: "left" }}>
            <span>TOTAL (Inc. of all Taxes.)</span>
            <span>₹ {finalPriceForCustomer}</span>
          </h4>
          <h4 style={{ color: "green", textAlign: "left" }}>
            <span>YOU SAVE</span>
            <span>+ ₹{totalMrp - finalPriceForCustomer}</span>
          </h4>
          {appliedPromoCodes.code && appliedPromoCodes.dsc ?
            <>
              <h3>PROMO CODES APPLIED</h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10, border: "1px solid black", borderRadius: 10 }}>
                <img src={couponImage} alt="Coupon" width={`20px`} />
                <p>{appliedPromoCodes.code}</p>
                <p style={{ textDecoration: "underline", color: "black", cursor: "pointer" }}
                  onClick={() => dispatch(removePromoAction())}
                >
                  remove
                </p>
              </div>

            </>
            : null}
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
