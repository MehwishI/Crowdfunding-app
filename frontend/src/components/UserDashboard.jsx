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
  const [showProjects, setShowProjects] = useState(true);
  const [showFundings, setShowFundings] = useState(false);

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
    setShowProjects(true);
    setShowFundings(false);
    document.getElementById("userproject").style.display = "inline";
    // document.getElementById("showProjects").style.backgroundColor = "white";
    document.getElementById("funded").style.display = "none";
    // document.getElementById("showFundings").style.backgroundColor = "none";
  };
  const handlefundingClick = () => {
    //console.log("donationsExist", donationsExist);
    // console.log("donationssDAta", donationsData);

    setShowProjects(false);
    setShowFundings(true);
    document.getElementById("userproject").style.display = "none";
    // document.getElementById("showProjects").style.backgroundColor = "none";
    document.getElementById("funded").style.display = "inline";

    // document.getElementById("showFundings").style.backgroundColor = "white";

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
            <a
              onClick={() => handleprojectClick()}
              id="showProjects"
              className={
                showProjects ? "dash-link-active" : "dash-link-inactive"
              }
            >
              My Projects
            </a>
            {""}
            <a
              onClick={() => handlefundingClick()}
              id="showFundings"
              className={
                showFundings ? "dash-link-active" : "dash-link-inactive"
              }
            >
              My Fundings
            </a>
          </div>

          <div className="userproject" id="userproject">
            {/* Content for the first section */}
            <div className="dash-heading">My Projects</div>
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
                  <button className="button">START A FUNDME PROJECT</button>
                </Link>
              </div>
            )}
          </div>
          <div className="fundings" id="funded">
            {/* Content for the second section */}
            <div className="dash-heading">What you're funding</div>
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
