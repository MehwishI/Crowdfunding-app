import React, { useState } from "react";
import "./style.css";
import TopNavigation from "./TopNavigation";
import { createProject } from "../helpers/createProject";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";

const CreateProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUserId = location.state?.currentUserId;
  if (!currentUserId) {
    navigate("/login");
  }
  // state for form inputs
  const [projectName, setProjectName] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectPicture, setProjectPicture] = useState("");

  const [fundraisingGoal, setFundraisingGoal] = useState("");
  const [currentFunding, setCurrentFunding] = useState(0);
  const [projectEndDate, setProjectEndDate] = useState("");

  const [rewardTitle, setRewardTitle] = useState("");
  const [rewardType, setRewardType] = useState("");
  const [rewardQuantity, setRewardQuantity] = useState("");
  const [rewardLocation, setRewardLocation] = useState("");

  // function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log({ projectName, projectCategory, projectDesc, fundraisingGoal });

    const projectData = {
      ownerId: Cookies.get("userid"),
      projectName: projectName,
      projectDesc: projectDesc,
      projectCategory: projectCategory,
      projectPicture: projectPicture,
      funding_target: fundraisingGoal,
      funding_current: currentFunding,
      projectEndDate: projectEndDate,
    };
    //"INSERT INTO projects (owner_id, name, description, category, picture, funding_target, funding_current) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",

    try {
      const response = await createProject(projectData);

      if (response) {
        console.log("Project Created successfully!");
      } else {
        console.log("Project not created!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {" "}
      <TopNavigation />
      <h2>Create a New Project</h2>
      <div className="create_project-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            <div className="left">Project Name:</div>
            <input
              className="form-input"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            <div className="left">Select Category:</div>
            <select
              className="form-input"
              value={projectCategory}
              onChange={(e) => setProjectCategory(e.target.value)}
              required
            >
              <option value="">Select Project Category</option>
              <option value="charity">Charity</option>
              <option value="medical">Medical</option>
              <option value="personal">Personal</option>
            </select>
          </label>
          <label className="form-label">
            <div className="left">Description:</div>
            <input
              className="form-input"
              type="text"
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
            />
          </label>
          <label className="form-label">
            <div className="left">Picture:</div>
            <input
              className="form-input"
              type="text"
              value={projectPicture}
              onChange={(e) => setProjectPicture(e.target.value)}
            />
          </label>
          <label className="form-label">
            <div className="left">Fundraising Goal:</div>
            <input
              className="form-input"
              type="number"
              value={fundraisingGoal}
              onChange={(e) => setFundraisingGoal(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            <div className="left">Current Funding:</div>
            <input
              className="form-input"
              type="text"
              value={currentFunding}
              onChange={(e) => setCurrentFunding(e.target.value)}
            />
          </label>
          <label className="form-label">
            <div className="left">End Date:</div>
            <input
              className="form-input"
              type="date"
              value={projectEndDate}
              onChange={(e) => setProjectEndDate(e.target.value)}
              required
              style={{ width: "320px" }}
            />
          </label>
          <h4>Add Rewards (optional)</h4>
          <label className="form-label">
            <div className="left">Title</div>
            <input
              className="form-input"
              type="text"
              value={rewardTitle}
              onChange={(e) => setRewardTitle(e.target.value)}
            />
          </label>

          <label className="form-label">
            <div className="left">Type:</div>
            <select
              className="form-input"
              value={rewardType}
              onChange={(e) => setRewardType(e.target.value)}
              required
            >
              <option value="">Select reward type</option>
              <option value="Discount">Discount</option>
              <option value="Gift">Gift</option>
              <option value="Gift Card">Gift Card</option>
            </select>
          </label>
          <label className="form-label">
            <div className="left">Quantity</div>
            <input
              className="form-input"
              type="text"
              value={rewardQuantity}
              onChange={(e) => setRewardQuantity(e.target.value)}
            />
          </label>
          <label className="form-label">
            <div className="left">Location</div>
            <input
              className="form-input"
              type="text"
              value={rewardLocation}
              onChange={(e) => setRewardLocation(e.target.value)}
            />
          </label>
          <div className="create_box_buttons">
            <button type="submit" className="btn_create">
              Submit
            </button>
            <button
              type="submit"
              className="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
