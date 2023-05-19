import React, { useRef, useState } from "react";
import AddOnsCard from "./AddOnsCard";
import PrimaryButton, { SecondaryButton } from "./Buttons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedAddOns } from "../store/slices/addOns";
import { setSelector } from "../store/slices/service";

const AddOnsCardList = () => {
  const navigate = useNavigate();
  const checkRef = useRef();
  const addOnsServices = useSelector(
    (state) => state.addOns.value.addOnServices
  );

  const dispatch = useDispatch();
  // const [selectAddOns, setSelectAddOns] = useState([]);
  const [OnlineService, setOnlineService] = useState([]);
  const [largerStorage, setlargerStorage] = useState([]);
  const [customizableProfile, setcustomizableProfile] = useState([]);
  let addItem = [];

  const changeHandler = (e) => {
    let selectAddOn = "";
    const id = e.target.id;
    const checked = e.target.checked;
    const serviceName = e.target.name;
    if (serviceName === "Online service" && checked === true) {
      selectAddOn = addOnsServices.find((addOn) => addOn.id == id);
      setOnlineService([selectAddOn]);
    } else if (serviceName === "Online service" && checked == false) {
      selectAddOn = OnlineService.filter((addOn) => addOn.id != id);
      setOnlineService(selectAddOn);
    }

    if (serviceName === "Larger storage" && checked === true) {
      selectAddOn = addOnsServices.find((addOn) => addOn.id == id);
      setlargerStorage([selectAddOn]);
    } else if (serviceName === "Larger storage" && checked == false) {
      selectAddOn = largerStorage.filter((addOn) => addOn.id != id);
      setlargerStorage(selectAddOn);
    }
    if (serviceName === "Customizable Profile" && checked === true) {
      selectAddOn = addOnsServices.find((addOn) => addOn.id == id);
      setcustomizableProfile([selectAddOn]);
    } else if (serviceName === "Customizable Profile" && checked == false) {
      selectAddOn = customizableProfile.filter((addOn) => addOn.id != id);
      setcustomizableProfile(selectAddOn);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addItem = [];
    if (OnlineService.length > 0) {
      addItem.push(OnlineService[0]);
    }
    if (largerStorage.length > 0) {
      addItem.push(largerStorage[0]);
    }
    if (customizableProfile.length > 0) {
      addItem.push(customizableProfile[0]);
    }

    dispatch(selectedAddOns(addItem))
    navigate("/summary");
    dispatch(setSelector(14))
  };

  const goBackHandler = () => {
    navigate("/selectplan");
    dispatch(setSelector(12))
  };

  const renderCard = addOnsServices.map((card) => {
    return (
      <div key={card.id} onChange={changeHandler}>
        <AddOnsCard
          Service={card.service}
          Package={card.package}
          Cost={card.cost}
          id={card.id}
          Addon={card}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-4 w-[100%] relative">
      <form className="w-[100%]" onSubmit={submitHandler} >
        <section ref={checkRef} className="flex flex-col gap-4 ">
          {renderCard}
        </section>
        <section className="absolute w-[95%] lg:w-[100] top-[25rem] lg:top-10">
          <div className="absolute w-[80%]  left-[70%] lg:left-[56%]  xl:left-[67%]">
            <PrimaryButton />
          </div>
          <div onClick={goBackHandler}>
            <SecondaryButton />
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddOnsCardList;
