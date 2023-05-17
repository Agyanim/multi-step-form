import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelector } from "../store/slices/service";

const FinishingUp = () => {
  const dispatch=useDispatch()
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
const linkHandler=()=>{
  {dispatch(setSelector(12))}
}
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
    <div className="w-[94%]">
      <ul className="bg-LightGray/40 w-[80%] m-auto p-4 rounded-md">
        <li className="text-MarineBlue font-bold">
          <span className="flex justify-between items-center  mb-1">
            {selectedService?.plan} {isYearly ? "(Yearly)" : "(Monthly)"}{" "}
            <span>
              ${selectedService?.price}
              {isYearly ? "/yr" : "/mo"}
            </span>
          </span>
          <span className=" text-CoolGray font-light cursor-pointer underline">
            <Link to="/selectplan" onClick={linkHandler}>Change</Link>
            
          </span>
        </li>
        <hr className="h-[1.4px] bg-CoolGray my-4" />
        {renderSelectedAddOns}
      </ul>
      <div>
        <h1 className="flex justify-between mx-16 mt-6 text-CoolGray ">
          Total{isYearly ? " (Per year)" : "( per month)"}{" "}
          <span className="text-PurplishBblue font-bold text-lg">
            +${payable}
            {isYearly ? "/yr" : "/mo"}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default FinishingUp;
