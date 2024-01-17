import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

//import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import Img from "../images/fm-w.png";

const TopNavigation = () => {
  const navigate = useNavigate();
  const currentUserId = Cookies.get("userid");
  //console.log("currentUserId:", currentUserId);
  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <div className="top-nav-bar">
      <div className="logo-container" onClick={handleTitleClick}>
        <img src={Img} style={{ width: "20%", height: "auto" }} alt="logo" />
        &nbsp; CROWDFUNDING PLATFORM
      </div>
      <div className="nav-bar-links">
        <Link to={"/"}>HOME</Link>&nbsp;&nbsp;&nbsp;
        {!currentUserId ? (
          <div className="nav-bar-links">
            <Link to={"/register"}> REGISTER</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={"/login"}> LOGIN</Link>
          </div>
        ) : (
          <div>
            <Link
              to={{ pathname: "/createproject" }}
              state={{ currentUserId: currentUserId }}
            >
              START A FUND ME
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link
              to={{
                pathname: "/userdashboard",
              }}
              state={{ currentUserId: currentUserId }}
            >
              MY DASHBOARD
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={"/logout"}>LOGOUT</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;
