import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    inputValue: ""
  };
  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };
  deleteChar = idx => {
    const chars = this.state.inputValue.split("");
    chars.splice(idx, 1);
    const updatedInputValue = chars.join("");
    this.setState({ inputValue: updatedInputValue });
  };
  render() {
    let tiles = this.state.inputValue.split("").map((char, idx) => {
      return (
        <CharComponent
          deleteChar={() => this.deleteChar(idx)}
          key={idx}
          letter={char}
        />
      );
    });

    return (
      <div className="App">
        <h5>Enter a quote sixteen characters long.</h5>
        <input
          onChange={this.handleInput}
          type="text"
          value={this.state.inputValue}
        />
        <br></br>
        <small>
          You've entered {this.state.inputValue.length}{" "}
          {this.state.inputValue.length <= 0 ? "character" : "characters"}
        </small>
        <ValidationComponent textLength={this.state.inputValue.length} />
        {tiles}
      </div>
    );
  }
}

export default App;
