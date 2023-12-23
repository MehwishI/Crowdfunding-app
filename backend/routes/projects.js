var express = require('express');
var router = express.Router();
var projectQueries = require('../db/queries/projects')

// Get all projects
router.get('/api/projects', async (req,res)=> {
  let projects = await projectQueries.getProjects();
  
  if (projects) {
    //res.render('projects')
  } else {
    res.status(403).send(`No projects found!`);
  }
})

// Display a single project
router.get('/api/projects/:id', async (req,res)=> {
  let project = await projectQueries.getProjectById(req.params.id);

  if (project) {
    //Display project
    res.status(200).send(`Project ${req.params.id} found!`);
  } else {
    res.status(403).send(`Project ${req.params.id} not found!`);
  }
}) ;


// Show project creation page
router.get('/api/projects/create', async (req,res) => {
  //Show create project component?
})


// Delete a project
router.post('/api/projects/delete/:id', async (req,res) => {
  //Stretch
})

// Display projects belonging to a user
router.get('/api/projects/:userid', async (req,res)=> {
  let project = await projectQueries.getProjectByUserId(req.params.userid);

  if (project) {
    //Display projects
    res.status(200).send(`Project(s) found for user ${req.params.userid}!`);
  } else {
    res.status(403).send(`No projects found for user ${req.params.userid}!`);
  }
});

module.exports = router;