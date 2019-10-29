import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    textLength: 0,
    inputValue: ""
  };
  inputLength = e => {
    let text = e.target.value;
    this.setState({ textLength: text.length, inputValue: text });
  };
  deleteChar = id => {
    const chars = this.state.inputValue.split("");
    chars.splice(id, 1);
    this.setState({ inputValue: chars.join("") });
  };
  render() {
    const letters = this.state.inputValue.split("");
    let tiles = null;
    if (letters) {
      tiles = (
        <div>
          {letters.map((char, idx) => {
            return (
              <CharComponent
                deleteChar={this.deleteChar}
                key={idx}
                id={idx}
                letter={char}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <ol>
          <li>
            [ √ ] Create an input field (in App component) with a change
            listener which outputs the length of the entered text below it (e.g.
            in a paragraph).
          </li>
          <li>
            [ √ ] Create a new component (=> ValidationComponent) which receives
            the text length as a prop
          </li>
          <li>
            [ √ ] Inside the ValidationComponent, either output "Text too short"
            or "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            [ √ ] Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            [ √ ] Render a list of CharComponents where each CharComponent
            receives a different letter of the entered text (in the initial
            input field) as a prop.
          </li>
          <li>
            [ * ] When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <h5>Enter a quote sixteen characters long.</h5>
        <input
          onChange={this.inputLength}
          type="text"
          placeholder="Eg: Start somewhere!"
          value={this.state.inputValue}
        />
        <br></br>
        <small>
          You've entered {this.state.textLength}{" "}
          {this.state.textLength <= 0 ? "character" : "characters"}
        </small>
        <ValidationComponent textLength={this.state.textLength} />
        {tiles}
      </div>
    );
  }
}

export default App;
