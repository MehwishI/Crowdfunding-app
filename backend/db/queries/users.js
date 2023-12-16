const db = require('../connection');
//in progress
const getUserByEmail = (emailLogin) => {
  return db.query('SELECT * FROM users where email = emailLogin;')
    .then(data => {
      return data.rows;//jn returning an array of objects
    });
};

const registerUser = (registerName,registerEmail,hashedPassword) => {
  return db.query ('INSERT INTO users (name,email,password) VALUES (${registerName},${registerEmail},${hashedPassword});');
  .then(data => {
    return data.id; // returning newly saved user id
  })
}
module.exports = { getUserByEmail };