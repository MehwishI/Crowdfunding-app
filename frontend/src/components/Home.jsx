import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import TopNavigation from "./TopNavigation";
//import ProjectBox from "./ProjectBox";
import { getAllProjects } from "../helpers/getusersdata";
import "./style.css";
import UserProject from "./UserProject";

//list of all available projects
const Home = () => {
  //const cookies = new Cookies();
  let currentUserId = Cookies.get("userid");
  const [projectsData, setProjectsData] = useState([]);
  //state to store projectsData
  useEffect(() => {
    const fetchData = async () => {
      //set currentuserid everytime this page loads
      //currentUserId = Cookies.get("userid");

      const data = await getAllProjects();

      setProjectsData(data.projectsData);
    };
    fetchData();
  }, []);

  return (
    <div className="main-page">
      <TopNavigation currentUserId={currentUserId} />
      <div className="center-section">
        {/* Placeholder for image */}
        <div className="image-placeholder">
          <img src="../images/fmg-small.png" alt="title" />
        </div>
        <p>Welcome to FundMe! A CrowdFunding Application</p>
      </div>

      {/* Active projects will display here */}
      <div className="active-projects">
        <span className="title-active-projects">Available Projects</span>
        <UserProject
          projectsData={projectsData}
          currentUserId={currentUserId}
        />
        <br />
        <div className="bottom-section">Copyright 2024 - LightHouseLabs.ca</div>
      </div>
    </div>
  );
};

export default Home;
