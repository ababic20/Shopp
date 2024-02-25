import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Images/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount,allproducts,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Proizvodi</p>
            <p>Naslov</p>
            <p>Cijena</p>
            <p>Količina</p>
            <p>Ukupno</p>
            <p>Ukloni</p>
        </div>
        <hr/>
            
        {allproducts.map((e)=>{
           if(cartItems[e.id] > 0){
            return (
                <div key={e.id}>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>€{e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>€{e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr/>
                  
                    </div>
            );
            }
            return null;
           })}
           <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Ukupno košarica</h1>
                <div>
                    <div className="cartitems-total-item">
                            <p>Ukupno bez dostave</p>
                            <p>€{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                            <p>Dostava</p>
                            <p>Besplatno</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                            <h3>Ukupno</h3>
                            <h3>€{getTotalCartAmount()}</h3>
                    </div>
                </div>
                    <button>ZAVRŠI KUPNJU</button>
            </div>
                <div className="cartitems-promocode">
                    <p>Ako imaš promo kod, unesi ga ovdje</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo kod' />
                        <button>Potvrdi</button>
                    </div>
                </div>
            </div>
           </div>
  )
}
