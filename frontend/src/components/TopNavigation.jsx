import React from 'react';
import { Link } from 'react-router-dom';



const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      
      <Link to={'/register'}>Register</Link>
      
      <Link to={'/login'}>Login</Link>
      

    </div>
  );
};

export default TopNavigation;