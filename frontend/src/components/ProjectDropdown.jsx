import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

const ProjectDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="proj_dropdown_label"
      >
        PROJECTS
      </Dropdown.Toggle>

      <Dropdown.Menu className="proj_dropdown_items">
        <a href="#/action-1" className="proj_dropdown_items">
          Charity
        </a>
        <a href="#/action-1" className="proj_dropdown_items">
          Personal
        </a>
        {/* <Dropdown.Item href="#/action-2" className="proj_dropdown_items">
          Personal
        </Dropdown.Item> */}
        <a href="#/action-1" className="proj_dropdown_items">
          Medical
        </a>
        {/* <Dropdown.Item href="#/action-3" className="proj_dropdown_items">
          Medical
        </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default ProjectDropdown;
