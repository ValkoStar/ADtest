import React from "react";
import "./styles.scss";
const Button = ({ page }) => {
  const handleClick = () => {
    console.log("Clicked on " + page);
  };
  return (
    <button onClick={handleClick} className="click-button">
      Click me
    </button>
  );
};
export default Button;
