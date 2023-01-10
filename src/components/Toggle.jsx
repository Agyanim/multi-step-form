import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggleMonthly } from "../store/slices/service";
import { getIsYealy } from "../store/slices/addOns";

const Toggle = () => {
  const dispatch=useDispatch()
  const isYearly=useSelector(store=>store.service.value.isYearly)
  const toggleHandler = () => {
    dispatch(toggleMonthly())
    dispatch(getIsYealy())

  };
  return (
    <div className="flex justify-center items-center w-1/6">
      <div
        onClick={toggleHandler}
        className={classNames(
          "w-16 h-8 bg-MarineBlue rounded-full relative border-none",
        )}
      >
        <span
          className={classNames(
            "w-8 h-8 bg-white absolute rounded-full tranform duration-200 ease-out scale-[70%]",
            { " translate-x-8 ": isYearly }
          )}
        />
      </div>
    </div>
  );
};

export default Toggle;
