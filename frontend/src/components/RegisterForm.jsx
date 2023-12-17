import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { defer } from 'request/lib/helpers';

import './style.css'; 


const RegisterForm = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const history = useHistory();

 const handleRegisterSubmit = async (e) => {
   
  e.preventDefault(); // Prevent the default form submit action (page reload)
  
  // Construct the request payload
  const payload = {
    username: username,
    password: password,
    email: email
  };
  console.log("payload-register",payload)
  
  try {
    const response = await fetch('http://localhost:3001/users/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    console.log("response",response)
    
    if (response.ok) {
      // Handle success - maybe clear form or show a success message
      console.log('User registered successfully!')
    } else {
      // Handle error - maybe display error message to the user
      console.log('Unsuccessful registration')
    }
  } catch (error) {
    // Handle network error - maybe display error message to the user
  }
};

  const handleCancel = () => {
   // history.goBack();
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <div className="form-group">
          <label>User Name:</label>
          <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleRegisterSubmit}>Register</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
