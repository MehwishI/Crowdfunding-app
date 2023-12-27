import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
//import axios from "axios";
import "./CheckoutForm.css";

const CheckoutForm = ({ selectedProject }) => {
  //  if (selectedProduct === null) history.push('/')
  const stripe = useStripe();
  const elements = useElements();

  const [receiptUrl, setReceiptUrl] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const { token } = await stripe.createToken();

    const order = await fetch(
      `http://localhost:3001/api/stripe/charge/${selectedProject.id}`,
      {
        amount: donationAmount,
        source: token.id,
        receipt_email: "customer@example.com",
      }
    );

    setReceiptUrl(order.data.charge.receipt_url);
  };

  if (receiptUrl) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={receiptUrl}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    );
  }
  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <label>Enter Amount:</label>
        <input value={donationAmount} onChange={setDonationAmount} />
        <label>
          Card details
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCvcElement />
        </label>
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
