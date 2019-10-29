import React from "react";

const CharComponent = ({ letter, deleteChar, id }) => {
  const style = {
    display: "inline-block",
    padding: "16px 0",
    textAlign: "center",
    margin: "1px",
    width: "50px",
    color: "#ccc",
    background: "#111"
  };
  return (
    <div onClick={() => deleteChar(id)} style={style}>
      {letter}
    </div>
  );
};

export default CharComponent;
