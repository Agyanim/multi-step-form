import classNames from "classnames";
import React, { useRef  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedService, setSelector} from "../store/slices/service";
import PrimaryButton, { SecondaryButton } from "./Buttons";
import Plancard from "./Plancard";
import Toggle from "./Toggle";

const CardList = ({ sent }) => {
  const isYearly = useSelector((store) => store.service.value.isYearly);
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const cardRef = useRef();
  const { onlineService } = useSelector((store) => store.service.value);
  let id="";
  const selectHandler = (e) => {
    id=e.target.id
  };
  const goBackHandler = () => {
    navigate("/");
    dispatch(setSelector(11))
  };
 const submitHandler=(e)=>{
  e.preventDefault()
  dispatch(getSelectedService(+id) );
   navigate("/addons")
   dispatch(setSelector(13))
 }


  const rederCard = onlineService.map((detail) => {
    const image = Object.values(detail.image);
    return (
      <div key={detail.id} ref={cardRef} onClick={selectHandler} >
        <Plancard
          Plan={detail.plan}
          Price={detail.price}
          Image={image[0]}
          sent={sent}
          id={detail.id}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <form action="" onSubmit={submitHandler}>
        <section className="flex flex-col lg:flex-row gap-4">{rederCard}</section>
        <div className="w-[100%] h-10  mt-5 ">
          <section className="flex w-[100%] bg-LightGray/40 justify-center p-2 rounded h-[100%]">
            <span
              className={classNames("mr-2 text-MarineBlue font-bold", {
                "text-CoolGray font-thin": isYearly,
              })}
            >
              Monthly
            </span>
            <Toggle />
            <span
              className={classNames("ml-2 text-CoolGray", {
                "font-bold text-[#02295A] ": isYearly,
              })}
            >
              Year
            </span>
          </section>
        </div>
        <div className="relative  top-16">
          <div>
            <PrimaryButton />
          </div>
          <div className="" onClick={goBackHandler}>
            <SecondaryButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardList;
