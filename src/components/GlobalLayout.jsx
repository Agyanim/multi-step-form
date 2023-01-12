import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/globalLayout.css";

const GlobalLayout = () => {
  return (
    <div className="backgroun flex  items-center w-[100%] bg-LightGray justify-center h-screen">
      <section className="container flex  bg-white rounded-md my-4 w-[60%] h-[75%]">
        <div className="hidden  lg:flex w-[30%] bg-PurplishBblue  rounded-md m-4">
          <Navbar />
        </div>
        <div className="w-[60%] border-2 border-red-200 m-4 ">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default GlobalLayout;
