import React from "react";
import "./Dancers.css";

const Dancers = () => {
  return (
    <div className="dancers-container">
      <div className="dancers"></div>
      <div className="summary">
        <h2>Picking Summary</h2>
        <p>Dancer(s) Picked: </p>
        <p>Total Cost: $</p>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Dancers;
