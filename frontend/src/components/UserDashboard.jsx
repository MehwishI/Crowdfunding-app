import Cookies from "js-cookie";
import React from "react";
import YourProject from "./YourProject";
import Funding from "./Funding";
import ProjectBox from "./ProjectBox";

import "./style.css";

import { useLocation, Link } from "react-router-dom";
//in progress (by Mehwish)
const UserDashboard = async (props) => {
  const { state } = useLocation();
  //console.log("state received:", state);
  //console.log("props received:", props);

  const currentUserId = state.currentUserId;
  // console.log(currentUserId);

  const response = await fetch(
    `http://localhost:3001/api/projects/userid=${currentUserId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(),
    }
  );

  return (
    <div className="page">
      <div className="container">
        <div className="section" id="yourproject">
          {/* Content for the first section */}
          <h2>Your Project</h2>
          {/* <p>content goes here</p> */}
          <YourProject/>
        </div>
        <div className="section" id="funded">
          {/* Content for the second section */}
          <h2>What you're funding</h2>
          {/* <p>content goes here</p> */}
          <Funding/>
        </div>
        <div className="section" id="active">
          {/* Content for the third section */}

          <h2>Active projects</h2>
          {/* <p>content goes here</p> */}
          <ProjectBox/>
        </div>
        <div className="section" id="create">
          {/* Content for the fourth section */}
          <h2>Create your own project</h2>
          <p>
            <button>
              <Link
                to={{
                  pathname: "/createproject",
                }}
                state={{ currentUserId: currentUserId }}
              >
                Create a new Project!
              </Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
