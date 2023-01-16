import React from 'react'
import { render } from 'react-dom';
import { useSelector } from "react-redux";


const FinishingUp = () => {
    const selectedService=useSelector(store=>store.service.value.selectedService)
    const isYearly=useSelector(store=>store.service.value.isYearly)
    const selectedAddOns=useSelector(store=>store.addOns.value.searchResult)
    console.log(selectedAddOns);
    const renderSelectedAddOns=selectedAddOns.map(value=>{
       return(
        <ul key={value.id}>
          <li > <span>{value.service}</span> ${value.cost}{isYearly? "/y": "/m"}</li>
        </ul>
      )
    })
  return (
    <div>
      <ul>
        <li>
          <span>{selectedService.plan} {isYearly? "(Yearly)": "(Monthly)"} <span>${selectedService.price} {isYearly? "/y": "/m"}</span></span> <br />
          <span>Change</span>
          </li>
          {renderSelectedAddOns}
      </ul>
    </div>
  )
}

export default FinishingUp