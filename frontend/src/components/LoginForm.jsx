import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import './style.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginstatus, setLoginStatus] = useState('');
  //const history = useHistory();

  const handleLoginSubmit = async (e) => {
    //console.log("login button clicked!")
    e.preventDefault(); // Prevent the default form submit action (page reload)
    
    // Construct the request payload
    const payload = {
     // username: username,
      password: password,
      email: email
    };
    //console.log("payload-register",payload)
    
    try {
      const response =  await fetch('http://localhost:3001/users/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      //console.log("response",response)
      
      if (response.ok) {
        // Handle success - maybe clear form or show a success message
        
        console.log('User Login successfull!')
        setLoginStatus("Login successful")

      } else {
        // Handle error - maybe display error message to the user
        console.log('Unsuccessful Login, Try again!')
        setLoginStatus('Login failed,Please Try again!')
      }
    } catch (error) {
      // Handle network error - maybe display error message to the user
    }
  };

  const handleCancel = () => {
  //  history.goBack();
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleLoginSubmit}>Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>

        </div>

      </form>
      
        <h3>{loginstatus}</h3>
      
      
    </div>
  );
};

export default LoginForm;
