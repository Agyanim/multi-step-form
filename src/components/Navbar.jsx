import React from "react";
import DesktopBgImage from "../assets/images/bg-sidebar-desktop.svg";
import NavCardList from "./NavCardList,";

const Navbar = () => {
  return (
    <>
      <div
        className="lg:flex lg:w-[100%] lg:h-[28.5rem] bg-PurplishBblue  rounded-md m-4 "
        style={{
          background: `url(${DesktopBgImage}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}  
      >
        <NavCardList/>
      </div>
    </>
  );
};

export default Navbar;
