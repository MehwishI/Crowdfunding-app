import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//import { useCookies } from "react-cookie";
//import { Cookies } from "js-cookie";
//import Cookies from "universal-cookie";

const TopNavigation = (props) => {
  //const [cookies] = useCookies(["userid"]);
  // const cookies = new Cookies();
  const currentUserId = props.currentUserId;
  //.get("userid");
  //Cookies.get("userid");
  //console.log("currentUserId:", currentUserId);

  return (
    <div className="top-nav-bar">
      <div className="logo-container"></div>
      {!currentUserId ? (
        <div>
          <Link to={"/register"}>Register</Link>

          <Link to={"/login"}>Login</Link>
        </div>
      ) : (
        <div>
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
