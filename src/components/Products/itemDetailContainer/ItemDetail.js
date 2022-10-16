import{useState,useContext} from 'react';
import "./itemDetail.css";
import ItemCount from "../../counter/ItemCount";
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ({items}) => {
  
  const {addItem} = useContext(CartContext);
  
  const onAdd=(counter)=>{
    addItem(items,counter)
  }
  return (
    <>
    <div className="itemDetail">
            <img src={items.img} alt={items.title}/>
            <div className="detail">
            <h2>{items.title}</h2>
            <h3>Descripcion: {items.description}</h3>
            <h3>Precio: ${items.price} </h3>
            <h3>Stock: {items.stock} </h3>
            </div>
    <ItemCount stock={items.stock} initial={1} onAdd={onAdd}/>
    </div>

    </>
    
  )
}

export default ItemDetail