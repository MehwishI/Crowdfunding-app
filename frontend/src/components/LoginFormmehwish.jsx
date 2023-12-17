import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//import { defer } from 'request/lib/helpers';
///import {} from './hooks/useApplicationData';



const LoginForm = () => {
 // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleLoginSubmit = async (e) => {
    console.log("login button clicked!")
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
      } else {
        // Handle error - maybe display error message to the user
        console.log('Unsuccessful Login, Try again!')
      }
    } catch (error) {
      // Handle network error - maybe display error message to the user
    }
  };

  return(

    <div>
      <h2>User Login</h2>
    
    <form onSubmit={handleLoginSubmit}>
      {/* <input
    type="text"
    value={username}
    onChange={e => setUsername(e.target.value)}
    placeholder="Username"
    /> */}
  
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
  <button type="submit">Login</button>
</form>
    
    </div>
  );
}
export default LoginForm;