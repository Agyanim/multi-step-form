import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const Plancard = ({ Plan, Price, Image,id }) => {
  const { isYearly } = useSelector((store) => store.service.value);
let newPrice=0
let unitPrice=Price/12
if (isYearly){
  
  newPrice=Price-(unitPrice*2)
}
else newPrice=Price
  return (
    <div
      className="flex  justify-center items-center w-[17rem] h-24 lg:w-[8rem] lg:h-44 xl:w-36  relative border-[1px] border-LightGray p-4 rounded cursor-pointer transform duration-200 hover:scale-105  overflow-hidden"
    >
      <label
        className="flex flex-col gap-10  w-[18rem] h-24 lg:w-[8rem] lg:h-44 xl:w-36  absolute  "
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
        <section className=" flex flex-row lg:flex-col gap-5 lg:gap-10 m-4 font-ubuntu">
          <div>
            <img src={Image} alt="image" />
          </div>
          <div>
            <h1 className="text-MarineBlue font-bold ">{Plan}</h1>
            <p className="text-CoolGray font-ubuntu">
              &#36;{newPrice}
              {isYearly ? " /yr" : "/m"}
            </p>
            <p className={isYearly?"text-MarineBlue":"hidden"}>2 month free</p>
          </div>
        </section>
      </label>
    </div>
  );
};

export default Plancard;
