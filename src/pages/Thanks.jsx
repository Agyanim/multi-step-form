import React from 'react'
import ThankYouImage from "../assets/images/icon-thank-you.svg"
const Thanks = () => {
  return (
    <main className='flex flex-col justify-center items-center text-center w-[90%] m-auto mt-[25%]'>
        <div className=''><img className='w-[4rem] mb-[2rem]'  src={ThankYouImage} alt="Thank you" /></div>
        <h1 className='mb-2 text-MarineBlue text-3xl font-bold'>Thank You</h1>
        <p className='text-black/50'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </main>
  )
}

export default Thanks