import React from "react";
import "./CharComponent.css";

const CharComponent = ({ letter, deleteChar, id }) => {
  return (
    <div className="tiles" onClick={() => deleteChar(id)}>
      {letter}
    </div>
  );
};

export default CharComponent;
