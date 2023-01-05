import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggleMonthly, updatePrice } from "../store/slices/service";

const Toggle = ({isActive,setIsActive}) => {
  const dispatch=useDispatch()
  // const store=useSelector(store=>store.service.value.isMonthly)
  const toggleHandler = () => {
    setIsActive(!isActive);
    dispatch(toggleMonthly())

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
            { " translate-x-8 ": isActive }
          )}
        />
      </div>
    </div>
  );
};

export default Toggle;
