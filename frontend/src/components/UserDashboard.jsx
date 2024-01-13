//import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import UserProject from "./UserProject";
import Funding from "./Funding";
import TopNavigation from "./TopNavigation";

import {
  getProjectsByUserId,
  getDonationsByUserId,
} from "../helpers/getusersdata";
import "./style.css";

import { useLocation, Link, useNavigate } from "react-router-dom";

const UserDashboard = (props) => {
  const [donationsData, setDonationsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  const location = useLocation();
  const currentUserId = location.state?.currentUserId;

  const navigate = useNavigate();
  if (!currentUserId) {
    console.log("user not logged in, redirecting to login page");
    navigate("/login");
  }
  // if (state) {
  //const currentUserId = state ? null : state.currentUserId;
  // console.log(currentUserId);
  // }
  //const projectsData = null;
  // getProjectsByUserId(currentUserId);
  // console.log("projectsData received to UserDashboard:", projectsData);
  // const donationsData = getDonationsByUserId(currentUserId);
  // console.log("donationsData returned: ", donationsData);

  useEffect(() => {
    const fetchDonationsData = async () => {
      const data = await getDonationsByUserId(currentUserId);
      // console.log("donationsdata in userdashboard:", data);
      // Assuming you have 'useState' to manage your donations state
      // console.log(
      //   "if donationsData an array?",
      //   Array.isArray(data.donationsdata)
      // );
      setDonationsData(data.donationsdata);
    };

    const fetchProjectsData = async () => {
      const data = await getProjectsByUserId(currentUserId);
      // console.log("projects data:", data);
      // console.log(
      //   "if projectsData an array?",
      //   Array.isArray(data.projectsData)
      // );

      setProjectsData(data.projectsData);
    };
    fetchProjectsData();
    fetchDonationsData();
  }, [currentUserId]);

  return (
    <div>
      <TopNavigation currentUserId={currentUserId} />
      <div className="page">
        <div className="container">
          <div className="section" id="userproject">
            {/* Content for the first section */}
            <h2>My Projects</h2>

            <UserProject projectsData={projectsData} />
          </div>
          <div className="section" id="funded">
            {/* Content for the second section */}
            <h2>What you're funding</h2>

            {/*donations list*/}
            <Funding donationsData={donationsData} />
          </div>
          {/* <div className="section" id="active">
          {/* Content for the third section */}

          {/* <h2>Active projects</h2>
          {/* <p>content goes here</p> }
          <ProjectBox />
        </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
