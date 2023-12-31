var express = require("express");
var router = express.Router();
const postCharge = require("../stripePayment/stripe");

console.log("reached stripe post");
router.post("/charge/:projectid", postCharge);
console.log("after post route");

module.exports = router;
