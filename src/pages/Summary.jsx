import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton, { SecondaryButton } from '../components/Buttons'
import FinishingUp from '../components/FinishingUp'
// import RadioCard from '../components/radioCard'

const Summary = () => {
  const navigate =useNavigate()
  const submitHandler=(e)=>{
e.preventDefault();
  }
  return (
    <div className="w-[38.5vw]">
      <header className="mt-8 ml-10 mb-4">
        <h1 className="text-3xl text-MarineBlue font-ubuntu font-extrabold">
          Finishing up
        </h1>
        <p className="text-CoolGray">
          Double check everything looks Ok before confirming.
        </p>
      </header>
      <section className="">
        <form action="#" onSubmit={submitHandler}>

        <FinishingUp/>
        <div className="relative  top-5 w-[75%] m-auto">
          <div className='fixed right-[25vw] w-80 bottom-[22vh]'>
            <PrimaryButton />
          </div>
          <div className=" fixed mt-8 w-40 bottom-[22vh]" onClick={()=>{navigate("/addons")}}>
            
            <SecondaryButton />
          </div>
        </div>

        </form>
      </section>
    </div>
  )
}

export default Summary
