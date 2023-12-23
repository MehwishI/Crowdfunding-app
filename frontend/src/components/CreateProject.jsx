import React, { useState } from "react";
import "./style.css";

const CreateProject = () => {
  // state for form inputs
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [fundraisingGoal, setFundraisingGoal] = useState("");

  // function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ projectName, projectType, fundraisingGoal });
  };

  return (
    <div className="container">
      <h2>Create a New Project</h2>
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
          Project Type:
          <select
            className="form-input"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            required
          >
            <option value="">Select Project Type</option>
            <option value="charity">Charity</option>
            <option value="medical">Medical</option>
            <option value="personal">Personal</option>
          </select>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProject;
