import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ProjectBox = (props) => {
  // console.log("reached project box for project:", props);
  const goToProjectPage = (projectId) => {
    // Redirect to individual project page
    // TODO: Need to know what state needs to be modified to change pages
    //`/projects/${projectId}`
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const { projectId, project, currentUserId } = props;
  const navigate = useNavigate();
  //console.log("project details received: ", project);
  const handleDonateclick = (project) => {
    //check if a user is logged in
    currentUserId ? setSelectedProject(project) : navigate("/login");
  };
  useEffect(() => {
    //if selected project is changed and donate butto is clicked
    if (selectedProject) {
      navigate(`/donate/${selectedProject.id}`, { state: { selectedProject } });
    }
  }, [selectedProject, navigate]);

  if (project) {
    return (
      <div className="project_box" onClick={() => goToProjectPage(project.id)}>
        <div className="name_and_button">
          <h2 className="project_box_name">{project.name || " "}</h2>
          <button
            type="button"
            className="project_box_donate_button"
            onClick={() => handleDonateclick(project)}
          >
            Make a donation
          </button>
        </div>
        <img
          className="project_box_pic"
          src={project.picture}
          alt="project"
        ></img>

        <p className="project_box_desc">{project.description}</p>
        <p className="project_created_by">Created By: {project.created_by}</p>
        <span className="project_box_funds">
          {(project.funding_current || "0").toLocaleString("en-US", {
            style: "currency", // This is a slower and obsolete formatting function, but it won't matter for this small a project
            currency: "CAD",
          })}{" "}
          raised!
        </span>
        <br />
        <span>
          Remaining Funds: CA $
          {project.funding_target - project.funding_current}{" "}
        </span>
      </div>
    );
  } else return <div>Projects details not available now.</div>;
};

export default ProjectBox;
