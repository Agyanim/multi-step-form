import React from "react";
import NavCard from "./NavCard";
import navDetails from "../utils/navDetails";

const NavCardList = () => {
  const renderCard = navDetails.map((detail) => {
    return <NavCard/>;
  });
  return <NavCard/>;
};

export default NavCardList;
// ne<NavCard key={detail.id} Id={detail.id} Step={detail.step} Link={detail.link} Path={detail.path}/>