const db = require("../connection");

// Add a new donation to the database
const addDonation = function (donation) {
  return db
    .query(
      "INSERT INTO donations (donor_id, project_id, funding_amount,charge_id, donation_date) VALUES ($1, $2, $3, $4,$5) RETURNING *",
      [
        donation.donor_id, ///userid
        donation.project_id,
        donation.funding_amount,
        donation.charge_id,
        donation.donation_date,
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

// Get all donations
const getDonations = () => {
  return db
    .query("SELECT * FROM donations")
    .then((data) => {
      return data.rows; // Return all donations found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving donations:", error);
      return null;
    });
};

// Get a donation by its ID
const getDonationById = (donationId) => {
  return db
    .query(
      `SELECT donations.*, projects.name FROM donation JOIN
    projects ON donations.project_id = projects.id    
    WHERE id = $1`,
      [donationId]
    )
    .then((data) => {
      return data.rows[0]; // Return the first project found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving donation by ID:", error);
      return null;
    });
};

// Get all donations to a specific project by project id
const getDonationsByProjectId = (projectId) => {
  return db
    .query(
      `
    SELECT 
      donations.donor_id AS donor_id,
      donations.project_id AS project_id,
      projects.name,
      donations.funding_amount AS funding_amount,
      donations.donation_date AS donation_date
    FROM donations 
    JOIN projects ON donations.project_id = projects.id
    WHERE projects.id = $1
    `,
      [projectId]
    )
    .then((data) => {
      return data.rows; // Return all donations found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving donations by project ID:", error);
      return null;
    });
};

// Get all donations to a specific project by project name
const getDonationsByProjectName = (projectName) => {
  return db
    .query(
      `
    SELECT 
      donations.donor_id AS donor_id,

      donations.project_id AS project_id,
      projects.name
      donations.funding_amount AS funding_amount,
      donations.donation_date AS donation_date
    FROM donations 
    JOIN projects ON donations.project_id = projects.id
    WHERE projects.name = $1
    `,
      [projectName]
    )
    .then((data) => {
      return data.rows; // Return all donations found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving donations by project name:", error);
      return null;
    });
};

// Get all donations by a specfic user by user id
const getDonationsByUserId = (userId) => {
  //console.log("reached getDonationsByUserId query");
  return db
    .query(
      `
    SELECT 
      donations.donor_id AS donor_id,
      donations.project_id AS project_id,
      projects.name AS project_name,
      donations.funding_amount AS funding_amount,
      donations.donation_date AS donation_date
    FROM donations 
    JOIN users ON donations.donor_id = users.id
    JOIN projects ON donations.project_id= projects.id
    WHERE users.id = $1
    `,
      [userId]
    )
    .then((data) => {
      return data.rows; // Return all donations found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving donations by user id:", error);
      return null;
    });
};

// Get all donations by a specific user by user name
const getDonationsByUserName = (userName) => {
  return db
    .query(
      `
    SELECT 
      donations.donor_id AS donor_id,
      donations.project_id AS project_id,
      donations.funding_amount AS funding_amount,
      donations.donation_date AS donation_date
    FROM donations 
    JOIN users ON donations.project_id = users.id
    WHERE users.name = $1
    `,
      [userName]
    )
    .then((data) => {
      return data.rows; // Return all donations found (or null if not found).
    })
    .catch((error) => {
      console.error("Error retrieving donations by user name:", error);
      return null;
    });
};

module.exports = {
  addDonation,
  getDonations,
  getDonationById,
  getDonationsByProjectId,
  getDonationsByProjectName,
  getDonationsByUserId,
  getDonationsByUserName,
};
