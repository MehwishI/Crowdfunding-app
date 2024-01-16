import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

//import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import Img from "../images/fmg-small.png";

const TopNavigation = () => {
  //const [cookies] = useCookies(["userid"]);
  // const cookies = new Cookies();
  //const currentUserId = props.currentUserId;
  const navigate = useNavigate();
  const currentUserId = Cookies.get("userid");
  //console.log("currentUserId:", currentUserId);
  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <div className="top-nav-bar">
      <div className="logo-container" onClick={handleTitleClick}>
        <img src={Img} style={{ width: "10%", height: "auto" }} alt="logo" />
        Crowdfunding Application
      </div>
      {!currentUserId ? (
        <div className="nav-bar-links">
          <Link to={"/register"}>Register</Link>

          <Link to={"/login"}>Login</Link>
        </div>
      ) : (
        <div>
          <Link
            to={{ pathname: "/createproject" }}
            state={{ currentUserId: currentUserId }}
          >
            Create a new project
          </Link>
          <Link
            to={{
              pathname: "/userdashboard",
            }}
            state={{ currentUserId: currentUserId }}
          >
            My Dashboard
          </Link>
          <Link to={"/logout"}>Logout</Link>
        </div>
      )}
    </div>
  );
};

export default TopNavigation;
