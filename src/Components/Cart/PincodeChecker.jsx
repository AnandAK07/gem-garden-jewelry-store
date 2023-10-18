import { useEffect, useState } from "react";
import css from "./PincodeChecker.module.css";

const PincodeChecker = () => {
    const [pincode, setPincode] = useState('');
    const [errorMsg, setErrorMessage] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    useEffect(() => {
        const validPincodes = ["421004", "400301"];
        if (pincode.length === 6) {
            if (validPincodes.includes(pincode)) {
                setSuccessMsg("This Pincode is deliverable.");
                setErrorMessage(null);
            } else {
                setErrorMessage("This Pincode is not deliverable.");
                setSuccessMsg(null);
            }
        } else if (pincode.length < 6) {
            //do nothing
            setErrorMessage(null);
            setSuccessMsg(null);
        }
    }, [pincode]);

    return (
        <>
            <div className={css['pincode-checker-container']}>
                <h4>Check Delivery Info</h4>
                <div>
                    <input type="text" name="pincode" placeholder="Pincode" value={pincode} onChange={({ target: { value } }) => value.length <= 6 ? setPincode(value) : null} />
                    <button type="submit">Check</button>
                </div>
            </div>
            {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        </>
    )
}

export default PincodeChecker;