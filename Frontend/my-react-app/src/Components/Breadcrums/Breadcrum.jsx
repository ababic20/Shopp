import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Images/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className='breadcrum'>
      Početna <img src={arrow_icon} alt="" /> Bostan <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
