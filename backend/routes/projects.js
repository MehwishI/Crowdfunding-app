var express = require('express');
var router = express.Router();
//const db = require('../connection');
var projectQueries = require('../db/queries/projects')



//in progress
//list projects 
router.get('/projects', (req,res)=> {
  res.render ('projects')
})

///display a project
router.get('./api/projects/:id',(req,res)=> {
  projectQueries.getProjectById(/*projectid*/);


}) ;


//add a new project laod page
router.get('/projects/create',(req,res) => {

})


//delete a project
router.post('/api/projects/delete/:id',(req,res) => {

})

//display a project by user id
router.get('/api/projects/:userid',(req,res)=> {

});
module.exports= router;