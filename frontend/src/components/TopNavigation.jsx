import React from "react";
import { Link } from "react-router-dom";
//import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

const TopNavigation = (props) => {
  //const [cookies] = useCookies(["userid"]);
  const currentUserId = Cookies.get("userid");

  return (
    <div className="top-nav-bar">
      {!currentUserId ? (
        <div>
          <Link to={"/register"}>Register</Link>

          <Link to={"/login"}>Login</Link>
        </div>
      ) : (
        <Link to={"/logout"}>Logout</Link>
      )}
    </div>
  );
};

export default TopNavigation;
