import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    history.push('/user');
  };

  const handleCancel = () => {
    history.goBack();
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
          <button type="button" onClick={handleLogin}>Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
