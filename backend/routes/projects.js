var express = require("express");
var router = express.Router();
var projectQueries = require("../db/queries/projects");

// Get all projects
router.get("/", async (req, res) => {
  //let projects = await projectQueries.getProjects();

  //const userid = req.cookies.userid;
  await projectQueries
    .getProjects()

    .then((projectsData) => {
      // res.status(200).send(`Project(s) found for user ${req.params.userid}!`);
      // console.log("projects returned:", projectsData);

      res.json({ projectsData });
    })
    .catch((error) => {
      console.error("Error retrieving projects :", error);
      res.status(403).send(`No projects found !`);
      return null;
    });
});

// Display a single project
router.get("/:id", async (req, res) => {
  // let project = await projectQueries.getProjectById(req.params.id);
  // if (project) {
  //   //Display project
  //   res.status(200).send(`Project ${req.params.id} found!`);
  // } else {
  //   res.status(403).send(`Project ${req.params.id} not found!`);
  // }
});

// Show project creation page
router.get("/create", async (req, res) => {
  //Show create project component? YES
});

// Delete a project
router.post("/delete/:id", async (req, res) => {
  //Stretch
});

// Display projects belonging to a user
router.get("/user/:userid", async (req, res) => {
  // console.log("reached project route");
  //console.log("userid cookie", req.cookies.userid);

  const userid = req.cookies.userid;
  await projectQueries
    .getProjectsByUserId(userid)

    .then((projectsData) => {
      // res.status(200).send(`Project(s) found for user ${req.params.userid}!`);
      // console.log("projects returned:", projectsData);

      res.json({ projectsData });
    })
    .catch((error) => {
      console.error("Error retrieving projects by user ID:", error);
      res.status(403).send(`No projects found for user ${userid}!`);
      return null;
    });

  // if (projects) {
  //Display projects
  //   res.status(200).send(`Project(s) found for user ${req.params.userid}!`);
  //   return projects;
  // } else {
  //   res.status(403).send(`No projects found for user ${req.params.userid}!`);
  // }
});

module.exports = router;
