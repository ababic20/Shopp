import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Images/dropdown_icon.png'
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {allproducts} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className='banner'>
        <img src={props.banner} alt="" />
      </div> 
      <div className='shopcategory-indexSort'>
        <p>
          <span>Prikazivanje 1-12</span> od 36 proizvoda
        </p>
        <div className='shopcategory-sort'>
            Sortirano prema <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
          }
          else{
            return null;
          }
        })}
        <div>
          <div className="shopcategory-loadmore">
            Učitaj više
          </div>
        </div>
      </div>
    </div>
  )
}
