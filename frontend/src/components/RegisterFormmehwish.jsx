import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { defer } from 'request/lib/helpers';
///import {} from './hooks/useApplicationData';



const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleRegistrationSubmit = async (e) => {
   
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


 

  return(

    <div>
      <h2>Register User</h2>
    
    <form onSubmit={handleRegistrationSubmit}>
      <input
    type="text"
    value={username}
    onChange={e => setUsername(e.target.value)}
    placeholder="Username"
    />
  
  <input
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    placeholder="Email"
  />
  <input
    type="password"
    value={password}
    onChange={e => setPassword(e.target.value)}
    placeholder="Password"
  />
  <button type="submit">Register</button>
</form>
    
    </div>
  );
}
export default RegisterForm;