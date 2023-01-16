import React from 'react'
import FinishingUp from '../components/FinishingUp'
// import RadioCard from '../components/radioCard'

const Summary = () => {
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
        <FinishingUp/>
      </section>
    </div>
  )
}

export default Summary