import {useState} from "react";
import React from "react";


export const CartContext = React.createContext();

const CartProvider = ({children})=>{
    
    const[productCartList,setProductCartList] = useState([]);
    
    const isInCart = (productId)=>{
        const productExist = productCartList.some(item=>item.id === productId);
        return productExist
    }

    const addItem = (item, quantity)=>{
        const newProduct ={
            ...item,
            quantity
        }

        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product=> item.id === item.id );
            const newArray = [...productCartList];
            newArray[productPos].quantity = newArray[productPos].quantity + quantity;
            newArray[productPos].quantityPrice = newArray[productPos].quantity * newArray[productPos].price;
            setProductCartList(newArray);
        }else{

        const newArray = [...productCartList];
        newProduct.quantityPrice = newProduct.quantity * newProduct.price
        newArray.push(newProduct);
        setProductCartList(newArray);
    }
    }

    const removeItem = (itemId)=>{
        const newArray = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArray);
    }

    const clear=()=>{
        setProductCartList([]);
    }

    const getFinalPrice = ()=>{
        const finalPrice = productCartList.reduce((acc,item)=>acc+item.quantityPrice,0);
        return finalPrice;
    }

    const getFinalProducts =()=>{
        const finalProducts = productCartList.reduce((acc,item)=>acc+item.quantity,0);
        return finalProducts;
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem,clear,isInCart,getFinalPrice,getFinalProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider