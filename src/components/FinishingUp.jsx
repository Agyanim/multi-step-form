import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FinishingUp = () => {
  const selectedService = useSelector(
    (store) => store.service.value.selectedService
  );
  // getting variabls from redux store
  const isYearly = useSelector((store) => store.service.value.isYearly);
  const selectedAddOns = useSelector(
    (store) => store.addOns.value.searchResult
  );

  let price = 0; // this variable was used for the year subscription calculations
  let unitPrice = 0;
  let newprice = 0;
  let totalCost = 0; //this holds the total cost to be display on the summary page

  // summing up the selected addOns
  const sumOfSlectedAddOns = selectedAddOns.reduce(
    (prev, currentValue) => prev + currentValue.cost,
    0
  );
  // this was used to subtract the 2 month free for the year subscribers
  if (isYearly && selectedService) {
    unitPrice = selectedService.price / 12;
    newprice = unitPrice * 10;
  }
  if (isYearly && selectedService) {
    price = newprice;
    totalCost = sumOfSlectedAddOns + price;
  } else {
    price = selectedService.price;
    totalCost = sumOfSlectedAddOns + price;
  }


  // getting the final total to display on the summary page
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
              {isYearly ? price : selectedService?.price}
              {isYearly ? "/yr" : "/mo"}
            </span>
          </span>
          <span className=" text-PurplishBblue/70 font-bold cursor-pointer underline">
            <Link to="/selectplan">Change</Link>
          </span>
        </li>
        <hr className="h-[1.4px] bg-CoolGray my-4" />
        {renderSelectedAddOns}
      </ul>
      <div>
        <h1 className="flex justify-between mt-6 text-CoolGray ">
          Total{isYearly ? " (Per year)" : "( per month)"}
          <span className="text-PurplishBblue text-lg mr-[4%] lg:mr-[1.5%] font-bold">
            +${payable}
            {isYearly ? "/yr" : "/mo"}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default FinishingUp;
