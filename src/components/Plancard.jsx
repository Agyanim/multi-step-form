import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const Plancard = ({ Plan, Price, Image }) => {
  const { isYearly } = useSelector((store) => store.service.value);

  return (
    <div
      className="flex justify-center items-center w-36 h-40 relative border-[1px] border-LightGray p-4 rounded cursor-pointer transform duration-200 hover:scale-105"
    >
      <label
        className="flex flex-col gap-10  w-36 h-40 absolute "
        htmlFor="selectAddOns"
      >
        <input
          className="absolute w-[100%]  h-[100%] cursor-pointer appearance-none shadow-sm shadow-PurplishBblue/20 checked:border-[1px] checked:border-MarineBlue checked:rounded "
          type="radio"
          name="selectAddOns"
          value={Price}
        />
        <section className=" flex flex-col gap-10 m-4">
          <div>
            <img src={Image} alt="image" />
          </div>
          <div>
            <h1 className="text-MarineBlue font-bold ">{Plan}</h1>
            <p className="text-CoolGray font-ubuntu">
              &#36;{Price}
              {isYearly ? " /yr" : "/m"}
            </p>
          </div>
        </section>
      </label>
    </div>
  );
};

export default Plancard;
