import React, { useState } from "react";

import "./tagInput.css";

export default function TagInput() {
  const [tags, setTags] = useState([]);

  const handleRemove = (idx) => {
    const newTags = [...tags];
    newTags.splice(idx, 1);

    setTags([...newTags]);
  };

  const handleKeyDown = (e) => {
    const inputValue = e.target.value.trim();

    if (e.key === "Enter" && inputValue) {
      if (!tags.find((el) => el.toLowerCase() === inputValue.toLowerCase())) {
        setTags([...tags, inputValue]);
      }
      e.target.value = null;
    } else if (e.key === "Backspace" && !inputValue) {
      handleRemove(tags.length - 1);
    }
  };

  return (
    <div>
      <h1>Tag Input</h1>
      <div className="tag-input-container">
        <p>Please type your tag then press Enter</p>
        <ul className="ul-input">
          {tags.map((el, idx) => (
            <li
              key={idx}
              className="li-tags"
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
            >
              {el}
              <button onClick={() => handleRemove(idx)} className="remove-btn">
                x
              </button>
            </li>
          ))}
          <li className="tag-input-li-container">
            <input
              type="text"
              onKeyDown={handleKeyDown}
              className="tag-input"
              placeholder="Type here..."
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
