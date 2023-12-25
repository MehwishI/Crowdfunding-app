const db = require("../connection");

// Add a new project to the database
const addProject = function (project) {
  return db
    .query(
      "INSERT INTO projects (owner_id, name, description, category, picture, funding_target, funding_current) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        project.ownerId,
        project.name,
        project.description,
        project.category,
        project.picture,
        project.fundingTarget,
        project.fundingCurrent,
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};

// Get all projects
const getProjects = () => {
  return db
    .query(
      `SELECT projects.owner_id, users.name AS created_by, projects.name, projects.description, projects.category, projects.picture,
    projects.funding_target, projects.funding_current, projects.end_date FROM projects
  JOIN users ON projects.owner_id = users.id`
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
  //   return db
  //     .query("SELECT * FROM projects WHERE id = $1", [projectId])
  //     .then((data) => {
  //       return data.rows[0]; // Return the first project found (or null if not found).
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving project by ID:", error);
  //       return null;
  //     });
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
      `SELECT projects.owner_id, users.name AS created_by, projects.name, projects.description, projects.category, projects.picture,
      projects.funding_target, projects.funding_current, projects.end_date FROM projects
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

module.exports = {
  addProject,
  getProjects,
  getProjectById,
  getProjectByName,
  getProjectsByCategory,
  getProjectsByUserId,
};
