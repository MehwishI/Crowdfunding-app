import React from "react";
import "./style.css";

const ProjectBox = (props) => {
  console.log("reached project box for project:", props);
  const goToProjectPage = (projectId) => {
    // Redirect to individual project page
    // TODO: Need to know what state needs to be modified to change pages
    //`/projects/${projectId}`
  };
  const { projectId, project } = props;

  return (
    <div className="project_box" onClick={() => goToProjectPage(project.id)}>
      <h2 className="project_box_name">{project.name}</h2>

      <img className="project_box_pic" src={project.picture}></img>

      <p className="project_box_desc">{project.description}</p>
      <span className="project_box_funds">
        $
        {(project.funding_current || " ").toLocaleString("en-US", {
          style: "currency", // This is a slower and obsolete formatting function, but it won't matter for this small a project
          currency: "CAD",
        })}{" "}
        raised!
      </span>
    </div>
  );
};

export default ProjectBox;
