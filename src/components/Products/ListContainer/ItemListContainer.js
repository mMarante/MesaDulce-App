import data from "./mock-data";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";


const ItemListContainer = () =>{
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    });

    useEffect(()=> {
        getData.then((result)=> {
            setItems(result);
        })
    })
    
    return(<>

        { items.length > 0 ? (<ItemList product={items}/>):(
            <h2>Cargando...</h2>
        )}

        </>
    )
}

export default ItemListContainer