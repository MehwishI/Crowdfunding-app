import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import UserDashboard from "./components/UserDashboard";
import CreateProject from "./components/CreateProject";
import TopNavigation from "./components/TopNavigation";
import Cookies from "js-cookie";

function App() {
  const currentUserId = Cookies.get("userid");

  return (
    <div className="App">
      <TopNavigation currentUserId={currentUserId} />
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
