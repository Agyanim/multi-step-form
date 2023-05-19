import React from "react";
import NavCardList from "./NavCardList,";

const Navbar = () => {
  return (
    <>
      <div
        className=" nav_background w-[100%] h-[12rem] lg:flex lg:w-[100%] lg:h-[28rem] bg-PurplishBblue  lg:rounded-md lg:m-4  "
      >
        <NavCardList/>
      </div>
    </>
  );
};

export default Navbar;
