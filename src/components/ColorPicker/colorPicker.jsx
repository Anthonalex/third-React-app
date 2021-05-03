import React, { useState } from "react";

import "./colorPicker.css";

export default function ColorPicker() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [alphaValue, setAlphaValue] = useState(0);

  const handleChange = (e) => {
    setRedValue(Number(e.target.value));
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div className="main-container">
        <div className="color-picker"></div>
        <div className="range-container-box">
          Red value : {redValue}
          <input
            id="redInput"
            type="range"
            min="1"
            max="500"
            className="color-input"
            onChange={handleChange}
          />
          Green value : {redValue}
          <input
            id="greenInput"
            type="range"
            min="1"
            max="500"
            className="color-input"
            onChange={handleChange}
          />
          Blue value : {redValue}
          <input
            id="blueInput"
            type="range"
            min="1"
            max="500"
            className="color-input"
            onChange={handleChange}
          />
          Alpha value : {redValue}
          <input
            id="alphaInput"
            type="range"
            min="1"
            max="500"
            className="color-input"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
