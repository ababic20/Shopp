import React, { createContext, useState } from 'react'
import allproducts from '../Components/Images/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < allproducts.length +1; index++){
        cart[index]= 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue = {allproducts, cartItems,addToCart,removeFromCart};

    console.log(cartItems);
    return(
        <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
    )
}

export default ShopContextProvider;



