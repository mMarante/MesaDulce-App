import { useState } from "react";
import "./counter.css"


const ItemCount = ({stock,initial,onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const suma = () =>{
        if (counter<stock){
            setCounter(counter + 1)};
        } 
        
        const resta = () =>{
            if (counter>1){
                setCounter(counter - 1)};
            } 
            
            return (<>
    <div className="counterContainer">   
        <div className="cardCounter"> 
        <button onClick={suma}>+</button>
        <h4>{counter}</h4>
        <button onClick={resta}>-</button>
        </div>
        <button className="btnAgregar" onClick={()=> onAdd(counter)}>Agregar</button>
    </div>
    </>)}

export default ItemCount