import React from "react";
import { useNavigate } from "react-router-dom";
import AddOnsCardList from "../components/AddOnsCardList";
import PrimaryButton, { SecondaryButton } from "../components/Buttons";

const AddOns = () => {
  const navigate=useNavigate()
  const nextStepHandler=()=>{
navigate("/summary")
}
const goBackHandler=()=>{
    navigate("/selectplan")
    
  }

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
      <section className="relative w-[58%] mt-10 ml-32">
        <div onClick={nextStepHandler}>
          <PrimaryButton />
        </div>
        <div className="" onClick={goBackHandler}>
          <SecondaryButton />
        </div>
      </section>

    </div>
  );
};

export default AddOns;
