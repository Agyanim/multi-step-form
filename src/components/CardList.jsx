import React, { useRef } from "react";
import cardDetail from "../utils/cardDetails";
import Plancard from "./Plancard";

const CardList = () => {
  const cardRef=useRef()

  const clickHandler=(e)=>{
    const id=e.currentTarget.id
    alert(id);
  }


  const rederCard = cardDetail.map((detail) => {
    const image=Object.values(detail.image)
    return (
      <div key={detail.id} ref={cardRef} onClick={clickHandler} id={detail.id}>
        <Plancard  Plan={detail.plan} Price={detail.price} Image={image[0]} />
      </div>
    );
  });
  return <div className="flex gap-4" >{rederCard}</div>;
};

export default CardList;
