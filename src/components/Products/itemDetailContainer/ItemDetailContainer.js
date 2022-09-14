import data from "../listContainer/mock-data"
import { useEffect, useState } from "react";
import ItemDetailList from "./ItemDetailList";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const {productId} = useParams();
    const [item, setItem] = useState([]);

    const getData = (cosa) =>{
    return new Promise((resolve,reject)=>{
        const producto = data.find(item=>item.id === parseInt(cosa));
            resolve(producto);
            console.log(producto, "producto")
     })};

    useEffect(()=> {
        const getProducto = async()=>{
            const produ = await getData(productId);
            setItem(produ);
            console.log(produ,"produ final")
    }
    getProducto();
    },[productId])
    
    return(
        
      <div>
        <ItemDetailList product={item} />
      </div>
    )
}

export default ItemDetailContainer