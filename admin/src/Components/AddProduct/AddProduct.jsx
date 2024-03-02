import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'

export const AddProduct = () => {


    const [image,setImage] = useState(false);
    const [ProductDetails, setProductDetails] = useState({
      name:"",
      image:"",
      category:"women",
      old_price:"",
      new_price:"",
      old:""
    })
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
      setProductDetails({...ProductDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async ()=>{
      console.log(ProductDetails);
      let responseData;
      let product = ProductDetails;

      let formData = new FormData();
      formData.append('product',image);

      await fetch('http://localhost:4000/upload', {
        method:'POST',
        headers:{
          Accept:'application/json',
        },
        body:formData,
      }).then((resp) => resp.json()).then((data)=>{responseData=data});

      if(responseData.success){
        product.image = responseData.image_url;
        console.log(product);
        await fetch('http://localhost:4000/addproduct', {
          method:'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(product),
        }).then((resp)=>resp.json()).then((data)=>{
          data.success?alert("Proizvod dodan"):alert("Failed")
        })
      }
    }

  return (
    <div className='add-product'>  
      <div className="addproduct-itemfield">
        <p>Naslov proizvoda</p>
        <input value = {ProductDetails.name} type="text" name='name' placeholder='Upiši ovdje' onChange={changeHandler}/>
      </div>
      <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Cijena</p>
            <input value = {ProductDetails.old_price} type="text" name='old_price' placeholder='Upiši ovdjee'onChange={changeHandler} />
          </div>
          <div className="addproduct-itemfield">
            <p>Ponudi cijenu koju želiš</p>
            <input value = {ProductDetails.new_price} type="text" name='new_price' placeholder='Upiši ovdjee' onChange={changeHandler}/>
          </div>
      </div>
      <div className="addprocut-itemfield">
        <p>Kategorija proizvoda</p>
          <select name="category" id="" className='add-product-selector' value = {ProductDetails.category} onChange={changeHandler}>
            <option value="women">Žene</option>
            <option value="men">Muškarci</option>
            <option value="kid">Djeca</option>
          </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img'alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>
      <button className='addproduct-btn' onClick={()=>{Add_Product()}}>Dodaj</button>
    </div>
  );
}
