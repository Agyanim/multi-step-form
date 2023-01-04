import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import cardDetail from "../utils/cardDetails";
import Plancard from "./Plancard";

const CardList = () => {
  const cardRef = useRef();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const id = e.currentTarget.id;
    dispatch(updateService(id));
    alert(id);
  };

  const rederCard = cardDetail.map((detail) => {
    const image = Object.values(detail.image);
    return (
      <div key={detail.id} ref={cardRef} onClick={clickHandler} id={detail.id}>
        <Plancard Plan={detail.plan} Price={detail.price} Image={image[0]} />
      </div>
    );
  });
  return <div className="flex gap-4">{rederCard}</div>;
};

export default CardList;
