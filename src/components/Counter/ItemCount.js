import { useState } from "react"

const ItemCount = ({stock,initial}) => {
    const [counter, setCounter] = useState(initial);
    const suma = () =>{
        if (counter<stock){
        setCounter(counter + 1)};
    } 

    const resta = () =>{
        if (counter>0){
        setCounter(counter - 1)};
    } 
    
    return (

    <>
    <div className="counterContainer">
    <h3>Contador</h3>     
    <div className="cardCounter"> 
    <button onClick={suma}>+</button>
    <h2>{counter}</h2>
    <button onClick={resta}>-</button>
    </div>
    </div>
    </>
  )
}

export default ItemCount