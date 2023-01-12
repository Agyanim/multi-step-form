import React from "react";

const PrimaryButton = () => {
  return (
    <div className="absolute right-0">
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-MarineBlue text-white font-ubuntu"
      >
        Next Step
      </button>
    </div>
  );
};

export default PrimaryButton;

export const SecondaryButton = () => {
  return (
    <div className="absolute  -ml-4 mt-2">
      <button className="px-4 py-2 rounded-md  text-CoolGray font-ubuntu">
        Go Back
      </button>
    </div>
  );
};
