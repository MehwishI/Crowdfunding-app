import React from "react";
import "./style.css";
import ProjectBox from "./ProjectBox";

const UserProject = (props) => {
  //console.log("reached userproject component:", props.projectsData);
  const { projectsData } = props;

  if (!projectsData) {
    return <div>Loading data..</div>;
  }

  // Check if projectsData is indeed an array before calling .map
  const projectsList = Array.isArray(projectsData)
    ? projectsData.map((project) => (
        <ProjectBox key={project.id} project={project} />
      ))
    : null;

  return <div className="projectlist">{projectsList}</div>;
};

export default UserProject;
