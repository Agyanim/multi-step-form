import React from "react";
import AddOnsCardList from "../components/AddOnsCardList";

const AddOns = () => {
  return (
    <div className="lg:ml-[10%] xl:ml-[2%]">
      <header className="mt-8 mb-4">
        <h1 className=" lg:text-2xl xl:text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Pick add-ons
        </h1>
        <p className="text-CoolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <section className="">
        <AddOnsCardList />
      </section>
    </div>
  );
};

export default AddOns;
