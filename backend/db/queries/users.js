const db = require('../connection');
//in progress
const getUserByEmail = (emailLogin) => {
  return db.query('SELECT * FROM users where email = $1',[emailLogin])
    .then((data) => {
      return data.rows[0];//returning an array of objects
    })
    .catch((error) => {
      console.error('Error retrieving user by email:', error);
      return null;
    });
};

const registerUser = (registerName,registerEmail,hashedPassword) => {
  return db.query ('INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *',
  [registerName,registerEmail,hashedPassword])
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
    return null;
  });
}
module.exports = { getUserByEmail, registerUser };


///=----
