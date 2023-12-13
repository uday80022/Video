import React from "react";
import "../Designs/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Video Puzzle Platform</h1>
      <br></br>
      <div className="centered-section">
        <h2>Welcome to the Video Puzzle Platform!</h2>
        <p>
          Explore, solve, and interact with a diverse range of puzzles. Join now
          to start your puzzle-solving journey!
        </p>
      </div>

      <div className="centered-section">
        <h2>Features</h2>
        <ul>
          <li>Customized learning dashboard</li>
          <li>25 tasks with three sections each</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
