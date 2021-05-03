import React, { useState } from "react";

import "./colorPicker.css";

export default function ColorPicker() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [alphaValue, setAlphaValue] = useState(1);

  const handleChange = (e) => {
    if (e.target.id === "redInput") {
      setRedValue(Number(e.target.value));
    }
    if (e.target.id === "greenInput") {
      setGreenValue(Number(e.target.value));
    }
    if (e.target.id === "blueInput") {
      setBlueValue(Number(e.target.value));
    }
    if (e.target.id === "alphaInput") {
      setAlphaValue(Number(e.target.value));
    }
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div className="main-container">
        <div
          className="color-picker-redner-box"
          style={{
            backgroundColor: `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`,
          }}
        ></div>
        <div className="range-container-box">
          Red value : {redValue}
          <input
            id="redInput"
            type="range"
            min="1"
            max="255"
            className="color-input"
            onChange={handleChange}
          />
          Green value : {greenValue}
          <input
            id="greenInput"
            type="range"
            min="1"
            max="255"
            className="color-input"
            onChange={handleChange}
          />
          Blue value : {blueValue}
          <input
            id="blueInput"
            type="range"
            min="1"
            max="255"
            className="color-input"
            onChange={handleChange}
          />
          Alpha value : {alphaValue}
          <input
            id="alphaInput"
            step="0.1"
            type="range"
            min="0.1"
            max="1"
            className="color-input"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
