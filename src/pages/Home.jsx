import React, { useState } from "react";
import PrimaryButton from "../components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import schema from "../utils/formValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPersonalInfo } from "../store/slices/personalIfoSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [personalInfo, setpersonalInfo] = useState({
    name:"",
    email_address:"",
    phone_number:"" 
  })

  const changeHandler=(e)=>{
    const value=e.target.value
    setpersonalInfo({...personalInfo,[e.target.name]:value})
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onsubmit",
    criticalMode: "all",
    revalidateMode: "onchange",

    resolver: yupResolver(schema),
  });

  const nextStepHandler = (e) => {
    dispatch(
      addPersonalInfo({
        id: new Date().getMilliseconds(),
        name:personalInfo.name ,
        emailAddress:personalInfo.email_address,
        phoneNumber:personalInfo.phone_number,
      })
    );
    navigate("/selectplan");
  };

  return (
    <div className="flex flex-col items-center justify-center font-ubuntu w-[50vw] -ml-10">
      <header className="mt-8">
        <h1 className="text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Personal info
        </h1>
        <p className="text-CoolGray">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <div className="flex justify-start items-start mt-4 w-[32vw]">
        <form
          className=""
          action="#"
          method="post"
          onSubmit={handleSubmit(nextStepHandler)}
        >
          <div>
            <label
              className=" text-MarineBlue flex relative mb-[-12px]"
              htmlFor="name"
            >
              Name
              <span className="absolute right-0 text-red-500">
                {errors?.name?.message}
              </span>
            </label>
            <br />
            <input
              className={classNames(
                "w-[32vw] p-2 border-2 rounded-md border-CoolGray mt-[-4rem]",
                { "border-2 border-red-400": errors?.name }
              )}
              type="text"
              name="name"
              {...register("name")}
              value={personalInfo.name}
              onChange={changeHandler}
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="mt-4">
            <label
              className=" text-MarineBlue relative flex mb-[-22px]"
              htmlFor="email_address"
            >
              Email Address{" "}
              <span className="absolute  text-red-500 right-0">
                {errors?.email_address?.message}
              </span>
            </label>
            <br />
            <input
              className={classNames(
                "w-[32vw] p-2 border-2 rounded-md border-CoolGray",
                {
                  "border-2 border-red-400": errors?.email_address,
                }
              )}
              type="text"
              name="email_address"
              {...register("email_address")}
              value={personalInfo.email_address}
              onChange={changeHandler}
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="mt-4">
            <label
              className="  text-MarineBlue flex relative mb-[-30px]"
              htmlFor=""
            >
              Phone Number
              <span className="absolute right-0 text-red-500">
                {errors?.phone_number?.message}
              </span>
            </label>
            <br />
            <input
              className={classNames(
                "w-[32vw] p-2 border-2 rounded-md border-CoolGray mt-2",
                { "border-2 border-red-400": errors?.phone_number }
              )}
              type="text"
              name="phone_number"
              {...register("phone_number")}
              value={personalInfo.phone_number}
              onChange={changeHandler}
              placeholder="e.g. +1 234 567 890"
            />
          </div>
          <div className="relative w-[100%] top-12">
            <PrimaryButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
