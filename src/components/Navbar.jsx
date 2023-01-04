import React from "react";
import DesktopBgImage from "../assets/images/bg-sidebar-desktop.svg";
import NavCardList from "./NavCardList,";

const Navbar = () => {
  return (
    <>
      <div
        className="w-[100%] h-[100%] rounded-md object-contain "
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
