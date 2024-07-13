import React, {useState} from "react";

const AccountDetails = (props) => {

    const [lastPaymentDate, setPaymentChanged] = useState("Jan 2021")

    props.emitter.on("paymentChanged", date => setPaymentChanged(date))

    return (
        <div>
            <h3>Account Details</h3>
            <ul>
                <li><i>name:</i> Amina</li>
                <li><i>surname:</i> Aljicevic</li>
                <li><i>email:</i> aljicevicamina@gmail.com</li>
                <li><i>member since:</i> September 2024</li>
                <li><i>last payment changed: </i>{lastPaymentDate}</li>
            </ul>
        </div>

    );
}

export default AccountDetails;
