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

const addReward = function (reward) {
  return db
    .query(
      `INSERT INTO rewards (
        project_id,
        title,
        quantity,
        type,
        location
      ) VALUES ($1, $2, $3, $4, $5) RETURNING *`,

      [
        reward.project_id,
        reward.rewardTitle,
        reward.rewardQuantity,
        reward.rewardType,
        reward.rewardLocation,
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error("Error creating new reward:", error.message);
      return null;
    });
};

module.exports = { getRewardsbyProjectId, addReward };
