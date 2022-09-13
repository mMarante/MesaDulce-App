import data from "../listContainer/mock-data";
import { useEffect, useState } from "react";
import ItemDetailList from "./ItemDetailList";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const {productId} = useParams();
    console.log(productId,"productId")
    const [item, setItem] = useState([]);

    const getData = (id) =>{
    return new Promise((resolve,reject)=>{
        const producto = data.find(product=>product.id === parseInt(id));
            resolve(producto)
     })};

    useEffect(()=> {
        const getProducto = async()=>{
            const producto = await getData(productId);
            setItem(producto);
            console.log(producto)
    }
    getProducto();
    },[productId])
    
    return(
        
      <div>
        <ItemDetailList product={producto} />
      </div>
    )
}

export default ItemDetailContainer