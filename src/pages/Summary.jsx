import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton, { SecondaryButton } from "../components/Buttons";
import FinishingUp from "../components/FinishingUp";
import { useDispatch } from "react-redux";
import { setSelector } from "../store/slices/service";

const Summary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBackHandler = () => {
    navigate("/addons");
    dispatch(setSelector(13));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/thanks");
  };
  return (
    <div className="w-[100%] lg:ml-[6%] xl:ml-[2.5%]">
      <header className="mt-8  mb-4">
        <h1 className="text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Finishing up
        </h1>
        <p className="text-CoolGray">
          Double check everything looks Ok before confirming.
        </p>
      </header>
      <section className="relative">
        <form  onSubmit={submitHandler}>
          <FinishingUp />
          <div className="relative  top-5 w-[100%] ">
            <div className="absolute w-[100%] top-[7.5rem] lg:left-[58%] xl:left-[63%]">
              <PrimaryButton />
            </div>
            <div
              className=" absolute w-[100%] top-[7rem]"
              onClick={goBackHandler}
            >
              <SecondaryButton />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Summary;
