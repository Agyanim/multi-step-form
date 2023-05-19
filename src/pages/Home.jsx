import React, { useState } from "react";
import PrimaryButton from "../components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import schema from "../utils/formValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPersonalInfo } from "../store/slices/personalIfoSlice";
import { setSelector } from "../store/slices/service";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store=useSelector(store=>store.personalInfo)
  const [personalInfo, setpersonalInfo] = useState(store)

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
    dispatch(setSelector(12))
  };

  return (
    <section className="flex bg-transparent rounded-md lg:rounded-none w-[80.5%] m-auto">
    <div className="flex flex-col  font-ubuntu lg:w-[100%] lg:ml-[-1rem] xl:ml-[-1rem]">
      <header className="mt-8 ">
        <h1 className="text-2xl xl:text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Personal info
        </h1>
        <p className="text-CoolGray lg:text-sm xl:text-lg">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <div className="flex justify-start items-start mt-4 w-[100%] relative">
        <form
          className="w-[100%] "
          action="#"
          method="post"
          onSubmit={handleSubmit(nextStepHandler)}
        >
          <div>
            <label
              className=" text-MarineBlue flex relative mb-[-12px] text-sm lg:text-base"
              htmlFor="name"
            >
              Name
              <span className="absolute right-0 text-red-500 ">
                {errors?.name?.message}
              </span>
            </label>
            <br />
            <input
              className={classNames(
                " mt-[-4rem]",
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
          <div className="mt-2">
            <lab text-sm lg:text-baseel
              className=" text-MarineBlue relative flex mb-[-22px] text-sm lg:text-base"
              htmlFor="email_address"
            >
              Email Address
              <span className="absolute  text-red-500 right-0">
                {errors?.email_address?.message}
              </span>
            </lab>
            <br />
            <input
              className={classNames(
                "",
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
          <div className="mt-2">
            <label
              className="  text-MarineBlue flex relative mb-[-30px] text-sm lg:text-base"
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
                " mt-2 mb-[2.5rem] lg:mb-0",
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
          <div className="absolute w-[45%] top-[25rem] left-[72%] lg:top-[18rem] xl:top-[17rem] lg:left-[72%] xl:left-[75%]">
            <PrimaryButton />
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Home;
