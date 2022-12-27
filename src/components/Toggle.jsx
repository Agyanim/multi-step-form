import React, { useState } from "react";
import classNames from "classnames";

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flex justify-center items-center w-1/6">
      <div
        onClick={toggleHandler}
        className={classNames("w-16 h-8 bg-blue-900 rounded-full relative border-none", {
          "bg-green-900": isActive,
        })}
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
