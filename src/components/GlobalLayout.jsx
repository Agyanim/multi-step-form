import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const GlobalLayout = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default GlobalLayout;
