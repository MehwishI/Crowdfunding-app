import React, { useState } from "react";
import "./style.css";
import TopNavigation from "./TopNavigation";
import { editProject } from "../helpers/editProject";
import { deleteProject } from "../helpers/deleteProject";

import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";

const EditProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.selectedProject;
  // state for form inputs

  console.log("selectproject received in editProject", project);

  const [projectName, setProjectName] = useState(project.name);
  const [projectCategory, setProjectCategory] = useState(project.category);
  const [projectDesc, setProjectDesc] = useState(project.description);
  const [projectPicture, setProjectPicture] = useState(project.picture);

  const [fundraisingGoal, setFundraisingGoal] = useState(
    project.funding_target
  );
  const [currentFunding, setCurrentFunding] = useState(project.funding_current);
  const [projectEndDate, setProjectEndDate] = useState(project.end_date);

  // function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      projectid: project.id,
      ownerId: Cookies.get("userid"),
      projectName: projectName,
      projectDesc: projectDesc,
      projectCategory: projectCategory,
      projectPicture: projectPicture,
      funding_target: fundraisingGoal,
      funding_current: currentFunding,
      projectEndDate: projectEndDate,
    };

    try {
      const response = await editProject(projectData);

      if (response) {
        console.log("Project Edited successfully!");
        navigate("/userdashboard");
      } else {
        console.log("Project not edited!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    //delete project

    try {
      const response = await deleteProject(project.id);
      if (response) {
        console.log("Project deleted successfully!");
        navigate("/userdashboard");
      } else {
        console.log("Project not deleted!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {" "}
      <TopNavigation />
      <h2>Edit Project {projectName}</h2>
      <div className="edit_project_container">
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
            <textarea
              rows="5"
              cols="40"
              className="form-input"
              type="text"
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
            ></textarea>
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

          <div className="edit_button_panel">
            <button type="submit" className="button">
              Save
            </button>
            <button
              
              className="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button"
              onClick={(e) => handleDeleteClick(e)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
