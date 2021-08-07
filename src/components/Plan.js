import React from "react";
import "./Plan.css";
const Plan = ({ title, resolution, isCurrent }) => {
  return (
    <div className="plan">
      <div className="plan__info">
        <h3>{title}</h3>
        <h5>{resolution}</h5>
      </div>
      <button className={`plan__button ${isCurrent && `plan__currentBtn`}`}>
        {isCurrent ? <p>Current Package</p> : <p>Subscribe</p>}
      </button>
    </div>
  );
};

export default Plan;
