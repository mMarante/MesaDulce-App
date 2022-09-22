import React,{useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
const {productCartList, removeItem, clear, getFinalPrice} = useContext(CartContext)
return (
    <div>
        {
            productCartList.length>0 ?
            <div>
                {productCartList.map(item=>(
                <div>
                    <h2>{item.name}</h2>
                    <p>Cantidad:{item.quantity}</p>
                    <p>Precio:{item.price}$</p>
                    <p>Total:{item.quantityPrice}</p>
                    <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                </div>    
                ))}
                <button onClick={clear}>Limpiar Carrito</button>
                <p>Precio Total:{getFinalPrice()}</p>
            </div>
        :
        <>
        <h1>el carrito esta vacio</h1>
         <Link to="/Productos">
            Seguir Comprando!!
         </Link>   
         </>
        }

    </div>
)}

export default CartContainer