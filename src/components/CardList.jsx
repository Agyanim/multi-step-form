import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMonthly, updateService } from "../store/slices/service";
import cardDetail from "../utils/cardDetails";
import Plancard from "./Plancard";

const CardList = () => {
  const cardRef = useRef();
  const dispatch = useDispatch();
  const store=useSelector(store=>store.service.value.onlineService)
  const selectHandler = (e) => {
    const id = e.currentTarget.id;
    // dispatch(updateService(id));
    // alert(id);
  };

  const rederCard = store.map((detail) => {
    const image = Object.values(detail.image);
    return (
      <div key={detail.id} ref={cardRef} onClick={selectHandler} id={detail.id}>
        <Plancard Plan={detail.plan} Price={detail.price} Image={image[0]} />
      </div>
    );
  });
  return <div className="flex gap-4">{rederCard}</div>;
};

export default CardList;
