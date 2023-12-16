import React from 'react';
import { Link } from 'react-router-dom';
import { defer } from 'request/lib/helpers';


const RegisterForm = () => {
  return(

    <div>
      <h2>Register User</h2>
    <form method= "post">
    <label>Enter Name:     </label><input type="text" id="name" name="Name"></input>
    <br/>
    <label>Enter Email:    </label><input type="text" id= "email" name="Email"></input><br/>
    <label>Enter Password: </label><input type="password" id="password" name="Password"></input>
    <br/>
    <button>Submit</button>
    </form>
    </div>
  );
}
export default RegisterForm;