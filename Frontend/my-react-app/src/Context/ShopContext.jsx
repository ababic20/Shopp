import React, { createContext } from 'react'
import allproducts from '../Components/Images/all_product';

export const ShopContext = createContext(null);
const ShopContextProvider = (props)=>{
    const contextValue = {allproducts}

    return(
        <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
    )
}

export default ShopContextProvider;



