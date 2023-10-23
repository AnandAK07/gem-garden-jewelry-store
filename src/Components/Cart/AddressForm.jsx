import { useEffect, useState } from "react";
import css from "./AddressForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addAddressAction } from "../../Redux/AuthReducer/action";

const AddressForm = ({ isAddressPresent, setIsAddressPresent }) => {
    const userData = useSelector(store => store.authReducer.userData);
    const dispatch = useDispatch();

    const userDataHasAllFields = () => {
        if (userData.personal.firstName
            && userData.personal.lastName
            && userData.personal.phone
            && userData.personal.email
            && userData.shippingAddress.line1
            && userData.shippingAddress.line2
            && userData.shippingAddress.city
            && userData.shippingAddress.state
            && userData.shippingAddress.postalCode
        ) {
            console.log("User Data has all fields");
            return true;
        } else {
            console.log("User Data Does not have all the fields", userData);
            return false;
        }
    }

    const [addressData, setAddressData] = useState({ personal: { ...userData.personal }, shippingAddress: { ...userData.shippingAddress } });

    useEffect(() => {
        if (typeof setIsAddressPresent === "function") setIsAddressPresent(userDataHasAllFields());
    }, [userData, setIsAddressPresent]);

    console.log({ userData });

    const saveAddress = (e) => {
        e.preventDefault();
        console.log({ addressData });
        dispatch(addAddressAction(addressData));
    }



    return (
        <section style={{ border: "1px solid gray", padding: 10, borderRadius: 5, marginTop: 10 }}>

            <form style={{width: "100%"}} onSubmit={saveAddress}>
                <div className={css["area"]}>
                    <h3>PERSONAL INFORAMTION</h3>
                    <div className={css["row"]}>
                        <div className={css["col2"]}>
                            <label htmlFor="firstName">First Name</label><br />
                            <input
                                required
                                type="text"
                                id="firstName"
                                name="firstname"
                                value={addressData.personal.firstName}
                                onChange={({ target: { value } }) => setAddressData((state) => {
                                    let s = { ...state };
                                    s.personal.firstName = value;
                                    return s;
                                })}
                            />
                        </div>
                        <div className={css["col2"]}>
                            <label htmlFor="lastName">Last Name</label><br />
                            <input
                                required
                                type="text"
                                id="lastName"
                                name="lastname"
                                value={addressData.personal.lastName}
                                onChange={({ target: { value } }) => setAddressData((state) => {
                                    let s = { ...state };
                                    s.personal.lastName = value;
                                    return s;
                                })}
                            />
                        </div>
                    </div>
                    <div className={css["row"]}>
                        <div className={css["col2"]}>
                            <label htmlFor="lastName">Email</label><br />
                            <input
                                required
                                type="email"
                                id="lastName"
                                name="email"
                                value={addressData.personal.email}
                                onChange={({ target: { value } }) => setAddressData((state) => {
                                    let s = { ...state };
                                    s.personal.email = value;
                                    return s;
                                })}
                            />
                        </div>
                        <div className={css["col2"]}>
                            <label htmlFor="phoneNumber">Phone</label><br />
                            <input
                                required
                                type="text"
                                id="phone"
                                name="phone"
                                value={addressData.personal.phone}
                                onChange={({ target: { value } }) => setAddressData((state) => {
                                    let s = { ...state };
                                    s.personal.phone = value;
                                    return s;
                                })}
                            />
                        </div>

                    </div>
                    <br />
                    <h3>SHIPPING ADDRESS</h3>
                    <div>
                        <div className={css["row"]}>
                            <div className={css["col2"]}>
                                <label htmlFor="address1">Address line 1</label><br />
                                <input
                                    required
                                    type="text"
                                    id="address1"
                                    name="address1"
                                    value={addressData.shippingAddress.line1}
                                    onChange={({ target: { value } }) => setAddressData((state) => {
                                        let s = { ...state };
                                        s.shippingAddress.line1 = value;
                                        return s;
                                    })}
                                />
                            </div>
                            <div className={css["col2"]}>
                                <label htmlFor="address2">Address line 2</label><br />
                                <input
                                    required
                                    type="text"
                                    id="address2"
                                    name="address2"
                                    value={addressData.shippingAddress.line2}
                                    onChange={({ target: { value } }) => setAddressData((state) => {
                                        let s = { ...state };
                                        s.shippingAddress.line2 = value;
                                        return s;
                                    })}
                                />
                            </div>
                        </div>
                        <div className={css["row"]}>
                            <div className={css["col2"]}>
                                <label htmlFor="city">City</label><br />
                                <input
                                    required
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={addressData.shippingAddress.city}
                                    onChange={({ target: { value } }) => setAddressData((state) => {
                                        let s = { ...state };
                                        s.shippingAddress.city = value;
                                        return s;
                                    })}
                                />
                            </div>
                            <div className={css["col2"]}>
                                <label htmlFor="state">State</label><br />
                                <input
                                    required
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={addressData.shippingAddress.state}
                                    onChange={({ target: { value } }) => setAddressData((state) => {
                                        let s = { ...state };
                                        s.shippingAddress.state = value;
                                        return s;
                                    })}
                                />
                            </div>
                        </div>
                        <div className={css["row"]}>
                            <div className={css["col2"]}>
                                <label htmlFor="postal-code">Postal Code</label><br />
                                <input
                                    required
                                    type="text"
                                    id="postal-code"
                                    name="postal-code"
                                    value={addressData.shippingAddress.postalCode}
                                    onChange={({ target: { value } }) => setAddressData((state) => {
                                        let s = { ...state };
                                        s.shippingAddress.postalCode = value;
                                        return s;
                                    })}
                                />
                            </div>
                            <div className={css["col2"]}>
                                {/* <label htmlFor="country">Country</label><br />
                                <input required type="text" id="country" name="country" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 20 }}>
                    <input disabled={isAddressPresent} type="submit" value="Save" style={{ cursor: isAddressPresent ? "not-allowed" : "pointer", opacity: isAddressPresent ? 0.5 : 1 }} className={css["btn-submit"]} />
                </div>

            </form>
        </section >
    )

}

export default AddressForm;