import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FinishingUp = () => {
  const selectedService = useSelector(
    (store) => store.service.value.selectedService
  );
  const isYearly = useSelector((store) => store.service.value.isYearly);
  const selectedAddOns = useSelector(
    (store) => store.addOns.value.searchResult
  );

  let price = 0;
  const sumOfSlectedAddOns = selectedAddOns.reduce(
    (sum, currentValue) => sum + currentValue.cost,
    0
  );
  selectedService ? (price = selectedService.price) : price;
  const totalCost = sumOfSlectedAddOns + price;
  let payable = 0;
  if (!totalCost) {
    payable = 0;
  } else payable = totalCost;

  const renderSelectedAddOns = selectedAddOns?.map((value) => {
    return (
      <ul key={value.id}>
        <li className="flex justify-between items-center mb-3 text-CoolGray">
          {value.service}
          <span className="text-MarineBlue">
            ${value.cost}
            {isYearly ? "/yr" : "/mo"}
          </span>
        </li>
      </ul>
    );
  });
  return (
    <div className="lg:w-[100%]">
      <ul className="bg-LightGray/40 w-[100%] p-4 rounded-md">
        <li className="text-MarineBlue font-bold">
          <span className="flex justify-between items-center  mb-1">
            {selectedService?.plan} {isYearly ? "(Yearly)" : "(Monthly)"}{" "}
            <span>
              ${selectedService?.price}
              {isYearly ? "/yr" : "/mo"}
            </span>
          </span>
          <span className=" text-PurplishBblue/70 font-bold cursor-pointer underline">
            <Link to="/selectplan" >Change</Link>
            
          </span>
        </li>
        <hr className="h-[1.4px] bg-CoolGray my-4" />
        {renderSelectedAddOns}
      </ul>
      <div>
        <h1 className="flex justify-between mt-6 text-CoolGray ">
          Total{isYearly ? " (Per year)" : "( per month)"}
          <span className="text-PurplishBblue text-lg mr-[25%] lg:mr-[1.5%] font-bold">
            +${payable}
            {isYearly ? "/yr" : "/mo"}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default FinishingUp;
