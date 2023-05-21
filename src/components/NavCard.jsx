import React from "react";
import { Link, useLocation } from "react-router-dom";
import navDetails from "../utils/navDetails";

const NavCard = () => {
  const selectorDetails = navDetails;
  const { pathname } = useLocation();

  return (
    <section className="flex justify-center lg:justify-start pt-[2rem] lg:flex-col gap-4 lg:mt-5 lg:ml-5">
      <div>
        <Link to={"/"}>
          <label htmlFor="11" className="flex">
            <span
              className={
                pathname === "/"
                  ? "numbers  border-none text-black/70"
                  : " numbers bg-transparent"
              }
            >
              {selectorDetails[0].id}
            </span>
            <div className="hidden lg:flex ml-[2rem]  flex-col ">
              <span className="step"> {selectorDetails[0].step}</span>
              <span className="link"> {selectorDetails[0].link}</span>
            </div>
            <input type="radio" name="select" id="11" />
          </label>
        </Link>
      </div>
      <div>
        <Link to={`/${selectorDetails[1].path}`}>
          <label htmlFor="12" className="flex">
            <span
              className={
                pathname === `/${selectorDetails[1].path}`
                  ? "numbers border-none text-black/70"
                  : " numbers bg-transparent"
              }
            >
              {selectorDetails[1].id}
            </span>
            <div className=" hidden lg:flex ml-[2rem]  flex-col ">
              <span className="step"> {selectorDetails[1].step}</span>
              <span className="link"> {selectorDetails[1].link}</span>
            </div>
            <input type="radio" name="select" id="12" />
          </label>
        </Link>
      </div>
      <div>
        <Link to={`/${selectorDetails[2].path}`}>
          <label htmlFor="13" className="flex">
            <span
              className={
                pathname === `/${selectorDetails[2].path}`
                  ? "numbers border-none text-black/70"
                  : " numbers bg-transparent"
              }
            >
              {selectorDetails[2].id}
            </span>
            <div className=" hidden lg:flex ml-[2rem]  flex-col ">
              <span className="step"> {selectorDetails[2].step}</span>
              <span className="link"> {selectorDetails[2].link}</span>
            </div>
            <input type="radio" name="select" id="13" />
          </label>
        </Link>
      </div>
      <div>
        <Link to={`/${selectorDetails[3].path}`}>
          <label htmlFor="14" className="flex">
            <span
              className={
                pathname === `/${selectorDetails[3].path}` ||
                pathname === "/thanks"
                  ? "numbers border-none text-black/70"
                  : " numbers bg-transparent"
              }
            >
              {selectorDetails[3].id}
            </span>
            <div className=" hidden lg:flex ml-[2rem]  flex-col ">
              <span className="step"> {selectorDetails[3].step}</span>
              <span className="link"> {selectorDetails[3].link}</span>
            </div>
            <input type="radio" name="select" id="14" />
          </label>
        </Link>
      </div>
    </section>
  );
};

export default NavCard;
