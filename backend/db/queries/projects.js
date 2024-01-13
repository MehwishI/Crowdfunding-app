const db = require("../connection");

// Add a new project to the database
const addProject = function (project) {
  return db
    .query(
      `INSERT INTO projects (
        owner_id,
        name,
        description,
        category, 
        picture, 
        funding_target, 
        funding_current,
        end_date
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        project.ownerId,
        project.projectName,
        project.projectDesc,
        project.projectCategory,
        project.projectPicture,
        project.funding_target,
        project.funding_current,
        project.projectEndDate,
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error("Error creating new project:", error.message);
      return null;
    });
};

// Get all projects
const getProjects = () => {
  return db
    .query(
      `
      SELECT projects.id,
        projects.owner_id,
        users.name AS created_by,
        projects.name,
        projects.description,
        projects.category,
        projects.picture,
        projects.funding_target,
        projects.funding_current,
        projects.end_date
      FROM projects
      JOIN users ON projects.owner_id = users.id
      `
    )
    .then((data) => {
      return data.rows; // Return all projects found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving projects:", error);
      return null;
    });
};

// Get a project by its ID
const getProjectById = (projectId) => {
  return db
    .query("SELECT * FROM projects WHERE id = $1", [projectId])
    .then((data) => {
      return data.rows[0]; // Return the first project found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving project by ID:", error);
      return null;
    });
};

// Get a project by its name
const getProjectByName = (projectName) => {
  return db
    .query("SELECT * FROM projects WHERE name = $1", [projectName])
    .then((data) => {
      return data.rows[0]; // Return the first project found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving project by name:", error);
      return null;
    });
};

// Get all projects belonging to a specific category
const getProjectsByCategory = (category) => {
  return db
    .query("SELECT * FROM projects WHERE category = $1", [category])
    .then((data) => {
      return data.rows; // Return all projects found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving projects by category:", error);
      return null;
    });
};

// Get all projects belonging to a specific user
const getProjectsByUserId = (userId) => {
  return db
    .query(
      `SELECT 
        projects.owner_id,
        users.name AS created_by,
        projects.name,
        projects.description,
        projects.category,
        projects.picture,
        projects.funding_target,
        projects.funding_current,
        projects.end_date
      FROM projects
      JOIN users ON projects.owner_id = users.id
      WHERE users.id = $1
      `,
      [userId]
    )
    .then((data) => {
      return data.rows; // Return all projects found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving projects by user ID:", error);
      return null;
    });
};

// Change funding of a specific project by a specific amount
const updateProjectFunding = (projectId, funding_amount) => {
  return db
    .query(`UPDATE projects SET funding_current = funding_current + $2 WHERE id = $1`, [projectId, funding_amount])
    .then((result) => {
      console.log(`Project ${projectId} funding changed by ${funding_amount}.`);
      return result.rows[0];
    })
    .catch((error) => {
      console.error("Error updating project funding:", error.message);
      return null;
    });
};

// Update existing project
const editProject = function (project) {
  return db
    .query(
      `UPDATE projects SET
        owner_id = $2,
        name = $3, 
        description = $4, 
        category = $5, 
        picture $6, 
        funding_target = $7,
        funding_current = $8,
        end_date = $9
        WHERE id = $1
        RETURNING *`,
      [
        project.id,
        project.ownerId,
        project.projectName,
        project.projectDesc,
        project.projectCategory,
        project.projectPicture,
        project.funding_target,
        project.funding_current,
        project.projectEndDate,
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error("Error editing project:", error);
      return null;
    });
};

// Delete a project
const deleteProject = function (projectId) {
  return db
    .query(`DELETE FROM projects WHERE id = $1 RETURNING *`, [projectId])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error("Error deleting project:", error);
      return null;
    });
};

module.exports = {
  addProject,
  getProjects,
  getProjectById,
  getProjectByName,
  getProjectsByCategory,
  getProjectsByUserId,
  updateProjectFunding,
  editProject,
  deleteProject
};
