import React, { useEffect, useState } from "react";
import Dancer from "../Dancer/Dancer";
import Summary from "../Summary/Summary";
import "./Dancers.css";

const Dancers = () => {
  const [dancers, setDancers] = useState([]);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    fetch("./dancers.json")
      .then((res) => res.json())
      .then((data) => setDancers(data));
  }, []);

  const handlePicking = (dancer) => {
    const newSummary = [...summary, dancer];
    setSummary(newSummary);
  };

  return (
    <div className="dancers-container">
      <div className="dancers">
        {dancers.map((dancer) => (
          <Dancer
            key={dancer.id}
            dancer={dancer}
            handlePicking={handlePicking}
          ></Dancer>
        ))}
      </div>
      <div>
        <Summary summary={summary}></Summary>
      </div>
    </div>
  );
};

export default Dancers;
