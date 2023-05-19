import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const Plancard = ({ Plan, Price, Image,id }) => {
  const { isYearly } = useSelector((store) => store.service.value);

  return (
    <div
      className="flex  justify-center items-center w-[18rem] h-20 lg:w-[8rem] lg:h-40 xl:w-36 xl:h-40 relative border-[1px] border-LightGray p-4 rounded cursor-pointer transform duration-200 hover:scale-105  overflow-hidden"
    >
      <label
        className="flex flex-col gap-10  w-[18rem] h-20 lg:w-[8rem] lg:h-40 xl:w-36 xl:h-40 absolute  "
        htmlFor="selectAddOns"
      >
        <input
          className="absolute w-[100%]  h-[100%] cursor-pointer appearance-none shadow-sm shadow-PurplishBblue/20 checked:border-[1px] checked:border-MarineBlue checked:rounded checked:bg-LightGray/40"
          type="radio"
          name="selectAddOns"
          value={Price}
          required
          id={id}
        />
        {/* Items and icons for selecting plans */}
        <section className=" flex flex-row lg:flex-col gap-5 lg:gap-10 m-4">
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
