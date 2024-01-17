//import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import UserProject from "./UserProject";
import Funding from "./Funding";
import TopNavigation from "./TopNavigation";
import Cookies from "js-cookie";

import {
  getProjectsByUserId,
  getDonationsByUserId,
} from "../helpers/getusersdata";
import "./style.css";

import { useLocation, useNavigate } from "react-router-dom";

const UserDashboard = (props) => {
  const [donationsData, setDonationsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [projectsExist, setProjectsExist] = useState(false);
  const [donationsExist, setDonationsExist] = useState(false);

  const location = useLocation();
  const currentUserId = Cookies.get("userid");
  //location.state?.currentUserId;

  const navigate = useNavigate();
  if (!currentUserId) {
    console.log("user not logged in, redirecting to login page");
    navigate("/login");
  }

  useEffect(() => {
    const fetchDonationsData = async () => {
      const data = await getDonationsByUserId(currentUserId);
      setDonationsData(data.donationsdata);
      setDonationsExist(true);
    };

    const fetchProjectsData = async () => {
      const data = await getProjectsByUserId(currentUserId);

      setProjectsData(data.projectsData);
    };
    fetchProjectsData();
    fetchDonationsData();
  }, [currentUserId]);

  const handleprojectClick = () => {
    // console.log("projectsExist", projectsExist);
    // console.log("projectsDAta", projectsData);

    projectsData.length !== 0
      ? setProjectsExist(true)
      : setProjectsExist(false);

    document.getElementById("userproject").style.display = "inline";
    document.getElementById("funded").style.display = "none";
  };
  const handlefundingClick = () => {
    //console.log("donationsExist", donationsExist);
    // console.log("donationssDAta", donationsData);
    donationsData.length !== 0
      ? setDonationsExist(true)
      : setDonationsExist(false);

    document.getElementById("userproject").style.display = "none";
    document.getElementById("funded").style.display = "inline";
  };

  return (
    <div>
      <TopNavigation currentUserId={currentUserId} />
      <div className="page">
        {/* <h3>My Dashboard</h3> */}
        <div className="container">
          <div className="projects-fundings">
            <a onClick={() => handleprojectClick()}>My Projects</a>
            {""}
            <a onClick={() => handlefundingClick()}>My Fundings</a>
          </div>

          <div className="section" id="userproject">
            {/* Content for the first section */}
            <h2>My Projects</h2>
            {projectsExist ? (
              <UserProject
                projectsData={projectsData}
                currentUserId={currentUserId}
              />
            ) : (
              <p>No projects to show!</p>
            )}
          </div>
          <div className="section" id="funded">
            {/* Content for the second section */}
            <h2>What you're funding</h2>
            {donationsExist ? (
              <Funding donationsData={donationsData} />
            ) : (
              <div>You do not have any fundings to show!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
