import React from 'react'
import './NewColletions.css'
import new_colletion from '../Images/new_collections'
import Item from '../Item/Item'

export const NewColletions = () => {
  return (
    <div className='new-colletions'>
      <h1>Nove kolekcije</h1>
      <hr/>
      <div className="colletions">
        {new_colletion.map((item,i)=>{
          return <Item key={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
        })}
      </div>
    </div>
  )
}


