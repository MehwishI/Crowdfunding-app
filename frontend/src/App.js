import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import UserDashboard from "./components/UserDashboard";
import CreateProject from "./components/CreateProject";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/createproject" element={<CreateProject />} />
      </Routes>
    </div>
  );
}

export default App;
