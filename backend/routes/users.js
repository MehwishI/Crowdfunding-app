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
  //console.log('reached api/register req:',req.body.username,req.body.email)

  if (req.body.email === "" || req.body.password === "") {
    res.status(400).send("Email or password is empty");
  }
  
    const registerName= req.body.username;
    const registerEmail=req.body.email;
    const registerPwd=req.body.password;
    const result = userQueries.getUserByEmail(registerEmail)
    console.log('res:',result)
   // try {
  if(result!=undefined) {
    const hashedPassword = bcrypt.hashSync(registerPwd, 10);
   
    if(userQueries.registerUser(registerName,registerEmail,hashedPassword) !=null) {
      res.status(200).json({ success: true});

    }
    
  }


  else if(result){
    console.log("User email already exists!")
    res.status(500).send("User email already exists!");
    return false;
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
router.post('/api/login', async (req, res) => {
  console.log('reached login post route')
  const emailLogin = req.body.email;
  const pwdLogin = req.body.password;

  //find the user that matches with given email
  let  userFound = await userQueries.getUserByEmail(emailLogin);
 console.log("userFound:",userFound)
  //if a user is found matched with given email, then compare password
  if (userFound!==undefined && userFound !==null) {
    //hash provided password and compare with saved password.
    if (bcrypt.compareSync(pwdLogin, userFound.password)) {
      //set login session cookie as user_id
      req.session.user_id = userFound.id;
      res.status(200).send("User Found!")
      return true;
     // res.redirect("/projects");
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
