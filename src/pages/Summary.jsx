import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const selectedService = useSelector(
    (store) => store.service.value.selectedService
  );
  const selectedAddOns = useSelector(
    (store) => store.addOns.value.searchResult
  );
  return <div className="w-[50vw]"></div>;
};

export default Summary;
