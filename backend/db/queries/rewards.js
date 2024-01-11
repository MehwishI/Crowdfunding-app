const db = require("../connection");

// Get all projects belonging to a specific user
const getRewardsbyProjectId = (projectId) => {
  return db
    .query(
      `SELECT rewards.project_id , rewards.title,
  rewards.quantity, rewards.type, 
  rewards.location FROM rewards
      WHERE rewards.project_id = $1
      `,
      [projectId]
    )
    .then((data) => {
      return data.rows; // Return all rewards found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving rewards by project ID:", error);
      return null;
    });
};

module.exports = { getRewardsbyProjectId };
