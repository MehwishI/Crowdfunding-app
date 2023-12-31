import React from "react";
import "./style.css";
import ProjectBox from "./ProjectBox";

const UserProject = (props) => {
  // console.log("reached userproject component:", props.projectsData);
  const { projectsData, currentUserId } = props;

  if (!projectsData) {
    return <div>Loading data..</div>;
  }
  // console.log(
  //   "if projectsDAta an array?",
  //   Array.isArray(props.projectsData.projectsData)
  // );

  // for (var i in projectsData) {
  //   console.log("project in for loop: ", projectsData[i]);
  // }
  //Check if projectsData is indeed an array before calling .map
  const projectsList = Array.isArray(projectsData)
    ? projectsData.map((project) => (
        <ProjectBox
          key={project.id}
          project={project}
          currentUserId={currentUserId}
        />
      ))
    : null;

  // const projectsList = projectsData.map((project) => (
  //   <ProjectBox key={project.id} project={project} />
  // ));

  return <div className="projectlist">{projectsList}</div>;
};

export default UserProject;
