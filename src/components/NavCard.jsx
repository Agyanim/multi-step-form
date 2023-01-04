import React from "react";
import { NavLink } from "react-router-dom";
import SelectPlan from "../pages/SelectPlan";
const NavCard = ({ Id, Step, Link ,Path}) => {
  return (
    <div  key={Id} className="flex gap-4 m-4 items-start justify-start text-sm">
      <div className="rounded-full text-white border-2 border-white w-8 h-8 flex justify-center items-center">
        {Id}
      </div>
      <div>
        <h1 className="text-LightGray">{Step}</h1>
        <NavLink  to={Path} className="text-white font-bold">{Link}
        </NavLink>
      </div>
    </div>
  );
};

export default NavCard;
