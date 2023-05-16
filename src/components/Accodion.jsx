import React from "react";
import "../css/accodion.css";
const Accodion = () => {
  return (
    <>
      <div className="wrapper">
        <input type="radio" id="first" />
        <label className="accodion" htmlFor="first">
          Operations
        </label>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          tenetur adipisci nulla, laudantium laborum facere nesciunt vero.
          Ipsam, ab sed iure delectus qui commodi consequuntur molestias vel
          praesentium, officiis illum.
        </p>
      </div>
      <div className="wrapper">
        <input type="radio" id="second" />
        <label className="accodion" htmlFor="second">
          Operations
        </label>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          tenetur adipisci nulla, laudantium laborum facere nesciunt vero.
          Ipsam, ab sed iure delectus qui commodi consequuntur molestias vel
          praesentium, officiis illum.
        </p>
      </div>
    </>
  );
};

export default Accodion;
