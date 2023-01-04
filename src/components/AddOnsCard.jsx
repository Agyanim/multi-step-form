import React from 'react'

const AddOnsCard = ({Service,Package,Cost,id}) => {
  return (
    <div className='flex justify-between items-center border-[1px] border-PurplishBblue w-[30vw] p-4 rounded-md cursor-pointer text-sm font-ubuntu'>
        <section className='flex justify-center items-center gap-4'>
            <input id={id} className="text-red-400" type="checkbox" name="select-add-ons" />
            <div className=''>
                <h1 className="text-MarineBlue font-bold">{Service}</h1>
                <p className='text-CoolGray'>{Package}</p>
            </div>
        </section>
        <p className="text-PurplishBblue">{Cost}</p>
    </div>
  )
}

export default AddOnsCard