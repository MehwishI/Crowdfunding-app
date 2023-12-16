const db = require('../connection');


// get my all contributions
cont getAllContributions= function()
{
  return db.query("Select * from donations where")
}



//get my specific project contribution