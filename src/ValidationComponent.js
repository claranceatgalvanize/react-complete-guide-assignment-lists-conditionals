import React from "react";

const ValidationComponent = ({ textLength }) => {
  const style = {
    marginBottom: "1em"
  };
  let say;
  if (textLength === 16) {
    say = "Well done! you've entered the right amount of characters";
  } else if (textLength <= 0) {
    say = "Enter some text!";
  } else if (textLength < 16) {
    say = "Text too short!";
  } else {
    say = "Text too long!";
  }

  return (
    <div style={style}>
      <small>{say}</small>
    </div>
  );
};

export default ValidationComponent;
