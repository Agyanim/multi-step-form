import React from "react";
import "../App.css";
import Arcade from "../assets/images/icon-arcade.svg"

const Plancard = () => {
  return (
    <div>
        <img src={Arcade} alt="arcade" />
      <div>
      </div>
      <div>
        <h1>Arcade</h1>
        <p>$9/mo</p>
      </div>
    </div>
  );
};

export default Plancard;
