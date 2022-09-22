import { useState } from "react";


const ItemCount = ({stock,initial,onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const suma = () =>{
        if (counter<stock){
            setCounter(counter + 1)};
        } 
        
        const resta = () =>{
            if (counter>0){
                setCounter(counter - 1)};
            } 
            
            return (<>
    <div className="counterContainer">
        <h3>Contador</h3>     
        <div className="cardCounter"> 
        <button onClick={suma}>+</button>
        <h2>{counter}</h2>
        <button onClick={resta}>-</button>
        </div>
        <button className="btnAgregar" onClick={()=> onAdd(counter)}>Agregar</button>
    </div>
    </>)}

export default ItemCount