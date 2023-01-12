import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddOnsCardList from "../components/AddOnsCardList";
import { getIsYealy, updateAddOns } from "../store/slices/addOns";



const AddOns = () => {
  const dispatch = useDispatch();

  const isYearly = useSelector((store) => store.addOns.value.isYearly);
  useEffect(() => {
    // dispatch(getIsYealy(isYearly))
    // dispatch(updateAddOns());
  }, []);

  return (
    <div className="w-[38.5vw]">
      <header className="mt-8 ml-10 mb-4">
        <h1 className="text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Pick add-ons
        </h1>
        <p className="text-CoolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <section className="-ml-10">
        <AddOnsCardList />
      </section>
    </div>
  );
};

export default AddOns;
