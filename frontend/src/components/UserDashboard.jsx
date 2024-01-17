//import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import UserProject from "./UserProject";
import Funding from "./Funding";
import TopNavigation from "./TopNavigation";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

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
      data.projectsData.length !== 0
        ? setProjectsExist(true)
        : setProjectsExist(false);

      document.getElementById("userproject").style.display = "inline";
      document.getElementById("funded").style.display = "none";
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

    document.getElementById("userproject").style.display = "none";
    document.getElementById("funded").style.display = "inline";
    donationsData.length !== 0
      ? setDonationsExist(true)
      : setDonationsExist(false);
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

          <div className="userproject" id="userproject">
            {/* Content for the first section */}
            <h2>My Projects</h2>
            {projectsExist ? (
              <UserProject
                projectsData={projectsData}
                currentUserId={currentUserId}
              />
            ) : (
              <div className="no_data">
                <p>No projects to show!</p>
                <Link
                  to={{ pathname: "/createproject" }}
                  state={{ currentUserId: currentUserId }}
                >
                  <button className="button">START A FUND ME PROJECT</button>
                </Link>
              </div>
            )}
          </div>
          <div className="fundings" id="funded">
            {/* Content for the second section */}
            <h2>What you're funding</h2>
            {donationsExist ? (
              <Funding donationsData={donationsData} />
            ) : (
              <div className="no_data">
                <p>You do not have any fundings to show!</p>
                <Link to={{ pathname: "/" }}>
                  <button className="button">
                    GO TO LIST OF OPEN PROJECTS TO DONATE
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
