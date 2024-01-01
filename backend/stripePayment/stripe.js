var express = require("express");
var router = express.Router();
//const postCharge = require("stripe");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function postCharge(req, res) {
  try {
    const { amount, source, receipt_email } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: "cad",
      source,
      receipt_email,
    });
    console.log("charge after create charge", charge);

    if (!charge) throw new Error("charge unsuccessful");

    res.status(200).json({
      charge,
      message: "charge posted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = postCharge;
