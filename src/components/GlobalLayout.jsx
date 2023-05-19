import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/globalLayout.css";

const GlobalLayout = () => {
  return (
    <div className="flex items-center lg:min-h-[100vh] lg:min-w-[100vw] z-0 lg:w-[100vw] bg-LightGray justify-center">
      <section className="flex flex-col lg:flex-row z-0  lg:justify-between bg-LightGray lg:bg-white h-[80vh] lg:my-4 lg:max-w-[80%] lg:w-[75%] lg:h-[80%] xl:w-[65%] xl:h-[80%]">
        <div className="">
          <Navbar />
        </div>
        <div className="border-none  lg:w-[65%] xl:w-[70%] mt-[-22%] bg-white rounded-lg lg:rounded-none lg:mt-0 w-[85%] m-auto lg:m-0">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default GlobalLayout;
