import React from "react";
import "./Summary.css";

const Summary = (props) => {
  const { summary } = props;

  let total = 0;
  for (const dancer of summary) {
    total = total + dancer.fees;
  }

  return (
    <div className="summary">
      <h2>Picking Summary</h2>
      <p>Dancer(s) Picked: {summary.length}</p>
      <p>Total Cost: ${total}</p>
      <button>Confirm</button>
    </div>
  );
};

export default Summary;
