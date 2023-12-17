import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { defer } from 'request/lib/helpers';

import './style.css'; 


const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = () => {
    // registration logic here
    console.log('Registering user:', userName, email, password);
    // after register, go to login to log in
    history.push('/login');
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <div className="form-group">
          <label>User Name:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
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
          <button type="button" onClick={handleRegister}>Register</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
