import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddOnsCard = ({ Service, Package, Cost, id, Addon }) => {
  const isYearly = useSelector((store) => store.addOns.value.isYearly);
  
  return (
    <label
      htmlFor={id}
      className="flex justify-between items-center border-[1px] border-PurplishBblue lg:w-[80%] xl:w-[85%] p-4 rounded-md cursor-pointer text-sm font-ubuntu"
    >
      <section className="flex justify-center items-center gap-4">
        <input
          id={id}
          className="text-red-400"
          type="checkbox"
          name={Service}
          value={id}
        />
        <div className="">
          <h1 className="text-MarineBlue font-bold">{Service}</h1>
          <p className="text-CoolGray">{Package}</p>
        </div>
      </section>
      <p className="text-PurplishBblue">
        +${Cost} {isYearly ? "/yr" : "/m"}
      </p>
    </label>
  );
};

export default AddOnsCard;
