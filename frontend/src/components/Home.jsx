import React from "react";
import Cookies from "js-cookie";

import TopNavigation from "./TopNavigation";
import ActiveProjects from "./ActiveProjects";
import "./style.css";

//list of all available projects
const Home = () => {
  //const cookies = new Cookies();
  const currentUserId = Cookies.get("userid");

  return (
    <div className="main-page">
      <TopNavigation currentUserId={currentUserId} />
      <div className="center-section">
        {/* Placeholder for image */}
        <div className="image-placeholder">Image</div>
      </div>
      <div className="bottom-section">
        {/* Active projects will display here */}
        <div className="active-projects">
          <ActiveProjects />
        </div>
      </div>
    </div>
  );
};

export default Home;
