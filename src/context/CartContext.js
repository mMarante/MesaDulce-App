import {React,useState} from "react";


const CartContext = React.createContext();

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
            newArray[productPos].quantity = newArray[product].quantity + quantity;
            setProductCartList(newArray);
        }else{

        const newArray = [...productCartList];
        newArray.push(newProduct);
        setProductCartList(newArray);
    }
    }

    const removeItem = (itemId)=>{
        const newArray = productCartList.filter(product=product.id !== itemId);
        setProductCartList(newArray);
    }

    const clear=()=>{
        setProductCartList([]);
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem,clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default {CartContext,CartProvider}