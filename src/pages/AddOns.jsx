import React from "react";
import AddOnsCardList from "../components/AddOnsCardList";

const AddOns = () => {
  return (
    <main className="flex w-[90%]  mx-auto mb-10">
    <div className="lg:ml-[%] xl:ml-[2%]  lg:w-[100%]">
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
    </main>
  );
};

export default AddOns;
