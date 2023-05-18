import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/globalLayout.css";

const GlobalLayout = () => {
  return (
    <div className="flex items-center lg:min-h-[100vh] lg:min-w-[100vw] lg:w-[100vw] bg-LightGray justify-center">
      <section className="flex flex-col lg:flex-row justify-between bg-white rounded-md my-4 max-w-[80%] lg:w-[75%] lg:h-[80%] xl:w-[65%] xl:h-[80%]">
        <div className="">
          <Navbar />
        </div>
        <div className="border border-red-600 lg:w-[65%] xl:w-[66%] ">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default GlobalLayout;
