import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import TopNavigation from "./TopNavigation";
//import ProjectBox from "./ProjectBox";
import { getAllProjects } from "../helpers/getusersdata";
import "./style.css";
import UserProject from "./UserProject";
import Img from "../images/fm-w-stroke.png";

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
          <br />

          <img src={Img} style={{ width: "40%", height: "auto" }} alt="logo" />
        </div>
        <p className="welcome_name">Welcome to FundMe!</p>
        <br />
      </div>

      {/* Active projects will display here */}
      <div className="active-projects">
        <span className="title-active-projects">Popular Projects</span>
        <UserProject
          projectsData={projectsData}
          currentUserId={currentUserId}
        />
        <br />
      </div>
    </div>
  );
};

export default Home;
