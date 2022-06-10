import React from "react";
import "./Dancer.css";

const Dancer = (props) => {
  const { name, nationality, bodyMeasurements, age, fees, image } =
    props.dancer;

  return (
    <div className="dancer">
      <div className="dancer-image">
        <img src={image} alt={name} />
      </div>
      <div className="dancer-details">
        <h2>{name}</h2>
        <p>{nationality} Dancer</p>
        <p>Age: {age}</p>
        <p>Body: {bodyMeasurements}</p>
        <p>
          Fees: <span className="fees">${fees}</span>
        </p>
        <button onClick={() => props.handlePicking(props.dancer)}>
          Pick Her
        </button>
      </div>
    </div>
  );
};

export default Dancer;
