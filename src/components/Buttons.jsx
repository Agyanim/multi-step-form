import React from "react";

const PrimaryButton = () => {
  return (
      <button
        type="submit"
        className="absolute  px-4 py-2 rounded-md bg-MarineBlue text-white font-ubuntu hover:bg-PurplishBblue/80"
      >
        Next Step
      </button>
  );
};

export default PrimaryButton;

export const SecondaryButton = () => {
  return (
      <button className="absolute  -ml-4 mt-2 px-4 py-2 rounded-md  text-CoolGray font-ubuntu">
        Go Back
      </button>
  );
};
