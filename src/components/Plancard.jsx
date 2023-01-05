import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const Plancard = ({ Plan, Price, Image }) => {
  const isYearly = useSelector((store => store.service.value.isYearly));
  return (
    <div className="flex justify-start items-start flex-col gap-10 w-36 border-[1px] border-PurplishBblue p-4 rounded cursor-pointer">
      <div>
        <img src={Image} alt="image" />
      </div>
      <div>
        <h1 className="text-MarineBlue font-bold ">{Plan}</h1>
        <p className="text-CoolGray font-ubuntu">
          &#36;{Price}
          {isYearly ? " /yr" : "/m"}
        </p>
      </div>
    </div>
  );
};

export default Plancard;
