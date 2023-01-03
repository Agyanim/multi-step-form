import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton, { SecondaryButton } from "../components/Buttons";
import CardList from "../components/CardList";
import Toggle from "../components/Toggle";

const SelectPlan = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();




  const goBackHandler = () => {
    navigate("/");
  };
  const nextStepHandler=()=>{
    navigate("/addons")
  }
  return (
    <div className="flex items-center justify-center flex-col w-[48vw]">
      <header className="mt-8 -ml-40">
        <h1 className="text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Select your plan
        </h1>
        <p className="text-CoolGray">
          You have the option of monthly or yearly billing.
        </p>
      </header>
      <div   className=" mt-5 -ml-10">
        <CardList />
      </div>
      <div className="w-[72%] h-10  mt-5 -ml-10">
        <section className="flex w-[100%] bg-LightGray/40 justify-center p-2 rounded h-[100%]">
          <span
            className={classNames("mr-2 text-MarineBlue font-bold", {
              "text-CoolGray font-thin": isActive,
            })}
          >
            Monthly
          </span>
          <Toggle isActive={isActive} setIsActive={setIsActive} />
          <span
            className={classNames("ml-2 text-CoolGray", {
              "font-bold text-[#02295A] ": isActive,
            })}
          >
            Year
          </span>
        </section>
      </div>
      <div className="relative w-[65%] mt-16">
        <div onClick={nextStepHandler}>
          <PrimaryButton />
        </div>
        <div className="" onClick={goBackHandler}>
          <SecondaryButton />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SelectPlan;
