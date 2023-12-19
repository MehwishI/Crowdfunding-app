import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action (page reload)

    // Construct the request payload
    const payload = {
      // username: username,
      password: password,
      email: email,
    };

    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Handle success - maybe clear form or show a success message

        setLoginStatus("Login successful");

        //redirect to /projects
        return <Navigate to="/projects" />;
      } else {
        // Handle error - maybe display error message to the user
        console.log("Unsuccessful Login, Try again!");
        setLoginStatus("Login failed,Please Try again!");
      }
    } catch (error) {
      // Handle network error - maybe display error message to the user
    }
  };

  const handleCancel = () => {
    //navigate.goBack();
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleLoginSubmit}>
            Submit
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>

      <h3>{loginstatus}</h3>
    </div>
  );
};

export default LoginForm;