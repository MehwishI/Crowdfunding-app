import React from "react";
import "./style.css";

const Donation = (props) => {
  const { donation } = props;

  return (
    <div className="donation_box">
      <h2 className="donation_project_name">{donation.project_name}</h2>
      <span className="donation_box_funds">
        Thank you for raising &nbsp;
        {(donation.funding_amount || " ").toLocaleString("en-US", {
          style: "currency", // This is a slower and obsolete formatting function, but it won't matter for this small a project
          currency: "CAD",
        })}{" "}
      </span>{" "}
      <br />
      <div>
        Date:{" "}
        {donation.donation_date instanceof Date
          ? donation.donation_date.toLocaleDateString("en-CA")
          : new Date(donation.donation_date).toLocaleDateString()}
      </div>
    </div>
  );
};

export default Donation;
