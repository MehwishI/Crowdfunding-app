var express = require("express");
var router = express.Router();
const postCharge = require("../stripePayment/stripe");

router.post("/charge/:projectid", postCharge);

module.exports = router;
