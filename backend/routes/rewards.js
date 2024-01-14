var express = require("express");
var router = express.Router();
var rewardsQueries = require("../db/queries/rewards");

router.get("/:projectid", async (req, res) => {
  const projectid = req.params.projectid;
  await rewardsQueries
    .getRewardsbyProjectId(projectid)

    .then((rewardsData) => {
      // res.status(200).send(`Project(s) found for user ${req.params.userid}!`);
      console.log("rewards returned by route:", rewardsData);

      res.json({ rewardsData });
    })
    .catch((error) => {
      console.error("Error retrieving rewards by project ID:", error);
      res.status(403).send(`No rewards found for user ${userid}!`);
      return null;
    });
});

router.post("/create", async (req, res) => {
  const reward = req.body;

  await rewardsQueries
    .addReward(reward)
    .then((result) => {
      console.log("result after creating reward:", result);
      res.status(200).send(result);
      // return result;
    })
    .catch((error) => {
      console.error("Error saving reward data:", error);
      return null;
    });
});

module.exports = router;
