import React from "react";
import AddOnsCardList from "../components/AddOnsCardList";

const AddOns = () => {
  return (
    <div className="w-[50vw]">
      <header className="mt-8 ml-28 mb-4">
        <h1 className="text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Pick add-ons
        </h1>
        <p className="text-CoolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <section className="-ml-10">
        <AddOnsCardList />
      </section>
    </div>
  );
};

export default AddOns;
