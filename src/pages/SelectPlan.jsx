import React from "react";
import CardList from "../components/CardList";

const SelectPlan = () => {
  return (
    <div className="flex items-center justify-center flex-col w-[38.5vw]">
      <header className="mt-8 -ml-40">
        <h1 className="text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Select your plan
        </h1>
        <p className="text-CoolGray">
          You have the option of monthly or yearly billing.
        </p>
      </header>
      <div className=" mt-5 -ml-10">
        <CardList />
      </div>
    </div>
  );
};

export default SelectPlan;
