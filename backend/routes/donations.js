var express = require("express");
var router = express.Router();
module.exports = router;
const donationQueries = require("../db/queries/donations");
//donation routes

//GET: all donations

router.get("/", async (req, res) => {
  // const projectId = req.params.projectid;
  await donationQueries
    .getDonations()
    .then((donationsdata) => {
      res.json({ donationsdata });
    })
    .catch((error) => {
      console.error("Error retrieving all donations :", error);
      return null;
    });
});

//GET: list of all donations made for a project id
//getDonationsByProjectId
router.get("/project/:projectid", async (req, res) => {
  const projectId = req.params.projectid;
  await donationQueries
    .getDonationsByProjectId(projectId)
    .then((donationsdata) => {
      res.json({ donationsdata });
    })
    .catch((error) => {
      console.error("Error retrieving donations by project ID:", error);
      return null;
    });
});

//GET: list of all donations made by a user id
//getDonationsByUserId
router.get("/userid", async (req, res) => {
  const userId = req.cookies.userid;
  await donationQueries
    .getDonationsByUserId(userId)
    .then((donationsdata) => {
      res.json({ donationsdata });
    })
    .catch((error) => {
      console.error("Error retrieving donations by user ID:", error);
      return null;
    });
});

//GET : get details for donation by a donation Id
//getDonationById
router.get("/:donationid", async (req, res) => {
  const donationId = req.params.donationid;
  await donationQueries
    .getDonationById(donationId)
    .then((donationsdata) => {
      res.json({ donationsdata });
    })
    .catch((error) => {
      console.error("Error retrieving donations by donation ID:", error);
      return null;
    });
});
//in progess (by Mehwish)
//POST: make a donation (payment)
///payment stripe
