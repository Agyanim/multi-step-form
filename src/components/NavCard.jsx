import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import navDetails from "../utils/navDetails";
import { useDispatch, useSelector } from "react-redux";
import { setSelector } from "../store/slices/service";

const NavCard = () => {
  const navigate = useNavigate();
  const selector=useSelector(store=>store.service.value.selector)
  const dispatch=useDispatch()
  const selectorDetails = navDetails;
  console.log(selector);

  const navigationHandler=()=>{
    if (selector === 11) {
      navigate("/");
    }

    if (selector === 12) {
      navigate(`/${selectorDetails[1].path}/`);
    }
    if (selector === 13) {
      navigate(`/${selectorDetails[2].path}/`);
    }
    if (selector === 14) {
      navigate(`/${selectorDetails[3].path}/`);
    }

  }
  const getId = (e) => {
    const  id  = e.target.id;
    dispatch(setSelector(+id));
  };


  useEffect(() => {
    navigationHandler()
  }, [selector]);

  return (
    <section className="flex flex-col gap-4 mt-5 ml-5">
      <div>
        <label htmlFor="11" className="flex">
          <span
            className={
              selector === 11
                ? "numbers  border-none text-black/70"
                : " numbers bg-transparent"
            }
          >
            {selectorDetails[0].id}
          </span>
          <div className=" ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[0].step}</span>
            <span className="link"> {selectorDetails[0].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id="11"
            onClick={getId}
          />
        </label>
      </div>
      <div>
        <label htmlFor="12" className="flex">
          <span
            className={
              selector === 12 ? "numbers border-none text-black/70" : " numbers bg-transparent"
            }
          >
            {selectorDetails[1].id}
          </span>
          <div className=" ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[1].step}</span>
            <span className="link"> {selectorDetails[1].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id="12"
            onClick={getId}
          />
        </label>
      </div>
      <div>
        <label htmlFor="13" className="flex">
          <span
            className={
              selector === 13 ? "numbers border-none text-black/70" : " numbers bg-transparent"
            }
          >
            {selectorDetails[2].id}
          </span>
          <div className=" ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[2].step}</span>
            <span className="link"> {selectorDetails[2].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id="13"
            onClick={getId}
          />
        </label>
      </div>
      <div>
        <label htmlFor="14" className="flex">
          <span
            className={
              selector === 14 ? "numbers border-none text-black/70" : " numbers bg-transparent"
            }
          >
            {selectorDetails[3].id}
          </span>
          <div className=" ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[3].step}</span>
            <span className="link"> {selectorDetails[3].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id="14"
            onClick={getId}
          />
        </label>
      </div>
    </section>
  );
};

export default NavCard;
