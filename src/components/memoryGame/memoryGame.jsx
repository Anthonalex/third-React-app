import React from "react";
import "./memoryGame.css";

export default class MemoryGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "foo",
    };
  }

  render() {
    return (
      <div className="memory-game-container">
        <h1>Memory Game.</h1>
      </div>
    );
  }
}
