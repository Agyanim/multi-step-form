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
    <section className="flex w-[90%] mx-auto  lg:mx-0 mb-10 lg:mb-0 ">
    <div className="w-[100%] lg:ml-[6%] xl:ml-[2%]">
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
          <div className="absolute  top-[24rem] lg:top-[18rem]  w-[100%] bg-white">
            <div className="absolute w-[50%] left-[60%] lg:left-[58%] xl:left-[63%]">
              <PrimaryButton />
            </div>
            <div
              className=" absolute w-[100%] "
              onClick={goBackHandler}
            >
              <SecondaryButton />
            </div>
          </div>
        </form>
      </section>
    </div>
    </section>
  );
};

export default Summary;
