import React from "react";
import { useSelector } from "react-redux";

const AddOnsCard = ({ Service, Package, Cost, id }) => {
  const isYearly = useSelector((store) => store.addOns.value.isYearly);

  return (
    <label
      htmlFor={id}
      className="flex justify-between items-center border-[1px] border-PurplishBblue lg:w-[85%] xl:w-[90%] p-4 rounded-md cursor-pointer text-sm font-ubuntu"
    >
      <section className="flex justify-center items-center gap-4">
        <input
          id={id}
          className="text-red-400 accent-PurplishBblue"
          type="checkbox"
          name={Service}
          value={id}
        />
        <div className="">
          <h1 className="text-MarineBlue font-bold">{Service}</h1>
          <p className="text-CoolGray text-xs lg:text-base">{Package}</p>
        </div>
      </section>
      <p className="text-PurplishBblue text-xs lg:text-base">
        +${Cost} {isYearly ? "/yr" : "/m"}
      </p>
    </label>
  );
};

export default AddOnsCard;
