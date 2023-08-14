import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./styles.scss"; // Import the styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">Banner</div>
      <h1>Home</h1>
      <p>This is a home page</p>
      <div className="gallery-boxes">
        <Link to="/gallery">Gallery 1</Link>
        <Link to="/gallery">Gallery 2</Link>
        <Link to="/gallery">Gallery 3</Link>
        <Link to="/gallery">Gallery 4</Link>
      </div>
      <Button page="Home" />
    </div>
  );
};

export default Home;
