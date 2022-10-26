import React,{useContext,useState} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {db} from "../../utils/firebase";
import {collection, addDoc, updateDoc, doc} from "firebase/firestore"
import "./cart.css"

const CartContainer = () => {
const {productCartList, removeItem, clear, getFinalPrice} = useContext(CartContext)
const [idOrder, setIdOrder] = useState("");

const updateOrder = ()=>{
    const queryRef= doc(db,"orders",)
    updateDoc(queryRef,{})
}
const sendOrder = (event)=>{
    event.preventDefault();

    const order={
        buyer:{
            name:event.target[0].value,
            phone:event.target[1].value,
            email:event.target[2].value
        },
        items:productCartList,
        total: getFinalPrice(),
    }
    console.log("order enviada",order)
    console.log(idOrder)
    const queryRef = collection(db,"orders");
    addDoc(queryRef,order).then(response=>setIdOrder(response.id));
    clear();
}

return (
    <div className="cartContainer">
        {
            productCartList.length>0 ?
            <div className="cart">
                {productCartList.map(item=>(
                    <div className="redux">
                    <h2>{item.title}</h2>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                    <p>SubTotal: ${item.quantityPrice}</p>
                    <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                </div>    
                ))}
                <h3>Precio Total: ${getFinalPrice()}</h3>
                <form className="form" onSubmit={sendOrder}>
                    <h2>Finalizar Orden</h2>
                    <label>Nombre:</label>
                    <input type="text"/>
                    <label>Telefono:</label>
                    <input type="text"/>
                    <label>Mail:</label>
                    <input type="text"/>
                    <div>
                    <button type='submit'>Comprar</button>
                    <button onClick={updateOrder}>Actualizar</button></div>
                {idOrder && <p>Su orden fue creada!!! id: {idOrder}</p>}
                </form>
                <button onClick={clear}>Limpiar Carrito</button>
            </div>
        :
        <>
        <div className="empty">
        <h1> Su carrito esta vacio!! 😱 </h1>
        {idOrder && <p><h4>Su orden fue creada!!!</h4> id: {idOrder}</p>}
         <Link to="/Productos">
            Seguir Comprando
         </Link> 
         </div>  
         </>
        }

    </div>
)}

export default CartContainer