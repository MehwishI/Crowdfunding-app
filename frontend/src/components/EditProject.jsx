import React, { useState } from "react";
import "./style.css";
import TopNavigation from "./TopNavigation";
import { editProject } from "../helpers/editProject";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const EditProject = (project) => {
  const navigate = useNavigate();
  // state for form inputs
  console.log("project", project);
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

    try {
      const response = await editProject(projectData);

      if (response) {
        console.log("Project Edited successfully!");
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
      <h2>Edit Project: {projectName}</h2>
      <div className="create_project-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Project Name:
            <input
              className="form-input"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </label>

          <label className="form-label">
            Select Category:
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
            Description:
            <input
              className="form-input"
              type="text"
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
            />
          </label>
          <label className="form-label">
            Picture:
            <input
              className="form-input"
              type="text"
              value={projectPicture}
              onChange={(e) => setProjectPicture(e.target.value)}
            />
          </label>

          <label className="form-label">
            Fundraising Goal:
            <input
              className="form-input"
              type="number"
              value={fundraisingGoal}
              onChange={(e) => setFundraisingGoal(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            Current Funding:
            <input
              className="form-input"
              type="text"
              value={currentFunding}
              onChange={(e) => setCurrentFunding(e.target.value)}
            />
          </label>
          <label className="form-label">
            End Date:
            <input
              className="form-input"
              type="date"
              value={projectEndDate}
              onChange={(e) => setProjectEndDate(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="button">
            Submit
          </button>
          <button
            type="submit"
            className="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button"
            onClick={handleDeleteClick()}
          >
            Delete this project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
