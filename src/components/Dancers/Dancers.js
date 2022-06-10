import React, { useEffect, useState } from "react";
import Dancer from "../Dancer/Dancer";
import "./Dancers.css";

const Dancers = () => {
  const [dancers, setDancers] = useState([]);

  useEffect(() => {
    fetch("./dancers.json")
      .then((res) => res.json())
      .then((data) => setDancers(data));
  }, []);
  return (
    <div className="dancers-container">
      <div className="dancers">
        {dancers.map((dancer) => (
          <Dancer key={dancer.id} dancer={dancer}></Dancer>
        ))}
      </div>
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
