import React, { useState } from "react";
import "./memoryGame.css";
import { dataBase } from "../../service/data";

export default function MeomoryGame() {
  const [data, setData] = useState(dataBase);
  const [score, setScore] = useState(0);

  const resetData = (data) => {
    data.map((el) => {
      el.clicked = false;
      return el;
    });
  };

  const handleClick = (e) => {
    const newData = data.map((el) => {
      if (el.image === e.target.src) {
        if (el.clicked === false) {
          setScore(score + 1);
          el.clicked = true;
        } else if (el.clicked === true) {
          setScore(0);
          resetData(data);
        }
      }
      return el;
    });

    newData.sort((a, b) => 0.5 - Math.random());
    setData(newData);
    RenderData();
  };

  const RenderData = () => {
    return data.map((el) => {
      return (
        <div key={el.id}>
          <img src={el.image} alt={el.name} onClick={handleClick} />
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <h5>
        You are presented with multiple images of celebrities. The images get
        shuffled every time they are clicked. User CAN NOT click on any image
        more than once or else the score resets to zero.
      </h5>

      <div className="score-state">
        Score : {score} <b>{score === 8 && "You win,Goodjob!"}</b>
      </div>

      <div className="memory-game-container">
        <RenderData />
      </div>
    </div>
  );
}
