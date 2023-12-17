const db = require('../connection');

const getUserByEmail =   (emailLogin) => {
  return   db.query('SELECT * FROM users where email = $1',[emailLogin])
    .then((data) => {
      console.log('data.rows[0]:',data.rows[0])
      return data.rows[0];
    })
    .catch((error) => {
      console.error('Error retrieving user by email:', error);
      return null;
    });
};

const registerUser = (registerName,registerEmail,hashedPassword) => {
  //console.log('reached registerUser function')
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
