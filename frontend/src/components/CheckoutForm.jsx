import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TopNavigation from "./TopNavigation";
import "./CheckoutForm.css";
import { saveDonationData } from "../helpers/saveDonationData";
import { updateProjectFunding } from "../helpers/updateProjectFunding";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { getRewardsByProjectId } from "../helpers/getRewardsData";

const CheckoutForm = ({ selectedProject }) => {
  //  if (selectedProduct === null) history.push('/')
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  let receiptUrl = null;
  let success = false;
  //const [receiptUrl, setReceiptUrl] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);
  if (!stripe || !elements) {
    // Stripe.js hasn't yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }

  // const cardNumber = elements.getElement(CardNumberElement);
  // const cardExpiry = elements.getElement(CardExpiryElement);
  // const cardCvc = elements.getElement(CardCvcElement);

  // cardNumber.on("change", function (event) {
  //   var displayError = document.getElementById("card-errors");
  //   if (event.error) {
  //     displayError.textContent = event.error.message;
  //   } else {
  //     displayError.textContent = "";
  //   }
  // });
  // cardExpiry.on("change", function (event) {
  //   var displayError = document.getElementById("card-errors");
  //   if (event.error) {
  //     displayError.textContent = event.error.message;
  //   } else {
  //     displayError.textContent = "";
  //   }
  // });
  // cardCvc.on("change", function (event) {
  //   var displayError = document.getElementById("card-errors");
  //   if (event.error) {
  //     displayError.textContent = event.error.message;
  //   } else {
  //     displayError.textContent = "";
  //   }
  // });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const cardElement = elements.getElement(CardNumberElement);
    //const cardExpiry = elements.getElement(CardExpiryElement);
    //const cardCvc = elements.getElement(CardCvcElement);

    // cardElement.on("change", function (event) {
    //   var displayError = document.getElementById("card-errors");
    //   if (event.error) {
    //     displayError.textContent = event.error.message;
    //   } else {
    //     displayError.textContent = "";
    //   }
    // });
    // cardExpiry.on("change", function (event) {
    //   var displayError = document.getElementById("card-errors");
    //   if (event.error) {
    //     displayError.textContent = event.error.message;
    //   } else {
    //     displayError.textContent = "";
    //   }
    // });
    // cardCvc.on("change", function (event) {
    //   var displayError = document.getElementById("card-errors");
    //   if (event.error) {
    //     displayError.textContent = event.error.message;
    //   } else {
    //     displayError.textContent = "";
    //   }
    // });
    elements.submit().then(function (result) {
      // Handle result.error
      var displayError = document.getElementById("card-errors");
      if (result.error) {
        console.log("Card elements error ", result.error.message);

        displayError.textContent = result.error.message;
        return;
      } else {
        displayError.textContent = "";
      }
    });

    //creating token
    let token = null;

    await stripe
      .createToken(cardElement)
      .then((result) => {
        console.log("token created successfully,token api", result.token);
        token = result.token;
      })
      .catch((error) => {
        console.error("error occurred", error);
      });
    const payload = {
      amount: donationAmount * 100,
      //currency: "usd",
      source: token.id,
      receipt_email: "mehwish219@outlook.com",
    };
    console.log("donatin amount", donationAmount);
    const response = await fetch(`/api/stripe/charge/${selectedProject.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const order = await response.json();
      //console.log("order response received from fetch", order.charge.amount);
      success = true;
      receiptUrl = order.charge.receipt_url;

      //
      //save donation payment info to db
      const donationData = {
        //userid
        donor_id: Cookies.get("userid"),
        ///projectid
        project_id: selectedProject.id,
        //amount
        funding_amount: order.charge.amount / 100,
        //chargeid
        charge_id: order.charge.id,
        //date
        donation_date: new Date(),
      };
      const result = saveDonationData(donationData);
      if (success) {
        //update project increase-curent funding-,
        //call a helper function
        const result1 = updateProjectFunding(
          selectedProject.id,
          order.charge.amount
        );
        if (result1 && result) {
          console.log("project funding upadated successfully!");
        } else {
          console.log("project funding not upadated!");
        }

        //getrewards data
        const rewards = await getRewardsByProjectId(selectedProject.id);
        console.log("rewards returned in checkoutform", rewards);
        const data = { receiptUrl: receiptUrl, rewards: rewards };

        navigate("/donate/paymentsuccess", {
          state: { data },
        });
      }
    }

    //setReceiptUrl(order.receipt_url);
  };

  return (
    <div>
      <TopNavigation />
      <div className="checkout-form">
        <h3>Make a donation</h3>
        <form onSubmit={handleSubmit}>
          <label>Enter Amount:</label>
          <input
            name="donationAmount"
            value={donationAmount}
            onChange={(e) => {
              setDonationAmount(e.target.value);
            }}
            required
          />
          <label>
            Card details
            <CardNumberElement required />
          </label>
          <label>
            Expiration date
            <CardExpiryElement required />
          </label>
          <label>
            CVC
            <CardCvcElement required />
          </label>
          <button type="submit" className="order-button">
            Pay
          </button>
          <label id="card-errors" className="card-errors">
            Error will be displayed here
          </label>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
