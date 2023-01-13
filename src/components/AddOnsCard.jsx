import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const AddOnsCard = ({ Service, Package, Cost, id }) => {
  const isYearly = useSelector((store) => store.addOns.value.isYearly);
  const checkRef = useRef();
  const addOnService = useSelector((store) => store.addOns.value.addOnServices);
  const [selectAddOns, setSelectAddOns] = useState([]);

  const changeHandler = () => {
    let selectAddOn = "";
    const id = checkRef.current.id;
    if (checkRef.current.checked == true) {
      selectAddOn = addOnService.find((addOn) => addOn.id == id);

      setSelectAddOns(([...selectAddOns,selectAddOn]));
      console.log(selectAddOns);
      
    } 
    
    if (checkRef.current.checked==false){
      selectAddOn = selectAddOns.filter((addOn) => addOn.id != id);
      // setSelectAddOns([...selectAddOns, selectAddOn]);
      console.log(selectAddOn);
    }
    // console.log(selectAddOns);
    // console.log(id);
  };
  return (
    <div className="flex justify-between items-center border-[1px] border-PurplishBblue w-[30vw] p-4 rounded-md cursor-pointer text-sm font-ubuntu">
      <section className="flex justify-center items-center gap-4">
        <input
          id={id}
          ref={checkRef}
          className="text-red-400"
          type="checkbox"
          name="select-add-ons"
          value={id}
          onChange={changeHandler}
        />
        <div className="">
          <h1 className="text-MarineBlue font-bold">{Service}</h1>
          <p className="text-CoolGray">{Package}</p>
        </div>
      </section>
      <p className="text-PurplishBblue">
        +${Cost} {isYearly ? "/yr" : "/m"}
      </p>
    </div>
  );
};

export default AddOnsCard;
