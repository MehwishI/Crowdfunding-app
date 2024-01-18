import React from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import ProjectDropdown from "./ProjectDropdown";
import "./style.css";

//import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import Img from "../images/fm-w.png";

const TopNavigation = () => {
  const navigate = useNavigate();
  const currentUserId = Cookies.get("userid");
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const handleTitleClick = () => {
    navigate("/");
  };

  // var prevItem = null;
  // function activateItem(t) {
  //   if (prevItem != null) {
  //     prevItem.className = prevItem.className.replace(
  //       "top-nav-bar a:active",
  //       ""
  //     );
  //   }
  //   t.className += "top-nav-bar a:active";
  //   prevItem = t;
  // }
  return (
    <div className="top-nav-bar">
      <div className="logo-container" onClick={handleTitleClick}>
        <img src={Img} style={{ width: "20%", height: "auto" }} alt="logo" />
        &nbsp; CROWDFUNDING PLATFORM
      </div>

      <div className="nav-bar-links">
        <NavLink
          className={
            splitLocation[1] === ""
              ? "nav-bar-active-item"
              : "nav-bar-inactive-item"
          }
          to={"/"}
        >
          {" "}
          HOME
        </NavLink>
        {/* <ProjectDropdown /> */}
        &nbsp;&nbsp;&nbsp;
        {!currentUserId ? (
          <div className="nav-bar-links">
            <NavLink
              className={
                splitLocation[1] === "register"
                  ? "nav-bar-active-item"
                  : "nav-bar-inactive-item"
              }
              to={"/register"}
            >
              REGISTER
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink
              className={
                splitLocation[1] === "login"
                  ? "nav-bar-active-item"
                  : "nav-bar-inactive-item"
              }
              to={"/login"}
            >
              {" "}
              LOGIN
            </NavLink>
          </div>
        ) : (
          <div className="nav-bar-links">
            <NavLink
              className={
                splitLocation[1] === "createproject"
                  ? "nav-bar-active-item"
                  : "nav-bar-inactive-item"
              }
              to={{ pathname: "/createproject" }}
              state={{ currentUserId: currentUserId }}
            >
              START A FUND ME
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink
              className={
                splitLocation[1] === "userdashboard"
                  ? "nav-bar-active-item"
                  : "nav-bar-inactive-item"
              }
              to={{
                pathname: "/userdashboard",
              }}
              state={{ currentUserId: currentUserId }}
            >
              MY DASHBOARD
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink
              className={
                splitLocation[1] === "logout"
                  ? "nav-bar-active-item"
                  : "nav-bar-inactive-item"
              }
              to={"/logout"}
            >
              LOGOUT
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;
