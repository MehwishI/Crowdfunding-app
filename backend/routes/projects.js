var express = require("express");
var router = express.Router();
var projectQueries = require("../db/queries/projects");

// Get all projects
router.get("/", async (req, res) => {
  //const userid = req.cookies.userid;
  await projectQueries
    .getProjects()

    .then((projectsData) => {
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

router.post("/create", async (req, res) => {
  //Show create project component? YES

  const project = req.body;

  await projectQueries
    .addProject(project)
    .then((result) => {
      console.log("result:", result);
      res.status(200).send("Project data saved sucessfully in database!");
    })
    .catch((error) => {
      console.error("Error saving project data:", error);
      return null;
    });
});
router.post("/edit", async (req, res) => {
  //Show edit project component? YES

  const project = req.body;

  await projectQueries
    .editProject(project)
    .then((result) => {
      console.log("result:", result);
      res.status(200).send("Project data saved sucessfully in database!");
    })
    .catch((error) => {
      console.error("Error saving project data:", error);
      return null;
    });
});

// Delete a project
router.post("/delete/:id", async (req, res) => {
  //Stretch
  await projectQueries
    .deleteProject(req.params.id)
    .then((result) => {
      console.log("result:", result);
      res.status(200).send("Project data deleted sucessfully from database!");
    })
    .catch((error) => {
      console.error("Error deleting project data:", error);
      return null;
    });
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
//update project details
//reduce funding target by funding amount and incraease current funding ( Alex you want to work on this?)
router.post("/update/funding", async (req, res) => {
  const projectId = req.body.projectId;
  const funding_amount = req.body.funding_amount;
  await projectQueries
    .updateProjectFunding(projectId, funding_amount)
    .then((result) => {
      console.log("result:", result);
      res.status(200).send("project funding updated sucessfully in database!");
    })
    .catch((error) => {
      console.error("Error updating project funding:", error);
      return null;
    });
});
module.exports = router;
