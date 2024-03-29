import React from "react";
import CardList from "../components/CardList";

const SelectPlan = () => {
  return (
    <main className="flex w-[90%] lg:ml-[-0.2rem] xl:ml-[2.5rem] m-auto">
    <div className="flex  flex-col ">
      <header className="mt-8 ">
        <h1 className="text-2xl xl:text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Select your plan
        </h1>
        <p className="  xl:text-lg text-CoolGray mb-5">
          You have the option of monthly or yearly billing.
        </p>
      </header>
        <CardList />
    </div>
    </main>
  );
};

export default SelectPlan;
