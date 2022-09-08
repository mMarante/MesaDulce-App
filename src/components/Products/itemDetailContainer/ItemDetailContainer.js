import data from "../listContainer/mock-data";
import { useEffect, useState } from "react";
import ItemDetailList from "./ItemDetailList";


const ItemDetailContainer = () =>{
    const [item, setItem] = useState([]);

    const getData = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    });

    useEffect(()=> {
        getData.then((result)=> {
            setItem(result);
        })
    })
    
    return(
        
        <>
        
        { item.length > 0 ? (<ItemDetailList product={item[0]}/>):(
            <h2>Cargando...</h2>
        )}

        </>
    )
}

export default ItemDetailContainer