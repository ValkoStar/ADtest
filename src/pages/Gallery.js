import React from "react";
import "./styles.scss"; // Import the styles
import image1 from "../assets/cat.png"; // Import image files
import image2 from "../assets/cat2.png";
import image3 from "../assets/cat3.png";
import image4 from "../assets/cat4.png";
import Button from "./Button";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-component">
        <div className="gallery-item">
          <img src={image1} alt="Cat 1" />
          <h3>Component 1</h3>
          <p>This is the first cat.</p>
        </div>
        <div className="gallery-item">
          <img src={image2} alt="Cat 2" />
          <h3>Component 2</h3>
          <p>This is the second cat.</p>
        </div>
        <div className="gallery-item">
          <img src={image3} alt="Cat 3" />
          <h3>Component 3</h3>
          <p>This is the third cact.</p>
        </div>
        <div className="gallery-item">
          <img src={image4} alt="Cat 4" />
          <h3>Component 4</h3>
          <p>This is the fourth cat.</p>
        </div>
      </div>
      <Button page="Gallery" />
    </div>
  );
};

export default Gallery;
