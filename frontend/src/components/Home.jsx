import React from 'react';
import TopNavigation from './TopNavigation';
import './style.css';

const Home = () => {
  return (
    <div className="main-page">
      <TopNavigation />
      <div className="center-section">
        {/* Placeholder for image */}
        <div className="image-placeholder">Image</div>
      </div>
      <div className="bottom-section">
        {/* Active projects will display here */}
        <div className="active-projects">Active Projects</div>
      </div>
    </div>
  );
};

export default Home;
