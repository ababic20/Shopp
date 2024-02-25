import React, { createContext, useState } from 'react'
import allproducts from '../Components/Images/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < allproducts.length + 1; index++){
        cart[index]= 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        console.log("Prije ažuriranja košarice:", cartItems);
      
        setCartItems(prev => {
          const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
          console.log("Nakon ažuriranja košarice:", updatedCart);
          return updatedCart;
        });
      };
      
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = allproducts.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            } 
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItems = 0;
        for(const item in cartItems){
                if(cartItems[item]>0){
                    totalItems += cartItems[item];
                }
        }
        return totalItems;
    }


    const contextValue = {getTotalCartItems, getTotalCartAmount, allproducts, cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
    )
}

export default ShopContextProvider;



