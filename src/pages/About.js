import React from "react";
import "./styles.scss"; // Import the styles
import Button from "./Button";
const About = () => {
  return (
    <div className="about-container">
      <h1>About</h1>
      <p>This is an about page.</p>
      <div className="features">
        <div className="feature">
          <h2>Our Mission</h2>
          <p>We are dedicated to delivering high-quality products that...</p>
        </div>
        <div className="feature">
          <h2>Team</h2>
          <p>We have a talented and passionate team of individuals...</p>
        </div>
        <div className="feature">
          <h2>History</h2>
          <p>Founded in 20XX, our company has grown from...</p>
        </div>
      </div>
      <Button page="About page" />
    </div>
  );
};

export default About;
