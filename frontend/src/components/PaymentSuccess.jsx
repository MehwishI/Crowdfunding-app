import { useLocation, Link } from "react-router-dom";
import React from "react";
import TopNavigation from "./TopNavigation";

const PaymentSuccess = () => {
  const { state } = useLocation();
  console.log("state received", state);
  const reward = state.data.rewards?.rewardsData[0];
  return (
    <div>
      <TopNavigation />
      <div className="success">
        <h2>Thank you for making a donation!</h2>
        {reward && (
          <div>
            <h3>
              Congratulations! You have won a {reward.quantity} {reward.title}
            </h3>
            {reward.location && <h3>at {reward.location}</h3>}
            <p>More details will be sent to your registered email address.</p>
          </div>
        )}
        <a href={state.data.receiptUrl}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default PaymentSuccess;
