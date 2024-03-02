import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to = {'/addproduct'} style = {{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
                <p>Dodaj proizvod</p>
            </div>
        </Link>
        <Link to = {'/list_product'} style = {{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Prikaži proizvode</p>
            </div>
        </Link>
    </div>
  )
}
