import React from "react";

const PaymentDetails = (props) => {

    const onPaymentChanged = () => {
        props.emitter.emit("paymentChanged", "Sep 2024");
    }

    return (
        <div>
            <h3>Payment Details</h3>
            <ul>
                <li><i>payment method: </i>credit card</li>
                <li><a href="#" onClick={onPaymentChanged}>Change payment method to PayPal</a></li>
            </ul>
        </div>
    );
}

export default PaymentDetails;
