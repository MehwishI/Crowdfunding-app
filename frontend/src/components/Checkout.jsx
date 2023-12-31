import React, { useEffect } from "react";
//import { StripeProvider, Elements } from "react-stripe-elements";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePublishableKey =
  "pk_test_51OGSmrGBWq3wvvTYs1Ig4o0uCrI4vpUr2Dd0k9synE4b2F5zjkvke5y6d1nVvb4lXw4wExdaTo4gIuOQoaAy2tSE00mYzgTgDp";
const stripePromise = loadStripe(stripePublishableKey);

const Checkout = () => {
  const location = useLocation();
  const selectedProject = location.state?.selectedProject;

  // console.log("selectedProject received in Checkout compoent", selectedProject);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret:
  //     "{{sk_test_51OGSmrGBWq3wvvTY9fL3qOZQGvTIj5987Cgxmwts8TyIIMBWg7MAoWDrDNMSm3JUq4sqRa9R8lzErgANCID7yN9A00c5tJbkP2}}",
  // };

  return (
    // <StripeProvider apiKey="pk_test_51OGSmrGBWq3wvvTYs1Ig4o0uCrI4vpUr2Dd0k9synE4b2F5zjkvke5y6d1nVvb4lXw4wExdaTo4gIuOQoaAy2tSE00mYzgTgDp">
    //   <Elements>
    //     <CheckoutForm selectedProduct={selectedProduct} />
    //   </Elements>
    // </StripeProvider>
    <Elements stripe={stripePromise}>
      <CheckoutForm selectedProject={selectedProject} />
    </Elements>
  );
};

export default Checkout;
