import React from 'react'

import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Welcome to UVCE Connect</h1>
        <h2>Bridging Generations of Excellence</h2>
        <p>Connect with alumni, find mentors, and discover opportunities.</p>
        <div className="hero-btns">
          <button className="btn primary-btn">Join Now</button>
          <button className="btn secondary-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default Hero