import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_cicon from '../../assets/cross_icon.png'

export const ListProduct = () => {
    const [allproducts, setallproducts] = useState([]);

    const fetchinfo = async()=>{
      await fetch('http://localhost:4000/allproducts')
      .then((res)=>res.json())
      .then((data)=>{setallproducts(data)});
    }
    useEffect(()=>{
      fetchinfo();
    },[])

    const remove_product = async (id) =>{
      await fetch('http://localhost:4000/removeproduct', {
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({id:id})
      })
      await fetchinfo();
    }


  return (
    <div className='list-product'>
      <h1>Svi proizvodi</h1>
      <div className="listproduct-format-main">
        <p>Proizvodi</p>
        <p>Naslov</p>
        <p>Stara cijena</p>
        <p>Nova cijena</p>
        <p>Kategorija</p>
        <p>Ukloni</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
          {allproducts.map((product,index)=>{
            return <> <div key={index} className="listproduct-format-main listproduct-format">
                  <img src={product.image} alt="" className="listproduct-product-icon" />
                  <p>{product.name}</p>
                  <p>€{product.old_price}</p>
                  <p>€{product.new_price}</p>
                  <p>{product.category}</p>
                  <img onClick={()=>{remove_product(product.id)}} className = 'listproduct-remove-icon'src={cross_cicon} alt="" />
            </div>
            <hr />
            </>
          })}
      </div>
    </div>
  )
}
