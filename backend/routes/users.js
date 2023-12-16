var express = require('express');
var router = express.Router();
var userQueries = require('../db/queries/users')
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/register',(req,res)=> {
 templateVars = { user: null };
  res.render("register", templateVars);
});
//when user clicks submit button on register view
router.post('/api/register',(req,res)=> {

  if (req.body.email === "" || req.body.password === "") {
    res.status(400).send("Email or password is empty");
  }
  const registerName = req.body.password;
  const registerEmail = req.body.email;
  const registerPwd = req.body.password;

  if(!userQueries.getUserByEmail(registerEmail)){
    const hashedPassword = bcrypt.hashSync(registerPwd, 10);
    userQueries.registerUser(registerName,registerEmail,hashedPassword)
    
  }


});

// get login 
router.get('/login',(req,res)=>{
  if (req.session.user_id) {
    res.redirect("/projects");
  } 
  else {
    res.render('login')
  }
})
//login post route
router.post('/api/login', (req, res) => {
  const emailLogin = req.body.email;
  const pwdLogin = req.body.password;

  //find the user that matches with given email
  let userFound = userQueries.getUserByEmail(emailLogin);

  //if a user is found matched with given email, then compare password
  if (userFound) {
    //hash provided password and compare with saved password.
    if (bcrypt.compareSync(pwdLogin, userFound.password)) {
      //set login session cookie as user_id
      req.session.user_id = userFound.id;
      res.redirect("/projects");
    } else {
      res
        .status(403)
        .send("User Email or Password is incorrect! Please try again.");
    }
  } else {
    res.status(403).send("User Not found!");
  }
  });
  
module.exports = router;
