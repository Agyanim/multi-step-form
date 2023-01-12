import classNames from "classnames";
import React, { useState } from "react";
import { set } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryButton, { SecondaryButton } from "../components/Buttons";
import CardList from "../components/CardList";
import Toggle from "../components/Toggle";

const SelectPlan = () => {
  const sent = (price) => {
    console.log(price);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // navigate("/addons")
  };
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
