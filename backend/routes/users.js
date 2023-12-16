var express = require('express');
var router = express.Router();
var userQueries = require('./db/queries/users')
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
router.post('/register',(req,res)=> {

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
///////-------------need to be deleted-----
app.get("/register", (req, res) => {
  templateVars = { user: null };
  res.render("register", templateVars);
});
//register post route
app.post("/register", (req, res) => {
  if (req.body.email === "" || req.body.password === "") {
    res.status(400).send("Email or password is empty");
  }
  //check if user already exists
  if (!getUserByEmail(req.body.email, users)) {
    const userId = generateRandomString(6);
    const emailFromForm = req.body.email;

    const passwordFromBody = req.body.password;
    //hash the password and then saves it in users object
    const hashedPassword = bcrypt.hashSync(passwordFromBody, 10);

    users[userId] = {
      id: userId,
      email: emailFromForm,
      password: hashedPassword,
    };

    //set current session userid equals to current user id
    req.session.user_id = userId;
    res.redirect("/urls");
  } else {
    res.status(400).send("User Email already exists!");
    //res.redirect("/register");
  }
});

//-------------------

app.get('/login',(req,res)=>{
  if (req.session.user_id) {
    res.redirect("/projects");
  } 
  else {
    res.render('login',templateVars)
  }
})
//login post route
app.post('/login', (req, res) => {
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
