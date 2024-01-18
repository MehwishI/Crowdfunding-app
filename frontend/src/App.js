import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import UserDashboard from "./components/UserDashboard";
import CreateProject from "./components/CreateProject";
import EditProject from "./components/EditProject";
//import TopNavigation from "./components/TopNavigation";
//import CheckoutForm from "./components/CheckoutForm";
import Checkout from "./components/Checkout";
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
  const currentUserId = Cookies.get("userid");
  console.log("currentuserid: ", currentUserId);

  return (
    <div className="App">
      {/* <TopNavigation currentUserId={currentUserId} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/createproject" element={<CreateProject />} />
        {/* <Route path="/donate" element={<Checkout />} /> */}

        <Route path="/donate/:projectid" element={<Checkout />} />
        <Route path="/donate/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/edit/:projectid" element={<EditProject />} />
        {/* <Route path="/projectype" element={<ShowProjects type={type} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
