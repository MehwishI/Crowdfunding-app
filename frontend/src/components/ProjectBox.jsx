import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ProjectBox = (props) => {
  const goToProjectPage = (projectId) => {
    // Redirect to individual project page
    // TODO: Need to know what state needs to be modified to change pages
    //`/projects/${projectId}`
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [donateBtn, setDonateBtnClicked] = useState(false);
  const [editBtn, setEditBtnClicked] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  const { projectId, project, currentUserId } = props;
  const navigate = useNavigate();
  const handleDonateclick = (project) => {
    setDonateBtnClicked(true);
    currentUserId ? setSelectedProject(project) : navigate("/login");
  };
  const handleEditClick = (project) => {
    setEditBtnClicked(true);
    console.log("editBtn:", editBtn);
    console.log("currentuserid inside handleeditclick:", currentUserId);

    currentUserId ? setSelectedProject(project) : navigate("/login");
    console.log("editBtn:", editBtn);
  };
  useEffect(() => {
    //if selected project is changed and donate button is clicked
    console.log("editBtn:", editBtn);
    if (selectedProject && donateBtn) {
      navigate(`/donate/${selectedProject.id}`, { state: { selectedProject } });
    } else if (selectedProject && editBtn) {
      navigate(`/edit/${selectedProject.id}`, {
        state: { selectedProject },
      });
    }
    if (window.location.href === "http://localhost:3000/userdashboard") {
      //document.getElementById("box-buttons").style.display = "inline";
      //document.getElementById("box-buttons").style.width = "250px";
      setDashboard(true);
    }
  }, [selectedProject, donateBtn, editBtn, navigate]);

  if (project) {
    return (
      <div className="project_box" onClick={() => goToProjectPage(project.id)}>
        <div className="name_and_button">
          <h3 className="project_box_name">{project.name || " "}</h3>
          <div
            className={!dashboard ? "box_buttons" : "box_buttons_dash"}
            id="box-buttons"
          >
            {window.location.href === "http://localhost:3000/userdashboard" ? (
              <button
                type="button"
                className="project_box_edit_button"
                onClick={() => handleEditClick(project)}
              >
                Edit project
              </button>
            ) : (
              ""
            )}
            {""}
            <button
              type="button"
              className="project_box_donate_button"
              onClick={() => handleDonateclick(project)}
            >
              Donate and earn rewards
            </button>
          </div>
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
        <span className="project_box_funds">
          Remaining Funds: CA $
          {project.funding_target - project.funding_current}{" "}
        </span>
        <br />
      </div>
    );
  } else return <div>Projects details not available now.</div>;
};

export default ProjectBox;
