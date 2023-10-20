import { useState } from "react";
import css from "./OrderSummary.module.css";
import { useSelector } from "react-redux";

const TabsEnum = {
  ENTER_CODE: "ENTER_CODE",
  VIEW_PROMO_CODES: "VIEW_PROMO_CODES",
};

const OrderSummary = () => {
  const [activeTab, setActiveTab] = useState(TabsEnum.ENTER_CODE);

  const totalMrp = useSelector(store => store.authReducer.cart.totalMrp);
  const totalPrice = useSelector(store => store.authReducer.cart.totalPrice);

  const [availableCouponCodes] = useState([
    {
      code: "welcome500",
      dsc: "500",
    },
  ]);

  return (
    <>
      <div className={css["order-summary-container"]}>
        <div className={css["tabs-container"]}>
          <div className={css["tabs-header"]}>
            <div
              className={activeTab === TabsEnum.ENTER_CODE ? css["active"] : ""}
              onClick={() => setActiveTab(TabsEnum.ENTER_CODE)}
            >
              Enter Code
            </div>
            <div
              className={
                activeTab === TabsEnum.VIEW_PROMO_CODES ? css["active"] : ""
              }
              onClick={() => setActiveTab(TabsEnum.VIEW_PROMO_CODES)}
            >
              View Promo Codes
            </div>
          </div>
          <div className={css["tabs-body"]}>
            {activeTab === TabsEnum.ENTER_CODE ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input type="text" placeholder="Enter Coupon Code" />
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
                      <div style={{ background: "white", flex: 1 }}>
                        {d.code}
                      </div>
                      <button>Apply</button>
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
            <span>₹ -{totalMrp - totalPrice}</span>
          </p>
          <p>
            <span>Delivery Charge</span>
            <span>FREE</span>
          </p>
          <h4 style={{ textAlign: "left" }}>
            <span>TOTAL (Inc. of all Taxes.)</span>
            <span>₹ {totalPrice}</span>
          </h4>
          <h4 style={{ color: "green", textAlign: "left" }}>
            <span>YOU SAVE</span>
            <span>+ ₹{totalMrp - totalPrice}</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
