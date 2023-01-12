import React from "react";
import "../assets/css/radioCard.css";

const RadioCard = () => {
  return (
    <div className="flex gap-5">
      <div className="card">
        <input type="radio" id="card1" />
        {/* <label htmlFor="card1">
            <h1>me</h1>
            <h1>568</h1>
        </label> */}
      </div>

    </div>
  );
};

export default RadioCard;
