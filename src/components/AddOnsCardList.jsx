import React from "react";
import AddOnsCard from "./AddOnsCard";
import PrimaryButton, { SecondaryButton } from "./Buttons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddOnsCardList = () => {
  const navigate = useNavigate();
  const addOnsServices = useSelector(
    (state) => state.addOns.value.addOnServices
  );
  const submitHandler = (e) => {
    e.preventDefault();
    // navigate("/summary");
  };
  const goBackHandler = () => {
    navigate("/selectplan");
  };

  const selectHandler = (e) => {
    const id = e.currentTarget.id;
    alert(id);
  };
  const renderCard = addOnsServices.map((card) => {
    return (
      <div key={card.id}>
        <AddOnsCard
          Service={card.service}
          Package={card.package}
          Cost={card.cost}
          id={card.id}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <form action="" onSubmit={submitHandler}>
        <section className="flex flex-col gap-4">{renderCard}</section>
        <section className="relative  mt-10">
          <div>
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
