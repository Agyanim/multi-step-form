import React from "react";
import NavCardList from "./NavCardList,";

const Navbar = () => {
  return (
    <>
      <section
        className=" nav_background w-[100vw] h-[12rem] lg:flex lg:w-[100%] lg:h-[28rem] bg-PurplishBblue  lg:rounded-md lg:m-4  "
      >
        <NavCardList/>
      </section>
    </>
  );
};

export default Navbar;
