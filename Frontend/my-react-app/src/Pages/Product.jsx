import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import { Description } from '../Components/Description/Description';


export const Product = () => {
  const {allproducts} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allproducts.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product = {product}/>
      <Description/>
    </div>
  )
}
