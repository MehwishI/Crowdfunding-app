import React from 'react';
import TopNavigation from './TopNavigation';
import ProjectBox from './ProjectBox';
import './style.css';

//list of all available projects
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
        <div className="active-projects">
          <ProjectBox/>
        </div>
      </div>
    </div>
  );
};

export default Home;
