import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import cardDetail from "../utils/cardDetails";
import Plancard from "./Plancard";

const CardList = () => {
  const cardRef = useRef();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.service.value.initialState);
  const isMonthly = useSelector((store) => store.service.value.isMonthly);
  console.log(store);

  const clickHandler = (e) => {
    const id = e.currentTarget.id;
    const service = store.find((value) => value.id === +id);
    if (service) {
      if (isMonthly == false) {
        const update = store.map((checkService) =>
          checkService.id === service.id
            ? (checkService = {
                id: service.id,
                plan: service.plan,
                price: service.price * 12,
                image: service.Image,
              })
            : {
                id: checkService.id,
                plan: checkService.plan,
                price: checkService.price,
                image: service.image,
              }
        );
        // service=()
        console.log(update);
      }
    }
    alert(id);
    console.log(service);
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
