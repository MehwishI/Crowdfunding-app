import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import "./style.css";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action (page reload)

    // Construct the request payload
    const payload = {
      username: username,
      password: password,
      email: email,
    };
    console.log("payload-register", payload);

    try {
      const response = await fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Handle success
        console.log("User registered successfully!");
        return navigate("/login");
      } else {
        // Handle error - maybe display error message to the user
        console.log("Unsuccessful registration");
        return navigate("/");
      }
    } catch (error) {
      // Handle network error - maybe display error message to the user
      console.error(error);
      return navigate("/");
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <TopNavigation />
      <div className="register-container">
        <h3>User Registration </h3>
        <br />
        <form className="register-form">
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
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
            <button
              type="button"
              className="button"
              onClick={handleRegisterSubmit}
            >
              Register
            </button>
            <button type="button" className="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
