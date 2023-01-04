import React from "react";
import NavCard from "./NavCard";
import navDetails from "../utils/navDetails";

const NavCardList = () => {
  const renderCard = navDetails.map((detail) => {
    return <NavCard key={detail.id} Id={detail.id} Step={detail.step} Link={detail.link} Path={detail.path}/>;
  });
  return <div>{renderCard}</div>;
};

export default NavCardList;
