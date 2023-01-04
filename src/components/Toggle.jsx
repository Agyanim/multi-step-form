import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { toggle } from "../store/slices/services";

const Toggle = ({isActive,setIsActive}) => {
  const dispatch=useDispatch()
  const toggleHandler = () => {
    setIsActive(!isActive);
    dispatch(toggle())
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
