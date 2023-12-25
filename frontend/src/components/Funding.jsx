import React from "react";
import "./style.css";
import Donation from "./Donation";

const Funding = (props) => {
  // console.log("reached funding component:", props.donationsData);
  const { donationsData } = props;

  if (!donationsData) {
    return <div>Loading data..</div>;
  }

  // Check if donationsData is indeed an array before calling .map
  const donationsList = Array.isArray(donationsData)
    ? donationsData.map((donation) => (
        <Donation key={donation.id} donation={donation} />
      ))
    : null;
  // $(funding).append(donationsList);

  return <div className="funding">{donationsList}</div>;
};

export default Funding;
