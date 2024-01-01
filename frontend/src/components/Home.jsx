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
      let currentUserId = Cookies.get("userid");

      const data = await getAllProjects();
      //console.log("projectsData returned by helper function", data);
      setProjectsData(data.projectsData); //check if its projectsdata in small letters
    };
    fetchData();
  }, []);

  return (
    <div className="main-page">
      <TopNavigation currentUserId={currentUserId} />
      <div className="center-section">
        {/* Placeholder for image */}
        <div className="image-placeholder">
          <img src="../images/fmg-small.png" />
        </div>
        <p>Welcome to FundMe! A crowdfunding app</p>
      </div>
      <div className="bottom-section">
        {/* Active projects will display here */}
        <div className="active-projects">
          <span className="title-active-projects">Available Projects</span>
          <UserProject
            projectsData={projectsData}
            currentUserId={currentUserId}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
