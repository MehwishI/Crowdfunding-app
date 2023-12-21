import Cookies from 'js-cookie';
import React from 'react';
//in progress (by Mehwish)
const User = () => {
  const currentUserId = Cookies.get('userid')

  const response = await fetch(`http://localhost:3001/api/projects/:${currentUserId}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  })

  return (
    <div className="page">
     
      <div className="container">
      <div className="section" id="yourproject">
          {/* Content for the first section */}
          <h2>Your Project</h2>
          <p>content goes here</p>
        </div>
        <div className="section" id="funded">
          {/* Content for the second section */}
          <h2>What you're funding</h2>
          <p>content goes here</p>
        </div>
        <div className="section" id="active">
          {/* Content for the third section */}
          <h2>Active projects</h2>
          <p>content goes here</p>
        </div>
        <div className="section" id="create">
          {/* Content for the fourth section */}
          <h2>Create your own project</h2>
          <p><a href="Create.jsx">
    <button>Create a new Project!</button>
  </a></p>
        </div>
      </div>
    </div>
  );
};

export default User;
