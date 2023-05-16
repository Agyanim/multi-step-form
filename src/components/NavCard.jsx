import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SelectPlan from "../pages/SelectPlan";
import navDetails from "../utils/navDetails";

const NavCard = () => {
  const navigate = useNavigate();
  const [selector, setSelector] = useState();
  const selectorDetails = navDetails;

  const getId = (e) => {
    const id = e.target.id;
    const newId = Number(id);
    setSelector(newId);
    if (selector === 1) {
      navigate("/");
    }

    if (selector === 2) {
      navigate(`/${selectorDetails[1].path}/`);
    }
    if (selector === 3) {
      navigate(`/${selectorDetails[2].path}/`);
    }
    if (selector === 4) {
      navigate(`/${selectorDetails[3].path}/`);
    }
  };
  console.log(selector);

  return (
    <section className="flex flex-col gap-4 mt-5 ml-5">
      <div>
        <label htmlFor={selectorDetails[0].id} className="flex">
          <span
            className={
              selector === 1
                ? "numbers  border-none"
                : " numbers bg-transparent"
            }
          >
            {selectorDetails[0].id}
          </span>
          <div className="text-red-700 ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[0].step}</span>
            <span className="link"> {selectorDetails[0].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id={selectorDetails[0].id}
            onClick={getId}
          />
        </label>
      </div>
      <div>
        <label htmlFor={selectorDetails[1].id} className="flex">
          <span
            className={
              selector === 2 ? "numbers border-none" : " numbers bg-transparent"
            }
          >
            {selectorDetails[1].id}
          </span>
          <div className="text-red-700 ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[1].step}</span>
            <span className="link"> {selectorDetails[1].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id={selectorDetails[1].id}
            onClick={getId}
          />
        </label>
      </div>
      <div>
        <label htmlFor={selectorDetails[2].id} className="flex">
          <span
            className={
              selector === 3 ? "numbers border-none" : " numbers bg-transparent"
            }
          >
            {selectorDetails[2].id}
          </span>
          <div className="text-red-700 ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[2].step}</span>
            <span className="link"> {selectorDetails[2].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id={selectorDetails[2].id}
            onClick={getId}
          />
        </label>
      </div>
      <div>
        <label htmlFor={selectorDetails[3].id} className="flex">
          <span
            className={
              selector === 4 ? "numbers border-none" : " numbers bg-transparent"
            }
          >
            {selectorDetails[3].id}
          </span>
          <div className="text-red-700 ml-[2rem] flex flex-col ">
            <span className="step"> {selectorDetails[3].step}</span>
            <span className="link"> {selectorDetails[3].link}</span>
          </div>
          <input
            type="radio"
            name="select"
            id={selectorDetails[3].id}
            onClick={getId}
          />
        </label>
      </div>
    </section>
    // <div  key={Id} className="flex gap-4 m-4 items-start justify-start text-sm group">
    //   <label htmlFor={Id} className="rounded-full text-white border-2 border-white w-8 h-8 flex justify-center items-center group-checked:bg-cyan-300 transform duration-200">
    //     {Id}
    //     <input type="radio" name="select" id={Id} onClick={getId} />
    //   </label>
    //   <div>
    //     <h1 className="text-LightGray">{Step}</h1>
    //     <NavLink  to={Path} className="text-white font-bold" id={Id} >
    //       {/* <span>hi</span> */}

    //       {Link}
    //     </NavLink>
    //   </div>
    // </div>
  );
};

export default NavCard;
// { Id, Step, Link, Path }
