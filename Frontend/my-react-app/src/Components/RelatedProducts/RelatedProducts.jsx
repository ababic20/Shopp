import React from 'react'
import './RelatedProducts.css'
import data_product from '../Images/data'
import Item from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Preporučeni proizvodi</h1>
            <hr/>
            <div className="realtedproducts-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
                })}
            </div>
    </div>
  )
}
