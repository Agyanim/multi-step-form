import React from 'react'
import AddOnsCard from './AddOnsCard'
import addOnsDetails from '../utils/addOnsDetail'

const AddOnsCardList = () => {
  const selectHandler=(e)=>{
const id =e.currentTarget.id
alert(id)
  }
const renderCard=addOnsDetails.map(card=>{
    return  <div key={card.id}  >
      <AddOnsCard Service={card.service} Package={card.package} Cost={card.cost} id={card.id} />
    </div> 

})
  return <div className='flex flex-col justify-center items-center gap-4'
  >{renderCard}</div>
}

export default AddOnsCardList