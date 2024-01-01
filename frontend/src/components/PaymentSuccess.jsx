import { useLocation, Link } from "react-router-dom";
import React from "react";
import TopNavigation from "./TopNavigation";

const PaymentSuccess = () => {
  const { state } = useLocation();
  return (
    <div>
      <TopNavigation />
      <div className="success">
        <h2>Thank you for making a donation!</h2>
        <a href={state.receiptUrl}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default PaymentSuccess;
